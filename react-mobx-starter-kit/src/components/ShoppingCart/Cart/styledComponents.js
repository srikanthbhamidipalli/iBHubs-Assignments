import styled from "styled-components";
export const InsideCartIconDiv = styled.div`
  height: 102px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const SideNavBarBody = styled.div`
  background-color: rgb(8, 7, 7);
  width: 30vw;
  color: white;
`;
export const OutsideDivWithIcon = styled.div`
  position: relative;
`;
export const OutsideCartDiv = styled.div`
  height: 60px;
  width: 60px;
  cursor: pointer;
`;
export const SideNavBar = styled.div`
  position: fixed;
  right: ${props => (props.clickedStatus ? "0vw" : "-30vw")};
  display: flex;
  height: 100vh;
  transition: 0.9s ease-in-out;
`;
export const CheckOut = styled.div`
  height: 46px;
  width: 272px;
  background-color: black;
  color: white;
  margin-left: 116px;
`;

export const OutsideCartIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const OutsideCartItemsCount = styled.div`
  position: absolute;
  right: 11px;
  top: 30px;
  height: 20px;
  width: 20px;
  border-radius: 11px;
  background-color: yellow;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const OutsideCartDivision = styled.div`
  position: fixed;
  cursor: pointer;
`;

export const CrossIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgb(8, 7, 7);
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartInfoInsideNavBar = styled.div`
  height: 102px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InsideCartIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const InsideCartItemsCount = styled.div`
  margin-top: 15px;
  height: 20px;
  width: 20px;
  border-radius: 11px;
  background-color: yellow;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const CartItemsContainer = styled.div`
  margin-top: 60px;
  height: 580px;
  background-color: transparent;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 5px 8px #888888;
`;

export const SubTotalContainer = styled.div`
  height: 53px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const AddToCartText = styled.span`
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
