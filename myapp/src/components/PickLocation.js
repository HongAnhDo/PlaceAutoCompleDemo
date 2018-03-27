import React, { Component } from 'react';
import ic_dimension1 from '../images/ic_dimension1.png';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputPlaceTop from './InputPlaceTop'
import InputPlaceBottom from './InputPlaceBottom'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import '../styles/PickLocation.css'
import {blue500} from 'material-ui/styles/colors'
import { reactLocalStorage } from 'reactjs-localstorage';
import VarConf from '../localstorage/VarConf'


class PickLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addressPickUp: "",
      idPlacePickUp: "",
      addressDrop: "",
      idPlaceDrop: ""

    }
    this.onSelectPlacePickUp = this.onSelectPlacePickUp.bind(this);
    this.onSelectPlaceDrop = this.onSelectPlaceDrop.bind(this);

  }

  onSelectPlacePickUp(address, idPlace) {
    this.setState({
      addressPickUp: address,
      idPlacePickUp: idPlace
    });

    reactLocalStorage.set(VarConf.pick_local.addressPickUp, address);
    reactLocalStorage.set(VarConf.pick_local.idPlacePickUp, idPlace);
  }

  onSelectPlaceDrop(address, idPlace) {
    this.setState({
      addressDrop: address,
      idPlaceDrop: idPlace,
    });

    reactLocalStorage.set(VarConf.pick_local.addressDrop, address);
    reactLocalStorage.set(VarConf.pick_local.idPlaceDrop, idPlace);
  }


  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <div className="containerPickLocation">
        <div className="containerSelectPlace">
          <div className="selectPlace">
            <div className="containerLeft">

              <i className="zmdi zmdi-pin-account" style={{ height: 'auto', width: 'auto', color: blue500, fontSize: '18px' }}></i>
              <div style={{ height: '20px', width: '1px', left: '49.5%', backgroundColor: '#616161', marginTop: '3px', marginBottom: '3px', position: 'relative' }}></div>
              <i className="zmdi zmdi-pin" style={{ height: 'auto', width: 'auto', color: 'red', fontSize: '18px' }}></i>

            </div>
            <InputPlaceTop onSelectPlace={this.onSelectPlacePickUp} hintTextInput="Điểm đón" />
            <InputPlaceBottom onSelectPlace={this.onSelectPlaceDrop} hintTextInput="Điểm đến" />
          </div>

        </div>
        <div className="containerSecond">
          <div className="containerSecondCenter" >
            <i className="zmdi zmdi-pin-drop" style={{ height: '20px', width: 'auto', marginTop: '6px' }}></i>
            <span className="textSelect">Chọn địa điểm trên bản đồ</span>
          </div>

        </div>

      </div>

    );
  }
}

export default PickLocation;