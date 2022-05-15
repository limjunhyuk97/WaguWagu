import { css } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DefaultColor } from "@Style/";

const Mixin = ({ weight, size, align, color }) => css`
  font-weight: ${weight};
  font-size: ${size}px;
  text-align: ${align};
  color: ${color};
  &:hover {
    cursor: pointer;
  }
`;

const GMContainer = styled.div`
  ${Mixin({ weight: 800, size: 18, align: "center", color: "#000000" })};
`;

const GNBContainer = styled.div`
  ${Mixin({ weight: 800, size: 40, align: "center", color: "#000000" })};
`;

const LinkContainer = styled(Link)``;

export { GMContainer, GNBContainer, LinkContainer };
