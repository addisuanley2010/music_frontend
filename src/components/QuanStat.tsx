import { Circle, Icon, ParentStyle, StatisticItem, StatisticLabel, StatisticsContainer, Text } from '../styles/Statistics.style';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { StatInterface } from '../interface/musicInterface';
import { GiLoveSong } from "react-icons/gi";
import { RiAlbumFill } from "react-icons/ri";
import { MdGeneratingTokens } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const QuanStat = () => {

  const statValue: StatInterface = useSelector((state: RootState) => state.stat);


  return (
    <>
    <ParentStyle />
      <StatisticsContainer>
        <StatisticItem >
          <Circle><Icon><GiLoveSong /></Icon><Text>{statValue.totalMusic}</Text></Circle>
          <StatisticLabel>Total Music</StatisticLabel>
        </StatisticItem>
        <StatisticItem >
          <Circle><Icon><IoIosPeople /></Icon><Text>{statValue.totalArtists}</Text></Circle>
          <StatisticLabel>Total Artist</StatisticLabel>
        </StatisticItem>
        <StatisticItem >
          <Circle><Icon><RiAlbumFill /></Icon><Text>{statValue.totalAlbums}</Text></Circle>
          <StatisticLabel>Total Album</StatisticLabel>
        </StatisticItem>
        <StatisticItem >
          <Circle><Icon><MdGeneratingTokens /></Icon><Text>{statValue.totalGenres}</Text></Circle>
          <StatisticLabel>Total Genre</StatisticLabel>
        </StatisticItem>
      </StatisticsContainer >
      <hr />


    </>

  );
};


export default QuanStat