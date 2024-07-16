// src/components/Education.js
import { Container } from "react-bootstrap";



const Education = () => {
  return (
    <Container>
            <div className="education-container">
            <h2 className="fw-bold">Education</h2>
            <div className="education-card justify-content-start-0">
              <div className="education-item">
              <h4 className="text-warning fw-bold">2021-2025</h4>
                <h5 className="fw-bold">B.Tech in Information Technology</h5>
                <p>Vishwakarma Institute Of Information Technology,Pune</p>
                <p>Grade: First class distinction</p>
              </div>
              <div className="education-item">
                <h4 className="text-warning fw-bold">2019-2021</h4>
                <h5 className="fw-bold">Higher Secondary School</h5>
                <p>PCM</p>
                <p>Percentage: 88.20 %</p>
                <p>MHT-CET: 96.78 %le</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-md-6 text-center ftco-animate fadeInUp ftco-animated">
            <p>
              <a href="https://drive.google.com/file/d/1t57uhVY_7clqIRjNwqBeQ2LzsUi0yhmM/view?usp=sharing" className="btn btn-warning rounded-pill py-3 px-5 fw-bold ">Download CV</a>
            </p>
          </div>
        </div>
    </Container>
    
  );
}

export default Education;
