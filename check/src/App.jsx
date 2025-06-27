import { useState } from "react";

function App() {
  const [go_work, set_go_work] = useState([]);
  const [go_home, set_go_home] = useState([]);

  function getdate() {
    const date = new Date();
    return date.toLocaleDateString('ko-KR') + ' ' + date.toLocaleTimeString('ko-KR');
  }

  function checkgowork() {
    let current_time = getdate();
    set_go_work(current_time);
  }
  
  function checkgohome() {
    let current_time = getdate();
    set_go_home(current_time);
    }

    return (
      <>
        <div className="center_div">
          <button onClick={checkgowork}> 출근 </button>
        </div>
        <div>{go_work}</div>

        <div>
          <button onClick={checkgohome}> 퇴근 </button>
        </div>
        <div>{go_home}</div>
      </>
    )
  }

  export default App

