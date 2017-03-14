import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sampleAction } from '../actions/index';

export class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <h1>Hello!</h1>;
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ sampleAction }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);