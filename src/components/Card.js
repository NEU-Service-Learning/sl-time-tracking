import React, { Component, PropTypes } from 'react';

class Card extends Component {
	static propTypes = {
		title: PropTypes.string,
		subtitle: PropTypes.string,
		description: PropTypes.string,
		content: PropTypes.arrayOf(PropTypes.shape({ link: PropTypes.string, icon: PropTypes.string, text: PropTypes.string })),
	}

	static defaultProps = {
		title: "Kristy",
		subtitle: "Joined in 2013",
		description: "Kristy is an art director living in New York.",
		content: [{
			icon: "user icon",
			text: "22 friends",
			link: "#",
		}],
	}

	render () {
		const { title, subtitle, description, content } = this.props
		return (
			<div className="ui card">
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
						<a href={item.link}>
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
