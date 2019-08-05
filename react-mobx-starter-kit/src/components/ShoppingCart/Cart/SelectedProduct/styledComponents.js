import styled from "styled-components";

export const EachCartItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
  box-shadow: -4px -3px 5px 1px #404040;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  padding-left: 15px;
`;

export const SizeAndQuantityInfo = styled.span`
  color: grey;
`;

export const PriceInsideCart = styled.span`
  color: orange;
`;

export const DeleteIcon = styled.span`
  position: absolute;
  font-weight: 600;
  color: white;
  right: 2px;
  top: 6px;
  cursor: pointer;
  ${props =>
    props.hoverStatus
      ? EachCartItem
      : "hover" &
        {
          "text-decoration": "line-through"
        }}
`;

export const ProductPicInsideCart = styled.img`
  height: 150px;
  width: 70px;
`;
