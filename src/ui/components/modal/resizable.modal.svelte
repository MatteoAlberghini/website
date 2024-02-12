<!-- script -->
<script lang="ts">
  /* todo delete the aria roles, how? */
  /* imports */
  import { createEventDispatcher, onMount } from 'svelte'
  import { expoOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'
  import SimpleBarJS from "simplebar"
  import { modalFocused } from '../../../stores/modals.store'
  import type { WindowPathType } from '../../../types/common';
  /* types */
  type DragType = 'down-right' | 'down-left' | 'left' | 'right' | 'modal' | 'down' | ''
  type InitialRectType = {
    width: number, height: number, left: number, right: number, top: number, bottom: number,
  } | null
  type InitialPositionType = {
    x: number, y: number,
  } | null
  /* exports */
  export let initialWidth: string = '550px'
  export let initialHeight: string = '450px'
  export let top: string | undefined
  export let left: string | undefined
  export let right: string | undefined
  export let bottom: string | undefined
  export let uniqueId: number
  export let mainColor: string = '#312454'
  export let text: string
  export let path: WindowPathType[] = []
  export let homePath: string
  /* refs */
  let modalContainer: HTMLDivElement | null = null
  let bottomRightHandler: HTMLDivElement | null = null
  let bottomleftHandler: HTMLDivElement | null = null
  let rightHandler: HTMLDivElement | null = null
  let leftHandler: HTMLDivElement | null = null
  let bottomHandler: HTMLDivElement | null = null
  let modalNavbar: HTMLDivElement | null = null
  let modalContent: HTMLDivElement | null = null
  let closeButton: HTMLButtonElement | null = null
  /* dispatchers */
  const dispatch = createEventDispatcher()
  /* constants */
  let initialRect: InitialRectType = null
  let initialPos: InitialPositionType = null
  let activeDrag: DragType = ''
  let modalXPos: number | null = null
  let modalYPos: number | null = null
  let isFullScreen: boolean = false
  /* callbacks */
  function mouseDownHandler(event: MouseEvent, type: DragType) {
    if (!modalContainer) { return }
    if (!modalNavbar) { return }
    modalFocused.set(uniqueId)
    activeDrag = type
    if (type === 'modal') {
      modalXPos = event.clientX
      modalYPos = event.clientY
      return
    }
    const rect = modalContainer.getBoundingClientRect()
    const parent = modalContainer.parentElement?.getBoundingClientRect()
    if (!parent) { return }
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
  function onMouseDown() {
    if (!modalContainer) { return }
    modalFocused.set(uniqueId)
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
    if (!bottomRightHandler || !bottomleftHandler || !bottomHandler || !initialPos || !initialRect) { return }
    if (!leftHandler || !rightHandler) { return }
    let direction = ''
    let delta: number = 0
    if (activeDrag === 'down-right') {
      direction = bottomRightHandler.getAttribute('data-direction') || ''
    } else if (activeDrag === 'down-left') {
      direction = bottomleftHandler.getAttribute('data-direction') || ''
    } else if (activeDrag === 'down') {
      direction = bottomHandler.getAttribute('data-direction') || ''
    } else if (activeDrag === 'left') {
      direction = leftHandler.getAttribute('data-direction') || ''
    } else if (activeDrag === 'right') {
      direction = rightHandler.getAttribute('data-direction') || ''
    }
    if (direction.match('right')) {
				delta = event.pageX - initialPos.x
        let width = initialRect.width + delta
        if (width < 550) { width = 550 }
				modalContainer.style.width = `${width}px`				
		}
    if (direction.match('left')) {
      delta = initialPos.x - event.pageX
      let width = initialRect.width + delta
      if (width < 550) {
        width = 550
        modalContainer.style.width = `${width}px`
        return
      }
      modalContainer.style.width = `${width}px`
      modalContainer.style.left = `${initialRect.left - delta}px`
    }
    if (direction.match('up')) {
      delta = initialPos.y - event.pageY
      let height = initialRect.height + delta
      if (height < 550) { height = 550 }
      modalContainer.style.top = `${initialRect.top - delta}px`
      modalContainer.style.height = `${height}px`
    }
    if (direction.match('down')) {
      delta = event.pageY - initialPos.y
      let height = initialRect.height + delta
      if (height < 550) { height = 550 }
      modalContainer.style.height = `${height}px`
    }
  }
  /* modal functions */
  function closeModal() { dispatch('closeModal') }
  function toggleFullScreen() {
    if (!modalContainer) { return }
    if (isFullScreen === false) {
      modalContainer.style.left = '0px'
      modalContainer.style.top = '0px'
      modalContainer.style.width = `${window.innerWidth}px`
      modalContainer.style.height = `${window.innerHeight}px`
      isFullScreen = true
      return
    }
    modalContainer.style.left = left || '0px'
    modalContainer.style.top = top || '0px'
    modalContainer.style.width = initialWidth
    modalContainer.style.height = initialHeight
    isFullScreen = false
  }
  const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') { closeModal() } }
  /* reactive */
  $: $modalFocused, focusChanged()
  function focusChanged() {
    if (!modalContainer) { return }
    if ($modalFocused === uniqueId) {
      modalContainer.style.zIndex = '50'
      return  
    }
    modalContainer.style.zIndex = '49'
  }
  /* on load */
  onMount(() => {
    modalFocused.set(uniqueId)
    if (!modalContainer || !closeButton) { return }
    modalContainer.style.zIndex = '50'
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
  style:right={right}
  style:bottom={bottom}
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
    on:mousedown={(e) => mouseDownHandler(e, 'modal')}
  >
    <span class="modal-title">
      <a href={homePath} class="modal-title-home">{text}</a>
      {#each path as p}
        >> <a href={p.path}>{p.title}</a>
      {/each}
    </span>
    <div class="buttons-container">
      <button
        class="modal-full"
        on:click={toggleFullScreen}
        style:border-color={mainColor}
      >
      <svg class="modal-full-icon" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.996 11.352l0.004 4.648-4.649-0.004 0.001-1 2.94 0.003-5.792-5.791-5.792 5.792 2.94-0.003 0.001 1-4.649 0.003 0.004-4.649 1 0.001-0.003 2.939 5.792-5.791-5.792-5.792 0.003 2.939-1 0.001-0.004-4.648 4.649 0.004-0.001 1-2.94-0.003 5.792 5.792 5.792-5.792-2.94 0.003-0.001-1 4.649-0.004-0.004 4.649-1-0.001 0.003-2.939-5.792 5.791 5.792 5.792-0.003-2.939 1-0.001z"
        />
      </svg>
      <svg class="modal-full-icon modal-full-icon-after" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.996 11.352l0.004 4.648-4.649-0.004 0.001-1 2.94 0.003-5.792-5.791-5.792 5.792 2.94-0.003 0.001 1-4.649 0.003 0.004-4.649 1 0.001-0.003 2.939 5.792-5.791-5.792-5.792 0.003 2.939-1 0.001-0.004-4.648 4.649 0.004-0.001 1-2.94-0.003 5.792 5.792 5.792-5.792-2.94 0.003-0.001-1 4.649-0.004-0.004 4.649-1-0.001 0.003-2.939-5.792 5.791 5.792 5.792-0.003-2.939 1-0.001z"
        />
      </svg>
      <svg class="modal-full-icon modal-full-icon-after-2" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.996 11.352l0.004 4.648-4.649-0.004 0.001-1 2.94 0.003-5.792-5.791-5.792 5.792 2.94-0.003 0.001 1-4.649 0.003 0.004-4.649 1 0.001-0.003 2.939 5.792-5.791-5.792-5.792 0.003 2.939-1 0.001-0.004-4.648 4.649 0.004-0.001 1-2.94-0.003 5.792 5.792 5.792-5.792-2.94 0.003-0.001-1 4.649-0.004-0.004 4.649-1-0.001 0.003-2.939-5.792 5.791 5.792 5.792-0.003-2.939 1-0.001z"
        />
      </svg>
      </button>
      <button
        class="modal-close"
        on:click={closeModal}
        bind:this={closeButton}
        style:border-color={mainColor}
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
  </div>
  <div class="modal-content" bind:this={modalContent}>
    <slot />
  </div>
  <!-- directional buttons -->
  <div
    class="modal-left-bar"
    data-direction="left"
    bind:this={leftHandler}
    on:mousedown={(e) => mouseDownHandler(e, 'left')}
  />
  <div
    class="modal-right-bar"
    data-direction="right"
    bind:this={rightHandler}
    on:mousedown={(e) => mouseDownHandler(e, 'right')}
  />
  <div
    class="modal-bottom-bar"
    data-direction="down"
    bind:this={bottomHandler}
    on:mousedown={(e) => mouseDownHandler(e, 'down')}
  />
  <div
    data-direction="down-right"
    class="bottom-right-handler"
    bind:this={bottomRightHandler}
    on:mousedown={(e) => mouseDownHandler(e, 'down-right')}
  />
  <div
    data-direction="down-left"
    class="bottom-left-handler"
    bind:this={bottomleftHandler}
    on:mousedown={(e) => mouseDownHandler(e, 'down-left')}
  />
</div>

<!-- style -->
<style>
  /* container */
  .modal-container {
    /* color */
    background-image: url(/bg-texture.png);
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
  .buttons-container {
    /* flex */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    /* size */
    height: 100%;
  }
  .modal-close {
    /* size */
    width: 48px;
    height: 100%;
    /* color */
    background-color: transparent;
    /* border */
    border-left-width: 1px;
    border-left-style: solid;
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
  .modal-full {
    /* size */
    width: 48px;
    height: 100%;
    /* color */
    background-color: transparent;
    /* border */
    border-left-width: 1px;
    border-left-style: solid;
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
    width: 21px;
    height: auto;
    /* color */
    fill: var(--color-black);
    /* position */
    position: relative;
    z-index: 3;
  }
  .modal-full-icon {
    /* size */
    width: 19px;
    height: auto;
    /* color */
    fill: var(--color-black);
    /* position */
    position: relative;
    z-index: 3;
  }
  .modal-full-icon-after {
    /* position */
    position: absolute;
    margin-left: -2px;
    z-index: 2;
    /* color */
    fill: var(--color-neon-blue);
  }
  .modal-full-icon-after-2 {
    /* position */
    position: absolute;
    margin-right: -2px;
    z-index: 1;
    /* color */
    fill: var(--color-neon-yellow);
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
    /* color */
    background-color: var(--color-highlight-hover);
    /* animation */
    transition: background-color 220ms ease-out;
  }
  .modal-full:hover {
    /* color */
    background-color: var(--color-highlight-hover);
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
  .modal-title > a {
    /* font */
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet);
    /* text */
    text-decoration: underline;
  }
  .modal-title > a:hover {
    /* color */
    color: var(--color-highlight);
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
    cursor: w-resize;
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
    cursor: w-resize;
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