import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NewPlay from './components/pages/NewPlay';
import PlaysHistory from './components/pages/PlaysHistory';
import ScheduledPlays from './components/pages/ScheduledPlays';
import EventSubscription from './components/pages/EventSubscription';

const Router = () => (
    <Switch>
        <Route path='/new-play' component={ NewPlay } />
        <Route path='/scheduled-plays' component={ ScheduledPlays } />
        <Route path='/plays-history' component={ PlaysHistory } />
        <Route path='/:eventName' component={ EventSubscription } />
    </Switch>
)

export default Router
