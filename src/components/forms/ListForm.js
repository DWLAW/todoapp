'use client';

import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createList, updateList } from '../../api/listData';

const initialState = {
  task: '',
};

function ListForm({ obj, onUpdate }) {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  // sets progress state to an empty array
  // const router = useRouter();

  const handleChange = (e) => {
    // function designed to update form input state whenever a form value changes.
    const { name, value } = e.target; // destructures name and value of input feild from event object
    setFormInput((prevState) => ({
      // updates form input state and updates specific field with new value
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateList(formInput).then(() => onUpdate());
    } else {
      const payload = { ...formInput, uid: user.uid };
      createList(payload)
        .then((response) => {
          // Get the Firebase key from the response
          const firebaseKey = response.name;
          // Update the list with the Firebase key
          return updateList({ ...payload, firebaseKey });
        })
        .then(() => {
          //         onUpdate();
          setFormInput(initialState); // Reset form
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="floatingInput2" className="mb-3">
        <Form.Label> Things To Do:</Form.Label>
        <Form.Control className="height50" type="text" placeholder="Enter New Task" name="task" value={formInput.task} onChange={handleChange} required />
      </Form.Group>
      <Button type="submit" className="copy-btn">
        {obj.firebaseKey ? 'Update' : 'Create'} List
      </Button>
    </Form>
  );
}

ListForm.propTypes = {
  obj: PropTypes.shape({
    // defines the structure of the prop
    task: PropTypes.string.isRequired,
    firebaseKey: PropTypes.string.isRequired,
  }),
  onUpdate: PropTypes.func.isRequired,
};

ListForm.defaultProps = {
  // provides default values for properties
  obj: initialState,
};

export default ListForm;
