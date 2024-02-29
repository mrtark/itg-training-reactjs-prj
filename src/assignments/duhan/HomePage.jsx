import { Button } from '@mui/material'
//PK: declared but never read //import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
//PK: declared but never read //Duhan: import Home from '../pages/Home'
import DataGridPage from './DataGridPage'
import PostPage from './PostPage'


function HomePage() {

  return (
  <>
    <div style={{ textAlign: 'center' }}>
      <h1>3. Hafta Ödevi</h1>
      <nav>
        <Button variant="contained" component={Link} to="/DataGridPage" style={{ marginRight: '10px' , marginBottom :'20px' }}>
          Veri Tablosu Sayfası
        </Button>
        <Button variant="contained" component={Link} to="/PostPage" style={{ marginBottom :'20px' }}>
          Post Sayfası
        </Button>
      </nav>



      <Routes>
      <Route path="/DataGridPage" element={<DataGridPage/>} />
      <Route path="/PostPage" element={<PostPage/>} />
      </Routes>

    </div>
  
  </>
  )


}

export default HomePage