import { configureStore } from '@reduxjs/toolkit'
import user from '../redux/Slices/userSlice'
export const store = configureStore({
    reducer: {
        user,
    },
})