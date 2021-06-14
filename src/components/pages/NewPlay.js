import React from 'react';
import Hearder from '../common/Header';
import { InfoOutlined } from '@material-ui/icons';
import APIService from "../../services/api.services";

class NewPlay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      companyId     : '1',
      eventName     : '',
      playUrl       : '',
      howMany       : '',
      howMuch       : '',
      minValue      : '',
      maxValue      : '',
      graphicFile   : undefined,
      isExistFile   : false,
      scheduledTime : '',
      successMsg    : '',
      alertMsg      : '',
      errorMsg      : '',
    }

    this.giftGraphic = React.createRef();
    this.eventNameChange = this.eventNameChange.bind(this);
    this.generatePlayUrl = this.generatePlayUrl.bind(this);
    this.triggerInputFile = this.triggerInputFile.bind(this);
    this.selectFile = this.selectFile.bind(this);
    this.submit = this.submit.bind(this);
  }

  eventNameChange(e) {
    this.setState({ eventName: e.target.value })
  }

  generatePlayUrl() {
    let formData = new FormData();
    formData.append("company_id", this.state.companyId);
    formData.append("event_name", this.state.eventName);
    
    APIService.createPlay(formData).then((response) => {

        console.log("====response===", response)
        
        if( response.data.message == "Exist" ) {
          this.setState({ alertMsg: "Event Name is already exist!" });
        } else if( response.data.message == "Exist" ) {
          this.setState({ errorMsg: "Error occurred!" });
        } else {
          this.setState({ 
            playUrl : this.state.eventName, 
            successMsg: "", 
            alertMsg: "", 
            errorMsg: "", 
          });
        }
        
    }).catch(() => {
      this.setState({ errorMsg: "An error occurred!" });
    });
  }

  triggerInputFile() {
    this.giftGraphic.current.click();
  }

  selectFile(event) {
    this.setState({
      graphicFile: event.target.files[0],
      isExistFile: true
    });
  }

  submit() {
    if( !this.state.playUrl ) {
      this.setState({ 
        alertMsg: "Please generate a play url!", 
        successMsg: "", 
        errorMsg: "", 
      });
      return
    }

    let formData = new FormData();
    formData.append("event_name", this.state.eventName);
    formData.append("how_many", this.state.howMany);
    formData.append("how_much", this.state.howMuch);
    formData.append("min_value", this.state.minValue);
    formData.append("max_value", this.state.maxValue);
    formData.append("graphic_file", this.state.graphicFile);
    formData.append("is_exist_file", this.state.isExistFile);
    formData.append("when_to_send", this.state.scheduledTime);

    APIService.createPlay(formData).then((response) => {
        console.log("response.data = ", response.data);
        
        this.setState({
          successMsg: response.data.message,
          eventName     : '',
          playUrl       : '',
          howMany       : '',
          howMuch       : '',
          minValue      : '',
          maxValue      : '',
          graphicFile   : undefined,
          scheduledTime : '',
        })
    }).catch(() => {
      this.setState({
        errorMsg: "An error occurred!",
      })
    });

    this.setState({
      scheduledTime: undefined,
    });
  }

  render() {
    return (
      <div>
        <Hearder/>
        
        <div className="main-content new-play-page">
          <div className="container">
            <div className="msg-section">
              <p className="success">{ this.state.successMsg }</p>
              <p className="alert">{ this.state.alertMsg }</p>
              <p className="error">{ this.state.errorMsg }</p>
            </div>

            <div className="event-name-section">
              <label>Event Name:</label>
              <input type="text" value={ this.state.eventName } onChange={ this.eventNameChange } />
              <button disabled={ this.state.eventName.length < 1 } onClick={ this.generatePlayUrl }>Generate DONO Play URL</button>
              <InfoOutlined className="info-icon" />
            </div>

            <div className="event-url-section">
              <label>Event URL: </label>
              <label>http://www.donocard.com/{ this.state.companyId }/{ this.state.playUrl }</label>
              <button>Copy</button>
              <InfoOutlined className="info-icon" />
            </div>

            <div className="participants-section">
              <label>Participants Count:</label>
              <label className="participants-count">117</label>
              <button>Refresh</button>
              <button>Export</button>
              <InfoOutlined className="info-icon" />
            </div>

            <div className="how-many-section">
              <label>How many DONO gifts?</label>
              <input type="number" onChange={ event => this.setState({howMany: event.target.value}) } />
              <InfoOutlined className="info-icon" />
            </div>

            <div className="how-much-section">
              <label>How much money you want to give away in this event?</label>
              <input type="number" onChange={ event => this.setState({howMuch: event.target.value}) }  />
              <InfoOutlined className="info-icon" />
            </div>

            <div className="min-max-section">
              <label>Minimum gift value?</label>
              <input type="number" onChange={ event => this.setState({minValue: event.target.value}) }  />
              <InfoOutlined className="info-icon max-info-icon" />
              <label className="max-label">Maximum gift value?</label>
              <input type="number" onChange={ event => this.setState({maxValue: event.target.value}) }  />
              <InfoOutlined className="info-icon" />
            </div>

            <div className="gift-graphic-section">
              <label>Gift Graphic</label>
              <input type="file" className="display-none" ref={ this.giftGraphic } onChange={ this.selectFile } />
              <button className="upload-btn" onClick={ this.triggerInputFile }>Upload</button>
              <InfoOutlined className="info-icon" />
              <button className="preview-btn">Preview</button>
            </div>

            <div className="when-section">
              <label>When to send?</label>
              <input type="datetime-local" onChange={ event => this.setState({scheduledTime: event.target.value}) }  />
              <InfoOutlined className="info-icon" />
            </div>

            <div className="btn-section align-right">
              <button>Cancel</button>
              <button onClick={ this.submit }>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPlay;