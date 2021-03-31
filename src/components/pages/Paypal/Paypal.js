// import React from 'react'

// const Paypal = () => {

//     const paypal = useRef();

//     useEffect(() => {
//         window.paypal.Buttons({
//             createOrder: (data, action, err) => {
//                 return AuthenticatorAssertionResponse.order.create({
//                     intent: "CAPTURE",
//                     purchase_units: [
//                         {
//                             description: "Cool looking table",
//                             amount: {
//                                 currency_code: "USD",
//                                 value: 650.00
//                             }
//                         }
//                     ]
//                 })
//             }
//         }).render(paypal.current)
//     }, [])

//     return (
//         <div>
//             <div ref={paypal}></div>
//         </div>
//     )
// }


// export default Paypal;