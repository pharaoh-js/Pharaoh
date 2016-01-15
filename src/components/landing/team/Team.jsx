import React from 'react'
import InlineCss from "react-inline-css"
import Tanner from './Tanner'
import Adam from './Adam'
import Zac from './Zac'
import Josh from './Josh'


const Team = React.createClass({
    render (){
        return(
            <InlineCss stylesheet={`
            & .container {
              text-align:center;
              border: 1px solid black;
              border-radius: 8px;
              width:90%;
              margin: 10px 5% 30px 5%;
              box-shadow: 5px 5px 5px gray;
              /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,2989d8+100,7db9e8+100,2989d8+100 */
              background: rgb(30,87,153); /* Old browsers */
              background: -moz-linear-gradient(top,  rgba(30,87,153,1) 0%, rgba(41,137,216,1) 100%, rgba(125,185,232,1) 100%, rgba(41,137,216,1) 100%); /* FF3.6-15 */
              background: -webkit-linear-gradient(top,  rgba(30,87,153,1) 0%,rgba(41,137,216,1) 100%,rgba(125,185,232,1) 100%,rgba(41,137,216,1) 100%); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(to bottom,  rgba(30,87,153,1) 0%,rgba(41,137,216,1) 100%,rgba(125,185,232,1) 100%,rgba(41,137,216,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#2989d8',GradientType=0 ); /* IE6-9 */
            }
            & .team-title {
              color:black;
              font-size:40px;
              text-decoration: none;
            }
            & .team-title:hover {
              cursor:pointer;
              color:#0FB427;
            }
            & .team {
                display:flex;
            }
            & .card {
                background: whitesmoke;
                box-shadow: 2px 2px 2px gray;
                border: 1px solid black;
                border-radius: 10px;
                text-align:center;
                margin:20px 2.5%;
                width:20%;
                justify-content: space-between;
                padding:5px 0;
            }
            & .card-pic {
                width:100px;
                border-radius: 50%;
                padding:10px;
            }
            & .links{
              color:black;
            }
            & .links:hover {
              color:#0FB427;
            }
            `}>
              <div className="container">
                <a className="team-title" href="https://github.com/pharaoh-js">Team Pharaoh</a>
                <div className="team">
                    <div className="card">
                      <Zac />
                    </div>
                    <div className="card">
                      <Tanner />
                    </div>
                    <div className="card">
                      <Adam />
                    </div>
                    <div className="card">
                      <Josh />
                    </div>
                  </div>
              </div>
            </InlineCss>
        )
    }
})

export default Team
