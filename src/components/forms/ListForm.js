import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/compat/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { updateList, createList } from '../../api/listData';

const initialState = {
  task: '',
  firebaseKey: '',
};

function ListForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    } else {
      setFormInput(initialState);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      const updatedList = {
        id: obj.firebaseKey,
        task: formInput.task,
      };
      updateList(updatedList).then(() => router.push('/'));
    } else {
      const payload = formInput.label;
      createList(payload).then(() => {
        setFormInput(initialState);
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Task</h2>

      {/* Task INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Task" className="mb-3">
        <Form.Control type="text" placeholder="Enter New Task" name="task" value={formInput.task} onChange={handleChange} required />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit" className="copy-btn">
        {obj.firebaseKey ? 'Update' : 'Add'} Task{' '}
      </Button>
    </Form>
  );
}

ListForm.propTypes = {
  obj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    task: PropTypes.string,
  }),
};

ListForm.defaultProps = {
  obj: initialState,
};

export default ListForm;
