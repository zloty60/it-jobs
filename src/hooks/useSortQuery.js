import { useLocation } from "react-router-dom";

export default function useSortQuery() {
  let location = useLocation();
  const query = new URLSearchParams(location.search);
  const type = query.get("sort");

  switch (type) {
    case "salary-high":
      return {
        sortType: "salary",
        direction: "desc",
        sortSelectValue: "salary-high",
      };
    case "salary-low":
      return {
        sortType: "salary",
        direction: "asc",
        sortSelectValue: "salary-low",
      };
    default:
      return {
        sortType: "date",
        direction: "desc",
        sortSelectValue: "the-latest",
      };
  }
}
