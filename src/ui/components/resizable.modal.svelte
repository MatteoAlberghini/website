<!-- script -->
<script lang="ts">
  /* todo delete the aria roles, how? */
  /* imports */
  import { createEventDispatcher, onMount } from 'svelte'
  import { expoOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'
  import SimpleBarJS from "simplebar"
  import { modalFocused } from '../../stores/modals.store'
  /* exports */
  export let initialWidth: string = '550px'
  export let initialHeight: string = '450px'
  export let top: string = '20%'
  export let left: string = '40%'
  export let uniqueId: number
  export let mainColor: string = '#312454'
  export let text: string
  /* refs */
  let modalContainer: HTMLDivElement | null = null
  let bottomRightHandler: HTMLDivElement | null = null
  let bottomleftHandler: HTMLDivElement | null = null
  let bottomHandler: HTMLDivElement | null = null
  let modalNavbar: HTMLDivElement | null = null
  let modalContent: HTMLDivElement | null = null
  let closeButton: HTMLButtonElement | null = null
  /* dispatchers */
  const dispatch = createEventDispatcher()
  /* constants */
  let initialRect: any = null
  let initialPos: any = null
  let activeDrag: 'down-right' | 'down-left' | 'modal' | 'down' | '' = ''
  let modalXPos: number | null = null
  let modalYPos: number | null = null
  /* callbacks */
  function onMouseDownDR(event: MouseEvent) {
    if (!modalContainer) { return }
    modalFocused.set(uniqueId)
    modalContainer.style.zIndex = '50'
    activeDrag = 'down-right'
    const rect = modalContainer.getBoundingClientRect()
    const parent = modalContainer.parentElement?.getBoundingClientRect()        
    initialRect = {
      width: rect.width,
      height: rect.height,
      left: rect.left - parent.left,
      right: parent.right - rect.right,
      top: rect.top - parent.top,
      bottom: parent.bottom - rect.bottom
    }
    initialPos = { x: event.pageX, y: event.pageY }
  }
  function onMouseDownDL(event: MouseEvent) {
    if (!modalContainer) { return }
    modalFocused.set(uniqueId)
    modalContainer.style.zIndex = '50'
    activeDrag = 'down-left'
    const rect = modalContainer.getBoundingClientRect()
    const parent = modalContainer.parentElement?.getBoundingClientRect()        
    initialRect = {
      width: rect.width,
      height: rect.height,
      left: rect.left - parent.left,
      right: parent.right - rect.right,
      top: rect.top - parent.top,
      bottom: parent.bottom - rect.bottom
    }
    initialPos = { x: event.pageX, y: event.pageY }
  }
  function onMouseDownD(event: MouseEvent) {
    if (!modalContainer) { return }
    modalFocused.set(uniqueId)
    modalContainer.style.zIndex = '50'
    activeDrag = 'down'
    const rect = modalContainer.getBoundingClientRect()
    const parent = modalContainer.parentElement?.getBoundingClientRect()        
    initialRect = {
      width: rect.width,
      height: rect.height,
      left: rect.left - parent.left,
      right: parent.right - rect.right,
      top: rect.top - parent.top,
      bottom: parent.bottom - rect.bottom
    }
    initialPos = { x: event.pageX, y: event.pageY }
  }
  function onMouseDownNavbar(event: MouseEvent) {
    if (!modalNavbar) { return }
    if (!modalContainer) { return }
    modalFocused.set(uniqueId)
    modalContainer.style.zIndex = '50'
    modalXPos = event.clientX
    modalYPos = event.clientY
    activeDrag = 'modal'
  }
  function onMouseDown() {
    if (!modalContainer) { return }
    modalFocused.set(uniqueId)
    modalContainer.style.zIndex = '50'
  }
  function onMouseUp() {
    initialRect = null
    initialPos = null
    modalXPos = null
    modalYPos = null
    activeDrag = ''
  }
  function onMouseMove(event: MouseEvent) {
    /// check for container
    if (!modalContainer) { return }
    /// dragging the navbar
    if (activeDrag === 'modal' && modalXPos && modalYPos) {
      const left = modalXPos - event.clientX
      const top = modalYPos - event.clientY
      modalXPos = event.clientX
      modalYPos = event.clientY
      modalContainer.style.top = `${modalContainer.offsetTop - top}px`
      modalContainer.style.left = `${modalContainer.offsetLeft - left}px`
      return
    }
    /// expanding
    if (!bottomRightHandler || !bottomleftHandler || !bottomHandler || !initialPos) { return }
    let direction = ''
    let delta: number = 0
    if (activeDrag === 'down-right') {
      direction = bottomRightHandler.getAttribute('data-direction') || ''
    } else if (activeDrag === 'down-left') {
      direction = bottomleftHandler.getAttribute('data-direction') || ''
    } else if (activeDrag === 'down') {
      direction = bottomHandler.getAttribute('data-direction') || ''
    }
    if (direction.match('right')) {
				delta = event.pageX - initialPos.x
        let width = initialRect.width + delta
        if (width < 300) { width = 300 }
				modalContainer.style.width = `${width}px`				
		}
    if (direction.match('left')) {
      delta = initialPos.x - event.pageX
      let width = initialRect.width + delta
      if (width < 300) {
        width = 300
        modalContainer.style.width = `${width}px`
        return
      }
      modalContainer.style.width = `${width}px`
      modalContainer.style.left = `${initialRect.left - delta}px`
    }
    if (direction.match('up')) {
      delta = initialPos.y - event.pageY
      let height = initialRect.height + delta
      if (height < 300) { height = 300 }
      modalContainer.style.top = `${initialRect.top - delta}px`
      modalContainer.style.height = `${height}px`
    }
    if (direction.match('down')) {
      delta = event.pageY - initialPos.y
      let height = initialRect.height + delta
      if (height < 300) { height = 300 }
      modalContainer.style.height = `${height}px`
    }
  }
  /* modal functions */
  function closeModal() { dispatch('closeModal') }
  const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') { closeModal() } }
  /* stores */
  $: $modalFocused, focusChanged()
  function focusChanged() {
    if ($modalFocused === uniqueId) { return }
    if (!modalContainer) { return }
    modalContainer.style.zIndex = '49'
  }
  /* on load */
  onMount(() => {
    modalFocused.set(uniqueId)
    if (!modalContainer || !closeButton) { return }
    modalContainer.style.zIndex = '50'
    closeButton.focus()
    if (!modalContent) { return }
    new SimpleBarJS(modalContent, {
      autoHide: false,
    })
  })
</script>

<!-- template -->
<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="modal-container"
  style:width={initialWidth}
  style:height={initialHeight}
  style:top={top}
  style:left={left}
  style:z-index="49"
  style:background-color={mainColor}
  style:box-shadow={`${mainColor}30 1px 1px 1px 1px`}
  bind:this={modalContainer}
  on:mousedown={onMouseDown}
  on:keydown={onKeyDown}
  draggable="false"
  transition:fade={{ duration: 150, easing: expoOut }}
>
  <!-- draggable navbar -->
  <div
    role="button"
    tabindex="0"
    class="modal-navbar"
    bind:this={modalNavbar}
    on:mousedown={onMouseDownNavbar}
  >
    <span class="modal-title">
      {text}
    </span>
    <button
      class="modal-close"
      on:click={closeModal}
      bind:this={closeButton}
    >
      <svg class="modal-close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
      </svg>
      <svg class="modal-close-icon modal-close-icon-after" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
      </svg>
      <svg class="modal-close-icon modal-close-icon-after-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
      </svg>
    </button>
  </div>
  <div
    class="modal-left-bar"
  />
  <div
    class="modal-right-bar"
  />
  <div
    class="modal-bottom-bar"
    role="button"
    data-direction="down"
    tabindex="0"
    bind:this={bottomHandler}
    on:mousedown={onMouseDownD}
  />
  <div class="modal-content" bind:this={modalContent}>
    <slot />
  </div>
  <!-- directional buttons -->
  <div
    role="button"
    tabindex="0"
    data-direction="down-right"
    class="bottom-right-handler"
    bind:this={bottomRightHandler}
    on:mousedown={onMouseDownDR}
  />
  <div
    role="button"
    tabindex="0"
    data-direction="down-left"
    class="bottom-left-handler"
    bind:this={bottomleftHandler}
    on:mousedown={onMouseDownDL}
  />
</div>

<!-- style -->
<style>
  /* container */
  .modal-container {
    /* color */
    background-color: var(--color-background-secondary);
    background-image: url(/bg-texture.png);
    box-shadow: var(--color-background-secondary-opacity) 1px 1px 1px 1px;
    /* position */
    position: absolute;
    overflow: hidden;
  }
  .modal-content {
    /* size */
    height: 100%;
    width: 100%;
    /* margins */
    margin-top: 28px;
    margin-bottom: 4px;
    padding-bottom: 32px;
    /* position */
    position: relative;
    z-index: 4;
    /* flex */
    display: flex;
  }
  /* close / navbar */
  .modal-close {
    /* size */
    width: 48px;
    height: 100%;
    /* color */
    background-color: transparent;
    /* border */
    border-left: 1px solid var(--color-background-secondary);
    /* font */
    font-size: 14px;
    /* flex */
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    /* position */
    position: relative;
  }
  .modal-close-icon {
    /* size */
    width: 19px;
    height: auto;
    /* color */
    fill: var(--color-black);
    /* position */
    position: relative;
    z-index: 3;
  }
  .modal-close-icon-after {
    /* position */
    position: absolute;
    margin-left: -2px;
    z-index: 2;
    /* color */
    fill: var(--color-neon-blue);
  }
  .modal-close-icon-after-2 {
    /* position */
    position: absolute;
    margin-right: -1px;
    z-index: 1;
    /* color */
    fill: var(--color-neon-yellow);
  }
  .modal-close:hover {
    /* cursor */
    cursor: pointer;
    /* color */
    background-color: var(--color-highlight-opacity);
    /* animation */
    transition: background-color 220ms ease-out;
  }
  .modal-navbar {
    /* position */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    /* size */
    width: calc(100% - 2px);
    height: 28px;
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    /* margins */
    margin-left: 1px;
    margin-right: 1px;
    margin-top: 1px;
    /* flex */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-navbar:hover {
    /* cursor */
    cursor: grab;
  }
  .modal-navbar:active {
    /* cursor */
    cursor: grabbing;
  }
  .modal-title {
    /* text */
    font-size: 16px;
    text-transform: uppercase;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    font-weight: 400;
    /* color */
    color: var(--color-black);
    /* margins */
    margin-left: 8px;
  }
  /* handlers */
  .modal-bottom-bar {
    /* position */
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    /* size */
    width: calc(100% - 2px);
    height: 4px;
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    /* margins */
    margin-left: 1px;
    margin-right: 1px;
    margin-bottom: 1px;
    cursor: s-resize;
  }
  .modal-left-bar {
    /* position */
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    /* size */
    width: 2px;
    height: calc(100% - 36px);
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    /* margins */
    margin-left: 1px;
    margin-right: 1px;
    margin-bottom: 4px;
    margin-top: 30px;
  }
  .modal-right-bar {
    /* position */
    position: absolute;
    right: 0;
    top: 0;
    z-index: 5;
    /* size */
    width: 2px;
    height: calc(100% - 36px);
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    /* margins */
    margin-left: 1px;
    margin-right: 1px;
    margin-bottom: 4px;
    margin-top: 30px;
  }
  .bottom-right-handler {
    /* position */
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 5;
    /* size */
    width: 19px;
    height: 19px;
    /* color */
    background-color: transparent; /* var(--color-background) */
    background-image: url(/bg-texture.png);
    /* cursor */
    cursor: nwse-resize;
    /* margins */
    margin-right: 1px;
    margin-bottom: 1px;
  }
  .bottom-left-handler {
    /* position */
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    /* size */
    width: 19px;
    height: 19px;
    /* color */
    background-color: transparent; /* var(--color-background) */
    background-image: url(/bg-texture.png);
    /* cursor */
    cursor: nesw-resize;
    /* margins */
    margin-left: 1px;
    margin-bottom: 1px;
  }
</style>