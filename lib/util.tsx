import { useEffect, useState } from "react";
export const breakpoints = [640, 768, 1024, 1280, 1536];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

// function for media query using event listener
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};
