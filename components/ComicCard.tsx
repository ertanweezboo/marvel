import React, { useState } from "react";
import Image from "next/image";
import { Comic } from "../interfaces";
import { CardComic } from "../styles/cards";
import { useUiContext } from "../contexts/UIContext";

type ComicProps = {
  data: Comic;
};

const ComicCard = ({ data: comic }: ComicProps) => {
  const { thumbnail, description, title, prices } = comic;
  const { path = "" } = thumbnail;
  const { setModal, setModalData } = useUiContext();

  const onClick = () => {
    setModal(true);
    setModalData({ thumbnail, description, title, prices });
  };

  return (
    <CardComic>
      <Image
        src={`${path}/portrait_xlarge.jpg`}
        alt={title}
        layout={"responsive"}
        height={336}
        width={224}
        className="tumb"
        onClick={onClick}
      />

      <div className="content">
        <h3>{title}</h3>
      </div>
    </CardComic>
  );
};

export default ComicCard;
