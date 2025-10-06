# PDF Portal (Expo + TypeScript) Starter

This scaffold provides:

- Roll-number login (mock/auth context)
- Role-based drawer navigation (admin vs student)
- Admin upload PDF UI (stub using expo-document-picker)
- Profile/password change stub
- Rate Us link + store open

Libraries used: Expo, React Navigation (drawer), react-native-paper, firebase (stub), expo-document-picker

Getting started
1. Install dependencies:

```powershell
cd "C:/Users/sumanth/Downloads/app"
npm install
```

2. Start the app:

```powershell
npm run start
```

Firebase: open `src/firebase/firebase.ts` and paste your config. The app will fall back to mock behavior if Firebase is missing.

Notes
- Roll numbers starting with 'A' are considered admin in the mock (e.g., A001).
- Upload is a stub; wire to Firebase Storage in `src/screens/UploadPdfScreen.tsx`.
