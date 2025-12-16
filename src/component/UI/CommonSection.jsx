import React from "react";
//كمبوننت للعناصر الشائعة
// يستورد كمكون في صفحة الشوب ويتم تمرير العنوان اليه لتخصيص المحتوى
import "../../styles/common-section.css";
import { Container } from "reactstrap";

const CommonSection = ({ title }) => {   //  هنا نقوم بتمرير عنوان كبرامتر للكمبوننت  CommonSection
  return (
    <section className="common_section">
      <Container className="text-center">  {/* النص في صفحة الشوب  pproduct سوف يتوسط قسم الكونتينر  */}
        <h1> {title} </h1>
      </Container>
    </section>
  );
};

export default CommonSection;
