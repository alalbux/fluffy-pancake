import React from "react";
import styled from "styled-components";
import NextLink from 'next/link';

import Palette from "../../components/Palette";

interface IProps {
  href?: string;
  children?: any;
}

const Link = (props: IProps) => {
  const StyledLink = styled(NextLink)`
    color: ${Palette.foreground};
    text-decoration: none;
  `

  return (
    <StyledLink href={props.href}>
      {props.children}
    </StyledLink>
  );
}

export default Link;
