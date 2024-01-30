import { useState } from "react";
import axios from "axios";
import { Credentials } from "./components/forms/LoginForm";
import { useAppDispatch } from "@/lib/hooks/redux";
import { loginFailed, loginSuccess } from "@/lib/redux/features/auth/authSlice";
import { navigateHome } from "./actions";

export const useLogic = () => {
  const dispatch = useAppDispatch();

  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const handleChange = (key: keyof Credentials, value: string) => {
    setCredentials((prev) => ({ ...prev, [key]: value }));
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        ...credentials,
        sentPassword: credentials.password,
      });

      const data = response.data;

      dispatch(loginSuccess(data));

      navigateHome();
    } catch (error) {
      dispatch(loginFailed(error));
    }
  };

  return {
    login,
    handleChange,
  };
};
