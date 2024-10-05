import React, { useCallback } from "react";
import { useGetPosts } from "./services/getPosts/useGetPosts";
import { useUserStore } from "./store/user";

function App() {
  const { data, isLoading, refetch } = useGetPosts();
  const { setUser, userData } = useUserStore();

  console.count("count");

  const refet = useCallback(() => refetch(), [refetch]);

  const handleSetToken = useCallback(() => {
    setUser({ field: "name", value: String(Math.random()) });
  }, [setUser]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-cyan-200 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={refet} className="bg-white text-zinc-700 p-3 rounded-md">
        Refetch
      </button>

      <button
        onClick={handleSetToken}
        className="bg-white text-zinc-700 p-3 rounded-md"
      >
        Set Token - {userData.name}
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
