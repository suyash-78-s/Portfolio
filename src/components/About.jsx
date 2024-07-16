import { Container, Row, Col } from 'react-bootstrap';
const About = () => {
  return (
 
    <section className="portfolio-container" id="about-section">
      <Container>
        <Row className="profile-section">
          <Col md={4} className="text-center">
            <img
              src="path/to/profile.jpg"
              alt="Suyash Rokade"
              className="profile-image animate-fade-in"
            />
            </Col>
            <Col md={8} className="text-center">
            <div className="profile-details">
              <h1 className="animate-slide-in-left">Suyash Rokade</h1>
              <p className="animate-slide-in-left">Job Role: Software Developer</p>
              <p className="animate-slide-in-left">Address: Pune, Maharashtra</p>
            </div>
          </Col>
          
        </Row>
        <Row className="skills-section animate-fade-in">
       
          <Col md={4}>
          <h3 className="animate-slide-in-left">Skills</h3>
            <div className="skill animate-fade-in">
              <p>Adobe Coldfusion</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill animate-fade-in">
              <p>Python</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill animate-fade-in">
              <p>PHP</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill animate-fade-in">
              <p>JavaScript</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="skill animate-fade-in">
              <p>C++</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '70%' }}></div>
              </div>
            </div>
          </Col>

          <Col md={8} className="about-section animate-fade-in">
            <h3>About Me</h3>
            <p>
              Adobe ColdFusion developer at Arosys Technologies, proficient in PHP, jQuery AJAX, and skilled in crafting visually appealing webpages using HTML, CSS, Tailwind, Bootstrap, and Material UI. Well-versed in Python, C++, C, and Java, with a solid foundation in SQL. Eager to contribute to innovative web development projects.
            </p>
            <div className="additional-info">
              <p><strong>Profile:</strong> Backend Developer & Freelancer Artist</p>
              <p><strong>Language:</strong> English, Hindi, Marathi</p>
              <p><strong>Other Skills:</strong> Drawing proficiency, Observational skills, Creativity, Knowledge of art fundamentals, Technical proficiency, Communication skills, Time management, Adaptability & Attention to detail</p>
              <p><strong>Interest:</strong> Traveling, Travel Photography, Teaching, Editing</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default About
