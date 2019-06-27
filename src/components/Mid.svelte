
<script>
  import Modal from './Modal.svelte';
  let showModal = false;
  import WorkCombo from './WorkCombo.svelte';
</script>

<div class="bloc second">
  <div class="stars"></div>
  <div class="over-stars">
    <h5 class='second__title'>WORK</h5>
    <p class="whisper">Almost everything I do has a NDA (non-disclosure agreement), but here are some projects.</p>



    <!-- D R I N K O-->
    <WorkCombo 
      image={'../../drinko-min.png'}
      txtshort={"Front-end, design concept to final design."}
      txtlong={'A challenging project dashboard for bar manager, personel and suppliers.'}
      modaltitle={'Drinkotec'}
      modaltxt={'Bar management dashboard'}
      bigimage={'../../drinko-big.png'}
      bigimagealt={'drinkotec image'}
    />

    <!-- Kid-->
    <WorkCombo 
      image={'../../kid.jpg'}
      txtshort={"Front-end, design concept to final design."}
      txtlong={'A mobility analysis dashboard to help companies to see '}
      modaltitle={'Kido dynamics'}
      modaltxt={'Mobility analysis dashboard'}
      bigimage={'../../kid.jpg'}
      bigimagealt={'kido'}
    />

    <!-- U C H E C K-->
    <WorkCombo 
      image={'../../ucheck.png'}
      txtshort={"Front-end, design concept to final design."}
      txtlong={'A social platform to fight fake news. The project won a Google DNI.'}
      modaltitle={'UCheck'}
      modaltxt={'To see more please contact me'}
      bigimage={'../../ucheck.png'}
      bigimagealt={'UCheck'}
    />

    <!-- Kid2-->
    <WorkCombo 
      image={'../../minikid2.png'}
      txtshort={"Front-end, design concept to final design."}
      txtlong={'Kido dynamics website.'}
      modaltitle={'Kido Website'}
      modaltxt={'Kido dynamics website'}
      bigimage={'../../Segments.jpg'}
      bigimagealt={'kido2'}
    />

  </div>  

</div>

<!-- ===== S T Y L E ====== -->
<style>
  @import url('https://fonts.googleapis.com/css?family=PT+Mono|PT+Sans|PT+Sans+Narrow|Permanent+Marker&display=swap');
  .bloc {
		min-height: 100vh;
		padding: 10vh 60px 40vh 60px;
		position: relative;
	}
	.second {
    background-image: radial-gradient(#B7289B,  #5B0060,  #1B1E3F);
    color: rgba(255,255,255,.5);
  }
  .second__title {
    font-family: 'Permanent Marker', sans-serif;
    background: -webkit-linear-gradient(top, rgba(171,246,254,1) 0%, rgba(56,173,253,1) 100%);
    background: -o-linear-gradient(top, rgba(171,246,254,1) 0%, rgba(56,173,253,1) 100%);
    background: -ms-linear-gradient(top, rgba(171,246,254,1) 0%, rgba(56,173,253,1) 100%);
    background: linear-gradient(to bottom, rgba(171,246,254,1) 0%, rgba(56,173,253,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.618em;
    margin: 10vh 0 0 0;
    padding: 0;
  }
  .whisper {
    margin-top: 4.618em;
    color: rgba(255,255,254,.3);
    font-style: italic;
    margin-bottom: 1.618em;
  }

  .stars {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    display:block;
  }

  .stars {
    background: url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
    z-index:0;
    opacity: .2;
  }
  .over-stars {
    z-index: 5000;
  }

</style>
