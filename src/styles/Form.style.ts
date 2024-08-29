import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 500px;
  margin: 0 auto;
  /* margin-top: 20px; */
  /* background-color: #f5f5f5; */
  padding: 10px;
  padding-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h2{
        color:#0B3B7A;
        text-align: center;
        text-decoration: underline;
  }
   @media (max-width: 768px) {
      padding: 0px 0px;
      margin: 0px;

  }
`;

export const StyledInput = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  font-size: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-top: 20px;
  background-color: #ffffff;
  color: #333;
  transition: border-color 0.3s ease;

  ::placeholder {
    color: #999;
  }

  :focus {
    outline: none;
    border-color: #ff69b4;
    box-shadow: 0 0 5px rgba(255, 105, 180, 0.3);
  }
  @media (max-width: 768px) {
      margin: 10px;

  }
`;

export const StyledButton = styled.button`
  padding: 14px 28px;
  font-size: 18px;
  background-color: #487CE2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #25B2D1;
  }
  @media(max-width: 768px){
width: 200px;
padding: 12px;
align-self: center;
margin-bottom:20px;
margin-top: 10px;
  }
`;


