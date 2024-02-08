import React, { Component } from 'react';
import '../../styles/Projects.scss';
import _ from "lodash";

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects bg-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center pt-5 pb-1 pb-sm-5 mt-5">Projects</h1>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-12 col-sm-3 relative pt-5 pb-3 mt-sm-0 sticky-m">
              <div className="company-data">
                <div className="company-date">
                  <div className="company-start-date">07/2023</div>
                  <span> - </span>
                  <div className="company-end-date">01/2024</div>
                 </div>
                <div className="company-name">Bliss Applications</div>
              </div>
            </div>
            <div className="col-sm-9 col-12 text-justify text-sm-left">
            <div className="project-container">
            <div className="project">
              <div className="project-description pt-5">
                <p>Development of <mark>Cartier</mark> website:
                Development of new features and bug fixing. The development was made with React, Typescript and Styled Components by following a Zeplin design with pixel perfect. 
                The methodology used was SCRUM with daily meetings and 2 week Sprints. For unit testing Jest was used with React testing library.
                </p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>React</li>
                  <li>Typescript</li>
                  <li>Styled Components</li>
                  <li>Storybook</li>
                  <li>Jest and RTL</li>
                  <li>JIRA and Confluence</li>
                  <li>GIT</li>
                  <li>CI/CD</li>
                  <li>REST API</li>
                </ul>
                </div>
              </div>

              <div className="project pt-5">
                <div className="project-img"></div>
                <div className="project-description pt-5">
                <p>Development of <mark>Banks Institutional Websites</mark> using a CMS. The project consists in creating the website according to the design team drawing. Development of an exchange widget component hosted by an HTTP Application Server.</p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>dotCMS</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                </ul>
                </div>

              </div>

            </div>

            </div>
          </div>
          <div className="row pb-5">
            <div className="col-12 col-sm-3 relative pt-5 pb-3 mt-sm-0 sticky-m">
              <div className="company-data">
                <div className="company-date">
                  <div className="company-start-date">09/2018</div>
                  <span> - </span>
                  <div className="company-end-date">07/2023</div>
                 </div>
                <div className="company-name">Asseco PST</div>
              </div>
            </div>
            <div className="col-sm-9 col-12 text-justify text-sm-left">
            <div className="project-container">
            <div className="project">
              <div className="project-description pt-5">
                <p>Development of a <mark>Banking</mark> platform (React):
                Development of the front-end using React. The project consists in creating a banking platform solution using React (Functional) with the help of Material UI. The tasks are defined in JIRA and the documentation in Confluence. The project uses GIT for version controlling and collaboration, using the Gitflow methodology. 
                The front-end and back-end communications are made with RESTfull webservices. In the front-end the data is retrieved accessing the API endpoints in JSON. 
                The APIs are tested using Swagger. The application server is deployed in NGINX.
                </p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>React</li>
                  <li>Material UI</li>
                  <li>JIRA and Confluence</li>
                  <li>GIT</li>
                  <li>REST</li>
                  <li>Swagger</li>
                  <li>API Endpoints</li>
                </ul>
                </div>
              </div>

              <div className="project pt-5">
                <div className="project-img"></div>
                <div className="project-description pt-5">
                <p>Development of <mark>Banks Institutional Websites</mark> using a CMS. The project consists in creating the website according to the design team drawing. Development of an exchange widget component hosted by an HTTP Application Server.</p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>dotCMS</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                </ul>
                </div>

              </div>

            </div>

            </div>
          </div>

          <div className="row mt-5 pb-5">
            <div className="col-12 col-sm-3 relative pt-5 pb-3 mb-5 mb-sm-0 mt-sm-0 sticky-m">
              <div className="company-data">
                <div className="company-date">
                  <div className="company-start-date">03/2018</div>
                  <span> - </span>
                  <div className="company-end-date">09/2018</div>
                </div>
                <div className="company-name">NO SHAPE</div>
              </div>
              
            </div>
            <div className="col-sm-9 col-12 text-justify text-sm-left">
            <div className="project-container">
              <div className="project">
              <div className="project-description">
                <p>Development of an <mark>internal prize rewards</mark> web application. The development was made using .NET, Javascript, HTML, Bootstrap and CSS. The database was SQL Server.</p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>.NET</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                  <li>SQL Server</li>
                </ul>
                </div>

              </div>

              <div className="project pt-5">
              <div className="project-description pt-5">
                <p>Development of the <mark>Portuguese Football Federation</mark> fans and associates Website (Portugal +) front-end (design). The development was made using Javascript, JQuery, HTML, Bootstrap and CSS.
  
                  </p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                </ul>
                </div>
              </div>

              <div className="project pt-5">
              <div className="project-description pt-5">
                <p>Development of a <mark>Image and Video gallery Website</mark> front-end. The development was made using .NET, Javascript, JQuery, HTML, Bootstrap and CSS.</p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>.NET</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                </ul>
                </div>
              </div>

              <div className="project pt-5">
              <div className="project-description pt-5">
                <p>Maintenance of client <mark>web application</mark>. The software was developed in PHP (Laravel), Javascript, HTML and CSS. The project consisted in bug fixing mainly in the front-end.</p>
                <p>Tecnologies used:</p>
                <ul>
                  <li>PHP (Laravel)</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>HTML, CSS and Bootstrap</li>
                </ul>
                </div>
              </div>


            </div>

            </div>
          </div>

          <div className="row mt-5 pb-5">
            <div className="col-12 col-sm-3 relative pt-5 pb-3 mb-5 mb-sm-0 mt-sm-0 sticky-m">
              <div className="company-data">
                <div className="company-name">Education and Courses</div>
              </div>
              
            </div>
            <div className="col-sm-9 col-12 text-justify text-sm-left">
            <div className="project-container">
              <div className="project">
              <div className="project-description">
                <p className="company-date">2016 - 2017</p>
                <p><b>ATEC</b></p>
                <p>Technical Specialist In Technologies And Systems Programming</p>
                </div>

              </div>
              <div className="project">
              <div className="project-description pt-5">
                <p className="company-date">2019</p>
                <p><b>Affinity</b></p>
                <p>Affinity React Intermediate Course</p>
                </div>

              </div>
              <div className="project">
              <div className="project-description pt-5">
                <p className="company-date">2019</p>
                <p><b>Affinity</b></p>
                <p>Affinity React Begginer Course</p>
                </div>

              </div>
              <div className="project">
              <div className="project-description pt-5">
                <p className="company-date">2019</p>
                <p><b>Affinity</b></p>
                <p>Affinity Javascript ES6 Course</p>
                </div>

              </div>


            </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}
