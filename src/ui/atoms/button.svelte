<!-- script -->
<script lang="ts">
  /* imports */
  import { createEventDispatcher, onMount } from 'svelte'

  /* props */
  export let height: number = 40
  export let width: string = '46px'
  export let isLoading: boolean = false
  export let message: { text: string, error: boolean } = { text: '', error: false }
  /* constants */
  let renderLoadingTags: number[] = []
  let renderIsLoading: boolean = false
  let timeout: NodeJS.Timeout | null = null
  let isFirstMount: boolean = true
  /* dispatcher */
  const dispatch = createEventDispatcher()
  /* functions */
  function onClick() { dispatch('click') }
  function startAnimation() {
    renderLoadingTags = [...renderLoadingTags, 0]
    if (renderLoadingTags.length === 15) {
      if (timeout) { clearTimeout(timeout) }
      return
    }
    timeout = setTimeout(() => {
      startAnimation()
    }, 300)
  }
  function endAnimation(callback: () => void) {
    if (renderLoadingTags.length === 15) {
      if (timeout) { clearTimeout(timeout) }
      callback()
      return
    }
    renderLoadingTags = [...renderLoadingTags, 0]
    timeout = setTimeout(() => {
      endAnimation(callback)
    }, 50)
  } 
  function startLoading() {
    renderIsLoading = true
    startAnimation()
  }
  async function endLoading() {
    if (timeout) { clearTimeout(timeout) }
    if (isFirstMount === true) {
      isFirstMount = false
      return
    }
    endAnimation(() => {
      renderIsLoading = false
      renderLoadingTags = []
    })
  }
  /* reactive */
  $: isLoading === true && startLoading()
  $: isLoading === false && endLoading()
</script>

<!-- template -->
<div class="container" style:width={width}>
  <button style:height={`${height}px`} style:width={width} on:click={onClick} disabled={isLoading}>
    <span class="inner-button" style:height={`${height - 1}px`}>
      {#if renderIsLoading === false}
      <slot />
      {/if}
      {#if renderIsLoading === true}
      <div class="loading-container" style:height={`${height / 1.7}px`}>
        {#each renderLoadingTags as id}
        <div class="loading-tag" />
        {/each}
      </div>
      {/if}
    </span>
  </button>
  {#if renderIsLoading === false}
    {#if message.text !== ''}
      {#if message.error === true}
        <span class="message-error">{message.text}</span>
      {/if}
      {#if message.error === false}
        <span class="message">{message.text}</span>
      {/if}
    {/if}
  {/if}
</div>

<!-- style -->
<style>
  .container {
    /* flex */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .message {
    /* margins */
    margin-top: 4px;
    /* fonts */
    font-size: 15px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .message-error {
    /* margins */
    margin-top: 4px;
    /* fonts */
    font-size: 15px;
    font-weight: 400;
    /* color */
    color: var(--color-error);
    text-shadow: 1px 0px var(--color-highlight);
  }
  button {
    /* size */
    width: 46px;
    /* color */
    background-color: var(--color-highlight);
    background-image: url(/bg-texture.png);
    /* display */
    display: flex;
  }
  .inner-button {
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
  button:disabled > span {
    /* animation */
    transform: translateY(-2px);
  }
  @keyframes loading-tag-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  .loading-container {
    /* size */
    width: calc(100% - 22px);
    /* color */
    background-color: var(--color-highlight-hover);
    background-image: url(/bg-texture.png);
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 4px;
    /* margins */
    padding-left: 4px;
    padding-right: 4px;
  }
  .loading-tag {
    /* size */
    height: calc(100% - 4px);
    width: 14px;
    /* color */
    background-color: var(--color-highlight);
    background-image: url(/bg-texture.png);
    /* flex */
    flex-shrink: 0;
    /* animation */
    animation: loading-tag-in 50ms linear;
    animation-fill-mode: both;
  }
</style>