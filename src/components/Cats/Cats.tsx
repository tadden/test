import { ICats } from "../../types/Items";

type Props = {
  isLoading: boolean;
  cats: ICats[] | undefined;
};

export default function Cats({ isLoading, cats }: Props) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

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
