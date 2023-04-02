import React, { useState } from "react";
import desktopStyles from "./desktop.css";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginComponent = () => {
  const styles = desktopStyles;

  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");

  const setIDState = (event) => setInputID(event.currentTarget.value);
  const setPWState = (event) => setInputPW(event.currentTarget.value);

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
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit">
            로그인
          </Button>
        </div>
      </Form>
    </div>
  );
};

/*
  const submitInfo = (event) => {
    
    
    if (isLogin === true) return;

    if (!usrId || !usrPw) {
      setLoginErrType(`${!usrId ? "아이디" : "비밀번호"}를 입력해주세요`);
      setLoginErr(true);
      return;
    } else setLoginErr(false);

    if (tmpCurrentLoginInfo(usrId, usrPw)) {
      alert(`환영합니다 ${usrId}님`);
      changeLoginState(true);
      if (autoLogin) {
        // 추후 서버에서 토큰이 날라오면 토큰 하나만 저장예정
        localStorage.setItem("ID", usrId);
        localStorage.setItem("PW", usrPw);
        localStorage.setItem("autoLogin", "true");
      } else localStorage.setItem("autoLogin", "false");
    } else {
      setLoginErr(true);
      setLoginErrType("올바르지 않은 아이디 혹은 비밀번호");
    }
    
};
*/

export default LoginComponent;
