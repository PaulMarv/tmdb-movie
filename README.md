# TMDB Movie Application

This is a movie application built using **Next.js**, **React**, and the **TMDB API**. The app allows users to browse popular movies, add them to their favorites, and view them later on a favorites page. It utilizes **localStorage** to store the list of favorite movies.

## Features
- Browse popular movies
- View movie details
- Add and remove movies from favorites
- View favorite movies in a dedicated page

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: [Download Node.js](https://nodejs.org/) (Preferably the LTS version)
- **npm**: Comes with Node.js (or Yarn if you prefer)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/PaulMarv/tmdb-movie.git
```
### 2. Install Dependencies
Navigate into your project directory and install the required dependencies:
```bash
cd tmdb-movie
npm install
```
Alternatively, if you're using Yarn:
```bash
yarn install
```
### 3. Set Up the Environment Variables
To use the TMDB API, you need an API key.

Create a .env.local file in the root of your project and add the following environment variable:
```makefile
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
```
### 4. Run the Application Locally
After installing the dependencies and setting up the environment variables, you can start the development server:
```bash
npm run dev
```
### 5. File Structure
Here is a basic overview of the project file structure:
```/tmdb-movie
│
├── /components              # Reusable components like MovieCard, Results
├── /pages                  # Page components for routing, like Home, Favorites
├── /public                 # Static files such as images
├── /styles                 # Global styles 
├── /constants              # Data types, constants, etc.
├── /api                    # API calls to fetch movie data
├── /hooks                  # Custom hooks for logic
├── .env.local              # Environment variables (e.g., TMDB API Key)
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Design Decisions and Trade-offs

### Caching Data in Local Storage
Reason: To persist favorite movies across sessions without additional API calls.
### Asynchronous Data Fetching
Reason: Cleaner code and better handling of asynchronous operations.
### Component Structure
Reason: Optimized for modern browsers, offering enhanced performance but may limit support for older browsers.




