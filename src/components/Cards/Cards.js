import React, { useEffect, useState } from "react";
import '../Footer/footer.scss';

function Footer() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch(
          "https://bob-teste-front-end.herokuapp.com/api/products.json/"
        )
          .then((resp) => resp.json())
          .then((data) => {
            setRepositories(data(data.products));
           
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
        </div>
        </div>
        </div>



    )
}

export default Footer;