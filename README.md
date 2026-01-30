# Jimmy 個人作品集網站

> 🌐 **網站連結**: [https://your-domain.com](https://your-domain.com)

<p align="right">
  <a href="./README.en.md">English Version</a>
</p>

---

## 🎯 專案概述

一個使用現代前沿技術打造的響應式個人作品集網站，展示我作為 **資深全端架構師** 的專業能力。此專案展現了我建構生產級、可擴展網頁應用的能力，專注於效能、無障礙設計與使用者體驗。

![作品集預覽](./public/preview.png)

## ✨ 功能特色

### 🎨 設計與使用者體驗

- **Neo-Modernist Bento 設計** - 現代化 UI，搭配毛玻璃效果與流暢動畫
- **深色主題優先** - 精心設計的優雅深色配色方案
- **響應式布局** - 完整支援桌面、平板與行動裝置
- **微互動效果** - 細膩的 hover 效果與轉場動畫提升互動體驗

### 🌍 國際化支援

- **多語言支援** - 完整 i18n 實作，支援英文與繁體中文
- **動態內容** - 所有內容包括專案與技能皆可翻譯切換

### ⚡ 效能優化

- **SSR/SSG 支援** - 伺服器端渲染，優化 SEO 與首次載入效能
- **程式碼分割** - 自動路由級程式碼分割，加速頁面導航
- **資源優化** - 客製化 SVG 圖示與最佳化圖片

### 🛠️ 技術亮點

- **型別安全** - 完整 TypeScript 實作，嚴格型別檢查
- **狀態管理** - Pinia store 集中式響應式狀態管理
- **元件架構** - 模組化、可重用的 Vue 3 Composition API 元件
- **現代 CSS** - Tailwind CSS 搭配自訂設計 token 與工具類別

## 🏗️ 技術棧

| 分類         | 技術                        |
| ------------ | --------------------------- |
| **框架**     | Nuxt 3、Vue 3               |
| **語言**     | TypeScript                  |
| **樣式**     | Tailwind CSS、CSS Variables |
| **狀態管理** | Pinia                       |
| **國際化**   | @nuxtjs/i18n                |
| **圖示**     | 客製化 SVG 元件             |
| **建構工具** | Vite                        |
| **套件管理** | pnpm                        |

## 📁 專案結構

```
self_introduction_web/
├── app/
│   ├── components/          # 可重用 Vue 元件
│   │   ├── icons/           # 客製化 SVG 圖示元件
│   │   ├── HeroSection.vue
│   │   ├── SkillsGrid.vue
│   │   ├── ProjectCard.vue
│   │   └── ContactSection.vue
│   ├── layouts/             # 布局元件
│   ├── pages/               # 路由頁面
│   └── stores/              # Pinia stores
├── i18n/
│   └── locales/             # 翻譯檔案 (en, zh-TW)
├── assets/
│   └── css/                 # 全域樣式
├── public/                  # 靜態資源
└── nuxt.config.ts           # Nuxt 設定
```

## 🚀 快速開始

### 環境需求

- Node.js 18+
- pnpm 8+

### 安裝步驟

```bash
# 複製專案
git clone https://github.com/yourusername/portfolio.git

# 進入專案目錄
cd portfolio

# 安裝依賴
pnpm install

# 啟動開發伺服器
pnpm dev
```

### 建構生產版本

```bash
# 產生靜態網站
pnpm generate

# 或建構 SSR 版本
pnpm build
```

## 💼 展示技能

此專案展現以下專業能力：

### 前端開發

- **Vue 3** - Composition API、響應式系統、自訂指令
- **Nuxt 3** - SSR、SSG、混合渲染、SEO 優化
- **TypeScript** - 型別安全、泛型、介面設計
- **CSS 架構** - 設計系統、CSS 變數、響應式設計

### 架構設計

- **元件設計** - 原子設計原則、可重用模式
- **狀態管理** - 集中式 store 搭配 computed 屬性
- **程式碼組織** - 乾淨、可維護、可擴展的結構

### 最佳實踐

- **效能優化** - 程式碼分割、延遲載入、資源優化
- **無障礙設計** - 語意化 HTML、ARIA 屬性、鍵盤導航
- **SEO 優化** - Meta 標籤、結構化資料、語意標記
- **國際化** - i18n 模式、翻譯管理

## 📬 聯絡方式

歡迎聯繫討論合作機會：

- 📧 Email: jimmywu0916@gmail.com
- 🐙 GitHub: [github.com/yourprofile](https://github.com/yourprofile)
- 📍 地點: 台灣台北

## 📄 授權

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案。

---

<p align="center">
  使用 ❤️ 與 Nuxt 3 + Vue 3 + TypeScript 打造
</p>
