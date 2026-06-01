<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer">
    <span>&copy; 2026 Bennett Latosinszky</span>
    <RouterLink to="/impressum" class="footer-link">Legal Notice/ Privacy Policy</RouterLink>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
  padding: 1.75rem clamp(1.5rem, 5.5vw, 5.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--ink-3);
}

.footer-link {
  font-size: 0.8125rem;
  color: var(--ink-3);
  transition: color 200ms;
}

@media (hover: hover) {
  .footer-link:hover { color: var(--ink-2); }
}
</style>
