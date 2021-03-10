import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing components
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import NoteDetailed from '../components/NoteDetailed';
import Footer from '../components/Footer';

class NotepadRouters extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                <Header />
                    <Switch>
                        <Route path="/" component={Dashboard} exact />
                        <Route path="/notes/:title" component={NoteDetailed} />
                    </Switch>
                </Router>
                <Footer />
            </React.Fragment>
        )
    }
}

export default NotepadRouters;