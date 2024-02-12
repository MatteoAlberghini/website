<!-- script -->
<script lang="ts">
  /* css imports */
  import 'simplebar/dist/simplebar.css'
  import '../styles/fonts.css'
  import '../styles/scrollbars.css'
  /* stores */
  import { soundActive, clickAudioPlayer } from '../stores/sounds.store'
  /* ui imports */
  import Desktop from '../ui/macro/desktop.svelte'
  import Settings from '../ui/micro/settings.svelte'
  import Changelog from '../ui/micro/changelog.svelte'
  import Projects from '../ui/micro/projects.svelte'
  import Contact from '../ui/micro/contact.svelte'
  import Support from '../ui/micro/linkedin.svelte'

  /* functions */
  function onClick() {
    if ($soundActive === true) { $clickAudioPlayer.play() }
  }
</script>

<!-- template -->
<svelte:window on:click={onClick} />
<svelte:head>
  <link rel="preload" as="image" href="/cursor.png" />
  <link rel="preload" as="image" href="/cursor_click.png" />
</svelte:head>
<main>
  <Desktop>
    <Changelog />
    <Projects />
    <Contact />
    <Settings gridRow="-2" gridColumn="1" />
    <Support gridColumn="-2" />
    <slot />
  </Desktop>
</main>

<!-- style
<Blog />
<Music />
-->
<style>
  /* global */
  :root { /* todo streamline colors better */
    /* colors theme */
    --color-background: #B682FF;
    --color-highlight: #FFD200;
    --color-highlight-hover: #FFD20030;
    --color-selector: #BF354b;
    /* defaults */
    --color-white: #FFF4E9;
    --color-black: #27213C;
    --color-error: #BF354B;
    /* color specific */
    --color-neon-yellow: #FFD200;
    --color-neon-blue: #0FD2FF;
    --color-neon-violet: #F60099;
  }
  [data-theme='yellow']:root {
    --color-selector: #BF354b;
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
    --test: #544c24;
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
    /* cursor */
    cursor: url(/cursor.png) 0 12, pointer;
  }
  :global(*:hover) {
    /* cursor */
    cursor: url(/cursor.png) 0 12, pointer;
  }
  :global(*:active) {
    /* cursor */
    cursor: url(/cursor_click.png) 0 12, pointer;
  }
  :global(::selection) {
    /* color */
    color: var(--color-highlight);
    background-color: var(--color-selector);
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