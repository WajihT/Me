---
title: Building F1 Analytics
description: How I built a Formula 1 analytics platform with real-time data, caching, Supabase, FastAPI, and a cross-platform React Native app.
publishedDate: "2025-10-05"
author: Wajih Tarkhani
readTime: "8 min read"
tags: ["FastAPI", "React", "Supabase", "React Native", "F1", "Data Visualization", "Full-Stack"]
---

As a Formula 1 fan and developer, I always wanted a place where I could visualize race results, driver stats, and season analytics my way not limited to whatever the official apps decided to show. That's how **F1 Analytics** started: as a weekend side project that slowly evolved into a complete web and mobile platform powered by live racing data, local caching, and cloud automation.

In this post, I'll walk you through my journey of building it — from early prototypes to deploying a full-stack system that works across web and mobile.

---

## 🧠 The Idea

The goal was simple:  
I wanted to analyze Formula 1 data more deeply — comparing drivers, tracking performance trends, and getting quick access to race history.

I started by experimenting with the [Fast-F1 API](https://docs.fastf1.dev), which provides telemetry and session data. After a few scripts in Python, I realized how much potential there was for visualization and insights. So I decided to turn it into something real — an interactive analytics web app.

---

## ⚙️ The Tech Stack

The project grew into a **three-layer architecture**:

1. **Frontend (Web)** — built with **React + Vite + TailwindCSS + Framer Motion**, deployed on **Vercel**.
2. **Backend (API)** — built using **FastAPI**, running on an **Oracle Cloud instance**.
3. **Database & Storage** — handled by **Supabase**, used for caching and storing precomputed race data.
4. **Mobile App** — built with **React Native (Expo)**, currently in closed testing.

---

## 🚧 The Reality Check: Rate Limiting and Data Challenges

Early on, I hit my first major roadblock: **API rate limiting**.

I was making too many requests to the Fast-F1 API during development, and quickly realized that relying on external APIs in real-time wasn't sustainable. Every page load would trigger multiple API calls, and the response times were inconsistent. I needed full control over the data.

That's when I made the decision to **build my own database**.

### Building a Custom Data Pipeline

Instead of fetching data on-demand, I built a comprehensive data processing pipeline with several Python scripts:

**1. Data Fetching Script**  
This script pulls raw race data from Fast-F1 and other sources after each Grand Prix weekend. It runs automatically and grabs everything I need: lap times, telemetry, session results, and driver performance.

**2. Data Processing Script**  
The raw data isn't very useful on its own, so I built a second script that transforms it into structured JSON files. But I didn't stop there — I also compute derived statistics that would be expensive to calculate on every request:

- **Driver records** — career wins, podiums, fastest laps, DNFs
- **Constructor records** — team performance across seasons
- **Circuit history** — track-specific stats, lap records, historical winners
- **Head-to-head comparisons** — teammate battles, qualifying matchups
- **Season trends** — championship standings evolution, points progression

All of this gets stored in **Supabase**, which acts as my centralized data store.

**3. Web Scraping Scripts**  
The Fast-F1 API doesn't have everything, so I built additional scrapers to fill in the gaps by pulling data from the official F1 API and other sources. This includes things like:
- Driver biographical data
- Team information and liveries
- Sprint race formats and rule changes
- Historical data for older seasons

This multi-script approach means I can update my database weekly without worrying about rate limits, downtime, or API changes breaking my app.

---

## 📦 Caching Strategy

With all this data processing in place, I implemented a smart caching layer that completely changed the app's performance characteristics.

The core idea is simple: **process data once, serve it infinitely**. After each race weekend, my automated pipeline fetches the latest data, processes it through all my transformation scripts, and stores the results in both Supabase and as JSON files. This means the FastAPI backend never has to make external API calls during user requests — it simply serves pre-computed data.

This approach has several key advantages. The app became **dramatically faster** since there's no waiting for external APIs or complex calculations at request time. It's also **far more reliable** because I'm not dependent on third-party uptime or rate limits. And perhaps most importantly, it's **cost-effective** — I only process data once per race weekend rather than on every user interaction.

The trade-off is that data isn't truly "real-time" — it updates weekly after races. But for F1 analytics, where most data stabilizes after a session ends, this is perfectly acceptable. Users get instant responses, and I get to sleep well knowing my infrastructure can handle traffic spikes without breaking the bank.

---

## 🌐 Building the Web App

The web app came together using **React** with **Vite** for blazing-fast builds. I used **TailwindCSS** for styling and **Framer Motion** for smooth animations between views.

Key features include:
- **Live race results** — updated after each session
- **Driver comparisons** — side-by-side stats and telemetry
- **Season analytics** — championship standings, points trends
- **Circuit insights** — track maps, records, historical data

The frontend is deployed on **Vercel**, which handles automatic deployments from my Git repository. The tight integration with my FastAPI backend on Oracle Cloud means data flows seamlessly.

---

## 📱 The Mobile Experience

After the web app was stable, I wanted to bring the same experience to mobile devices. I started building a **React Native app using Expo**, which lets me share a lot of logic with the web frontend while adapting the UI for smaller screens.

**Current status:** The mobile app is in **closed testing** right now. I'm working through feedback from early testers and ironing out platform-specific quirks. The goal is to have feature parity with the web app while optimizing for touch interactions and mobile performance.

The mobile version uses the same FastAPI backend and Supabase data, so maintaining consistency across platforms has been straightforward.

---

## 🔧 Technical Architecture

Here's how everything fits together:

**The Stack:**
- **Frontend Layer**: React web app (Vercel) and React Native mobile app (Expo, in testing)
- **API Layer**: FastAPI backend running on Oracle Cloud
- **Data Layer**: Supabase PostgreSQL database and local JSON cache

**Data Flow:**
1. Python scripts fetch and process F1 data weekly
2. Processed data stored in Supabase and as JSON files
3. FastAPI serves cached data to web and mobile clients
4. Frontend apps query the API for instant responses

Both the web and mobile applications communicate with the same FastAPI backend over HTTPS, which in turn pulls from either Supabase for structured queries or local JSON files for faster read operations. This architecture ensures consistency across platforms while maintaining high performance.

---

## 🎯 What I Learned

Building F1 Analytics taught me several valuable lessons:

**1. Don't rely on external APIs for everything**  
Rate limiting forced me to think about data ownership and caching strategies. Building my own database was more work upfront, but gave me complete control.

**2. Process data once, serve it many times**  
Pre-computing statistics and derived metrics made the app dramatically faster. Users don't want to wait for complex calculations.

**3. Scraping fills the gaps**  
Not all data is available through official APIs. Strategic web scraping helped me build a more complete dataset.

**4. Cross-platform development is powerful**  
Using React and React Native means I write the business logic once and adapt the UI per platform. The API-first architecture made this seamless.

---

## 🚀 What's Next?

The project is far from finished. Here's what I'm working on:

- **Mobile app public launch** — finalizing testing and App Store/Play Store submissions
- **More advanced analytics** — tire strategy analysis, race pace comparisons
- **Live timing integration** — real-time data during race weekends
- **User accounts** — save favorite drivers, custom dashboards
- **Community features** — share insights, compare predictions

---

## 💭 Final Thoughts

Building F1 Analytics has been an incredible learning experience. It started as a simple idea to visualize F1 data and grew into a full-stack system spanning web scraping, data processing, API development, and cross-platform app building.

If you're a fellow F1 fan or developer interested in sports analytics, I'd love to hear your thoughts. Check out the app at **[F1 Analytics](https://f1analytics.online)** and let me know what features you'd like to see next.



