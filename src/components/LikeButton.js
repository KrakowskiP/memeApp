import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  width: 200px;
`;

export default function LikeButton({ onClick, data, index }) {
  return (
    <StyledButton
      variant="contained"
      color="success"
      endIcon={<ArrowUpwardIcon />}
      onClick={() => onClick("plus", index)}
    >
      {data.upvotes}
    </StyledButton>
  );
}
