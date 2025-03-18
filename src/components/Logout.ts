import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

export const Logout = () => {
  const dispatch = useDispatch();

  //   setShowMenu(false);
  dispatch(removeUser());
};
