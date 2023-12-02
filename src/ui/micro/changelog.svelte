<!-- script -->
<script lang="ts">
  /* svelte imports */
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  /* stores imports */
  import { modalFocused } from '../../stores/modals.store'
  /* support imports */
  import type { LogSettingsType } from '../../types/common'
  import { logs, dropdownLogs, currentVersion } from '../../support/data'
  /* ui imports */
  import NotepadDesktop from '../components/desktop/notepad.desktop.svelte'
  import Selector from '../atoms/selector.svelte'
  import Button from '../atoms/button.svelte'

  /* props */
  export let gridRow: string = 'auto'
  export let gridColumn: string = 'auto'
  /* state */
  let selected: string = currentVersion.text
  let selectedContent: LogSettingsType = logs[currentVersion.id]
  /* constants */
  let openModal: boolean = false /* todo svelte 5 change to reactive */
  let shouldOpen: boolean = false
  /* functions */
  function onOpen() { goto('/changelog') }
  function onClose() { goto('/') }
  function handleInitialPage() {
    if ($page.url.pathname === '/changelog') {
      shouldOpen = true
      if (browser) { triggerNavigation() }
    }
  }
  function triggerNavigation() {
    if (shouldOpen === true) {
      openModal = true
      modalFocused.set(2)
      let query = new URLSearchParams($page.url.searchParams.toString())
      query.delete('t')
      goto(`?${query.toString()}`).then(() => {
        openModal = false
        shouldOpen = false
      })
    }
  }
  function navigateContacts() { goto('/contacts?t=focus') }
  /* callbacks */
  function selectorCallback(e: CustomEvent<{ value: string, text: string }>) {
    selected = e.detail.text
    selectedContent = logs.filter((v) => v.id === e.detail.value)[0]
  }
  /* stores */
  $: $page, handleInitialPage()
</script>

<!-- template -->
<NotepadDesktop
  uniqueId={2}
  text="changelog.md"
  mainColor="#0F2F5F"
  modalWidth="1000px"
  modalHeight="650px"
  modalTop="30%"
  modalLeft="32%"
  gridColumn={gridColumn}
  gridRow={gridRow}
  openModal={openModal}
  on:open={onOpen}
  on:close={onClose}
>
  <div class="content">
    <div class="first-row">
      <Button
        on:click={navigateContacts}
        height={35}
        width="40px"
      >
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.034,29.948l0,-21.983l3.741,0l0,21.983l22.203,0l0,3.741l-22.203,0l0,22.203l-3.741,0l0,-22.203l-22.008,0l0,-3.741l22.008,0Z"
          />
        </svg>
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          class="icon-shift-left"
        >
          <path
            d="M30.034,29.948l0,-21.983l3.741,0l0,21.983l22.203,0l0,3.741l-22.203,0l0,22.203l-3.741,0l0,-22.203l-22.008,0l0,-3.741l22.008,0Z"
          />
        </svg>
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          class="icon-shift-right"
        >
          <path
            d="M30.034,29.948l0,-21.983l3.741,0l0,21.983l22.203,0l0,3.741l-22.203,0l0,22.203l-3.741,0l0,-22.203l-22.008,0l0,-3.741l22.008,0Z"
          />
        </svg>
      </Button>
      <div class="selector-container">
        <Selector label="version" items={dropdownLogs} selected={selected} on:itemClick={selectorCallback}  />
      </div>
    </div>
    <div class="table">
      {#if selectedContent.complete === true}
        <span class="complete-title">COMPLETED</span>
      {/if}
      <div class="todo">
        <span class="table-title">TODO</span>
        {#each selectedContent.data.todo as { title, content }}
          <div class="item">
            <span class="item-title">{title}</span>
            <span class="item-description">{@html content}</span>
          </div>
        {/each}
      </div>
      <div class="progress">
        <span class="table-title">PROGRESS</span>
        {#each selectedContent.data.progress as { title, content }}
        <div class="item">
            <span class="item-title">{title}</span>
            <span class="item-description">{@html content}</span>
          </div>
        {/each}
      </div>
      <div class="done">
        <span class="table-title">DONE</span>
        {#each selectedContent.data.done as { title, content }}
          <div class="item item-done">
            <span class="item-title">{title}</span>
            <span class="item-description">{@html content}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</NotepadDesktop>

<!-- style -->
<style>
  .content {
    /* size */
    width: 100%;
    /* display */
    display: flex;
    justify-content: flex-start;
    align-self: center;
    flex-direction: column;
    flex-wrap: wrap;
    /* margins */
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 4px;
    padding-bottom: 24px;
  }
  .selector-container {
    /* flex */
    display: flex;
    align-self: flex-end;
    /* size */
    width: 320px;
  }
  .first-row {
    /* flex */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    /* size */
    width: 100%;
  }
  .table {
    /* border */
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* size */
    height: min-content;
    /* margins */
    margin-top: 26px;
    margin-right: 12px;
    /* flex */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1;
    /* color */
    background-image: url(/bg-texture.png);
  }
  .todo {
    /* flex */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    grid-column: span 1;
    /* border */
    border-right: 1px solid var(--color-highlight);
    /* position */
    position: relative;
    /* margins */
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .progress {
    /* flex */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    grid-column: span 1;
    /* border */
    border-right: 1px solid var(--color-highlight);
    /* position */
    position: relative;
    /* margins */
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .done {
    /* flex */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    grid-column: span 1;
    /* position */
    position: relative;
    /* margins */
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .table-title {
    /* flex */
    display: flex;
    align-self: flex-start;
    justify-content: center;
    /* font */
    font-size: 16px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    /* position */
    position: absolute;
    top: -14px;
    /* color */
    color: var(--color-highlight);
    background-color: #0f2f5f;
    background-image: url(/bg-texture.png);
    /* margins */
    padding-left: 4px;
    padding-right: 4px;
    margin-left: 6px;
  }
  .item {
    /* flex */
    display: flex;
    flex-direction: column;
    /* size */
    width: calc(100% - 16px);
    max-width: 300px;
    /* margins */
    margin-top: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    /* colors */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
  }
  .item-title {
    /* font */
    font-size: 17px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    /* color */
    border-bottom: 1px solid var(--color-highlight);
    /* margins */
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .item-description {
    /* font */
    font-size: 14px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    /* margins */
    margin-top: 8px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .complete-title {
    /* position */
    position: absolute;
    top: 40%;
    left: 10%;
    z-index: 6;
    transform: rotate(10deg);
    /* border */
    border: 3px solid var(--color-highlight);
    /* font */
    font-size: 88px;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    /* color */
    color: var(--color-highlight);
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    /* margins */
    padding-left: 14px;
    padding-right: 16px;
    padding-bottom: 2px;
    padding-top: 2px;
  }
  .item-description > :global(a) {
    /* font */
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet);
    /* color */
    color: var(--color-highlight);
    text-decoration: none;
  }
  .item-description > :global(a:hover) {
    /* text */
    text-decoration: underline;
  }
  svg {
    /* size */
    width: 24px;
    height: 24px;
    /* color */
    fill: var(--color-black);
    z-index: 3;
  }
  .icon-shift-left {
    /* position */
    position: absolute;
    margin-left: -1px;
    z-index: 2;
    /* color */
    fill: var(--color-neon-blue);
  }
  .icon-shift-right {
    /* position */
    position: absolute;
    margin-right: -2px;
    z-index: 1;
    /* color */
    fill: var(--color-neon-violet);
  }
</style>