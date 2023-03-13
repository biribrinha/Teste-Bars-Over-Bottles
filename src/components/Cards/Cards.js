import React, { useEffect, useState } from "react";
import '../Cards/cards.scss';

function Cards() {
  const [repositories, setRepositories] = useState([]);



  useEffect(() => {
    // fetch("http://localhost:8080/https://bob-teste-front-end.herokuapp.com/api/products.json") // url usada com o cors anywere
    fetch("https://bob-teste-front-end.herokuapp.com/api/products.json")
      .then((resp) => resp.json())
      .then((data) => {
        setRepositories(data);
      });
  }, []);

  console.log(setRepositories);
  return (
    <div>

      <div className="container">
        <div className="feed">
          {repositories.map((repo) => {
            return (
              <a href="/produto">
                <article className="card">
                  <div className="bordaImg">
                    <img src={repo.photo} />
                  </div>
                  <div className="contentCard">
                    <h4>{repo.name}</h4>
                    <p>{repo.price}</p>
                  </div>
                </article>
              </a>
            );
          })}




        </div>
      </div>
    </div>



  )
}

export default Cards;