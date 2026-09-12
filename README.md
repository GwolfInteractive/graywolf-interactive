# G-Wolf Interactive — Next.js + Decap CMS

Statik HTML site, tasarım/animasyonlar korunarak **Next.js App Router + Tailwind + Decap CMS** yapısına taşındı.

Canlı domain: **https://gwolfinteractive.com**

Orijinal dosyalar `_legacy/` klasöründe saklanır (bozulmadan).

## Yerel çalıştırma

```bash
# 1) Node.js 20+ kurulu olmalı (https://nodejs.org)
cd "/Users/ertunc/Desktop/G-Wolf Interactive/website/graywolf-interactive"

# 2) Bağımlılıklar
npm install

# 3) Geliştirme sunucusu
npm run dev
# → http://localhost:3000

# 4) Production build testi
npm run build
npm start
```

Decap CMS yerel içerik (opsiyonel):

```bash
# ayrı terminal
npx decap-server
# Admin: http://localhost:3000/admin/
```

`public/admin/config.yml` içindeki `repo:` değerini kendi GitHub reponuza güncelleyin.

## Vercel + gwolfinteractive.com

1. Projeyi GitHub’a push edin.
2. [vercel.com](https://vercel.com) → **Add New Project** → GitHub repo’yu bağlayın.
3. Framework: **Next.js** (otomatik). Deploy.
4. Project → **Settings → Domains** → `gwolfinteractive.com` ve `www.gwolfinteractive.com` ekleyin.

### Google DNS (Cloud DNS / Domains)

| Tip | Ad / Host | Değer | Not |
|-----|-----------|-------|-----|
| **A** | `@` (kök) | `76.76.21.21` | Vercel A kaydı |
| **CNAME** | `www` | `cname.vercel-dns.com` | www yönlendirme |

Vercel domain ekranı bazen proje-özel CNAME de gösterir; paneldeki talimatı tercih edin.

### Dokunmayın (Google Workspace e-posta)

Aşağıdaki kayıtları **değiştirmeyin / silmeyin**:

- **MX** (Google Workspace mail)
- **TXT / SPF** (`v=spf1 include:_spf.google.com ...`)
- **DKIM** (`google._domainkey` vb.)
- **DMARC** (varsa `_dmarc`)

Sadece web için A/CNAME güncelleyin; e-posta DNS’i olduğu gibi kalsın.

## Rotalar

| Eski | Yeni |
|------|------|
| `index.html` | `/` |
| `hizmetler/saas.html` | `/hizmetler/saas` |
| `hizmetler/mobil-uygulama.html` | `/hizmetler/mobil-uygulama` |
| `hizmetler/mobil-oyun.html` | `/hizmetler/mobil-oyun` |
| `hizmetler/web-gelistirme.html` | `/hizmetler/web-gelistirme` |
| `projeler/diet-tracking-app.html` | `/projeler/diet-tracking-app` |
| — | `/admin/` (Decap CMS) |
