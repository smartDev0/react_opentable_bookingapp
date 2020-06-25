import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';

import {
    getSearches, getSearch
} from '../../../../services/search/searchActions';


class SearchDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (localStorage.getItem('id')) {
            const id = localStorage.getItem('id');
            this.props.searchActions.getSearch(id);
        }
    }
    render() {
        const { search: { search: { currentSearch} } } = this.props;
        console.log(currentSearch)
        return (
            <div>
                <div id="search-result">
                    <div className="section-center">
                    </div>
                </div>
                <div className="result">
                    {currentSearch != null &&
                    <div>
                        <div className="result-information">
                            <h3>
                                {currentSearch.name}
                            </h3>
                        </div>
                        <div className="item">
                            <img src={currentSearch.image_url} alt='...' className="item-img" />
                            <div className="item-content">
                                <div className="item-address">
                                    address:  {currentSearch.address}
                                </div>
                                <div className="item-area">
                                    city: {currentSearch.city}
                                </div>
                                <div className="item-postalcode">
                                    postal-code: {currentSearch.postal_code}
                                </div>
                                <br></br>
                                <div>
                                    <a href="tel:234234" className="item-phone">
                                        <i className="fa fa fa-phone"></i> &nbsp;
                                            {currentSearch.phone}
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

const SearchDetailWithRouter = withRouter(SearchDetail);

export default connect(
    ({ default: { services: search } }) => ({ search }),
    dispatch => ({
        searchActions: bindActionCreators(
            { getSearches, getSearch },
            dispatch
        ),
    })

)(SearchDetailWithRouter);