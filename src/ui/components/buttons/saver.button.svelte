<!-- script -->
<script lang="ts">
  /* imports */
  import { isScreenPlaying } from '../../../stores/screen.store'
  import Button from '../../atoms/button.svelte'

  /* props */
  export let height: number = 40
  export let width: string = '46px'

  /* functions */
  function onClick() { isScreenPlaying.set(true) }
</script>

<!-- template -->
<Button height={height} width={width} on:click={onClick}>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772
      5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523
      16 19 16H12Z"
      stroke="inherit"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    class="icon-shift-right"
  >
    <path
      d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772
      5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523
      16 19 16H12Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    class="icon-shift-left"
  >
    <path
      d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772
      5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523
      16 19 16H12Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</Button>

<!-- style -->
<style>
  svg {
    /* size */
    width: 29px;
    height: 29px;
    /* color */
    stroke: var(--color-black);
    z-index: 3;
  }
  .icon-shift-left {
    /* position */
    position: absolute;
    margin-left: -2px;
    z-index: 2;
    /* color */
    stroke: var(--color-neon-blue);
  }
  .icon-shift-right {
    /* position */
    position: absolute;
    margin-right: -3px;
    z-index: 1;
    /* color */
    stroke: var(--color-neon-violet);
  }
</style>