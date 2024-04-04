//Carousel.jsx

import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,

		appendDots: dots => (
			<div>
				<ul style={{
					margin: "0px", padding: "0px"
				}}> {dots} </ul>
			</div>
		),

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					
                    infinite: true,
					dots: true,
                    slidesToShow: 1,
					slidesToScroll: 3,
					initialSlide: 1
                    
				}
			}
		]
	};

	return (
		<>
			<div className="full-width-carousel">
				<Slider {...settings}>
					<div className="full-width-slide">
                    <img src="./aboutcoll1jpg.jpg"
							alt="Slide 1"
							className="slide-image" />
					</div>
					<div className="full-width-slide">
                    <img src="./College Library.jpg" 
							alt="Slide 2"
							className="slide-image"/>
					</div>
					<div className="full-width-slide">
						<img src="./students with degree.jpg"
							alt="Slide 3"
							className="slide-image" />     
					</div>

                    <div className="full-width-slide">
                    <img src= "./Cstudents.jpg" 
							alt="Slide 4"
							className="slide-image" />
                            
					</div>
				</Slider>
			</div>
		</>
	);
};

export default Carousel;
