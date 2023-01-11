import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { ICategories } from "../../types/Categories";
import { getCategories } from "../API/Api";

export default function Sidebar() {
  const { isError, isLoading, data, error } = useQuery<ICategories[]>(
    ["categories"],
    getCategories
  );

  if (isError) {
    console.log("Error", error);
    return <div>Error...</div>;
  }

  return (
    <div>
      <ul>
        {data?.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
