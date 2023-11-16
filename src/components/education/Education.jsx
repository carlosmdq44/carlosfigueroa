import React from "react";
import "./education.scss";

export default function Education() {
  return (
    <div className="education" id="education">
      <div className="right">
        <h2>Education</h2>
        <h3>Carrera Universitaria</h3>
        <p>
          Técnico Superior en Programación - Universidad Técnilogica Nacional - Año de finalización:2022
        </p>
        <div className="imgContainerEducation">
          <img src="assets/figueroaTitulo.jpg" alt="" />
        </div>
        <h3>Certificaciones</h3>
        
        <h3>Cursos</h3>
        <div className="imgContainerEducation">
          <img src="assets/ethicalHacking.jpg" alt="" />
          <img src="assets/reactJs.png" alt="" />
          <img src="assets/Java.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
