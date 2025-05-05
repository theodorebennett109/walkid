 
# 🪪 WalkID — Digital Identity Wallet

WalkID is a secure web-based document wallet that allows users to store, manage, and share their digital personal identity (DPI) data — including driver’s licenses, insurance details, and medical information — all under their control.

## 🚀 Features

- 🔐 Secure login & personal dashboard  
- 🗂️ Upload and view personal identity documents  
- 📤 Set share permissions (e.g. for police, airport, hospital)  
- 🕵️ View access logs for transparency  
- 📸 Share via QR code or license plate  
- ⚡ Built for privacy-first digital identity  

## 📁 Project Structure

```
walkid/
├── app/
│   ├── dashboard/
│   ├── documents/
│   ├── share-settings/
│   ├── access-logs/
│   └── viewer/[id]/
│
├── components/
│   ├── Sidebar.jsx
│   ├── TopNavbar.jsx
│   ├── QRCodeDisplay.jsx
│   ├── DocumentCard.jsx
│   ├── AccessLogTable.jsx
│   └── ShareToggle.jsx
│
├── lib/
│   └── dummyData.js
└── public/
    └── logo-transparent.png
```

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router)  
- **Styling**: Tailwind CSS, Shadcn/UI  
- **Icons**: React Icons  
- **QR Code Gen**: qrcode.react (planned)  
- **Backend**: (Planned) — Supabase, Laravel, or Node.js  

## 📦 Getting Started

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000` to view the app.

> Note: This is a frontend-only prototype using dummy data.

## 🧱 Future Goals

- Supabase Auth  
- Secure file uploads  
- Government API verification  
- Emergency override access  
- Mobile-ready UI  

## 📄 License

MIT — free to use, build, and improve.

---

Built by **Theodore Bennett** 🇯🇲 — theodorebennett3@gmail.com
```