<template>
  <div id="app">
    <div class="container">
    <div class="row">
      <div class="col-md-7">
        <div class="row justify-content-center">
          <div :key=product.id class="col-md-6" v-for="product in products">
            <product :isInCart="isInCart(product)" @add-to-cart="addToCart" :product="product" :image="product.image"></product>
          </div>
        </div>
      </div>
      <div class="col-md-5 my-5">
          <cart @pay="pay($event)" @remove-from-cart="removeFromCart($event)" :items="cart"></cart>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import cart from '@/components/Cart.vue'
import product from '@/components/Product.vue'
import products from '@/components/products.json'
export default {
  name: 'App',
  components : {
    product,
    cart
  },
  data(){
    return { 
      products,
      cart : []
      }
  },
  methods: {
    addToCart(product){
      console.log(product)
      this.cart.push(product)
    },
    isInCart(product){
      const item = this.cart.find(item => item.id == product.id)
      if(item){
        return true
      }
    },
    removeFromCart(product){
      this.cart = this.cart.filter(item => item.id !== product.id)
    },
    pay(total){
      console.log(total)
    }
  }

}
</script>
