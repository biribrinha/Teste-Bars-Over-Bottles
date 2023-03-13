import React, { useEffect, useState } from "react";
import '../Cards/cards.scss';

function Cards() {
  const [repositories, setRepositories] = useState([]);

  

  useEffect(() => {
    fetch("http://localhost:8080/https://bob-teste-front-end.herokuapp.com/api/products.json")
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
              <div className="card">
                <div className="imageCard">
                  <img src={repo.photo} />
                </div>
              </div>
            );
          })}

          <article className="card">
            <div className="bordaImg">
              <span>imagem</span>
            </div>
            <div className="contentCard">
              <h4>Nome</h4>
              <p>R$ 150.55</p>
            </div>
          </article>

          <article className="card">
            <div className="bordaImg">
              <span>imagem</span>
            </div>
            <div className="contentCard">
              <h4>Nome</h4>
              <p>R$ 150.55</p>
            </div>
          </article>

          <article className="card">
            <div className="bordaImg">
              <span>imagem</span>
            </div>
            <div className="contentCard">
              <h4>Nome</h4>
              <p>R$ 150.55</p>
            </div>
          </article>

          <article className="card">
            <div className="bordaImg">
              <span>imagem</span>
            </div>
            <div className="contentCard">
              <h4>Nome</h4>
              <p>R$ 150.55</p>
            </div>
          </article>

          <article className="card">
            <div className="bordaImg">
              <span>imagem</span>
            </div>
            <div className="contentCard">
              <h4>Nome</h4>
              <p>R$ 150.55</p>
            </div>
          </article>


        </div>
      </div>
    </div>



  )
}

export default Cards;