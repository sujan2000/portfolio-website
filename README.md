# 🚀 Portfolio — Sujan Singh Meena

A **production-grade portfolio** built with **Next.js 16**, **TypeScript**, and **Stripe**, showcasing real-world architecture, security, and performance best practices.

This is not a demo project — it mirrors how modern SaaS applications are structured and deployed.

---

## ✨ Highlights

* ⚡ **Next.js 16 App Router + Turbopack**
* 🔐 **Authentication (Auth.js / NextAuth)**
* 💳 **Stripe Payments + Webhooks**
* 🛡️ **Admin Dashboard (server-protected)**
* 🚦 **Rate-Limited APIs (Redis-ready)**
* 🎨 **Modern UI (Tailwind v4 + Framer Motion)**
* 🌗 **Dark / Light Mode**
* 🔒 **Strict Content Security Policy (CSP)**
* 🧪 **Type-safe, lint-clean, production build passing**
* 🚀 **SEO 100 / Accessibility 98 / Performance 90+**

---

## 🧱 Tech Stack

**Frontend**

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS v4
* Framer Motion

**Backend / Infra**

* Auth.js (NextAuth)
* Stripe API + Webhooks
* Server Components
* Edge / Node runtimes (where appropriate)

**Quality & Security**

* ESLint (strict)
* TypeScript strict mode
* CSP headers
* Secure server-only Stripe logic

---

## 🔑 Features Overview

### Authentication

* GitHub OAuth login
* Session-based auth
* Server-side protection for private routes

### Payments

* Stripe Checkout
* Secure webhook verification
* Admin view of recent payments

### Admin Dashboard

* Server-protected route
* Stripe payment inspection
* Not indexable by search engines

### Performance

* Server-first rendering
* Minimal client-side JS
* Optimized fonts and assets
* Lighthouse-ready

---

## 🧪 Local Development

```bash
npm install
npm run dev
```

Production test:

```bash
npm run build
npm run start
```

---

## 🔐 Environment Variables

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
ADMIN_EMAIL=you@example.com
```

---

## 📸 Screenshots

> Add screenshots here (homepage, dashboard, admin)

---

## 🧠 Why This Project?

Most portfolios show UI only.

This project demonstrates:

* Real authentication flows
* Secure payment handling
* Server-side authorization
* Production-ready configuration
* Attention to performance and security

It reflects how I build **real-world applications**, not demos.

---

## 📬 Contact

* GitHub: [https://github.com/sujan2000](https://github.com/sujan2000)
* LinkedIn: [https://www.linkedin.com/in/sujan-singh-meena-271262202/](https://www.linkedin.com/in/sujan-singh-meena-271262202/)
* Email: [meena.sujan06@gmail.com](mailto:meena.sujan06@gmail.com)

---

⭐ If you like this project, consider starring the repo.
