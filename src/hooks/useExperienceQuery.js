import { useLocation } from "react-router-dom";

export default function useExperienceQuery() {
    let location = useLocation();
    const query = new URLSearchParams(location.search);
    const type = query.get("experience");

    switch (type) {
        case "junior":
            return "junior"
        case "mid":
            return "mid"
        case "senior":
            return "senior"
        default:
            return "all"    
    }
}
