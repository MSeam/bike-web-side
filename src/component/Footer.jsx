import React from "react";

// function Footer() {
//   return (
//     <div>
//       <div className="footer">
//         <div className="container">
//           <div className="d-flex justify-content-between">
//             <div className="footer-part-one">
//               <p>Download Now</p>
//               <div className="d-flex footer-option">
//                 <p>About</p>
//                 <p>Features</p>
//                 <p>Pricing</p>
//                 <p>Careers</p>
//                 <p>Help</p>
//                 <p>Privacy Policy</p>
//               </div>
//               <p>&copy; 2020 bike. All rights reserved</p>
//             </div>
//             <div className="footer-part-second">
//               <h3>Get the App</h3>
//               <div className="footer-img">
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CbDOA7B0WEScpP8J6ZNSaFerGKKlF8cDsDtcyK5ovVnnjvYx"
//                   alt=""
//                 />
//               </div>
//               <div className="footer-img">
//                 <img
//                   src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRAq2XpkvUqP0rRbNbZVXDGx-DxjHSh8o19SgN5_dk2bJUGaHqn"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="footer-part-one">
              <p>Download Now</p>
              <div className="d-flex footer-option">
                <p>About</p>
                <p className="ml-6">Features</p>
                <p className="ml-6">Pricing</p>
                <p className="ml-6">Careers</p>
                <p className="ml-6">Help</p>
                <p className="ml-6">Privacy Policy</p>
              </div>
              <p>&copy; 2020 bike. All rights reserved</p>
            </div>
            <div className="footer-part-second">
              <h3>Get the App</h3>
              <div className="footer-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CbDOA7B0WEScpP8J6ZNSaFerGKKlF8cDsDtcyK5ovVnnjvYx"
                  alt="appstore"
                />
              </div>
              <div className="footer-img">
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRAq2XpkvUqP0rRbNbZVXDGx-DxjHSh8o19SgN5_dk2bJUGaHqn"
                  alt="playstore"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
