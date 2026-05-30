<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<template>
  <div id="projects" class="split-right">
    <span class="section-label">Projects</span>
    <div class="cards">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </div>
</template>

<style scoped>
.split-right {
  padding-top: 0.125rem;
}

.cards {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
  .cards { grid-template-columns: 1fr; }
}
</style>
