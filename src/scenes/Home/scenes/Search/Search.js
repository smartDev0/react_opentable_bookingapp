import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';

class Search extends React.Component {
    render() {
        return (
            <div id="search">
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
        );
    }
}

export default Search;