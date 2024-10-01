import React, { useCallback } from "react";
import { useGetPosts } from "./services/getPosts/useGetPosts";
import { useDispatch, useSelector } from "react-redux";
import { setToken, userSelector } from "./store/user/userReducer";

function App() {
  const { data, isLoading, refetch } = useGetPosts();

  const status = useSelector(userSelector);
  const dispatch = useDispatch();
  console.log("🚀 ~ App ~ status:", status);

  console.count("count");

  const refet = useCallback(() => refetch(), [refetch]);

  const handleSetToken = useCallback(() => {
    const teste = Math.random();

    dispatch(setToken(String(teste)));
  }, [dispatch]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-cyan-200 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={refet} className="bg-white text-zinc-700 p-3 rounded-md">
        Refetch
      </button>

      <button
        onClick={handleSetToken}
        className="bg-white text-zinc-700 p-3 rounded-md"
      >
        Set Token - {status.token}
      </button>

      {isLoading && "loading"}

      {data &&
        data?.map((data) => {
          return <div key={data.id}>{data.title}</div>;
        })}
    </div>
  );
}

export default App;
