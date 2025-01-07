'use client';

import React, { useEffect, useState, useCallback } from 'react';
import ListForm from '@/components/forms/ListForm';
import { getLists } from '../api/listData';

import ListCard from '../components/Card';

function Home() {
  const [lists, setLists] = useState([]);

  // Memoize getAllLists function
  const getAllLists = useCallback(() => {
    getLists().then(setLists);
  }, []);

  // Effect now includes getAllLists in dependencies
  useEffect(() => {
    getAllLists();
  }, [getAllLists]);

  return (
    <div className="container mx-auto p-4">
      <ListForm obj={{}} onUpdate={getAllLists} />

      {lists.map((list) => (
        <ListCard key={lists.firebaseKey} listObj={list} onUpdate={getAllLists} />
      ))}

      <ListCard key={lists.firebaseKey} listObj={lists} onUpdate={getAllLists} />
    </div>
  );
}

export default Home;
