Vue.component('card', {
        props : ['title','content'],
        data(){
            return{
                claps : 0
            }
        },
        template: `
        <div class="card">
        <div class="card-body">
            <h3 class="card-title">{{ title }} </h3>
            <div class="card-text">
                {{content}}
            </div>
            <div class="text-center text-muted display-4">{{claps}} </div>
            <button @click="deleteArticle" class="btn btn-danger">Delete</button>
            <button @click="clapForArticle" class="btn btn-info">Clap</button>
        </div>
        </div>`,
        methods: {
            deleteArticle(){
                console.log('delete from component')
                this.$emit('delete-article', this.title)
            },
            clapForArticle(){
                this.claps++
            }
        },

    }

)

new Vue({
    el: '#app',
    data: {
        articles : [{
            title : "Vue is Reactive Framwork",
            content : 'aaaaaaaaaaaaaaaaaaaaa'
        },
        {
         title : "Vue is Reactive Framwork 2",
         content : 'aaaaaaaaaaaaaaaaaaaaa'
        },
        {
         title : "Vue is Reactive Framwork 3",
         content : 'aaaaaaaaaaaaaaaaaaaaa'
        },
        {
         title : "Vue is Reactive Framwork 4",
         content : 'aaaaaaaaaaaaaaaaaaaaa'
        }
     ]
     },
    methods: {
        removeArticle(event){
            console.log(event)
            console.log('Delete Is Process')
            this.articles = this.articles.filter( article => article.title !== event)
        }
    },

})