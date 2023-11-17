<!-- script -->
<script lang="ts">
  /* imports */
  import FishScreen from '../components/screens/fish.screen.svelte'
  import { isScreenPlaying, currentScreen } from '../../stores/screen.store'
  import { onMount } from 'svelte'
  import { getScreen } from '../../support/cookies'
  import PlanetScreen from '../components/screens/planet.screen.svelte'

  /* stores */
  $: screenPlaying = $isScreenPlaying
  $: screen = $currentScreen
  onMount(() => { currentScreen.set(getScreen().value) })
  /* functions */
  function disableScreen() { isScreenPlaying.set(false) }
</script>

<!-- template -->
<section>
  <!-- all screensavers -->
  {#if screenPlaying === true}
    {#if screen === 'fish'}
      <FishScreen on:disableScreen={disableScreen} />
    {:else if screen === 'planet'}
      <PlanetScreen on:disableScreen={disableScreen} />
    {/if}
  {/if}
  <!-- content -->
  <div class="grain" />
  <div class="content-container">
    <slot />
  </div>
</section>

<!-- style -->
<style>
  /* animations*/
  @keyframes grain {
    0%, 100% { transform:translate(0, 0) }
    10% { transform:translate(-5%, -10%) }
    20% { transform:translate(-15%, 5%) }
    30% { transform:translate(7%, -25%) }
    40% { transform:translate(-5%, 25%) }
    50% { transform:translate(-15%, 10%) }
    60% { transform:translate(15%, 0%) }
    70% { transform:translate(0%, 15%) }
    80% { transform:translate(3%, 35%) }
    90% { transform:translate(-10%, 10%) }
  }
  /* layout */
  section {
    /* position */
    position: relative;
    overflow: hidden;
    /* size */
    height: 100%;
    width: 100%;
    /* position */
    overflow: hidden;
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
  }
  section > * {
    user-select: none;
  }
  .content-container {
    /* grid */
    display: grid;
    /* position */
    overflow: hidden;
    z-index: 2;
    position: relative;
    /* size */
    height: 100%;
    width: 100%;
    /* mobile */
    grid-template-columns: repeat(auto-fill, minmax(78px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(78px, 1fr));
    grid-auto-flow: column;
  }
  .grain {
    /* background */
    background-image: url(/bg-texture.png);
    animation: grain 8s steps(10) infinite;
    /* size */
    height: 300%;
    width: 300%;
    left: -50%;
    top: -100%;
    /* position */
    position: absolute;
    z-index: 1;
  }
  /* tablet */
  @media only screen and (min-width: 600px) {
    .content-container {
      grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
      grid-template-rows: repeat(auto-fill, minmax(128px, 1fr));
    }
  }
  /* desktop */
  @media only screen and (min-width: 1280px) {
    .content-container {
      grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
      grid-template-rows: repeat(auto-fill, minmax(84px, 1fr));
    }
  }
  /* large desktop */
  @media only screen and (min-width: 1920px) {
    .content-container {
      /* grid */
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
      column-gap: 8px;
      row-gap: 8px;
      /* padding */
      padding-left: 8px;
      padding-right: 8px;
    }
  }
</style>
