import "./App.css";
import { Container } from "@mui/system";
import SingleMem from "./components/SingleMem";

const data = [
  {
    title: "Mem 1",
    upvotes: 6,
    downvotes: 0,
    img: "https://cdn.vox-cdn.com/thumbor/cV8X8BZ-aGs8pv3D-sCMr5fQZyI=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19933026/image.png",
    favourite: false,
  },
  {
    title: "Mem 2",
    upvotes: 1,
    downvotes: 2,
    img: "https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    favourite: false,
  },
];

function App() {
  return (
    <div className="App">
      <Container fixed>
        {data.map((data) => (
          <SingleMem key={data.title} data={data}></SingleMem>
        ))}
      </Container>
    </div>
  );
}

export default App;
