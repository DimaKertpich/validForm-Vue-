import DvInput from './componentA';

export default{

    components: {
        'dv-input' : DvInput
    },

    data: function(){
        return{
            info: [
                {
                    name: 'Name',
                    value: '',
                    pattern: /^[a-zA-Z]{2,30}$/,
                    progress: false
                },
                {
                    name: 'Phone',
                    value: '',
                    pattern: /^[0-9]{7,14}$/,
                    progress: false
                },
                {
                    name: 'Email',
                    value: '',
                    pattern: /.+/,
                    progress: false
                },
                {
                    name: 'Some field 1',
                    value: '',
                    pattern: /.+/,
                    progress: false
                },
                {
                    name: 'Some field 2',
                    value: '',
                    pattern: /.+/,
                    progress: false
                }
            ],
            processWidth: 0,
            sendData: false
        }
    },

    methods: {

        validData(index , data){
            this.info[index].value = data.value;
            this.info[index].progress = data.valid;

            let done = 0;

            for(let i = 0; i < this.info.length; i++){
                if(this.info[i].progress){
                    done++;
                }
            }

            this.processWidth = done;
        }
    },

    computed: {

        widthProgressBar(){
            return {
                width: (this.processWidth / this.info.length) * 100 + '%'
            }
        }
    }
}