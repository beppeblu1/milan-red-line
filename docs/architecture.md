# Milan Red Line - Architecture

## Vision

Milan Red Line is not just a website.

The goal is to build a reusable platform for managing short-term rental apartments.

The website will be powered by a database so that apartment information can be updated without changing the code.

---

# Technology Stack

- Next.js

- React

- TypeScript

- Tailwind CSS

- Git

- GitHub

Future:

- Supabase

- Vercel

---

# Project Principles

## 1. Data first

Apartment information must come from a database.

The website should only display data.

---

## 2. Reusable components

Every UI component should be reusable.

Examples:

- Header

- ApartmentCard

- ApartmentHero

- Gallery

- Amenities

- Footer

---

## 3. Dynamic routing

Apartment pages use:

/apartments/[slug]

Examples:

- /apartments/arco

- /apartments/gramsci

---

## 4. Images

Each apartment has its own folder.

Example:

public/images/arco/

public/images/gramsci/

The cover image is always called:

cover.jpg

---

## 5. Database

The database will become the single source of truth.

The website must never duplicate apartment data.

---

## 6. Scalability

Adding a new apartment should require:

1. Upload photos.

2. Fill apartment information.

3. Publish.

No code changes should be required.

---

## 7. Documentation

Important architectural decisions must be documented.

Never rely on memory.