<!-- template -->
<div class="container">
  <img
    class="intro-image"
    src="/images/projects/o9solutions.png"
    alt="o9solutions intro"
  />
  <div class="title-container">
    <h2>O9SOLUTIONS</h2>
    <div class="info-container">
      <div class="tags-container">
        <span>&lt; react headless website /&gt;</span>
        <span>&lt; wordpress backend /&gt;</span>
      </div>
      <a
        href="https://o9solutions.com/"
        target="_blank"
      >
        o9solutions website  
      </a>
    </div>
  </div>
  <div class="content">
    <p class="intro-text">Feel free to <a href="/contacts">contact me</a> if you have any questions or you want to reach out :)</p>
    <h3>Company details</h3>
    <p>
      o9Solutions develops a highly customizable supply chain software & integrated planning platform.
    </p>
    <h3>Project overview</h3>
    <p>
      I worked on the marketing website for o9solutions. The main focus of the project was moving from a wordpress
      website to a react headless website, using <a href="https://nextjs.org/" target="_blank">Next.js</a> as a frontend &
      <a href="https://wordpress.com/" target="_blank">Wordpress</a> as a backend and CMS.
      <br />
      The project also involved a complete re-design of the website, from modern animations to a complete overall of the design
      system. The main focus of the re-design was improved UX, neat and clean UI, and constant improvement in page
      speed and conversion rates.
    </p>
    <h3>tech stack && favorite animations</h3>
    <ul>
      <li>Next.js for website frontend</li>
      <li>Wordpress for backend / CMS</li>
    </ul>
    <div class="animations-container">
      <div class="animation-container">
        <p>Custom SVG animation</p>
        <video
          src="/videos/svg_o9.mp4"
          class="contained-media"
          muted
          autoplay
          loop
        />
      </div>
      <div class="animation-container">
        <p>Resource page redesign</p>
        <video
          src="/videos/resource_o9.mp4"
          class="contained-media"
          muted
          autoplay
          loop
        />
      </div>
      <div class="animation-container">
        <p>Custom coded carousels</p>
        <video
          src="/videos/carousel_o9.mp4"
          class="contained-media"
          muted
          autoplay
          loop
        />
      </div>
      <div class="animation-container">
        <p>Blog redesign</p>
        <video
          src="/videos/blog_o9.mp4"
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
    object-position: 50% 10%;
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