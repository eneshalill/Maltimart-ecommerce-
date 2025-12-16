
import"../styles/product-details.css";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/CommonSection";
import ProductList from "../component/UI/ProductsList";

import { useParams } from "react-router-dom";    //  يتم استيراد useParams من مكتبة react-router-dom لجلب معلمات الرابط
import products from "../assets/data/products"; //  يتم استيراد البيانات من ملف المنتجات
import { motion } from "framer-motion"; //  يتم استيراد مكتبة الفريمر موشن لعمل حركات على الزر
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";   //لابد من وجوده لتنفيذ اكشن معين او تغير ستيت موجوده في مستودع ريداكس هنا لاجل التعليق
import { cartActions } from "../redux/slices/cartSlices";
import { toast } from "react-toastify";

const ProductDetails = () => {

  const { id } = useParams();                              //idيستخدم لجلب معلومات المنتج م  useParams   id هو موجود براوتر الخاص شوب

 const [tab, setTab] = useState("desc");                //  نستخدم useState لتخزين حالة التاب الحالي

 const [rating, setRating] = useState(null);          //  نستخدم useState لتخزين حالة التقييم الحالي
 
const reviewUser =useRef("");  //  نستخدم useRef لتخزين اسم المستخدم الذي يكتب التعليق
const reviewMsg =useRef(""); //  نستخدم useRef لتخزين رسالة التعليق التي يكتبها المستخدم

const dispatch = useDispatch()  //ضروري للاضافة الي السلة 

  const product = products.find((product) => product.id === id);      //  نبحث عن منتج ضمن كل المنتجات عن طريق فايند اول قيمة يلاقيها يجيبها
  
 const { productName, imgUrl, category, price, avgRating, reviews, shortDesc, description } = product;  // نعرف خصائص المنتج من البيانات المستوردة ونسايها بلمنتج 

 const relatedProducts = products.filter((product) => product.category === category);
    // نستخدم الفلتر لجلب المنتجات ذات الصلة عن طريق فئة المنتج المدخلة من العميل   
         //شرح سريع: نعرف متغير باسم معمله يجيب كل المنتجات ويفلترها بعدين كل منتج  اذا فئته مطابقة لفئة المطلوبة جيبه (كل المتصل بها)

  const submitHandler = (e) => {                                    //  دالة لمعالجة ارسال التعليق
  e.preventDefault();                                             // منع اعادة تحميل الصفحة عند ارسال الفورم
  const reviewUserName = reviewUser.current.value;              //  نحصل على قيمة اسم المستخدم من الريفيرنس
  const reviewUserMsg = reviewMsg.current.value;    //  نحصل على  قيمة رسالة التعليق من الريفيرنس
         
  const reviewObg = {UserName: reviewUserName, text: reviewUserMsg, rating: rating};  //هذا شكل اوبجيكت كما تعلمنا في جافا لنستخدمه فيما بعد
 toast.success("Review submitted");      //ميزة اشعار رساله سريعه تم ارسال التعليق
 };
const addToCart = () => {                                    //عملنا فانكش اضافة للسلة لننفذه ع كبسة الزائد
  dispatch(
    cartActions.addItem({             //اضافة عنصر للسلة ومعلومات المنتج نستطيع نضع برودكت فقط ويجلب كل شئ 
      id: product.id, 
      productName: product.productName,                  //اسم المنتج
      image: product.imgUrl,                            //رابط الصورة
      price: product.price,                             //سعر المنتج
    })
  );

  toast.success("تمت الاضافة للسلة");                        // رسالة تنبيهات عند نجاح الاضافة للسلة  
};
useEffect(() => {              //يعني كلما صار اي تغير ع الاعتمادية لمنتج رجع الشاشة للبداية طول وعرض صفر
  window.scrollTo(0, 0)
}, [product]);
  
 return( 
  <Helmet title ={productName}>            {/* Helmet  لتغير العنوان باسم كل منتج نضغط عليه لعنوان=اسم المنتج*/}
    <CommonSection title ={productName}/>  
    
                                            {/* // فيه بروبس لتغير لعنوان عائد  لكمبوننت لصفحة عناصر الشائعة */}
<section className="pt-0">
  <Container>
    <Row>
      <Col lg="6"> <img src={imgUrl} alt={productName} />         {/* هنا استعراض اسم المنتج بعد ضفط ع صورة  */}
      </Col>   

      <Col lg="6"> <div className="product_details">
        <h2>{productName}</h2>                                    {/* هنا استعراض اسم المنتج بعد ضفط ع صورة  */}
        <div className="product_rating d-flex align-items-center gap-4 mb-3">

          <div><span><i className="ri-star-s-fill"></i>          {/*  هنا نستخدم الايقونة الخاصة بتقييم المنتج */}
          </span>
          <span><i className="ri-star-s-fill"></i></span>
          <span><i className="ri-star-s-fill"></i></span>
          <span><i className="ri-star-s-fill"></i></span>
          <span><i className="ri-star-half-s-line"></i></span> 

          </div>
          <p> (<span>{avgRating}</span>rating) </p>                        {/*هنا استعراض تقييم المنتج بعد ضفط ع صورة وجلب العدد*/}
        </div>
<div className="d-flex align-items-center gap-5">
          <span className="product_price">$ {price} </span>                    {/*هنا استعراض سعر المنتج بعد ضفط ع صورة وجلب العدد*/}
          <span>category: {category.toUpperCase()} </span>                    
</div>

        <p className="mt-3"> {shortDesc} </p>                                      {/*هنا استعراض وصف قصير للمنتج بعد ضفط ع صورة وجلب العدد   */}
        <motion.button whileTap={{scale:1.}} className="buy_btn" onClick={addToCart}>Add to Cart</motion.button>{/* هنا استعراض زر اضافة المنتج للسلة بعد ضفط ع صورة وجلب العدد   */}
        </div>
         </Col>
    </Row>
  </Container>
</section>
<section>
  <Container>
    <Row>
      <Col lg="12">
      <div className ="tab_wrapper d-flex align-items-center gap-5">
            <h6 className= {tab === "desc"? "active_tab" : ""} onClick={() =>setTab ("desc")}> 
              Description</h6>                                              {/*شرط عند الضغط ع تاب وصف المنتج طبق تعليمة تاب اكتفي سي اس اس */}  
            <h6 className= {tab === "rev"? "active_tab" : ""} onClick={() =>setTab ("rev")}>
              Reviews ({reviews.length}) </h6>                                 {/*شرط عند الضغط ع تاب التعليقات  طبق تعليمة تاب اكتفي سي اس اس*/}


    </div>                     {/*رياكت 18 س1 دقيقة15 */}
    {tab ==="desc" ? (
    <div className="tab_content mt-4">                                         
      <p>{description} </p>
    </div>
    ) : (
      <div className="product_review mt-4"> 

      <div className="review_wrapper">
        <ul>                               {/* هنا نقوم بعمل ماب على التعليقات الموجودة في المنتج ضروري نحط استفهام قبل ماب لضمان عمل الكود في كل حالات   */}
           {reviews?.map((review, idx) => (  
  <li key={idx} className="mb-3">
    <h6>John Doe</h6>                  {/* هنا استعراض اسم المراجع */}
    <span>{review.rating} </span>                 {/* لجلب رقم تقييم التعليق */}
  <p>{review.text}</p>                                  {/* لجلب نص التعليق */}
  </li>
 ))}
          </ul>
          <div className="review_form">       {/*فورم لاجل اضافه تعليقات جديدة*/}

             <h4>Leave your experience</h4>    {/* هنا استعراض عنوان التعليق */}
              <form action="" onSubmit={submitHandler}> {/*
              هنا استعراض الفورم الخاص بالتعليق لما نضغط ع زر سابميت نفذ فانكشن سابيت هاندلير  */}
            <div className="form_group">
              <input type="text" placeholder="Enter name" ref={reviewUser} required/> {/* هنا استعراض حقل الاسم */}
            </div>
            <div className="form_group d-flex align-items-center gap-5 rating_group">       {/*اختيار النجوم عند التعليق */}
              <motion.span whileTap={{scale:1.2}} onClick={() => setRating(1)}>1<i className="ri-star-s-fill"></i></motion.span>  {/*هنا استعراض قيمة النجوم عن طريق ضغط  عليها واستخدام الستيت*/}
              <motion.span whileTap={{scale:1.2}} onClick={() => setRating(2)}>2<i className="ri-star-s-fill"></i></motion.span>
              <motion.span whileTap={{scale:1.2}} onClick={() => setRating(3)}>3<i className="ri-star-s-fill"></i></motion.span>
              <motion.span whileTap={{scale:1.2}} onClick={() => setRating(4)}>4<i className="ri-star-s-fill"></i></motion.span>
              <motion.span whileTap={{scale:1.2}} onClick={() => setRating(5)}>5<i className="ri-star-s-fill"></i></motion.span>
            </div>
              <div className="form_group">                                   {/* هنا استعراض رسالة التعليق */}
              {/* <input type="text" placeholder="Enter message..." /> */}
              <textarea type="text" rows={4} placeholder="Enter message..." ref={reviewMsg} required> </textarea>  {/*lمع تحديد كم سطر هنا استعراض رسالة التعليق */}
            </div>
            <motion.button whileTap={{scale:1.2}} type="submit" className="buy_btn">submit</motion.button>
          </form>
          </div>
           </div>
      </div>
    )}
      </Col>
      <Col lg="12" className="mt-5"> 
      <h2 className="related_tite">you mightn also like  </h2>  {/* هنا استعراض عنوان المنتجات ذات الصلة */}
      
      </Col>
      <ProductList products={relatedProducts}/>    {/*استدعينا قائمة الnpm startمنتجات والمنتجات كلها لتساوي منتجات المتصلة عند الضط والفرز منها*/}

    </Row>
  </Container>

</section>
  </Helmet>
  )
}
export default ProductDetails;