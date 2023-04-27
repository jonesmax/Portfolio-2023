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
import { FiSmartphone } from 'react-icons/fi';
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
			"AGILE",
			"AWS",
			"Linux",
			"GIT",
			"Jira",
			"VueJs",
			"Sass",
			"Semantic",
		];
		return (
			<div class="skillRow">
				{skills.map(function (elem) {
					return <div class="skillItem">{elem}</div>;
				})}
			</div>
		);
	}
	render() {
		let header_data = [
			"Hi - Maxwell Jones",
			"A Canadian Front-End Developer",
			"with growing experience in JavaScript & AGILE",
			"methodologies",
		];

		let { colorMode, subject, message } = this.state;

		let emailText = `mailto:maxwel`+`ljones2012`+`@`+`gma`+`il.com?subject=${subject ? subject : 'Portfolio Message'}&body=${message ? message : ''}`
		return (
			<div>
				<img className="logoImage" onClick={() => this.setState((prevState) => ({ colorMode: !prevState.colorMode, }))}src={LogoSVG}/>
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
										<h4 class="infoText">Growing up in front of screens, I’ve seen every UI and understand the impact of delivering clean experiences for a brand.</h4>
										<h4 class="infoText">Throughout the past 2+ years I’ve been working on a team designing and maintaining a react web portal. My time at the company has progressed where I am now implementing foundational AGILE workflows to guide co-op students on how to deliver software in a business environment.</h4>
										<h4 class="infoText">Presently, I lead AGILE planning and take responsibility for the platforms frontend development. I guide co-op students through the development experience by leading daily scrums, sprints and teaching foundational JavaScript skills.</h4>
									</div>
									<div class="contactThird">
										<div class={colorMode == 0 ? "  orangeLight" : "  orangeDark"} >
											<a target="_blank" class="aboutButton" href={PDF} onClick={() => this.setState({ message: '\n\n\n\n\n\n\n\n', subject: null })}>
												Resumé</a>
											<a target="_blank" class="aboutButton" href={"https://www.linkedin.com/in/maxwelljones2020/"} onClick={() => this.setState({ message: '\n\n\n\n\n\n\n\n', subject: null })}>
												Linkedin</a>
											<a target="_blank" class="aboutButton" href={"https://github.com/jonesmax"} onClick={() => this.setState({ message: '\n\n\n\n\n\n\n\n', subject: null })}>
												Github</a>
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
										This is a school organization web portal I created to
										help plan and track the series of deadlines I had for
										school. My goal was to create a CRUD single webpage
										designed for a mobile device. I continuously prefer to develop
										react single pages over native apps as you can create a
										diverse seamless mobile UI's for any device.
										This project includes a full stack api I created using
										laravel, supporting several full crud routes. The webpage can
										layout full class schedules and assignments with tracking
										for their deadlines.
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

				<div id="contact_me" class={colorMode == 0 ? "container thirdLight" : "container thirdDark "}>
					<div class={colorMode == 0 ? "classCardGlass lightMode" : "classCardGlass darkMode"}>
						<div class="card">
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
											<h3>maxwelljones2012@gmail.com</h3>
										</div>

										<div class={colorMode == 0 ? "infoRow submitButton orangeLight" : "infoRow submitButton orangeDark"} >
											<a target="_blank" href={emailText} onClick={() => this.setState({ message: '\n\n\n\n\n\n\n\n', subject: null })}>
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
