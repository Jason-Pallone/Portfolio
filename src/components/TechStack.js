import React from 'react';

const TechStack=(props)=>
    
       <div className='tech-container'>
            <h1  className={ props.showStack ? 'stack-header fade-in showText-right' : 'hidden'}>
            My Stack
            </h1>
            <div className={ props.showStack ? 'techStack-container fade-in' : 'hidden'}>
                <div>
                    <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/html-5.png" alt='HTML icon' />
                    <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/css3.png" alt='CSS icon' />
                    <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/javascript.png" alt='JavaScript icon' />
                    <img className='techStack-icon' src="http://img.icons8.com/ios-glyphs/30/000000/react.png" alt='React icon' />
                    <img className='techStack-icon' src="http://img.icons8.com/ios/50/000000/jquery.png" alt='jQuery icon' />
                </div>

                <div>
                    <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/nodejs.png" />
                    <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/npm.png" alt='NPM icon' />
                    <img className='techStack-icon' src="http://img.icons8.com/color/48/000000/git.png" alt='GIT icon' />
                    <p className='techStack-icon express'>Express.js</p>
                </div>
            </div>
        </div>
          
   
export default TechStack