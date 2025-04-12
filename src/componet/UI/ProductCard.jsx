import "../../styles/product-card.css";
import { motion } from "framer-motion";
// import productImg from "../../assets/images/arm-chair-01.jpg";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const productCard = ({ product}) => {
  return (
    <Col lg="3" md="4" className="mb-2">   
      <div className="product_item">
        {/* صورة منتج */}
        <div className="product_img">

           {/* رابط بضغط ع صورة يحولنا لصفحة منتجات */}
        <Link to={`/shop/${product.id}`}>     
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={product.imgUrl}
            alt="product"
          />
             </Link >
        </div>

        <div className="p-2 product_info">
          {/* عنوان منتج */}
          <h3 className="product_name">
{/* طريقة1 */}
            {/* <Link to={"/shop/"+product.id}>  {product.productName} */}
            {/* </Link > */}

             {/* idطريقة2 وافضل لذهاب لصفحة منتجات مع  */}
            <Link to={`/shop/${product.id}`}>  {product.productName}
            </Link >

          </h3>
          {/* تصنيف */}
          {/* d-block تعليمة لياخذ كامل عرض اليق ثم نضع كلام بنص */}
          <span>{product.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          {/* سعره */}
          <span className="price">${product.price} </span>
          {/*  +  ايقونة */}
          <motion.span whileTap={{ scale: 1.2 }}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default productCard;
