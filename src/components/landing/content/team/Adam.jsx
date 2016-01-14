import React from 'react'
import InlineCss from "react-inline-css"

const Adam = React.createClass({
    render (){
        return(
            <InlineCss stylesheet={`

            `}>
                <div>
                    <img src="https://www.junkfreejune.org.nz/themes/base/production/images/default-profile.png" className="card-pic"/>
                </div>
                <big>Adam Romines</big>
                <p>
                  I am young Full Stack dev excited about learning more. MEAN stack, React, and CSS.
                </p>
                    <li>Github: <a className="links" href="https://github.com/romines">here</a></li>
                    <li>Linkedin: <a className="links"  href="https://www.linkedin.com/in/adamromines">here</a></li>
                    <li>Portfolio Site: <a className="links"  href="">here</a></li>
            </InlineCss>
        )
    }
})

export default Adam
