import React from 'react';
import axios from 'axios';
import POIModal from './POIModal';

const typeAheadApi = 'http://localhost:8080/type_ahead?name='

class Gaode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      tips: [],
      tip: '',
      poi_modal_visible: false
    }
    this.inputHandler = this.inputHandler.bind(this)
    this.chooseTip = this.chooseTip.bind(this)
    this.showPOI = this.showPOI.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  inputHandler(e) {
    if (e.target.value.length === 0) {
      this.setState({
        tips: [],
        name: ''
      })
      return
    }
    var value = e.target.value
    this.setState({
      name: value
    })
    axios.get(typeAheadApi + e.target.value)
      .then(res => {
        this.setState({
          tips: res['data']['tips']
        })
      })
  }

  chooseTip(e) {
    var index = parseInt(e.target.value, 10)
    var tip = this.state.tips[index]
    this.setState({
      name: tip['name'],
      tips: [],
      tip: tip
    })
  }

  showPOI(e) {
    this.setState({
      poi_modal_visible: true
    })
  }

  handleOpenModal () {
    this.setState({ poi_modal_visible: true });
  }

  handleCloseModal () {
    this.setState({ poi_modal_visible: false });
  }

  showPOIDetail(){
    const {
      poi_modal_visible,
    } = this.state;
    if (poi_modal_visible) {
      return(
        <POIModal
          id={this.state.tip.id}
          handleCloseModal={this.handleCloseModal}
        />
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <form>
          <div className="form-group">
            <label >高德自动补全api</label>
            <input className="form-control form-control-lg" type="text" placeholder="输入你想去的地方" value={this.state.name} onChange={this.inputHandler}/>
            <div className="list-group">
              {this.state.tips.map((tip, index) =>
                <button type="button" className="list-group-item list-group-item-action" onClick={this.chooseTip} value={index} key={index}>{tip['name']}</button>
              )}
            </div>
          </div>
        </form>
        {this.showPOIDetail()}
        {
          this.state.tip.length !== 0 &&
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Id</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticId" value={this.state.tip['id']}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticName" value={this.state.tip['name']}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">District</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticDistrict" value={this.state.tip['district']}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Adcode</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticAdcode" value={this.state.tip['adcode']}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Location</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticLocation" value={this.state.tip['location']}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Typecode</label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="staticTypeCode" value={this.state.tip['typecode']}/>
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg" onClick={this.showPOI}>查看POI详情</button>
          </form>
        }
      </div>
    )
  }
}

export default Gaode;
