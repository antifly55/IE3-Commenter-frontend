import React, { useState } from "react";
import desktopStyles from "./desktop.css";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupComponent = () => {
  const styles = desktopStyles;

  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [inputPWRe, setInputPWRe] = useState("");

  const setIDState = (event) => setInputID(event.currentTarget.value);
  const setPWState = (event) => setInputPW(event.currentTarget.value);
  const setPWReState = (event) => setInputPWRe(event.currentTarget.value);

  const submitInfo = (event) => {
    event.preventDefault();
    alert("abc");
  };

  return (
    <div style={{ width: "50%", marginLeft: "25%" }}>
      <Form className={styles.formBlock} onSubmit={submitInfo}>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            placeholder="아이디"
            value={inputID}
            onChange={setIDState}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호"
            value={inputPW}
            onChange={setPWState}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordRe">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호 확인"
            value={inputPWRe}
            onChange={setPWReState}
          />
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit">
            회원가입
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignupComponent;
