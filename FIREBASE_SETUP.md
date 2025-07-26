# Firebase Setup Guide

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter a project name (e.g., "qverse-app")
4. Follow the setup wizard

## 2. Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

## 3. Get Your Firebase Config

1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click the web icon (</>)
4. Register your app with a nickname (e.g., "qverse-web")
5. Copy the firebaseConfig object

## 4. Update Your Firebase Config

Replace the placeholder values in `src/firebase.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## 5. Test the Authentication

1. Start your development server: `npm run dev`
2. Click the "Login" button in your app
3. Try creating a new account or logging in
4. Check the Firebase Console > Authentication > Users to see registered users

## Features Included

- ✅ Email/Password authentication
- ✅ User registration and login
- ✅ Form validation
- ✅ Error handling
- ✅ Loading states
- ✅ Persistent login state
- ✅ Logout functionality
- ✅ Modern UI with dark theme

## Security Rules

For production, make sure to:
1. Set up proper Firebase Security Rules
2. Configure authorized domains in Firebase Console
3. Set up proper CORS policies if needed 