# Fake Store CRUD React App

This project is a simple, modular React + TypeScript frontend application that demonstrates basic CRUD (Create, Read, Update, Delete) operations using the public [Fake Store API](https://fakestoreapi.com/). It is designed for clarity, modularity, and maintainability, making it a great starting point for learning or extending with new features.

## Features

- **List Products:** View all products from the Fake Store API.
- **Create Product:** Add a new product using the API.
- **Delete Product:** Remove a product from the list and the API.
- **Retrieve Product by ID:** Search for and display a product by its ID.
- **Modular Components:** Each feature is implemented as a separate component for easy maintenance and extension.
- **TypeScript:** All code is fully typed for safety and developer experience.
- **SCSS Modules:** Component-level styles use SCSS modules for encapsulation.
- **Global SCSS Variables:** Theming and style consistency are managed via a global SCSS variables file.

## Project Structure

- `src/components/` — Modular components for Create, List, Details, and Search
- `src/styles/_variables.scss` — Global SCSS variables for consistent theming
- `src/types.ts` — TypeScript types for API data
- `src/App.tsx` — Main app logic and state management

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm start` — Run the app in development mode
- `npm run build` — Build the app for production
- `npm test` — Run tests (if available)

## Customization

- Update or add SCSS variables in `src/styles/_variables.scss` for theming.
- Add new features by creating new components in `src/components/`.

## Learn More

- [Fake Store API Documentation](https://fakestoreapi.com/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
