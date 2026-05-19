import { createContext, useContext, useEffect, useMemo } from "react";
import { destinations } from "../config/destinations";

const DestinationContext = createContext(null);

export function DestinationProvider({ destinationKey = "bali", children }) {
  const destination = useMemo(
    () => destinations[destinationKey] ?? destinations.bali,
    [destinationKey],
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-destination", destination.id);
    document.title = destination.meta.title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", destination.meta.description);

    return () => {
      document.documentElement.removeAttribute("data-destination");
    };
  }, [destination]);

  return (
    <DestinationContext.Provider value={destination}>
      {children}
    </DestinationContext.Provider>
  );
}

export function useDestination() {
  const ctx = useContext(DestinationContext);
  if (!ctx) {
    throw new Error("useDestination must be used within DestinationProvider");
  }
  return ctx;
}
