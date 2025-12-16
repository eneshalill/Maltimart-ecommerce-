import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/store";      //>>استوردنا المستودع من ملف store.js
import { Provider } from "react-redux";   //>>زودنا تطبيقنا بستور تبع ريداكس ومفتاحه للعمل provider

import { ToastContainer } from "react-toastify"; //>>استوردنا مكتبة التنبيهات

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>   {/*>>زودنا تطبيقنا بستور تبع ريداكس ومفتاحه للعمل provider*/}
        <App />
        <ToastContainer   //>>مكتبة التنبيهات مع اعداداتها
                                                                             // بدون هذه الاعدادات ياخذ اعدادات افتراضية
        position="top-right"                           //>>مكان التنبيه
autoClose={1500}                                       //>>الوقت
hideProgressBar={false}                                //>>اخفاء شريط التقدم
newestOnTop={false}                                    //>>تظهر التنبيهات من فوق
closeOnClick={false}                                   //>>اغلاق التنبيه عند الضغط عليه
rtl={false}                                            //اختصار ل right to left نحدد جهة الكتابه
pauseOnFocusLoss                                       //>>توقف التنبيه عند فقدان التركيز
draggable                                              //>>تفعيل السحب
pauseOnHover                                           //>>توقف التنبيه عند التمرير
theme="dark"                                           //>> light اللون
// transition={Bounce}
/>
      </Provider>   
    </BrowserRouter>
  </React.StrictMode>
);
