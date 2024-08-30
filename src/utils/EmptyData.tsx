import { FaRegSquarePlus } from 'react-icons/fa6';
import { CreateMusicButton, EmptyPlaylistContainer, EmptyPlaylistText, EmptyPlaylistTitle } from '../styles/Error.style';
import CreateDialog from './CreateDialog';
import { useState } from 'react';
import { MusicInterface } from '../interface/musicInterface';

const EmptyData = () => {
          const [createDialog, setCreateDialog] = useState(false);
           const [editInput, setEditInput] = useState<MusicInterface>(
    {} as MusicInterface
  );
 const closeCreateDialog = () => {
    setCreateDialog(false);
  };

  return (
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
  )
}

export default EmptyData