import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postCategory } from "../store/actions/thunks";

export default function FormCategory() {
  const [input, setInput] = useState({
    imgUrl: "",
    name: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePostCategory = (event) => {
    event.preventDefault();
    dispatch(postCategory(input));
    navigate("/category");
  };

  return (
    <>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-category-section">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-6">Form Add Category</h1>
          {/* <h1 className="display-6">{{ page === "EditCategory" ? "Edit Category" : "Add Category" }}</h1> */}
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <form onSubmit={handlePostCategory} id="category-form">
              <div className="mb-3">
                <label htmlFor="category-name">
                  Name <span className="text-danger fw-bold">*</span>
                </label>
                <input value={input.name} onChange={handleChange} name="name" type="text" className="form-control" id="category-name" placeholder="Enter category name" />
              </div>
              <div className="mb-3">
                <label htmlFor="category-name">
                  imgUrl <span className="text-danger fw-bold">*</span>
                </label>
                <input value={input.imgUrl} onChange={handleChange} name="imgUrl" type="text" className="form-control" id="category-name" placeholder="Enter category image" />
              </div>
              <div className="row mt-5 mb-3">
                <div className="col-6">
                  <a className="btn btn-lg btn-outline-dark rounded-pill w-100 p-2" href="">
                    Cancel
                  </a>
                </div>
                <div className="col-6">
                  <button className="btn btn-lg btn-info rounded-pill w-100 p-2" type="submit" href="">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
