---
name: "Evita Y2K Scrapbook"
description: "A tactile Y2K digital scrapbook and collage design system blending artificial turf, woven linen paper, retro silver hardware, pastel pink stationery, and classic Windows XP chrome."
---

## Overview

This design system powers the personal portfolio of **Evita Zahrotus Safira**, an Informatics Engineering student at Institut Teknologi PLN. It evokes a nostalgic **Y2K Digital Scrapbook & Tactile Collage** aesthetic—combining physical stationery textures (woven linen paper, pink clipboard, die-cut sticker outlines) with early-2000s digital nostalgia (a brushed-silver feature phone, Windows XP Explorer window chrome, and Canva-style cyan selection handles). The personality is warm, creative, organized, and approachable.

## Colors

The palette pairs tactile natural neutrals (`paper-linen` and `grass-dark`) with playful Y2K pastels (`pink-pastel`, `pink-gingham`) and crisp retro OS accents (`xp-blue`, `selection-cyan`). All interactive and body text combinations meet WCAG AA contrast against their paired surfaces using `ink` (`#181818`) or `FFFFFF`.

```yaml
colors:
  pink-pastel: "#F7B5D1"
  pink-deep: "#8B4367"
  pink-gingham: "#FADADD"
  grass-dark: "#163015"
  grass-mid: "#274E22"
  paper-linen: "#EFECE6"
  ink: "#181818"
  ink-soft: "#4A4A4A"
  xp-blue: "#0058E6"
  xp-sky: "#5A9CF8"
  selection-cyan: "#00C4CC"
  primary: "#8B4367"
  on-primary: "#FFFFFF"
  secondary: "#163015"
  on-secondary: "#FFFFFF"
  tertiary: "#0058E6"
  on-tertiary: "#FFFFFF"
  surface: "#EFECE6"
  on-surface: "#181818"
  surface-container: "#FFFFFF"
  surface-container-low: "#F8F6F2"
  on-surface-variant: "#4A4A4A"
  outline: "#181818"
  outline-variant: "#D5D8DE"
```

## Typography

Three Google Font families establish clear editorial and nostalgic hierarchy:
- **Playfair Display** (700/900 italic) delivers dramatic editorial serif presence for the hero "Folio" display title.
- **Plus Jakarta Sans** (400–800) handles all UI controls, section headings, bio copy, and organizational timelines with crisp geometric legibility.
- **Caveat** (700) adds authentic handwritten warmth for scrapbook notes and sticker callouts.

```yaml
typography:
  display-lg:
    fontFamily: "Playfair Display"
    fontSize: 120px
    fontWeight: 900
    lineHeight: 108px
    letterSpacing: -2px
  display-lg-mobile:
    fontFamily: "Playfair Display"
    fontSize: 32px
    fontWeight: 900
    lineHeight: 36px
    letterSpacing: -0.5px
  headline-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 28px
    fontWeight: 800
    lineHeight: 34px
    letterSpacing: -0.3px
  headline-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: -0.2px
  title-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22px
    letterSpacing: 0px
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 18px
    letterSpacing: 0px
  label-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.2px
  handwritten-lg:
    fontFamily: "Caveat"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: 0px
```

## Layout & Spacing

The portfolio uses full-bleed scenic section bands (artificial turf, woven linen, alpine pine forest, Windows XP Bliss hills) housing centered max-width content containers (`1060px`–`1140px`). On desktop, the About section splits into a 2-column grid (`350px 1fr`), Experience uses a 3-column timeline inside the pink clipboard, and Projects uses a 4-column poster grid inside the XP window. All multi-column grids collapse gracefully to 2 columns on tablet and 1 column on mobile (`375px`).

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 80px
  page-margin: 24px
```

## Elevation & Depth

Depth is achieved through **tactile physical layering** rather than generic soft blurs:
- **Crisp Ink Borders & Hard Offset Shadows**: Pill headings (`2px solid #181818`, `0 4px 0 rgba(0,0,0,0.12)`) and floating navigation pills sit cleanly above textured backgrounds.
- **Die-Cut Sticker Cutouts**: Portrait cutouts use layered white `drop-shadow` outlines (`2px` in all 4 cardinal directions) plus a soft ambient drop shadow.
- **Retro Hardware & OS Chrome**: The silver feature phone uses metallic linear gradients and inner bevel highlights; the Windows XP Explorer window uses a glossy blue title bar and deep elevation shadow (`0 22px 50px rgba(0,0,0,0.35)`).

## Shapes

Shapes alternate between soft organic pills (navigation, section headings, greeting badges), rounded hardware silhouettes (feature phone chassis, app icon tiles), and crisp rectangular OS frames (Windows XP window, Canva selection bounding boxes).

```yaml
rounded:
  none: 0px
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 18px
  xl: 36px
  full: 9999px
```

## Motion & Micro-interaction

Interactions feel tactile and immediate: skill tiles lift and tilt `-4deg` on hover, Canva selection handles snap into view around hovered or selected project cards, and sections reveal upward smoothly via `IntersectionObserver`. All transitions respect `prefers-reduced-motion` and animate only `transform`, `opacity`, and color.

```yaml
motion:
  state-change:
    duration: 180ms
    delay: 0ms
    timingFunction: cubic-bezier(0.25, 0.8, 0.25, 1)
  reveal-enter:
    duration: 700ms
    delay: 0ms
    timingFunction: cubic-bezier(0.25, 0.8, 0.25, 1)
  modal-enter:
    duration: 220ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
```

## Voice & Content Strategy

All copy is written in **Indonesian** (matching Evita's profile and target audience) with concise, warm, first-person storytelling ("Halo!", "Hai, aku Evita!") paired with clear, structured organizational and project metadata. Dates use short Indonesian month abbreviations (`Sep 2026 – Sekarang`, `Nov 2024 – Nov 2025`). Action labels are direct and descriptive.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html`: `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Modal** → `@components/modal.html`: `modal-standard`, `modal-alert`, `modal-drawer`
