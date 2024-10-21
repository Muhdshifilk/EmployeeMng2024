import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-dark container-fluid p-4 pb-0 text-white'>
        <Row>
          <Col sm={12} md={6}>
            <h4>Employee Manager2024</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel iusto cupiditate rem neque laudantium ipsa autem hic iure dignissimos, sequi consequatur, nemo voluptate nihil! Molestias nisi iure officiis voluptates velit.</p>
          </Col>
          <Col sm={12} md={2}>
            <h5>Links</h5>
            <ul>
              <li><Link to={'/'}>Landing</Link></li>
              <li><Link to={'/home'}>Home</Link></li>
            </ul>
          </Col>
          <Col sm={12} md={4}>
            <h4>Feedback</h4>
            <div className='d-flex'>
              <textarea name="" id="" className='form-control'></textarea>
              <button className='btn btn-success ms-2 mt-4'>Submit</button>
            </div>
          </Col>
        </Row>
        <Row className='text-center'>
          <p>Employee Manager2024<small>©</small>All rights reserved</p>
        </Row>
      </div>
    </>
  )
}

export default Footer