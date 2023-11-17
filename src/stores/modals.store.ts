/* imports */
import { writable, type Writable } from 'svelte/store'
/* store */
export const modalFocused: Writable<number> = writable(1)