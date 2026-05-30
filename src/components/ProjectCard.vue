<script setup lang="ts">
import type { Project } from '../data/projects'
defineProps<{ project: Project }>()
</script>

<template>
  <a :href="project.href" class="card">
    <div
      class="card-media"
      :style="project.mediaBg
        ? `background: ${project.mediaBg}; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;`
        : ''"
    >
      <img
        v-if="project.mediaImage"
        :src="project.mediaImage"
        :alt="`${project.title} preview`"
        class="card-img"
        :style="project.mediaImageStyle"
        loading="lazy"
      />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="project.mediaSvg" v-html="project.mediaSvg" />
      <span v-if="project.badge" class="card-badge">{{ project.badge }}</span>
    </div>

    <div class="card-body">
      <div class="card-header">
        <div>
          <p class="card-meta">{{ project.meta }}</p>
          <h3 class="card-title">{{ project.title }}</h3>
        </div>
        <svg class="card-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      </div>
      <p class="card-desc">{{ project.description }}</p>
    </div>
  </a>
</template>

<style scoped>
.card {
  display: block;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  overflow: hidden;
  transition:
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 260ms ease;
}

.card-media {
  height: 280px;
  overflow: hidden;
  background: var(--bg);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 1.5rem 1.75rem 1.75rem;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.625rem;
}

.card-meta {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 0.3rem;
  letter-spacing: 0.02em;
}

.card-title {
  font-size: 1.1875rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.025em;
  line-height: 1.25;
}

.card-arrow {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  margin-top: 0.375rem;
  color: var(--ink-3);
  transition: color 220ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.card-desc {
  font-size: 0.9375rem;
  color: var(--ink-2);
  line-height: 1.7;
}

@media (hover: hover) {
  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(26, 23, 20, 0.08);
    border-color: var(--border-2);
  }

  .card:hover .card-arrow {
    color: var(--accent);
    transform: translate(2px, -2px);
  }
}

@media (max-width: 640px) {
  .card-media { height: 210px; }
}

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  background: rgba(77, 208, 225, 0.15);
  color: #4dd0e1;
  border: 1px solid rgba(77, 208, 225, 0.3);
  border-radius: 9999px;
  padding: 0.2rem 0.6rem;
}
</style>
