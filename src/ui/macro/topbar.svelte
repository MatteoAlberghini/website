<!-- script -->
<script lang="ts">
  /* svelte imports */
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { expoOut } from 'svelte/easing'
  import { draggable } from '@neodrag/svelte'
  /* data imports */
  import { messages } from '../../../src/support/data'
  /* ui imports */
  import ScreenSaverButton from '../components/buttons/saver.button.svelte'
  import QuitButton from '../components/buttons/quit.button.svelte'
  import SettingsButton from '../components/buttons/settings.button.svelte'
  import ClockWidget from '../components/widgets/clock.svelte'

  /* constants */
  const messagesLength: number = messages.length - 1
  const navigationItems = [
    { value: 'projects', text: 'projects'},
    { value: 'changelog', text: 'changelog'},
    { value: 'contact', text: 'contacts'},
  ]
  /* state */
  let messageIndex: number = 0
  let message: string = messages[0]
  /* functions */
  function startMessageTimer() {
    setInterval(() => {
    if (messageIndex < messagesLength) {
      messageIndex += 1
    } else {
      messageIndex = 0
    }
    message = messages[messageIndex]
    }, 4000)
  }
  /* load */
  onMount(() => {
    startMessageTimer()
  })

</script>

<!-- template -->
<header
  use:draggable={{ bounds: 'parent' }}
>
  <div class="navbar">
    <div class="left-buttons">
      <QuitButton
        height={34}
        width="39px"
      />
      <ScreenSaverButton
        height={34}
        width="39px"
      />
    </div>
    <div class="text-container">
      {#key message}
      <p
        in:slide={{ duration: 200, easing: expoOut }}
        class="message-container"
      >
        {@html message}
      </p>
      {/key}
    </div>
    <div class="right-buttons">
      <SettingsButton
        height={34}
        width="39px"
      />
    </div>
  </div>
  <div class="clock">
    <ClockWidget />
  </div>
</header>

<!-- style -->
<style>
  @keyframes bg-color {
    0% { background-color: #402f6e; }
    50% { background-color: #0F2F5F; }
    100% { background-color: #2B4162; }
  }
  header {
    /* position */
    position: absolute;
    top: 6px;
    left: 40%;
    z-index: 3;
    /* size */
    height: 46px;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar {
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* size */
    height: 46px;
    /* colors */
    background-color: #402f6e;
    background-image: url(/bg-texture.png);
    box-shadow: #402f6e30 1px 1px 1px 1px;
    /* border */
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* animation */
    animation: bg-color 9s linear infinite alternate-reverse;
  }
  .clock {
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-self: flex-start;
  }
  .left-buttons {
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    /* size */
    height: 100%;
    /* margins */
    margin-left: 4px;
    padding-top: 2px;
  }
  .right-buttons {
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    /* size */
    height: 100%;
    /* margins */
    margin-right: 4px;
    column-gap: 6px;
    padding-top: 2px;
  }
  .text-container {
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    /* size */
    height: 100%;
    /* margins */
    padding-left: 12px;
    padding-right: 12px;
  }
  .text-container > p {
    /* fonts */
    font-size: 18px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .message-container {
    /* size */
    width: 200px;
    max-width: 200px;
    min-width: 200px;
  }
  .date-container {
    /* size */
    width: 200px;
    max-width: 200px;
    min-width: 200px;
  }
  .message-container > :global(a) {
    /* font */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
    /* text */
    text-decoration: underline;
  }
</style>