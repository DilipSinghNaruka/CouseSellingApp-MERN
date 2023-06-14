import React, { useState } from 'react';
import Course1 from "../assests/images/Course1.jpeg"
import "./CourseCss.css"
const Course =({src, title, descriptionm,view,creator,lecture })=>{
    return (
      <>
        <div className="homepage-course-card animate__animated animate__fadeInUp">
          <img src={src} alt="Course 1" />
          <div className="homepage-course-card-details">
            <h3>{title}</h3>
            <p>{descriptionm}</p>
            <p>view :- {view}</p>
            <p>creator:- {creator}</p>
            <p>lecture:- {lecture}</p>
            <button className="homepage-button">Enroll Now</button>
          </div>
        </div>
      </>
    );
}

function Courses() {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const coursesList = ['Web Development ', 'Android Development ' , 'Data Science ', 'Data Structure and Algorithm ', 'Game Development ', 'Blockchain Development', 'Seles force']
  return (
    <>
      <div className="Courses_container">
        <div className="CourseUper">
          <div className="input">
            <input
              type="text"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              placeholder="Search here your course"
            />
          </div>
          <div className="courseCategory">
            {coursesList.map(item => (
              <button
                className="courseCategory_button"
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
              //   <a className="courseCategory_button"> {item}</a>
            ))}
          </div>
        </div>
        <div className="CourseBottm">
          <div className="coursesList">
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
            <Course
              src={Course1}
              title="yes this is title"
              descriptionm="yes this is description"
              view="5"
              creator="Dilip"
              lecture="5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
