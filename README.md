# 🏏 BPL Dream Eleven - Fantasy Squad Builder

An interactive fantasy cricket squad selection web application for the Bangladesh Premier League (BPL). Built with **React 19**, **TypeScript**, and **Tailwind CSS**, this platform allows users to manage a virtual budget, select players dynamically, and assemble their ultimate dream team.

---

## 🚀 Live Demo

[Bpl-Dream website-Live-link](https://bplbuilder.netlify.app/)

---

## 🎯 Key Features

- **Dynamic Budget Management:** Real-time coin deduction upon buying a player and automatic tracking of remaining funds.
- **Conditional Player Selection:** Seamless tab switching between 'Available Players' and 'Selected Squad' without losing selection state.
- **Interactive UI Notifications:** Integrated toast alerts using `React-Toastify` for budget validation and selection status.
- **Async Data Fetching:** Efficient data fetching and state handling for player details.
- **Type-Safe Development:** Fully typed components, props, and interfaces using TypeScript.
- **Responsive & Modern Design:** Modern layout featuring glassmorphism elements, custom overlay cards, and Tailwind CSS styling.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19, TypeScript
- **Styling & UI:** Tailwind CSS, DaisyUI
- **Icons & Alerts:** React Icons (`react-icons/fa6`), React-Toastify
- **Build Tool:** Vite

---

## 📁 Project Structure

```text
BPL-Dream/
├── public/
│   ├── data.json
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── players/
│   │   │   ├── availablePlayers.tsx
│   │   │   ├── playerCard.tsx
│   │   │   ├── players.tsx
│   │   │   ├── selectedPlayerCard.tsx
│   │   │   └── selectedPlayers.tsx
│   │   ├── banner.tsx
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── newsletter.tsx
│   ├── Types/
│   │   └── playerType.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?logo=netlify)



