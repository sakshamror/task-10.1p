import React, { useState } from "react";
import './Newsletter.css'

import { Button, Form } from 'semantic-ui-react'

function Newsletter() {
  const [mail, setMail] = useState('');

  const saksham = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:5050/saksham', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(mail)}`,
      });

      if (response.status === 200) {
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className="f">
      <Form onSubmit={saksham}>
        <label>Sign UP</label>
        <input type="email" placeholder="EMAIL" value={mail} onChange={(e) => setMail(e.target.value)} />

        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Newsletter;
