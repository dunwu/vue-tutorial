var vm = new Vue({
  el: '#app',
  data: {
    numbers: [1, 2, 3, 4, 5]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})
