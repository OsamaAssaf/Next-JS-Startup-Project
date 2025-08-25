# 🚀 Next.js Startup Project

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?logo=next.js)](https://nextjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

A production-ready **Next.js 15.5 boilerplate** designed for rapid startup development.  
This project includes **TypeScript, i18n (internationalization), RTL support, UI components (Dialog & Snackbar), Theming, and Middleware** — giving you a solid foundation to build scalable apps.

---

## ✨ Features

- ⚡ **Next.js 15.5 (App Router)** with TypeScript
- 🌍 **i18n Support** – multilingual with `messages/en.json` and `messages/ar.json`
- 🔄 **RTL Support** via custom `RTLCacheProvider`
- 🎨 **Theme Management** – central `theme.ts` for easy customization
- 🧩 **Reusable UI Components** – Dialog & Snackbar with context providers
- 📂 **Organized File Structure** – clear separation of app, core, types, and public assets
- 🛡️ **Middleware** – extendable `middleware.ts` for auth, routing, or logging
- ✅ **ESLint & TypeScript Config** – clean and consistent code

---

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router (pages, layouts, public/private routes)
├── core/
│   ├── components/         # Reusable UI components (Dialog, Snackbar)
│   ├── i18n/              # Internationalization helpers (navigation, routing, requests)
│   ├── providers/         # Context providers (RTL support, themes, etc.)
│   ├── types/             # Shared TypeScript types
│   └── theme.ts           # App-wide theme settings
└── middleware.ts          # Middleware for auth / routing
messages/                  # Translation JSON files (en, ar)
public/                    # Static assets
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/OsamaAssaf/Next-JS-Startup-Project
cd next-js-startup-project
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000** 🎉

---

## 🌍 Internationalization (i18n)

Default translations are located in:

- `messages/en.json` - English translations
- `messages/ar.json` - Arabic translations

To add more languages:

1. Create new translation files in the `messages/` folder
2. Update `core/i18n/routing.ts` to include the new locale

---

## 🧩 UI Components

### Dialog Component

- **Location**: `core/components/UI/dialog/`
- **Features**: Context-powered modal system
- **Usage**: Reusable modal dialogs with context providers

### Snackbar Component

- **Location**: `core/components/UI/snackbar/`
- **Features**: Global notifications
- **Usage**: Toast notifications integrated with context providers

Both components are fully reusable and integrated with React Context for state management.

---

## 🛡️ Middleware

The `middleware.ts` file is preconfigured for easy expansion. You can add:

- ✅ **Authentication checks**
- ✅ **Localization redirects**
- ✅ **Logging or request validations**
- ✅ **Custom routing logic**

---

## 🛠️ Tech Stack

- **Next.js 15.5** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React Context** - State management
- **ESLint** - Code linting and formatting

---

## 📦 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Run development server   |
| `npm run build` | Build production version |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint checks        |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Osama Assaf**

💡 This project is designed to help startups launch faster with a solid Next.js foundation.

---

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

_Ready to build something amazing? Start with this solid foundation! 🚀_
