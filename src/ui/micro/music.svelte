<!-- script -->
<script lang="ts">
  /* svelte imports */
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  /* ui imports */
  import DesktopButton from '../components/buttons/desktop.button.svelte'

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
<DesktopButton
  type="music"
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
  homePath="/music"
>

</DesktopButton>

<!-- style -->
<style>

</style>