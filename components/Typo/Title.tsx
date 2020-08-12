import React from "react";
import styled from "styled-components";

interface IProps {
  className?: any;
  align?: string;
  upper?: boolean;
  children: any;
  secondary?: boolean;
}

const Title = (props: IProps) => {
  const H1 = styled.h1`
    font-size: 1.5em;
    text-align: ${props.align || "left"};
    text-transform: ${props.upper ? "uppercase" : "none"};
    font-weight: normal;
    margin: 0;
  `;

  const H2 = styled.h2`
    font-size: 2em;
    text-align: ${props.align || "left"};
    text-transform: ${props.upper ? "uppercase" : "none"};
    font-weight: bold;
    margin: 15px 0;
  `;

  return props.secondary ? (
    <H2 className={props.className}>{props.children}</H2>
  ) : (
    <H1 className={props.className}>{props.children}</H1>
  );
};

export default Title;
