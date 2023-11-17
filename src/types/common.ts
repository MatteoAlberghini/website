/* icons */
export type PossibleIconType = 'txt' | 'tool' | 'folder'
/* theme  */
export type PossibleThemeType = 'violet' | 'yellow' | 'light'
export type PossibleThemeData = { text: string, value: PossibleThemeType }
export const MapThemeToData: Record<PossibleThemeType, PossibleThemeData> = {
  violet: { text: 'violet (yellow highlights)', value: 'violet' }, // todo update this with translated string
  yellow: { text: 'yellow (orange highlights)', value: 'yellow' },
  light: { text: 'light (black highlights)', value: 'light' },
}
export const themes: PossibleThemeData[] = [
  { text: 'violet (yellow highlights)', value: 'violet' },
  { text: 'yellow (orange highlights)', value: 'yellow' },
  { text: 'light (red highlights)', value: 'light' }
]
/* screen saver */
export type PossibleScreenSaverType = 'fish' | 'planet'
export type PossibleScreenData = { text: string, value: PossibleScreenSaverType }
export const MapScreenToData: Record<PossibleScreenSaverType, PossibleScreenData> = {
  fish: { text: 'roaming fishes', value: 'fish' },
  planet: { text: 'bouncing planet', value: 'planet' },
}
export const screens: PossibleScreenData[] = [
  { text: 'roaming fishes', value: 'fish' },
  { text: 'bouncing planet', value: 'planet' },
]