
//الدالة createslice خاصية موجودة في مكتبة reduxjs/toolkit 
//التي تعمل مع الريداكس
import { createSlice } from "@reduxjs/toolkit";//cerateslice هو الفانكشن من المكتبة لحت يعمل ميزة الكارت السلة

 // هي الحالة الابتدائية للكارت السلة قد تتضمن معلومات مثل عناصر لكرت لغة التطبيق او اسمه
//لازم تكون بهلشكل
 const initialState = {                  // الحالة الابتدائية للكارت السلة(ع شكل اوبجيكت وتتضمن كل ما بين القوسين تحتا) 
 cartItems : [],                        //ضروري نعمل مصفوفة فاضية عن الكرت لاستخدام الماب  وملئها لاحقا
totalAmount:0,                          //المبلغ الاجمالي
totalQuantity:0,                        //عدد العناصر في السلة
};

const cartSlices = createSlice({     //بلضغط ع بداية القوس معرج او عادي نعرف اي نهايته بظهور خط عليه  //انشاء شريحة جديدة من الريداكس
  name: "cart",                                             //اسم الشريحة
  initialState,                                          //الحالة الابتدائية
  reducers: {                      //الرديوس هو عبارة عن دالة تقوم بتحديث الحالة بناءً على نوع الحدث المرسل

    //أضافة منتج للسلة
    addItem:(state, action) => {  //فانكشن جلب منتج للسلة لاضافة عناصر لحفظ البيانات :الستيت والاكشن يتم تمريرهم تلقائي عند تنفيذ اضافة بريداكس 
     //state هو الحالة الحالية للكارت السلة     //action هو الكائن الذي يحتوي على نوع الحدث الذي يجب تنفيذه والبيانات المرتبطة به
      const newItem = action.payload;     //لاخذ بيانات المرسلة من الخارج زبون او من الزر وتخزينها في متغيرنيو ايتم لنستخدمها في ماتبقى من الصفحة
//بدل ما نكتبها في كل مرة نخزنها هنا بلمتغير مرة واحدة فقط هذه بيانات هي كل ما يخص المنتج صور اسم وصف ايدي  
                                      //معلوات وكل ما يلزم من شروط
const existingItem = state.cartItems.find(            //idعن طريق مقارنه id ببحث عن العنصر الموجود في السلة
  (item) => item.id === newItem.id);                               //  ببحث عن العنصر اذا موجود في السلة
   
  state.totalQuantity++;                                   //زيادة العدد الكلي في السله بمقدار واحد
    state.totalAmount += newItem.price;                    //جيب القيمة الموجودة في سلة وجمعها مع منتج جديد 
    if (!existingItem) {                                               //اذا العناصر اوالعنصر غير موجود في السلة
      state.cartItems.push({                                            //اضف منتج كعنصر جديد في سلة
         id: newItem.id,                                  //انسخ معرف العنصر من المنتج الجديد وضعه في السلة  
productName: newItem.productName,                                        // اجلب اسم المنتج الجديد
imgUrl: newItem.imgUrl,                                                //رابط الصورة للمنتج الجديد
quantity:1,                                                          //يعني منتج واحد فقط 
price: newItem.price,                                                  // تخزين سعرالمنج او العنصر
totalPrice: newItem.price,                               //المبلغ الاجمالي للمنتج الجديد عند اضافته لمرة وحدة 
       }); 
    }else{                                                    //اذا العنصر موجود في السلة
      existingItem.quantity++;                                     //اذا العنصر موجود في السلة زيد الكمية
      existingItem.totalPrice = Number( existingItem.totalPrice) + Number (newItem.price); 
                                        //اضافة السعر الاجمالي للمنتج الموجود في السلة مع سعر المنتج الجديد
 }                                     // console.log({cartItems: state.totalAmount}); //طباعة السلة في الكونسول
},

//حذف من السلة
 deleteItem:(state, action) => {  //فانكشن جلب منتج للسلة لاضافة عناصر لحفظ البيانات واكشن لفعل الحدث داخله
      const id = action.payload;               //محل ما بستدعي الاكشن من سلايس حملي البيانات الخاصه فيه

                                      //معلوات وكل ما يلزم من شروط
const existingItem = state.cartItems.find((item) => item.id === id);          //idعن طريق مقارنه id ببحث عن العنصر الموجود في السلة
                                //  ببحث عن العنصر اذا موجود في السلة
   

    if (existingItem) {                                           //اشارة تعجب تعني غير يعني غير موجود    //اذا العنصر غير موجود في السلة
                                
       
      state.cartItems = state.cartItems.filter((item) => item.id !== id);            //اذا العنصر غير موجود في السلة احذفه من السلة
      state.totalQuantity -= existingItem.quantity;      //احذف لمنتج من العدد الكلي لنفس المنتج اذ كان مضاف اكتر من مرة او صفره اذا مرة واحدة
      //  state.totalQuantity = state.totalQuantity- existingItem.quantity;        احذف الكمية من السلة   // هذبصير ايضا>> ت<<

        state.totalAmount -= existingItem.totalPrice;  
    }              // console.log({cartItems: state.totalAmount}); //طباعة السلة في الكونسول
},
}
});

export const cartActions = cartSlices.actions;//نضع داخل الاقواس اسماء الفانكشن لبدنا ياها متل الايميل,اسم مستخدم

export default cartSlices.reducer; //reducer هو بنية اساسية موجودة في قلب الريداكس تضع فيه المعلوات الكرت
