"use client";

import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

// Port of github.com/TheKents0209/portfolio-demo. "Before" is the naive starter
// (one useState for all prices); "After" is the optimised Redux version. Both get the
// same price batches. The WebSocket server is replaced by a stream simulated in the browser.

type Currency = "EUR" | "USD";
type Position = { symbol: string; name: string; quantity: number; currency: Currency };
type Prices = Record<string, number>;
type Stats = { renders: number; needed: number };
type RecordRender = (needed: boolean) => void;

const positions: Position[] = [
  { symbol: "LHV1T", name: "LHV Group", quantity: 1200, currency: "EUR" },
  { symbol: "TAL1T", name: "Tallink Grupp", quantity: 3000, currency: "EUR" },
  { symbol: "TKM1T", name: "Tallinna Kaubamaja", quantity: 150, currency: "EUR" },
  { symbol: "EFT1T", name: "Enefit Green", quantity: 400, currency: "EUR" },
  { symbol: "CPA1T", name: "Coop Pank", quantity: 500, currency: "EUR" },
  { symbol: "AAPL", name: "Apple", quantity: 12, currency: "USD" },
  { symbol: "MSFT", name: "Microsoft", quantity: 8, currency: "USD" },
  { symbol: "NOVO", name: "Novo Nordisk", quantity: 30, currency: "EUR" },
  { symbol: "ASML", name: "ASML", quantity: 4, currency: "EUR" },
  { symbol: "NOKIA", name: "Nokia", quantity: 2500, currency: "EUR" },
];

// Integer cents. EURUSD is USD per 1 EUR × 100 000, so 108345 = 1.08345.
const startPrices: Prices = {
  LHV1T: 312,
  TAL1T: 289,
  TKM1T: 1078,
  EFT1T: 2215,
  CPA1T: 1834,
  AAPL: 22841,
  MSFT: 41295,
  NOVO: 6930,
  ASML: 68120,
  NOKIA: 452,
  EURUSD: 108345,
};

const TICK_MS = 350;
const FLUSH_MS = 1000;

// Random walk: every tick one symbol moves by ~0.4%. Ticks are buffered and handed
// over as one batch per second, the same for both modes. Returns a stop function.
function startPriceStream(onBatch: (batch: Prices) => void) {
  const prices = { ...startPrices };
  const symbols = Object.keys(prices);
  let pending: Prices = {};
  const tick = setInterval(() => {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const step = Math.max(1, Math.round(prices[symbol] * 0.004));
    prices[symbol] = Math.max(1, prices[symbol] + (Math.random() < 0.5 ? -step : step));
    pending[symbol] = prices[symbol];
  }, TICK_MS);
  const flush = setInterval(() => {
    if (Object.keys(pending).length === 0) return;
    onBatch(pending);
    pending = {};
  }, FLUSH_MS);
  return () => {
    clearInterval(tick);
    clearInterval(flush);
  };
}

function totalEurCents(prices: Prices) {
  const rate = prices.EURUSD;
  if (rate === undefined) return undefined;
  let eurCents = 0;
  for (const p of positions) {
    const price = prices[p.symbol];
    if (price === undefined) return undefined;
    const value = price * p.quantity;
    eurCents += p.currency === "EUR" ? value : Math.round((value * 100_000) / rate);
  }
  return eurCents;
}

const formatters: Record<Currency, Intl.NumberFormat> = {
  EUR: new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }),
  USD: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
};
const formatCents = (cents: number | undefined, currency: Currency) =>
  cents === undefined ? "..." : formatters[currency].format(cents / 100);

function RowView({
  position,
  price,
  recordRender,
}: {
  position: Position;
  price: number | undefined;
  recordRender: RecordRender;
}) {
  // Price direction, from the original: a new key on the span restarts the flash.
  const [prev, setPrev] = useState(price);
  const [dir, setDir] = useState<"up" | "down" | null>(null);
  if (price !== prev) {
    setPrev(price);
    if (prev !== undefined && price !== undefined) setDir(price > prev ? "up" : "down");
  }

  // After every commit: bump the counter, pulse it, and record whether the render was needed.
  // A render is needed when it is the first one (filling the table) or the price changed.
  const thisRender = {};
  const lastRender = useRef<object | null>(null);
  const rendersCell = useRef<HTMLTableCellElement>(null);
  const renders = useRef(0);
  const lastPrice = useRef(price);
  useEffect(() => {
    // StrictMode (dev) replays mount effects without a new render; don't count that.
    if (lastRender.current === thisRender) return;
    const cell = rendersCell.current!;
    recordRender(lastRender.current === null || lastPrice.current !== price);
    lastRender.current = thisRender;
    renders.current++;
    lastPrice.current = price;
    cell.textContent = String(renders.current);
    cell.classList.remove("render-flash");
    void cell.offsetWidth;
    cell.classList.add("render-flash");
  });

  const value = price === undefined ? undefined : price * position.quantity;
  return (
    <tr className="border-border border-t">
      <td className="truncate py-2 pr-2 pl-3">{position.name}</td>
      <td className="hidden py-2 pr-2 sm:table-cell">{position.quantity}</td>
      <td className="py-2 pr-2">
        <span key={price} className={dir ? `price-${dir} rounded px-1` : "px-1"}>
          {formatCents(price, position.currency)}
        </span>
      </td>
      <td className="py-2 pr-2">{formatCents(value, position.currency)}</td>
      <td ref={rendersCell} className="text-muted-foreground py-2 pr-3" />
    </tr>
  );
}

function PriceTable({ total, children }: { total: ReactNode; children: ReactNode }) {
  return (
    <table className="w-full table-fixed text-sm tabular-nums">
      <thead className="text-muted-foreground text-xs">
        <tr className="text-right [&>th]:py-2 [&>th]:pr-2 [&>th]:font-normal">
          <th className="w-[34%] pl-3 text-left">Stock</th>
          <th className="hidden w-[12%] sm:table-cell">Qty</th>
          <th>Price</th>
          <th>Value</th>
          <th className="w-[16%] pr-3!">Renders</th>
        </tr>
      </thead>
      <tbody className="text-right [&_td:first-child]:text-left">{children}</tbody>
      <tfoot>
        <tr className="border-border border-t text-right font-medium">
          <td className="py-2 pr-2 pl-3 text-left">Total</td>
          <td className="hidden sm:table-cell" />
          <td colSpan={2} className="py-2 pr-2">
            {total}
          </td>
          <td />
        </tr>
      </tfoot>
    </table>
  );
}

// Before: every batch replaces the whole map in one useState, so every row re-renders.
function UseStateTable({ recordRender }: { recordRender: RecordRender }) {
  const [prices, setPrices] = useState(startPrices);
  useEffect(() => startPriceStream((batch) => setPrices((p) => ({ ...p, ...batch }))), []);

  return (
    <PriceTable total={formatCents(totalEurCents(prices), "EUR")}>
      {positions.map((p) => (
        <RowView key={p.symbol} position={p} price={prices[p.symbol]} recordRender={recordRender} />
      ))}
    </PriceTable>
  );
}

// After: each batch is dispatched to Redux; each row selects its own price.
const pricesSlice = createSlice({
  name: "prices",
  initialState: {} as Prices,
  reducers: {
    snapshotReceived: (_state, action: PayloadAction<Prices>) => action.payload,
    ticksReceived: (state, action: PayloadAction<Prices>) => ({ ...state, ...action.payload }),
  },
});
const { snapshotReceived, ticksReceived } = pricesSlice.actions;
const makeStore = () => configureStore({ reducer: { prices: pricesSlice.reducer } });
type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
const useAppSelector = useSelector.withTypes<RootState>();

const SelectorRow = memo(function SelectorRow({
  position,
  recordRender,
}: {
  position: Position;
  recordRender: RecordRender;
}) {
  const price = useAppSelector((state) => state.prices[position.symbol]);
  return <RowView position={position} price={price} recordRender={recordRender} />;
});

function ReduxTotal() {
  const total = useAppSelector((state) => totalEurCents(state.prices));
  return formatCents(total, "EUR");
}

function ReduxTable({ recordRender }: { recordRender: RecordRender }) {
  const [store] = useState(makeStore);

  useEffect(() => {
    store.dispatch(snapshotReceived({ ...startPrices }));
    return startPriceStream((batch) => store.dispatch(ticksReceived(batch)));
  }, [store]);

  return (
    <Provider store={store}>
      <PriceTable total={<ReduxTotal />}>
        {positions.map((p) => (
          <SelectorRow key={p.symbol} position={p} recordRender={recordRender} />
        ))}
      </PriceTable>
    </Provider>
  );
}

function StatsLine({ stats }: { stats: RefObject<Stats> }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const id = setInterval(() => {
      const { renders, needed } = stats.current;
      ref.current!.textContent = `${renders} row renders · ${needed} needed · ${renders - needed} wasted`;
    }, 250);
    return () => clearInterval(id);
  }, [stats]);
  return <p ref={ref} className="text-sm font-medium tabular-nums" />;
}

type Mode = "before" | "after";

const modes: Record<Mode, { label: string; explain: string }> = {
  before: {
    label: "Before: useState",
    explain:
      "All prices live in one useState in the table. Every update calls setPrices with a new object, so React re-renders all 10 rows, even the ones whose price did not change.",
  },
  after: {
    label: "After: Redux selectors",
    explain:
      "Prices live in a Redux store. Each row is wrapped in React.memo and reads only its own price with useSelector, so only rows whose price changed re-render.",
  },
};

function ModeView({ mode }: { mode: Mode }) {
  const stats = useRef<Stats>({ renders: 0, needed: 0 });
  const recordRender = useCallback((needed: boolean) => {
    stats.current.renders++;
    if (needed) stats.current.needed++;
  }, []);
  return (
    <>
      <div className="border-border space-y-2 border-b px-3 py-3">
        <p className="text-muted-foreground text-sm leading-relaxed">{modes[mode].explain}</p>
        <StatsLine stats={stats} />
      </div>
      {mode === "before" ? (
        <UseStateTable recordRender={recordRender} />
      ) : (
        <ReduxTable recordRender={recordRender} />
      )}
    </>
  );
}

export function PriceDemo() {
  const [mode, setMode] = useState<Mode>("after");

  return (
    <div className="border-border overflow-hidden rounded-xl border">
      <div className="border-border flex flex-wrap items-center justify-between gap-3 border-b px-3 py-3">
        <div className="flex flex-wrap gap-1" role="group" aria-label="Implementation">
          {(Object.keys(modes) as Mode[]).map((m) => (
            <Button
              key={m}
              size="sm"
              variant={mode === m ? "default" : "outline"}
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
            >
              {modes[m].label}
            </Button>
          ))}
        </div>
        <ul className="text-muted-foreground flex flex-wrap gap-x-3 gap-y-1 text-xs">
          <li className="flex items-center gap-1.5">
            <span className="price-swatch-up size-2.5 rounded-sm" /> Price up
          </li>
          <li className="flex items-center gap-1.5">
            <span className="price-swatch-down size-2.5 rounded-sm" /> Price down
          </li>
          <li className="flex items-center gap-1.5">
            <span className="render-swatch size-2.5 rounded-sm" /> Row re-rendered
          </li>
        </ul>
      </div>
      <ModeView key={mode} mode={mode} />
    </div>
  );
}
