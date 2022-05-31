import { Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  width: 200px;
`;

export default function DislikeButton(data) {
  return (
    <StyledButton
      variant="contained"
      color="error"
      endIcon={<ArrowDownwardIcon />}
    >
      {data.data.downvotes}
    </StyledButton>
  );
}
