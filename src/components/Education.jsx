// src/components/Education.js
import { Container } from "react-bootstrap";



const Education = () => {
  return (
    <Container>
            <div className="education-container">
            <h2 className="fw-bold">Education</h2>
            <div className="education-card">
              <div className="education-item">
              <h4 className="text-warning fw-bold">2019-2020</h4>
                <p>Bachelor of Computer Applications</p>
                <p>Hemchand Yadav University</p>
                <p>Grade: First class distinction</p>
              </div>
              <div className="education-item">
                <h4 className="text-warning fw-bold">2019-2020</h4>
                <p>Higher Secondary School</p>
                <p>CBSE (PCM)</p>
                <p>Grade: First class distinction</p>
              </div>
            </div>
          </div>
    </Container>
    
  );
}

export default Education;
