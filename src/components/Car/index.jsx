import React from "react";
import styles from "./index.module.css";

function Car(props) {
  const { car } = props;
  return <div>{car}</div>;
}

export default Car;
