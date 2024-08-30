import { useDispatch, useSelector } from "react-redux";
import { MusicInterface } from "../interface/musicInterface";
import { StyledButton } from "../styles/Button.style";
import { StyledForm, StyledInput } from "../styles/Form.style";
import { addMusicToStore } from "../redux/features/inputSlice";
import { FormEvent, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { makeLoading } from "../redux/features/musicSlice";
import { ButtonDiv } from "../styles/Table.style";
import { DialogContent, DialogWrapper } from "../styles/Dialog.style";
import { RootState } from "../store";

interface CreateDialogProps {
  createDialog: boolean;
  closeCreateDialog: () => void;
  musicInput?: MusicInterface | null;
  style?: React.CSSProperties;
}

const CreateDialog: React.FC<CreateDialogProps> = ({
  createDialog,
  closeCreateDialog,
  musicInput,
  style,
}) => {
  const [formData, setFormData] = useState<MusicInterface>({
    _id: "",
    title: "",
    artist: "",
    album: "",
    gener: "",
  });

  const loading: boolean = useSelector((state: RootState) => state.music.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (musicInput) {
      setFormData(musicInput);
    }
  }, [musicInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (
      formData.album === "" ||
      formData.title === "" ||
      formData.artist === "" ||
      formData.gener === ""
    ) {
      toast.warn("Fill all the fields", {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      const action = formData._id ? "UPDATE_MUSIC" : "CREATE_MUSIC";
      // dispatch({ type: action, payload: formData });
      dispatch({ type: action,formData });

      dispatch(makeLoading());

      dispatch(
        addMusicToStore({
          _id: "",
          title: "",
          artist: "",
          album: "",
          gener: "",
        })
      );
      closeCreateDialog();
    }
  };

  if (!createDialog) return null;

  return (
    <DialogWrapper open={createDialog}>
      <DialogContent
        style={{ backgroundColor: "rgba(255, 255, 255, 1)", ...style }}
      >
        <StyledForm onSubmit={handleSubmit}>
          <h2>{formData._id ? "Update Music" : "Create Music"}</h2>

          <StyledInput
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />

          <StyledInput
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleInputChange}
            placeholder="Artist"
          />

          <StyledInput
            type="text"
            name="album"
            value={formData.album}
            onChange={handleInputChange}
            placeholder="Album"
          />

          <StyledInput
            type="text"
            name="gener"
            value={formData.gener}
            onChange={handleInputChange}
            placeholder="Genre"
          />

          <ButtonDiv>
            <StyledButton bg="" type="submit">
              {loading
                ? "Processing..."
                : formData._id
                ? "Update Music"
                : "Create Music"}
            </StyledButton>
            <StyledButton
              bg="#B74C4C"
              type="button"
              onClick={closeCreateDialog}
            >
              Cancel
            </StyledButton>
          </ButtonDiv>
        </StyledForm>
      </DialogContent>
    </DialogWrapper>
  );
};

export default CreateDialog;
