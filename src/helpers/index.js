import { parseISO, format } from "date-fns";
import { enUS } from "date-fns/locale";

export const dateFormater = (date) => {
  return format(parseISO(date), "H:i:s", { locale: enUS });
};


export function formatToCurrency(amount) {
  return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}
