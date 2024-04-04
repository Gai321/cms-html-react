import { useState } from 'react'
import './App.css'
import Carousel from './Components/Carousel';
import Cards from './Components/Cards';
import Header from './Components/Header';
import Footer from './Components/Footer';




function App() {
  
    const sliderClick = (slider) => {
      alert("Hello World");
    };
  
    const slides = [
      {
        image: <img src="./biomed.pg.jpg" href =""/>,
        title: "Biomedical",
        clickEvent: sliderClick,
      },
      {
        image: <img src="./aeronautical eng.jpg" href =""/>,
        title: "Aeronautical Engineering",
        clickEvent: sliderClick,
      },
      {
        image: <img src="./ECE.jpg" href =""/>,
        title: "ECE",
        clickEvent: sliderClick,
      },
      {
        image: <img src="./EI.jpg" href =""/>,
        title: "Electronics and Instrumentation",
        clickEvent: sliderClick,
      },
      {
        image: <img src="./computer-lab.jpg" href =""/>,
        title: "Inormation Technology",
        clickEvent: sliderClick,
      },
      {
        image: <img src="./Management Studies.jpg" href =""/>,
        title: "Master of Business Adminstration",
        clickEvent: sliderClick,
      },
      {
        image: <img src="./Nano science.jpg" href =""/>,
        title: "NanoScience Engineering",
        clickEvent: sliderClick,
      },
      {
        image: <img src="./Robotics and automation.jpg" href =""/>,
        title: "Robotics and Automation",
        description: "This is a eighth description",
        clickEvent: sliderClick,
      },
    ];
  

  return (
    <>  
              <Header/>
              <Carousel/>
              
    
  <div className="container-fluid">
    <br/>
        <h2>NEWS AND EVENTS</h2>
          <h3> It's all about our college events and some important news. If you want to know more details about the News/Events please contact Administration.</h3>

             <marquee width="100%" direction="up" height="700">
             <marquee behavior="scroll" direction="up" scrollamount="1"></marquee>
  
              <h4>20th March 2024, 9.30 am Onwards</h4> <p>SEMINAR ON THINK-BIG<br/>
                Venue: Bharathiyar Hall</p>
   
              <h4>6th April 2024,10:00 am</h4>
              <p>HISET 2024 - SCHOLARSHIP ENTRANCE TEST" FOR MBA PROGRAMME WITH SCHOLARSHIP"<br/>
                 Venue: Ashoka Hall</p>

              <h4> 25th March 2024, 9:00am</h4>
              <p>"CLUSTERS 2024" - A NATIONAL LEVEL TECHNICAL SYMPOSIUM<br/>
                  Chief Guest: Dr.P.Veeramuthuvel,ISRO Scientist & Project Director Chandrayaan-3, Govt. of India</p>
  
             <h4> 20th March 2024, 9.30 Pm Onwards</h4>
               <p> "WORKSHOP ON MASTERING MODERN JAVA - BEST PRACTICES & PATTERNS"<br/>Venue: C Block Lab</p>
 
            </marquee>
  </div>

<h2> EXPLORE OUR POPULAR COURSES </h2>
<br/>

    <div id="body">
      <Cards slides={slides} />
    </div>



<section className="Info">
  <h2> WHY ABC FOR YOUR ENGINEERING CAREER?</h2>
<br/>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum earum, accusantium adipisci qui doloribus quis explicabo laudantium, tempora beatae sunt soluta? Voluptatibus deserunt blanditiis sunt nam quisquam eveniet eos?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio fugiat laboriosam dignissimos esse officia, amet voluptatibus accusantium at fuga, quibusdam adipisci velit, sit accusamus eligendi nisi maiores minima ad.</p>
 
</section>

 <br/>
 <Footer/>

    </>
  );

};

export default App;