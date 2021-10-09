import React from "react";
import styled from "styled-components";

const IMG = styled.img`
  width: 20rem;
  height: auto;
`;

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <IMG src="./img/logo.svg" />
        </li>
      </ul>
    </nav>
  );
};
