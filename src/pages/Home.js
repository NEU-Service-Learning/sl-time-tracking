import React, { Component } from 'react'

import Card from '../components/Card'

class Home extends Component {
	render () {
		return (
			<div className="ui container">
				<div className="ui three column stackable grid">
					<div className="column">
						<h1>Heading 1</h1>
						<h2>Heading 2</h2>
						<h3>Heading 3</h3>
						<h4>Heading 4</h4>
						<h5>Heading 5</h5>
						<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
					</div>
					<div className="column">
						<Card />
					</div>
					<div className="column">
						<h2>Example body text</h2>
						<p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
						<p><small>This line of text is meant to be treated as fine print.</small></p>
						<p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
						<p>The following snippet of text is <em>rendered as italicized text</em>.</p>
						<p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
