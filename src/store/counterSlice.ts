import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    value:number
}
const initialState:State={
    value:0
}
export const counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        incrementNum:(state,action:PayloadAction<number>)=>{
            state.value +=action.payload
        }

    }
})

export const counterAction=counterSlice.actions
export default counterSlice.reducer