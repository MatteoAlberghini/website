<!-- script -->
<script lang="ts">
  /* svelte imports */
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  /* stores imports */
  import { modalFocused } from '../../stores/modals.store'
  /* data */
  import { projectsOverview } from '../../support/data'
  /* ui imports */
  import FolderDesktop from '../components/desktop/folder.desktop.svelte'
  import Button from '../atoms/button.svelte';

  /* constants */
  let openModal: boolean = false /* todo svelte 5 change to reactive */
  let shouldOpen: boolean = false
  /* functions */
  function onOpen() { goto('/projects') }
  function onClose() { goto('/') }
  function handleInitialPage() {
    if ($page.url.pathname === '/projects') {
      shouldOpen = true
      if (browser) { triggerNavigation() }
    }
  }
  function triggerNavigation() {
    if (shouldOpen === true) {
      modalFocused.set(5)
      openModal = true
      let query = new URLSearchParams($page.url.searchParams.toString())
      query.delete('t')
      goto(`?${query.toString()}`).then(() => {
        openModal = false
        shouldOpen = false
      })
    }
  }
  /* stores */
  $: $page, handleInitialPage()
</script>

<!-- template -->
<FolderDesktop
  uniqueId={3}
  text="projects.dir"
  mainColor="#312454"
  modalWidth="1100px"
  modalHeight="750px"
  modalTop="20%"
  modalLeft="30%"
  openModal={openModal}
  on:open={onOpen}
  on:close={onClose}
>
  <div class="content">
    {#each projectsOverview as p}
      <a href={p.link} target="_blank" class="project-container">
        <img
          src={p.image}
          alt="ahsd"
          class="project-image"
        />
        <div class="info-container">
          <h3 class="project-title">{p.title}</h3>
          <p class="project-description">{p.description}</p>
        </div>
      </a>
    {/each}
  </div>
</FolderDesktop>

<!-- style -->
<style>
  .content {
    /* size */
    width: 100%;
    height: 100%;
    /* display */
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    /* margins */
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 32px;
    padding-bottom: 16px;
    row-gap: 1px;
  }
  .project-container {
    /* display */
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    text-decoration: none;
    /* size */
    width: 100%;
    height: 200px;
    /* border */
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
  }
  .project-container:hover {
    border-color: var(--color-background);
  }
  .project-container:hover > .project-image {
    border-color: var(--color-background);
  }
  .info-container {
    /* display */
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    /* position */
    position: relative;
    /* margins */
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 16px;
    /* size */
    height: 100%;
  }
  .project-image {
    /* color */
    opacity: 0.7;
    background-image: url(/bg-texture.png);
    /* size */
    max-width: 330px;
    object-fit: cover;
    /* border */
    border-right: 1px solid var(--color-highlight);
  }
  .project-title {
    /* flex */
    display: flex;
    align-self: flex-start;
    justify-content: center;
    /* font */
    font-size: 28px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    text-transform: uppercase;
    /* position */
    position: absolute;
    top: -18px;
    /* color */
    color: var(--color-highlight);
    background-color: #312454;
    background-image: url(/bg-texture.png);
    /* margins */
    padding-left: 4px;
    padding-right: 4px;
  }
  .project-description {
    /* margins */
    margin-left: 8px;
    margin-right: 6px;
    /* font */
    font-size: 16px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    letter-spacing: 0.3px;
    /* color */
    color: var(--color-highlight);
  }
</style>