import React, { useState, useEffect } from "react";
import "../styles/UserOrders.scss";
import axios from "axios";
import { Card } from "antd"; // Import the Card component
import { CiUser } from "react-icons/ci";

import { Divider, Flex, Tag } from "antd";

const UserOrders = () => {
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
        console.log(response);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <div style={{ marginTop: "50px", minHeight: "35vh" }}>
        {user ? (
          <div>
            <Divider>
              <Flex>
                <p style={{ padding: "0px 0px 0px 20px" }}>
                  <strong style={{ display: "flex", alignItems: "center" }}>
                    <CiUser /> {user.firstName} {user.lastName}
                  </strong>
                </p>
              </Flex>
            </Divider>
            <Divider>
              <p style={{ padding: "0px 0px 10px 20px" }}>
                <strong>{user.email}</strong>
              </p>
            </Divider>
            <Divider>
              {user.orders && user.orders.length > 0
                ? "ჩემი შეკვეთები"
                : "თქვენ არ გაქვთ აქტიური შეკვეთა"}
            </Divider>
            <div className="orders-container">
              {user.orders.map((order, index) => (
                <div key={index} className="order-card">
                  <Card
                    title={order.category}
                    bordered={false}
                    style={{ width: 400 }}
                  >
                    <p>
                      <Tag color="success" className="aqtiuri">
                        აქტიური
                      </Tag>
                    </p>
                    <p>
                      <strong>დამკვეთი:</strong> {order.firstName} {""}
                      {order.lastName}
                    </p>
                    <p>
                      <strong>ტელეფონის ნომერი:</strong> {order.phoneNumber}
                    </p>
                    <p>
                      <strong>დასუფთავების თარიღი:</strong> {order.date}
                    </p>
                    <p>
                      <strong>დასუფთავების დრო:</strong> {order.time}
                    </p>
                    {order.quantity && (
                      <p>
                        <strong>ბინის ფართობი:</strong> {order.quantity}
                      </p>
                    )}
                    {order.price && (
                      <p>
                        <strong> დასუფთავების საფასური:</strong> {order.price}{" "}
                        ლარი
                      </p>
                    )}
                    <p>
                      <strong> შეკვეთის ნომერი: </strong>
                      <span style={{ color: "rgb(241, 79, 29)" }}>
                        {order.orderNo}
                      </span>
                    </p>
                    {order.services &&
                      order.services.map((service, index) => (
                        <p key={index}>
                          <strong className="list">სერივსი:</strong>
                          {service}
                        </p>
                      ))}
                    <p>
                      <strong>მისამართი: </strong>
                      {order.address}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default UserOrders;
