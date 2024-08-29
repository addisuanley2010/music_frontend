import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { ButtonDiv, StyledTable, TableContainer } from "../styles/Table.style";
import { StyledButton } from "../styles/Button.style";
import { closeErrorMessage, makeLoading } from "../redux/features/musicSlice";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { useState } from "react";
import CreateDialog from "../utils/CreateDialog";
import { MusicInterface } from "../interface/musicInterface";
import { ContentWrapper } from "../styles/Dialog.style";
import ConfirmDialog from "../utils/ConfirmDialog";
import { FaRegSquarePlus, FaRegTrashCan } from "react-icons/fa6";
import {
  CreateMusicButton,
  EmptyPlaylistContainer,
  EmptyPlaylistText,
  EmptyPlaylistTitle,
} from "../styles/Error.style";

const MusicList = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [createDialog, setCreateDialog] = useState(false);
  const [editInput, setEditInput] = useState<MusicInterface>(
    {} as MusicInterface
  );
  const [deleteId, setDeleteId] = useState<string | undefined>();

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
  const errorMessage: string = useSelector(
    (state: RootState) => state.music.errorMessage
  );

  if (errorMessage !== "") {
    toast.info(errorMessage, {
      position: "top-center",
      autoClose: 1000,
    });
    dispatch(closeErrorMessage());
  }

  if (loading) {
    return <Loading />;
  }

  const confirmDelete = (e: any) => {
    e.preventDefault();
    dispatch(makeLoading());
    if (deleteId) {
      dispatch({ type: "DELETE", id: deleteId });
    }
    setIsDialogOpen(false);
  };

  const cancelDelete = (e: any) => {
    e.preventDefault();
    setIsDialogOpen(false);
  };

  const closeCreateDialog = () => {
    setCreateDialog(false);
  };

  return (
    <ContentWrapper isActive={isDialogOpen || createDialog}>
      {musicList?.length === 0 ? (
        <EmptyPlaylistContainer>
          <EmptyPlaylistTitle>No Music Found</EmptyPlaylistTitle>
          <EmptyPlaylistText>
            Your playlist is empty. Add some tunes!
          </EmptyPlaylistText>
          <CreateDialog
            createDialog={createDialog}
            closeCreateDialog={closeCreateDialog}
            musicInput={editInput}
            style={{ pointerEvents: "auto", opacity: 1 }}
          />
          <CreateMusicButton
            onClick={() => {
              setEditInput({
                ...editInput,
                title: "",
                artist: "",
                gener: "",
                album: "",
                _id: "",
              });
              setCreateDialog(true);
            }}
          >
            <FaRegSquarePlus /> Create Music
          </CreateMusicButton>
        </EmptyPlaylistContainer>
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
          <StyledButton
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
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
            <FaRegSquarePlus />
            &nbsp; &nbsp; Create Music
          </StyledButton>

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
