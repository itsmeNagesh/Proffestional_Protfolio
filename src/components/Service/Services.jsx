import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"ui/ux design & Architecture"}
            disc={`As a UI/UX designer, I specialize in creating engaging and intuitive user interfaces that enhance the overall user experience. My goal is to design digital products that not only look visually appealing but also function seamlessly across various devices and platforms.

I leverage my expertise in user research, wireframing, . `}
/>
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Develop Software"}
            disc={`As a software developer, I specialize in creating custom software solutions tailored to meet the unique needs and objectives of businesses and organizations. With expertise in various programming languages, frameworks, and development methodologies.
.`}
/>
        </Slide>
        <Slide direction="right">
        <Card
  Icon={CgWebsite}
  title={"Deployment Support"}
  disc={`As part of my deployment support service, I offer comprehensive assistance to ensure a smooth and successful deployment of your software applications. Whether you're launching a new website, mobile app, or web application, I provide the expertise and support needed to deploy your solution effectively and efficiently.
.`}
/>
        </Slide>
        <Slide direction="right">
        <Card
  Icon={CgWebsite}
  title={"Maintenance and Support"}
  disc={`As part of my maintenance and support service, I provide ongoing assistance to ensure the smooth operation and continuous improvement of your software applications. Whether you need to fix bugs, implement updates, or enhance features, I offer reliable support to keep your applications running smoothly and efficiently.

`}
/>

        </Slide>
      </Cards>
      <button>Let's talk</button>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

