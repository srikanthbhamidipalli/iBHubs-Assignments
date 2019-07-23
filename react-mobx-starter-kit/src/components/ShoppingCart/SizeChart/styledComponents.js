import styled from "styled-components";

export const SizesChart = styled.div`
  width: 245px;
`;

export const SizesAndHeadingText = styled.strong`
  font-size: 22px;
`;

export const EachSizeItem = styled.div`
  background-color: ${props =>
    props.isThisSelectedSize ? "black" : "lightgrey"};
  border: none;
  color: ${props => (props.isThisSelectedSize ? "white" : "black")};
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  margin: 4px 2px;
  cursor: pointer;
  border: 1px solid ${props => (props.isThisSelectedSize ? "black" : "white")};
  height: 15px;
  width: 15px;
  border-radius: 30px;
  :hover {
    border-color: black;
  }
`;

export const Division = styled.div``;
