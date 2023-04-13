import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import desktopStyles from "./desktop.module.css";

const SignchangeComponent = () => {
  const styles = desktopStyles;

  const [inputPrevPW, setInputPrevPW] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [inputPWRe, setInputPWRe] = useState("");

  const setPrevPWState = (event) => setInputPrevPW(event.currentTarget.value);
  const setPWState = (event) => setInputPW(event.currentTarget.value);
  const setPWReState = (event) => setInputPWRe(event.currentTarget.value);

  const submitInfo = (event) => {
    event.preventDefault();
    alert("abc");
  };

  return (
    <div className={styles.mainBlock}>
      <Form className={styles.formBlock} onSubmit={submitInfo}>
        <Form.Group className="mb-3" controlId="formBasicPrevPassword">
          <Form.Label>현재 비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="현재 비밀번호"
            value={inputPrevPW}
            onChange={setPrevPWState}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>변경할 비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="변경할 비밀번호"
            value={inputPW}
            onChange={setPWState}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordRe">
          <Form.Label>변경할 비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            placeholder="변경할 비밀번호 확인"
            value={inputPWRe}
            onChange={setPWReState}
          />
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit">
            정보수정
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignchangeComponent;
