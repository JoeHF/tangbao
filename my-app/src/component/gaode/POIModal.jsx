import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import axios from 'axios';

const searchPOI = 'http://localhost:8080/search_poi_by_id?id='

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '500px'
  }
};

class POIModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poi: {
        id: this.props.id
      }
    }
  }

  componentDidMount() {
    axios.get(searchPOI + this.props.id)
      .then(res => {
        this.setState({
          poi: res.data.pois[0]
        });
      })
  }

  render() {
    return(
      <ReactModal
        isOpen={true}
        contentLabel="Inline Styles Modal Example"
        style={customStyles}
      >
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.id}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.address}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Adcode</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.adcode}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Adname</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.adname}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Citycode</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.citycode}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Cityname</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.cityname}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Typecode</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.typecode}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Type</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.type}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Gridcode</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.gridcode}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Location</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.location}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.name}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Navi_poiid</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.navi_poiid}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Pcode</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.pcode}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Pname</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.pname}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Tel</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.poi.tel}/>
            </div>
          </div>
        </form>
        <button className="btn btn-primary btn-lg" onClick={this.props.handleCloseModal}>Close Modal</button>
      </ReactModal>
    )
  }
}

POIModal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default POIModal;
