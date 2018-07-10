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
