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
  :root { /* todo streamline colors better */
    /* colors theme */
    --color-background: #B682FF;
    --color-highlight: #FFD200;
    --color-highlight-hover: #FFD20030;
    /* defaults */
    --color-white: #FFF4E9;
    --color-black: #27213C;
    /* color specific */
    --color-neon-yellow: #FFD200;
    --color-neon-blue: #0FD2FF;
    --color-neon-violet: #F60099;
  }
  [data-theme='yellow']:root {
    --color-background: #DACE62;
    --color-highlight: #ffb003;
    --color-highlight-hover: #ffb00360;
  }
  [data-theme='violet']:root {
    --color-background: #B682FF;
    --color-highlight: #FFD200;
    --color-highlight-hover: #FFD20030;
  }
  [data-theme='light']:root {
    --color-background: #FFF4E9;
    --color-highlight: #BF354b;
    --color-highlight-hover: #BF354b30;
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