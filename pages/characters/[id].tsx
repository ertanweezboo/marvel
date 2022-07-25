import { FC } from "react";
import { getCharacter } from "../../services";
import Layout from "../../components/Layout";
import { Character, Data } from "../../interfaces";
import CharacterDetail from "../../components/CharacterDetail";

const CharacterDetailPage: FC<Data> = ({ data }: Data) => {
  const { results } = data;
  return (
    <Layout title={results[0].name} description={results[0].description}>
      {results.map((item: Character) => {
        return <CharacterDetail data={item} key={item.id} />;
      })}
    </Layout>
  );
};
export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const res: Character = await getCharacter(id);

  return {
    props: {
      data: res,
    },
  };
}

export default CharacterDetailPage;
