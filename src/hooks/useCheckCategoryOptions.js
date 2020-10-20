import { useParams } from "react-router-dom";

export default function useCheckCategoryOptions() {
  const parameter = useParams();
  const categoryValue = Object.keys(parameter).length
    ? parameter.category
    : "all";

  return categoryValue;
}
