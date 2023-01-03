<template>
  <SectionWrapper :title="t('title')">
    <div class="skills-charts-wrapper grid lg:grid-cols-2 grid-cols-1 gap-6">
      <SkillsCollection
          v-for="(skill) in skills"
          :key="`skill-collection-${skill.title}`"
          :title="skill.title"
          :items="skill.data"
      />
    </div>
  </SectionWrapper>
</template>

<script lang="ts">
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
} from 'chart.js';
import {defineComponent, computed} from 'vue';
import SectionWrapper from './SectionWrapper.vue';
import {useI18n} from 'vue-i18n';
import SkillsCollection, {SkillItem} from "@/components/SkillsCollection.vue";
import javaLogo from '@/assets/img/logo/java-logo.png';
import javascriptLogo from '@/assets/img/logo/javascript-logo.png';
import phpLogo from '@/assets/img/logo/php-logo.png';
import pythonLogo from '@/assets/img/logo/python-logo.png';
import typescriptLogo from '@/assets/img/logo/typescript-logo.png';
import angularLogo from '@/assets/img/logo/angular-logo.png';
import jestLogo from '@/assets/img/logo/jest-logo.jpg';
import nodejsLogo from '@/assets/img/logo/nodejs-logo.png';
import reactLogo from '@/assets/img/logo/react-logo.png';
import socketIoLogo from '@/assets/img/logo/socketio-logo.svg';
import svelteLogo from '@/assets/img/logo/svelte-logo.png';
import vueJsLogo from '@/assets/img/logo/vuejs-logo.png';
import restLogo from '@/assets/img/logo/rest-logo.png';
import webSocketLogo from '@/assets/img/logo/websocket-logo.png';
import dynamoDbLogo from '@/assets/img/logo/dynamodb-logo.png';
import end2endTestingLogo from '@/assets/img/logo/end2endtesting-logo.png';
import firebaseLogo from '@/assets/img/logo/firebase-logo.png';
import integrationTestingLogo from '@/assets/img/logo/ingrationtesting-logo.png';
import mysqlLogo from '@/assets/img/logo/mysql-logo.svg';
import nosqlLogo from '@/assets/img/logo/nosql-logo.png';
import postgresqlLogo from '@/assets/img/logo/postgresql-logo.png';
import unitTestingLogo from '@/assets/img/logo/unittesting-logo.png';
import germanyLogo from '@/assets/img/logo/germany-logo.png';
import usaLogo from '@/assets/img/logo/usa-logo.png';
import travisLogo from '@/assets/img/logo/travis-logo.jpg';
import gitlabLogo from '@/assets/img/logo/gitlab-logo.png';
import githubLogo from '@/assets/img/logo/github-logo.svg';
import jenkinsLogo from '@/assets/img/logo/jenkins-logo.png';

interface Skill {
  title: string,
  data: SkillItem[]
}

Chart.register(BarElement, CategoryScale, BarController, LinearScale);

export default defineComponent({
  components: {SkillsCollection, SectionWrapper},
  setup() {
    const {t} = useI18n({inheritLocale: true});

    const skills = computed<Skill[]>(() => [
      {title: t('programmingLanguages.title'), data: programmingSkills},
      {title: t('tools.title'), data: tools},
      {title: t('communication.title'), data: communication},
      {title: t('databases.title'), data: databases},
      {title: t('testing.title'), data: testing},
      {title: t('cidcd.title'), data: ciCd},
      {title: t('languages.title'), data: languages},
    ]);

    return {
      t,
      skills,
    };
  },
});

const programmingSkills: SkillItem[] = [
  {name: 'JavaScript', img: javascriptLogo,},
  {name: 'TypeScript', img: typescriptLogo,},
  {name: 'PHP', img: phpLogo,},
  {name: 'Java', img: javaLogo,},
  {name: 'Python', img: pythonLogo,},
];

const tools: SkillItem[] = [
  {name: 'Node.js', img: nodejsLogo},
  {name: 'Vue.js', img: vueJsLogo},
  {name: 'react', img: reactLogo},
  {name: 'jest', img: jestLogo},
  {name: 'angular', img: angularLogo},
  {name: 'svelte', img: svelteLogo},
];

const communication: SkillItem[] = [
  {name: 'REST', img: restLogo},
  {name: 'WebSocket', img: webSocketLogo},
  {name: 'socket.io', img: socketIoLogo},
];

const databases: SkillItem[] = [
  {name: 'MySQL', img: mysqlLogo},
  {name: 'PostgreSQL', img: postgresqlLogo},
  {name: 'NoSQL', img: nosqlLogo},
  {name: 'firebase', img: firebaseLogo},
  {name: 'DynamoDB', img: dynamoDbLogo},
]

const testing: SkillItem[] = [
  {name: 'end to end', img: end2endTestingLogo},
  {name: 'unit', img: unitTestingLogo},
  {name: 'integration', img: integrationTestingLogo},
];

const ciCd: SkillItem[] = [
  {name: 'gitlab-ci', img: gitlabLogo},
  {name: 'github-ci', img: githubLogo},
  {name: 'jenkins', img: jenkinsLogo},
  {name: 'travis', img: travisLogo},
]

const languages: SkillItem[] = [
  {name: 'Deutsch', img: germanyLogo},
  {name: 'English', img: usaLogo},
];
</script>

<i18n lang="yaml">
en:
  title: Skills
  programmingLanguages:
    title: Programming languages
  tools:
    title: Tools
  communication:
    title: Communication
  databases:
    title: Databases
  testing:
    title: Testing
  cidcd:
    title: CI / CD
  languages:
    title: Languages
de:
  title: Kompetenzen
  programmingLanguages:
    title: Programmiersprachen
  tools:
    title: Tools
  communication:
    title: Kommunikation
  databases:
    title: Datenbanken
  testing:
    title: Testing
  cidcd:
    title: CI / CD
  languages:
    title: Sprachen
</i18n>
