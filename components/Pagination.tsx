import React from "react";
import Link from "next/link";
import { Pagination, Button } from "../styles/shared";

const PaginationComponent = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <Link key={number} href={`/characters?page=${number}`}>
          <Button onClick={() => paginate(number)}>
            <span>{number}</span>
          </Button>
        </Link>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
