import { useEffect, useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const answer = prompt("누구냐");
    if (answer === "조경15") {
      setAuthenticated(true);
      document.title = "LX--";
    } else {
      alert("꺼지삼");
    }
  }, []);

  if (!authenticated) {
    return <h2 style={{ color: "red" }}>DG3
      .</h2>;
  }

  return (
    <div className="center_div">

      <h1 style={{ color: "green" }}>
        <a
          href="https://www.lx.or.kr"
          style={{ color: "green", textDecoration: "none" }}
        >
          LXLXLX
        </a>
      </h1>

      {/* 노래1 */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/WM2b6o-TjNA?start=8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {/* 노래2 */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qdhvdk4FM24?start=8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <h1> 두번 째</h1>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uXqjpyhwD_U?start=8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <video width="560" height="315" controls>
        <source
          src = "https://raw.githubusercontent.com/yoo-00n/html5/main/20230729_194315.mp4"
          type="video/mp4">
         </source>
        </video>
        
    </div>
  );
}

export default App;