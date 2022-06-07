import { Box, Checkbox } from "@mui/material";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

export default function SingleMem({ data, handleCheckbox, onClick, index }) {
  return (
    <Box className="MemContainer" key={index}>
      <div className="MemeTitle">
        <b>{data.title}</b>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          onChange={() => handleCheckbox(data.id - 1)}
        />
      </div>
      <img src={data.img} alt={data.title} width="400px" />
      <div>
        <LikeButton data={data} onClick={onClick} index={data.id - 1} />
        <DislikeButton data={data} onClick={onClick} index={data.id - 1} />
      </div>
    </Box>
  );
}
