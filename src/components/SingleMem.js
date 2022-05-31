import styled from "@emotion/styled";
import { Box } from "@mui/material";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

const MemContainer = styled(Box)`
  border: 1px solid black;
  width: 400px;
  margin: 20px auto;
  text-align: left;
  padding: 10px;
`;

export default function SingleMem({ data }) {
  return (
    <MemContainer>
      <h3>{data.title}</h3>
      <img src={data.img} alt={data.title} width="400px" />
      <div>
        <LikeButton data={data} />
        <DislikeButton data={data} />
      </div>
    </MemContainer>
  );
}
