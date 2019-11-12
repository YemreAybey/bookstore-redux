import React from "react";
import Form from "../components/Form";

const CATEGORIES = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi"
];

class BooksForm extends React.Component {
  render() {
    return <Form options={CATEGORIES} />;
  }
}
export default BooksForm;
