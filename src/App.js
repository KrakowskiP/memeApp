import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hot from "./components/Hot";
import Regular from "./components/Regular";

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Mem 1",
      upvotes: 6,
      downvotes: 0,
      img: "https://cdn.vox-cdn.com/thumbor/cV8X8BZ-aGs8pv3D-sCMr5fQZyI=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19933026/image.png",
      favourite: false,
    },
    {
      id: 2,
      title: "Mem 2",
      upvotes: 1,
      downvotes: 2,
      img: "https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      favourite: false,
    },
    {
      id: 3,
      title: "Mem 3",
      upvotes: 1,
      downvotes: 2,
      img: "https://media-exp2.licdn.com/dms/image/C5622AQFDbtF9f7ewPQ/feedshare-shrink_1280/0/1654529333379?e=1657756800&v=beta&t=qtgEHtHBVI-jzGm2BWmpLFbjXCOzINmvI8oJAGhQ4Dc",
      favourite: false,
    },
    {
      id: 4,
      title: "Mem 4",
      upvotes: 1,
      downvotes: 2,
      img: "https://media-exp2.licdn.com/dms/image/C4E22AQFQZBCGOfTbug/feedshare-shrink_800/0/1654069680188?e=1657756800&v=beta&t=f97Hqd2PiLqJ_rWWYjcEX9YCrmTB3I7786lL4LX_Dk8",
      favourite: false,
    },
    {
      id: 5,
      title: "Mem 5",
      upvotes: 1,
      downvotes: 2,
      img: "https://miro.medium.com/max/1360/0*F-rMIkdywVWyB5a6.png",
      favourite: false,
    },
    {
      id: 6,
      title: "Mem 6",
      upvotes: 1,
      downvotes: 2,
      img: "https://miro.medium.com/max/976/0*-08EUzwn1On4yKx1.png",
      favourite: false,
    },
    {
      id: 7,
      title: "Mem 7",
      upvotes: 1,
      downvotes: 2,
      img: "https://miro.medium.com/max/1280/0*J1cLF8IkHWUI5BUB",
      favourite: false,
    },
    {
      id: 8,
      title: "Mem 8",
      upvotes: 1,
      downvotes: 2,
      img: "https://www.freecodecamp.org/news/content/images/2019/07/scumbag-javascript.jpeg",
      favourite: false,
    },
    {
      id: 9,
      title: "Mem 9",
      upvotes: 1,
      downvotes: 2,
      img: "https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      favourite: false,
    },
  ]);

  const handleButton = (sign, index) => {
    const newData = [...data];
    switch (sign) {
      case "plus":
        newData[index].upvotes++;
        break;
      case "minus":
        newData[index].downvotes++;
        break;

      default:
        break;
    }
    setData(newData);
  };

  const handleCheckbox = (index) => {
    const newData = [...data];
    newData[index].favourite = !newData[index].favourite;
    setData(newData);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/hot"
          element={
            <Hot
              data={data.filter((meme) => meme.upvotes - meme.downvotes > 5)}
              onClick={handleButton}
              handleCheckbox={handleCheckbox}
            />
          }
        />
        <Route
          path="/regular"
          element={
            <Regular
              data={data.filter((meme) => meme.upvotes - meme.downvotes <= 5)}
              onClick={handleButton}
              handleCheckbox={handleCheckbox}
            />
          }
        />
      </Routes>
    </div>
  );
}
