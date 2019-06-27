<script>
  import Mid from './Mid.svelte';
  import Bottom from './Bottom.svelte';
  import sunsvg from './sunsvg.svelte';

  let sun = '../../sun.png';
  let palm = '../../palm.png';
</script>

<!-- =========== S T Y L E ========== -->
<style>
	@import url('https://fonts.googleapis.com/css?family=PT+Mono|PT+Sans|PT+Sans+Narrow|Permanent+Marker&display=swap');
  
  .theapp {
		font-family: 'PT Mono', Calibri, sans-serif;
  }
  
	.bloc {
		min-height: 100vh;
		padding: 30px 60px;
		position: relative;
	}
	.first {
		background-image: linear-gradient(#160E18, #530250);
  }
  .sunContainer {
    position: absolute;
		left: 27vw;
		top: 20vh;
		width: 46vw;
    height: 46vh; 
  }
  @media only screen and (max-width: 800px) {
    .sunContainer {
      left: 17vw;
      top: 15vh;
      width: 66vw;
      height: 66vh;
    }
  }
  .sun {
    /* background-size: 20vh 20vw; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .first__palm {
    position: absolute;
    bottom: 0;
    right:5vw;
  }
  @media only screen and (max-width: 800px) {
    .first__palm {
      right:5vw;
      width: 33%;
    }
  }
  .palm_left {
    left: 5vw;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  
	.menu {
		display: flex;
    justify-content: flex-end;
    font-family: 'Permanent Marker', sans-serif;
	}
	.menu__text  {
    margin-left: 20px;
    color: #EA1059;
    font-size: 1.306em;
    text-decoration: none;
	}

	.intro {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20vw;
  }
  @media only screen and (max-width: 800px) {
    .intro {
      margin-top: 15vh;
    }
  }
	.intro__container {
		min-width: 330px;
		max-width: 800px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 9;
  }
  /* ==== H E L L O ====== */
	.intro__text {
    color: #EA1059;
    position: relative;
    font-family: 'Permanent Marker', sans-serif;
    font-size: 6.854em;
    padding: 0;
    margin: 0;
    text-shadow: 3px 3px #371D39;
  }
  .main-text {
    position: relative;
    display: inline-block;
    opacity: .7;
  }
  .back-text {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    opacity: .3;
    display: inline-block;
  }
  
  .skew {
    animation: skew 0.95s infinite alternate;
  }

  .glitch {
    animation: glitch 0.8s infinite alternate;
  }

  @keyframes skew {
    0% {
      transform: skew(0deg);
    }
    20% {
      transform: skew(0deg);
      opacity:1;
    }
    24% {
      transform: skew(-2deg);
      opacity:.5;
    }
    25% {
      transform: skew(0deg);
      opacity:1;
    }
    70% {
      transform: skew(0deg);
    }
    74%{
      transform: skew(2deg);
    }
    76% {
      transform: skew(0deg);
    }
    100% {
      transform: skew(0deg);
    }
  }

  @keyframes glitch{
    0% {
      transform: translate3d(0, 0, 0);
    }
    20% {
      transform: translate3d(0, 0, 0);
    }
    24% {
      transform: translate3d(3px, 4px, 0);
    }
    26% {
      transform: translate3d(0, 0, 0);
    }
    60% {
      transform: translate3d(0, 0, 0);
      opacity:1;
    }
    64%{
      transform: translate3d(-3px, -2px, 0);
      opacity:.3;
    }
    66% {
      transform: translate3d(0, 0, 0);
      opacity:1;
    }
    70% {
      transform: translate3d(0, 0, 0);
    }
    74%{
      transform: translate3d(1px, -1px, 0);
    }
    76% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  .intro__subtext {
    padding: 20px;
    background-color: rgba(31,12,32,0.8);
    color: #fff;
    max-width: 30vw;
  }
  .intro__subtext__txt {
    font-size: 1.3em;
    margin: 0;
    text-align: center;
  }
</style>

<!-- =========== H T M L ========== -->

<div class="theapp">

  <div class="bloc first">
    <div class="menu">
      <a href=".work" class='menu__text'>Work</a>
      <a href=".about" class='menu__text'>About</a>
      <a href=".contact" class='menu__text'>Contact</a>
    </div>

    <div class="sunContainer">
      <img class="sun" src={sun} alt="setting sun"/>
    </div>

    <img class='first__palm' alt='palm tree' src={palm}/>
    <img class='first__palm palm_left' alt='palm tree' src={palm}/>
    
    <div class="intro">
      <div class="intro__container">
        <h3 class="intro__text" data-text='Hello'>
          <span class="main-text skew">Hello</span>  
          <span class="back-text glitch">Hello</span>  
        </h3>
        <!-- transition:fade -->
        <div class="intro__subtext">
          <h5 class="intro__subtext__txt">
            I'm a UX/UI designer & front-end developer based in Switzerland.  
          </h5>
          <!-- <p class="whisper">(I design app or website and code them)</p> -->
        </div>
      </div>	
    </div>

  </div>

  <Mid />
  <Bottom />

</div>
