/* imports */
import { writable, type Writable } from 'svelte/store'
import type { PossibleVolumeSettingType } from '../types/common'
/* stores */
export const soundActive: Writable<boolean> = writable(false)
export const soundVolume: Writable<PossibleVolumeSettingType> = writable(0.05)
export const clickAudioPlayer: Writable<HTMLAudioElement> = writable()