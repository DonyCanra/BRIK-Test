import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/actions/thunks";
import CategoryRaw from "./CategoryRaw";

export default function TableMenu() {
  const { categories } = useSelector((state) => {
    // console.log(state);
    return state.categories;
  });

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCategory());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    <div
      style={{
        fontSize: 14,
        textAlign: "center",
      }}
    >
      Loading...
    </div>;
  } else {
    return (
      <>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Categories</h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">#</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Category</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Total Product</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
                          <th className="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories?.map((category, index) => {
                          return <CategoryRaw key={index} category={category} index={index} />;
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
