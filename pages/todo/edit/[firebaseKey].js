// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import ToDoForm from '../../../src/components/ToDoForm';
// // eslint-disable-next-line import/extensions
// import { getSingleToDo } from '../../../src/api/toDoData,js';

// export default function EditToDo() {
//   const [editItem, setEditItem] = useState({});
//   const router = useRouter();
//   // TODO: grab the firebasekey
//   const { firebaseKey } = router.query;

//   // TODO: make a call to the API to get the book data
//   useEffect(() => {
//     getSingleToDo(firebaseKey).then(setEditItem);
//   }, [firebaseKey]);

//   // TODO: pass object to form
//   return (<ToDoForm obj={editItem} />);
// }
