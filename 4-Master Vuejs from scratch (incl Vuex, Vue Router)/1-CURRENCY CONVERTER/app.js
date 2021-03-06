new Vue({
    el : '#app',
    data:{
      currencies : {},
      amount : 0,
      from : '',
      to : '',
      results : '',
      isLoading : false

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
        },
        convertCurrencies(){
          this.isLoading = true
          let key = `${this.from}_${this.to}`
          axios.get(`https://free.currconv.com/api/v7/convert?q=${key}&compact=ultra&apiKey=9c6cc03295bc52d9741e`).then((response)=>{
            this.isLoading = false
            console.log(response.data)
            console.log(key)
            this.results = response.data[key]
          })
        },
        disabled(){
          return this.amount === 0 || !this.amount || this.isLoading
        },
        calculateResult(){
          return (Number(this.amount) * this.results).toFixed(3)
        }
    },
    watch: {
      from(){
        this.results =0
      },
      to(){
        this.results =0
      }
    },
})