import React from 'react'
import InlineCss from "react-inline-css"

const Zac = React.createClass({
    render (){
        return(
            <InlineCss stylesheet={`

            `}>
                <div>
                    <img src="https://www.junkfreejune.org.nz/themes/base/production/images/default-profile.png" className="card-pic"/>
                </div>
                <big>Zac Anger</big>
                <p>
                  I am young Full Stack dev excited about learning more. MEAN stack, React, and CSS.
                </p>
                    <li>Github: <a className="links" href="https://github.com/zacanger">here</a></li>
                    <li>Linkedin: <a className="links"  href="https://www.linkedin.com/in/zacanger">here</a></li>
                    <li>Portfolio Site: <a className="links"  href="">here</a></li>
            </InlineCss>
        )
    }
})

export default Zac
