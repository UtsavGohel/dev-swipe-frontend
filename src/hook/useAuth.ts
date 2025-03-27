import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser, removeUser } from "../store/slices/userSlice";
import { baseUrl } from "../constants/apiEndpoint.const";

const useAuth = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { userData } = useSelector((store: any) => store.user);

  const fetchUser = async () => {
    try {
      if (userData) return;

      const response = await axios.post(
        `${baseUrl}/users/get-profile`,
        {},
        { withCredentials: true }
      );

      if (!response.data) {
        return;
      }

      dispatch(addUser(response.data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.status === 401) {
        return;
      }
      throw new Error(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${baseUrl}/users/logout`,
        {},
        { withCredentials: true }
      );

      if (res.status === 200) {
        dispatch(removeUser());
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return { fetchUser, handleLogout };
};

export default useAuth;
