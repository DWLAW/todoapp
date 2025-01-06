// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import { Button } from 'bootstrap';
// import { updateToDo, createToDo } from "../api/toDoData,js";

// const initialState = {
//   todo: '',
// };

// function ToDoForm({obj}) {

//   const [formInput, setFormInput] = useState(initialState);
//   const router = useRouter();

//   useEffect(() => {

//     if (obj.firebaseKey) setFormInput(obj);

//   }, [obj]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (obj.firebaseKey) {

//       updateToDo(formInput).then(() => router.push(`/`));
//     } else {
//       const payload = { ...formInput };
//       createToDo(payload).then(({ name }) => {
//         const patchPayload = { firebaseKey: name };
//         updateToDo(patchPayload).then(() => {
//           router.push(`/`);
//         });
//       });
//     }
//   };
//   return (
//     <Form onSubmit={handleSubmit}>
//       <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} ToDoList</h2>
//       <FloatingLabel controlId="floatingInput1" label="ToDos" className="mb-3">
//         <Form.Control
//           type="text"
//           name="todo"
//           id="todo"
//           value={formInput.todo}
//           placeholder="Write your next task"
//           onChange={handleChange}
//           required
//         />
//       </FloatingLabel>
//       <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} ToDos</Button>
//     </Form>
//   );
// }

// ToDoForm.propTypes = {
//   obj : PropTypes.shape({
//     todo: PropTypes.string,
//     firebaseKey: PropTypes.string,
//   }),
// };
// ToDoForm.defaultProps = {
//   obj :initialState,
// };

// export default ToDoForm;
