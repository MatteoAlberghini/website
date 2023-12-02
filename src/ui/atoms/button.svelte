<!-- script -->
<script lang="ts">
  /* imports */
  import { createEventDispatcher } from 'svelte'

  /* props */
  export let height: number = 40
  export let width: string = '46px'
  /* dispatcher */
  const dispatch = createEventDispatcher()
  /* functions */
  function onClick() { dispatch('click') }
</script>

<!-- template -->
<button style:height={`${height}px`} style:width={width} on:click={onClick}>
  <span style:height={`${height - 1}px`}>
    <slot />
  </span>
</button>

<!-- style -->
<style>
  button {
    /* size */
    width: 46px;
    /* color */
    background-color: var(--color-highlight);
    background-image: url(/bg-texture.png);
    /* display */
    display: flex;
    /* cursor */
    cursor: pointer;
  }
  span {
    /* size */
    width: 100%;
    /* position */
    position: relative;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    /* color */
    background-color: var(--color-background);
    border: 1px solid var(--color-highlight);
    background-image: url(/bg-texture.png);
    /* animation */
    transform: translateY(-2px);
    transition: transform 185ms ease-out;
  }
  button:hover > span {
    /* animation */
    transform: translateY(-1px);
  }
  button:active > span {
    /* animation */
    transform: translateY(0px);
  }
</style>