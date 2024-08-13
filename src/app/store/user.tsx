import { makeAutoObservable, runInAction } from "mobx";
import User from "../../api/user";
import {UserDataFeeld} from "../types/userType";

export interface User {
    _id: string,
    firstName: string,
    lastName: string,
    email: string;
    
  };
  export interface Image {
    _id: string;
    url: string;
    isCover?: boolean;
  }
  export interface Stock {
    _id: string,
    productName: string;
    price: number;
    weight?: number;
    discription: string;
    image: Image[];
    status: string;
    sellerId: string;
    
  };

  class UserStore {
    user: User | null = null;
    cart: Stock[] | null = null;
    favourite: Stock[] | null = null;

    constructor() {
        makeAutoObservable(this);
      }

      register = async (userData: UserDataFeeld) => {
        try {
          const result = await User.signUp(userData);
          console.log(result);
        } catch (error) {
          throw error;
        }
      };

  }
export default UserStore;