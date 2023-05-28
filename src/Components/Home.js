import React, { useReducer, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";


import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";

import theme from "../theme";
import "../CSS/Home.css";
import LogoSVG from "../Images/logo.png";
import PDF from "../Files/Maxwell_Jones_Resume.pdf"

import desktopImage from "../Images/desktopProject.png";
import mobileImage from "../Images/mobileProject.png";

import { FaPhp, FaReact } from 'react-icons/fa';
import { SiAmazonaws, SiApache } from 'react-icons/si';
import { GoLocation } from 'react-icons/go';
import { FiSmartphone, FiArrowUp } from 'react-icons/fi';
import { VscMail } from 'react-icons/vsc';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			code: `<div>
     <h1>Hi👋 - I'm Maxwell Jones</h1>
          
     <h2>
          A Canadian🍁 Front-End Developer with growing 
          experience in JavaScript & AGILE methodologies 
     </h2>
</div> `,
			colorMode: 1,
			subject: null,
			message: '\n\n\n\n\n\n\n\n'

		};
	}
	lightTheme = createTheme({
		theme: "light",
		options: { lineWrapping: true },
		settings: {
			background: "#ffffff60",
			foreground: "#2c587c",
			gutterBackground: "#ffffff60",
			gutterForeground: "#ff660060",
		},
		styles: [
			{ tag: t.comment, color: "#787b8099" },
			{ tag: t.variableName, color: "#0080ff" },
			{ tag: [t.string, t.special(t.brace)], color: "#5c6166" },
			{ tag: t.number, color: "#5c6166" },
			{ tag: t.bool, color: "#5c6166" },
			{ tag: t.null, color: "#5c6166" },
			{ tag: t.keyword, color: "#5c6166" },
			{ tag: t.operator, color: "#5c6166" },
			{ tag: t.className, color: "#5c6166" },
			{ tag: t.definition(t.typeName), color: "#5c6166" },
			{ tag: t.typeName, color: "#5c6166" },
			{ tag: t.angleBracket, color: "#ff6600" }, // just the outside tags
			{ tag: t.tagName, color: "#091047" }, // the tags
			{ tag: t.attributeName, color: "#5c6166" },
		],
	});
	darkTheme = createTheme({
		lineWrapping: true,
		theme: "dark",
		options: { lineWrapping: true },
		settings: {
			background: "#00000020",
			foreground: "#ffffff",
			selection: "#2ff535",
			selectionMatch: "#2ff535",
			lineHighlight: "#8a91991a",
			gutterBackground: "#2b2b2b20",
			gutterForeground: "#6b6969",
		},
		styles: [
			{ tag: t.comment, color: "#787b8099" },
			{ tag: t.variableName, color: "#0080ff" },
			{ tag: [t.string, t.special(t.brace)], color: "#5c6166" },
			{ tag: t.number, color: "#5c6166" },
			{ tag: t.bool, color: "#5c6166" },
			{ tag: t.null, color: "#5c6166" },
			{ tag: t.keyword, color: "#5c6166" },
			{ tag: t.operator, color: "#5c6166" },
			{ tag: t.className, color: "#5c6166" },
			{ tag: t.definition(t.typeName), color: "#5c6166" },
			{ tag: t.typeName, color: "#5c6166" },
			{ tag: t.angleBracket, color: "#ff6600" }, // just the outside tags
			{ tag: t.tagName, color: "#ffffff" }, // the tags
			{ tag: t.attributeName, color: "#5c6166" },
		],
	});
	extensions = [javascript({ jsx: true })];

	codeEditor() {
		let { colorMode } = this.state;

		return (
			<div class="IDEParagraph">
				<div class="windowDiv">
					<div class="circleRed"></div>
					<div class="circleYellow"></div>
					<div class="circleGreen"></div>
				</div>
				<div class="mirrorContainer">
					<CodeMirror
						className="codeMirror"
						value={this.state.code}
						theme={
							colorMode == 0
								? this.lightTheme
								: this.darkTheme
						}
						autoFocus={true}
						extensions={this.extensions}
					/>
				</div>
				<a class={colorMode == 0 ? "headerButton lightModeTextButton" : "headerButton darkModeTextButton"} href="#contact_me">
					Contact
				</a>
			</div>
		);
	}

	setCode(value) {
		this.setState({ code: value });
	}

	skillsGrid() {
		let skills = [
			"ReactJSX",
			"mySQL",
			"Photoshop",
			"PHP",
			"NPM",
			"Python",
			"AGILE",
			"AWS",
			"Linux",
			"GIT",
			"Jira",
			"VueJs",
			"Pandas",
			"Figma",
			".NET",
			"Sass",
			"Semantic",
			"C#",
			"GraphQL"
		];
		return (
			<div class="skillRow">
				{skills.map(function (elem) {
					return <div class="skillItem">{elem}</div>;
				})}
			</div>
		);
	}

	topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	  }

	render() {
		let header_data = [
			"Hi - Maxwell Jones",
			"A Canadian Front-End Developer",
			"with growing experience in JavaScript & AGILE",
			"methodologies",
		];

		let { colorMode, subject, message } = this.state;

		let emailText = `mailto:maxwel`+`ljones2012`+`@`+`gma`+`il.com?subject=${subject ? subject : 'Portfolio Message'}&body=${message ? message : ''}`;
		return (
			<div>
				<img className="logoImage" onClick={() => this.setState((prevState) => ({ colorMode: !prevState.colorMode, }))}src={LogoSVG}/>
				<div className="logoImageBottom"  onClick={() =>this.topFunction()}><FiArrowUp style={{width:'100%'}}/></div>
				<div
					class="logoImage2"
					onClick={() =>
						this.setState((prevState) => ({
							colorMode: !prevState.colorMode,
						}))
					}>
					<div class={colorMode == 0 ? "logoIMGLight" : "logoIMGDark"}></div>
				</div>
				<div class={colorMode == 0 ? "container containerLight" : "container containerDark"}>
			
						<div class={colorMode == 0 ? "classCard lightMode" : "classCard darkMode"}>
							{this.codeEditor(header_data)}
						</div>
		
				</div>
				<div class={ colorMode == 0 ? "blank blankLight" : "blank blankDark" }></div>

				<div class={colorMode == 0 ? "container thirdLight containerLight" : "container thirdDark containerDark"}>
					<div class={colorMode == 0 ? "classCardGlass wider lightMode" : "classCardGlass wider darkMode"}>
						<div class="card">
							<div class="windowDiv widerWindow">
								<div class="circleRed"></div>
								<div class="circleYellow"></div>
								<div class="circleGreen"></div>
							</div>

							<div class={colorMode == 0 ? "textContactContainer wider textContactContainerLight" : "textContactContainer  wider textContactContainerDark"}>
								<h1>About Me</h1>
								<div class="contactRow">
									<div class="contactThirds">
										<h4 class="infoText">As someone who grew up immersed in the digital world, I have developed a keen eye for user interfaces and understand the significance of delivering seamless experiences that align with a brand's identity. Over the course of the past 3 years, I have had the privilege of being part of a team responsible for designing and maintaining a iot device web portal.</h4>
										<h4 class="infoText">Presently, I assume the lead position in AGILE planning and spearhead frontend development for the platform. Guiding co-op students in their development journey is a responsibility I wholeheartedly embrace. By leading daily scrums, coordinating sprints, and imparting vital JavaScript skills, I ensure our team delivers high-quality software, fostering a collaborative and growth-oriented environment. This experience has not only equipped me with a deep understanding of UI design but has also solidified my skills in ReactJS.</h4>
										<h4 class="infoText">In June I will be moving to Toronto, Ontario.</h4>
									</div>
									<div class="contactThird">
										<div class={colorMode == 0 ? "  orangeLight" : "  orangeDark"} >
											<a target="_blank" class="aboutButton" href={PDF} >
												Resumé</a>
											<a target="_blank" class="aboutButton" href={"https://www.linkedin.com/in/maxwelljones2020/"} >
												Linkedin</a>
											<a target="_blank" class="aboutButton" href={"https://github.com/jonesmax/jonesmax.github.io"} >
												Github</a>
											<a class="aboutButton"  href="#contact_me">
												Contact</a>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div class={colorMode == 0 ? "blank skillContain blankLight" : "blank skillContain blankDark"}>
					{this.skillsGrid()}
				</div>

				<div id="abc" class={colorMode == 0 ? "container second containerLight" : "container second containerDark"}>
					<div class={colorMode == 0 ? "classCard projectCard lightMode" : "classCard projectCard darkMode"}>
						<div class="card">
							<div class="windowDiv widerWindow">
								<div class="circleRed"></div>
								<div class="circleYellow"></div>
								<div class="circleGreen"></div>
							</div>
							<div class="imageTextRow">
								<div class="imagesContainer">
									<img src={desktopImage} class="desktopProjectImage"></img>
									<img src={mobileImage} class="mobileProjectImage"></img>
								</div>
								<div class={colorMode == 0 ? "textProjectContainer textProjectContainerLight" : "textProjectContainer textProjectContainerDark"}>
									<h1>School Tracking</h1>
									<h2>Full Stack Web App</h2>
									<p>
										I designed and developed a school organization web portal specifically tailored to assist with planning and 
										tracking multiple deadlines throughout my academic journey. My objective was to create a mobile-responsive CRUD 
										single-page application that offers a seamless user experience. I have always been inclined towards developing React 
										single-page applications as they allow for creating versatile and consistent mobile UIs across various devices. 
										This project encompasses a full-stack API that I built using Laravel, enabling robust CRUD functionality through 
										multiple routes.
									</p>
									<div class="langIcons">
										<FaReact style={{ paddingRight: '10px' }} className="langIcon" size={40} />
										<FaPhp className="langIcon" size={40} />
										<SiApache className="langIcon" size={40} />
										<SiAmazonaws className="langIcon" size={40} />
									</div>
									<div class='buttonRow'>
										<a class={
											colorMode == 0
												? "headerButton rowH lightModeTextButton"
												: "headerButton rowH darkModeTextButton"
										} target="_blank" href="https://maxwelljones.ca/school_tracker/">Live</a>
										<a class={
											colorMode == 0
												? "headerButton rowH lightModeTextButton"
												: "headerButton rowH darkModeTextButton"
										} target="_blank" href="https://github.com/jonesmax/school_tracker">Github</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class={ colorMode == 0 ? "blank blankLight" : "blank blankDark" }>
				</div>

				<div class={colorMode == 0 ? "container thirdLight" : "container thirdDark "}>
					<div class={colorMode == 0 ? "classCardGlass lightMode" : "classCardGlass darkMode"}>
						<div  id="contact_me"class="card">
							<div class="windowDiv widerWindow">
								<div class="circleRed"></div>
								<div class="circleYellow"></div>
								<div class="circleGreen"></div>
							</div>
							<div class={colorMode == 0 ? "textContactContainer textContactContainerLight" : "textContactContainer textContactContainerDark"}>
								<h1>Contact Me</h1>
								<div class="contactRow">
									<div class="contactHalf">
										<CodeMirror
											className="codeMirrorInput"
											value={""}
											id="subject"
											required
											placeholder="SUBJECT"
											theme={colorMode == 0 ? this.lightTheme : this.darkTheme}
											onChange={(e) => this.setState({ subject: e })}
										/>
										<CodeMirror
											className="codeMirrorInput contactMessage"
											value={message}
											id="message"
											required
											placeholder="MESSAGE"
											theme={colorMode == 0 ? this.lightTheme : this.darkTheme}
											onChange={(e) => this.setState({ message: e })}
										/>
									</div>
									<div class="contactHalf middleFlex">
										<div class="infoRow">
											<GoLocation className="contactIcon" size={30} />
											<h3>Toronto, Ontario</h3>
										</div>

										<div class="infoRow">
											<FiSmartphone className="contactIcon" size={30} />
											<h3>(905) 484-0574</h3>
										</div>

										<div class="infoRow">
											<VscMail className="contactIcon" size={30} />
											<h3><a target="_blank" class={colorMode == 0 ? "darkBlue" : " test2"} style={{backgroundColor:'transparent',padding:'0px',fontSize:'1em',textTransform:'none',textDecoration:'underline'}} href={emailText}>
											maxwelljones2012@gmail.com</a></h3>
										</div>

										<div class={colorMode == 0 ? "infoRow submitButton orangeLight" : "infoRow submitButton orangeDark"} >
											<a target="_blank" href={emailText} >
												Prepare</a>
										</div>
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
export default Home;
