import React, { Component } from 'react';

class Wrapper extends Component {
	renderNavbar() {
		return (
			<div style={{ padding: '2rem 0' }} className="ui container">
				<div className="ui secondary menu">
				  <div className="active item">Link</div>
				  <a className="item">Link</a>
				  <div className="ui dropdown item" tabindex="0">
				    Dropdown
				    <i className="dropdown icon"></i>
				    <div className="menu" tabindex="-1">
				      <div className="item">Action</div>
				      <div className="item">Another Action</div>
				      <div className="item">Something else here</div>
				      <div className="divider"></div>
				      <div className="item">Separated Link</div>
				      <div className="divider"></div>
				      <div className="item">One more separated link</div>
				    </div>
				  </div>
				  <div className="right menu">
				    <div className="item">
				      <div className="ui action left icon input">
				        <i className="search icon"></i>
				        <input type="text" placeholder="Search" />
				        <button className="ui button">Submit</button>
				      </div>
				    </div>
				    <a className="item">Link</a>
				  </div>
				</div>
			</div>
		)
	}

	render () {
		const { children } = this.props
		return (
			<div>
				{this.renderNavbar()}
				{children}
			</div>
		)
	}
}

export default Wrapper
