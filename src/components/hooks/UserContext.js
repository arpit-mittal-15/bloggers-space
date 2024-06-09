import { createContext } from "react";

export const UserContext = createContext({
  id:"",
  bio:"",
  email: "",
  name: "",
  followers:[],
  setUserData: () => {}
})