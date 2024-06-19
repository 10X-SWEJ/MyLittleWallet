export function monthNameGenerator(locale = "en-US", year = 2004) {
   const monthNames = [];
   for (let i = 0; i < 12; i++) {
      const date = new Date(year, i);
      const monthName = date.toLocaleString(locale, { month: "long" });
      monthNames.push(monthName);
   }
   return monthNames;
}
