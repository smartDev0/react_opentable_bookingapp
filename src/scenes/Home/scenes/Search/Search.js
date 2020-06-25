import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import Swal from 'sweetalert2';
import queryString from 'query-string';

// Import actions
import {
getSearch
} from '../../../../services/search/searchActions';

// Import settings
import settings from '../../../../config/settings';

class Search extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            city: '',
            address: '',
            area:''
        };
        this.change = this.change.bind(this);
        this.handleGetResult = this.handleGetResult.bind(this);
    } 
    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleGetResult() {
        const { city, address, area } = this.state;
        if (city === null || city === '') {
            toastr.error('City name is missing', 'You must provide your city name');
            return;
        }
    }
    render() {
        return (
            <div id="search">
                <div className="section-center">
                    <div className="booking-form">
                        <form>
                            <div className="d-flex">
                                <div className="input-container">
                                    <i className="fa fa-building icon"></i>
                                    <input className="input-field city-input" type="text" placeholder="Enter City" name="city" onChange={this.change} />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="input-container">
                                    <i className="fa fa-map-marker icon" aria-hidden="true"></i>
                                    <input className="input-field city-input" type="text" placeholder="Enter Address" name="address" onChange={this.change} />
                                </div>
                                <div className="input-container">
                                    <i className="fa fa-location-arrow icon"></i>
                                    <input className="input-field city-input" type="text" placeholder="Enter Area" name="area" onChange={this.change} />
                                </div>
                            </div>
                            <button type="button" className="btn" onClick={this.handleGetResult}>Check availability</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
Search = withRouter(Search);
// export default Search;
export default connect(
    state => ({
        ...state.default.services.category
    }),
    dispatch => ({
        searchActions: bindActionCreators(
            { getSearch },
            dispatch
        ),
        
    })
)(Search);