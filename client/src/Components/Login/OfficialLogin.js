import React, { useState } from "react";
import "./style.css";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardSubtitle,
} from "reactstrap";
import { loginOfficial } from "./Actions";
import { useDispatch, useSelector } from "react-redux";

export default function OfficialLogin() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const st = useSelector((state) => state);

  console.log(st);

  function Login(e) {
    //"123#abc%$pq"
    e.preventDefault();
    let data = {
      mail: email,
      password: password,
    };

    dispatch(
      loginOfficial(data, (res) => {
        if (res.status === 200) {
          if (!localStorage.getItem("access-token")) {
            localStorage.setItem("access-token", res.data.accessToken);
          }
          window.location.href = "/dashboard";
        }
      })
    );
  }

  return (
    <div className="container-form" style={{marginBottom:"20%"}}>
      <Card className="form">
        <CardBody>
          <div className="header">
            <CardTitle style={{ fontWeight: "bolder" }} className="header-main">
              LOGIN
            </CardTitle>
            <CardSubtitle className="header-subtitle">
              &nbsp;&nbsp;FOR OFFICIALS
            </CardSubtitle>
          </div>
          <br />
          <br />
          <Form onSubmit={Login}>
            <FormGroup>
              <Label for="exampleEmail">User</Label>
              <Input
                type="text"
                required={true}
                name="user"
                id="exampleEmail"
                placeholder="Username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Label for="exampleEmail">Password</Label>
              <Input
                required={true}
                type="password"
                name="password"
                id="exampleEmail"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <Button
                type="submit"
                style={{ backgroundColor: "#727dbd" }}
                block
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
        <br />
        <br />
      </Card>
    </div>
  );
}
