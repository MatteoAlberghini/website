<!-- script -->
<script lang="ts">
  /* imports */
  import { type PossibleScreenSaverType, screens } from '../../../types/common'
  import { changeScreen, getScreen } from '../../../support/cookies'
  import { slide } from 'svelte/transition'
  import { expoOut } from 'svelte/easing'
  import { currentScreen } from '../../../stores/screen.store'
  
  /* refs */
  let containerRef: HTMLDivElement | null = null
  /* state */
  let dropdownOpen = false
  /* constants */
  let screen = getScreen().text
  /* callbacks */
  function screenChange(value: PossibleScreenSaverType, text: string) {
    dropdownOpen = false
    changeScreen(value)
    screen = text
    currentScreen.set(value)
  }
  function dropdownClick() {  dropdownOpen = !dropdownOpen }
  function click(e: any) {
    if (e.target && containerRef && containerRef.contains(e.target)) {
      return
    }
    dropdownOpen = false
  }
</script>

<!-- template -->
<svelte:window on:click={click} />
<div class="container" bind:this={containerRef}>
  <span class="title">screen saver</span>
  <div class="dropdown-container">
    <button class="dropdown" on:click={dropdownClick}>
      <span class="dropdown-selected">{screen}</span>
      <div class="dropdown-icon-container">
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          class="dropdown-icon"
          data-open={dropdownOpen}
        >
          <path
            d="M8 10.18 2.39 4.52l-.89.87 5.59 
            5.71a1.18 1.18 0 0 0 .86.39 1.13 1.13 0 0 0 .85-.39l5.7-5.7-.88-.89z"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          class="dropdown-icon dropdown-icon-shift-left"
          data-open={dropdownOpen}
        >
          <path
            d="M8 10.18 2.39 4.52l-.89.87 5.59 
            5.71a1.18 1.18 0 0 0 .86.39 1.13 1.13 0 0 0 .85-.39l5.7-5.7-.88-.89z"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          class="dropdown-icon dropdown-icon-shift-right"
          data-open={dropdownOpen}
        >
          <path
            d="M8 10.18 2.39 4.52l-.89.87 5.59 
            5.71a1.18 1.18 0 0 0 .86.39 1.13 1.13 0 0 0 .85-.39l5.7-5.7-.88-.89z"
          />
        </svg>
      </div>
    </button>
    {#if dropdownOpen}
    <div
      class="dropdown-content"
      transition:slide={{ duration: 85, easing: expoOut }}
    >
      {#each screens as { text, value }}
      <button
        on:click|preventDefault={() => screenChange(value, text)}
        class="dropdown-content-item"
      >
        <span class="dropdown-content-title">{text}</span>
      </button>
      {/each}
    </div>
    {/if}
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
    margin-top: 10px;
  }
  .dropdown-container {
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    /* position */
    position: relative;
    /* size */
    width: 100%;
  }
  .title {
    /* fonts */
    font-size: 16px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .dropdown {
    /* size */
    width: 100%;
    height: 36px;
    /* flex */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    /* border */
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* margins */
    margin-top: 4px;
    padding-left: 6px;
    /* cursor */
    cursor: pointer;
  }
  .dropdown-icon {
    /* size */
    height: 19px;
    width: 19px;
    /* position */
    z-index: 3;
    /* color */
    fill: var(--color-black);
  }
  .dropdown-icon-shift-left {
    /* position */
    position: absolute;
    margin-left: -2px;
    z-index: 2;
    /* color */
    fill: var(--color-neon-blue);
  }
  .dropdown-icon-shift-right {
    /* position */
    position: absolute;
    margin-right: -3px;
    z-index: 1;
    /* color */
    fill: var(--color-neon-violet);
  }
  .dropdown-icon-container {
    /* size */
    height: 100%;
    width: 36px;
    /* border */
    border-left: 1px solid var(--color-highlight);
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position */
    position: relative;
  }
  .dropdown-selected {
    /* fonts */
    font-size: 17px;
    font-weight: 400;
    /* color */
    color: var(--color-black);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .dropdown-content {
    /* position */
    position: absolute;
    top: 44px;
    z-index: 51;
    /* size */
    width: 100%;
    /* color */
    background-color: var(--color-background);
    /* border */
    border-top: 1px solid var(--color-highlight);
    /* display */
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  .dropdown-content-item {
    /* size */
    width: 100%;
    height: 40px;
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    color: var(--color-black);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
    /* border */
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    border-top-width: 0px;
    /* fonts */
    font-size: 17px;
    font-weight: 400;
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* cursor */
    cursor: pointer;
    /* position */
    position: relative;
    overflow: hidden;
  }
  svg {
    /* animation */
    transition-duration: 0.13s;
    transition-timing-function: ease-out;
    transition-property: transform;
  }
  [data-open=true] {
    transform: rotate(-180deg);
  }
  [data-open=false] {
    transform: rotate(0deg);
  }
  .dropdown-content-title {
    /* margins */
    margin-left: 7px;
    /* position */
    position: relative;
    z-index: 3;
  }
</style>