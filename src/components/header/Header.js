import img from "./Asserts/home1-img.png"

function header() {
    return(
<div>
<section className="home container" id="home">
        <div className="swiper home-swiper">
          <div className="swiper-wrapper">
            {/* HOME SLIDER 1 */}
            <section className="swiper-slide">
              <div className="home__content grid">
                <div className="home__group">
                  <img src={img} alt="" className="home__img" />
                  <div className="home__indicator" />
                  <div className="home__details-img">
                    <h4 className="home__details-title">The Labu “Reiza”</h4>
                    <span className="home__details-subtitle">The Living Pumpkin</span>
                  </div>
                </div>
                <div className="home__data">
                  <h3 className="home__subtitle">#1 Top Scariest Ghost</h3>
                  <h1 className="home__title">UOOOO <br /> TRICK OR <br /> TREAT!!</h1>
                  <p className="home__description">Hi, I'm Reiza, people call me "El Labu". I am currently trying to learn 
                    something new, building my own bike with parts made only in Malaysia.
                  </p>
                  <div className="home__buttons">
                    <a href="#" className="button">Book Now</a>
                    <a href="#" className="button--link button--flex">Track Record <i className="bx bx-right-arrow-alt button__icon" /></a>
                  </div>
                </div>
              </div>
            </section>
          </div></div></section>
          <div>
             <div className="swiper-pagination" />
      </div>

</div>
) ;
}
export default header;