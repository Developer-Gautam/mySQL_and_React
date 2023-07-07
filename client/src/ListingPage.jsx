import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListingPage = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get('http://localhost:8800/submission');
      console.log(response.data); // Check the value of response.data
      setSubmissions(response.data || []);
      console.log(submissions); // Check the value of submissions
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/submission/${id}`);
      fetchSubmissions();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Listing Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Country</th>
            <th>Resume</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map(submission => (
            <tr key={submission.id}>
              <td>{submission.name}</td>
              <td>{submission.dob}</td>
              <td>{submission.country}</td>
              <td>
                <a href={submission.resume} target="_blank" rel="noopener noreferrer">
                  View
                </a>
                {' | '}
                <a href={submission.resume} download>
                  Download
                </a>
              </td>
              <td>
                <button onClick={() => handleDelete(submission.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingPage;
