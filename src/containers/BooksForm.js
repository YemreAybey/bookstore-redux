import React from 'react';
import Form from '../components/Form';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const handleFormSubmit = ({ text, selectedOption }) => {
  const book = {
    title: text,
    category: selectedOption,
  };

  // Dispatch action to add book here
  console.log(book);
};

const BooksForm = () => (
  <Form
    placeholder="Book Title"
    options={CATEGORIES}
    submitHandler={handleFormSubmit}
  />
);

export default BooksForm;
