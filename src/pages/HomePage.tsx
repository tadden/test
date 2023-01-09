import React from 'react';
import { useQuery } from 'react-query';
import { getCategories } from '../components/API/Category';
import { Categories } from '../types/Categories';

export default function HomePage() {
  const { status, error, data } = useQuery<Categories[]>(
    ["categories"],
    getCategories,
  );

  return (
    <h1>Hello</h1>
  )
}

