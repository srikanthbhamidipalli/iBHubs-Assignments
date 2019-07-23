import styled from "styled-components";

export const EachProductDivision = styled.div`
  margin-top: 3px;
  height: 711px;
  width: 379px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    border: 1px solid grey;
  }
`;

export const ProductImage = styled.div`
  position: relative;
  width: 339px;
`;

export const FreeShippingLabel = styled.div`
  position: absolute;
  top: 0px;
  right: -10px;
  height: 23px;
  width: 103px;
  background-color: black;
  color: white;
  font-size: 13px;
  margin-left: 223px;
`;

export const FreeShippingText = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 23px;
`;

export const ColouredDash = styled.div`
  background-color: orange;
  width: 27px;
  height: 3px;
`;

export const SizeSelector = styled.div``;

export const AddToCart = styled.div`
  height: 46px;
  width: 272px;
  background-color: black;
  color: white;
  margin-bottom: 8px;
  ${EachProductDivision}:hover & {
    background-color: orange;
  }
`;

export const AddToCartText = styled.span`
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
