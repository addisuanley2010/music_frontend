import styled from "styled-components";

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 600px;
  margin: 20px auto;
      overflow-x:auto;

   @media (max-width: 768px) {
    margin: 2px 0px;
    overflow-x:auto;
  }
`;

export const StatisticItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticValue = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const StatisticLabel = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  color:#AB336B;
  margin-top: 5px;
  font-weight: bold;
    @media (max-width: 768px) {
      font-size: 10px;
  }
`;

export const Icon = styled.span`
      font-size: 34px;
      @media (max-width: 768px) {
       font-size: 25px;

  }

`;


export const Text = styled.span`
    font-size: 20px;
@media (max-width: 768px) {
       font-size: 15px;

  }
`;



export const Circle = styled.div`
display: flex;
flex-direction: column;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #2E313F;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color: #D74F7A;
      
  }
   @media (max-width: 768px) {
   width: 80px;
  height: 80px;

  }
`;

export const ParentStyle = styled.div`
  margin-top: 7%;
  @media (max-width: 900px) {
    margin-top: 16%;
  }
  @media (max-width: 768px) {
    margin-top: 19%;
  }
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.div`
  background-color: #2c3e50;
  /* padding: 20px; */
  padding-top: 5%;

  color: #ecf0f1;

  @media (max-width: 767px) {
    padding-top: 10%;

    width: 100%;
    order: -1;
  }

  @media (min-width: 768px) {
    width: 250px;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding: 15px;
  margin: 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  flex: 1 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    background-color: #34495e;
  }

  @media (min-width: 768px) {
    margin: 0 0 10px 0;
    text-align: left;
  }
`;

export const ItemName = styled.span`
  font-weight: bold;
`;

export const ItemCount = styled.span`
  background-color: #3498db;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9em;
`;

export const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
`;
