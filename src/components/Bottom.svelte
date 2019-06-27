<script>
  let adjective = "cool";
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=PT+Mono|PT+Sans|PT+Sans+Narrow|Permanent+Marker&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Fredoka+One&display=swap");

  .bloc {
    background-image: linear-gradient(#260325, #432b57);
    min-height: 100vh;
    padding: 20vh 60px;
    position: relative;
  }
  .title {
    margin: 10vh 0 0 0;
    display: flex;
    justify-content: center;
  }
  .title__txt b {
    letter-spacing: 0.08em;
    font: 4.618em "Fredoka One", "PT Mono", sans-serif;
    color: rgb(255, 161, 193);
    text-shadow: 0 5px 30px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ea1059,
      0 0 0.1em #ea1059, 0 10px 3px #000;
  }
  .title__txt b .blink {
    animation: blink linear infinite 8s;
  }
  @keyframes blink {
    78% {
      color: inherit;
      text-shadow: inherit;
    }
    79% {
      color: #333;
    }
    80% {
      text-shadow: none;
    }
    81% {
      color: inherit;
      text-shadow: inherit;
    }
    82% {
      color: #333;
      text-shadow: none;
    }
    83% {
      color: inherit;
      text-shadow: inherit;
    }
    92% {
      color: #333;
      text-shadow: none;
    }
    92.5% {
      color: inherit;
      text-shadow: inherit;
    }
  }
  .title__txt b .blinkless {
    animation: blinkless linear infinite 3s;
  }
  @keyframes blinkless {
    34% {
      color: inherit;
      text-shadow: inherit;
    }
    35% {
      color: #333;
    }
    36% {
      text-shadow: none;
    }
    37% {
      color: inherit;
      text-shadow: inherit;
    }
  }
  .blinklittle {
    animation: blinklittle linear infinite 5s;
  }
  @keyframes blinklittle {
    56% {
      color: inherit;
      text-shadow: inherit;
    }
    57% {
      color: #333;
    }
    58% {
      text-shadow: none;
    }
    59% {
      color: inherit;
      text-shadow: inherit;
    }
  }
  .content {
    color: rgba(255, 255, 255, 0.6);
    font-family: 'PT Mono', Courier, monospace;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 6.618em 0;
  }
  .content p {
    max-width:800px;
    width: 50vw;
    text-align: center;
    line-height: 1.2em;

  }
  .contact {
    display: flex;
    justify-content: center;
  }
  .contact__button {
    border-radius: 3.618em;
    border: 0px #f06c98 solid;
    -webkit-box-shadow: -1px -1px 14px 3px rgba(234, 16, 89, 1);
    -moz-box-shadow: -1px -1px 14px 3px rgba(234, 16, 89, 1);
    box-shadow: -1px -1px 14px 3px rgba(234, 16, 89, 1);
    -webkit-z-index: 3;
    -moz-z-index: 3;
    -ms-z-index: 3;
    -o-z-index: 3;
    z-index: 3;
  }
  .contact__buttonalt {
    cursor: pointer;
    padding: 0.618em;
    border-radius: 0.618em;
    border: 8px #f06c98 solid;
    -webkit-box-shadow: -1px -1px 14px 3px rgba(234, 16, 89, 1) inset;
    -moz-box-shadow: -1px -1px 14px 3px rgba(234, 16, 89, 1) inset;
    box-shadow: -1px -1px 14px 3px rgba(234, 16, 89, 1) inset;
    letter-spacing: 0.15em;
    font: 4.618em "Fredoka One", "PT Mono", sans-serif;
    color: #f06c98;
    text-shadow: 0 5px 30px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ea1059,
      0 0 0.1em #ea1059, 0 10px 3px #000;
    transition: border 1s, color 1.5s;
    z-index: 3;
  }
  .contact__buttonalt:hover {
    cursor: pointer;
    border: 8px #fbd0eb solid;
    -webkit-box-shadow: -1px -1px 14px 3px rgba(234, 16, 89, 1) inset;
    -moz-box-shadow: -1px -1px 14px 3px rgba(234, 16, 89, 1) inset;
    box-shadow: -1px -1px 14px 3px rgba(234, 16, 89, 1) inset;
    letter-spacing: 0.15em;
    font: 4.618em "Fredoka One", "PT Mono", sans-serif;
    color: #fbd0eb;
    text-shadow: 0 5px 30px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ea1059,
      0 0 0.1em #ea1059, 0 10px 3px #000;
  }
  .palms {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  @media only screen and (max-width: 800px) {
    /* .first__palm {
      right:5vw;
      width: 33%;
    } */
  }
  .palms__left {
    padding-right: 5vw;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  .palms__right {
    padding-right: 5vw;
  }
  a {
    text-decoration: none;
    cursor:pointer;
  }
</style>

<div class="bloc">
  <div class="title">
    <div class="title__txt">
      <b>
        <span>A</span>
        <span class="blink">B</span>
        <span>O</span>
        <span>U</span>
        <!-- <span class="blinkless">T</span> -->
        <span>T</span>
      </b>
    </div>
  </div>

  <div class="content">
    <p>
      I've worked many years as a UX/UI designer in startups and big companies.
      I taught it too. I've done everything from user research to
      front-end development, as the sole designer or in a team. I'm at my best
      in interaction design but I love everybit of the process and can only rest once I know the experience will be enjoyable for the user.
    </p>
    <p>
      You want to do an app? A platform ? A dashboard ? I can help you, take
      your idea and make it into what it should be.
    </p>
    
  </div>

  <div class="contact">
  <a href="mailto:adamanska@gmail.com?Subject=Hello">
    <div class="contact__button">
      <div class="contact__buttonalt">CO<span class="blinklittle">N</span>TACT</div>
    </div>
    </a>
  </div>

  <div class="palms">
    <img class="palms__left" src="../../palm.png" alt="palm tree" />
    <img class="palms__right" src="../../palm.png" alt="palm tree" />
  </div>
</div>
