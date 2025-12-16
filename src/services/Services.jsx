import React from "react";
import "./services.css";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import serviceData from "../assets/data/serviceData";

// صفحة خاصة باليقونات الرئيسية للخدمات 
const Services = () => {
  return (
    <section className="Services">
      <Container>
        <Row>
          {/* map وجلب بيانات من حافظة ع جذر سيرفيس داتا..رياكت 9 >> 3 >>23... أجمل وابسط مثال عن فانكشن  */}

          {serviceData.map((item, idx) => (
            // أذا كانت الشاشة كبيرة اخذ 3 اعمدة واذا متوسطه 4
            <Col key={idx} lg="3" md="4">
              {/* مثال احترافي لجلب كل لون وعنوان والنص ببساطه */}
              {/* /* ايقونه شاحنة */}
              <motion.div whileHover={{scale: 1.1}}
                className="service_item"
                style={{ backgroundColor: item.bg }}    
              >
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3> {item.title} </h3>
                  <p> {item.subtitle} </p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
