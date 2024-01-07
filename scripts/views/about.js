var React = require("react");

var About = React.createClass({
  render: function () {
    return (
      <div className="about">
        <div className="jumbotron">
          <div className="container">
            <h1>About</h1>
          </div>
        </div>
        <div className="container">
          <p>
            As a seasoned professional, I bring forth a wealth of experience
            coupled with exceptional organizational skills and an adaptable
            mindset. Over the course of more than a decade, I have cultivated my
            expertise while collaborating with esteemed clients and have
            fortified my knowledge through a diverse educational background.
          </p>
          <p>
            My continuous pursuit of learning new technologies positions me as a
            dynamic engineer capable of seamlessly integrating into various
            roles. I am particularly passionate about crafting robust
            thick-client interactive Single Page Applications, and my commitment
            to staying abreast of the latest industry trends equips me to
            implement optimal solutions tailored to client requirements.
          </p>
          <p>
            I thrive in environments that prioritize commitment and enthusiasm
            for technology. Such settings not only bring out the best in me but
            also provide an ideal platform to leverage my technical proficiency.
            My unwavering passion for delivering excellence, coupled with a
            drive to learn and implement cutting-edge technologies, empowers me
            to swiftly adapt to and conquer new challenges.
          </p>
          <hr />
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Core Skills and Libraries</h3>
              <ul className="list-group">
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">TypeScript</li>
                <li className="list-group-item">React.js</li>
                <li className="list-group-item">Next.js</li>
                <li className="list-group-item">Redux, Mobx, Sagas</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">GraphQL</li>
                <li className="list-group-item">Cypress - E2E testing</li>
                <li className="list-group-item">Jest - Unit testing</li>
                <li className="list-group-item">React testing library</li>
                <li className="list-group-item">Express and Hapi Server</li>
                <li className="list-group-item">HTML(5)</li>
                <li className="list-group-item">CSS(3)</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">jQuery</li>
                <li className="list-group-item">Material UI</li>
                <li className="list-group-item">Angular</li>
                <li className="list-group-item">Dojo</li>
                <li className="list-group-item">Backbone</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Tools</h3>
              <ul className="list-group">
                <li className="list-group-item">Docker</li>
                <li className="list-group-item">Contentful - CMS</li>
                <li className="list-group-item">
                  CSS preprocessor (Sass, LESS){" "}
                </li>
                <li className="list-group-item">
                  Circle CI, Concourse (CI/CD)
                </li>
                <li className="list-group-item">Humio and Datadog</li>
                <li className="list-group-item">Redis - Caching</li>
                <li className="list-group-item">Web Sockets</li>
                <li className="list-group-item">Bit - React Components</li>
                <li className="list-group-item">Story Book - React</li>
                <li className="list-group-item">Agile Methodologies</li>
                <li className="list-group-item">NPM</li>
                <li className="list-group-item">Figma, InVision</li>
                <li className="list-group-item">Git and SVN</li>
                <li className="list-group-item">Sentry</li>
                <li className="list-group-item">Jira</li>
                <li className="list-group-item">
                  Vite, Webpack, Require , Grunt and Browserify
                </li>
                <li className="list-group-item">
                  Responsive Design, Fluid Grids and Media Queries
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Exposed to</h3>
              <ul className="list-group">
                <li className="list-group-item">HighCharts</li>
                <li className="list-group-item">AWS and GCP</li>
                <li className="list-group-item">Serverless</li>
                <li className="list-group-item">JWT</li>
                <li className="list-group-item">DynamoDB</li>
                <li className="list-group-item">Web3</li>
                <li className="list-group-item">Flask</li>
                <li className="list-group-item">Crypto Currency</li>
                <li className="list-group-item">BigQuery</li>
                <li className="list-group-item">Elastic Search</li>
                <li className="list-group-item">MongoDB</li>
              </ul>
            </div>
          </div>
          <br />
          <div className="text-right">
            <a className="linkStyle1" href="#/projects">
              <i className="fa fa-angle-right"></i>
              <span>Projects</span>
            </a>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = About;
