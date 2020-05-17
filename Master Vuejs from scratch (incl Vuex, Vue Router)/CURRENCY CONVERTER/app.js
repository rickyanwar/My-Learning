new Vue({
    el : '#app',
    data:{
      currencies : {},
      amount : '',
      from : '',
      to : ''

    },
    mounted() {
      this.getCurrencies()
    },
    computed: {
      formattedCurrencies(){
        return Object.values(this.currencies)
      }
    },
    methods: {
        getCurrencies(){
            axios.get('https://free.currconv.com/api/v7/currencies?apiKey=9c6cc03295bc52d9741e').then((Response)=>{
                console.log(Response.data.results)
                this.currencies = Response.data.results
            })
        }
    },
})