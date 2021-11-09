export default{
    data(){
        return{
            breadList:[]
        }
    },
    methods:{
        getBreadCrumb(){
            this.breadList=this.$route.meta.bread||[]
        }
    },
    created(){
        this.getBreadCrumb()
    }
}