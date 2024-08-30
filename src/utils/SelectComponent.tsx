import React from 'react';
import { MusicInterface } from '../interface/musicInterface';
import { FilterButton, FilterContainer, FilterSelect } from "../styles/Select.style";

interface SelectComponentProps {
  filterType: string;
  setFilterType: (value: string) => void;
  filterValue: string;
  setFilterValue: (value: string) => void;
  musicList: MusicInterface[];
  handleFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  filterType,
  setFilterType,
  filterValue,
  setFilterValue,
  musicList,
  handleFilter
}) => {
  return (
     <FilterContainer>
      <FilterSelect
        onChange={(e) => setFilterType(e.target.value)}
        value={filterType}
      >
        <option value="all">All</option>
        <option value="gener">Genre</option>
        <option value="artist">Artist</option>
        <option value="album">Album</option>
      </FilterSelect>
        <FilterSelect
        onChange={(e) => setFilterValue(e.target.value)}
        value={filterValue}
      >
        <option value="">All</option>
        {filterType === "gener" &&
          Array.from(new Set(musicList.map((item) => item.gener))).map(
            (gener) => (
              <option key={gener} value={gener}>
                {gener}
              </option>
            )
          )}
        {filterType === "artist" &&
          Array.from(new Set(musicList.map((item) => item.artist))).map(
            (artist) => (
              <option key={artist} value={artist}>
                {artist}
              </option>
            )
          )}
        {filterType === "album" &&
          Array.from(new Set(musicList.map((item) => item.album))).map(
            (album) => (
              <option key={album} value={album}>
                {album}
              </option>
            )
          )}
       </FilterSelect>
      <FilterButton onClick={handleFilter}>
        Apply Filter
      </FilterButton>
    </FilterContainer>
  
  );
};

export default SelectComponent;
