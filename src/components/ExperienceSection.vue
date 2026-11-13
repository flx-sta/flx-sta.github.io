<template>
  <SectionWrapper :title="t('title')">
    <ol class="roles">
      <li v-for="role in roles" :key="role.company" class="role">
        <div class="role-meta">
          <p class="company">{{ role.company }}</p>
          <p class="period">{{ t(role.key + '.period') }}</p>
        </div>
        <div>
          <h3>{{ t(role.key + '.title') }}</h3>
          <p class="role-description">{{ t(role.key + '.description') }}</p>
        </div>
      </li>
    </ol>
  </SectionWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionWrapper from './SectionWrapper.vue';

const roles = [
  { key: 'headwire', company: 'headwire.com, Inc.' },
  { key: 'accenture', company: 'Accenture' },
  { key: 'metaproc', company: 'meta:proc' },
];

export default defineComponent({
  components: { SectionWrapper },
  setup() {
    const { t } = useI18n({ inheritLocale: true });
    return { t, roles };
  },
});
</script>

<style scoped>
.roles {
  list-style: none;
  border: 1px solid var(--line);
  border-radius: 0.65rem;
  background: var(--surface);
}

.role {
  display: grid;
  grid-template-columns: minmax(10rem, 1fr) 3fr;
  gap: 0.55rem 2rem;
  padding: clamp(1.1rem, 3vw, 1.7rem);
}

.role + .role {
  border-top: 1px solid var(--line);
}

.company {
  color: var(--accent);
  font-weight: 700;
}

.period {
  margin-top: 0.2rem;
  color: var(--muted);
  font-size: 0.88rem;
}

h3 {
  font-size: 1.13rem;
  font-weight: 700;
  line-height: 1.35;
}

.role-description {
  margin-top: 0.4rem;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 640px) {
  .role {
    grid-template-columns: 1fr;
  }
}
</style>

<i18n lang="yaml">
en:
  title: Experience
  headwire:
    title: Senior Software Engineer
    period: Jan 2024 – Present
    description: >-
      Built account management features for a golf media platform, including
      saved articles and sign-in flows. I owned frontend architecture and
      backend integrations and improved how asynchronous jobs recover from
      failures with AWS SQS retries and dead-letter queues.
  accenture:
    title: Senior Software Engineer / Team Lead
    period: Jul 2022 – Dec 2023
    description: >-
      Led technical delivery across three enterprise projects with teams of
      up to ten engineers. I designed backend services and API integrations
      and cut JavaScript build time from 30 seconds to 3 seconds with esbuild.
  metaproc:
    title: Head of Frontend / Full Stack Developer
    period: Jul 2018 – Jun 2022
    description: >-
      Led a frontend team and built dashboards, data visualizations, and
      automation workflows with React, TypeScript, and Electron. I also
      helped modernize the Java and Node.js services behind the product.
de:
  title: Berufserfahrung
  headwire:
    title: Senior Software Engineer
    period: Jan. 2024 – heute
    description: >-
      Für eine Golf-Medienplattform habe ich Kontofunktionen wie gespeicherte
      Artikel und die Anmeldung entwickelt. Ich verantwortete die
      Frontend-Architektur sowie die Backend-Integrationen und verbesserte mit
      Wiederholungsversuchen und Dead-Letter-Queues in AWS SQS die
      Fehlerbehandlung asynchroner Jobs.
  accenture:
    title: Senior Software Engineer / Team Lead
    period: Juli 2022 – Dez. 2023
    description: >-
      Ich leitete die technische Umsetzung von drei Unternehmensprojekten mit
      Teams von bis zu zehn Entwicklern. Ich entwarf Backend-Dienste und
      API-Integrationen und verkürzte mit esbuild die JavaScript-Build-Zeit
      von 30 auf 3 Sekunden.
  metaproc:
    title: Head of Frontend / Full Stack Developer
    period: Juli 2018 – Juni 2022
    description: >-
      Ich leitete ein Frontend-Team und entwickelte Dashboards,
      Datenvisualisierungen und Automatisierungsabläufe mit React, TypeScript
      und Electron. Außerdem half ich, die Java- und Node.js-Dienste der
      Plattform zu modernisieren.
</i18n>
