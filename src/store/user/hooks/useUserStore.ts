import { useDispatch, useSelector } from "react-redux";
import { setToken as setTokenAction, userSelector } from "../user.slice";
import { useCallback } from "react";

export const useUserStore = () => {
  const dispatch = useDispatch();

  const setToken = useCallback(
    (token: string) => dispatch(setTokenAction(token)),
    [dispatch]
  );

  const userData = useSelector(userSelector);

  return {
    userData,
    setToken,
  };
};
