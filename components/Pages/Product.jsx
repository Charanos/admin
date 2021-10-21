import { Link } from "react-router-dom";
import { IoPricetags } from "react-icons/io5";
import { MdDescription } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FiUpload, FiCheckCircle } from "react-icons/fi";
import { RiArrowGoBackLine, RiSlideshow4Line } from "react-icons/ri";

const Product = () => {
  return (
    <div className="product">
      <div className="product__wrapper">
        <header className="product-head">
          <Link to="/products/">
            <span className="back">
              <RiArrowGoBackLine className="icon" /> back to products
            </span>
          </Link>
          <Link to="/newProduct/">
            <button className="create-btn"> create </button>
          </Link>
        </header>

        <div className="product-container">
          <div className="showcase">
            <div className="top">
              <img
                src="https://images.pexels.com/photos/5088450/pexels-photo-5088450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <div className="title">
                <span className="product-name">camping bag</span>
                <span className="desc">
                  spacious camping bag with amenities
                </span>
              </div>
            </div>

            <div className="bottom">
              <span className="title"> product details </span>
              <div className="info">
                <RiSlideshow4Line className="icon" />
                <span className="details">Brown camping bag </span>
              </div>

              <div className="info">
                <AiOutlineFieldNumber className="icon" />
                <span className="details">2312</span>
              </div>
              <div className="info">
                <FiCheckCircle className="icon" />
                <span className="details">In stock</span>
              </div>
              <div className="info">
                <IoPricetags className="icon" />
                <span className="details">KSH. 8990</span>
              </div>
              <div className="info">
                <MdDescription className="icon" />
                <span className="details">
                  Spacious camping bag with amenities
                </span>
              </div>
            </div>
          </div>

          {/* update  */}
          <div className="update">
            <span className="title">edit</span>

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
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
