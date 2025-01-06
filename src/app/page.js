'use client';

import React, { useEffect, useState } from 'react';
import ListForm from '@/components/forms/ListForm';
import { getList } from '../api/listData';
// import { useAuth } from '../utils/context/authContext';
import ListCard from '../components/Card';

function Home() {
  // TODO: Set a state for Profile
  const [lists, setList] = useState([]);

  const getAllLists = () => {
    getList().then(setList);
  };

  useEffect(() => {
    getAllLists();
  }, []);

  return (
    <div>
      <ListForm onSubmit={getAllLists} />

      {lists.map((list) => (
        <ListCard key={list.firebaseKey} listObj={list} onUpdate={getAllLists} />
      ))}
    </div>
  );
}

export default Home;
