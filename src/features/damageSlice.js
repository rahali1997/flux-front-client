import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {addDamageService,getAllDamageService,deleteLesionService} from "./damageService"



const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  data:[],
  message: "",
};

// add damage
export const addDamageSlice = createAsyncThunk("damage/add", async (userdata, thunkAPI) => {
  try {
    return await addDamageService(userdata) 
  } catch (error) {
    const message =error.response.data
    return thunkAPI.rejectWithValue(message);
  }
});

// get All damages
export const getAllDamageSlice = createAsyncThunk("damage/get", async (thunkAPI) => {
    try {
      return await getAllDamageService() 
    } catch (error) {
      const message =error.response.data
      return thunkAPI.rejectWithValue(message);
    }
  });

  // delete damage
export const deleteDamageSlice = createAsyncThunk("damage/delete", async (id,thunkAPI) => {
    try {
      return await deleteLesionService(id) 
    } catch (error) {
      const message =error.response.data
      return thunkAPI.rejectWithValue(message);
    }
  });
  
  



 export const DamageSlice = createSlice({
  name: 'damage',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addDamageSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDamageSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addDamageSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
       
      })
      .addCase(getAllDamageSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllDamageSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data=action.payload
      })
      .addCase(getAllDamageSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
       
      })
  },
});


export default DamageSlice.reducer