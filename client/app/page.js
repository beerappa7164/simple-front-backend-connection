
'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [message, setMessage] = useState("Loading")
  
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setMessage(data.message)
        

      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
   <div>
     <div>{message}</div>

   
   </div>
  );
}













