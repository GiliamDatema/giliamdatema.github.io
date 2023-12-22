import { ref, watch } from 'vue'

export function useColorScheme(PrimeVue) {

  const getPreferredColorScheme = () => {
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
  }
  const setColorScheme = (scheme) => {
    switch (scheme) {
      case 'dark':
        PrimeVue.changeTheme('lara-light-green', 'lara-dark-green', 'theme-link', () => {})
        break;
      case 'light':
        PrimeVue.changeTheme('lara-dark-green', 'lara-light-green', 'theme-link', () => {})
        break;
      default:
        break;
    }
  }
  const updateColorScheme = () => setColorScheme(getPreferredColorScheme())
  const colorSchemeQuery = window.matchMedia?.('(prefers-color-scheme: dark)')
  colorSchemeQuery.addEventListener('change', updateColorScheme)
  updateColorScheme()

  const toggleColorScheme = (isDark) => setColorScheme(isDark ? 'dark' : 'light')
  const darkMode = ref(getPreferredColorScheme() === 'dark' ? true : false)
  watch(darkMode, (isDark) => toggleColorScheme(isDark))

  return darkMode
}
