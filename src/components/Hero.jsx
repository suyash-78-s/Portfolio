// Create this CSS file for custom styles

const Hero = () => {
  return (
    <section id="home-section" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-left">
            <div className="text">
              <span className="subheading">Hello!</span>
              <h1 className="mb-4 mt-3">I&apos;m <span>Suyash Rokade</span></h1>
              <h2 className="mb-4">Full Stack</h2>
              <p className="m-2 p-5">
                <a href="https://www.instagram.com/suyash_rokade78/" className="rounded-pill btn btn-primary py-2 px-3 m-2">My Instagram</a>
                <a href="https://www.linkedin.com/in/suyash-rokade-82a10522b/" className="btn rounded-pill btn-outline-light py-2 px-3 m-2">My Linkedin</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-right">
            {/* <div className="img mx-auto" style={{ backgroundImage: 'url(images/profile.jpg)' }}></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
