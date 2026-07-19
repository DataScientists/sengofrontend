// The backend wraps JSON list fields (educations/positions/skills) as
// { items: [...] } in the Map scalar — unwrap both shapes defensively.
export const asItems = (value: unknown): Record<string, unknown>[] => {
    const list = Array.isArray(value)
        ? value
        : value &&
            typeof value === "object" &&
            Array.isArray((value as { items?: unknown[] }).items)
          ? (value as { items: unknown[] }).items
          : [];
    return list.filter(
        (item): item is Record<string, unknown> =>
            !!item && typeof item === "object",
    );
};

export type YmdDate = { year?: number; month?: number; day?: number };

const MONTH_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

// LinkedIn dates use 0 for unknown parts, e.g. { year: 2022, month: 6, day: 0 }.
export const formatYmd = (value: unknown): string => {
    if (!value || typeof value !== "object") return "";
    const { year, month } = value as YmdDate;
    if (!year) return "";
    const monthName =
        month && month >= 1 && month <= 12 ? `${MONTH_NAMES[month - 1]} ` : "";
    return `${monthName}${year}`;
};

export const formatDateRange = (start: unknown, end: unknown): string => {
    const from = formatYmd(start);
    const to = formatYmd(end) || "Present";
    if (!from) return formatYmd(end);
    return `${from} – ${to}`;
};

export const str = (value: unknown): string =>
    typeof value === "string" ? value : "";

export const formatTimestamp = (value: unknown): string => {
    if (typeof value !== "string" || !value) return "";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value;
    return parsed.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};
