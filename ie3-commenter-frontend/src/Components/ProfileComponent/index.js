import React, { useState } from "react";
import desktopStyles from "./desktop.module.css";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProfileComponent = () => {
  const styles = desktopStyles;
  let { id } = useParams();

  return (
    <div className={styles.mainBlock}>
      <h1>Profile Page</h1>
      <h2>Info ID: {id}</h2>
    </div>
  );
};

export default ProfileComponent;
