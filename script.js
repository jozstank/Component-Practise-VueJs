import Header from "./Header.js";
import Footer from "./Footer.js";

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      name: "aung",
    };
  },

  components: {
    "header-component": Header,
    "footer-component": Footer,
  },
  methods: {
    log() {
      console.log(this.$refs);
    },
  },
});

app.mount("#app");
