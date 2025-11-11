const products=[]
const Reducers=(state={products},Action)=>{
    switch(Action.type){
        case 'success':
            return{products:Action.payload}
        case 'fail':
            return{products:Action.payload}
        default:
            return state
    }
}
export default Reducers