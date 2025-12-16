import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    //  فراكمينت لحت يحطن جنب بعض لان الديف بحطن عامودي
    // <React.Fragment>     منجسن نستخدم رياكت فراكمينت لحت نعطيها كلاس نيم
    <>
      {/* /* طريقة جلبت بيانات منتجات عن طريق الماب */ }
      {/* اشارة الاستفهام يعني اذا قيمة ما قبلها صحيحه استخدم الماب واذا خطا لا تدخل ع الماب وتضرب الكود */}
      {products?.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </>
      
      /* <ProductCard /> 
      {/* <ProductCard /> 
      {/* <ProductCard /> */
      /* <ProductCard /> */

  );
};

export default ProductList;
