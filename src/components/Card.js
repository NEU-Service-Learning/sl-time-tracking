import React, { Component, PropTypes } from 'react'

class Card extends Component {
	static propTypes = {
		content: PropTypes.arrayOf(PropTypes.shape({ onClick: PropTypes.func, icon: PropTypes.string, text: PropTypes.string })),
		description: PropTypes.string,
		onClick: PropTypes.func,
		subtitle: PropTypes.string,
		title: PropTypes.string,
	}

	static defaultProps = {
		content: [{
			icon: "user icon",
			onClick: () => {},
			text: "22 friends",
		}],
		description: "Kristy is an art director living in New York.",
		onClick: () => {},
		subtitle: "Joined in 2013",
		title: "Kristy",
	}

	render () {
		const { title, subtitle, description, content, onClick } = this.props
		return (
			<div onClick={onClick} className="ui card">
			  <div className="image">
			    <img alt="Card" src="http://semantic-ui.com/images/avatar2/large/kristy.png" />
			  </div>
			  <div className="content">
			    <a className="header">{title}</a>
			    <div className="meta">
			      <span className="date">{subtitle}</span>
			    </div>
			    <div className="description">
			      {description}
			    </div>
			  </div>
			  <div className="extra content">
					{content.map(item => (
						<a onClick={item.onClick} key={item.text}>
				      <i className={item.icon}></i>
				    	{item.text}
				    </a>
					))}
			  </div>
			</div>
		)
	}
}

export default Card
