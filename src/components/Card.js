'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
import { deleteList } from '@/api/listData';

function ListCard({ listObj, onUpdate }) {
  const deleteThisList = () => {
    if (window.confirm(`Delete ${listObj.task}?`)) {
      deleteList(listObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{listObj.task}</Card.Title>

        <Button variant="danger" onClick={deleteThisList} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ListCard.propTypes = {
  listObj: PropTypes.shape({
    task: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ListCard;
