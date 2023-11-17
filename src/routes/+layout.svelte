<!-- script -->
<script>
  import 'simplebar/dist/simplebar.css'
  import '../styles/fonts.css'
  import '../styles/scrollbars.css'
</script>

<!-- template -->
<main>
  <slot />
</main>

<!-- style -->
<style>
  /* global */
  :root {
    /* colors theme */
    --color-background: #B682FF;
    --color-background-secondary: #312454;
    --color-background-secondary-opacity: #31245430;
    --color-highlight: #FFD200;
    --color-highlight-opacity: #FFD20030;
    --color-white: #F2F2F2;
    --color-black: #27213C;
    --color-button: #ede06d;
    --color-button-bg: #ffb003;
    /* color specific */
    --color-neon-yellow: #FFD200;
    --color-neon-blue: #0FD2FF;
    --color-neon-violet: #F60099;
  }
  [data-theme='yellow']:root {
    --color-button: #ede06d;
    --color-button-bg: #ffb003;
    --color-background: #DACE62;
    --color-highlight: #ffb003;
    --color-highlight-opacity: #ffb00360;
  }
  [data-theme='violet']:root {
    --color-button: #B682FF;
    --color-button-bg: #FFD200;
    --color-background: #B682FF;
    --color-highlight: #FFD200;
    --color-highlight-opacity: #FFD20030;
  }
  :global(body) {
    /* size */
    height: 100%;
    /* text */
    font-family: 'Dosis', Arial, sans-serif;
    font-size: 100%;
    text-rendering: optimizeLegibility;
    /* scroll */
    scroll-behavior: smooth;
    /* margins */
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    /* position */
    overflow: hidden;
  }
  :global(*) {
    /* css reset */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    /* text */
    font-family: 'Dosis', Arial, sans-serif;
  }
  /* main */
  main { /* todo mobile version */
    /* size */
    height: 100vh;
    width: 100vw;
    /* color */
    background-color: var(--color-background);
  }
</style>