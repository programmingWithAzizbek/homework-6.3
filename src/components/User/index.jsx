import React from "react";
import styles from "./index.module.css";
import Car from "../Car";
import Address from "../Address";

function User(props) {
  const { user } = props;

  return (
    <div className={styles.card}>
      <div>
        <img src={user.image} alt="Random image" />
      </div>

      <p>
        Ism familiyasi:
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
      </p>

      <p>
        Telefon:
        <span>{user.phone}</span>
      </p>

      <p>
        Email:
        <span>{user.email}</span>
      </p>
      {user.address && <Address address={user.address} />}

      {user.cars.length > 0 && (
        <ul>
          <strong>Cars:</strong>
          {user.cars.map((car, index) => (
            <li key={index}>
              <Car car={car} />
            </li>
          ))}
        </ul>
      )}
      {!user.cars.length && <p>The car is not available.</p>}
    </div>
  );
}

export default User;
