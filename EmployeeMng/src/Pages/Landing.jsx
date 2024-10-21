import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='container-fluid mb-5'>
        <Row className="align-items-center" style={{ height: "83vh"}}>
          <Col>
            <div className='shadow p-4 m-4'>
              <h1><i className="fa-duotone fa-solid fa-users-between-lines" style={{color: "#00b303",}} />{" "}
              Employee manager</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores dolorem distinctio voluptates nemo! Suscipit sunt cumque a exercitationem eius quibusdam fuga dignissimos, architecto voluptas molestiae ipsam, reprehenderit beatae sed?</p>
              <Link to={'/home'} className='btn btn-success form-control' >Start..</Link>
            </div>
          </Col>
          <Col>
            <img src="https://thumbs.dreamstime.com/b/business-team-employees-vector-illustration-76012027.jpg" alt="" />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing