<!-- template -->
<div class="container">
  <img
    class="intro-image"
    src="/images/projects/waterkaarten.jpg"
    alt="waterkaarten intro"
  />
  <div class="title-container">
    <h2>WATERKAARTEN</h2>
    <div class="info-container">
      <div class="tags-container">
        <span>&lt; ios app /&gt;</span>
        <span>&lt; android app /&gt;</span>
      </div>
      <a
        href="https://waterkaarten.app/"
        target="_blank"
      >
        waterkaarten website
      </a>
    </div>
  </div>
  <div class="content">
    <p class="intro-text">Feel free to <a href="/contacts">contact me</a> if you have any questions or you want to reach out :)</p>
    <h3>Company details</h3>
    <p>
      The best description of waterkaarten is "a navigator app for water". With reviews, route planning and AIS support.
    </p>
    <h3>Project overview</h3>
    <p>
      My main task was the redesign of the app to feel more smooth and attractive to customers.
      <br />
      After a UI design and implementation, I moved on working at a custom database of cities, based on population number and relevancy.
      I took most infos from websites such as <a href="https://www.geonames.org/" target="_blank">Geonames</a>, for which you can find scripts in
      <a href="https://github.com/MatteoAlberghini/geonames.scripts" target="_blank">this github repository</a>.
      <br />
      Another simple but significant improvement was the handling of different zoom levels, giving priority to the most important POIs
      and the biggest cities first.
    </p>
    <h3>tech stack</h3>
    <ul>
      <li>Native iOS app built with swift</li>
      <li>Android iOS app built with kotlin, with java hooks to support older code</li>
    </ul>
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
</style>