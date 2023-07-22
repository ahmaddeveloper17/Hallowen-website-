import img from "../asserts/trick-treat1-img.png"
import img1 from "../asserts/trick-treat2-img.png"
import img2 from "../asserts/trick-treat3-img.png"
import img3 from "../asserts/trick-treat4-img.png"
import img4 from "../asserts/trick-treat5-img.png"
import img5 from "../asserts/trick-treat6-img.png"
function Trick() {
    return (
      <div>
      
      <section className="section trick" id="trick">
        <h2 className="section__title">Trick Or Treat</h2>
        <div className="trick__container container grid">
          <div className="trick__content">
            <img src={img} alt="" className="trick__img" />
            <h3 className="trick__title">Toffee</h3>
            <span className="trick__subtitle">Candy</span>
            <span className="trick__price">$11.99</span>
            <button className="button trick__button">
              <i className="bx bx-cart-alt trick__icon" />
            </button>
          </div>
          <div className="trick__content">
            <img src={img1} alt="" className="trick__img" />
            <h3 className="trick__title">Bone</h3>
            <span className="trick__subtitle">Accessory</span>
            <span className="trick__price">$8.99</span>
            <button className="button trick__button">
              <i className="bx bx-cart-alt trick__icon" />
            </button>
          </div>
          <div className="trick__content">
            <img src={img2} alt="" className="trick__img" />
            <h3 className="trick__title">Scarecrow</h3>
            <span className="trick__subtitle">Accessory</span>
            <span className="trick__price">$15.99</span>
            <button className="button trick__button">
              <i className="bx bx-cart-alt trick__icon" />
            </button>
          </div>
          <div className="trick__content">
            <img src={img3} alt="" className="trick__img" />
            <h3 className="trick__title">Candy Cane</h3>
            <span className="trick__subtitle">Candy</span>
            <span className="trick__price">$7.99</span>
            <button className="button trick__button">
              <i className="bx bx-cart-alt trick__icon" />
            </button>
          </div>
          <div className="trick__content">
            <img src={img4} alt="" className="trick__img" />
            <h3 className="trick__title">Pumpkin</h3>
            <span className="trick__subtitle">Candy</span>
            <span className="trick__price">$19.99</span>
            <button className="button trick__button">
              <i className="bx bx-cart-alt trick__icon" />
            </button>
          </div>
          <div className="trick__content">
            <img src={img5} alt="" className="trick__img" />
            <h3 className="trick__title">Ghost</h3>
            <span className="trick__subtitle">Accessory</span>
            <span className="trick__price">$17.99</span>
            <button className="button trick__button">
              <i className="bx bx-cart-alt trick__icon" />
            </button>
          </div>
        </div>
      </section>

      </div>
    );
  }

  export default Trick ;