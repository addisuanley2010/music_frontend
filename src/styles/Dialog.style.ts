import styled from "styled-components";

export const DialogWrapper = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

`;

export const DialogContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ContentWrapper = styled.div<{ isactive: boolean }>`
  pointer-events: ${props => props.isactive ? 'none' : 'auto'};
  transition: opacity 0.3s ease-in-out;
`;
