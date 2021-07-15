import React, { Component } from 'react'
import '../../styles/Information.scss';

export default class Information extends Component {
    render() {
        return (
            <div id="informations" className="mt-5 pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center info-title mb-5">Languages</div>
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
