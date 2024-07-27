import { faChevronDown ,faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import profilePic from "../assets/profile.png";
import { Collapse } from "react-bootstrap";

function Profile() {
  // for collapse
  const [open, setOpen] = useState(false);

  return (
    <>
    {/* onMouseEnter={()=>{setOpen(true)}} onMouseLeave={()=>{setOpen(false)}} mouse evnt to open and close a content when the the cursor is in and out of the content div */}
      <div className="container container-fluid shadow rounded text-center">
        <div className="pDiv py-3 d-flex justify-content-between" >
          <h3 className="text-success">Profile</h3>
          <button
            className="btn btn-outline-info"
            onClick={() => setOpen(!open)}
          >
            {!open?<FontAwesomeIcon icon={faChevronDown} />
                    :
            <FontAwesomeIcon icon={faChevronUp} />}
          </button>
        </div>
        <Collapse in={open}>
          <div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <label htmlFor="profileImg">
                <input
                  id="profileImg"
                  type="file"
                  style={{ display: "none" }}
                />
                <img src={profilePic} alt="no image" className="w-50 " />
              </label>
            </div>
            <input
              type="text"
              placeholder="Github"
              className="form-control my-3 "
            />
            <input
              type="text"
              placeholder="Linkedin"
              className="form-control my-3"
            />
            <div className="btnDiv">
              <button className="btn btn-outline-success w-100 mb-3">
                Update
              </button>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Profile;
