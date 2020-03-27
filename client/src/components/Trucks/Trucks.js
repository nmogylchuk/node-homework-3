import React from "react";

const Trucks = (props) => {
    return (
        <div className="truck">
            <h2 className="truck__title title">Available Trucks</h2>
            <div className="truck__list">
                <div className="truck__item">
                    <div className="truck__description">
                        <h2 className="truck__maker"><i></i>Brand</h2>
                        <h3 className="truck__model"><i></i>Model</h3>
                        <div className="truck__parameters">
                            <p className="truck__year"><i class="far fa-calendar-times"></i>Year</p>
                            <p className="truck__colour"><i class="fas fa-paint-brush"></i>Colour</p>
                            <p className="truck__gearbox"><i class="fas fa-cog"></i>Gearbox</p>
                            <p className="truck__engine"><i class="fas fa-gas-pump"></i>Engine</p>
                            <p className="truck__mileage"><i class="fas fa-tachometer-alt"></i>Mileage</p>
                        </div>
                    </div>
                </div>
                <div className="truck__item">
                    <div className="truck__description">
                        <h2 className="truck__maker"><i></i>Brand</h2>
                        <h3 className="truck__model"><i></i>Model</h3>
                        <div className="truck__parameters">
                            <p className="truck__year"><i class="far fa-calendar-times"></i>Year</p>
                            <p className="truck__colour"><i class="fas fa-paint-brush"></i>Colour</p>
                            <p className="truck__gearbox"><i class="fas fa-cog"></i>Gearbox</p>
                            <p className="truck__engine"><i class="fas fa-gas-pump"></i>Engine</p>
                            <p className="truck__mileage"><i class="fas fa-tachometer-alt"></i>Mileage</p>
                        </div>
                    </div>
                </div>
                <div className="truck__item">
                    <div className="truck__description">
                        <h2 className="truck__maker"><i></i>Brand</h2>
                        <h3 className="truck__model"><i></i>Model</h3>
                        <div className="truck__parameters">
                            <p className="truck__year"><i class="far fa-calendar-times"></i>Year</p>
                            <p className="truck__colour"><i class="fas fa-paint-brush"></i>Colour</p>
                            <p className="truck__gearbox"><i class="fas fa-cog"></i>Gearbox</p>
                            <p className="truck__engine"><i class="fas fa-gas-pump"></i>Engine</p>
                            <p className="truck__mileage"><i class="fas fa-tachometer-alt"></i>Mileage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trucks;