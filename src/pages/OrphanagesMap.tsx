import React from "react";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

import MapMarkerImg from "../images/map-marker.svg";
import "../styles/pages/orphanages-map.css";
import "leaflet/dist/leaflet.css";
function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarkerImg} alt="Marca" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita 😃</p>
        </header>
        <footer>
          <strong>Joinville</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>
      <Map
        center={[-26.2849853, -48.8296814]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
