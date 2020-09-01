import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
    <Router>
        <Router path = "/" exact component = {Join} />
        <Router path = "/chat" exact component = {Chat} />
    </Router>
);

export default App;