import { useEffect, useState } from "react";

const QUERY = "(min-width: 1024px)";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const update = () => setIsMobile(!mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isMobile;
}
