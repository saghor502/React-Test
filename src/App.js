import { useState } from "react";
import "./App.css";
import Boton from "./Boton";

const data = [
  {
    id: "1",
    createdAt: "2021-06-21T17:21:41.937Z",
    name: "Program",
    avatar: "https://cdn.fakercloud.com/avatars/puzik_128.jpg",
    video: "WFSTEi_btf8",
    url: "http://placeimg.com/640/480",
  },
  {
    id: "2",
    createdAt: "2021-06-21T11:45:19.757Z",
    name: "Solutions",
    avatar: "https://cdn.fakercloud.com/avatars/ryuchi311_128.jpg",
    video: "Z4yfxOQXqfQ",
    url: "http://placeimg.com/640/480",
  },
  {
    id: "3",
    createdAt: "2021-06-20T22:50:08.828Z",
    name: "Intranet",
    avatar: "https://cdn.fakercloud.com/avatars/a_brixen_128.jpg",
    video: "pFD6IHBoRiU",
    url: "http://placeimg.com/640/480",
  },
  {
    id: "4",
    createdAt: "2021-06-21T00:45:40.094Z",
    name: "Applications",
    avatar: "https://cdn.fakercloud.com/avatars/nicoleglynn_128.jpg",
    video: "WFSTEi_btf8",
    url: "http://placeimg.com/640/480",
  },
  {
    id: "5",
    createdAt: "2021-06-21T15:01:53.974Z",
    name: "Accounts",
    avatar: "https://cdn.fakercloud.com/avatars/jqiuss_128.jpg",
    video: "Z4yfxOQXqfQ",
    url: "http://placeimg.com/640/480",
  },
  {
    id: "6",
    createdAt: "2021-06-21T07:01:11.849Z",
    name: "Accounts",
    avatar: "https://cdn.fakercloud.com/avatars/kirangopal_128.jpg",
    video: "pFD6IHBoRiU",
    url: "http://placeimg.com/640/480",
  },
  {
    id: "7",
    createdAt: "2021-06-21T12:34:32.239Z",
    name: "Configuration",
    avatar: "https://cdn.fakercloud.com/avatars/ainsleywagon_128.jpg",
    video: "WFSTEi_btf8",
    url: "http://placeimg.com/640/480",
  },
  {
    id: "8",
    createdAt: "2021-06-21T05:48:42.746Z",
    name: "Metrics",
    avatar: "https://cdn.fakercloud.com/avatars/n3dmax_128.jpg",
    video: "Z4yfxOQXqfQ",
    url: "http://placeimg.com/640/480",
  },
  {
    id: "9",
    createdAt: "2021-06-21T05:50:32.445Z",
    name: "Intranet",
    avatar: "https://cdn.fakercloud.com/avatars/stefanozoffoli_128.jpg",
    video: "pFD6IHBoRiU",
    url: "http://placeimg.com/640/480",
  },
  {
    id: "10",
    createdAt: "2021-06-21T00:02:26.632Z",
    name: "Factors",
    avatar: "https://cdn.fakercloud.com/avatars/peter576_128.jpg",
    video: "WFSTEi_btf8",
    url: "http://placeimg.com/640/480",
  },
];

export default function App() {
  const [videoID, setVideoID] = useState("WFSTEi_btf8"); //inicia con el primer video, ya si se quiere inciar con otra cosa se pone un string vacio

  return (
    <header className="App-header">
      <body className="App-header">
        <div className="grupo">
          <div className="botones"> 
            {data.map((obj) => ( //se crea en esta linea cada boton dentro de data, si se quieren hacer más botones se pueden agregar más datos a data, pero si se quieren agregar más datos pero no botones se puede hacer con un for y cambiando el rango.
              <Boton
                name={obj.name}
                date={obj.createdAt}
                image={obj.avatar}
                cambiar={() => {
                  setVideoID(obj.video);
                  
                }}
              />
            ))}
          </div>
          <div>
            <div className="video" id="video">
              <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + videoID}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </body>
    </header>
  );
}

