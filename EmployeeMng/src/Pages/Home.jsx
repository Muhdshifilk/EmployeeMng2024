import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { addEmpApi, delEmpApi,getEmpApi } from "../Services/allApis";
import Edit from "../Components/Edit";

function Home() {
  const [show, setShow] = useState(false);
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    age: "",
    qualification: "",
    email: ""
  });
  const [emp,setEmp] = useState([])
  const [edit,setEdit]=useState([])

  useEffect(()=>{
    handleGetEmp()
  },[edit])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAddEmp = async () => {
    const { firstname, lastname, age, qualification, email } = employee;
    if (!firstname || !lastname || !age || !qualification || !email) {
      toast.warning("Enter Valid Inputs!!");
    } else {
      const res = await addEmpApi(employee);
      if (res.status == 200) {
        toast.success("Employee Added");
        handleClose();
        setEmployee(res);
        handleGetEmp()
      }else{
        toast.error("Upload failed")
      }
    }
  };


  const handleGetEmp = async () => {
    const result = await getEmpApi();
    if (result.status == 200) {
      console.log(result.data);
      setEmp(result.data);
    } else {
      console.log("result");
    }
  };


  const handleDelEmp=async(id)=>{
    const del=await delEmpApi(id)
    console.log(del)
    if(del.status==200){
      handleGetEmp()
      toast.success("Member Deleted!!")
    }
  }


  return (
    <>
      <h2 className="ms-5 mt-4">Employees</h2>
      <h1
        className="btn border shadow p-2 text-success bg-primary"
        onClick={handleShow}
        style={{ position: "fixed", bottom: "40px", right: "40px" }}
      >
        Add Member{" "}
        <i
          className="fa-solid fa-user-plus fa-xl"
          style={{ color: "#00e09d" }}
        />
      </h1>
      <div style={{minHeight: "92vh" }}>
        <div className="m-5">
          {emp.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Qualification</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {emp?.map((item,index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.age}</td>
                    <td>{item.qualification}</td>
                    <td>{item.email}</td>
                    <td className="text-center d-flex justify-content-around">
                      <button className="btn p-0" onClick={()=>{handleDelEmp(item._id)}}>
                        <i
                          className="fa-solid fa-trash-can"
                          style={{ color: "#e60505" }}
                        />
                      </button>
                      <Edit employee={item} state={setEdit}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <h1 className="text-warning">Still No Employee Added!!</h1>
          )}
        </div>

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
              className="mb-2"
              onChange={(e) => {
                setEmployee({ ...employee, firstname: e.target.value });
              }}
            >
              <Form.Control type="text" placeholder="Firstname" />
            </FloatingLabel>
            <FloatingLabel
              controlId="lname"
              label="Last Name"
              className="mb-2"
              onChange={(e) => {
                setEmployee({ ...employee, lastname: e.target.value });
              }}
            >
              <Form.Control type="text" placeholder="Lastname" />
            </FloatingLabel>
            <FloatingLabel
              controlId="age"
              label="Age"
              className="mb-2"
              onChange={(e) => {
                setEmployee({ ...employee, age: e.target.value });
              }}
            >
              <Form.Control type="number" placeholder="age" />
            </FloatingLabel>
            <FloatingLabel
              controlId="qualification"
              label="Qualification"
              className="mb-2"
              onChange={(e) => {
                setEmployee({ ...employee, qualification: e.target.value });
              }}
            >
              <Form.Control type="text" placeholder="qualification" />
            </FloatingLabel>
            <FloatingLabel
              controlId="email"
              label="email"
              className="mb-2"
              onChange={(e) => {
                setEmployee({ ...employee, email: e.target.value });
              }}
            >
              <Form.Control type="email" placeholder="email" />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddEmp}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Home;
