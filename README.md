# FOSSEE Workshop Booking UI/UX Enhancement

This project is my submission for the FOSSEE Python Screening Task focused on improving the UI/UX of a workshop booking website using React.

## Project Objective

The goal of this task was to redesign and enhance the workshop booking interface with focus on:

- Better user experience
- Modern and clean UI
- Mobile responsiveness
- Improved navigation flow
- Accessibility and readability
- Performance-conscious styling

---

## Features Implemented

- Responsive Navbar with Desktop/Mobile Navigation
- Animated Mobile Dropdown Menu
- User Profile Dropdown UI
- Workshop Booking Form with Validation
- Statistics Section
- Propose Workshop Form
- Clean Footer Layout
- Mobile-First Responsive Design

---

## Design Principles Used

While redesigning the interface, I focused on the following design principles:

- **Visual Hierarchy:** Important elements are highlighted using spacing, typography, and contrast.
- **Consistency:** Similar styling patterns were maintained across buttons, cards, and forms.
- **Clarity:** Forms and navigation are kept simple and readable.
- **Accessibility:** High contrast colors and larger clickable areas improve usability.

---

## Responsiveness Strategy

To ensure responsiveness across devices:

- Used Tailwind CSS responsive breakpoints (`md`, `lg`, etc.)
- Followed a mobile-first design approach
- Optimized navbar and forms for smaller screens
- Maintained flexible grid/card layouts

---

## Design vs Performance Trade-offs

To maintain performance while improving design:

- Avoided heavy animation libraries
- Used lightweight Tailwind CSS transitions instead of external packages
- Kept component structure minimal and reusable
- Focused on simple SVG icons rather than image assets

---

## Challenges Faced

The most challenging part of the task was designing a responsive navbar that worked smoothly across desktop and mobile views while maintaining usability.

I approached this by:

- Managing component states carefully using React Hooks
- Using conditional rendering for dropdowns and menus
- Testing responsiveness repeatedly across screen sizes

---

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/ashok-8081/workshop-ui.git
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

Then open:

```bash
http://localhost:3000
```

---


## Tech Stack

- React JS
- Tailwind CSS
- React Router DOM

---
