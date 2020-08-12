import React from "react";
import styled from "styled-components";

interface IProps {
  className?: any;
  small?: boolean;
  align?: string;
  children: any;
}

const Paragraph = (props: IProps) => {
  const P = styled.p`
    font-size: 1em;
    text-align: ${props.align || "left"};
  `;

  const Small = styled.small`
    font-size: 0.7em;
    text-align: ${props.align || "left"};
  `;

  return props.small ? (
    <Small className={props.className}>{props.children}</Small>
  ) : (
    <P className={props.className}>{props.children}</P>
  );
};

export default Paragraph;
