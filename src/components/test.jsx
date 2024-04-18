import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Retrieve the JWT token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }

        // Make a GET request to fetch the user data
        const response = await axios.get("http://localhost:3001/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the JWT token in the Authorization header
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>ჩემი შეკვეთები</h1>
      {user ? (
        <div>
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <h2>Orders:</h2>
          <ul>
            {user.orders.map((order, index) => (
              <li key={index}>
                <h3>{order.category}</h3>
                <p>
                  <strong>Name:</strong> {order.firstName} {order.lastName}
                </p>
                <p>
                  <strong>Phone Number:</strong> {order.phoneNumber}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Time:</strong> {order.time}
                </p>
                {order.quantity && (
                  <p>
                    <strong>Quantity:</strong> {order.quantity}
                  </p>
                )}
                {order.price && (
                  <p>
                    <strong>Price:</strong> {order.price}
                  </p>
                )}
                {order.services &&
                  order.services.map((service, index) => (
                    <p key={index}>
                      <strong>Service:</strong> {service}
                    </p>
                  ))}
                <p>
                  <strong>Address:</strong> {order.address}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UsersComponent;
