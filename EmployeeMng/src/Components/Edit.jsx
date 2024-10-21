import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { editApi } from "../Services/allApis";

function Edit({employee,state}) {
    const [show, setShow] = useState(false);
    const [data,setData]=useState({
        firstname: "",
        lastname: "",
        age: "",
        qualification: "",
        email: ""
    })

    const handleClose = () => setShow(false);
    const handleShow = () =>{
         setShow(true);
        setData(employee)
    }

  const handleEditEmp = async (id,data) => {
    const res = await editApi(id, data);
    if(res.status==200){
        console.log(res);
        toast.success("Employee details updated!!")
        handleClose()
        state(res)
    }
  };

  return (
    <>
      <button
        className="btn p-0"
        onClick={
            handleShow}>
        <i className="fa-solid fa-pen-to-square" style={{ color: "#0065b3" }} />
      </button>


      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FloatingLabel
              controlId="fname"
              label="First Name"
              className="mb-2">
              <Form.Control type="text" value={data?.firstname} onChange={(e) => {
                setData({ ...data, firstname: e.target.value });
              }} placeholder="Firstname" />
            </FloatingLabel>

            <FloatingLabel
              controlId="lname"
              label="Last Name"
              className="mb-2"
            >
              <Form.Control type="text" value={data?.lastname} onChange={(e) => {
                setData({ ...data, lastname: e.target.value });
              }} placeholder="Lastname" />
            </FloatingLabel>

            <FloatingLabel
              controlId="age"
              label="Age"
              className="mb-2">
              <Form.Control type="number" value={data?.age} onChange={(e) => {
                setData({ ...data, age: e.target.value });
              }} placeholder="age" />
            </FloatingLabel>

            <FloatingLabel
              controlId="qualification"
              label="Qualification"
              className="mb-2">
              <Form.Control type="text" value={data?.qualification} onChange={(e) => {
                setData({ ...data, qualification: e.target.value });
              }} placeholder="qualification" />
            </FloatingLabel>

            <FloatingLabel
              controlId="email"
              label="email"
              className="mb-2">
              <Form.Control type="email" value={data?.email} onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }} placeholder="email" />
            </FloatingLabel>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handleEditEmp(data._id,data)}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>

      
    </>
  );
}

export default Edit;
