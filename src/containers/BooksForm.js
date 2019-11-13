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

const handleFormSubmit = () => {
};

const BooksForm = () => (
  <Form
    placeholder="Book Title"
    options={CATEGORIES}
    submitHandler={handleFormSubmit}
  />
);

export default BooksForm;
