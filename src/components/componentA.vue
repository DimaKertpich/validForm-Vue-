<template>
   <div>
       <div>{{ name }}
           <span v-if="activeted" :class="validForm"></span>
       </div>
       <input class="form-control" type="text"
              @input="changesValue($event.target.value)">
   </div>
</template>

<script>

    export default{

        data(){
            return{
                activeted: false
            }
        },

        props: ['name', 'value', 'pattern'],

        computed: {

            validForm(){
                return this.pattern.test(this.value) ? 'fas fa-check text-success' : 'fas fa-times text-danger';
            }
        },

        methods: {

            changesValue(data){
                
                this.activeted = true;

                this.$emit('validdata', {
                    value: data,
                    valid: this.pattern.test(data)
                })
            }
        }
        
    }

</script>