import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';
import FormField from './FormField';

export default class SubscribeForm extends React.Component {
    state = {
        email: '',
        message: ''
    };
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <form name="subscribeForm" method="POST" id="subscribe-form" className="subscribe-form">
                <div className="form-row">
                    <label>
                        <span className="screen-reader-text">Email address</span>
                        <input className="subscribe-email" type="email" name="email" placeholder="Enter Email Address..." value="{this.state.email}" onChange="{this.handleInputChange}" />
                    </label>
                </div>
                <button className="button" type="submit">
                    Subscribe
                </button>
            </form>
        );
    }
}
