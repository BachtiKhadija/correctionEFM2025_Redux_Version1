import {createSlice} from '@reduxjs/toolkit';   
import movies   from '../data/movies';
const initialState = {
    movies: movies,
    favoris: []
};  

const movieSlice = createSlice({
    name: 'movies',
    initialState:initialState,
    reducers: {
        addToFavoris: (state, action) => {
            state.favoris.push(action.payload); 
            state.movies=state.movies.map(movie=>movie.id===action.payload.id?{...movie,inFavoris:true}:movie);
        },
        removeFromFavoris: (state, action) => { 
            state.favoris=state.favoris.filter(movie =>movie.id!==action.payload);
            state.movies=state.movies.map(movie=>movie.id===action.payload?{...movie,inFavoris:false}:movie);
        },
        clearFavoris: (state) => {  
            state.favoris=[];
            state.movies=state.movies.map(movie=>({...movie,inFavoris:false}));

        },
    }
});

export const{addToFavoris, removeFromFavoris, clearFavoris }=movieSlice.actions;
export default movieSlice.reducer;

