import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

/** Import scenes */
import Search from './scenes/Search';
import SearchResult from './scenes/SearchResult';
class Home extends React.Component {
    componentDidMount() {
    }
    render() {
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

export default Home;