import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
export const store = configureStore({
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        thunk: true
    })
})

export default store