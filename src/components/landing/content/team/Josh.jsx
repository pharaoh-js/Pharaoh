import React from 'react'
import InlineCss from "react-inline-css"

const Josh = React.createClass({
    render (){
        return(
            <InlineCss stylesheet={`

            `}>
                <div>
                    <img src="https://www.junkfreejune.org.nz/themes/base/production/images/default-profile.png" className="card-pic"/>
                </div>
                <big>Joshua Leduc</big>
                <p>
                  I am young Full Stack dev excited about learning more. MEAN stack, React, and CSS.
                </p>
                    <li>Github: <a className="links" href="https://github.com/joshualeduc">here</a></li>
                    <li>Linkedin: <a className="links"  href="https://www.linkedin.com/in/joshualeduc">here</a></li>
                    <li>Portfolio Site: <a className="links"  href="">here</a></li>
            </InlineCss>
        )
    }
})

export default Josh
