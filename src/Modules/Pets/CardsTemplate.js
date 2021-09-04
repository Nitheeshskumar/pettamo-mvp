import React from "react";

const CardsTemplate = ({ item }) => {
  return (
    <div class="cardTemplate">
      <div class="card mb-4 shadow-sm">
        <div class="card-body">
          <h6 class="card-text">
            <strong> {item.name}</strong>
          </h6>

          <div class="row">
            <div class="row">
              <div class="col">Date of Birth</div>
              <div class="col">{item.dob.format('YYYY-MMMM-DD')}</div>
            </div>

            <div class="row">
              <div class="col">Gender</div>
              <div class="col">{item.gender}</div>
            </div>

            <div class="row">
              <div class="col">Breed</div>
              <div class="col">{item.breed}</div>
            </div>


            <div class="row">
              <div class="col">Colour</div>
              <div class="col">{item.colour}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsTemplate;
