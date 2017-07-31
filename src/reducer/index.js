import * as types from '../constants/counter.const'
const counter = (state=0,action)=>{
    switch(action.type){
        case types.INCREMENT:
            return state+1
        case types.DECREMENT:
            return state -1
        default:
            return state
    }
}

export default counter