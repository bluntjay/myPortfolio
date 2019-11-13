import React from 'react';
import MythHang from "../Images/MythHang.png";
import RPSLS from "../Images/RPSLS.png";
import theWeather from "../Images/theWeather.png";
import prideStore from "../Images/prideStore.png";
import guitarSim from "../Images/guitarSim.png";
import calculator from "../Images/calculator.png";
import memeGen from "../Images/memeGen.png";
import kaliedoScope from "../Images/kaliedoScope.png";
import Modal from "./popUp.js";
// import {Button, Header, Title, Footer, Body} from "react-bootstrap";

const Project = props =>
			 <div className="portItems">
				<li className="projList">
				<h3 className="projectHead">{props.projectHead}</h3>
				<p className="projectDes">{props.projectDes}</p>
				<img alt="projectImage" className="portImg" src={props.projectImage}/></li>
				<a target="_blank" rel="noopener noreferrer" href={props.projectURL}>
				<button className="demoButt btn btn-primary">View Demo</button></a>
				<Modal title={props.title} body={props.body}/>
			</div>

export default class MyPortfolio extends React.Component{
	render(){
		return(
<<<<<<< HEAD
			<div id="myProjects">
				<h2 className="sectionHead">Portfolio</h2>
				<Project
					projectHead="Mythical Hangman"
					projectDes="Hangman with a mythical twist!"
					projectImage={MythHang}
					projectURL="https://repl.it/@bluntjay/MythicalHangman"
					title="Mythical Hangman"
					body="This was one of my 1st games I made in programming. It is just a game of Hangman in Python. View the demo & just click 'Run'. "
				/>
				<Project
					projectHead="Rock, Paper, Scissor!"
					projectDes="A twist on the classic game"
					projectImage={RPSLS}
					projectURL="https:salty-retreat-42685.herokuapp.com/"
					title="Rock, Paper, Scissor!"
					body="This game was inspired by the TV series Big Bang Theory. The game is just like the normal Rock, Paper, Scissor. However it adds 2 new options Lizard & Spock thus adding a bit of difficulty to the game. 
 				This was one of my Capstone Projects in React JS while doing my Coding Course with HyperionDev through Life Choices."
				/>
				<Project
					projectHead="Wheather The Weather"
					projectDes="My 1st Weather App"
					projectImage={theWeather}
					projectURL="https:wheather-the-weather.herokuapp.com/"
					title="heather The Weather"
					body="This weather application uses an API to fetch it's infomation.
					 It retrieves the current Weather conditions in a City & was made using ReactJS"
				/>
				<Project
					projectHead="E-commerce Website"
					projectDes="Pride Store"
					projectImage={prideStore}
					projectURL="https:bluntjay.github.io/PrideShop/"
					title="My Pride Store"
					body="This is my first online shop I made. The design of the website was made with HTML & CSS, while with the functionality I used JavaScript & jQuery. "
				/>
				<Project
					projectHead="Guitar Simulator"
					projectDes="An online functioning guitar"
					projectImage={guitarSim}
					projectURL="https:bluntjay.github.io/guitarSimulator/"
					title="Guitar Simulator"
					body="At first I was playing around with making a Guitar Tuner, however I saw a instrument simulator online & thought that I could convert it into something similar to that. 
 				The project was made with HTML, CSS, Bootstrap & JavaScript."
				/>
				<Project
					projectHead="Meme Generator"
					projectDes="An App to make your own memes"
					projectImage={memeGen}
					projectURL="https:bluntjay.github.io/memeGenerator/"
					title="Meme Generator"
					body="This application allows users to upload an image & then add text to make their own memes. Created with HTML, CSS & JavaScript."
				/>
				<Project
					projectHead="Scientific Calculator"
					projectDes="A simple scientific calculator"
					projectImage={calculator}
					projectURL="https:bluntjay.github.io/scientificCalc/"
					title="Scientific Calculator"
					body="This project is an updated version of my Capstone Project. 
					It started off as a normal calculator, then as I kept working on it I added a few new options & functions."
				/>
				<Project
					projectHead="Kaliedoscope"
					projectDes="Turn images into a Kaliedoscope!"
					projectImage={kaliedoScope}
					projectURL="https:bluntjay.github.io/myKaleidoscope/"
					title="Kaliedoscope"
					body="An application that turns images into a Kaleidoscope.
					 You control the image's colours & positions by moving the mouse over the Kaleidoscope. This side project of mine was made with HTML, CSS & JavaScript."
				/>
=======
			<div>
	<div id="portfolio">
		<h2 className="sectionHead">Portfolio</h2>
		<ul id="listPort">
			<div className="portItems"><li className="projList">
				<h3 className="projectHead">Mythical Hangman</h3>
				<p className="projectDes">Hangman with a mythical twist!</p>
				<img alt="projectImage" className="portImg" src={MythHang}/></li>
				<a target="_blank" rel="noopener noreferrer" href="https://repl.it/@bluntjay/MythicalHangman">
				<button className="demoButt">View Demo</button></a>
				<Modal className="modalBox" title="Mythical Hangman" 
				body="This was one of my 1st games I made in programming. It is just a game of Hangman in Python"/>		
			</div>
			<div className="portItems"><li className="projList">
				<h3 className="projectHead">Rock, Paper, Scissor!</h3>
				<p className="projectDes">A twist on the classic game</p>
				<img alt="projectImage" className="portImg" src={RPSLS}/></li>
				<a target="_blank" rel="noopener noreferrer" href="https://salty-retreat-42685.herokuapp.com/">
				<button className="demoButt">View Demo</button></a>
				<Modal className="modalBox" title="Rock, Paper, Scissor!" 
				body="This game was inspirex by the TV series Big Bang Theory. The game is just like the normal Rock, Paper, Scissor. However it adds 2 new options Lizard & Spock thus adding a bit of difficulty to the game. 
				This was one of my Capstone Projects in React JS while doing my Coding Course with HyperionDev through Life Choices. "/>			
			</div>
			<div className="portItems"><li className="projList">
				<h3 className="projectHead">Wheather The Weather</h3>
				<p className="projectDes">My 1st Weather App</p>
				<img alt="projectImage" className="portImg" src={theWeather}/></li>
				<a target="_blank" rel="noopener noreferrer" href="https://wheather-the-weather.herokuapp.com/">
				<button className="demoButt">View Demo</button></a>
				<Modal className="modalBox" title="Wheather The Weather" 
				body="This weather application uses an API to fetch it's infomation. It retrieves the current Weather conditions in a City and was made using ReactJS"/>			
			</div>
			<div className="portItems"><li className="projList">
				<h3 className="projectHead">E-commerce Website</h3>
				<p className="projectDes">Pride Store</p>
				<img alt="projectImage" className="portImg" src={prideStore}/></li>
				<a target="_blank" rel="noopener noreferrer" href="https://bluntjay.github.io/PrideShop/">
				<button className="demoButt">View Demo</button></a>
				<Modal className="modalBox" title="My Pride Store" 
				body="This is my first online shop I made. The design of the website was made with HTML & CSS, while with the functionality I used JavaScript & jQuery "/>			
			</div>
			<div className="portItems"><li className="projList">
				<h3 className="projectHead">Guitar Simulator</h3>
				<p className="projectDes">An online functioning guitar</p>
				<img alt="projectImage" className="portImg" src={guitarSim}/></li>
				<a target="_blank" rel="noopener noreferrer" href="https://bluntjay.github.io/guitarSimulator/">
				<button className="demoButt">View Demo</button></a>
				<Modal className="modalBox" title="Guitar Simulator" 
				body="At first I was playing around with making a Guitar Tuner, however I saw a instrument simulator online & thought that I could convert it into something similar to that. 
				The project was made with HTML, CSS, Bootstrap & JavaScript  "/>			
			</div>
			<div className="portItems"><li className="projList">
				<h3 className="projectHead">Scientific Calculator</h3>
				<p className="projectDes">A simple scientific calculator</p>
				<img alt="projectImage" className="portImg" src={calculator}/></li>
				<a target="_blank" rel="noopener noreferrer" href="https://bluntjay.github.io/scientificCalc/">
				<button className="demoButt">View Demo</button></a>
				<Modal className="modalBox" title="Simple Scientific Calculator" 
				body="This project is just an updated version of another on of my Capstone Projects. It started off as a normal calculator, then as I kept working on it I added a few new options & functions."/>			
			</div>
				<div className="portItems"><li className="projList">
				<h3 className="projectHead">Meme Generator</h3>
				<p className="projectDes">An App to make your own memes</p>
				<img alt="projectImage" className="portImg" src={memeGen}/></li>
				<a target="_blank" rel="noopener noreferrer" href="https://bluntjay.github.io/memeGenerator/">
				<button className="demoButt">View Demo</button></a>
				<Modal className="modalBox" title="Meme Generator" 
				body="This application allows users to upload aan image & then add text to make their own memes. Created with HTML, CSS & JavaScript "/>			
			</div>
				<div className="portItems"><li className="projList">
				<h3 className="projectHead">Kaliedoscope</h3>
				<p className="projectDes">Turn images into a Kaliedoscope!</p>
				<img alt="projectImage" className="portImg" src={kaliedoScope}/></li>
				<a target="_blank" rel="noopener noreferrer" href="https://bluntjay.github.io/myKaleidoscope/">
				<button className="demoButt">View Demo</button></a>
				<Modal className="modalBox" title="Kaliedoscope" 
				body="An application that turns images into a Kaleidoscope. You control the image's colours & positions by moving the mouse over the Kaleidoscope. This side project of mine was made with HTML, CSS & JavaScript."/>			
			</div>

		</ul>
	</div>
>>>>>>> d576d7f0f417821b950ce3558d0b3c0de2635871
			</div>
			)
	}
}

