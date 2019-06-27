<script>
  let adjective = "cool";
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=PT+Mono|PT+Sans|PT+Sans+Narrow|Permanent+Marker&display=swap");

  .bloc {
    background-image: linear-gradient(#260325, #432b57);
    min-height: 100vh;
    padding: 30px 60px;
  }

  .title__txt b {
    font: 4.618em "PT Mono", sans-serif;
    color: #ea1059;
    text-shadow: 0 5px 30px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ea1059,
      0 0 0.1em #ea1059, 0 10px 3px #000;
  }
  .title__txt b span {
    animation: blink linear infinite 2s;
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
</style>

5
<div class="bloc">
  <div class="title">
    <div class="title__txt">
      <b>
        A
        <span>B</span>
        OU
        <span>T</span>
      </b>
    </div>
  </div>
</div>
