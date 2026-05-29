<script setup lang="ts">
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import { RouterLink } from 'vue-router'

const tags = ['git', 'ROS2', 'Python', 'C++', 'Gazebo', 'RViz']

const scope = [
  'Literature review of existing informative path planning strategies, including related work on autonomous quadrotors',
  'Selection and implementation of a planning approach, integrated with the existing Gaussian process field estimator and hardware setup',
  'Integration with the existing low-level controller on the BlueROV',
  'Validation in simulation (Gazebo / RViz) and real-world experiments with defined evaluation metrics',
  'Optional baseline comparison and critical discussion of limitations and future directions',
]
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
  </AppNav>

  <main>
    <div class="content-wrap">

      <section class="proj-hero">
        <div class="wip-banner">
          <span class="wip-dot"></span>
          Work in progress — this project just started. More to come.
        </div>
        <p class="proj-label">ROS2 / Python / C++ &middot; TUHH Bachelor Thesis</p>
        <h1 class="proj-title">Informative Path Planning for Exploring Static Environmental Fields with an Underwater Robot</h1>
        <p class="proj-lead">
          Selecting, implementing, and evaluating an informative path planning approach for a BlueROV
          underwater robot maximizing information gain about a stationary scalar field under
          limited mission duration, with validation in simulation and real-world experiments.
        </p>
        <div class="card-tags" style="margin-bottom:1.75rem">
          <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </section>

      <section class="proj-section">
        <div class="proj-overview-grid">
          <div>
            <span class="section-label">The Challenge</span>
            <p class="proj-about-text">
              Exploring spatially distributed environmental fields is one of the most promising
              applications for autonomous underwater vehicles. To do this efficiently, measurement
              paths must be planned to maximize information gain under a limited mission duration
              or path length constraint.
            </p>
            <p class="proj-about-text">
              The goal is to select, implement, and evaluate a suitable <em>informative path
              planning</em> approach for a BlueROV. The robot explores a stationary, scalar field
              (generated and measured via an infrared-based setup), building up a field estimate
              using a pre-existing Gaussian process-based method.
            </p>
          </div>
          <div>
            <span class="section-label">Scope</span>
            <ul class="proj-list">
              <li v-for="item in scope" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="proj-section">
        <span class="section-label">Tech Stack</span>
        <p class="proj-about-text">
          The software runs on ROS2, with Python handling high-level path planning and C++
          used for the low-level control interface. Field estimation is done via Gaussian
          processes. Gazebo and RViz are used for simulation and visualization before
          deploying on the physical BlueROV.
        </p>
        <div class="proj-table-wrap" style="margin-top:1rem">
          <table class="proj-table">
            <thead>
              <tr><th>Component</th><th>Technology</th></tr>
            </thead>
            <tbody>
              <tr><td>Middleware</td><td>ROS2</td></tr>
              <tr><td>Informative path planning</td><td>Python</td></tr>
              <tr><td>Low-level control</td><td>C++</td></tr>
              <tr><td>Field estimation</td><td>Gaussian Processes</td></tr>
              <tr><td>Simulation</td><td>Gazebo + RViz</td></tr>
              <tr><td>Robot platform</td><td>BlueROV</td></tr>
              <tr><td>Experimental sensing</td><td>Infrared-based setup</td></tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  </main>

  <AppFooter />
</template>
