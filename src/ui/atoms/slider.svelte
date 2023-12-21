<!-- script -->
<script lang="ts">
  /* imports */
  import { createEventDispatcher } from 'svelte'
  import { clickAudioPlayer, soundActive } from '../../stores/sounds.store'

  /* exports */
  export let min: number
  export let max: number
  export let value: number
  export let step: number
  export let label: string
  export let datalist: string[]
  /* dispatch */
  const dispatcher = createEventDispatcher<{ input: { value: string }}>()
  /* functions */
  function onInput(e: Event) {
    const target = e.target as HTMLInputElement
    if ($soundActive === true) { $clickAudioPlayer.play() }
    dispatcher('input', { value: target.value })
  }
</script>

<!-- template -->
<div class="container">
  <span class="title">{label}</span>
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    class="slider"
    on:input={onInput}
  />
  <div class="ranges">
    {#each datalist as label}
    <span class="single-range">{label}</span>
    {/each}
  </div>
</div>

<!-- style -->
<style>
  .container {
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    /* size */
    width: 100%;
    /* margins */
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 12px;
  }
  .title {
    /* fonts */
    font-size: 16px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .slider {
    /* size */
    width: 100%;
    height: 24px;
    /* margins */
    margin-top: 4px;
    /* reset */
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    /* color */
    background-color: transparent;
    /* flex */
    display: flex;
    align-items: center;
    justify-content: center;
    /* cursor */
    cursor: grab;
  }
  .slider:active {
    /* cursor */
    cursor: grabbing;
  }
  .slider::-moz-range-track {
    /* size */
    width: 100%;
    height: 6px;
    /* color */
    background-image: url(/bg-texture.png), linear-gradient(90deg, var(--color-background) 35%, var(--color-highlight) 100%);
    /* border */
    border: 1px solid var(--color-highlight);
  }
  .slider::-moz-range-thumb {
    /* size */
    height: 22px;
    width: 10px;
    /* border */
    border-radius: 0px;
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    /* transition */
    transition: 200ms ease-in-out;
  }
  .ranges {
    /* size */
    width: 100%;
    /* flex */
    display: flex;
    justify-content: space-between;
    /* margins */
    margin-top: 1px;
  }
  .single-range {
    /* fonts */
    font-size: 14px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }

  /* browser support */
  .slider::-webkit-slider-runnable-track {
    /* size */
    width: 100%;
    height: 6px;
    /* color */
    background-image: url(/bg-texture.png), linear-gradient(90deg, var(--color-background) 35%, var(--color-highlight) 100%);
    /* border */
    border: 1px solid var(--color-highlight);
  }
  .slider::-webkit-slider-thumb {
    /* reset */
    -webkit-appearance: none;
    /* size */
    height: 22px;
    width: 10px;
    /* border */
    border-radius: 0px;
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    /* transition */
    transition: 200ms ease-in-out;
    /* margins */
    margin-top: -9px;
  }
</style>