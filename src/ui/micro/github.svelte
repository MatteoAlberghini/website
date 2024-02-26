<!-- script -->
<script lang="ts">
  /* ui imports */
  import DesktopButton from '../components/buttons/desktop.button.svelte'

  /* props */
  export let gridRow: string = 'auto'
  export let gridColumn: string = 'auto'
</script>

<!-- template -->
<DesktopButton
  type="external"
  uniqueId={8}
  text="github.link"
  url="https://github.com/MatteoAlberghini"
  gridRow={gridRow}
  gridColumn={gridColumn}
  homePath="/"
/>