<!-- script -->
<script>
  /* imports */
  import Button from '../../atoms/button.svelte'

  /* functions */
  function onClick() {}
</script>

<!-- template -->
<Button
  width="100%"
  on:click={onClick}
>
  <span>export color palette</span>
</Button>

<!-- style -->
<style>
  span {
    /* fonts */
    font-size: 16px;
    font-weight: 400;
    /* color */
    color: var(--color-black);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
</style>