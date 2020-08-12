import React from "react";
import styled from "styled-components";

interface IProps {
  className?: any;
  size: any;
}

const Rythm = (props: IProps) => {
  const Div = styled.div`
    display: block;
    height: ${props.size}px;
  `;

  return <Div />;
};

export default Rythm;
