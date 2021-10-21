import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { RiArrowGoBackLine } from "react-icons/ri";

const NewProduct = () => {
  return (
    <div className="new-product">
      <div className="new-product-wrapper">
        <header className="head">
          <Link to="/products/">
            <span className="back">
              <RiArrowGoBackLine className="icon" /> back to products
            </span>
          </Link>
          <h1 className="heading">new product</h1>
        </header>

        <form className="myform">
          <div className="top">
            <div className="upload">
              <img
                src="https://images.pexels.com/photos/5088450/pexels-photo-5088450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="image"
              />

              <label htmlFor="file">
                <FiUpload classname="icon" />
              </label>
              <input id="file" type="file" />
            </div>

            <div className="item">
              <label htmlFor="pname"> product name </label>
              <input type="text" name="pname" className="pname" />
            </div>

            <div className="item">
              <label htmlFor="desc"> description </label>
              <input type="text" name="desc" className="desc" />
            </div>

            <div className="item">
              <label htmlFor="stock"> quantity in stock </label>
              <input type="number" name="stock" className="stock" />
            </div>

            <div className="item">
              <label htmlFor="price"> price </label>
              <input type="number" name="price" className="price" />
            </div>

            <div className="item avail">
              <input type="radio" name="in" className="address" />
              <label htmlFor="in"> in stock </label>
              <input type="radio" name="out" className="address" />
              <label htmlFor="out"> out of stock </label>
            </div>

            <button type="submit" className="update-btn">
              add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
