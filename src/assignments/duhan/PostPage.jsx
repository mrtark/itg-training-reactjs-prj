import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import axios from 'axios';

function PostPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const add = () => {
    if (name && description) {
      let newCategory = {
        name: name,
        description: description
      };

      axios.post('https://northwind.vercel.app/api/categories', newCategory)
        .then(res => {
          alert("Başaralı Bir Şekilde Eklenmiştir");
        })
        .catch(err => {
          console.log("hata var");
          alert("Bir Sorun Myedana geldi");
        });
    } else {
      alert('Lütfen isim ve açıklama giriniz.');
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField 
            fullWidth
            label="İsim"
            variant="outlined"
            value={name} 
            onChange={handleNameChange} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            fullWidth
            label="Açıklama" 
            variant="outlined"
            value={description} 
            onChange={handleDescriptionChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={add}>
            Ekle
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default PostPage;
