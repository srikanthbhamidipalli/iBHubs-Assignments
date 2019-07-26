import styled from "styled-components";

export const SizesChart = styled.div`
  width: 245px;
`;

export const SizesAndHeadingText = styled.strong`
  font-size: 22px;
`;

export const EachSizeItem = styled.div`
  background-color: ${props =>
    props.isThisselectedSizes ? "black" : "lightgrey"};
  border: none;
  color: ${props => (props.isThisselectedSizes ? "white" : "black")};
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  margin: 4px 2px;
  cursor: pointer;
  border: 1px solid ${props => (props.isThisselectedSizes ? "black" : "white")};
  height: 15px;
  width: 15px;
  border-radius: 30px;
  :hover {
    border-color: black;
  }
`;

export const Division = styled.div``;
