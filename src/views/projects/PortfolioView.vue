<script setup lang="ts">
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import { RouterLink } from 'vue-router'

const tags = ['Vue 3', 'TypeScript']
</script>

<template>
  <AppNav>
    <template #left>
      <RouterLink to="/" class="nav-back">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Back
      </RouterLink>
    </template>
    <template #right>
      <a href="https://github.com/Latfoo/portfolio" target="_blank" rel="noopener" class="nav-gh">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        GitHub
      </a>
    </template>
  </AppNav>

  <main>
    <div class="content-wrap">

      <section class="proj-hero">
        <p class="proj-label">Vue 3 / TypeScript / Vite</p>
        <h1 class="proj-title">Personal Portfolio Website</h1>
        <p class="proj-lead">
          A portfolio site to show my projects. Built with Vue 3 and TypeScript on the frontend,
          Vite as the build tool, and Vue Router for client-side navigation.
        </p>
        <div class="card-tags" style="margin-bottom:1.75rem">
          <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <a href="https://github.com/Latfoo/portfolio" target="_blank" rel="noopener" class="btn-primary">
          View on GitHub
        </a>
      </section>

      <section class="proj-section">
        <span class="section-label">About</span>
        <p class="proj-about-text">
          I wanted a place to put my projects online without using a template. The previous version
          was built with an Express server and plain HTML. This version is a complete rebuild using
          Vue 3, moving all rendering to the client and dropping the server entirely.
        </p>
        <p class="proj-about-text">
          It was a good way to get familiar with Vue's component model and single-file component
          structure outside of a tutorial context. Each page and UI piece is its own
          <span class="inline-code">.vue</span> file with its template, logic, and styles in one place.
        </p>
      </section>

      <section class="proj-section">
        <span class="section-label">How it fits together</span>
        <p class="proj-about-text">
          The app is a Single Page Application — the browser loads one
          <span class="inline-code">index.html</span> and Vue takes over from there.
          Vue Router intercepts navigation and swaps out which component is rendered based on the
          URL, without fetching a new page from the server. This makes navigation instant.
        </p>
        <p class="proj-about-text">
          Vite handles the build. In development it serves files with native ES modules and
          hot-reloads changes without a full page refresh. For production it bundles everything
          into a small set of static files that can be deployed anywhere — in this case, Vercel.
          A single rewrite rule in
          <span class="inline-code">vercel.json</span> sends all routes to
          <span class="inline-code">index.html</span> so Vue Router handles them correctly.
        </p>
        <p class="proj-about-text">
          All styles live in a single global stylesheet with custom CSS properties for colours,
          spacing, and typography. No CSS framework or utility classes — every rule is written by hand.
        </p>
        <div class="proj-table-wrap" style="margin-top:1.5rem">
          <table class="proj-table">
            <thead>
              <tr><th>Technology</th><th>What it does</th></tr>
            </thead>
            <tbody>
              <tr><td>Vue 3</td><td>Component-based UI framework; all pages are Vue single-file components</td></tr>
              <tr><td>TypeScript</td><td>Adds types to components and data; checked at build time via vue-tsc</td></tr>
              <tr><td>Vite</td><td>Dev server with hot module replacement; bundles for production</td></tr>
              <tr><td>Vue Router</td><td>Client-side routing between pages without server requests</td></tr>
              <tr><td>CSS</td><td>Single global stylesheet with CSS custom properties; no framework</td></tr>
              <tr><td>Vercel</td><td>Hosts the static build; SPA rewrite rule in vercel.json</td></tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  </main>

  <AppFooter />
</template>
