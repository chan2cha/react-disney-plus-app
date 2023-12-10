const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    id:"",
    email:"",
    photoURL:"",
    displayName:""
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state, action) =>{
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.photoURL = action.payload.photo;
            state.displayName = action.payload.displayName;
        },
        removeUser: (state) =>{
            state.id = null;
            state.email = null;
            state.photoURL = null;
            state.displayName = null;
        }
    }
})
export const {setUser, removeUser}  = userSlice.actions;
export default userSlice.reducer;