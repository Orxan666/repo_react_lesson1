import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./productitem.scss";
const Product_item = () => {
  const [movies, setMovies] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((x) => x.json())
      .then((response) => setMovies(response));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
        
      {movies.map((item) => (
          <Container>
          <Col lg='12' className="d-flex">
            <h2>{item.name}</h2>
            <h3>{item.username}</h3>
            <p>{item.phone}</p>
          </Col>
          </Container>
   

      ))}
    </section>
  );
};

export default Product_item;
