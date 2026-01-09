Bento Glow Dashboard

![darkmode](https://github.com/user-attachments/assets/8a8ebd79-c5c2-4382-85df-33472299fa27)


Et responsivt dashboard bygget med React, som viser mørkt og lyst modus, med animerte CSS-effekter og lekne brukeropplevelser.

Funksjoner:
Bento Grid Layout: Et fleksibelt grid-system som organiserer innholdet i bokser.

Dynamic Dark Mode: Full støtte for lyst og mørkt tema via React Context API.

Animated Borders: Egendefinerte "Glow-rammer" som bruker conic-gradient og CSS @property for myke rotasjoner.

"Light Attracts Bugs"-funksjon: En humoristisk vri der små insekter (🐛, 🪳) invaderer skjermen når brukeren skrur på Light Mode – inspirert av den klassiske programmerervitsen.

Responsive ikoner: Ikoner som gløder og endrer seg basert på valgt tema.

Teknologier brukt:
React: For komponentbasert arkitektur.

CSS3: Animasjoner, variabler (Custom Properties) og Grid-layout.

React Context: For global tilstandshåndtering (Theme).

Lucide React:  For vektorgrafikk-ikoner.

🐛 Om "Bug"-funksjonen
"Why do programmers prefer dark mode? Because light attracts bugs."

Når applikasjonen er i Light Mode, vil CSS-animasjoner trigge små insekter som kryper rundt på kortene. Disse er bygget med nøstede animasjoner (crawl og wiggle) for å skape en realistisk, nervøs bevegelse.

🔧 Installasjon
Klone repoet:

Bash

git clone https://github.com/ditt-brukernavn/bento-glow.git
Installer avhengigheter:

Bash

npm install
Kjør prosjektet lokalt:

Bash

npm run dev
🎨 CSS Høydepunkter
For å unngå at animasjoner krangler, bruker prosjektet isolation: isolate og background-clip: padding-box på kortene. Dette sikrer at den animerte rammen holder seg bak den solide bakgrunnen, selv med komplekse lag-strukturer.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
