import React from "react";
import { useQuery } from "react-query";
import { getRandomCats } from "../components/API/Api";
import { ICats } from "../types/Items";
// import PageContainer from "../components/PageContainer";
import Sidebar from "../components/Sidebar";
import Cats from "../components/Cats";

export default function HomePage() {
  const { isError, isSuccess, isLoading, data, error } = useQuery<ICats[]>(
    ["cats"],
    getRandomCats
  );

  if (isLoading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }
  if (isError) {
    console.log("Error", error);
    return <div>Error...</div>;
  }

  return (
    <div>
      <Sidebar />
      <Cats cats={data} />
    </div>
  );
}
