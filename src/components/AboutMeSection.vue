<template>
  <section class="intro">
    <div class="intro-copy">
      <p class="eyebrow">{{ t('eyebrow') }}</p>
      <h1>Felix Staud</h1>
      <p class="role">{{ t('jobTitle') }}</p>
      <p class="description">{{ t('description') }}</p>
      <div class="intro-links">
        <a class="contact-button" :href="contactHref">{{ t('contact') }}</a>
        <a href="https://github.com/flx-sta">GitHub</a>
        <a href="https://www.linkedin.com/in/felix-s-28188719a/">LinkedIn</a>
      </div>
    </div>
    <div class="portrait">
      <img :src="portraitSrc" alt="" width="2400" height="1600" />
    </div>
  </section>
</template>

<script lang="ts">
import { contactHref } from '@/contact';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    portraitSrc: { type: String, required: true },
  },
  setup() {
    const { t } = useI18n({ inheritLocale: true });
    return { t, contactHref };
  },
});
</script>

<style scoped>
.intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(12rem, 18rem);
  align-items: center;
  gap: clamp(2rem, 7vw, 6rem);
  padding-block: clamp(3.5rem, 9vw, 6.5rem);
}

h1 {
  margin-top: 0.5rem;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 750;
  letter-spacing: -0.07em;
  line-height: 1.05;
}

.role {
  margin-top: 0.55rem;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 650;
  line-height: 1.24;
}

.description {
  max-width: 57ch;
  margin-top: 1.2rem;
  color: var(--muted);
  font-size: 1.06rem;
  line-height: 1.65;
}

.intro-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.3rem;
  margin-top: 1.65rem;
  color: var(--accent);
  font-size: 0.95rem;
  font-weight: 700;
}

.intro-links a {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.intro-links .contact-button {
  padding: 0.65rem 1rem;
  border-radius: 0.45rem;
  color: var(--on-accent);
  background: var(--accent);
  text-decoration: none;
}

.contact-button:hover {
  text-decoration: underline;
}

.portrait {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 0.65rem;
}

.portrait img {
  position: absolute;
  inset: 0 auto auto 0;
  /* Frame the face and shoulders within the original landscape photo. */
  width: 391%;
  max-width: none;
  height: auto;
  transform: translate(-43.25%, -32.25%);
}

@media (max-width: 640px) {
  .intro {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
  }

  .portrait {
    width: min(48%, 10rem);
    aspect-ratio: 1;
  }
}
</style>

<i18n lang="yaml">
en:
  eyebrow: Engineering portfolio
  jobTitle: Senior Full Stack Software Engineer
  description: >-
    I own the full lifecycle of complex features, from shaping requirements and
    designing the architecture to launching, supporting, and improving them in
    production. At headwire.com, Inc., I’ve owned the frontend architecture and
    backend integrations for account management on a golf media platform. I bring
    more than a decade of engineering experience and have led teams of up to ten
    engineers.
  contact: Get in touch
de:
  eyebrow: Portfolio
  jobTitle: Senior Full Stack Software Engineer
  description: >-
    Ich verantworte komplexe Funktionen über ihren gesamten Lebenszyklus, von
    der Klärung der Anforderungen und dem Architekturentwurf bis zum
    Produktivbetrieb und zur Weiterentwicklung. Bei headwire.com, Inc. habe ich
    für die Kontoverwaltung einer Golf-Medienplattform die Frontend-Architektur
    und die Backend-Integrationen verantwortet. Ich arbeite seit über zehn Jahren
    in der Softwareentwicklung und habe Teams mit bis zu zehn Personen geleitet.
  contact: Kontakt aufnehmen
</i18n>
