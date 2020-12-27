import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionBar extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="action_bar">
	            <div className="inner">
					<a className="bar_button_desktop" href={_.get(section, 'action_url', null)}><img className="bar_button_desktop" src={_.get(section, 'action_button', null)} /></a>
					<div className="bar_left">
						<img className="bar_icon" src={_.get(section, 'title_icon', null)} />
						<h1>{_.get(section, 'title', null)}</h1>
						<p>{_.get(section, 'description', null)}</p>
					</div>
					<a className="bar_button_mobile" href={_.get(section, 'action_url', null)}><img className="bar_button_mobile" src={_.get(section, 'action_button', null)} /></a>
				</div>
            </section>
        );
    }
}
