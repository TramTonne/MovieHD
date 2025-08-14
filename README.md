# 🎬 Movie Discovery App

A React Native mobile application for discovering trending movies, searching the movie database, and managing your favorite films.

## ✨ Features

- 🔥 Browse trending movies
- 🔍 Search movies using TMDB API
- 💾 Save favorite movies
- 👤 User profile management
- 📊 Search history tracking
- 📱 Responsive design for iOS and Android

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS)
- **Navigation**: Expo Router
- **Backend**: Appwrite Database
- **API**: The Movie Database (TMDB)
- **State Management**: Custom React hooks

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mobile_movie_app.git
   cd mobile_movie_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
   EXPO_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

## 📱 Running the App

- **iOS Simulator**: Press `i` in the terminal
- **Android Emulator**: Press `a` in the terminal
- **Physical Device**: Scan the QR code with Expo Go app

## 🏗️ Project Structure

```
mobile_movie_app/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Tab-based screens
│   │   ├── index.tsx      # Home screen
│   │   ├── search.tsx     # Search screen
│   │   ├── saved.tsx      # Saved movies
│   │   └── profile.tsx    # User profile
│   └── _layout.tsx        # Root layout
├── components/             # Reusable components
├── constants/             # App constants (icons, images)
├── services/              # API services and utilities
├── types/                 # TypeScript type definitions
└── README.md
```









