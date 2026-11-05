import movieReducer from './movieSlice';
import { configureStore } from '@reduxjs/toolkit';  

const store=configureStore({
    reducer: {

        movies:movieReducer,
    }
})
export default store;


/*
state={
    movies:{
    
    movies:[...],
    favoris:[...]   }
}









*/