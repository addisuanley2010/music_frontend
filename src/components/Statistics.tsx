import { useState, useEffect } from "react";
import Artists from "./Artists";
import Albums from "./Albums";
import Genres from "./Geners";
import MusicList from "./MusicList";
import { StatInterface } from "../interface/musicInterface";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {
  Container,
  Content,
  ItemCount,
  ItemName,
  List,
  ListItem,
  Sidebar,
  Title,
} from "../styles/Statistics.style";

const Statistics = () => {
  const statValue: StatInterface = useSelector(
    (state: RootState) => state.stat
  );
  const items = [
    { name: " Artists", count: statValue.totalArtists },
    { name: " Albums", count: statValue.totalAlbums },
    { name: " Genres", count: statValue.totalGenres },
    { name: " Musics", count: statValue.totalMusic },
  ];
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleItemClick = (item: { name: string; count: number }) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem.name) {
      case " Musics":
        return <MusicList />;
      case " Artists":
        return <Artists />;
      case " Albums":
        return <Albums />;
      case " Genres":
        return <Genres />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Sidebar>
        <ItemName style={{ paddingLeft: "10px" }}></ItemName>
        <hr />
        <List>
          {items.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => handleItemClick(item)}
              style={{
                backgroundColor:
                  selectedItem.name === item.name ? "#34495e" : "transparent",
              }}
            >
              <ItemName>{item.name}</ItemName>
              <ItemCount>{item.count}</ItemCount>
            </ListItem>
          ))}
        </List>
      </Sidebar>

      <Content>
        {!isMobile && <Title>{selectedItem.name}</Title>}
        {renderContent()}
      </Content>
    </Container>
  );
};

export default Statistics;
