var app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true,
  },
  // mountedはインスタンスにDOM要素が紐づいた時に呼ばれます。
  mounted: function(){
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error){
      this.hasError = true
    }.bind(this))
    .finally(function(){
      this.loading = false
    }.bind(this))
  },
  // https://jp.vuejs.org/v2/guide/filters.html
  filters: {
    currencyDecimal(value){
      return value.toFixed(2)
    }
  }
});
