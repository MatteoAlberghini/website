<!-- script -->
<script>
  import QuitButton from '../components/buttons/quit.button.svelte'
  import ScreenSaverButton from '../components/buttons/saver.button.svelte'
  import PCDesktop from '../components/desktop/pc.desktop.svelte'
  import ThemeSelector from '../components/selectors/theme.selector.svelte'
  import ScreenSelector from '../components/selectors/screen.selector.svelte'
</script>

<!-- template -->
<PCDesktop
  uniqueId={1}
  text="settings.sh"
  mainColor="#312454"
  modalWidth="750px"
  modalHeight="600px"
  modalTop="15%"
  modalLeft="30%"
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
    </div>
    <!-- icons -->
    <div class="option-wrapper">
      <span class="option-title">SOUNDS</span>
    </div>
    <!-- icons -->
    <div class="option-wrapper">
      <span class="option-title">EXPORTS</span>
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
    margin-left: 2px;
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
</style>