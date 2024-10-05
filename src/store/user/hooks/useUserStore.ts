import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../user.slice";
import * as Slice from "../user.slice";
import { useCallback } from "react";
import { SetUserReducerAction } from "../user.types";

export const useUserStore = () => {
  const dispatch = useDispatch();

  const userData = useSelector(userSelector);

  const setUser = useCallback(
    ({ field, value }: SetUserReducerAction) =>
      dispatch(Slice.setUser({ field, value })),
    [dispatch]
  );

  const resetUser = useCallback(() => {
    dispatch(Slice.resetUser());
  }, [dispatch]);

  return {
    userData,
    resetUser,
    setUser,
  };
};
