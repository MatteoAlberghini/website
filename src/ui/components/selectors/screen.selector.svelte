<!-- script -->
<script lang="ts">
  /* imports */
  import { type PossibleScreenSaverType, screens } from '../../../types/common'
  import { changeScreen, getScreen } from '../../../support/cookies'
  import { currentScreen, isScreenPlaying } from '../../../stores/screen.store'
  import Selector from '../../atoms/selector.svelte'
  
  /* constants */
  let screen = getScreen().text
  /* functions */
  function screenChange(e: CustomEvent<{ value: string, text: string }>) {
    changeScreen(e.detail.value as PossibleScreenSaverType)
    screen = e.detail.text
    currentScreen.set(e.detail.value as PossibleScreenSaverType)
  }
  function playScreen() { isScreenPlaying.set(true) }
</script>

<!-- template -->
<Selector label="screen saver" selected={screen} items={screens} on:itemClick={screenChange}>
  <button class="play" on:click={playScreen}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="play-icon"
    >
      <path
        d="M8 6V18L18 12L8 6Z"
        stroke="inherit"
        stroke-width="1.3"
        stroke-linejoin="round"
      />
    </svg>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="shift-left-stroke"
    >
      <path
        d="M8 6V18L18 12L8 6Z"
        stroke="inherit"
        stroke-width="1.3"
        stroke-linejoin="round"
      />
    </svg>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="shift-right-stroke"
    >
      <path
        d="M8 6V18L18 12L8 6Z"
        stroke="inherit"
        stroke-width="1.3"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</Selector>

<!-- style -->
<style>
  .play {
    /* size */
    width: 36px;
    height: 36px;
    min-width: 36px;
    /* border */
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position */
    position: relative;
  }
  svg {
    /* animation */
    transition-duration: 0.1s;
    transition-timing-function: ease-out;
    transition-property: transform;
  }
  .play-icon {
    /* size */
    width: 26px;
    height: 26px;
    /* color */
    stroke: var(--color-black);
    /* position */
    z-index: 3;
  }
  .shift-right-stroke {
    /* size */
    width: 26px;
    height: 26px;
    /* position */
    position: absolute;
    margin-right: -3px;
    z-index: 1;
    /* color */
    stroke: var(--color-neon-violet);
  }
  .shift-left-stroke {
    /* size */
    width: 26px;
    height: 26px;
    /* position */
    position: absolute;
    margin-left: -2px;
    z-index: 2;
    /* color */
    stroke: var(--color-neon-blue);
  }
</style>