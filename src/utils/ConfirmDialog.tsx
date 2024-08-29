import React from "react";
import { DialogContent, DialogWrapper } from "../styles/Dialog.style";
import { StyledForm } from "../styles/Form.style";
import { ButtonDiv } from "../styles/Table.style";
import { StyledButton } from "../styles/Button.style";

interface ConfirmDialogProps {
  isDialogOpen: boolean;
  cancelDelete: (e:any) => void;
  confirmDelete: (e:any) => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isDialogOpen,
  cancelDelete,
  confirmDelete,
}) => {
  return (
    <DialogWrapper
      open={isDialogOpen}
      style={{ pointerEvents: "auto", opacity: 1 }}
    >
      <DialogContent>
        <StyledForm>
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete this item?</p>
          <ButtonDiv>
            <StyledButton
              onClick={cancelDelete}
              style={{ backgroundColor: "#2760b6" }}
            >
              Cancel
            </StyledButton>
            <StyledButton
              onClick={confirmDelete}
              style={{ backgroundColor: "#9d1010" }}
            >
              Delete
            </StyledButton>
          </ButtonDiv>
        </StyledForm>
      </DialogContent>
    </DialogWrapper>
  );
};

export default ConfirmDialog;
