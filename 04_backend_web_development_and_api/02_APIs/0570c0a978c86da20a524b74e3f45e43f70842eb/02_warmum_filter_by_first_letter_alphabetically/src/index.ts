// code here
import { Customer } from "../data/customers";

function filterByFirstLetter(clientList: Customer[], firstLetter: string): Customer[] {
  // Code here
  return clientList.filter((client) => client.last_name.charAt(0) === firstLetter);
}

export function filterByFirstLetterOrdered(clientList: Customer[], firstLetter: string): Customer[] {
  return filterByFirstLetter(clientList, firstLetter).sort((a, b) => a.last_name.localeCompare(b.last_name));
}
