<!-- script -->
<script lang="ts">
  /* typescript */
  import type { WindowPathType, PossibleIconType } from '../../../types/common'
  /* svelte imports */
  import { createEventDispatcher } from 'svelte'
  import { draggable } from '@neodrag/svelte'
  /* ui imports */
  import ResizableModal from '../modal/resizable.modal.svelte'
  import FolderIcon from '../icons/folder.icon.svelte'
  import MailIcon from '../icons/mail.icon.svelte'
  import MusicIcon from '../icons/music.icon.svelte'
  import PcIcon from '../icons/pc.icon.svelte'
  import TextIcon from '../icons/text.icon.svelte'
  import GlobIcon from '../icons/globe.icon.svelte'

  /* props */
  export let type: PossibleIconType
  export let text: string
  export let url: string = ''
  export let modalWidth: string = '600px'
  export let modalHeight: string = '450px'
  export let modalTop: string | undefined = undefined
  export let modalLeft: string | undefined = undefined
  export let modalRight: string | undefined = undefined
  export let modalBottom: string | undefined = undefined
  export let uniqueId: number
  export let mainColor: string = '#312454'
  export let openModal: boolean = false
  export let gridRow: string = 'auto'
  export let gridColumn: string = 'auto'
  export let path: WindowPathType[] = []
  export let homePath: string
  /* state */
  let visible: boolean = false
  let hoverIcon: () => {} | undefined
  let blurIcon: () => {} | undefined
  /* dispatchers */
  const dispatch = createEventDispatcher()
  /* reactive */
  $: if (openModal) { visible = true }
  /* functions */
  const onDoubleClick = () => {
    dispatch('open')
    if (type === 'external') {
      window.open(url, '_blank') || window.location.replace(url)
      return
    }
    visible = true
  }
  const closeModal = () => {
    dispatch('close')
    visible = false
  }
  const onMouseEnter = () => {
    if (hoverIcon) { hoverIcon() }
  }
  const onMouseLeave = () => {
    if (blurIcon) { blurIcon() }
  }
</script>

<button
  class="desktop-item"
  use:draggable={{ bounds: 'parent' }}
  on:dblclick={onDoubleClick}
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  style:grid-row={gridRow}
  style:grid-column={gridColumn}
>
  {#if type === 'folder'}
  <FolderIcon
    bind:mouseEnter={hoverIcon}
    bind:mouseLeave={blurIcon}
  />
  {:else if type === 'mail'}
  <MailIcon
    bind:mouseEnter={hoverIcon}
    bind:mouseLeave={blurIcon}
  />
  {:else if type === 'text'}
  <TextIcon
    bind:mouseEnter={hoverIcon}
    bind:mouseLeave={blurIcon}
  />
  {:else if type === 'music'}
  <MusicIcon
    bind:mouseEnter={hoverIcon}
    bind:mouseLeave={blurIcon}
  />
  {:else if type === 'pc'}
  <PcIcon
    bind:mouseEnter={hoverIcon}
    bind:mouseLeave={blurIcon}
  />
  {:else if type === 'external'}
  <GlobIcon
    bind:mouseEnter={hoverIcon}
    bind:mouseLeave={blurIcon}
  />
  {/if}
  <span class="icon-name">
    {text}
  </span>
  {#if type === 'external'}
  <div class="external-container">
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      class="external-icon"
    >
      <polygon
        points="256,12.742 0,268.753 40.55,309.291 227.334,122.495 227.334,499.258 284.675,499.258 284.675,122.495 471.462,309.291 512,268.753"
      />
    </svg>
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      class="external-icon shift-left"
    >
      <polygon
        points="256,12.742 0,268.753 40.55,309.291 227.334,122.495 227.334,499.258 284.675,499.258 284.675,122.495 471.462,309.291 512,268.753"
      />
    </svg>
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      class="external-icon shift-right"
    >
      <polygon
        points="256,12.742 0,268.753 40.55,309.291 227.334,122.495 227.334,499.258 284.675,499.258 284.675,122.495 471.462,309.291 512,268.753"
      />
    </svg>
  </div>
  {/if}
</button>
<!-- template -->
{#if visible}
  <ResizableModal
    initialWidth={modalWidth}
    initialHeight={modalHeight}
    on:closeModal={closeModal}
    uniqueId={uniqueId}
    mainColor={mainColor}
    top={modalTop}
    left={modalLeft}
    right={modalRight}
    bottom={modalBottom}
    text={text}
    path={path}
    homePath={homePath}
  >
  <slot />
</ResizableModal>
{/if}

<!-- style -->
<style>
  .desktop-item {
    /* size */
    max-width: 100px;
    max-height: 100px;
    width: 100px;
    height: 100px;
    aspect-ratio: 1 / 1;
    /* flex */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margins */
    padding-left: 16px;
    padding-right: 16px;
    /* color */
    background-color: transparent;
  }
  .desktop-item:hover, .desktop-item:focus {
    /* color */
    background-color: var(--color-highlight-hover);
    box-shadow: inset 0 0 0 1px var(--color-highlight);
    /* animation */
    transition: background-color 220ms ease-out;
  }
  .icon-name {
    /* text */
    font-size: 18px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    /* color */
    color: var(--color-black);
    /* select */
    user-select: none;
    /* size */
    text-overflow: ellipsis;
    width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  /* external icon */
  .desktop-item:hover > .external-container, .desktop-item:focus > .external-container {
    /* animation */
    transform: translate3d(4px, -4px, 0px);
  }
  .external-container {
    /* position */
    position: absolute;
    top: 4px;
    right: 4px;
    /* size */
    width: 24px;
    height: 24px;
    /* color */
    background-color: #312454;
    background-image: url(/bg-texture.png);
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    /* animation */
    transition-duration: 90ms;
    transition-timing-function: ease-out;
  }
  .external-icon {
    /* size */
    height: 18px;
    width: 18px;
    /* color */
    fill: var(--color-highlight);
    z-index: 3;
    transform: rotate(45deg);
  }
  .shift-left {
    /* position */
    position: absolute;
    margin-left: -2px;
    z-index: 2;
    /* color */
    fill: var(--color-neon-blue);
  }
  .shift-right {
    /* position */
    position: absolute;
    margin-right: -3px;
    z-index: 1;
    /* color */
    fill: var(--color-neon-violet);
  }
</style>