# Netflix Front-End Clone

This is a **Netflix frontend clone**, built primarily for learning and demonstration purposes.  

- Implemented **movie rows**, **banner slider**, and **responsive UI**.  
- Integrated **TMDB API** to fetch real movie data.  
- Built using **React** and **CSS**, showcasing **SPA routing**, **dynamic data fetching**, and **modern frontend practices**.

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Setup & Installation](#setup--installation)  
- [Environment Variables](#environment-variables)  
- [Build & Deployment](#build--deployment)  
- [License](#license)  

## Demo

Frontend deployed on Netlify: [https://netfliixfrontend.netlify.app/]  

> Browse movie rows, click on banners, and explore responsive UI. Data is fetched dynamically from the TMDB API.

## Features

- Browse trending and popular movies in dynamic rows.  
- Banner slider showcasing featured content.  
- Fetch real movie data from **TMDB API**.  
- Responsive design for desktop and mobile.  
- SPA routing with React Router.  

## Tech Stack

- **Frontend:** React  
- **Styling:** CSS / CSS Modules  
- **Routing:** React Router  
- **API:** TMDB (The Movie Database)  
- **Deployment:** Netlify  

## Project Structure

```

Netflix_Clone/
├─ src/                # React source code
│  ├─ components/      # Banner, Row, etc.
│  ├─ pages/           # Home page, Movie page
│  └─ App.jsx
├─ package.json
└─ README.md

````

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/Redieteshome/netflixClone.git
````

2. Navigate to the project folder:

```bash
cd netflixClone
```

3. Install dependencies:

```bash
npm install
```

4. Run locally:

```bash
npm start
```

* The frontend will start at `http://localhost:3000`.
* Ensure your **TMDB API key** is set in environment variables.

## Environment Variables

Create a `.env` file in the project root:

```
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
```

Use it in your API calls:

```javascript
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
```

## Build & Deployment

1. Build for production:

```bash
npm run build
```

2. Deploy to Netlify:

* **Base directory:** leave empty (root folder)
* **Build command:** `npm run build`
* **Publish directory:** `build`
* Add `REACT_APP_TMDB_API_KEY` as an environment variable in Netlify.

## License

This project is **open source** and available under the [MIT License](LICENSE).
