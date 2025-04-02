import React, { useEffect, useState } from "react";
import "../styles/MainSection.css";

const getRandomCourses = (items, count) => {
  return items.sort(() => 0.5 - Math.random()).slice(0, count);
};

const MainSection = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [randomTestimonials, setRandomTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseRes = await fetch("http://127.0.0.1:5000/courses");
        const coursesData = await courseRes.json();
        setFeaturedCourses(getRandomCourses(coursesData, 3));
  
        const testimonialsRes = await fetch("http://127.0.0.1:5000/testimonials");
        const testimonialsData = await testimonialsRes.json();
        setRandomTestimonials(getRandomCourses(testimonialsData, 2));
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <main className="index">
      <section className="about">
        <h2>About LMS</h2>
        <p>
          The Learning Management System (LMS) helps students and instructors
          manage courses, quizzes, and track performance efficiently.
        </p>
      </section>

      <section className="featuredCourses">
        <h2 className="featCoursesHeader">Featured Courses:</h2>
        <div className="coursesList">
          {featuredCourses.map((course) => (
            <div key={course.id} className="courseDetails">
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Description: {course.description}</p>
              <p>Duration: {course.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="Testimonials">
        <h2 className="TestimonialsHeader">Testimonials:</h2>
        <div className="TestimonialsList">
          {randomTestimonials.map((testament, index) => (
            <div key={index} className="testament">
              <h4>{testament.studentName} - {testament.courseName}</h4>
              <p>"{testament.review}"</p>
              <p>{'★'.repeat(testament.rating) + '☆'.repeat(5 - testament.rating)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainSection;
