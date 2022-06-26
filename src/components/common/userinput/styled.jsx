import styled from "styled-components";

export const InputContainer = styled.div`
  height: 80px;
`;

export const Input = styled.input`
  width: ${({width}) => width};
  padding: 16px;
  -ms-ime-mode: disabled;

  border: none;
  border-radius: 8px;

  font-size: 1.0rem;
  outline: 1px solid #bbbbbb;

  &:focus {
    outline: 1px solid #333333;
  }

  &::placeholder {
    color: #bbbbbb;
  }

  &:disabled {
    outline: 1px solid #dddddd;
  }
`;

export const ErrorMessage = styled.p`
  height: 20px;
  color: #E7A0A0;
  font-size: 1rem;
`;