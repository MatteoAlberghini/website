/* icons */
export type PossibleIconType = 'txt' | 'tool' | 'folder'
/* theme  */
export type PossibleThemeType = 'violet' | 'yellow'
export type PossibleThemeData = { text: string, value: string }
export const MapThemeToData: Record<PossibleThemeType, PossibleThemeData> = {
  violet: { text: 'violet (yellow highlights)', value: 'violet' }, // todo update this with translated string
  yellow: { text: 'yellow (orange highlights)', value: 'yellow' },
}