import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Helmet from "../componet/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";

// >>>>حافظة للحركات
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../componet/UI/ProductsList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../componet/UI/Clock";
const Home = () => {
  const [trendingProductsa, setTrendingProductsa] = useState(products);
  const [bestSalesProducts, setBestSalesProducts] = useState(products);
  const [mobileProducts, setMobileProducts] = useState(products);
  const [wirelessProducts, setWirelessProducts] = useState(products);
  const [PopularProducts, setPopularProducts] = useState(products);
  
  // استدعاء التاريخ
  const year = new Date().getFullYear();

  //جيب العناصر بس الكراسي... فلترة المنتجات ( كل منتج يساوي كرسي)
  // هكذا يتم فلترة اي شى نريده رياكت 10 _4س _11د

  useEffect(() => {
    const trendingProductsa = products.filter(    
      (product) => product.category === "chair"   //المنتجات ذات الفئة تساوي كرسي 
    );
    setTrendingProductsa(trendingProductsa);

    const bestSalesProducts = products.filter(
      (product) => product.avgRating > 4.7    //تقيمات المنتج الاكبر من 
    );
    setBestSalesProducts(bestSalesProducts);

    const mobileProducts = products.filter(
      (product) => product.category ==="mobile"
    );
    setMobileProducts(mobileProducts);

    const wirelessProducts = products.filter(
      (product) => product.category ==="wireless"
    );
    setWirelessProducts(wirelessProducts);

     const popularProducts = products.filter(
      (product) => product.category ==="watch"
    );
    setPopularProducts(popularProducts);
  }, []);

  return (
    // استدعاء عنوان رابط المنشئ في الهيلمنت هنا لتظهر لنا اننا في home صفحة
    <Helmet title={"Home"}>
      {/* تقسيم صفحة الهوم... بلحاوية والاسطر والاعمدة */}
      <section className="hero_section">
        <Container>
          <Row>
            {/* مناهم وادق واشق ملاحظات عند قياس الشاشه كبير اعطني 6 اعمده من اصل التقسيم الكلي للعرض 12 أ اعطني النصف وكذالك عند الظهور في قياس متوسط */}
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year} </p>
                <h2>Make Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum, modi? Explicabo repellat natus animi temporibus nobis
                  sint molestias laudantium ipsum. Amet asperiores quia maiores
                  similique ducimus vero eius natus ea.
                </p>

                {/* react9 دس2 د36 << زر لاخذنا الي صفحة شوب مع تكبير زر عن طريق حافظة تكبير */}
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            {/* تحديد عرض العمود عندما يكون عرض شاشة كبير وعندما يكون متوسط */}
            <Col lg="6" md="6">
              {/* طريقة استيراد الصور خلفية موقع  */}
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      {/* قسم أكثر المنتجات طلبا */}
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">trending products </h2>
            </Col>
            <ProductsList products={trendingProductsa} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales </h2>
            </Col>
            <ProductsList products={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down_col">
              <div className="clock_top_content">
                <h4 className="text-white fs-6 mb-2">Limted Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop"> Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text_end counter_img">
            
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
          <Col lg="12" className="text-center">
              <h2 className="section_title">New_Arrivals </h2>
            </Col>
            <ProductsList products={mobileProducts} />
            <ProductsList products={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
          <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Popular in Category </h2>
            </Col>
            <ProductsList products={PopularProducts} />
           
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
