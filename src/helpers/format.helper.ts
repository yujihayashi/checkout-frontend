export function formatCurrency(value: number | string): string {
    if (!value) return value.toString();
    if (typeof value === 'string') value = parseFloat(value);
    return value.toFixed(2).replace(".", ",").replace(/\d(?=(\d{3})+(?!\d))/g, "$&.");
}