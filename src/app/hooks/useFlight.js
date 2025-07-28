import { useCallback } from "react";

/**
 * Nutze diesen Hook zur Berechnung von Flugdistanz und Ankunftszeit
 */
export function useFlight() {
  const calculateFlight = useCallback((start, end, speed) => {
    // Extrahiere x, y, z aus dem Format z.B. "118-209-47"
    const parseCoords = (str) => {
      const [x, y, z] = str.split("-").map(Number);
      return { x, y, z };
    };

    const from = parseCoords(start);
    const to = parseCoords(end);

    // Berechne die euklidische Distanz im 3D-Raum
    const distance = Math.sqrt(
      Math.pow(to.x - from.x, 2) +
      Math.pow(to.y - from.y, 2) +
      Math.pow(to.z - from.z, 2)
    );

    // Ankunftszeit = Distanz / Geschwindigkeit
    const eta = speed > 0 ? distance / speed : null;

    return {
      distance: Number(distance.toFixed(2)), // z.B. 251.94
      arrivalTimeInHours: eta !== null ? Number(eta.toFixed(2)) : null,
    };
  }, []);

  return calculateFlight;
}