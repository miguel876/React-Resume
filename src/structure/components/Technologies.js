import React, { Component } from 'react'
import TechnologiesScore from './TechnologiesScore';

export default class Technologies extends Component {
  render() {
    return (
        <div id="skills" className="mt-300 pb-5 bg-white">
        <div className="container w-75 w-sm-50">
            <div className="row">
                <div className="col">
                    <h1 className="text-center pt-5 pb-1 pb-sm-5 mt-5 mb-5">Technologies and Methodologies</h1>
                    <div className='row'>
                        <div className="col-12 col-sm-6 text-center">
                            <TechnologiesScore score={5} label="React"/>
                            <TechnologiesScore score={4} label="Redux" />
                            <TechnologiesScore score={4} label="MUI" />
                            <TechnologiesScore score={3} label="SASS" />
                            <TechnologiesScore score={3} label="Styled Components" />
                            <TechnologiesScore score={3} label="TypeScript" />
                            <TechnologiesScore score={4} label="Javascript" />
                            <TechnologiesScore score={4} label="JQuery" />
                            <TechnologiesScore score={4} label="HTML CSS" />

                        </div>
                        <div className="col-12 col-sm-6 text-center">
                            <TechnologiesScore score={3} label="GIT" />
                            <TechnologiesScore score={3} label="JIRA/Confluence" />
                            <TechnologiesScore score={3} label="SCRUM" />
                        </div>
                    </div>
                    <div className='row mt-5 float-right f-12'>The score is defined by the use (work or personal) and knowledge of the technology/methodology</div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
