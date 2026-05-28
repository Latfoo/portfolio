<script setup lang="ts">
import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'
import SidePanel from '../components/SidePanel.vue'
import ProjectGrid from '../components/ProjectGrid.vue'
</script>

<template>
  <AppNav>
    <template #left>
      <span class="nav-logo">Bennett Latosinszky</span>
    </template>
    <template #right>
      <div class="nav-links">
        <a href="mailto:b.lato@web.de" class="nav-link">Contact</a>
        <a href="https://github.com/Latfoo" target="_blank" rel="noopener" class="nav-link">GitHub</a>
      </div>
    </template>
  </AppNav>

  <main class="main-wrapper">
    <div class="split-layout">
      <SidePanel />
      <ProjectGrid />
    </div>
  </main>

  <AppFooter />
</template>

<style scoped>
.nav-logo {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav-link {
  font-size: 0.875rem;
  color: var(--ink-2);
  transition: color 200ms;
}

@media (hover: hover) {
  .nav-link:hover { color: var(--ink); }
}

.main-wrapper {
  position: relative;
  overflow: hidden;
}

.split-layout {
  position: relative;
  z-index: 1;
  padding: 5rem clamp(1.5rem, 5.5vw, 5.5rem) 5rem;
  display: grid;
  grid-template-columns: clamp(260px, 30vw, 460px) 1fr;
  gap: clamp(3rem, 5vw, 6.5rem);
  align-items: start;
}

@media (max-width: 768px) {
  .split-layout {
    grid-template-columns: 1fr;
    padding: 3rem 1.5rem 4rem;
    gap: 2.5rem;
  }
}
</style>
