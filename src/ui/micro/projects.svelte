<!-- script -->
<script lang="ts">
  /* typescript */
  import type { ProjectContentType, WindowPathType } from '../../types/common'
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
  import FolderButton from '../components/buttons/folder.button.svelte'
  import Genuino from './genuino.svelte'
  import Waterkaarten from './waterkaarten.svelte'
  import O9Solutions from './o9solutions.svelte'

  /* constants */
  let openModal: boolean = false /* todo svelte 5 change to reactive */
  let shouldOpen: boolean = false
  let isHome: boolean = true
  let content: ProjectContentType = 'genuino'
  let windowPaths: WindowPathType[] = []
  const possibleContent: ProjectContentType[] = ['genuino', 'waterkaarten', 'o9solutions']
  /* functions */
  function onOpen() { goto('/projects') }
  function onClose() {
    goto('/')
    isHome = true
  }
  function handleInitialPage() {
    if ($page.url.pathname.includes('/projects')) {
      shouldOpen = true
      if (browser) { triggerNavigation() }
    }
  }
  function triggerNavigation() {
    if (shouldOpen === true) {
      /* open modal and focus */
      modalFocused.set(3)
      openModal = true
      /* delete query (used for focusing) */
      let query = new URLSearchParams($page.url.searchParams.toString())
      query.delete('t')
      /* handle subpage navigation */
      const innerProject = $page.url.pathname.split('/').slice(-1)[0]
      /* check if its homepage */
      if (innerProject === 'projects') {
        goto(`?${query.toString()}`).then(() => {
          openModal = false
          shouldOpen = false
          isHome = true
          windowPaths = []
        })
        return
      }
      if (!possibleContent.includes(innerProject as ProjectContentType)) { return }
      content = innerProject as ProjectContentType
      isHome = false
      windowPaths = [{ path: '/projects/' + innerProject, title: innerProject }]
    }
  }
  function handleFolderClick(e: CustomEvent<{ path: string, id: ProjectContentType }>) {
    goto(e.detail.path)
    content = e.detail.id
    windowPaths = [{ title: e.detail.id, path: e.detail.path }]
    isHome = false
  }
  /* stores */
  $: $page, handleInitialPage()
</script>

<!-- template -->
<FolderDesktop
  uniqueId={3}
  text="projects.dir"
  homePath="/projects"
  path={windowPaths}
  mainColor="#312454"
  modalWidth="980px"
  modalHeight="750px"
  modalTop="20%"
  modalLeft="30%"
  openModal={openModal}
  on:open={onOpen}
  on:close={onClose}
>
  <div class="content">
    <!-- folders -->
    {#if isHome === true }
    {#each projectsOverview as p}
    <div class="folders-wrapper">
      <span class="folders-title">{p.folderGroup}</span>
      {#each p.items as i}
        <FolderButton
          id={i.id}
          title={i.title}
          path={i.path}
          on:click={handleFolderClick}
        />
      {/each}
    </div>
    {/each}
    <!-- folders content -->
    {:else if isHome === false}
      {#if content === 'genuino'}
        <Genuino />
      {:else if content === 'waterkaarten'}
        <Waterkaarten />
      {:else if content === 'o9solutions'}
        <O9Solutions />
      {/if}
    {/if}
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
    padding-top: 16px;
    padding-bottom: 16px;
    row-gap: 1px;
  }
  .folders-wrapper {
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    /* border */
    border: 1px solid var(--color-background);
    border-bottom-width: 3px;
    /* size */
    width: 100%;
    min-height: 155px;
    /* margins */
    margin-top: 16px;
    margin-bottom: 16px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 16px;
    padding-right: 16px;
    column-gap: 16px;
    row-gap: 16px;
    /* position */
    position: relative;
  }
  .folders-title {
    /* font */
    font-size: 18px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    /* position */
    position: absolute;
    top: -14px;
    /* color */
    color: var(--color-highlight);
    background-color: #312454;
    background-image: url(/bg-texture.png);
    /* margins */
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 3px;
  }
</style>
