// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import { Nav6, Home, Faq, Contact, NotFound } from '../common/components';
import { book } from '../common/book';

class R extends Component {
    render() {
        return (
            <>
                <Nav6 />
                <Switch>
                    <Route
                        exact
                        component = { Home }
                        path = { book.home }
                    />
                    <Route
                        exact
                        strict
                        component = { Faq }
                        path = { book.faq }
                    />
                    <Route
                        exact
                        component = { Contact }
                        path = { book.contact }
                    />
                    <Route
                        exact
                        component = { NotFound }
                        path = { book.notFound }
                    />
                    <Redirect to = { book.notFound } />
                </Switch>
            </>
        );
    }
}

// export { R as Routes };
export const Routes = connect()(R);

// Solution ↓
// import { withRouter } from 'react-router-dom';
// export const Routes = withRouter(connect()(R));
