import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        likes: likes
    }
})


export default store;