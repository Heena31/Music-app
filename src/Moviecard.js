import { Component } from "react";

class Moviecard extends Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="https://imgs.search.brave.com/jx1ALlyt0Jp8yRmnGS3nzvPFX7v06fXdEbkD_aJAPSM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFrcmZzUzVrTkwu/anBn"
              alt="poster"
            ></img>
          </div>

          <div className="right">
            <div className="title">The Avenger</div>
            <div className="plot">Supernatural power show in the movie</div>
            <div className="price">Rs.199</div>

            <div className="footer">
              <div className="rating">8.9</div>
              <div className="star-dis">

              <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"></img>
              <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="str"></img>
              <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png"></img>
              <span>0</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
