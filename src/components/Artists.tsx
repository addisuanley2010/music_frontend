import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";

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
  width: 400px;
  transition: box-shadow 0.3s ease-in-out;
  text-align: center;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #ff4081;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #ff4081;
  color: #fff;
  border-radius: 10px;
  @media (max-width: 768px) {
font-size: 20px;
  }
`;

const TableRow = styled.tr`
border: 10px solid;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
`;

const Name = styled.span`
  font-weight: bold;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(254, 249, 249);
  margin-top: 20px;
  border: 1px solid;
  border-radius: 5px;
  &:hover{
    background-color: #D2BFBF;
    color: white;
  }
`;

const CountLabel = styled.span`
  font-size: 14px;
  color: #5e2f2f;
  font-weight: bold;
`;

const CountValue = styled.span`
  /* background-color: #ff4081; */
  color: #2a1414;
  padding: 6px 40px;
  border-radius: 16px;
`;

const SmartLine = styled.hr`
  border: none;
  border-top: 1px dashed #ccc;
  margin: 10px 0;
`;

const Artists = () => {
  const artist: { [key: string]: number } = useSelector(
    (state: RootState) => state.count.artist
  );

  const albumPerArtist: { [key: string]: { [key: string]: number } } = useSelector(
    (state: RootState) => state.count.albumsPerArtist
  );

  return (
    <>
      <Heading>Artists</Heading>

      <Container>
        {Object.entries(artist).map(([name, count]) => {
          const albums = albumPerArtist[name] || {};
          const albumEntries = Object.entries(albums);

          return (
            <Card key={name}>
              <Name>{name}</Name>
              <SmartLine />
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Album Name</TableHeader>
                    <TableHeader>Number of Songs</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {albumEntries.map(([albumName, albumCount]) => (
                    <TableRow key={albumName}>
                      <TableCell>{albumName}</TableCell>
                      <TableCell>{albumCount} songs</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
              <CountContainer>
                <CountLabel>Total Songs:</CountLabel>
                <CountValue>{count}</CountValue>
              </CountContainer>
              <CountContainer>
                <CountLabel>Album{albumEntries.length > 1 ? "s" : ""}:</CountLabel>
                <CountValue>{albumEntries.length}</CountValue>
              </CountContainer>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Artists;