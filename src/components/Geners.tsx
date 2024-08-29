
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";
import DisplayStat from "./DisplayStat";


const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #ff4081;
`;

const Genres = () => {
  const gener: { [key: string]: number } = useSelector(
    (state: RootState) => state.count.gener
  );

  return (
      <div>
      <Heading>Geners</Heading>
      <DisplayStat {...gener} />

    </div>
  );
};

export default Genres;