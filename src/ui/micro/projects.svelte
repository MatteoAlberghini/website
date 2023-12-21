<!-- script -->
<script lang="ts">
  /* svelte imports */
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  /* stores imports */
  import { modalFocused } from '../../stores/modals.store'
  /* ui imports */
  import FolderDesktop from '../components/desktop/folder.desktop.svelte'

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

</FolderDesktop>

<!-- style -->
<style>

</style>