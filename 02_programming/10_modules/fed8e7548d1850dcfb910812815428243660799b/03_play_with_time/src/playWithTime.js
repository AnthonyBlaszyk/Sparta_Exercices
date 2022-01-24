import moment from "moment";

function formatDate(string) {
  return moment(string).format("dddd Do MMMM YYYY");
  // "Thursday 5th January 1939"
}

function yearsSinceDate(string) {
  let dateChoosen = new moment(string);
  let today = new moment();
  return today.diff(dateChoosen, "years");
}

function getDayFromDate(string) {
  return moment(string).format("dddd");
}

function daysSinceDate(string) {
  let dateChoosen = new moment(string);
  let today = new moment();
  return Math.round(today.diff(dateChoosen, "days", true));
}

export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };
