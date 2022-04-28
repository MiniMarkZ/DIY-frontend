import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {Container} from '../style/layoutComponent'
import AnimatedPage from './AnimatedPage.js'

function Manage() {
  
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.post('http://localhost:5000/authen', {
            token
          })
          .then(function (response) {
              
            console.log(response)
            if(response.data.status != 'ok'){
                alert('ยังไม่ได้ login')
                window.location = '/login'
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    })
  return (
    <AnimatedPage>
      <Container>
        <h1>จัดการสินค้า</h1>
      </Container>
    </AnimatedPage>
  )
}

export default Manage