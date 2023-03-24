import React from 'react';
import { Col, Card} from 'react-bootstrap';

const Movie = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
      <Col md={3} className="mb-4 d-flex justify-content-center">
        <div onClick={() => selectMovie(movie)} className={"movie"}>
          {/* <div className="movie-title">
                {movie.poster_path &&
                <img src={IMAGE_PATH + movie.poster_path} alt={movie.title}/>
                }
                <div className={"flex between movie-infos"}>
                    <h5 className={"movie-title"}>{movie.title}</h5>
                    {movie.vote_average ? <span className={"movie-voting"}>{movie.vote_average}</span> : null}
                </div>
            </div> */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={IMAGE_PATH + movie.poster_path}
              alt={movie.title}
            />
            <Card.Body className="card-body">
              <Card.Title style={{ height: 55 }}>{movie.title}</Card.Title>
              <Card.Text>
                Release : <span>{movie.release_date}</span>
                  <span className="rate btn">Watch Trailer</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
    );
};


export default Movie;