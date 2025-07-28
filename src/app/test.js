import React from "react";
import { useFlight } from "./hooks/useFlight";

export default function FlightComponent() {
  const calculateFlight = useFlight();

  const { distance, arrivalTimeInHours } = calculateFlight("118-209-47", "349-230-52", 17,5); // 100 Einheiten pro Stunde

  return (
    <div>
      <p>Distanz: {distance}</p>
      <p>Ankunft in: {arrivalTimeInHours} Stunden</p>
    </div>
  );
}