import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
	View, 
	Text,
	Button
} from 'native-base'; 

export default class BookPreview extends Component {
	render() {
		const book = this.props.book
		return(
			<View>
				<Text>{book.title}</Text>
			</View>)
	}
}

BookPreview.propTypes = {
	book: PropTypes.shape({
			title: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
			author: PropTypes.string.isRequired
		})
}