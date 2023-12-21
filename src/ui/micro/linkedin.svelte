<!-- script -->
<script lang="ts">
  /* ui imports */
  import ExternalDesktop from '../components/desktop/external.desktop.svelte'

  /* props */
  export let gridRow: string = 'auto'
  export let gridColumn: string = 'auto'
</script>

<!-- template -->
<ExternalDesktop
  text="linkedin.link"
  url="https://www.linkedin.com/in/0x6d61646f/"
  gridColumn={gridColumn}
  gridRow={gridRow}
/>