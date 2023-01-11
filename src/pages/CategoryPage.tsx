import { useQuery } from "react-query";
import { useState } from "react";
import { getCatsById } from "../components/API/Api";
import { ICats } from "../types/Items";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Cats from "../components/Cats";

export default function CategoryPage() {
  const [page, setPage] = useState(0);

  const { id } = useParams();
  const { isError, isLoading, data, error } = useQuery<ICats[]>(
    ["cats", id, page],
    () => getCatsById(id, page)
  );

  if (isError) {
    console.log("Error", error);
    return <div>Error...</div>;
  }

  function handleIncrementPage() {
    setPage((page) => page + 1);
  }
  function handleDecrementPage() {
    setPage((page) => page - 1);
  }

  return (
    <>
      <div>
        <Sidebar />
        <Cats isLoading={isLoading} cats={data} />
      </div>
      <div>
        <button onClick={handleDecrementPage} disabled={page === 0}>
          Prev page
        </button>
        <button onClick={handleIncrementPage}>Next page</button>
      </div>
    </>
  );
}
