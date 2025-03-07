import axios from "axios";
import { BaseUrl } from "../config"; // Adjust path if needed

export const signinService = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${BaseUrl}/user/login`, { email, password });
    return res.data;
  } catch (err: any) {
    return err.response?.data;
  }
};

export const signupService = async(name: string, email: string, password: string, phone?: number) => {
  try {
    const res = await axios.post(`${BaseUrl}/user/signup`, {
      name,
      email,
      password,
      phone,
    })
    return res.data;
  } catch (err: any) {
    return err.response?.data
  }
}
