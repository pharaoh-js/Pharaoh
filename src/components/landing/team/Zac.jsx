import React from 'react'
import InlineCss from "react-inline-css"

const Zac = React.createClass({
    render (){
        return(
            <InlineCss stylesheet={`

            `}>
                <div>
                    <img src="https://s3-us-west-1.amazonaws.com/devepprofiles%2Fzac%40zacanger.com/11188319_10152898699796446_2884929989969112153_n.jpg" className="card-pic"/>
                </div>
                <big>Zac Anger</big>
                <p>
                  I am young Full Stack dev excited about learning more. MEAN stack, React, and CSS.
                </p>
                    <li>Github: <a className="links" href="https://github.com/zacanger">here</a></li>
                    <li>Linkedin: <a className="links"  href="https://www.linkedin.com/in/zacanger">here</a></li>
                    <li>Portfolio Site: <a className="links" href="http://zacanger.com">here</a></li>
            </InlineCss>
        )
    }
})

export default Zac

