import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { bindActionCreators } from 'redux';
/** Import scenes */
import Search from './scenes/Search';
import SearchResult from './scenes/SearchResult';
import {
    getSearch
} from '../../services/search/searchActions';
class Home extends React.Component {
    componentDidMount() {
    }
    render() {
        const { search: { search: {loading}}} = this.props
        if (loading) {
            Swal.fire({
                title: 'Please wait...',
                text: 'getting data in...',
                onOpen: () => {
                    Swal.showLoading();
                },
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false
            });
        } else {
            Swal.close();
        }

        return (
            <div>
                <Switch>
                    <Route path="/result" exact render={props => <SearchResult {...props} />} />
                    <Route path="/" render={props => <Search {...props} />} />
                </Switch>
            </div>
        );
    }
}

export default connect(
    ({ default: { services: search } }) => ({ search }),
    null)(Home);