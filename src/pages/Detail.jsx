import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/detail.css";
import loadingGif from "../assets/loading2.gif";

const Detail = () => {
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); //string
  const api_key = "33816408-5b7dcad5178683d299817339a";
  //!   const api_key = process.env.REACT_APP_API_KEY;

  const url = `https://pixabay.com/api/?key=${api_key}&image_type=photo&lang=en&id=${id}`;

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="text-center mt-4">
      {loading ? (
        <div className="loading-gif">
          <img src={loadingGif} alt="loading" />
        </div>
      ) : (
        <>
          <img className="user-img" src={image[0]?.userImageURL} alt="user" />

          <br />
          <div className="buttons">
            <Link to={-1} className="btn-back">
              <i className="fas fa-regular fa-circle-left me-1"></i>
              Back to Images
            </Link>
            <a
              title={`Go ${image[0]?.user} Profile`}
              href={`https://pixabay.com/tr/users/${image[0]?.user}-${image[0]?.user_id}/`}
              target="_blank"
              className="user-link"
            >
              Go to profile
              <i className="fas fa-regular fa-circle-right ms-1"></i>
            </a>
          </div>

          <br />
          <br />
          <div className="image-url">
            <img src={image[0]?.largeImageURL} alt="detail" />
            <div className="download-img">
              <a
                className="btn btn-outline"
                href={image[0]?.largeImageURL}
                download={image[0]?.largeImageURL}
                target="_blank"
              >
                Download
                <i className="fas fa-thin fa-cloud-arrow-down ms-2"></i>
              </a>
            </div>
          </div>
          <div className="bg-light mt-4 p-5">
            <div className="row w-50 mx-auto">
              <div className="col-sm-12 col-md-6">
                <h6 className="detail-title">Tags</h6>
                <p>{image[0]?.tags}</p>
              </div>
              <div className="col-sm-12 col-md-6">
                <h6 className="detail-title">Size</h6>
                <p>
                  {image[0]?.webformatHeight} x {image[0]?.webformatWidth}
                </p>
              </div>
            </div>

            <div className="row w-50 mx-auto align-items-center-justify-content-evenly text-center">
              <div className="col-sm-12 col-md-6">
                <h6 className="detail-title">Like</h6>
                <p> {image[0]?.likes} </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <h6 className="detail-title">Comment</h6>
                <p> {image[0]?.comments} </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <h6 className="detail-title">View</h6>
                <p> {image[0]?.views} </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <h6 className="detail-title">Download</h6>
                <p> {image[0]?.downloads} </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
