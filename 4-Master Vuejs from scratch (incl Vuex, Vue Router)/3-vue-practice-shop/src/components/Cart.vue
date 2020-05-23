<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in items" :key="item.id">
               {{ item.title }} - {{ item.price }}
                <button @click="$emit('remove-from-cart',item)" class="btn btn-danger float-right">Remove From Cart</button>
            </li>
        </ul>
        <div class="card p-3 my-5">
            <h4 class="text-center">${{total}}</h4>
            <button :disabled="items.length ===0 " class="btn btn-primary" @click="$emit('pay',total)">Pay Now</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['items'],
    computed : {
        total(){
            return  this.items.reduce((acc, item ) => acc + Number(item.price),0)
        }
    }
}
</script>