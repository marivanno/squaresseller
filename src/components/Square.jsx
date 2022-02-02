import React from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import useGetBrightness from '../hooks/useGetBringhtness.jsx';

const Square = ({ props }) => {
  const { square, handleClickOpen } = props;
  const { color, salesStatus, numer } = square;

  const typeForStamp = useGetBrightness(color);
  const classesForNumer = cn('mt-0', 'mb-0', { 'text-light': typeForStamp === 'dark' });
  const classesForSquare = cn('col-1', 'square', { sold: salesStatus === 'stamp-sold' });
  const classesForStamp = cn('fs-6', `${`${salesStatus}-${typeForStamp}`}`, 'fw-bold');

  return (
    <Col onClick={handleClickOpen} className={classesForSquare} style={{ backgroundColor: color }}>
      <div className="hidden">
        <p className={classesForNumer}>{numer}</p>
        <p className={classesForStamp}>
          {
        salesStatus === 'stamp-sold' ? 'sold' : 'sale'
        }
        </p>
      </div>
    </Col>
  );
};

export default Square;
