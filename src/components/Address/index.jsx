import React from "react";
import styles from "./index.module.css";

function Address(props) {
  const { address } = props;
  return (
    <div>
      <address className={styles.address}>
        Address:
        <span>{address.region}</span>
        <span>{address.zip}</span>
      </address>
    </div>
  );
}

export default Address;
