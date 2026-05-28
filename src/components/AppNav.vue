<template>
  <nav class="site-nav">
    <div class="nav-inner">
      <slot name="left" />
      <slot name="right" />
    </div>
  </nav>
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--nav-h);
  background: color-mix(in oklab, var(--bg) 82%, transparent);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid color-mix(in oklab, var(--border) 65%, transparent);
}

.nav-inner {
  padding: 0 clamp(1.5rem, 5.5vw, 5.5rem);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
