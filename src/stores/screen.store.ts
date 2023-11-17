/* imports */
import { writable, type Writable } from 'svelte/store'
import type { PossibleScreenSaverType } from '../types/common'
/* store */
export const isScreenPlaying: Writable<boolean> = writable(false)
export const currentScreen: Writable<PossibleScreenSaverType> = writable('fish')