import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [heroes, setHeroes] = useState([]);

  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((serverResponse) => serverResponse.json())
      .then((jsonResponse) => setHeroes(jsonResponse))
      .catch((error) => console.log("Something Went Wrong !!!", error));
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={fetchHeroes}>
        Fetch Heroes
      </button>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Power</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((oneHero) => (
            <tr key={oneHero.id}>
              <td>{oneHero.id}</td>
              <td>{oneHero.name}</td>
              <td>
                <img className="img-fluid" src={oneHero.images.sm} alt={oneHero.name} />
              </td>
              <td>{oneHero.powerstats.power}</td>
              <td>{oneHero.biography.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
