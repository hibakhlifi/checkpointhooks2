import React from "react";
import { Link } from "react-router-dom";
import { Card,Button } from "react-bootstrap";
import ReactPlayer from "react-player";


const Description = (props) => {
  const movie = props.location.state.movie;

  return (
  
      <Card className="text-center">
        <Card.Header>
          {" "}
          <h1>{movie.name}</h1>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <ReactPlayer style={{marginLeft:'28%'}} url={movie.trailer} />
          </Card.Title>
          <Card.Text>
            <div>
              <h3>Description</h3>
              <hr />
              <p>{movie.description}</p>
            </div>
          </Card.Text>
          <Link to="/">
          <Button variant="primary">Go back </Button>
                </Link>
        </Card.Body>
      </Card>
  );
};

export default Description;
