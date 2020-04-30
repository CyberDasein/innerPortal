import React from "react";
import styled from "styled-components";

const TitleStyle = styled.h2`
  background: #7FFFD4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  padding: 0;

`;

export const Title = () => {
  return <TitleStyle>Общий чат</TitleStyle>;
};
