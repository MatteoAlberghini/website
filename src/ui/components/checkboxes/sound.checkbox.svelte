<!-- script -->
<script>
  /* imports */
  import Checkbox from '../../atoms/checkbox.svelte'
  import { soundActive } from '../../../stores/sounds.store'
  import { changeSoundActive } from '../../../support/cookies'

  /* stores */
  $: checked = $soundActive
  /* functions */
  function onClick() {
    changeSoundActive(!checked)
    soundActive.set(!checked)
  }
</script>

<!-- template -->
<Checkbox
  label="enable sounds"
  checked={checked}
  on:click={onClick}
/>