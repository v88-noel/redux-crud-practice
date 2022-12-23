import { createSlice } from "@reduxjs/toolkit";
import user_data from "../assets/data/data.json";

export const userSlice = createSlice({
    name:"users",
    initialState:{
        value: user_data
    },
    reducers:{
        addUser:(state, action)=>{
            let id = state.value.length;
            let name = action.payload.name;
            let username = action.payload.username;
            let avatar = action.payload.avatar;
            state.value.push({id:id, fullname:name, username: username, avatar: avatar});
        },
        deleteUser:(state, action) =>{
            for(let user_index=0; user_index<state.value.length; user_data++){
                if(action.payload.id == state.value[user_index]){
                    delete state.value.id[action.payload.id];
                }
            }
        },
        editUser:(state, action) => { 
            let id = action.payload.id;  
            let name = action.payload.name;
            let username = action.payload.username;

            for(let user_index=0; user_index<state.value.length; user_data++){
                if(id == state.value[user_index]){
                    state.value.name = name;
                    state.value.username = username;
                }
            }
        }

    }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;