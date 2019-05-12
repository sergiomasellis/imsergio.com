import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

class ResumeComponent extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.onSetUpdate(this.update);
  }

  update(mouseX, mouseY, canvasWidth, canvasHeight) {
    if (!this.props.loaded) return false;
  }

  render() {
    return (
      <div
        className={`resume ${
          this.props.loaded ? 'resume--loaded' : 'resume--not-loaded'
        } ${this.props.loaded ? 'show' : 'hide'}`}
      >
        <div className="info">
          <h1>Resume</h1>
          <a href="https://www.dropbox.com/s/s3zddzd9kvroa2q/Resume.pdf?dl=0" download> <FontAwesomeIcon icon={faDownload} /> Download</a>
        </div>

        <div className="job">
          <div className="job__item">
            <h2>BBVA</h2>
            <h3>Vice President, Creative Technologist</h3>
            <h4>May 2017 - Present</h4>
            
            <ul>
              <li>
                Led the technical team behind the creation of 6 bank sites within
                a multiproduct platform called BBVA Experience using both AWS and
                GCP running on PHP / Javascript and wordpress for CMS to static
                site generator.
              </li>
              <li>
                Worked on the creation of a data-driven dashboard utilizing
                technologies like Vue.js, Smartsheets, and Node.js backend.
              </li>
              <li>
                Created a brand portal hub to store, organize, document, and
                distribute BBVA assets.
              </li>
              <li>
                Created a Javascript library based on the global design system
                with reusable web components
              </li>
            </ul>
          </div>

          <div className="job__item">
            <h2>CAPITAL ONE</h2>
            <h3>Principal Software Engineer</h3>
            <h4>APR 2016 - May 2017</h4>
            <ul>
              <li>Worked as a senior developer under the auto finance branch of capital one.</li>
              <li>Converted marketing landing pages over to a custom angular.js front end from their legacy platform.</li>
              <li>Pioneered the use of Angular 2.0 within the updated marketing pages with the use of Contentful CMS to generate the content.</li>
              <li>Created seamless Adobe Target experiences across multiple platforms.</li>
              <li>Engineered a solution which allowed for voice search within the capital one auto finance site.</li>
              <li>Helped mentor and train junior developers.</li>
            </ul>
          </div>

          <div className="job__item">
            <h2>BARCLAYS </h2>
            <h3>Assistant Vice President, Front End Development</h3>
            <h4>MAR 2016 - APR 2017</h4>
            <ul>
              <li>Created a C++ media wall application utilizing bleeding edge computer vision technology, Tuio, and best in class animations.</li>
              <li>Created an in house Kanban board application using technologies like Meteor.js and Less was used for styling.</li>
              <li>Setup an automated system for application deployment utilizing technologies like Ruby, Python, Git, and Node.js.</li>
              <li>Utilized tools like Framer.js for rapid prototyping experiments for a wide array of applications.</li>
              <li>Created a 12 month program for the betterment and improvement of developers in order to expand and sharpen team skills.</li>
            </ul>
          </div>

          <div className="job__item">
            <h2>INFOVISION</h2>
            <h3>Lead Web Developer</h3>
            <h4>OCT 2011 - APR 2015</h4>
            <ul>
              <li>Working on creating a full working analytics dashboard using technologies like svg and ember.js</li>
              <li>Created an Ipad HTML5 quiz game in javascript.</li>
              <li>Designed conceptual work and prototypes using adobe photoshop.</li>
              <li>Experience with Disability Discrimination Act (DDA) Compliance and design.</li>
              <li>Worked to create a framework to simplify the creation of hybrid IOS applications.</li>
              <li>Created a contest application written in PHP and Codeigniter launched for the 2012 London Olympics.</li>
            </ul>
          </div>
          <div className="job__item">
            <h2>FIGMENT GROUP</h2>
            <h3>Web Designer</h3>
            <h4>FEB 2011 - SEPT 2011</h4>
            <ul>
              <li>Built an inventory management system in Codeigniter to manage orders and warehouse inventory with use of PDO.</li>
              <li>Built a script in PHP5 which used MaxMind GeoIP to manage client rates from different countries.</li>
              <li>Built a news management system which in order to easily update a Flash website.</li>
              <li>Built a fully custom Wordpress template using CSS3 and PHP5.</li>
              <li>Built a mobile website for a using CSS3 and jQuery Mobile.</li>
              <li>Tracked flash ad Campaigns using Google Analytics.</li>
              <li>Revamped an existing Classic ASP calendar application</li>
            </ul>
          </div>
          <div className="job__item">
            <h2>ZEROFRACTAL</h2>
            <h3>Web Developer</h3>
            <h4>OCT 2010 - JAN 2011</h4>
            <ul>
              <li>Built a Codeigniter website with the use of CSS3 animation, WebKit acceleration, AJAX, jQuery, and Google Maps API.</li>
              <li>Worked as part of a team who built a fully working Flash AS3 and PHP5 website in 2 days.</li>
              <li>Built a mobile website for a using CSS3 and jQuery Mobile</li>
            </ul>
          </div>
          <div className="job__item">
            <h2>SAPIENTNITRO</h2>
            <h3>Flash Developer</h3>
            <h4>MAY 2010 - AUG 2010</h4>
            <ul>
              <li>Worked on Flash ads for companies like Sprint, M&M, and GM.</li>
              <li>Worked on email campaigns with for various P&G projects</li>
            </ul>
          </div>
          <div className="job__item">
            <h2>EXPOBYTES</h2>
            <h3>E-commerce Developer</h3>
            <h4>MAY 2008 - APR 2010</h4>
            <ul>
              <li>Built a Codeigniter client point system which allowed clients to turn in vendor sales in exchange for reward points.</li>
              <li>Built a Codeigniter shipping system that estimated the amount of shipping boxes fit in a container.</li>
              <li>Built Email Campaigns using Constant Contact.</li>
              <li>Created Print ad’s used for publications.</li>
              <li>Built and designed two websites running on the Magento e-commerce platform.</li>
            </ul>
          </div>
          <div className="job__item">
            <h2>LATIN MISSIONS</h2>
            <h3>Web Manager</h3>
            <h4>APR 2007 - APR 2008</h4>
            <ul>
              <li>Worked as the main web developer in charge of update website content as well as creating new websites for events and departments.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeComponent;
