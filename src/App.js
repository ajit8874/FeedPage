import "./styles.css";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const allPage = [
  "59b3f0b0100000e30b236b7e",
  "59ac28a9100000ce0bf9c236",
  "59ac293b100000d60bf9c239"
];

export default function App() {
  const [datas, setDatas] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextPage = () => {
    if (pageNo > allPage.length) return;
    setPageNo((prevNo) => prevNo + 1);
  };

  const handlePrevPage = () => {
    if (pageNo < 0) return;
    setPageNo((prevNo) => prevNo - 1);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.mocky.io/v2/${allPage[pageNo]}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.posts);
        setDatas(result.posts);
        setIsLoading(false);
      });
  }, [pageNo]);

  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="App">
      <div id="body">
        {pageNo === 0 && <h1>Welcome</h1>}
        {datas.map((post, idx) => (
          <Card key={idx} post={post} />
        ))}

        
          <div className="btn-body">
           
          {!pageNo==0 && <button onClick={handlePrevPage}>prev</button>}

           
            { pageNo===allPage.length-1 ? "Post are over.":<button onClick={handleNextPage}>next</button>}
          </div>
        
      </div>
    </div>
  );
}

