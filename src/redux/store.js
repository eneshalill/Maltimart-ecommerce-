//configureStoreخاصية من مكتبة لانشاء مستودع redux
import { configureStore } from "@reduxjs/toolkit"; //تكوين مستودع من مكتبة redux-toolkit تعمل مع  react-redux
import cartSlices from "./slices/cartSlices"; 

const store =configureStore({
reducer:{                                      //الرديوس هو مكان لوضع جميع السلايسات فيه
    cart: cartSlices                            //تخزين شريحة سلايس الكارت في المتجر
},
});
export default store;