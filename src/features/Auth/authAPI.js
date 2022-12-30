import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axiosSetup";
import { BASE_URL } from "../../constant";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`${BASE_URL}/auth/signin`, { username, password });
      console.log(res,"Response")
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || error.msg);
    }
  }
);

export const loginUserOtp = createAsyncThunk(
  "auth/loginUserOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/auth/login", { email });

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || error.msg);
    }
  }
);
