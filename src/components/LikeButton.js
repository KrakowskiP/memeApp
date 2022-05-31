import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  width: 200px;
`;

export default function LikeButton(data) {
  return (
    <StyledButton
      variant="contained"
      color="success"
      endIcon={<ArrowUpwardIcon />}
    >
      {data.data.upvotes}
    </StyledButton>
  );
}
