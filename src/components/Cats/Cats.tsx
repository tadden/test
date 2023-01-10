import React from "react";
import { useParams } from "react-router-dom";
import { ICats } from "../../types/Items";

type Props = {
  cats: ICats[] | undefined;
};

export default function Cats({ cats }: Props) {
  return (
    <div>
      <ul>
        {cats?.map(({ id, url }) => (
          <li key={id}>
            <img src={url} alt={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
