import React, { useState, useEffect } from "react";
import axios from "axios";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Loading from "../Components/Loading/Loading";
import "./NewJourney.css";

const NewJourney = () => {
  const user = localStorage.getItem("userId");
  const [previewSrc, setPreviewSrc] = useState(null);
  const [formAdd, setFormAddTrip] = useState({
    title: "",
    description: "",
    journeyImg: "",
    jnUserId: user,
  });
  const [error, setError] = useState("");
  const { title, description, journeyImg, jnUserId } = formAdd;

  const handleOnChange = (event, editor) => {
    const data = editor.getData();
    setFormAddTrip({
      ...formAdd,
      description: data,
    });
  };

  const handleChange = (event) => {
    const updateForm = { ...formAdd };
    updateForm[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setFormAddTrip(updateForm);
  };
  const onChangeFileImage = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = () => {
      setPreviewSrc([reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const AddTour = async () => {
    let fd = new FormData();

    fd.append("title", title);
    fd.append("description", description);
    fd.append("journeyImg", journeyImg);
    fd.append("jnUserId", jnUserId);

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
      {error && (
        <div className="my-3 alert alert-danger text-center">{error}</div>
      )}
      {/* {isLoading ? (
        <h1>Loading...</h1>
      ) : ( */}
      <div className="form-journey">
        <form formAdd={formAdd} enctype="multipart/form-data">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              placeholder="Set you title here."
              className="form-control"
              value={formAdd.title}
              name="title"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div class="input-group mb-3">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
                name="journeyImg"
                onChange={(event) => {
                  handleChange(event);
                  onChangeFileImage(event);
                }}
              />
              <label
                class="custom-file-label"
                for="inputGroupFile01"
                style={{ fontSize: 15 }}
              >
                Choose Thumbnail
              </label>
            </div>
          </div>
          {/* <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                name="journeyImg"
                onChange={(event) => {
                  handleChange(event);
                  onChangeFileImage(event);
                }}
              />
            </div>
          </div> */}
          <div style={{ marginTop: "10px" }}>
            <img src={previewSrc} className="preview-film" alt="" width="400" />
          </div>
          <div className="editor">
            <CKEditor
              editor={ClassicEditor}
              value={formAdd.description}
              onInit={(editor) => {
                // You can store the "editor" and use when it is needed.
                //   console.log("Editor is ready to use!", editor);
              }}
              onChange={handleOnChange}
              config={{
                ckfinder: {
                  uploadUrl: "http://localhost:5001/uploads",
                },
              }}
            />
          </div>
          <div className="post">
            <button className="btn btn-primary" type="submit" onClick={AddTour}>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewJourney;
