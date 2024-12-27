import React from "react";
import "./index.css";

function UserList(props) {
  const { image, firstName, lastName, phone, email, address, cars } =
    props.data;
  return (
    <div className="wrapper">
      <div>
        <img src={image} alt="Images" />
      </div>
      <div>
        <p>
          Ism familiyasi:
          <span>{firstName}</span>
          <span>{lastName}</span>
        </p>
      </div>
      <div>
        <p>Telefon: {phone}</p>
        <p>Email: {email}</p>
      </div>
      <div>
        <address>
          <span>{address.region}</span>
          <span>{address.zip}</span>
        </address>
      </div>
      <div>
        <ul>
          {cars.length > 0 ? (
            cars.map((car, index) => (
              <li className="p2" key={index}>
                {car}
              </li>
            ))
          ) : (
            <li className="p2">Undefined Car</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default UserList;
