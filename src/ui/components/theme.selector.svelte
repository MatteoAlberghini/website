<!-- script -->
<script lang="ts">
  /* imports */
  import type { PossibleThemeType } from '../../types/common'
  import { changeTheme, getTheme } from '../../support/cookies'
  
  /* constants */
  let currentTheme = getTheme()
  /* callbacks */
  function colorChange(value: PossibleThemeType) {
    changeTheme(value)
  }
</script>

<!-- template -->
<div class="container">
  <span class="title">theme</span>
  <div class="dropdown">
    <span class="dropdown-selected">{currentTheme.text}</span>
    <div class="dropdown-icon-container">
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        class="dropdown-icon"
      >
        <path
          d="M8 10.18 2.39 4.52l-.89.87 5.59 
          5.71a1.18 1.18 0 0 0 .86.39 1.13 1.13 0 0 0 .85-.39l5.7-5.7-.88-.89z"
        />
      </svg>
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        class="dropdown-icon dropdown-icon-shift-left"
      >
        <path
          d="M8 10.18 2.39 4.52l-.89.87 5.59 
          5.71a1.18 1.18 0 0 0 .86.39 1.13 1.13 0 0 0 .85-.39l5.7-5.7-.88-.89z"
        />
      </svg>
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        class="dropdown-icon dropdown-icon-shift-right"
      >
        <path
          d="M8 10.18 2.39 4.52l-.89.87 5.59 
          5.71a1.18 1.18 0 0 0 .86.39 1.13 1.13 0 0 0 .85-.39l5.7-5.7-.88-.89z"
        />
      </svg>
    </div>
  </div>
</div>

<!-- style -->
<style>
  .container {
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    /* size */
    width: 100%;
    /* margins */
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 4px;
  }
  .title {
    /* fonts */
    font-size: 14px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .dropdown {
    /* size */
    width: 100%;
    height: 28px;
    /* flex */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    /* color */
    background-color: var(--color-background);
    /* border */
    border: 1px solid var(--color-highlight);
    /* margins */
    margin-top: 4px;
    padding-left: 6px;
    /* cursor */
    cursor: pointer;
  }
  .dropdown-icon {
    /* size */
    height: 21px;
    width: 21px;
    /* position */
    z-index: 3;
    /* color */
    fill: var(--color-black);
  }
  .dropdown-icon-shift-left {
    /* position */
    position: absolute;
    margin-left: -2px;
    z-index: 2;
    /* color */
    fill: var(--color-neon-blue);
  }
  .dropdown-icon-shift-right {
    /* position */
    position: absolute;
    margin-right: -3px;
    z-index: 1;
    /* color */
    fill: var(--color-neon-violet);
  }
  .dropdown-icon-container {
    /* size */
    height: 100%;
    width: 28px;
    /* border */
    border-left: 1px solid var(--color-highlight);
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position */
    position: relative;
  }
  .dropdown-selected {
    /* fonts */
    font-size: 16px;
    font-weight: 400;
    /* color */
    color: var(--color-black);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
</style>