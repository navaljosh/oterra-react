export function EmoteLangImageServer(name) {
  let lang = localStorage.getItem('language') ?? 'EN';
  const fallbackLang = lang === 'undefined' ? 'EN' : lang;
  return require(`../../assets/Footer/emotions/${fallbackLang}/${name}`);
}
