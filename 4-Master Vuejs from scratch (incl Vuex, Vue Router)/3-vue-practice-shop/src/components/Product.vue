<template>
    <div class="card my-5">
        <div class="card-body">
          <img class="card-img-top rounded-lg" v-bind:src="image" alt="Card image cap">
          
          <h5 class="text-center text-muted card-text  card-title">{{product.title}}</h5>
          <p class="text-center text-muted display-4">{{Number(product.price).toFixed()}}</p>
          <button :disabled="isInCart" @click="$emit('add-to-cart',product)" class="btn btn-primary form-control">
              {{isInCart ? 'Added To Cart' : 'Add To Cart'}}
          </button>
        </div>
    </div>
</template>
<script>

export default {
  name: 'product',
  props:['product','image','isInCart'],
}
</script>
