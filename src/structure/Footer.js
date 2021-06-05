import React, { Component } from 'react'
import '../styles/Footer.scss';
import GithubImg from '../resources/images/github-brands.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="https://github.com/miguel876" target="_blank">
                    Check this website code and my other projects on my personal github!
                    <img src={GithubImg} />
                </a>
            </footer>
        )
    }
}
