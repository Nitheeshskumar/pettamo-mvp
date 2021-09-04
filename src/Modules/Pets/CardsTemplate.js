import React from "react";

const CardsTemplate = ({ item }) => {
  return (
    <div className="cardTemplate">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h6 className="card-text">
            <strong> {item.name}</strong>
          </h6>

          <div className="row">
            <div className="row">
              <div className="col">Date of Birth</div>
              <div className="col">{item.dob.format('YYYY-MMMM-DD')}</div>
            </div>

            <div className="row">
              <div className="col">Gender</div>
              <div className="col">{item.gender}</div>
            </div>

            <div className="row">
              <div className="col">Breed</div>
              <div className="col">{item.breed}</div>
            </div>


            <div className="row">
              <div className="col">Colour</div>
              <div className="col">{item.colour}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsTemplate;
