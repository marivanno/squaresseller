import React, { useRef } from 'react';
import {
  Modal, Button, Container, Row, Col,
} from 'react-bootstrap';
import { HexColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';

import { toBuySquare, selectCurrentSquare } from '../slices/squareList.js';
import { resetChooseColor } from '../slices/popularColors.js';
import PopularColorPicker from './PopularColorPicker.jsx';

const ModalWindow = ({ props }) => {
  const { isOpen, toCloseWindows } = props;
  const currentSquare = useSelector((state) => selectCurrentSquare(state));
  const tmpColor = useRef('#347f92');
  const dispatch = useDispatch();
  const handleCloseWindows = () => {
    dispatch(toCloseWindows());
    dispatch(resetChooseColor());
  };

  const handleClickBuy = () => {
    const selectedColor = tmpColor.current;
    const buyedSquare = { ...currentSquare, ...{ color: selectedColor } };
    dispatch(toBuySquare(buyedSquare));
    dispatch(toCloseWindows());
    dispatch(resetChooseColor());
  };
  return (
    <Modal show={isOpen} onHide={handleCloseWindows} centered>
      <Modal.Header closeButton>
        <Modal.Title>Do you wonna buy a square?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <p className="fst-italic mb-0 mt-1">Choose color and click buy!</p>
          <PopularColorPicker onChange={(color) => {
            tmpColor.current = color;
            return null;
          }}
          />
          <Row>
            { !currentSquare ? null : (
              <HexColorPicker
                color={currentSquare.color}
                onChange={(color) => {
                  tmpColor.current = color;
                  return null;
                }}
                className="position-relative h-100-p ms-0 w-100"
              />
            )}
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseWindows}>Close</Button>
        <Button variant="primary" onClick={handleClickBuy}>Buy</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;
