const app = Vue.createApp({
  data() {
    return {
      number: 0,
      result: 37,
    };
  },
  methods: {
    addNum(value) {
      this.number += value;
    },
  },
  computed: {
    sumUp() {
      if (this.number < this.result) {
        return "Not there yet";
      } else if (this.number > this.result) {
        return "Too much!";
      } else {
        return this.number;
      }
    },
  },
  watch: {
    sumUp() {
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
