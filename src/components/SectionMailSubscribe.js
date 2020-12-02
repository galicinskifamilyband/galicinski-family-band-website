import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class SectionMailSubscribe extends React.Component {
    state = {
      email: "",
      responseMessage: ""
    }
    handleInputChange = event => {
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        [name]: value,
      })
    }
    handleSubmit = async (e) => {
      e.preventDefault();
      const result = await addToMailchimp(this.state.email)
      this.setState({message: result.msg});
    }


    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block block-hero outer">
              <div className="inner">
                {_.get(section, 'title', null) && (
                <div className="block-header inner-sm">
                  <h1 className="block-title">{_.get(section, 'title', null)}</h1>
                </div>
                )}
                {_.get(section, 'content', null) && (
                <div className="block-content inner-sm">
                  {markdownify(_.get(section, 'content', null))}
                </div>
                )}
                {_.get(section, 'actions', null) && (
                <div className="block-buttons inner-sm">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                </div>
                )}

                <form name="subscribeForm" method="POST" id="subscribe-form" className="subscribe-form" onSubmit={this.handleSubmit}>
                  <div className="message" dangerouslySetInnerHTML={{ __html: this.state.message}} />
                  <div className="form-row">
                    <label>
                      <span className="screen-reader-text">Email address</span>
                      <input className="subscribe-email" type="email" name="email" placeholder="Enter Email Address..."
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    </label>
                  </div>
                  <button className="button" type="submit">Subscribe</button>
                </form>

              </div>
            </section>
        );
    }
}