import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "/images/dri.png",
        disc : "This is a Spring Boot application for managing doctor appointments and patient records!.",
        url:"https://github.com/itsmeNagesh/DoctorAppointmentApp"

    },
    {
        img : "/images/emp.png",
        disc :  "it's software application designed to streamline and simplify various tasks related to managing employees within an organization. Spring Boot and  React based  application for perform CRUD opration api.!",
        url:"https://github.com/itsmeNagesh/Employee_Management_System"
    },
    {
        img : "/images/resto.jpg",
        disc : "A restaurant management system is a type of point-of-sale (POS) software specifically designed for restaurants, bars, food trucks and others in the foodservice industry. Unlike a POS system, RMS encompasses all back-end needs, such as inventory and staff!",
        url:"https://github.com/itsmeNagesh/Restoremt_Management_System"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
        url:""
    },
    {
      img : "/images/resto.jpg",
      disc : "A restaurant management system is a type of point-of-sale (POS) software specifically designed for restaurants, bars, food trucks and others in the foodservice industry. Unlike a POS system, RMS encompasses all back-end needs, such as inventory and staff!",
      url:"https://github.com/itsmeNagesh/Restoremt_Management_System"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i} />
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`