/* components */
type SliderType = {
  min: number,
  max: number,
  step: number,
  datalist: string[],
  label: string,
}
export type SelectorType = {
  value: string,
  text: string,
}
/* general */
export type WindowPathType = {
  title: string,
  path: string,
}
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
export type PossibleScreenSaverType = 'fish' | 'planet' | 'rain'
export type PossibleScreenData = { text: string, value: PossibleScreenSaverType }
export const MapScreenToData: Record<PossibleScreenSaverType, PossibleScreenData> = {
  fish: { text: 'roaming fishes', value: 'fish' },
  planet: { text: 'bouncing planet', value: 'planet' },
  rain: { text: 'heavy rain', value: 'rain' },
}
export const screens: PossibleScreenData[] = [
  { text: 'roaming fishes', value: 'fish' },
  { text: 'bouncing planet', value: 'planet' },
  { text: 'heavy rain', value: 'rain' },
]
/* sound */
export type PossibleVolumeSettingType = 0.05 | 0.1 | 0.3
export const VolumeSettings: SliderType = {
  min: 0,
  max: 100,
  step: 50,
  datalist: ['quiet', 'normal', 'loud'],
  label: 'sound volume',
}
export const MapInputValueToValue: Record<number, PossibleVolumeSettingType> = {
  0: 0.05,
  50: 0.1,
  100: 0.3,
}
export const MapValueToInputValue: Record<PossibleVolumeSettingType, number> = {
  0.05: 0,
  0.1: 50,
  0.3: 100,
}
/* changelog */
type SingleLogType = {
  title: string,
  content: string,
}
export type LogSettingsType = {
  id: string,
  complete: boolean,
  version: string,
  data: { todo: SingleLogType[], progress: SingleLogType[], done: SingleLogType[] },
}
/* contacts */
export type ContactType = {
  id: string,
  url: string,
  inputs: {
    id: string,
    type: 'input' | 'area',
    label: string,
    labelAddition?: string,
    inputType?: string,
    isRequired: boolean,
  }[]
} 
/* projects */
export type ProjectContentType = 'genuino' | 'waterkaarten' | 'o9solutions'
export type ProjectOverviewType = {
  folderGroup: string,
  items: {
    id: ProjectContentType,
    link: string,
    path: string,
    title: string,
    description: string,
    image: string,
    type: 'work' | 'personal',
    tag: ('website' | 'app' | 'iot' | 'script')[],
  }[],
}