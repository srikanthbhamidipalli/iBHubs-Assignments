import styled from "styled-components";

export const InputForm = styled.div`
  height: 200px;
  width: 300px;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 15px;
`;

export const LabelText = styled.div`
  font-size: 20px;
  margin-left: 18px;
`;

export const TextBox = styled.input`
  width: 230px;
  height: 22px;
  margin-left: 18px;
`;

export const SubmitButton = styled.button`
  height: 30px;
  width: 80px;
  background-color: white;
  :hover {
    border: 1px solid;
  }

  margin-left: 100px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-left: 18px;
`;
