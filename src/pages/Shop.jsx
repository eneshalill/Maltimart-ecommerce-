import "../styles/shop.css"; // ا
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/CommonSection";

import productsData from "../assets/data/products";                              // لهلسبب نعطيها اسم من عنا استيراد بيانات المنتجات مباشر
import ProductsList from "../component/UI/ProductsList";                 //استيراد الكمبوننت الخاص بعرض المنتجات

const Shop = () => {
  const [products, setProducts] = useState(productsData) //نستخدم ستيت لاعطاء بيانات الافتراضية ثم حفظ بيانات المعروضة بعد لفلترة وتحديث المستعرض 

  const handleFilter = (e) => {                                   //نعرف متغير باسم معين هو كوسيط يتلقى حدث يجلب قيمة ما
                                                                 //  event (e) تعني الحدث اجباري لازم نحطها لمعرفه لقيمة المختارة)
 const filterValue = e.target.value;                      //نعرف متغير يحصل ع قيمة مختارة من العنصر الذي تم تفاعل معه =هدف الحدث هو القيمه

   const filteredProducts = productsData.filter(        //نعرف متغير لفلترة المنتجات كلها المستوردة لتطابق الفئة المطلوبة
    (product) => product.category === filterValue );     //يكمل الفلترة بلتحقق من فئة الخاصة بلمنتج تساوي الفئة المطلوبة
    setProducts(filteredProducts);                            //نحدث حالة المنتجات بالمنتجات المفلترة فقط              
};

const handleSearch = (e) => {                                //فانكشن اخر خاص بلبحث بمحرك البحث 
  const filterValue = e.target.value;    
  const searchedProducts = productsData.filter((product) => 
    // product.productName.includes(filterValue)  //  //فلترة المنتجات محرك البحث حسب اسم المنتج حرفيا

    product.productName.toLowerCase().includes(filterValue.toLowerCase())    // ضرورية include تول اوركيس لتحويل الاحرف لصغيرة في الادخال واسم منتج المخزن لصغيرة لنضمن لتطابق
     ); 
    setProducts(searchedProducts);      
  };  
  
  const clearAllFilter = () =>{                            //نعرف فانكشن لمسح جميع الفلاتر
    setProducts(productsData);                             //بل هو شبيه بلمسح حيت يتم اعادة تعين المنتجات المتغيرة لبياناتها الافتراضية
  }
  return ( 
    // عند الضغط ع صفحة الشوب  سيتم تغير العنوان الي شوب في شريط العنوان عن طريق الهلمنت Helmet

  <Helmet title = "shop">    
    <CommonSection title = "Products"/> {/* // فيه بروبس لتغير لعنوان عائد  لكمبوننت لصفحة عناصر الشائعة */}
   <section>
    <Container>
      <Row>
        <Col lg ="3" md="6"> 
        <div className="filter_widget"> 

<select onChange={handleFilter}>                 {/* تنفيذ فانكشن لتغير القيمة المختارة */}


  <option disabled>Filter By Category</option>                {/*فلتر حسب الفئة */}
  <option value="sofa"> Sofa</option>
  <option value="mobile">Mobile</option>
  <option value="chair">Chair</option>
  <option value="watch">Watch</option>  
  <option value="wireless">Wireless</option>
</select>
        </div>
        </Col>

        <Col lg ="3" md="6" className="text_end">  
         <div className="filter_widget"> 
<select>
  <option disabled>Sort By</option>                                        {/*فرز حسب */}
  <option value="ascending"> Ascending</option>                            {/*تصاعدي */}
  <option value="descending">Descending</option>                           {/*تنازلي */}
 
</select>
        </div>
        </Col>
        <Col lg ="6" md="12">
         <div className="search_box">                                                      {/* مربع البحث */}
          <input type="text" placeholder="search....." onChange={handleSearch}/>           {/* مربع البحث */}
         <span><i className="ri-search-line"></i></span>                                   {/* ايكونة البحث */}
         </div> 
         </Col>
      </Row>
      <button onClick={clearAllFilter}> Clear all filters </button>
    </Container>
   </section>

   <section className="pt-0">                    
<Container>
  <Row>
   {products.length === 0 ? (              //المصفوفه لراجعة من البحث كل منتج فيها هو عدد اذا كان صفر هذا يعني لم ترجع باي عدد منتج
    <h1 className="text-center fs-4">No products found</h1>                              // في حالة عدم وجود منتجات تعرض رسالة
   ) : (                                                              
    <ProductsList products={products} />                   //استيراد الكمبوننت الخاص بعرض المنتجات وتمرير البيانات المفلترة له
    )}                                                  
   </Row>
   </Container>
   </section>    
   {/* <section>
    {products.map((product) => (                                     // نقوم بعمل ماب للمنتجات لعرضها في الصفحة
      <div>{product.productName}</div>                                 // عرض اسم المنتج
    ))}
   </section> */}
  </Helmet>
  );
};

export default Shop;
