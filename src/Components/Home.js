import React, { useReducer, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";

import {
     githubLight,
     githubLightInit,
     githubDark,
     githubDarkInit,
} from "@uiw/codemirror-theme-github";

import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";

import { themeEx } from "@uiw/codemirror-theme-github";

import {
     Card,
     Typography,
     TextField,
     Button,
     Autocomplete,
     Collapse,
} from "@mui/material";
import theme from "../theme";

import FetchUtil from "../Utilities/FetchUtility";

import "../CSS/Home.css";
import LogoSVG from "../Images/logo.png";

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
          };
     }

     lightTheme = createTheme({
          theme: "light",
          settings: {
               background: "#ffffff60",
               foreground: "#66a4d8",

               // caret: '#2ff535',
               // selection: '#2ff535',
               // selectionMatch: '#2ff535',
               // lineHighlight: '#8a91991a',
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
          theme: "dark",
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

     codeEditor(header_data) {
          let { colorMode } = this.state;

          let colorData = [
               "#3AF5EF",
               "#a6ff33",
               "#fff64f",
               "#793ff7",
               "#793ff7",
          ];

          return (
               <div class="IDEParagraph">
                    {/* <h2 class={colorMode == 0 ? "codeHeader lightModeText" : "codeHeader darkModeText"}>{`<MyPortfolio/>`}</h2> */}
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
                              // onChange={this.setCode}
                         />
                    </div>

                    <a
                         class={
                              colorMode == 0
                                   ? "headerButton lightModeTextButton"
                                   : "headerButton darkModeTextButton"
                         }
                         href="#abc"
                    >
                         Learn more
                    </a>
               </div>
          );
     }

     setCode(value) {
          this.setState({ code: value });
     }

     skillsGrid() {
          let count = 30;
         
          let skills = ["ReactJSX","mySQL","Photoshop","PHP","NPM","AGILE","AWS","Linux","GIT","Jira","VueJs","Sass","Semantic"];
          return (
      
                    <div class="skillRow">
                         {skills.map(function (elem) {
                              return <div class="skillItem">{elem}</div>
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

          let { colorMode } = this.state;

          return (
               <div>
                    <img
                         className="logoImage"
                         onClick={() =>
                              this.setState((prevState) => ({
                                   colorMode: !prevState.colorMode,
                              }))
                         }
                         src={LogoSVG}
                    />
                    <div
                         class="logoImage2"
                         onClick={() =>
                              this.setState((prevState) => ({
                                   colorMode: !prevState.colorMode,
                              }))
                         }
                    >
                         <div
                              class={
                                   colorMode == 0
                                        ? "logoIMGLight"
                                        : "logoIMGDark"
                              }
                         ></div>
                    </div>
                    {/* <div class="container">
                         <h1>Hi - Maxwell Jones</h1>
                         <p>
                              A Canadian Front-End Developer with growing
                              experience in JavaScript & AGILE methodologies.
                         </p>
                         <a href="#abc">Learn more</a>
                    </div> */}

                    <div
                         class={
                              colorMode == 0
                                   ? "container containerLight"
                                   : "container containerDark"
                         }
                    >
                         <div
                              class={
                                   colorMode == 0
                                        ? "classCard lightMode"
                                        : "classCard darkMode"
                              }
                         >
                              {this.codeEditor(header_data)}
                         </div>
                    </div>

                    <div
                         class={
                              colorMode == 0
                                   ? "blank skillContain blankLight"
                                   : "blank skillContain blankDark"
                         }
                    >
                         {this.skillsGrid()}
                    </div>

                    <div
                         id="abc"
                         class={
                              colorMode == 0
                                   ? "container second containerLight"
                                   : "container second containerDark"
                         }
                    >
                         <div
                              class={
                                   colorMode == 0
                                        ? "classCard lightMode"
                                        : "classCard darkMode"
                              }
                         >
                              <div class="img img-first"></div>
                              <div class="card">
                                   <h2
                                        class={
                                             colorMode == 0
                                                  ? "codeHeader lightModeText"
                                                  : "codeHeader darkModeText"
                                        }
                                   >
                                        About me
                                   </h2>
                                   <p>
                                        The goal is to reach the summit of a
                                        formation or the endpoint of a usually
                                        pre-defined route without falling
                                   </p>
                                   <a href="#">Learn more</a>
                              </div>
                         </div>
                    </div>

                    <div
                         class={
                              colorMode == 0
                                   ? "blank blankLight"
                                   : "blank blankDark"
                         }
                    >
                         
                    </div>

                    <div
                         id="abc"
                         class={
                              colorMode == 0
                                   ? "container second containerLight"
                                   : "container second containerDark"
                         }
                    >
                         <div
                              class={
                                   colorMode == 0
                                        ? "classCard lightMode"
                                        : "classCard darkMode"
                              }
                         >
                              <div class="img img-first"></div>
                              <div class="card">
                                   <h2
                                        class={
                                             colorMode == 0
                                                  ? "codeHeader lightModeText"
                                                  : "codeHeader darkModeText"
                                        }
                                   >
                                        Projects
                                   </h2>
                                   <p>
                                        The goal is to reach the summit of a
                                        formation or the endpoint of a usually
                                        pre-defined route without falling
                                   </p>
                                   <a href="#">Learn more</a>
                              </div>
                         </div>
                    </div>

                    <div
                         class={
                              colorMode == 0
                                   ? "blank blankLight"
                                   : "blank blankDark"
                         }
                    >
                         conact me
                    </div>
               </div>
          );
     }
}
export default Home;
