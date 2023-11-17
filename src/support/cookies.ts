/// typescript
import { MapThemeToData, type PossibleThemeData, type PossibleThemeType } from '../types/common'

/* support */
export function getCookie(name: string) {
  let cookieName = name + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') { c = c.substring(1) }
      if (c.indexOf(cookieName) == 0) { return c.substring(cookieName.length, c.length) }
  }
  return '';
}
export function setCookie(name: string, value: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/; secure";
}
export function deleteCookie(name: string) {
  document.cookie = name+'=; Max-Age=-99999999;'; 
}
/* theme */
export function changeTheme(theme: PossibleThemeType) {
  setCookie('theme', theme, 365)
  document.documentElement.setAttribute('data-theme', theme)
}
export function getTheme(): PossibleThemeData {
  const htmlAttribute: PossibleThemeType = document.documentElement.getAttribute('data-theme') as PossibleThemeType || 'violet' 
  return MapThemeToData[htmlAttribute]
}
