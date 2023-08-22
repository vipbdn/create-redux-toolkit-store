import {configureStore, createSlice} from '@reduxjs/toolkit'
let initialState = 0

const counterSlicer = createSlice({
    name:'counter',
    initialState,
    reducers:{
        inc: (state, action)=>{
            return state + 1
        },
        dec: (state, action)=>{
            return state - 1
        },
        res: (state, action)=>{
            return state = 0
        },
        addPalyLoad: (state, action)=>{
            return state +action.payload
        },
        removePayLoad: (state, action)=>{
            return state - action.payload
        }

    }
})

export const store = configureStore({
    reducer: counterSlicer.reducer
})


export const {inc, dec, res,addPalyLoad,removePayLoad} = counterSlicer.actions




























// import {configureStore, createSlice} from '@reduxjs/toolkit'

// let initialState = 0

// let counterSlicer = createSlice({
//     name:'counter',
//     initialState,
//     reducers:{
//         add: (state, action)=>{
//             return state + 2
//         },
//         inc: (state, action)=>{
//             return state + action.payload;
//         },
//         red: (state, action)=>{
//             return state - action.payload
//         }
//     }

// })


// export const {add, inc, red}  = counterSlicer.actions



// export const store = configureStore({
//     reducer: counterSlicer.reducer
// })

