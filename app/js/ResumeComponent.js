import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

class ResumeComponent extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.title = React.createRef();

    this.state = {};

    this.state.jobs = [
      {
        company: "JPMorgan Chase & Co.",
        position: "Vice President, AI-Driven Innovation & Cloud Architecture",
        timeFrame: "Aug 2019 - Present",
        achievements: [
          "Leading AI-driven innovation initiatives, implementing cutting-edge machine learning solutions and cloud-native architectures at enterprise scale.",
          "Architected and deployed AI-powered systems using LangGraph, VeRL, and advanced RAG (Retrieval-Augmented Generation) implementations.",
          "Directed global teams in developing cloud-native solutions on AWS and Azure, focusing on scalable AI infrastructure and MLOps pipelines.",
          "Spearheaded the integration of AI services with authentication and payment systems, enabling seamless AI-powered user experiences.",
          "Established AI governance frameworks and best practices for responsible AI development and deployment across the organization.",
          "Collaborated with cross-functional teams to implement AI solutions that drive business value and enhance customer experiences."
        ]
      },
      {
        company: "BBVA",
        position: "Vice President, Creative Technologist & Design Systems",
        timeFrame: "May 2017 - Aug 2019",
        achievements: [
          "Led technical innovation for BBVA Experience platform, architecting 6 bank sites using AWS and GCP with modern PHP/JavaScript stacks.",
          "Developed data-driven dashboards and analytics platforms using Vue.js, Node.js, and cloud-native architectures.",
          "Established enterprise design system with reusable web components and comprehensive documentation platform.",
          "Implemented CI/CD pipelines and automated deployment strategies for multi-cloud environments.",
          "Mentored and grew development teams, fostering innovation in fintech solutions and user experience design."
        ]
      },
      {
        company: "CAPITAL ONE",
        position: "Principal Software Engineer",
        timeFrame: "APR 2016 - May 2017",
        achievements: [
          "Worked as a senior developer under the auto finance branch of Capital One.",
          "Converted marketing landing pages over to a custom angular.js front end from their legacy platform.",
          "Pioneered the use of Angular 2.0 within the updated marketing pages with the use of Contentful CMS to generate the content.",
          "Created seamless Adobe Target experiences across multiple platforms.",
          "Engineered a solution which allowed for voice search of make model and colors of cars.",
          "Helped mentor and train junior developers."
        ]
      },
      {
        company: "BARCLAYS",
        position: "Assistant Vice President, Front End Development",
        timeFrame: "MAR 2016 - APR 2017",
        achievements: [
          "Created a C++ media wall application utilizing bleeding edge computer vision technology, Tuio, and best in class animations.",
          "Created an in house Kanban board application using technologies like Meteor.js and Less was used for styling.",
          "Setup an automated system for application deployment utilizing technologies like Ruby, Python, Git, and Node.js.",
          "Utilized tools like Framer.js for rapid prototyping experiments for a wide array of applications.",
          "Created a 12 month program for the betterment and improvement of developers in order to expand and sharpen team skills."
        ]
      },
      {
        company: "INFOVISION",
        position: "Lead Web Developer",
        timeFrame: "OCT 2011 - APR 2015",
        achievements: [
          "Working on creating a full working analytics dashboard using technologies like SVG and Ember.js",
          "Created an Ipad HTML5 quiz game in javascript.",
          "Designed conceptual work and prototypes using adobe photoshop.",
          "Experience with Disability Discrimination Act (DDA) Compliance and design.",
          "Worked to create a framework to simplify the creation of hybrid IOS applications.",
          "Created a contest application written in PHP and Codeigniter launched for the 2012 London Olympics."
        ]
      },
      {
        company: "FIGMENT GROUP",
        position: "Web Designer",
        timeFrame: "FEB 2011 - SEPT 2011",
        achievements: [
          "Built an inventory management system in Codeigniter to manage orders and warehouse inventory with use of PDO.",
          "Built a script in PHP5 which used MaxMind GeoIP to manage client rates from different countries.",
          "Built a news management system which in order to easily update a Flash website.",
          "Built a fully custom Wordpress template using CSS3 and PHP5.",
          "Built a mobile website for a using CSS3 and jQuery Mobile.",
          "Tracked flash ad Campaigns using Google Analytics.",
          "Revamped an existing Classic ASP calendar application."
        ]
      },
      {
        company: "ZEROFRACTAL",
        position: "Web Developer",
        timeFrame: "OCT 2010 - JAN 2011",
        achievements: [
          "Built a Codeigniter website with the use of CSS3 animation, WebKit acceleration, AJAX, jQuery, and Google Maps API.",
          "Worked as part of a team who built a fully working Flash AS3 and PHP5 website in 2 days.",
          "Built a mobile website for a using CSS3 and jQuery Mobile.",
        ]
      },
      {
        company: "SAPIENTNITRO",
        position: "Flash Developer",
        timeFrame: "MAY 2010 - AUG 2010",
        achievements: [
          "Worked on Flash ads for companies like Sprint, M&M, and GM.",
          "Worked on email campaigns with for various P&G projects."
        ]
      },
      {
        company: "EXPOBYTES",
        position: "E-commerce Developer",
        timeFrame: "MAY 2008 - APR 2010",
        achievements: [
          "Built a Codeigniter client point system which allowed clients to turn in vendor sales in exchange for reward points.",
          "Built a Codeigniter shipping system that estimated the amount of shipping boxes fit in a container.",
          "Built Email Campaigns using Constant Contact.",
          "Created Print ad’s used for publications.",
          "Built and designed two websites running on the Magento e-commerce platform."
        ]
      },
      {
        company: "LATIN MISSIONS",
        position: "Web Manager",
        timeFrame: "APR 2007 - APR 2008",
        achievements: [
          "Worked as the main web developer in charge of update website content as well as creating new websites for events and departments"
        ]
      }
    ]
  }

  componentDidMount() {
    this.props.onSetUpdate(this.update);

    let text = this.title.current;
    let newDom = '';
    let animationDelay = 6;

    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }

    text.innerHTML = newDom;
    let length = text.children.length;

    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

  }

  update(mouseX, mouseY, canvasWidth, canvasHeight) {
    if (!this.props.loaded) return false;
  }

  render() {
    const content = this.state.jobs.map((job, index) => 
      <div className="job__item" key={index}><h2>{job.company}</h2><h3>{job.position}</h3><h4>{job.timeFrame}</h4><ul>{job.achievements.map((achieve, aindex) => <li key={aindex}>{achieve}</li>)}</ul></div>
    );
    return (
      <div
        className={`resume ${
          this.props.loaded ? 'resume--loaded' : 'resume--not-loaded'
        } ${this.props.loaded ? 'show' : 'hide'}`}
      >
        <div className="info">
          <h1 ref={this.title}  className={`resume-title ${this.props.loaded ? 'resume-title--loaded' : ''}`}>Resume</h1>
          <a href="https://www.dropbox.com/s/s3zddzd9kvroa2q/Resume.pdf?dl=0" download> <FontAwesomeIcon icon={faDownload} /> Download</a>
        </div>

        <div className="job">
          {content}
        </div>
      </div>
    );
  }
}

export default ResumeComponent;
