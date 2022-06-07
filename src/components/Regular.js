import { Container } from "@mui/system";
import Nav from "./Nav";
import SingleMem from "./SingleMem";

export default function Regular({ data, onClick, handleCheckbox }) {
  return (
    <>
      <Nav />
      <Container fixed>
        {!data.length && <div className="alert">This category is empty!</div>}
        {data.map((data, index) => (
          <SingleMem
            data={data}
            onClick={onClick}
            handleCheckbox={handleCheckbox}
            index={index}
            key={index}
          />
        ))}
      </Container>
    </>
  );
}
