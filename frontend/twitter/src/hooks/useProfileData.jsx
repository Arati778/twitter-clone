import axios from "axios";
import { useEffect } from "react";
import { USER_API_END_POINT } from "../utils/constant";

const useProfileData = async (id) => {
  useEffect(() => {
    try {
      const res = axios.get(`${USER_API_END_POINT}/profile/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default useProfileData;
