import styled from "styled-components";
import EmptyData from "../utils/EmptyData";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #f2f2f2;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 300px;
  transition: box-shadow 0.3s ease-in-out;
  text-align: center;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;


const List = styled.ul`
display: flex;
justify-content: space-evenly;

  list-style-type: none;
  padding: 0;
`;


const Name = styled.span`
  font-weight: bold;
`;

const Count = styled.span`
  background-color: #F65188;
  color: #fff;
  border-radius: 16px;
  padding: 8px 30px;
`;
const SmartLine = styled.hr`
  border: none;
  border-top: 1px dashed #ccc;
  margin: 10px 0;
`;
const DisplayStat = (artist: { [key: string]: number }) => {


  return (
    <>
      {Object.keys(artist).length === 0 ? (
        <EmptyData />
      ) : (
        <Container>
          {Object.entries(artist).map(([name, count]) => (
            <Card key={name}>
              <Name>{name}</Name>
              <SmartLine />
              <List>
              <Count>Total Songs :</Count>
              <Count>{count}</Count>
              </List>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
};

export default DisplayStat;