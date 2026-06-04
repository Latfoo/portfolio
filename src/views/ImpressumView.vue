<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<template>
  <AppNav>
    <template #left>
      <RouterLink to="/" class="nav-back">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Back
      </RouterLink>
    </template>
    <template #right>
      <span class="nav-logo">Bennett Latosinszky</span>
    </template>
  </AppNav>

  <main>
    <div class="legal-simple-wrap">
      <div class="legal-simple-grid">

        <div class="legal-simple-col">
          <h2>Legal Notice (Impressum)</h2>
          <p class="legal-simple-sub">According to § 5 DDG / § 18 MStV</p>

          <h3>Responsible Person</h3>
          <p>
            Bennett Latosinszky<br />
            Schumannstraße 66<br />
            22083 Hamburg<br />
            Germany
          </p>

          <h3>Contact</h3>
          <p>
            Email: <a href="mailto:b.lato@web.de">b.lato@web.de</a><br />
            Phone: +49 1575 5762233
          </p>

          <h3>External Links</h3>
          <p>This website contains links to third-party websites. I have no control over their content and accept no liability for it. Responsibility for linked pages lies with their respective operators.</p>
        </div>

        <div class="legal-simple-col">
          <h2>Privacy Policy</h2>
          <p class="legal-simple-sub">Art. 13 GDPR</p>

          <h3>1. Controller</h3>
          <p>
            Bennett Latosinszky<br />
            Schumannstraße 66<br />
            22083 Hamburg<br />
            Germany<br />
            Email: <a href="mailto:b.lato@web.de">b.lato@web.de</a><br />
            Phone: +49 1575 5762233
          </p>

          <h3>2. Hosting and Server Logs</h3>
          <p>
            This website is hosted by Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
            When you visit this website, the hosting provider automatically collects server log data including
            IP address, browser type, operating system, referring URL, and timestamp. This data is stored
            temporarily for security and stability purposes and automatically deleted after 30 days.
            The legal basis is Art. 6(1)(f) GDPR (legitimate interest in the secure and stable
            operation of the website). Data transfers to Vercel's servers in the USA are based on the
            EU-U.S. Data Privacy Framework (European Commission adequacy decision of 10 July 2023).
            For details on how Vercel handles this data, see
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>.
          </p>

          <h3>3. Cookies and Tracking</h3>
          <p>No analytics tools, advertising tracking, or marketing cookies are used on this website.</p>

          <h3>4. External Links</h3>
          <p>Links to external services such as GitHub and LinkedIn are governed by those providers' privacy policies. I have no control over data collected by third-party websites.</p>

          <h3>5. Your Rights</h3>
          <p>Under the GDPR you have the right to access, rectification, erasure, restriction of processing, and data portability, as well as the right to object where processing is based on legitimate interests. Contact me at the address in section 1, or lodge a complaint with a supervisory authority. The competent supervisory authority is: Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (HmbBfDI), Ludwig-Erhard-Str. 22, 20459 Hamburg, <a href="https://datenschutz-hamburg.de/" target="_blank" rel="noopener noreferrer">datenschutz-hamburg.de</a>.</p>

          <p class="legal-simple-updated">Updated June 2026</p>
        </div>

      </div>
    </div>
  </main>

  <AppFooter />
</template>

<style scoped>
.legal-simple-wrap {
  padding: 5rem clamp(1.5rem, 5.5vw, 5.5rem) 5rem;
}

.legal-simple-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;
}

.legal-simple-col h2 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.25rem;
}

.legal-simple-sub {
  font-size: 0.8125rem;
  color: var(--ink-3);
  margin-bottom: 2rem;
}

.legal-simple-col h3 {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-top: 1.5rem;
  margin-bottom: 0.4rem;
}

.legal-simple-col p {
  font-size: 0.9rem;
  color: var(--ink-2);
  line-height: 1.75;
}

.legal-simple-col a {
  color: var(--accent);
}

.legal-simple-updated {
  margin-top: 2rem;
  font-size: 0.8125rem;
  color: var(--ink-3);
}

@media (max-width: 780px) {
  .legal-simple-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>