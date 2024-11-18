import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    file: null,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <Container style={{ maxWidth: '500px', marginTop: '50px' }}>
      <h2 className="mb-4">Healthcare Dashboard</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="age" className="mt-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="file" className="mt-3">
          <Form.Label>File Upload</Form.Label>
          <Form.Control
            type="file"
            name="file"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {submittedData && (
        <Alert className="mt-4" variant="success">
          <h4>Submitted Data:</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>File Name:</strong> {submittedData.file?.name}</p>
        </Alert>
      )}
    </Container>
  );
};

export default Dashboard;
