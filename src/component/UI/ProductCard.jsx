import "../../styles/product-card.css";
import { motion } from "framer-motion";
// import productImg from "../../assets/images/arm-chair-01.jpg";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";     // محبورين نحطه بخليني اصل الي الستوري الريداكس    useDispatch
import { cartActions } from "../../redux/slices/cartSlices";// مجبورين نحطه استيراد اوامر الاحداث من سلايس كارت

import { toast } from 'react-toastify';      //استيراد مكتبة التنبيهات

const ProductCard = ({ product}) => {                      //استيراد المنتج من صفحة المنتجات
const dispatch = useDispatch();               //بخليني اصل الي الستوري من عناصر الرياكت وتغير الحالة للستيت 
        //هذه المعطيات للمنتجات يتم ارسالها الي action.payload
const addToCart = () => {                                    //عملنا فانكش اضافة للسلة لننفذه ع كبسة الزائد
  dispatch(
    cartActions.addItem({             //اضافة عنصر للسلة ومعلومات المنتج نستطيع نضع برودكت فقط ويجلب كل شئ 
      id: product.id, 
      productName: product.productName,                  //اسم المنتج
      imgUrl: product.imgUrl,                            //رابط الصورة
      price: product.price,                             //سعر المنتج
    })
  );

  toast.success("تمت الاضافة للسلة");                        // رسالة تنبيهات عند نجاح الاضافة للسلة  
};
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
     <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}> {/*ينفذ الفانكشن عند الضغط على الزائد */}
{/*من الاخر عند الضغط ع الزايد بضيف المنتج ومعلوماته في مصفوفة initialState مصفوفه الفارغة*/}
{/* طبعا عند الاضافه ع المصفوفه الفارغه غير مر ئيه تبقى في ذاكرة المتصفح او الرام*/}

            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>

      {/* <ToastContainer /> مكان ظهور التنبيهات */} {/* >>يوجد طريقة تانية >> index */}
    </Col>
  );
};

export default ProductCard;
