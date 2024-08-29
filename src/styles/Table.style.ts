import styled from "styled-components";

export const TableContainer = styled.div`
  width: 80%;
  max-width: 100%;
  margin: 15px auto;
  padding: 20px 50px;
  border-radius: 10px;
  overflow-x: auto;
  background-color: #f2f2f2;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-size: 12px;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;

  th,
  td {
    padding: 10px 10px 10px 10px;
    border: 1px solid #aaa;
    text-align: center;
    border-radius: 5px;
  }

  th {
    background-color:#ff4081;
    color: #eeeeee;
  }
`;

export const ButtonIcon = styled.span`

display: none;
@media (max-width: 768px) {
    display: flex;
    font-size: 15px;
    padding-right: 10px;
    justify-content: space-around;
  }

`


export const Edit = styled.button`
color: blue;
border: none;
font-size: 15px;
`

export const Delete = styled.button`
color: red;
margin-left: 5px;
font-size: 15px;
border: none;
`

export const ButtonDiv = styled.span`
display: flex;
justify-content: center;
margin: 0px;




`