export const Hello = {
    template: `
        <p> 
            State Counter pada Hello
            {{ counter ++ }}    
        </p>
        
    `,
    computed: {
        counter() {
            return this.$store.state.counter
        }
    }
}