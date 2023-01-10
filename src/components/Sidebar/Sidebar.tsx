import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { ICategories } from "../../types/Categories";
import { getCategories } from "../API/Api";

export default function Sidebar() {
  const { isError, isSuccess, isLoading, data, error } = useQuery<
    ICategories[]
  >(["categories"], getCategories);

  // console.log(data);
  return (
    <div>
      {data?.map(({ name, id }) => (
        <li key={id}>
          <Link to={`/${id}`}>{name}</Link>
        </li>
      ))}
    </div>
  );
}
