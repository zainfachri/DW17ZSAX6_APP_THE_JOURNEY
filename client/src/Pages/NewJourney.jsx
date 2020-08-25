import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

import ReactHtmlParser from "react-html-parser";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./NewJourney.css";

const NewJourney = () => {
  const user = localStorage.getItem("userId");
  //   const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [previewSrc, setPreviewSrc] = useState(null);
  const [formAdd, setAddJourney] = useState({
    title: "",
    description: "",
    journeyImg: "",
    jnUserId: user,
  });

  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setAddJourney({
      ...formAdd,
      description: data,
    });
  };
  const handleChange = (event) => {
    setAddJourney({
      ...formAdd,
      [event.target.name]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const onChangeFileImage = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = () => {
      setPreviewSrc([reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const addJourney = async (event) => {
    event.preventDefault();
    let fd = new FormData();

    fd.append("title", formAdd.title);
    fd.append("description", formAdd.description);
    fd.append("journeyImg", formAdd.journeyImg);
    fd.append("jnUserId", formAdd.jnUserId);
    try {
      const res = await axios.post("http://localhost:5001/api/v1/journey", fd);
      window.location.reload();
    } catch (err) {
      const resError = err.response.data.error.message;
      setError(resError);
      console.log(err);
    }
  };
  return (
    <div className="main">
      <h1>New Journey</h1>
      {/* {isLoading ? (
        <h1>Loading...</h1>
      ) : ( */}
      <div className="form-journey">
        <form formAdd={formAdd} enctype="multipart/form-data">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <div class="input-group mb-3">
            <input
              type="text"
              placeholder="Set you title here."
              class="form-control"
              value={formAdd.title}
              name="title"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div class="input-group mb-3">
            <div class="custom-file">
              <input
                type="file"
                name="journeyImg"
                onChange={(event) => {
                  handleChange(event);
                  onChangeFileImage(event);
                }}
                onInit={(editor) => {
                  console.log("editor Ready", editor);
                }}
              />
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <img src={previewSrc} className="preview-film" alt="" width="400" />
          </div>
          <div className="editor">
            <CKEditor
              editor={ClassicEditor}
              onChange={handleOnChange}
              value={formAdd.description}
            />
            {/* {ReactHtmlParser(formAdd.description)} */}
          </div>
          <div className="post">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={addJourney}
            >
              Post
            </button>
          </div>
        </form>
      </div>
      {/* )} */}
    </div>
  );
};

export default NewJourney;
