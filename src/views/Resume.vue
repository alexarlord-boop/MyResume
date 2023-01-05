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
        <CardInfo v-for="card in cardsStackFront">{{ card.innerText }}</CardInfo>
      </div>

      <div class="cards-group">
        <CardInfo v-for="card in cardsStackBack">{{ card.innerText }}</CardInfo>
      </div>

      <ResumeLinks></ResumeLinks>

    </div>
  </div>
</template>

<script>
//TODO: -refactor mobile version via @media
import CardInfo from "@/components/CardInfo.vue";
import IconGit from "@/components/icons/IconGit.vue";
import IconVK from "@/components/icons/IconVK.vue";
import IconLNKD from "@/components/icons/IconLNKD.vue";
import ResumeLinks from "@/components/ResumeLinks.vue";

export default {
  name: "Resume",
  components: {
    ResumeLinks,
    CardInfo,
    IconGit,
    IconVK,
    IconLNKD
  },
  data() {
    return {
      pl: 0,
      percentage: 0,
      cardsAbout: [{innerText: "I am an IT student, seeking for improvement in computer science field."},
        {innerText: "I am passionate about software development and making products look AMAZING!"},
        {innerText: "I've been working as a full-stack developer for 1.5 years!"},
      ],
      cardsStackFront: [{innerText: 'Git'}, {innerText: 'JavaScript'}, {innerText: 'CSS3/HTML5'},
        {innerText: 'Figma'}, {innerText: 'Vue.js'}, {innerText: 'Node.js'}],

      cardsStackBack: [{innerText: 'Java Spring Boot'}, {innerText: 'MS SQL Server'}, {innerText: 'PostgreSQL'}, {innerText: 'Java'}, {innerText: 'Python'}]
    }
  },
  watch: {
    percentage() {
      let scrollPerc = this.percentage;
      this.LineDrawer(scrollPerc);
      this.MoveTitleParallax(scrollPerc);
      this.ChangeTitleText(scrollPerc);
    }
  },
  methods: {

    UpdateScrolledPercentage() {
      let h = document.documentElement,
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
      this.percentage = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
      console.log(this.percentage);
    },
    LineDrawer(percentage) {
      document.getElementById('line').style.strokeDashoffset = String(this.pl - (this.pl * percentage));
    },
    MoveTitleParallax(percentage) {
      document.getElementById('title').style.top = String(percentage * 70) + "%";
    },
    ChangeTitleText(percentage) {
      if (percentage <= 0.33) {
        document.getElementById('title').innerText = 'About';
      }
      if (percentage > 0.33 && percentage <= 0.86) {
        document.getElementById('title').innerText = 'Stack';
      }
      if (percentage > 0.86) {
        document.getElementById('title').innerText = 'Links';
      }
    },
    MoveBackground() {
      this.UpdateScrolledPercentage();
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

<style scoped lang="scss">


.cards-wrap {
  height: 240vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.cards-group {
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
  top: 0;
  line-height: 150px;
  font-size: 18em;
  opacity: 0.2;
  font-family: "JetBrains Mono Light", monospace;
}

@media screen and (min-width: 601px) {
  svg {
    transform: scale(1.3);
    top: -20px;
  }

  .title-parallax {
    left: 30px;
  }
}

@media screen and (min-width: 325px) and (max-width: 600px) {
  .cards-wrap {
    height: 200vh;
  }

  .title-parallax {
    font-size: 10em;
  }

  svg {
    transform: scale(5);
    top: 300px;
  }
}
</style>