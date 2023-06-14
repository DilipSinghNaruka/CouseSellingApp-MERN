
import './Homepage.css';
// import Course1 from '../../assets/images/Course1.jpeg';
import Course1 from '../../assests/images/Course1.jpeg';
import Course2 from '../../assests/images/Course2.jpeg';
import Course3 from '../../assests/images/Course3.jpg';

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-banner">
        <h1 className="animate__animated animate__fadeInDown">
          Unlock Your Potential with Our Online Courses
        </h1>
        <p className="animate__animated animate__fadeInUp">
          Choose from our selection of expert-led courses and take your skills
          to the next level.
        </p>
        <button className="homepage-button animate__animated animate__fadeInUp">
          Explore Courses
        </button>
      </div>
      <h2 className="PopularCourses"> Popular Courses</h2>
      <div className="homepage-courses">
        <div className="homepage-course-card animate__animated animate__fadeInUp">
          <img src={Course1} alt="Course 1" />
          <div className="homepage-course-card-details">
            <h3>Course Title 1</h3>
            <p>Description of course 1</p>
            <button className="homepage-button">Enroll Now</button>
          </div>
        </div>
        <div className="homepage-course-card animate__animated animate__fadeInUp">
          <img src={Course2} alt="Course 2" />
          <div className="homepage-course-card-details">
            <h3>Course Title 2</h3>
            <p>Description of course 2</p>
            <button className="homepage-button">Enroll Now</button>
          </div>
        </div>
        <div className="homepage-course-card animate__animated animate__fadeInUp">
          <img src={Course3} alt="Course 3" />
          <div className="homepage-course-card-details">
            <h3>Course Title 3</h3>
            <p>Description of course 3</p>
            <button className="homepage-button">Enroll Now</button>
          </div>
        </div>
      </div>
      <div className="homepage-cta">
        <h2 className="animate__animated animate__fadeInDown">
          Ready to Learn?
        </h2>
        <p className="animate__animated animate__fadeInUp">
          Choose from hundreds of courses and start your journey today.
        </p>
        <button className="homepage-button animate__animated animate__fadeInUp">
          Explore Courses
        </button>
      </div>
    </div>
  );
}

export default Homepage;
