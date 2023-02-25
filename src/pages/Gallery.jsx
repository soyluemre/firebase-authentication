import React, { useContext, useEffect, useState } from "react";
import ImgCard from "../components/ImgCard";
import "../css/img-card.css";
import loadingGif from "../assets/loading2.gif";
import noDataImage from "../assets/no-data.png";
import Pagination from "../components/Pagination";
import { toast } from "react-hot-toast";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [searchImage, setSearchImage] = useState("");
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sonuc, setSonuc] = useState("");
  const { giris } = useContext(LoginContext);
  const navigate = useNavigate();

  const totalPages = 4;
  const startIndex = (page - 1) * 6;
  const selectedData = show.slice(startIndex, startIndex + 6);

  const api_key = "33816408-5b7dcad5178683d299817339a";
  //!   const api_key = process.env.REACT_APP_API_KEY;

  const url = `https://pixabay.com/api/?key=${api_key}&image_type=photo&lang=tr`;
  //!----------------------------------------
  const searchAPI = `https://pixabay.com/api/?key=${api_key}&image_type=photo&lang=tr&q=`;

  const getAPI = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setShow(data.hits);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAPI(url);
  }, [url]);

  const handleClick = (num) => {
    setPage(num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchImage && !giris) {
      toast.error("Sign in to search");
      navigate("/login");
    } else if (!searchImage) {
      toast.error("Please enter a text");
    } else {
      getAPI(searchAPI + searchImage);
      setSearchImage("");
      setSonuc(searchImage);
      setPage(1);
    }
  };

  return (
    <div className="gallery">
      {loading ? (
        <div className="loading-gif">
          <img src={loadingGif} alt="loading" />
        </div>
      ) : (
        <div className="row gallery-row">
          <form onSubmit={handleSubmit}>
            <div className="gallery-form">
              <input
                className="form-control"
                placeholder="Flower, Cat, City..."
                type="text"
                value={searchImage}
                onChange={(e) => setSearchImage(e.target.value)}
              />
              <i
                onClick={handleSubmit}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </div>
          </form>

          <div>
            <Pagination
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              handleClick={handleClick}
            />
          </div>
          {sonuc && (
            <div
              className={
                !loading && show.length === 0
                  ? "d-none"
                  : "text-center text-uppercase"
              }
            >
              images related to{" "}
              <span style={{ color: "#006a6ac0", fontWeight: "bold" }}>
                "{sonuc}"
              </span>
            </div>
          )}

          {!loading && show.length === 0 && (
            <img className="nodata-img" src={noDataImage} alt="nodata" />
          )}
          {selectedData.map((data) => {
            return <ImgCard key={data.id} data={data} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
