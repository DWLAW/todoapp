'use client';

import React, { useEffect, useState, useCallback } from 'react';
import ListForm from '@/components/forms/ListForm';
import { getLists } from '../api/listData';
import { useAuth } from '../utils/context/authContext';
import ListCard from '../components/Card';

function Home() {
  const [lists, setLists] = useState([]);
  const { user } = useAuth();

  // Memoize getAllLists function
  const getAllLists = useCallback(() => {
    getLists(user.uid).then(setLists);
  }, [user.uid]);

  // Effect now includes getAllLists in dependencies
  useEffect(() => {
    getAllLists();
  }, [getAllLists]);

  return (
    <div className="container mx-auto p-4">
      <ListForm obj={{}} onUpdate={getAllLists} />
      <div className="flex flex-wrap gap-4 mt-4">{Array.isArray(lists) ? lists.map((list) => <ListCard key={list.firebaseKey} listObj={list} onUpdate={getAllLists} />) : <p>No lists found</p>}</div>
    </div>
  );
}

export default Home;
