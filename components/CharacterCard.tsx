import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocalstorageState } from "rooks";
import { Character } from "../interfaces";
import { Card } from "../styles/cards";

type CharacterDetailProps = {
  data: Character;
};

const CharacterCard = ({ data: charachter }: CharacterDetailProps) => {
  const { name, thumbnail, id } = charachter;
  const { path = "" } = thumbnail;
  const [liked, setLiked] = useState(false);
  const [value, set] = useLocalstorageState("my-favorites", null);

  useEffect(() => {
    if (value) {
      setLiked(
        JSON.parse(JSON.stringify(value)).some(
          (v: { id: number }) => v.id === id
        )
      );
    }
  }, [value]);

  return (
    <Card>
      <button
        onClick={
          liked
            ? () =>
                set(value && value.filter((i: { id: number }) => i.id !== id))
            : () => set(value !== null ? [...value, { id }] : [{ id }])
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 485 485"
          fill={liked ? "orange" : "white"}
        >
          <path d="M348.629 11.209c-41.588 0-80.489 19.029-106.129 50.852-25.641-31.823-64.541-50.852-106.129-50.852C61.176 11.209 0 72.385 0 147.579c0 59.064 35.289 127.458 104.885 203.28 53.64 58.438 111.995 103.687 128.602 116.164l9.01 6.769 9.009-6.768c16.608-12.477 74.964-57.725 128.605-116.162C449.71 275.04 485 206.646 485 147.579c0-75.194-61.176-136.37-136.371-136.37z" />
        </svg>
      </button>
      <Link href={`/characters/${id}`} title={name}>
        <a>
          <Image
            src={`${path}/standard_xlarge.jpg`}
            alt={name}
            layout={"responsive"}
            height={100}
            width={100}
            className="tumb"
          />
          <div className="content">
            <h3>{name}</h3>
          </div>
        </a>
      </Link>
    </Card>
  );
};

export default CharacterCard;
