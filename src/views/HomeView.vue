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
