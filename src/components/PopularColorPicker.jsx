import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { Container, Col, Row } from 'react-bootstrap';
import { uniqueId } from 'lodash';
import { cooseColor } from '../slices/popularColors.js';

const PopularColorPicker = (props) => {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.popularColors.colorList);
  const { onChange } = props;

  const handleClick = (c, n) => () => {
    onChange(c);
    dispatch(cooseColor(n));
  };
  return (
    <Container className="d-flex justify-content-center my-3">
      <Row className="my-3">
        {
              colors.map((item) => {
                const { color, number, selected } = item;
                const classesForCol = cn('col-1', { square: !selected }, { 'square-without-transformation': selected }, { border: selected, 'border-4': selected, 'border-secondary': selected });
                return (
                  <Col
                    key={uniqueId()}
                    onClick={handleClick(color, number)}
                    className={classesForCol}
                    style={{ backgroundColor: color }}
                  />
                );
              })
          }
      </Row>
    </Container>
  );
};

export default PopularColorPicker;
