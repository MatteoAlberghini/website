<!-- script -->
<script lang="ts">
  /* svelte imports */
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  /* stores imports */
  import { modalFocused } from '../../stores/modals.store'
  /* ui imports */
  import QuitButton from '../components/buttons/quit.button.svelte'
  import ScreenSaverButton from '../components/buttons/saver.button.svelte'
  import PCDesktop from '../components/desktop/pc.desktop.svelte'
  import ThemeSelector from '../components/selectors/theme.selector.svelte'
  import ScreenSelector from '../components/selectors/screen.selector.svelte'
  import IconSlider from '../components/sliders/icon.slider.svelte'
  import SoundSlider from '../components/sliders/sound.slider.svelte'
  import CvButton from '../components/buttons/cv.button.svelte'
  import ColorButton from '../components/buttons/color.button.svelte'
  import SoundCheckbox from '../components/checkboxes/sound.checkbox.svelte'

  /* props */
  export let gridRow: string = 'auto'
  export let gridColumn: string = 'auto'
  /* constants */
  let openModal: boolean = false /* todo svelte 5 change to reactive */
  let shouldOpen: boolean = false
  /* functions */
  function onOpen() { goto('/settings') }
  function onClose() { goto('/') }
  function handleInitialPage() {
    if ($page.url.pathname === '/settings') {
      shouldOpen = true
      if (browser) { triggerNavigation() }
    } 
  }
  function triggerNavigation() {
    if (shouldOpen === true) {
      openModal = true
      modalFocused.set(1)
      let query = new URLSearchParams($page.url.searchParams.toString())
      query.delete('t')
      goto(`?${query.toString()}`).then(() => {
        openModal = false
        shouldOpen = false
      })
    }
  }
  /* stores */
  $: $page, handleInitialPage()
</script>

<!-- template -->
<PCDesktop
  uniqueId={1}
  text="settings.sh"
  homePath="/settings"
  mainColor="#312454"
  modalWidth="750px"
  modalHeight="600px"
  modalTop="15%"
  modalLeft="35%"
  gridColumn={gridColumn}
  gridRow={gridRow}
  openModal={openModal}
  on:open={onOpen}
  on:close={onClose}
>
  <!-- power buttons -->
  <div class="power-buttons-wrapper">
    <QuitButton />
    <ScreenSaverButton />
  </div>
  <div class="content">
    <!-- color theme -->
    <div class="option-wrapper">
      <span class="option-title">THEME</span>
      <ThemeSelector />
      <ScreenSelector />
    </div>
    <!-- icons -->
    <div class="option-wrapper">
      <span class="option-title">ICONS</span>
      <IconSlider />
    </div>
    <!-- icons -->
    <div class="option-wrapper">
      <span class="option-title">SOUNDS</span>
      <SoundCheckbox />
      <SoundSlider />
    </div>
    <!-- exports -->
    <div class="option-wrapper">
      <span class="option-title">EXTERNAL</span>
      <div class="buttons-container">
        <CvButton />
        <ColorButton />
      </div>
    </div>
  </div>
</PCDesktop>

<!-- style -->
<style>
  .content {
    /* size */
    width: 100%;
    height: 100%;
    /* display */
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    /* margins */
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
    padding-bottom: 16px;
    column-gap: 16px;
    row-gap: 16px;
  }
  .option-wrapper {
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    /* border */
    border: 1px solid var(--color-background);
    border-bottom-width: 3px;
    /* size */
    width: 345px;
    min-height: 155px;
    /* margins */
    margin-top: 12px;
    padding-top: 8px;
    padding-bottom: 26px;
    /* position */
    position: relative;
  }
  .option-title {
    /* font */
    font-size: 18px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    /* position */
    position: absolute;
    top: -14px;
    /* color */
    color: var(--color-highlight);
    background-color: #312454;
    background-image: url(/bg-texture.png);
    /* margins */
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 3px;
  }
  .power-buttons-wrapper {
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
    /* margins */
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
  }
  .buttons-container {
    /* size */
    width: 100%;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 12px;
    /* margins */
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 12px;
  }
</style>