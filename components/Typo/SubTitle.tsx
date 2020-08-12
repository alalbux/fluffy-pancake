import React from "react";
import styled from "styled-components";

interface IProps {
  className?: any;
  align?: string;
  children: any;
}

const SubTitle = (props: IProps) => {
  const H3 = styled.h3`
    font-size: 1.5em;
    text-align: ${props.align || "left"};
  `;

  return <H3 className={props.className}>{props.children}</H3>;
};

export default SubTitle;
