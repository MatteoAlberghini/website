import { writable, type Writable } from 'svelte/store'

export const modalFocused: Writable<number> = writable(1)