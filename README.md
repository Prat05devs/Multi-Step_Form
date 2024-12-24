# Multi-Step Form with Real-Time Updates

A modern, user-friendly multi-step form built with Next.js and TypeScript. Features dark mode, internationalization, and real-time validation.

## 🚀 Features

- Multi-step form navigation
- Real-time validation
- Dark mode support
- Internationalization (i18n)
- Responsive design
- Form state persistence

## 🛠️ Tech Stack

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **ShadcN UI** - UI components
- **next-i18next** - Internationalization

## 📁 Project Structure

```
├── app/                  # Next.js app directory
├── components/          
│   ├── form/            # Form-related components
│   │   └── steps/       # Individual form steps
│   └── ui/              # Reusable UI components
├── lib/                 # Utilities and helpers
├── public/              
│   └── locales/         # Translation files
└── types/               # TypeScript types
```

## 🏗️ Key Components

### Form Steps
1. **Personal Info** - Basic user information
2. **Address Details** - Location information
3. **Preferences** - User preferences
4. **Review** - Final review and submission

### State Management
- Uses Zustand for simple, persistent state
- Form data persists across page reloads
- Real-time validation and error handling

### Internationalization
- Supports multiple languages
- Easy to add new translations
- Automatic language detection

## 🚦 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📝 Form Validation

- Real-time field validation
- Custom validation rules:
  - Email format
  - Phone number format
  - 6-digit ZIP code
  - Required fields

## 🎨 Styling

- Responsive design using Tailwind CSS
- Dark mode support
- Consistent UI components from ShadcN
- Custom theme configuration

## 🌐 Adding New Languages

1. Create a new file in `public/locales/[lang]/common.json`
2. Add translations following the English template
3. Update `next-i18next.config.js` with the new locale

## 📚 Best Practices

- Component-based architecture
- Single responsibility principle
- Type safety with TypeScript
- Consistent error handling
- Responsive design patterns