import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getAllClientService,deleteClientService,addClientService} from "./ClientService"



const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  data:[],
  message: "",
};

// add client
export const addClientSlice = createAsyncThunk("client/add", async (userdata, thunkAPI) => {
  try {
    return await addClientService(userdata) 
  } catch (error) {
    const message =error.response.data
    return thunkAPI.rejectWithValue(message);
  }
});

// get All clients
export const getAllClientSlice = createAsyncThunk("client/get", async (thunkAPI) => {

    try {
    
      let result=await getAllClientService()
      return result
    } catch (error) {
      const message =error.response.data
      return thunkAPI.rejectWithValue(message);
    }
  });

  // delete damage
export const deleteClientSlice = createAsyncThunk("damage/delete", async (id,thunkAPI) => {
    try {
      return await deleteClientService(id) 
    } catch (error) {
      const message =error.response.data
      return thunkAPI.rejectWithValue(message);
    }
  });
  
  



 export const ClientSlice = createSlice({
  name: 'client',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addClientSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addClientSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addClientSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
       
      })
      .addCase(getAllClientSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllClientSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data=action.payload
      })
      .addCase(getAllClientSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
       
      })
  },
});


export default ClientSlice.reducer