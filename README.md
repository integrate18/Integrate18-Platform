# LaunchStack — Product Engineering Portfolio

A modern, high-performance portfolio for an 8-engineer product team focused on building scalable SaaS and AI-powered systems for startups.

Inspired by the Linear design system — clean, minimal, and conversion-focused.

---

## Live Preview

> https://launch-portfolio.vercel.app/

---

## About

LaunchStack is a cross-functional team of 8 engineers covering every layer of a product — frontend, backend, mobile, DevOps, and AI — helping startups go from **idea to MVP to scale**.

This portfolio communicates:

- Clear value proposition for startup founders
- Real-world engineering capability across the full stack
- Structured 4-step development process
- Code-first credibility with syntax-highlighted React snippets

---

## Sections

| Section | Purpose |
|---|---|
| Hero | Animated intro with floating code card and team size stat |
| Problem | Pain points: freelancers, agencies, in-house |
| Solution | Speed / Scale / Quality 3-pillar grid |
| Code Showcase | Linear-inspired split: feature list + live `useAuth.tsx` CodeWindow |
| Tech Stack | Scrolling marquee of 20+ technologies across all disciplines |
| Services | 4 core offerings with descriptions |
| Team | 8 developer role cards with tech badges |
| How It Works | 4-step process: Understand → Design → Build → Launch |
| Projects | Selected case studies with 3D tilt cards |
| Testimonials | Social proof |
| Pricing | Starter and Growth tiers |
| CTA | Conversion-focused call to action |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | React Icons |

---

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, Container
│   ├── sections/      # One file per page section
│   └── ui/            # Reusable primitives (CodeWindow, TiltCard, etc.)
├── pages/             # Home.tsx — section composition
├── data/              # services.ts, projects.ts
├── lib/               # animations.ts — shared Framer Motion variants
└── types/             # TypeScript interfaces
```

---

## Getting Started

```bash
# Clone
git clone https://github.com/your-username/launchstack.git
cd launchstack

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build
```

---

## Configuration

**Tailwind v4** — imported directly in CSS:

```css
@import "tailwindcss";
```

**Path alias** — `@/` maps to `src/`:

```json
"paths": { "@/*": ["src/*"] }
```

---

## Team Coverage

8 engineers across:

- **Frontend** — React, Next.js, TypeScript, Tailwind, Framer Motion
- **Backend** — Node.js, Go, Python (FastAPI), Java (Spring Boot)
- **Mobile** — React Native, Flutter
- **DevOps** — AWS, Docker, Kubernetes, GitHub Actions, Terraform
- **AI/ML** — OpenAI API, LangChain, Hugging Face
- **Databases** — PostgreSQL, MongoDB, Redis

---

## Design Philosophy

> Clarity over flashiness.

- Bold typography, minimal chrome
- Subtle animations that inform rather than distract
- Code as a visual — real snippets, not mockups
- Outcome-focused copy for startup founders

---

## License

MIT
