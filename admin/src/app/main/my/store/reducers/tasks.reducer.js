import * as Actions from '../actions'

const initialState = {
    tasks:[],
    myTask:-1,
}
const tasksReducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case Actions.GET_TASK:
            {
                return {
                    ...state,
                    tasks:action.data.taskTypes,
                    myTask:action.data.myTask
                }
            }
        case Actions.SET_NOWTASK:
            {
                console.log(action.data)
                return{
                    ...state,
                    myTask:action.data
                }
            }
            default:
                return state
    }
}
export default tasksReducer