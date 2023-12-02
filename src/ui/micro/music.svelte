<!-- script -->
<script lang="ts">
  /* svelte imports */
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  /* ui imports */
  import MusicDesktop from '../components/desktop/music.desktop.svelte'

  /* props */
  export let gridRow: string = 'auto'
  export let gridColumn: string = 'auto'
  /* constants */
  let isOpen: boolean = false
  /* functions */
  function onOpen() { goto('/music') }
  function onClose() { goto('/') }
  function handleInitialPage() { if ($page.url.pathname === '/music') { isOpen = true } }
  /* stores */
  $: $page, handleInitialPage()
</script>

<!-- template -->
<MusicDesktop
  uniqueId={4}
  text="music.sh"
  mainColor="#312454"
  modalWidth="500px"
  modalHeight="100px"
  modalLeft="0%"
  modalBottom="0%"
  gridColumn={gridColumn}
  gridRow={gridRow}
  openModal={isOpen}
  on:open={onOpen}
  on:close={onClose}
>

</MusicDesktop>

<!-- style -->
<style>

</style>