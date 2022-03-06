import React, { Component } from 'react'
import '../../styles/Information.scss';

export default class Information extends Component {
    render() {
        return (
            <div id="languages" className="pt-5 pb-5 mt-300 bg-white">
                <div className="container w-75 w-sm-100">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center mb-5">Languages</h1>
                            <div className="ml-auto mr-auto d-flex info-row">
                                <div className="w-50">Portuguese</div>
                                <div><b>Native</b></div>
                            </div>
                            <div className="ml-auto mr-auto d-flex info-row mb-5">
                                <div className="w-50">English</div>
                                <div><b>B2</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
