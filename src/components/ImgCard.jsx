import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import "../css/img-card.css";

const ImgCard = ({ data }) => {
  const { giris } = useContext(LoginContext);

  const navigate = useNavigate();

  const { largeImageURL, user, likes, downloads, comments, id } = data;

  const detailHandle = () => {
    if (giris) {
      navigate(`/detail/${id}`);
    } else {
      toast.error("Login to see details");
      navigate("/login");
    }
  };

  return (
    <div className="cardd container">
      <img src={largeImageURL} className="img-fluid" alt="img" />
      <div className="card-bodyy">
        <p className="card-titlee mt-4">
          Username: <span className="username">{user}</span>
        </p>
        <div className="icons d-flex justify-content-evenly align-items-center">
          <div className="icon">
            <i className="like-icon fas fa-solid fa-heart"></i>
            <span> {likes}</span>
          </div>
          <div className="icon">
            <i className="download-icon fas fa-thin fa-cloud-arrow-down"></i>
            <span> {downloads}</span>
          </div>
          <div className="icon">
            <i className="comments-icon fas fa-sharp fa-regular fa-comment"></i>
            <span> {comments} </span>
          </div>
        </div>
        <button onClick={detailHandle} className="btn btn-outline btn-detail">
          Details
        </button>
      </div>
    </div>
  );
};

export default ImgCard;
