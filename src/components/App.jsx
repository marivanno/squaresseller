import React, { useEffect } from 'react';
import _ from 'lodash';
import {
  Container, Row, Nav,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './Navbar.jsx';
import Square from './Square.jsx';
import ModalWindow from './ModalWondows.jsx';

import { toOpenWindow as toCloseWindows, toOpenWindow } from '../slices/modal.js';
import { fetchSquares, toChangeCurrentSquare } from '../slices/squareList.js';
import { fetchColorList } from '../slices/popularColors.js';

const App = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const { squares } = useSelector((state) => state.squareList);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSquares());
    dispatch(fetchColorList());
  }, []);

  const handleClickOpen = (id) => () => {
    dispatch(toOpenWindow());
    dispatch(toChangeCurrentSquare(id));
  };

  return (
    <Container fluid className="d-flex justify-content-between flex-column h-100 px-0 py-0">
      <Navbar />
      <Container className="d-flex justify-content-top flex-column px-3">
        <Row className="h-100 py-4 px-3 main-box justify-content-center align-content-start">
          {
            squares.map((square, k) => {
              const id = _.uniqueId();
              return (
                <Square
                  key={id}
                  props={{ square, handleClickOpen: handleClickOpen(k + 1) }}
                />
              );
            })
          }
        </Row>
      </Container>
      <Nav className="shadow-lg navbar navbar-light bg-white z-index-0">
        <Container className="justify-content-center">
          <a className="navbar-brand" to="/"> © Shadrin Ivan</a>
        </Container>
      </Nav>
      <ModalWindow props={{ isOpen, toCloseWindows }} />
    </Container>
  );
};

export default App;
