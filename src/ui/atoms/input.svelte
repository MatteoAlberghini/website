<!-- script-->
<script lang="ts">
  /* props */
  export let id: string
  export let label: string
  export let type: string
</script>

<!-- template -->
<label for={id}>{label}</label>
<input id={id} type={type} />

<!-- style -->
<style>
  label {
    /* margins */
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 12px;
    /* fonts */
    font-size: 16px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  input {
    /* margins */
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 7px;
    padding-right: 7px;
    margin-top: 4px;
    /* size */
    height: 36px;
    /* color */
    background-color: var(--color-background);
    background-image: url(/bg-texture.png);
    /* border */
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* fonts */
    font-size: 16px;
    font-weight: 400;
    /* color */
    color: var(--color-black);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
</style>