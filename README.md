# UniverseDawnAllyTool
Ally Tool for Universe Dawn. 
Geschrieben vom User FloWzoW für die Ally _Die 7 Zwerge_ und dessen Allianzpartnern, 
aber alle anderen die mögen dürfen das Tool natürlich auch benutzen.

Um das Tool zu hosten soll man später einfach ein Dockerimage haben welches man auf dem billigen 1&1-Ionos-VPS für 1€/Monat benutzen kann.

Hier die Todo Liste zur Entwicklung dieses Tools:
- User-Registrierung und Verwaltung
    - inkl Seite für Permissionsvergabe
- Allianz Techtree
- Quest-Übersicht
- Asteroidensuche
- Aufschlüsselung von Gebäude- und Forschungslevel
- Datenbank für Scans, das benötigt:
    - ~Browserplugin welches aus der Tabelle Daten überträgt (Happy fragen ob erlaubt)~ (nicht erlaubt)
    - oder RichTextField wo man einfach copy-paste rein machen kann 
    - Datenbanksuche mit Filter für Wurmlöcher, Fleets, Plannis, ...
- Wurmloch Flugrechner
- Akustischer Timer
- Gebäudekostenrechner
    - zum ausrechnen was man einkaufen muss inkl Abzug am Planni liegender Ress
- Anflugrechner
    - Sollte Public sein damit man einen Raum (als Link) erstellen kann und diesen an Ally-Partner weitergeben kann
    - Eingabe von Start-, Ziel-Koords und Geschwindigkeit
    - Start-Button für den langsamsten, dann bekommen alle anderen runter gezählt wann sie los fliegen sollen
    - Browser-Benachrichtigung-Push erlauben dann gibts ne fette Nachricht aufs Handy wann man los fliegen kann
- Telegram-Bot für Ally-Infos auf Mobiltelefone (wer mag)
- Man könnte die eigenen Browser-Push-Benachrichtigungen von UD abfangen und im Tool anzeigen lassen, so sieht man "leichte" Statusnachrichten der anderen Spielern (Happy fragen ob erlaubt)


Permissions:
- Userprofile sehen
- Userprofile Statusnachrichten anzeigen (abgefangene)
- Userprofile erstellen
- Userprofile löschen
- Userprofile Passwort ändern
- Techtree sehen
- Techtree ändern
- Quest eintragen und ändern
- Quest löschen
- Weltraumdatenbank Suche benutzen
- Weltraumdatenbank Daten eintragen
- Anflugrechner Raum erstellen
- Anflugrechner Raumliste anzeigen
- Telegrambot Nachricht senden


Technische todos:
- Nextjs Boilerplate
- arwes
- Supabase
- SQLite
- dockerfile
- UD hat eigene APIs, Zugänge erfragen


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
