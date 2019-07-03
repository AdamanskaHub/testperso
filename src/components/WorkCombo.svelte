
<script>
  import Modal from './Modal.svelte';
  let showModal = false;
  export let image, txtshort, txtlong, modaltitle, modaltxt, bigimagealt, bigimage, cssss;
</script>
    <div class="second__port">
      <p class="second__port__txt" >{txtshort}</p>
      <p class="second__port__txt no-margin "  >{txtlong}</p>
      <div on:click='{() => showModal = true}' class="img-wrapper" >
        <img src={image} alt="drinkotech" class="second__port__img" />
    </div>
      
    </div>

    <!-- M O D A L -->
    {#if showModal}
      <Modal on:close="{() => showModal = false}">
        <h2 slot="header" style='padding-left:20px;'>
          {modaltitle}
          <small>{modaltxt}</small>
        </h2>

        <img alt={bigimagealt} src={bigimage} class="modal-img">
      </Modal>
    {/if}


<!-- ===== S T Y L E ====== -->
<style>
  @import url('https://fonts.googleapis.com/css?family=PT+Mono|PT+Sans|PT+Sans+Narrow|Permanent+Marker&display=swap');
  
  
  .modal-img {
    max-height: 100%;
    max-width: 100%;
  }
  .img-wrapper {
    max-height: 20vw;
    cursor: pointer;
    overflow-y: hidden;
    overflow-x: hidden;
    display: flex;
    margin-bottom: 4.618em;
    margin-top: 1em;
    -webkit-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.4);
    box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.4);
    transition: .5s;
  }
  @media  only screen and (max-width: 800px){
    .img-wrapper{
      max-height: 40vw;
      margin-bottom: 2.618em;
    }
  }
  .second__port__img {
    max-width: 100%;
    align-self: baseline;
    z-index: 45;
  }
  .second__port__txt {
    margin: 0;
    padding-top: 6.618em;
  }
  @media  only screen and (max-width: 800px){
    .second__port__txt{
      padding-top: 2.618em;
    }
  }
  .no-margin {
    margin-top: 10px;
    padding-top: 0;
  }

</style>
