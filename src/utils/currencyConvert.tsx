export function formatCurrency(number: number, decimal = false, locale = "my-MM", currency = "MMK") {
   const formatter = new Intl.NumberFormat(locale, {
      style: decimal ? "decimal" : "currency",
      currency: currency,
   });

   return formatter.format(number);
}
