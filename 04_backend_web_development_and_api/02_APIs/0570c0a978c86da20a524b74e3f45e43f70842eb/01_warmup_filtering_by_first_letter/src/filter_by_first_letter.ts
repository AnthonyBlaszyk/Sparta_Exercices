import { Customer } from "../data/customers";

export function filterByFirstLetter(clientList: Customer[], firstLetter: string): Customer[] {
  // Code here
  return clientList.filter((client) => client.last_name.charAt(0) === firstLetter);
}
