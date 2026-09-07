# EByte Studio

Lovable Prompt — eByte Software Landing Page

Copy everything below into Lovable as your initial prompt.

PROJECT BRIEF

Build a static, animated landing page for eByte Software, a Moroccan software company that designs and builds custom Mobile, Web, and Desktop applications for clients based on their exact needs.

Tagline (use prominently, e.g. under the logo in the hero): "Built by Engineers. Powered by Vision."

The site must be fully trilingual: French (default), Arabic, English — with a language switcher in the navbar (flags or FR/AR/EN toggle). When Arabic is selected, the layout must switch to RTL (text alignment, nav order, icon direction, spacing — mirror the whole layout, not just the text).

I will upload the logo and banner images separately in Lovable — use them in the navbar (logo) and hero section (banner/brand visuals). Brand colors, pulled from the logo:

Background: near-black / deep charcoal (#0D0D0F to #1A1A1D range)

Primary accent: warm gold/bronze (#C9A868 or similar, matches the thin gold lines in the banner)

Secondary accent: cream/off-white (#F1E9D8 range, used in the logo wordmark)

Highlight/tech accent: gradient blue (#2AA8F2 → #0B5FFF, from the logo's three bars)

Use subtle diagonal gold line/geometric accents echoing the banner's corner design

DESIGN & ANIMATION DIRECTION

Premium, modern, dark "tech studio" aesthetic — not generic SaaS. Confident, engineering-driven, precise.

Scroll-triggered fade/slide-in animations on each section.

Subtle parallax or glow effects behind hero text.

Hover micro-interactions on cards and buttons (scale, glow border, gold underline).

Sticky navbar with blur/transparency on scroll.

Smooth scroll between sections + a subtle scroll-progress indicator is a nice-to-have.

Fully responsive (mobile-first breakpoints), animations should degrade gracefully on mobile (no heavy parallax on small screens).

LANGUAGE SWITCHER REQUIREMENTS

Default language: French.

Store selected language in state (and ideally localStorage) so it persists across navigation.

Every piece of copy in every section must exist in all 3 languages — structure content as translation objects/dictionaries, not hardcoded strings, so it's maintainable.

Arabic version: mirror layout (RTL), use an Arabic-friendly font (e.g. Cairo, Tajawal, or IBM Plex Sans Arabic) instead of the Latin font.

SECTIONS (in order)

1. Navbar

Logo (uploaded separately) + "eByte Software" wordmark

Nav links: Home / About / Services / Products / Contact (translated per language)

Language switcher (FR / AR / EN)

CTA button: "Get a Quote" / "Demander un devis" / "اطلب عرض سعر"

2. Hero Section

Big headline: "Built by Engineers. Powered by Vision."

Sub-headline (French, adapt for EN/AR): eByte Software conçoit des applications sur mesure — mobiles, web et desktop — pensées et développées selon la vision et les besoins réels de chaque client. Nous transformons vos idées en solutions digitales fiables et performantes.

Two CTAs: "Discover our products" (scrolls to Products) and "Contact us" (scrolls to Contact)

Banner image / animated background using the uploaded banner as a visual anchor

Small animated stat strip under the hero (e.g. "X+ clients across Morocco", "3 flagship products", "100% custom-built") — use placeholder numbers I can edit later

3. About / Vision Section

Headline: "Our Vision" / "Notre Vision" / "رؤيتنا"

Body copy: eByte Software was founded with a clear vision — to build software that adapts to businesses, not the other way around. Every application we ship is customized to the client's real workflow, market, and growth stage. We work across the full stack: Mobile, Web, and Desktop, delivering solutions tailored to Moroccan and MENA businesses.

3 feature cards side by side, each with an icon + short text:

Custom-built, not off-the-shelf — every app is designed around the client's exact requirements

Full-stack expertise — Mobile, Web & Desktop, delivered end-to-end

Local market focus — built for Moroccan businesses, in French & Arabic, with local workflows in mind

4. Services Section

Headline: "What We Build" / "Ce que nous créons" / "ما نصنعه" Three service cards (with icons):

Mobile Apps — Native/cross-platform mobile applications tailored to your business and your customers.

Web Applications — Modern, scalable web platforms and portals built around your workflow.

Desktop Software — Robust offline-capable desktop solutions for businesses that need full control and reliability.

Each card: short description + subtle "Learn more" hover state (can link to Products/Contact).

5. Products / Flagship Solutions Section

Headline: "Our Products" / "Nos Produits" / "منتجاتنا" Intro line: From libraries to retail, our products are already trusted by clients across Morocco.

Feature 4 product cards in a grid (each with icon, name, short description, and a subtle "featured" badge where noted):

POS eByte (flagship — highlight this card, e.g. larger or with a "Flagship" badge)

Description: A complete offline point-of-sale software for Moroccan businesses — manage sales, stock, invoicing, and daily operations from one place, no internet required.

Highlight stat: "Trusted by 10+ businesses across Morocco" (adjust wording per language: "Utilisé par plus de 10 entreprises au Maroc")

OAPAM — Library Management System

Description: A dedicated management system built for libraries — cataloging, borrowing, member management, and reporting, streamlined into one platform.

CGS — Centers Management System

Description: A dedicated management platform built to digitize and streamline day-to-day operations for service centers, adaptable to each center's specific workflow.

(Note: keep this description general — I'll refine the exact wording/vertical for CGS later.)

Smart Menu NFC

Description: The next generation of restaurant menus for Morocco — contactless, instant, and interactive digital menus via NFC. No app to download, just tap and order.

Badge: "New" / "Nouveau" / "جديد"

CTA on this card specifically: "Reserve Now" / "Réservez maintenant" / "احجز الآن" — button style should stand out (gold, animated pulse or glow)

6. Why eByte / Trust Section (optional but recommended)

Short band with 3-4 quick trust points as animated counters or icons:

Custom development, no templates

Delivered across Mobile, Web & Desktop

Built in Morocco, for Moroccan businesses

French & Arabic native support in every product

7. Contact Section

Headline: "Let's Build Something Together" / "Construisons ensemble" / "لنبني شيئاً معاً"

Simple contact form: Name, Email, Phone (optional), Message, Submit button (form can be non-functional/UI-only for now, or wire to a mailto: — your call in Lovable, keep it simple since this is a static site)

Contact info block: Email, Phone, Location (Fès, Morocco), and social links (LinkedIn, GitHub — placeholder links I'll update)

8. Footer

Logo + short tagline

Quick links: Home / About / Services / Products / Contact

Products quick links: POS eByte, OAPAM, CGS, Smart Menu NFC

Contact info (email, phone, location)

Social icons (LinkedIn, GitHub, etc. — placeholders)

Language switcher repeated (optional)

Copyright line: "© 2026 eByte Software. All rights reserved." (translated)

TECHNICAL NOTES FOR LOVABLE

Build as a single-page site with smooth-scroll anchor navigation between sections (Home / About / Services / Products / Contact).

Structure all copy as translation dictionaries (fr / ar / en objects) so content is easy to edit later.

Keep components modular (Navbar, Hero, About, Services, Products, TrustBand, Contact, Footer) for easy iteration.

I will upload the logo.png and banner.png — please use them in the Navbar and Hero respectively, and feel free to reuse the banner's diagonal gold-line motif as a recurring design element (e.g. section dividers, card borders) for visual consistency across the page.

Prioritize clean typography, generous spacing, and restraint with animations — polished and professional, not flashy/cluttered.

Fill in real stats, exact contact details, and the CGS description before publishing.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3cf0eae8-c472-49fa-82a8-3e68bc775e56).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
