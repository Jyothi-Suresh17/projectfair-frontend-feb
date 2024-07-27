import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// for tostify

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProjectApi } from "../services/allApi";

function AddProject() {
  const [show, setShow] = useState(false);

  //for storing project details

  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    projImage: "",
  });

  // console.log(projectDetails);
  //for conversion of file to url in case of image uploading
  const [preview, setPreview] = useState("");

  //state for token taken from session storage
  const[token,settoken]=useState('')


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    handleCancel();
  };

  //for uploading image

  const handleFile = (e) => {
    console.log(e.target.files[0]);

    //to store the above value in our state
    setProjectDetails({ ...projectDetails, projImage: e.target.files[0] });
  };

  useEffect(() => {
    if (projectDetails.projImage) {
      //convert to url ..createObjectURL method is used to convert files into urls this comes from the url library

      setPreview(URL.createObjectURL(projectDetails.projImage));
    }
  }, [projectDetails.projImage]);

  //useeffect for getting token for authentication purpose..only a user who is already logged in should be able to upload or add data

useEffect(()=>{
  if(sessionStorage.getItem("token")){
    settoken(sessionStorage.getItem("token"))
    
  }
},[])
// console.log(token);


  // console.log(preview);

  //for cancel

  const handleCancel = () => {
    setProjectDetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      projImage: "",
    });
    setPreview(""); //so handleCancel has changed the state but it won't be  visible in the the view page and for that we set value attribute for each of the input page value={stateName.stateVariable}
  };

  //to add

  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, language, github, website, overview, projImage } =
      projectDetails;

    if (!title || !language || !github || !website || !overview || !projImage) {
      toast.info("Please fill all the fields");
    } else {
      //api
      //in the case of a state having uploaded content we use FormData() to send it to backend
      //FormData() - in order to send uploaded content use FormData() class

      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      reqBody.append("projImage", projImage);

      //request header

     if(token) {
      const reqHeader={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }

      const result = await addProjectApi(reqBody,reqHeader);

      console.log(result);}

      else{
        toast.error("Please login to add project")
      }
    }
  };

  return (
    <>
      <div className="container container-fluid ">
        <Button variant="success" onClick={handleShow}>
          Add Project
        </Button>

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="text-success">
              {" "}
              Add Project Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={12} md={6}>
                <label htmlFor="projImg">
                  <input
                    id="projImg"
                    type="file"
                    name="projImg"
                    onChange={(e) => handleFile(e)}
                    style={{ display: "none" }}
                  />
                  <img
                    src={
                      preview
                        ? preview
                        : "https://cdn.pixabay.com/photo/2017/05/03/22/08/image-2282302_960_720.png"
                    }
                    className="w-100 img-fluid"
                    alt="no image"
                  />
                </label>
              </Col>
              <Col sm={12} md={6}>
                <input
                  type="text"
                  value={projectDetails.title}
                  className="form-control my-2"
                  placeholder="Project Title"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      title: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={projectDetails.language}
                  className="form-control my-2"
                  placeholder="Language"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      language: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={projectDetails.github}
                  className="form-control my-2"
                  placeholder="Github"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      github: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={projectDetails.website}
                  className="form-control my-2"
                  placeholder="Website"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      website: e.target.value,
                    })
                  }
                />
                <textarea
                  className="form-control my-2"
                  placeholder="Overview"
                  value={projectDetails.overview}
                  rows={"4"}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      overview: e.target.value,
                    })
                  }
                ></textarea>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="success" onClick={(e)=>{handleAdd(e)}}>
              Add Project
            </Button>
          </Modal.Footer>
        </Modal>

        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={2000}
        />
      </div>
    </>
  );
}

export default AddProject;
