# React Native Expo App

A modern mobile application built with React Native and Expo.

## Project Structure

```
├── app/                   # Main application directory
│   ├── (tabs)/           # Tab-based navigation screens
│   ├── components/       # Reusable components
│   ├── constants/       # App constants and theme
│   └── utils/           # Utility functions
├── assets/              # Static assets (images, fonts)
└── app.json            # Expo configuration
```

## Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac only) or Android Studio

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

3. Run on your preferred platform:
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app (iOS/Android) for physical devices

## Development Options

- 📱 **Physical Device**: Use [Expo Go](https://expo.dev/go)
- 🤖 **Android**: [Set up Android Studio emulator](https://docs.expo.dev/workflow/android-studio-emulator)
- 🍎 **iOS**: [Set up iOS Simulator](https://docs.expo.dev/workflow/ios-simulator)
- 🛠️ **Development Build**: Create a [custom development build](https://docs.expo.dev/develop/development-builds/introduction/)

## Key Features

- File-based routing with Expo Router
- Type-safe navigation
- Built-in ESLint configuration
- Fast refresh during development
- Access to Expo's ecosystem

## Available Scripts

- `npx expo start` - Start the development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset to a clean project state

## Learn More

- [Expo Documentation](https://docs.expo.dev)
- [React Native Documentation](https://reactnative.dev)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction)

## Support

- [Expo GitHub](https://github.com/expo/expo)
- [Expo Discord](https://chat.expo.dev)
- [React Native Community](https://reactnative.dev/help)
