import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Hearder extends React.Component {
  
  render() {
    return (
      <header>
        <div className="title">
          <h4 className="align-center">Company Name - DONO Play</h4>
        </div>

        <nav>
          <ul>
            <li><NavLink to="/new-play" activeClassName="active">New Play <div className="underline"></div></NavLink></li>
            <li><NavLink to="/scheduled-plays" activeClassName="active">Scheduled Plays <div className="underline"></div></NavLink></li>
            <li><NavLink to="/plays-history" activeClassName="active">Plays History <div className="underline"></div></NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

