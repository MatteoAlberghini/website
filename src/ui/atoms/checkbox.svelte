<!-- script -->
<script lang="ts">
  /* imports */
  import { createEventDispatcher } from 'svelte'
  import { clickAudioPlayer } from '../../stores/sounds.store'

  /* exports */
  export let label: string
  export let checked: boolean
  /* dispatcher */
  const dispatch = createEventDispatcher()
  /* functions */
  function onClick() {
    if (checked === false) { $clickAudioPlayer.play() }
    dispatch('click')
  }
</script>

<!-- template -->
<label>
  <input
    type="checkbox"
    name="checkbox"
    checked={checked}
    on:click={onClick}
  />
   {label}
</label>

<!-- style -->
<style>
  label {
    /* fonts */
    font-size: 16px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
    /* margins */
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 12px;
    /* grid */
    display: grid;
    grid-template-columns: 1em auto;
    gap: 12px;
    /* position */
    position: relative;
  }
  input {
    /* reset */
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    /* color */
    background-color: #01010100;
    /* size */
    font: inherit;
    width: 20px;
    height: 20px;
    transform: translateY(-0.075em);
    margin-top: 0.075em;
    /* color */
    color: var(--color-highlight);
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* grid */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input::before {
    /* content */
    content: "";
    /* size */
    width: 12px;
    height: 12px;
    transform: scale(0);
    box-shadow: inset 1em 1em var(--color-background);
  }
  input:checked::before {
    transform: scale(1);
  }
</style>