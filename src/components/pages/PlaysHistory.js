import React from 'react';
import Hearder from '../common/Header';

class PlaysHistory extends React.Component {
  render() {
    return (
      <div>
        <Hearder />

        <div className="main-content scheduled-plays-page">
          <div className="container">
              <div className="search-section align-right">
                  <input type="text" placeholder="Search" />
                  <button>Go</button>
              </div>

              <table>
                <tbody>
                  <tr>
                      <td>Event</td>
                      <td>Scheduled Date</td>
                      <td># of Participants</td>
                      <td></td>
                  </tr>

                  <tr>
                      <td>DONOPlay2</td>
                      <td>02/02/2021 15:00</td>
                      <td>100</td>
                      <td><a href="#">Details</a></td>
                  </tr>

                  <tr>
                      <td>DONOPlay2</td>
                      <td>02/02/2021 15:00</td>
                      <td>100</td>
                      <td><a href="#">Details</a></td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaysHistory;