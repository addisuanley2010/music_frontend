import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { ButtonDiv, StyledTable, TableContainer } from "../styles/Table.style";
import { StyledButton } from "../styles/Button.style";
import {
  closeErrorMessage,
  getMusicLoading,
  makeLoading,
} from "../redux/features/musicSlice";
import Loading from "../utils/Loading";
import { toast } from "react-toastify";
import { useState } from "react";
import CreateDialog from "../utils/CreateDialog";
import { MusicInterface } from "../interface/musicInterface";
import { ContentWrapper } from "../styles/Dialog.style";
import ConfirmDialog from "../utils/ConfirmDialog";
import { FaRegSquarePlus, FaRegTrashCan } from "react-icons/fa6";
import EmptyData from "../utils/EmptyData";
import SelectComponent from "../utils/SelectComponent";

const MusicList = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [createDialog, setCreateDialog] = useState(false);
  const [editInput, setEditInput] = useState<MusicInterface>(
    {} as MusicInterface
  );
  const [deleteId, setDeleteId] = useState<string | undefined>();
  const [filterType, setFilterType] = useState("all");
  const [filterValue, setFilterValue] = useState("");

  const handleEdit = (row: MusicInterface) => {
    setEditInput(row);
    setCreateDialog(true);
  };

  const handleDelete = (id?: string) => {
    setDeleteId(id);
    setIsDialogOpen(true);
  };

  const dispatch = useDispatch();
  const musicList: MusicInterface[] = useSelector(
    (state: RootState) => state.music.musics
  );
  const loading: boolean = useSelector(
    (state: RootState) => state.music.loading
  );
  const success: boolean = useSelector(
    (state: RootState) => state.music.success
  );
  const errorMessage: string = useSelector(
    (state: RootState) => state.music.errorMessage
  );

  if (errorMessage !== "") {
    if (success) {
      toast.success(errorMessage, {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 1000,
      });
    }
    dispatch(closeErrorMessage());
  }

  const confirmDelete = (e: Event) => {
    e.preventDefault();
    dispatch(makeLoading());
    if (deleteId) {
      dispatch({ type: "DELETE", id: deleteId });
    }
    setIsDialogOpen(false);
  };

  const cancelDelete = (e: Event) => {
    e.preventDefault();
    setIsDialogOpen(false);
  };

  const closeCreateDialog = () => {
    setCreateDialog(false);
  };

  const handleFilter = () => {
    if (filterType !== "all" && filterValue !== "") {
      const dataa = { filterType: filterType, filterValue: filterValue };
      dispatch(getMusicLoading(dataa as any));
    } else {
      dispatch(getMusicLoading());
    }
  };

  return (
    <ContentWrapper isactive={isDialogOpen || createDialog}>
      <Loading isDialogOpen={loading} />
      {musicList?.length === 0 ? (
        <EmptyData />
      ) : (
        <TableContainer>
          <CreateDialog
            createDialog={createDialog}
            closeCreateDialog={closeCreateDialog}
            musicInput={editInput}
            style={{ pointerEvents: "auto", opacity: 1 }}
          />
          <ConfirmDialog
            isDialogOpen={isDialogOpen}
            cancelDelete={cancelDelete}
            confirmDelete={confirmDelete}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <StyledButton
                onClick={() => {
                  setEditInput({
                    ...editInput,
                    title: "",
                    artist: "",
                    gener: "",
                    album: "",
                    _id: "",
                  });
                  setCreateDialog(!createDialog);
                }}
              >
                Create Music
              </StyledButton>
            </div>

            <SelectComponent
              filterType={filterType}
              setFilterType={setFilterType}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              musicList={musicList}
              handleFilter={handleFilter}
            />
          </div>

          <StyledTable>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {musicList?.map((row, index) => (
                <tr key={row?._id}>
                  <td>{index + 1}</td>
                  <td>{row?.title}</td>
                  <td>{row?.artist}</td>
                  <td>{row?.album}</td>
                  <td>{row?.gener}</td>
                  <td>
                    <ButtonDiv>
                      <StyledButton bg="" onClick={() => handleEdit(row)}>
                        Edit
                      </StyledButton>
                      <StyledButton
                        bg="#B74C4C"
                        onClick={() => handleDelete(row._id)}
                      >
                        <FaRegTrashCan
                          style={{ marginRight: "6px", marginLeft: "6px" }}
                        />
                      </StyledButton>
                    </ButtonDiv>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
      )}
    </ContentWrapper>
  );
};

export default MusicList;
