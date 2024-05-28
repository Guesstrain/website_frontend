// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import './HomePage.css'
import axios from 'axios';

const HomePage = () => {
    const [overviewData, setOverviewData] = useState(null);

    const fetchOverviewData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/overview'); // Replace with your backend API URL
          setOverviewData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
    console.log("is about to call useEffect")
    useEffect(() => {
        fetchOverviewData(); // Fetch data when component mounts
        console.log('HomePage component mounted');
      }, []);
    console.log("after call useEffect and data is ", overviewData)


  return (
    <div>
        <NavigationBar />
        <div className="homepage-content">
        <div className="header">
          <h1>Welcome to My Personal Website</h1>
          {/* <p>Hello! My name is [Your Name] and this is my personal website. Here, you'll find information about me, my interests, and my thoughts. Feel free to explore and get to know me better.</p> */}
          {overviewData && (<p>{overviewData.title}</p>)}
        </div>
        <div className="about-me">
          <h2>About Me</h2>
          {/* <p>[Write a brief description about yourself, your background, interests, skills, etc.]</p> */}
          {overviewData && (<p>{overviewData.description}</p>)}
        </div>
        <div className="interests">
          <h2>Interests</h2>
          {/* <p>[List your interests, hobbies, or activities that you enjoy.]</p> */}
          {overviewData && (<p>{overviewData.interest}</p>)}
        </div>
        <div className="contact">
          <h2>Contact Me</h2>
          {/* <p>If you have any questions or would like to get in touch, you can reach me at [Your Email Address].</p> */}
          {overviewData && (<p>{overviewData.contact}</p>)}
        </div>
      </div>
      <div className="profile-picture">
        <img src="https://via.placeholder.com/150" alt="Profile" />
      </div>

    </div>
  );
};

export default HomePage;