import "./experience.scss";
// Experience.jsx
import React from 'react';

function Experience() {
  const experiences = [
    { id: 1, title: 'Job 1', description: 'Description for Job 1' },
    { id: 2, title: 'Job 2', description: 'Description for Job 2' },
    // Agrega más elementos según sea necesario
  ];

  return (
    <div>
      <h2>My Work Experience</h2>
      <div>
        {experiences.map((experience) => (
          // Asegúrate de proporcionar una clave única para cada elemento en el mapa
          <div key={experience.id}>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
