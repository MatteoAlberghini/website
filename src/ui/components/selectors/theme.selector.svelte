<!-- script -->
<script lang="ts">
  /* imports */
  import { type PossibleThemeType, themes } from '../../../types/common'
  import { changeTheme, getTheme } from '../../../support/cookies'
  import Selector from '../../atoms/selector.svelte'
  
  /* constants */
  let currentTheme = getTheme().text
  /* functions */
  function colorChange(e: CustomEvent<{ value: string, text: string }>) {
    changeTheme(e.detail.value as PossibleThemeType)
    currentTheme = e.detail.text
  }
</script>

<!-- template -->
<Selector label="color theme" selected={currentTheme} items={themes} on:itemClick={colorChange} />