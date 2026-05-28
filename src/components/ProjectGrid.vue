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
