<!-- style -->
<script lang="ts">
  /* imports */
  import { draggable } from '@neodrag/svelte'
  import Document from '../../atoms/icons/notepad.svelte'
  import ResizableModal from '../modal/resizable.modal.svelte'
  /* exports */
  export let text: string
  export let modalWidth: string = '600px'
  export let modalHeight: string = '450px'
  export let modalTop: string = '20%'
  export let modalLeft: string = '40%'
  export let uniqueId: number
  export let mainColor: string = '#312454'
  /* state */
  let visible: boolean = false
  /* functions */
  const onDoubleClick = () => { visible = true }
  const closeModal = () => { visible = false }
</script>

<!-- template -->
<button
  class="desktop-item"
  use:draggable={{ bounds: 'parent' }}
  on:dblclick={onDoubleClick}
>
  <div class="icon-container">
    <Document />
  </div>
  <span class="icon-name">
    {text}
  </span>
</button>
{#if visible}
  <ResizableModal
    initialWidth={modalWidth}
    initialHeight={modalHeight}
    on:closeModal={closeModal}
    uniqueId={uniqueId}
    mainColor={mainColor}
    top={modalTop}
    left={modalLeft}
    text={text}
  />
{/if}

<!-- style -->
<style>
  .desktop-item {
    /* size */
    max-width: 100px;
    max-height: 100px;
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
    /* border */
    border-radius: 4px;
    border-width: 1px;
    border-color: #00000000;
    border-style: solid;
  }
  .desktop-item:hover, .desktop-item:focus {
    /* cursor */
    cursor: pointer;
    /* color */
    background-color: var(--color-highlight-hover);
    border-width: 1px;
    border-color: var(--color-highlight);
    /* animation */
    transition: background-color 220ms ease-out;
  }
  .icon-container {
    /* size */
    max-width: 64px;
  }
  .icon-name {
    /* text */
    font-size: 18px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    /* color */
    color: var(--color-black);
  }
  /* desktop */
  @media only screen and (min-width: 1280px) {
    .desktop-item {
      /* size */
      max-width: 84px;
      max-height: 84px;
    }
  }
  /* large desktop */
  @media only screen and (min-width: 1920px) {
    .desktop-item {
      /* size */
      max-width: 100px;
      max-height: 100px;
    }
  }
</style>