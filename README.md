# Open-Slide Demo & Interactive Playground

Presentasi interaktif berbasis React + Tailwind CSS yang dapat diedit langsung di browser dan diekspor ke format PowerPoint (`.pptx`) native.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/adamhasani/open-slide-demo?file=slides/getting-started/index.tsx)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/adamhasani/open-slide-demo)

---

### Quick Links
- **Interactive Playground (Edit Online Langsung):** [Buka di StackBlitz](https://stackblitz.com/github/adamhasani/open-slide-demo?file=slides/getting-started/index.tsx)
- **Live Slide Web Viewer:** [adamhasani.github.io/open-slide-demo](https://adamhasani.github.io/open-slide-demo/)
- **Download File PPTX:** [getting-started.pptx (GitHub Release)](https://github.com/adamhasani/open-slide-demo/releases/download/v1.0.0/getting-started.pptx)

---

## Cara Edit & Lihat Proses

### 1. Langsung di Browser (StackBlitz - Tanpa Install)
1. Klik link **[Buka di StackBlitz](https://stackblitz.com/github/adamhasani/open-slide-demo?file=slides/getting-started/index.tsx)**.
2. Web IDE langsung terbuka dengan split screen:
   - **Kiri:** File editor (`slides/getting-started/index.tsx`).
   - **Kanan:** Live preview slide yang otomatis hot-reload setiap kali teks atau kode diubah.
3. Edit judul, teks, warna Tailwind, atau urutan slide. Perubahan langsung terlihat detik itu juga.

### 2. Cloud IDE (GitHub Codespaces)
1. Buka link **[GitHub Codespaces](https://codespaces.new/adamhasani/open-slide-demo)**.
2. Lingkungan VS Code cloud lengkap akan dibuat otomatis.
3. Jalankan `pnpm dev` di terminal, lalu buka tab Ports (5173) untuk live preview.

### 3. Di Lokal Komputer
```bash
git clone https://github.com/adamhasani/open-slide-demo.git
cd open-slide-demo
pnpm install
pnpm dev
```
Buka `http://localhost:5173` di browser.

---

## Ekspor ke PowerPoint (.pptx)
```bash
pnpm export --format pptx
```
Slide akan dikonversi menjadi berkas PowerPoint `.pptx` asli dengan teks, vektor, dan tata letak yang sepenuhnya dapat diedit (*editable*).
