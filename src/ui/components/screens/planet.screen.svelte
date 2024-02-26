<!--
  * TODO: update with custom art
-->
<!-- script -->
<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'

  /* dispatchers */
  const dispatch = createEventDispatcher()
  /* refs */
  let screenRef: HTMLDivElement | null = null
  /* functions */
  function disableScreen() { dispatch('disableScreen') }
  function onKeyDown(e: KeyboardEvent) { if (e.key === 'Escape') { disableScreen() } }
  /* mount */
  onMount(() => {
    if (!screenRef) { return }
    screenRef.focus()
  })
</script>

<!-- template -->
<div
  role="button"
  tabindex="0"
  class="screen-saver"
  on:click={disableScreen}
  on:keydown={onKeyDown}
  bind:this={screenRef}
>
  <div class="planet" />
</div>

<!-- style -->
<style>
  /* container */
  .screen-saver {
    /* background */
    background-color: #00000070;
    /* position */
    position: absolute;
    z-index: 999;
    /* size */
    height: 100vh;
    width: 100vw;
  }
  .planet {
    /* display */
    display: block;
    /* size */
    width: 240px;
    height: 240px;
    /* position */
    position: absolute;
    /* background */
    background-color: var(--color-black);
    background-image: url(./images/screen/globe_240.jpg);
    /* border */
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    /* animation */
    -webkit-animation: moveX 3s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate, spin 1.4s steps(21) infinite;
    -moz-animation: moveX 3s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate, spin 1.4s steps(21) infinite;
    -o-animation: moveX 3s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate, spin 1.4s steps(21) infinite;
    animation: moveX 3s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate, spin 1.4s steps(21) infinite;
  }
  /* keyframes */
  @-webkit-keyframes moveX {
    from { left: calc(100% - 240px); } to { left: 0; }
  }
  @-moz-keyframes moveX {
    from { left: calc(100% - 240px); } to { left: 0; }
  }
  @-o-keyframes moveX {
    from { left: calc(100% - 240px); } to { left: 0; }
  }
  @keyframes moveX {
    from { left: calc(100% - 240px); } to { left: 0; }
  }
  @-webkit-keyframes moveY {
    from { top: calc(100% - 240px); } to { top: 0; }
  }
  @-moz-keyframes moveY {
    from { top: calc(100% - 240px); } to { top: 0; }
  }
  @-o-keyframes moveY {
    from { top: calc(100% - 240px); } to { top: 0; }
  }
  @keyframes moveY {
    from { top: calc(100% - 240px); } to { top: 0; }
  }
  @-webkit-keyframes spin {
    from { background-position: -5040px; }
    to { background-position: 0px; }
  }
  @-moz-keyframes spin {
    from { background-position: -5040px; }
    to { background-position: 0px; }
  }
  @-ms-keyframes spin {
    from { background-position: -5040px; }
    to { background-position: 0px; }
  }
  @-o-keyframes spin {
    from { background-position: -5040px; }
    to { background-position: 0px; }
  }
  @keyframes spin {
    from { background-position: -5040px; }
    to { background-position: 0px; }
  }
</style>