<!-- template -->
<header>
  <div class="header-container">
    <h3
      class="header-text"
    >
      Website by Matteo Alberghini
    </h3>
  </div>
</header>

<!-- style -->
<style>
  header {
    /* position */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2147483647;
    /* size */
    width: 100%;
    height: 28px;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    /* colors */
    background-color: var(--color-background);
  }
  .header-container {
    /* border */
    border-color: var(--color-cambridge-blue);
    border-width: 2px;
    border-style: solid;
    border-top-width: 0px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    /* size */
    height: 28px;
    width: max-content;
    /* margins */
    padding-left: 12px;
    padding-right: 12px;
  }
  .header-text {
    /* text */
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
  }
</style>