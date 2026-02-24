# 🚗 Carlux Inventory Dashboard

A premium, high-performance vehicle inventory dashboard built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

This project was developed as part of a technical assessment to demonstrate clean architecture, efficient state management, responsive UI design, and optimized frontend performance.

---

## ✨ Features

- 📦 Fetches live data from DummyJSON API
- 🔍 Real-time search filtering (by vehicle title)
- ↕️ Price sorting (Low → High / High → Low)
- ⚡ Optimized image rendering with Next.js `<Image />`
- 🎨 Custom dark-themed design system using CSS variables
- 📱 Fully responsive (Mobile → Desktop)
- 🧱 Clean component-based architecture
- 🧠 Efficient state handling with memoized filtering
- 🚦 Proper loading and error states

---

## 🛠️ Tech Stack

- **Next.js 15 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **TanStack React Query** (for server state management)
- **Lucide Icons**

---

## 📁 Project Structure

```

app/
├── layout.tsx
├── page.tsx
├── providers.tsx
├── globals.css

components/
├── ProductCard.tsx
├── ProductGrid.tsx
├── SearchBar.tsx
├── SortDropdown.tsx

hooks/
├── useProducts.ts

````

Architecture follows separation of concerns:

- `hooks/` → Data fetching logic
- `components/` → UI building blocks
- `app/` → Layout and routing
- `globals.css` → Design system & theme tokens

---

## 🎨 Design System

The UI is powered by a custom HSL-based design token system using CSS variables:

- `--background`
- `--primary`
- `--card`
- `--border`
- `--muted`
- Custom shadow tokens
- Custom font pairing (Inter + Playfair Display)

This allows scalable theme management without hardcoded colors.

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/khadizajarin/carlux-inventory.git
cd carlux-inventory
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🌍 API Used

Data source:

```
https://dummyjson.com/products/category/vehicle
```

The application gracefully handles:

* Loading states
* API errors
* Empty results

---

## ⚡ Performance Considerations

* Uses optimized `next/image`
* Avoids unnecessary re-renders via memoization
* Keeps bundle size minimal
* No unnecessary heavy UI libraries
* Clean DOM structure

---

## 📱 Responsiveness

Grid adapts to:

* 1 column → mobile
* 2 columns → tablet
* 3–4 columns → desktop

Designed to maintain visual hierarchy and luxury aesthetics across screen sizes.

---

## 📌 Improvements (Future Scope)

* Server-side filtering
* Pagination or infinite scroll
* Debounced search
* Theme toggle (Light/Dark)
* Unit testing

---

## 🧑‍💻 Author

Developed by **Khadiza Jarin Roza**

Frontend Developer | React | Next.js | TypeScript

---

## 📄 License

This project is built for demonstration and assessment purposes.

````

---

# 🎯 Before You Submit

### Replace:
```markdown
Khadiza Jarin Roza
````

With your real name.

### Update GitHub link:

```markdown
https://github.com/khadizajarin/carlux-inventory
```

---

