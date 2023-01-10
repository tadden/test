import React from "react";
import { useQuery } from "react-query";
import { getCatsById } from "../components/API/Api";
import { getRandomCats } from "../components/API/Api";
import Sidebar from "../components/Sidebar";
import Cats from "../components/Cats";
import { ICats } from "../types/Items";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { id } = useParams();
  const { isError, isSuccess, isLoading, data, error } = useQuery<ICats[]>(
    ["cats"],
    () => getCatsById(id)
  );
  console.log(data);
  return (
    <div>
      <Sidebar />
      <Cats cats={data} />
    </div>
  );
}
