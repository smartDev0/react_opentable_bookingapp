import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import Swal from 'sweetalert2';
import {
    getSearches
} from '../../../../services/search/searchActions';
import { object } from 'prop-types';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            address: '',
            area: ''
        };
        this.change = this.change.bind(this);
        this.handleGetResult = this.handleGetResult.bind(this);

    }
    componentDidMount() {
    }
    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleGetResult() {
        const { city, address, area } = this.state;
        if (city === null || city === '') {
            toastr.error('City name is missing', 'You must provide city name');
            return;
        }
        const params = {
            city: city,
            address: address,
            area: area
        }
        this.props.searchActions.getSearches(params);
    }
    render() {
        const { search: { search: { searches } } } = this.props;
        console.log(searches)
        return (
            <div>
                <div id="search-result">
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
                <div className="result">
                    {searches != null &&
                        <div>
                            <div className="result-information">
                                <h3>
                                    {searches.total_entries} restaurants
                                </h3>
                                {/* <div>
                                    Page 1 of 6
                                </div> */}
                            </div>
                            {searches.restaurants.map((item, index) =>
                                (<div key={index}>
                                    <div className="item">
                                        <img src={item.image_url} alt='...' className="item-img" />
                                        <div className="item-content">
                                            <h6 className="item-name">
                                                {index + 1} {item.name}
                                            </h6>
                                            <div className="item-address">
                                                address:  {item.address}
                                            </div>
                                            <div className="item-area">
                                                city: {item.city}
                                            </div>
                                            <div className="item-postalcode">
                                                postal-code: {item.postal_code}
                                            </div>
                                            <br></br>
                                            <div>
                                                <a href="tel:234234" className="item-phone">
                                                    <i className="fa fa fa-phone"></i> &nbsp;
                                            {item.phone}
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>)
                            )}

                        </div>
                    }
                    {searches == null &&
                        <div>
                            <div className="result-information">
                                <h3>
                                    Empty
                                </h3>
                            </div>
                        </div>
                    }
                </div>
            </div>

        );
    }
}
const SearchResultWithRouter = withRouter(SearchResult);
// export default SearchResult;

export default connect(
    ({ default: { services: search } }) => ({ search }),
    dispatch => ({
        searchActions: bindActionCreators(
            { getSearches },
            dispatch
        ),
    })

)(SearchResultWithRouter);