<template>
  <div>
    <div class="line-container">
      <svg viewBox="0 0 143 176" fill="none" preserveAspectRatio="xMidYMax meet">
        <path id="line"
              d="M4 7.50008C25.3333 22.0001 156.217 69.4115 145 18.0001C133 -37 23 119.5 19.5 75.5001C16.7 40.3001 96.6667 87.1667 133 115C162 3.00008 -9 123.5 31 147.5C50.3333 166.167 89.1 192.3 89.5 147.5C89.9 102.7 68 112.167 57 122.5L13 164.5"
              stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.9" stroke="#ffd700" stroke-width="11"/>
      </svg>
    </div>

    <div class="cards-wrap">

      <div id="title" class="title-parallax">About</div>
      <CardInfo v-for="(card, index) in cardsAbout" :card-id="'card'+index">{{ card.innerText }}</CardInfo>

      <div class="cards-group">
        <CardInfo v-for="card in cardsStack">{{ card.innerText }}</CardInfo>
      </div>

      <div class="cards-group">
        <CardInfo v-for="card in cardsLink"><a :href="card.lnk">{{ card.innerText }}</a></CardInfo>
      </div>
    </div>
  </div>
</template>

<script>
//TODO: -scroll functions optimisation
//TODO: -refactor mobile version via @media
import CardInfo from "@/components/CardInfo.vue";

export default {
  name: "Resume",
  components: {
    CardInfo
  },
  data() {
    return {
      pl: 0,
      cardsAbout: [{innerText: "I am an IT student, seeking for improvement in computer science field."},
        {innerText: "I am passionate about software development and making product looks AMAZING!"},
        {innerText: "I've worked as a full-stack developer for 1.5 years!"},
      ],
      cardsStack: [{innerText: 'git'}, {innerText: 'Java Spring'}, {innerText: 'MS SQL'},
        {innerText: 'PostgreSQL'}, {innerText: 'JavaScript'}, {innerText: 'CSS/HTML'},
        {innerText: 'Vue.js'}, {innerText: 'Node.js'},
        {innerText: 'Python'}, {innerText: 'Linux'}],
      cardsLink: [{innerText: 'github', lnk: 'https://github.com/alexarlord-boop/alexarlord-boop/blob/main/README.md'},
        {innerText: 'VK', lnk: ''}],
    }
  },
  methods: {
    GetScrolledPercentage() {
      let h = document.documentElement,
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
      return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
    },
    LineDrawer(percentage) {
      document.getElementById('line').style.strokeDashoffset = String(this.pl - (this.pl * percentage));
    },
    MoveTitleParallax(percentage) {
      document.getElementById('title').style.top = String(30 + percentage * 400) + "px";
    },
    ChangeTitleText(percentage) {
      if (percentage <= 0.43) {
        document.getElementById('title').innerText = 'About';
      }
      if (percentage > 0.43 && percentage <= 0.80) {
        document.getElementById('title').innerText = 'Stack';
      }
      if (percentage > 0.80) {
        document.getElementById('title').innerText = 'Links';
      }
    },
    MoveBackground() {
      let scrollPerc = this.GetScrolledPercentage();
      this.LineDrawer(scrollPerc);
      this.MoveTitleParallax(scrollPerc);
      this.ChangeTitleText(scrollPerc);
    }
  },
  mounted() {
    console.log('mounted');
    // setting values to draw an svg pattern
    let line = document.getElementById('line');
    this.pl = line.getTotalLength();
    line.style.strokeDasharray = this.pl;
    line.style.strokeDashoffset = this.pl;

    document.addEventListener('scroll', this.MoveBackground);
  },
  unmounted() {
    document.removeEventListener('scroll', this.MoveBackground);
  }
}
</script>

<style scoped>
.cards-wrap {
  height: 240vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.cards-group {
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

.line-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
}

svg {
  display: inline-block;
}

.title-parallax {
  position: fixed;
  top: 30px;

  font-size: 7em;
  opacity: 0.3;
  font-family: "JetBrains Mono Light", monospace;
}

@media screen and (min-width: 601px) {
  svg {
    transform: scale(1.3);
    top: -20px;
  }
}

@media screen and (min-width: 325px) and (max-width: 600px) {
  .cards-wrap {
    height: 200vh;
  }

  .cards-group {
    max-width: 15em;
  }



  svg {
    transform: scale(5);
    top: 300px;
  }
}
</style>