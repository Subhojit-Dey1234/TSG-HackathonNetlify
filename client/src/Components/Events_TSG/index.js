import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
  Input,
  InputGroup,
  Button,
  Form,
  FormGroup,
} from "reactstrap";
import logo1 from "../../Images/logo1.png";
import logo2 from "../../Images/logo2.png";
// import logo3 from "../../Images/logo3.png";
import logo4 from "../../Images/logo4.png";
import { Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import main from "../../Images/FormImage.png";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const eventTitle = "Event Title";
const eventDescription =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const eventDate = "22nd November 2022";
const eventOrganizer = "TSG IIT Kharagpur";
const eventPoster = logo4;
const participatedEvents = {
  title: ["Event One", "Event Two", "Event Three", "Event Four"],
  organizer: [
    "TSG IIT Kharagpur",
    "Debsoc IIT Kharagpur",
    "TDS IIT Kharagpur",
    "Spectra IIT Kharagpur",
  ],
  poster: [logo1, logo2, logo1, logo2],
};

const Example = (props) => {
  const fileInput = React.useRef(null);
  const userType = "tsgOfficial";
  // const userType = useSelector((state)=>state.userDetails.user.type);
  return (
    <div>
      <br />
      <br />
      <br />
      <h2 style={{ textAlign: "left", margin: "3% 5%", fontWeight: "bolder" }}>
        Posted Events!
      </h2>
      <Card
        style={{ textAlign: "left", boxShadow: "2px grey", margin: "3% 5%" }}
      >
        <Row>
          <Col sm="3">
            <CardImg top width="auto" src={eventPoster} alt="Card image cap" />
          </Col>
          <Col sm="9">
            <CardBody>
              <CardTitle tag="h5">{eventTitle}</CardTitle>
              <p>
                {eventDate} | {eventOrganizer}
              </p>
              <CardText>
                {eventDescription}
                <br />
                <br />

                {userType !== "student" ? (
                  <div>
                    <a
                      href="#"
                      style={{ color: "#727dbd", textDecoration: "none" }}
                    >
                      Download Report
                    </a>{" "}
                    |{" "}
                    <a
                      onClick={() => fileInput.current.click()}
                      style={{
                        color: "red",
                        textDecoration: "none",
                        cursor:"pointer",
                      }}
                    >
                      Upload Report
                    </a>
                    <input ref={fileInput} type="file" style={{visibility:"hidden"}}/>
                  </div>
                ) : (
                  <div>
                    <a
                      href="#"
                      style={{ color: "#727dbd", textDecoration: "none" }}
                    >
                      Download Report
                    </a>{" "}
                    |{" "}
                    <a
                      href="#"
                      style={{
                        color: "red",
                        textDecoration: "none",
                      }}
                    >
                      Participate Now
                    </a>
                  </div>
                )}
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
      <br />
      <br />
      {userType !== "student" ? (
        <div style={{ padding: "3% 5%" }}>
          <h2 style={{ textAlign: "left", fontWeight: "bolder" }}>
            Some Reads For You
          </h2>
          <p style={{ textAlign: "left" }}>
            Learn more about research in the other IITs
          </p>
          <CardGroup style={{ padding: "3%" }}>
            <Card style={{ margin: "0 1%", border: "none" }}>
              <CardImg top width="10%" src={logo1} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h6">
                  Flying high with the best drone tech : The inspiring tale of
                  Urban Matrix
                </CardTitle>
              </CardBody>
            </Card>
            <Card style={{ margin: "0 1%", border: "none" }}>
              <CardImg top width="10%" src={logo2} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h6">
                  Dioxane: A Harmful Pollutant and the Search for its Sensor
                </CardTitle>
              </CardBody>
            </Card>
            <Card style={{ margin: "0 1%", border: "none" }}>
              <CardImg top width="10%" src={logo1} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h6">
                  Breaking a Virus 2: COVIRAP and where it goes from here
                </CardTitle>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      ) : (
        <div style={{ padding: "3% 5%" }}>
          <h2 style={{ textAlign: "left", fontWeight: "bolder" }}>
            Participated Events
          </h2>
          <p style={{ textAlign: "left" }}>
            Click On The Event's Title To Download Your Certificate
          </p>
          {/* <CardGroup style={{ padding: "3%" }}> */}
          <Carousel responsive={responsive}>
            <div>
              <Card style={{ margin: "0 1%", border: "none" }}>
                <CardImg
                  top
                  width="10%"
                  src={participatedEvents.poster[0]}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h6" style={{ textAlign: "center" }}>
                    {participatedEvents.title[0]}: Organized By{" "}
                    {participatedEvents.organizer[0]}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card style={{ margin: "0 1%", border: "none" }}>
                <CardImg
                  top
                  width="10%"
                  src={participatedEvents.poster[1]}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h6" style={{ textAlign: "center" }}>
                    {participatedEvents.title[1]}: Organized By{" "}
                    {participatedEvents.organizer[1]}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card style={{ margin: "0 1%", border: "none" }}>
                <CardImg
                  top
                  width="10%"
                  src={participatedEvents.poster[2]}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h6" style={{ textAlign: "center" }}>
                    {participatedEvents.title[2]}: Organized By{" "}
                    {participatedEvents.organizer[2]}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card style={{ margin: "0 1%", border: "none" }}>
                <CardImg
                  top
                  width="10%"
                  src={participatedEvents.poster[3]}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h6" style={{ textAlign: "center" }}>
                    {participatedEvents.title[3]}: Organized By{" "}
                    {participatedEvents.organizer[3]}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </Carousel>
          {/* </CardGroup> */}
          <br />
          <br />
          <br />
        </div>
      )}
      {userType !== "tsgOfficial" ? (
        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "0 5%",
          }}
        >
          <Col sm="6">
            <br />
            <img src={main} alt="MainImage" style={{ width: "100%" }} />
          </Col>
          <Col
            sm="6"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Form>
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      type="name"
                    />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      type="name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input name="mail" placeholder="Your Mail" type="email" />
              </FormGroup>
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <Input name="roll" placeholder="Your Roll" type="name" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Input
                      name="hall"
                      placeholder="Your Hall of Residence"
                      type="name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input
                  name="subject"
                  placeholder="Request Subject"
                  type="name"
                />
              </FormGroup>
              <FormGroup>
                <Input name="message" placeholder="Your Message" type="name" />
              </FormGroup>
              <br />
              <center>
                <Button
                  style={{
                    width: "200px",
                    height: "50px",
                    backgroundColor: "#727dbd",
                    color: "white",
                    border: "none",
                  }}
                >
                  Update Information
                </Button>
              </center>
            </Form>
            <br />
          </Col>
        </Row>
      ) : (
        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "0 5%",
          }}
        >
          <Col sm="6">
            <br />
            <img src={main} alt="MainImage" style={{ width: "100%" }} />
          </Col>
          <Col
            sm="6"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Form>
              <FormGroup>
                <Input
                  name="name"
                  placeholder="Name of The Event"
                  type="name"
                />
              </FormGroup>
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <Input
                      name="date"
                      placeholder="Schedule of The Event"
                      type="datetime-local"
                    />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup>
                    <Input
                      name="organizer"
                      placeholder="Enter Organizing Body"
                      type="name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input
                  name="description"
                  placeholder="Enter Event Description"
                  type="name"
                />
              </FormGroup>
              <FormGroup>
              <FormGroup>
                <Input placeholder="Update Event Image" type="file"/>
              </FormGroup>
              </FormGroup>
              <br />
              <center>
                <Button
                  style={{
                    width: "200px",
                    height: "50px",
                    backgroundColor: "#727dbd",
                    color: "white",
                    border: "none",
                  }}
                >
                  Update Information
                </Button>
              </center>
            </Form>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Example;
