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
  uniqueId={7}
  text="linkedin.link"
  url="https://www.linkedin.com/in/0x6d61646f/"
  gridRow={gridRow}
  gridColumn={gridColumn}
  homePath="/"
/>