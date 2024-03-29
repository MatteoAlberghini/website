<!-- template -->
<div class="container">
  <img
    class="intro-image"
    src="/images/projects/genuino.jpg"
    alt="genuino.world intro"
  />
  <div class="title-container">
    <h2>GENUINO.WORLD</h2>
    <div class="info-container">
      <div class="tags-container">
        <span>&lt; react native app /&gt;</span>
        <span>&lt; react website /&gt;</span>
        <span>&lt; iot /&gt;</span>
      </div>
      <a
        href="https://www.genuino.world/"
        target="_blank"
      >
        genuino website  
      </a>
    </div>
  </div>
  <div class="content">
    <p class="intro-text">Feel free to <a href="/contacts">contact me</a> if you have any questions or you want to reach out :)</p>
    <h3>Company details</h3>
    <p>
      Genuino is a company dedicated to connect digital collectibles with real world objects,
      from match-worn football t-shirts to paintings and songs.
    </p>
    <h3>Project overview</h3>
    <p>
      I was involved in the total creation of the product: from the design to the building of the
      client-facing website to the creation of the collaborator-facing app.
      <br />
      The website is built with <a href="https://nextjs.org/" target="_blank">Next.js</a>,
      with a backend built in Node, which interfaces with custom-made ethereum smart contracts.
      <br />
      The app (in <a href="https://reactnative.dev/">React Native</a>) is used by Genuino collaborators
      to connect NFC tags (specifically, custom produced RFID tags, with authentication)
      with the original real world object.
      <br />
      In the backend, the tag is then connected and saved in the database, and at the same time a Token is minted
      on the ethereum blockchain.
      <br />
      The user can then purchase the token, connected to the real world product, and Genuino will ensure both a marketplace
      for it, and that the product is delivered and always connected with the digital token.
      <br />
      The <a href="https://www.genuino.world/">website</a> is the marketplace and the way to obtain
      different tokens, both via purchasing the token itself and by purchasing gamify version of card packs.
    </p>
    <h3>tech stack && favorite animations</h3>
    <ul>
      <li>Next.js for website frontend</li>
      <li>React Native (with custom native hooks) for mobile app</li>
      <li>Custom made NFC tags that interface with in-house low-level auth system via app</li>
    </ul>
    <div class="animations-container">
      <div class="animation-container">
        <video
          src="/videos/glitch_genuino.mp4"
          class="contained-media"
          muted
          autoplay
          loop
        />
        <p>CSS-only glitch animation</p>
      </div>
      <div class="animation-container">
        <p>Play video on cursor hover</p>
        <video
          src="/videos/hover_card_genuino.mp4"
          class="contained-media"
          muted
          autoplay
          loop
        />
      </div>
      <div class="animation-container">
        <p>Custom carousel in javascript</p>
        <video
          src="/videos/carousel_genuino.mp4"
          class="contained-media"
          muted
          autoplay
          loop
        />
      </div>
    </div>
  </div>
</div>

<!-- style -->
<style>
  /* containers */
  .container {
    /* flex */
    display: flex;
    flex-direction: column;
    /* size */
    width: 100%;
  }
  .content {
    /* color */
    border: 1px solid var(--color-background);
    border-bottom-width: 3px;
    border-top-width: 0px;
    /* margins */
    padding-top: 0px;
    padding-bottom: 12px;
    padding-left: 10px;
    padding-right: 10px;
    /* fonts */
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.45px;
    /* color */
    color: var(--color-white);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .title-container {
    /* flex */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* size */
    width: 100%;
    /* margins */
    padding-top: 2px;
    padding-bottom: 6px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 24px;
    /* border */
    border: 1px solid var(--color-background);
    border-bottom-width: 3px;
  }
  .info-container {
    /* flex */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 4px;
  }
  .tags-container {
    /* flex */
    display: flex;
    flex-direction: row;
    column-gap: 4px;
    /* margins */
    margin-top: 4px;
  }
  .animations-container {
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    /* size */
    width: 100%;
    /* margins */
    column-gap: 24px;
    row-gap: 24px;
    margin-top: 24px;
  }
  .animation-container {
    /* flex */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
    /* position */
    position: relative;
    /* size */
    max-width: 450px;
    width: 100%;
  }
  .animation-container > p {
    /* position */
    position: absolute;
    top: -16px;
    /* border */
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
    /* font */
    font-size: 16px;
    text-shadow: 1px 1px var(--color-neon-blue), 0px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    text-transform: uppercase;
    /* color */
    color: var(--color-highlight);
    background-color: #312454;
    /* margins */
    padding-left: 14px;
    padding-right: 16px;
    padding-bottom: 2px;
    padding-top: 2px;
  }
  /* intro */
  .intro-image {
    /* size */
    width: 100%;
    height: 350px;
    object-fit: cover;
    /* flex */
    justify-self: flex-start;
    /* border */
    border: 1px solid var(--color-background);
    border-bottom-width: 3px;
  }
  h2 {
    /* font */
    font-size: 42px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    /* color */
    color: var(--color-highlight);
  }
  .tags-container > span {
    /* fonts */
    font-size: 18px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .info-container > a {
    /* fonts */
    font-size: 18px;
    font-weight: 400;
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .info-container > a:hover {
    /* text */
    text-decoration: none;
  }
  /* content */
  .intro-text {
    /* margins */
    margin-top: 8px;
  }
  .content > h3 {
    /* font */
    font-size: 20px;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-neon-blue), -1px -1px var(--color-neon-violet), -1px 0px var(--color-neon-yellow);
    text-transform: uppercase;
    /* color */
    color: var(--color-highlight);
    /* margins */
    margin-bottom: 4px;
    margin-top: 22px;
  }
  .content > p > a {
    /* color */
    color: var(--color-highlight);
    text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
  }
  .content > p > a:hover {
    /* text */
    text-decoration: none;
  }
  .content > ul {
    /* margins */
    margin-left: 24px;
  }
  .contained-media {
    /* size */
    width: 100%;
    max-width: 450px;
    max-height: 300px;
    object-fit: cover;
    /* border */
    border: 1px solid var(--color-highlight);
    border-bottom-width: 3px;
  }
</style>