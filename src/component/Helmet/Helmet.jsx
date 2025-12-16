
// طريقة تغير عنوان رابط الموقع عند التنقل
const Helmet = (props) => {   
  document.title = "Enes Halil - " + props.title;  // تغيير عنوان الصفحة
  return <div className="w-100"> {props.children} </div>;
};

export default Helmet;