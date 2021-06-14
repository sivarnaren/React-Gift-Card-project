import React from 'react';
import APIService from "../../services/api.services";

class EventSubscription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName : '',
      firstName : '',
      lastName  : '',
      phone     : '',
      successMsg    : '',
      errorMsg      : '',
    }

    this.subscribe = this.subscribe.bind(this);
  }

  subscribe() {
    var eventName = this.props.match.params.eventName;

    let formData = new FormData();
    formData.append("event_name", eventName);
    formData.append("first_name", this.state.firstName);
    formData.append("last_name", this.state.lastName);
    formData.append("phone", this.state.phone);
    
    APIService.createSubscription(formData).then((response) => {
      console.log("=======", response.data);
      
      this.setState({ 
        successMsg: response.data.message,
        errorMsg  : "", 
      });
    }).catch(() => {
      this.setState({ errorMsg: "An error occurred!" });
    });
  }

  render() {
    return (
      <div>
        <header>
          <div className="title">
            <h4 className="align-center">Company Name - DONO Play</h4>
          </div>
        </header>

        <div className="main-content subscription-page">
          <div className="container">
            <div className="msg-section">
              <p className="success">{ this.state.successMsg }</p>
              <p className="error">{ this.state.errorMsg }</p>
            </div>

            <div className="firstname">
              <label>First Name:</label>
              <input type="text" onChange={ event => this.setState({firstName: event.target.value}) } />
            </div>

            <div className="lastname">
              <label>Last Name:</label>
              <input type="text" onChange={ event => this.setState({lastName: event.target.value}) } />
            </div>

            <div className="phone">
              <label>Phone Number*:</label>
              <input type="number" onChange={ event => this.setState({phone: event.target.value}) } />
            </div>

            <div className="btn-section align-center">
              <button onClick={ this.subscribe } disabled={ this.state.phone.length < 1 }>Play</button>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default EventSubscription;