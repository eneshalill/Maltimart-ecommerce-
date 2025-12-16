import React from "react";
import "../styles/cart.css";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux"; // تستخدم لجلب بيانات من مستودع الريداكس
import { cartActions } from "../redux/slices/cartSlices";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {



  //جيب كل البيانات من ريداكس ودور ع بيانات مضافة للكرت وخذنها بلكرت ايتم
  //cartItems ضروري نمررها ضمن ماب لاستخراج تفاصيل كل منتج من المضاف للسلة للزبون
  const cartItems = useSelector((state) => state.cart.cartItems); //هات كل منتجات المضافة للسله وخزنهم  بلكرت ايتيم هكذا شكل الكودمع يوس سليكتر دوما
 const totalAmount = useSelector((state) => state.cart.totalAmount); //هنا نجيب المبلغ الاجمالي من السلة ونخزنه في متغير توتال امونت
 
//  const {cartItems,totalAmount} = useSelector((state) => state.cart);     هذه طريقة مختصر للتنين الفوق

 //تفعيل زر الحذف في الكرت
  const dispatch = useDispatch();               //هو جاهز بخليني اصل الي المخزن من عناصر الرياكت وتغير الحالة للستيت نستدعيه كفانكشن في كل مرة   
  const deleteFromCart = (id) => {                                    //عملنا فانكش اضافة للسلة لننفذه ع كبسة الزائد
    dispatch(cartActions.deleteItem(id));          //اضافة عنصر للسلة ومعلومات المنتج نستطيع نضع برودكت فقط ويجلب كل شئ 
    toast.success("Product delete from cart");                        // رسالة تنبيهات عند نجاح الاضافة للسلة  
  };


  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />    {/*هذا كمبوننت مشترك عند صفحتي شوب والكرت هو صورة بالمنتصف */}
     
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length ? (                // يعني اذاالعناصر الموجودة في السله لها عدد او طول يعني لاتساوي صفر منتج نفذ الكود
              // ما اذا لا يوجد عناصر اظهر لنا الرساله في الاسفل ما بعد النقطتين لان اذا كان صفر متنج يعطي خطأ 
                <table className="table border">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th> {/* الكمية*/}
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>           {/* كل عنصر من الكرت ايتيم له مفتاح فريد */}
                        
                
                        <td>
                          <img src={item.imgUrl} alt={item.productName} />
                        </td>
                        <td>{item.productName} </td>
                        <td>$ {item.price}</td>
                        <td> {item.quantity}</td>
                        <td>          {/* زر الحذف */}
                          <motion.i
                            whileTap={{ scale: 1.2 }}                              //اخر درس في راكت 19 بدايته   //عند الضغط على الايقونة ينفذ فانكشن حذف من السلة 
                            class="ri-delete-bin-line" onClick={()=> deleteFromCart(item.id)}  //اجباري وضعنا الاقواس لان تحتاج وسيط لتمريره عند حذف
                          ></motion.i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h2 className="fs-4 text-center" >No items added to the cart</h2>            //اذا مافي اي منتج مضاف للسلة اظهر هذه الرسالة
              )}

            </Col>
            <Col lg="3">
          <div className="d-flex align-items-center justify-content-between">
            <h6>subtotal  </h6>     {/* قسم جمع سعر كل المنتجات  */}
            <span className="fs-4 fw-bold">${totalAmount}</span>
          </div>
          <p className="fs-6 mt-2">Taxes and shipping will be calculated in checkout</p>  {/*رسالة توضيحية للزبون ان الضرائب والشحن تحسب عند الدفع*/}

<div>   
  
    
  {/* زر الدفع والخروج */}
  <button className="buy_btn w-100 ">
    <Link to = "/checkout"> Checkout</Link>
  </button>
  
    {/* زر متابعة التسوق والعودة لصفحة الشوب */}
  <button className="buy_btn w-100 mt-3">
    <Link to ="/shop">continue shopping</Link>
  </button>


</div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
