import React from 'react';



class SearchResult extends React.Component {
    render() {
        return (
            <div>
                <div id="search-result">
                    <div className="section-center">
                        <div className="booking-form">
                            <form>
                                <div className="d-flex">
                                    <div className="input-container">
                                        <i className="fa fa-building icon"></i>
                                        <input className="input-field city-input" type="text" placeholder="Enter City" name="city" required />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="input-container">
                                        <i className="fa fa-map-marker icon" aria-hidden="true"></i>
                                        <input className="input-field city-input" type="text" placeholder="Enter Address" name="address" required />
                                    </div>
                                    <div className="input-container">
                                        <i className="fa fa-location-arrow icon"></i>
                                        <input className="input-field city-input" type="text" placeholder="Enter Area" name="area" required />
                                    </div>
                                </div>
                                <button type="submit" className="btn">Check availability</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="result">
                    <div className="result-information">
                        <h3>
                            152 restaurants
                        </h3>
                        <div>
                            Page 1 of 6
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <img src="https://www.opentable.com/img/restimages/82957.jpg" alt='...' className="item-img" />
                            <div className="item-content">
                                <h6 className="item-name">
                                    Moriki
                            </h6>
                                <div className="item-address">
                                    address:  Booked 19 times today
                            </div>
                                <div className="item-area">
                                    city: Toronto / SW Ontario
                            </div>
                                <div className="item-postalcode">
                                    postal-code: M4V 2L1
                            </div>
                                <br></br>
                                <div>
                                    <a href="tel:234234" className="item-phone">
                                        <i className="fa fa fa-phone"></i> &nbsp;
                                234234
                            </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default SearchResult;