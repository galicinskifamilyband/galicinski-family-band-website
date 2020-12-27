import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionImage extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block section_image">
	            <div className="inner">
					<a href={_.get(section, 'action_url', null)}><img src={_.get(section, 'image_url', null)} /></a>
				</div>
            </section>
        );
    }
}
