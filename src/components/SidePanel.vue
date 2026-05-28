<script setup lang="ts">
const stack = [
  { heading: 'Languages', items: ['Python', 'C++', 'TypeScript'] },
  { heading: 'Web & APIs', items: ['FastAPI', 'Vue', 'HTML / CSS', 'REST APIs'] },
  { heading: 'Databases', items: ['PostgreSQL', 'SQL'] },
  { heading: 'Tools & Systems', items: ['Git', 'Linux', 'ROS2'] },
]
</script>

<template>
  <aside class="split-left">
    <div>
      <p class="split-label">Software Developer and Student</p>
      <h1 class="split-name">Bennett Latosinszky</h1>
    </div>

    <p class="split-tagline">
      Building software and learning new technologies along the way.
    </p>

    <div class="split-ctas">
      <a href="mailto:b.lato@web.de" class="btn-primary">Get in touch</a>
      <a href="https://github.com/Latfoo" class="icon-btn" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/bennett-latosinszky-233205283/" class="icon-btn" title="LinkedIn" aria-label="LinkedIn" target="_blank" rel="noopener">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>

    <div class="split-stack">
      <div v-for="group in stack" :key="group.heading" class="stack-group">
        <p class="stack-heading">{{ group.heading }}</p>
        <div class="stack-items">
          <span v-for="item in group.items" :key="item" class="stack-item">{{ item }}</span>
        </div>
      </div>
    </div>

    <div class="about-cards">
      <div class="about-card">
        <p class="about-card-label">Education</p>
        <div class="about-entry">
          <p class="about-card-title">B.Sc. Mechanical Engineering (Mechatronics)</p>
          <p class="about-card-sub">Hamburg University of Technology</p>
          <ul class="about-bullets">
            <li>Semester Abroad, Luleå University of Technology, Sweden</li>
          </ul>
        </div>
      </div>
      <div class="about-card">
        <p class="about-card-label">Background</p>
        <div class="about-entry">
          <p class="about-card-title">C++ Teaching Assistant</p>
          <ul class="about-bullets">
            <li>Taught C++ fundamentals including algorithms, data structures, and object-oriented programming</li>
            <li>Developed exercises and problem sets for weekly tutorial sessions with up to 50 bachelor students</li>
            <li>Mentored students through project work, debugging sessions, and code reviews</li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.split-left {
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
}

.split-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.625rem;
}

.split-name {
  font-size: clamp(2.75rem, 4.5vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--ink);
}

.split-tagline {
  font-size: clamp(1rem, 1.2vw, 1.1875rem);
  color: var(--ink-2);
  line-height: 1.65;
}

.split-bio {
  font-size: 0.9375rem;
  color: var(--ink-2);
  line-height: 1.85;
}

.split-ctas {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.split-stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.stack-heading {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.stack-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.stack-item {
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.3125rem 0.75rem;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--ink-2);
  border-radius: 0.5rem;
  letter-spacing: -0.01em;
}

.about-cards {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  overflow: hidden;
}

.about-card {
  padding: 1.375rem 1.75rem;
}

.about-card + .about-card {
  border-top: 1px solid var(--border);
}

.about-card-label {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 0.5rem;
}

.about-card-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  margin-bottom: 0.2rem;
}

.about-card-sub {
  font-size: 0.8125rem;
  color: var(--ink-2);
  line-height: 1.6;
}

.about-entry + .about-entry { margin-top: 0.75rem; }

.about-bullets {
  list-style: none;
  padding: 0;
  margin: 0.2rem 0 0;
}

.about-bullets li {
  font-size: 0.8125rem;
  color: var(--ink-2);
  line-height: 1.6;
  padding-left: 0.9rem;
  position: relative;
}

.about-bullets li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--ink-3);
}

.about-skills { margin-top: 0.75rem; }
</style>
