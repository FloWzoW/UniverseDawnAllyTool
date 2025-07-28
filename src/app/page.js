import Image from "next/image";
import FlightComponent from "./test"

export default function Home() {
  return (
    <>
      <main class="flex-1 p-8">
        <h2>Willkommen im Cockpit</h2>
        <p class="text-gray-700">
          Dies ist der Hauptbereich deiner Anwendung. Wähle eine Option aus der Navigation.
        </p>
        <h2>Einfacher Flugrechner</h2>
        <FlightComponent />
      </main>
    </>
  );
}
