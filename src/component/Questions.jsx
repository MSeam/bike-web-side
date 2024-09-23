import React from "react";
import SectionTitle from "./reuseable/SectionTitle";

function Questions() {
  return (
    <div classNameName="questions">
      <SectionTitle
        firstTitleName={"Frequently Asked"}
        secondTitleName={"Questions"}
      />
      <div className="questions">
        <div className="container d-flex questions-item">
          <div className="questions-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCiD17vc63IurJhk7NgFFlxM3FFIRTI-zJkOO6RH08gjpUd4a"
              alt=""
            />
          </div>
          <div className="cards">
            <div class="card mb-2">
              <div class="card-body">
                <h5 class="card-title">What are the most important things I should
                know about riding a bike?</h5>
                <p class="card-text">Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </p>
              </div>
            </div>
            <div class="card mb-2">
              <div class="card-body">
                <h5 class="card-title">How can I tell if my helmet is old and I need a 
                new one?</h5>
              </div>
            </div>
            <div class="card mb-2">
              <div class="card-body">
                <h5 class="card-title">My bike has been in storage is it safe to ride?</h5>
              </div>
            </div>
            <div class="card mb-2">
              <div class="card-body">
                <h5 class="card-title">What rules should I follow when riding my bike?</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
