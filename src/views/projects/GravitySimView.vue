<script setup lang="ts">
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import { RouterLink } from 'vue-router'

const tags = ['C++', 'git', 'OpenGL', 'Python']

const features = [
  'Real-time 3D N-body gravity simulation with elastic collisions',
  'Four numerical integrators switchable at runtime via GUI',
  'Energy conservation benchmark comparing integrator stability',
  'O(N²) force evaluation with Newton\'s third law optimization',
  'Scene loading via JSON files',
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
    <template #right>
      <a href="https://github.com/Latfoo/gravitySimulator" target="_blank" rel="noopener" class="nav-gh">
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
        <p class="proj-label">C++ / OpenGL</p>
        <h1 class="proj-title">Real-Time Gravity Simulation</h1>
        <p class="proj-lead">
          Started as a 2D circle bouncing under gravity and grew into a full 3D N-body simulator,
          evolving from basic kinematics to Newtonian dynamics, from a single body to arbitrarily many,
          and from Euler integration to a runtime-switchable set of four numerical methods with an
          energy conservation benchmark.
        </p>
        <div class="card-tags" style="margin-bottom:1.75rem">
          <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <a href="https://github.com/Latfoo/gravitySimulator" target="_blank" rel="noopener" class="btn-primary">
          View on GitHub
        </a>
      </section>

      <section class="proj-section">
        <div class="media-block">
          <video controls :poster="`https://Latfoo.github.io/gravitySimulator/preview.gif`" class="media-video">
            <source src="https://Latfoo.github.io/gravitySimulator/demo_video.mp4" type="video/mp4" />
          </video>
          <p class="media-caption">Full simulation demo including GUI</p>
        </div>
      </section>

      <section class="proj-section">
        <div class="proj-overview-grid">
          <div>
            <span class="section-label">Key Features</span>
            <ul class="proj-list">
              <li v-for="item in features" :key="item">{{ item }}</li>
            </ul>
            <span class="section-label" style="margin-top:1.75rem">Idea</span>
            <p class="proj-about-text">
              The simulation models a system of mutually interacting bodies where every object
              exerts gravitational force on every other. It runs in real time and allows for
              dynamic manipulation of the simulation, enabling direct observation of how
              different numerical models behave.
            </p>
            <p class="proj-about-text">
              Originally a simple 2D experiment using basic kinematics, it gradually evolved into
              a full 3D simulation incorporating Newtonian dynamics, collision handling, and
              interactive runtime control through a custom GUI.
            </p>
          </div>
          <div class="media-block">
            <img
              src="https://Latfoo.github.io/gravitySimulator/gui_demo.png"
              alt="GUI controls and integrator comparison"
              class="media-img"
            />
            <p class="media-caption">GUI controls &amp; integrator comparison</p>
          </div>
        </div>
      </section>

      <section class="proj-section">
        <span class="section-label">Numerical Integrators</span>
        <p class="proj-about-text">
          Four numerical integrators are supported and can be switched at runtime via the GUI.
          Symplectic integrators preserve the symplectic structure of Hamiltonian systems,
          keeping energy error bounded and oscillating rather than drifting indefinitely.
          Non-symplectic methods carry no such guarantee, though a high-order method like
          RK4 can still achieve negligible drift on practical timescales.
        </p>
        <div class="proj-table-wrap">
          <table class="proj-table">
            <thead>
              <tr><th>Integrator</th><th>Order</th><th>Symplectic</th></tr>
            </thead>
            <tbody>
              <tr><td>Explicit Euler</td><td>1st</td><td>No</td></tr>
              <tr><td>Semi-implicit Euler</td><td>1st</td><td>Yes</td></tr>
              <tr><td>Leapfrog</td><td>2nd</td><td>Yes</td></tr>
              <tr><td>RK4</td><td>4th</td><td>No</td></tr>
            </tbody>
          </table>
        </div>
        <div class="media-block" style="margin-top:1.5rem">
          <img
            src="https://Latfoo.github.io/gravitySimulator/energy_errors.png"
            alt="Relative energy error over simulated time for each integrator"
            class="media-img"
          />
          <p class="media-caption">Relative energy error |ΔE/E₀| over simulated time. Symplectic methods stay bounded; Explicit Euler drifts.</p>
        </div>
      </section>

      <section class="proj-section">
        <span class="section-label">Scalability</span>
        <p class="proj-about-text">
          Force evaluation is O(N²) by nature. Newton's third law halves that cost by
          evaluating each pair once, but it introduces write conflicts when parallelizing
          across CPU cores with OpenMP. The safe parallel alternative drops the optimization
          and assigns each body its own independent loop: 2x the evaluations, but conflict-free.
        </p>
        <p class="proj-about-text">
          Whether parallelism pays off depends on body count. Thread startup overhead is
          fixed per frame and dominates at small N. The crossover is roughly 100 to 200 bodies.
        </p>
        <div class="proj-table-wrap" style="margin-top:0.5rem">
          <table class="proj-table">
            <thead>
              <tr><th>Bodies</th><th>Parallel worth it?</th></tr>
            </thead>
            <tbody>
              <tr><td>&lt; 100</td><td>No, thread overhead dominates</td></tr>
              <tr><td>~100–200</td><td>Marginal, roughly break-even</td></tr>
              <tr><td>500+</td><td>Yes, clear speedup</td></tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  </main>

  <AppFooter />
</template>
