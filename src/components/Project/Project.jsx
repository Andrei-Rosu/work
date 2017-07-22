import React, {Component} from 'react'
import GeoPattern from 'geopattern'

import Tag from '../Tag/Tag.jsx'
import styles from './Project.css'
import ProjectLinks from '../ProjectLinks/ProjectLinks.jsx'

export default class Project extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let pattern = GeoPattern.generate(this.props.name, {
			baseColor: '#d2f998'
		});
		document.getElementsByClassName(this.props.id)[0].style.backgroundImage = pattern.toDataUrl();
	}

	render() {
		// tags
		let tagsDOM = this.props.tags.map((t) =>
			<Tag key={t} name={t}/>
		);
		return (
			<div className={[styles.project, this.props.id].join(' ')}>
				<div className={styles.projectTitle}>
					{this.props.name}
					<ProjectLinks {...this.props}/>
				</div>
				{this.props.date &&
				<div className={styles.projectDate}>
					{this.props.date}
				</div>
				}
				<div className={styles.projectDesc}>{this.props.desc}</div>
				<div className={styles.emptySpace} />
				<div className={styles.projectTags}>{tagsDOM}</div>
			</div>
		)
	}
}