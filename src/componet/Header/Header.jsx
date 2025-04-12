// import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";
import { motion } from "framer-motion";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { useEffect, useRef } from "react";

// عمل ناف بار مبرمج
const nav_Links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {

  // رياكت 12 نص درس1 وكل التاني تقريبا
// ميزة تثبيت الهيدر كله عند النزول للاسفل في الموقع ع مسافة معينة  مثلا 2050 بكسل 
  const headerRef = useRef(null);         //  (بميزة شرط اضافة وحذف) خاص بظهور ناف بعد نزول مسافه معينه
  const menuRef =  useRef(null);      // ( بلفقس ع قائمه بميزةتبديل) مع قائمة خاص بشاشات الاقل حجم من البتوبات

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 1050 ||
        document.documentElement.scrollTop > 1050        //1050px نستطيع وضع قيم مختلفة 
      ) {
        headerRef.current.classList.add("sticky_header");     //ميزة الاضافه
      } else {
        headerRef.current.classList.remove("sticky_header");  //ميزة الحذف
      }
    });
  };

// عملنا فانكشن لتبدل قائمة الكلاسات الي قائمة كلاس معين خاص بميزات قائمه شاشات الاصغر

const menuToggle = () => menuRef.current.classList.toggle("active_menu"); // كمالة خاص شاشات الاقل حجم من كمبيوتر

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);
  //نعمل فانكشن ليحذفى او يضيف لستيكي تبع الهيدر
  // متغير وحيد خاص باشعارات السلة والمفضلات
  // const favNum = 9.5;

  return (
    <header className="header" ref={headerRef}>
      {/* هنا عندنا اسمين كلاسين مختلفين مستقلين لهم تعليمات خاصة لكل منهم*/}
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Enes Halil</h1>
              </div>
            </div>

            {/* كمالة الناف المبرمج */}
            <div className="navigation" ref={menuRef} onClick={menuToggle}>   {/*لتنفيذ فانكشن تسكيره او بضغط هنا     */}
              <ul className="menu">
                {nav_Links.map((item, idx) => (
                  <li key={idx} className="nav_item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}

                {/* <li className="nav_item">
                  <NavLink to="home"> Home</NavLink>
                </li>

                <li className="nav_item">
                  <NavLink to="shop"> Shop</NavLink>
                </li>

                <li className="nav_item">
                  <NavLink to="cart"> Cart</NavLink>
                </li>  */}
              </ul>
            </div>

            {/* ايقونات من مكتبة الايقونات  مع شرط للاشعارات */}
            <div className="nav_icons">
              <span className="fav_icon">
                <i class="ri-heart-line"></i>
                {/* <span className="badge"> {favNum > 9 ? "9+" : favNum}</span> */}
                <span className="badge"> 8 </span>
              </span>
              <span className="cart_icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">0</span>
              </span>

              {/* تغير حجم صورة المستخدم عند ضغط */}
              {/* مع استدعاء الصورة ع شكل برمجي في رياكت */}
              <span>
                <motion.img
                  whileTap={{ scale: 1.8 }}
                  src={userIcon}
                  alt="user"
                />
              </span>
              <div className="mobile_menu">
                
                  {/*  بضغط هنا بدل الي لكلاس الغائب */}
              <span onClick={menuToggle}>       {/*عند الضغط ع ايقونة القائمه نفذ الفانكشن  يفتح */}
                {/* ايقونة */}
                <i class="ri-menu-line"></i>
              </span>
            </div>
            </div>

          
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
