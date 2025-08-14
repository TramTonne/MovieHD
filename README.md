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
   git clone https://github.com/tramtonne/MovieHD.git
   cd mobile_movie_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
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









