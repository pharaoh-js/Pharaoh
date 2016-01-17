import React     from 'react'
import InlineCss from 'react-inline-css'
import Header    from './header/Header'
import HowTo     from './howto/HowTo'
import Team      from './team/Team'
import Stack     from './stack/Stack'

const Landing = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
            & .header {
              border-bottom: 1px solid black;
              background-color:#152329;
              color: #0FB427;
            }
            & .header big {
              font-size:34px;
              padding:0 10px;
            }
            & .header span {
              font-size:18px;
              margin-right:20px;
            }
            & .header span input {
              border-radius:3px;
              width:200px;
            }
            & .header-right {
              margin:30px 10px;
              float:right;
            }
            & .link {
              color:black;
              background-color:whitesmoke;
              padding:5px;
              border-radius:3px;
              text-decoration: none;
            }
            & .link:hover {
              color: #0FB427;
              padding:3px;
              border:2px solid #0FB427;
            }
               `}>
        <div className="container">
          <div className="header">
            <Header />
        </div>
          <HowTo />
          <Team />
          <Stack />
        </div>
      </InlineCss>
    )
  }
})

export default Landing

