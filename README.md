# ICC Men's T20 World Cup Analytics Dashboard

This is a premium, real-time advanced analytics dashboard meant for visualizing live T20 World Cup matches, Win Probability, and Player Metrics using React and Vite.

## Requirements

1. **Node.js**: This project is scaffolded using Vite and React. You **must** install [Node.js](https://nodejs.org/) to run and edit this project locally.
2. An IDE such as VS Code.

## Getting Started

1. Open your terminal in this directory (`T20 WORLD CUP DATA ANALYTICS`).
2. Run `npm install` to install dependencies (React, Recharts, Lucide Icons, Vite).
3. Run `npm run dev` to start the local development server.
4. Visit the URL provided in the terminal (usually `http://localhost:5173`) to view the application.

## Features Included

- **Dark Mode UI**: A stunning dark glass-morphism interface inspired by premium sports broadcasters.
- **Live Match API Header**: Dynamic scoreboards with automatic Current Run Rate and Target calculations.
- **AI Win Probability Engine**: Animated probability bars displaying win chances driven by "mocked" real-time AI logic.
- **Match Momentum Index**: A line chart built using Recharts that visualizes team dominance over the innings.
- **Phase-wise Summaries**: Powerplay, Middle, and Death Overs split for deep analytical breakdown.
- **Visual Graphics Mockups**: Embedded CSS-based interactive Wagon Wheel and Pitch Map components.

> **Note:** The data layer currently uses an interval to simulate live incoming data points and swings in probability. You can extend `mockData.js` to connect to real API endpoints (such as Cricsheet or Sportsradar).
