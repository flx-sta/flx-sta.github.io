import { reactive } from 'vue';

interface State {
  theme: Theme;
}

let theme: Theme = 'light';
const lsTheme = localStorage.getItem('theme');

if (lsTheme && ['dark', 'light'].includes(lsTheme)) {
  theme = lsTheme as Theme;
}

export const state = reactive<State>({
  theme,
});
