import { useEffect, useState } from "react";

function App() {
  const [lat, set_lat] = useState();
  const [lon, set_lon] = useState();
  const [accuracy, set_acc] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat0 = position.coords.latitude;
      const lon0 = position.coords.longitude;
      const accuracy0 = position.coords.accuracy;

      set_lat(lat0);
      set_lon(lon0);
      set_acc(accuracy0);

    });
  }, []);

  return (
    <div>
      <h2> 현재 위치는 ?</h2>

      {location ? (
        <ul>
          <li><h1>위도: {lat}</h1></li>
          <li><h1>경도: {lon}</h1></li>
          <li><h1>정확도: {accuracy}m</h1></li>
        </ul>
      ) : (
        <p>위치 정보를 불러오는 중...</p>
      )}
    </div>
  )
}

export default App
