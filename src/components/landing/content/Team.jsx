import React from 'react'
import InlineCss from "react-inline-css"

const Team = React.createClass({
    render (){
        return(
            <InlineCss stylesheet={`
            & .team {
                border: 1px solid black;
                border-radius: 5px;
                width:90%;
                margin: 10px 5%;
                box-shadow: 5px 5px 5px gray;
                display:flex;
                    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,2989d8+100,7db9e8+100,2989d8+100 */
                    background: rgb(30,87,153); /* Old browsers */
                    background: -moz-linear-gradient(top,  rgba(30,87,153,1) 0%, rgba(41,137,216,1) 100%, rgba(125,185,232,1) 100%, rgba(41,137,216,1) 100%); /* FF3.6-15 */
                    background: -webkit-linear-gradient(top,  rgba(30,87,153,1) 0%,rgba(41,137,216,1) 100%,rgba(125,185,232,1) 100%,rgba(41,137,216,1) 100%); /* Chrome10-25,Safari5.1-6 */
                    background: linear-gradient(to bottom,  rgba(30,87,153,1) 0%,rgba(41,137,216,1) 100%,rgba(125,185,232,1) 100%,rgba(41,137,216,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#2989d8',GradientType=0 ); /* IE6-9 */
            }
            & .card {
                background: whitesmoke;
                box-shadow: 2px 2px 2px gray;
                border: 1px solid black;
                border-radius: 20px;
                text-align:center;
                margin:10px 2.5%;
                width:20%;
                justify-content: space-between;
            }
            & .card p {
               padding: 10px;
            }
            & .card-pic {
                width:100px;
                border-radius: 50%;
                padding:10px;
            }
            `}>
              <div className="team">
                <h2>Team Pharaoh JS</h2>
                    <div className="card">
                        <div>
                            <img src="data:image/png;base64,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" className="card-pic"/>
                        </div>
                        <big>Zac Anger</big>
                        <p>
                     eget tincidunt arcu tellus in ipsum. Vestibulum eget mi nec nibh convallis
                      pretium quis sit amet erat. Sed ullamcorper magna tellus, ut aliquet orci molestie vel.
                        </p>
                    </div>
                    <div className="card">
                        <div>
                            <img src="src/shared/images/Porter,-Jeremy-01s.jpg" className="card-pic"/>
                        </div>
                        <big>J. Tanner Porter</big>
                        <p>
                     eget tincidunt arcu tellus in ipsum. Vestibulum eget mi nec nibh convallis
                      pretium quis sit amet erat. Sed ullamcorper magna tellus, ut aliquet orci molestie vel.
                        </p>
                    </div>
                    <div className="card">
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX///+ZmZmWlpbx8fGTk5OQkJDt7e329vaampqhoaH5+fnV1dXKysqlpaWenp78/Py/v7/d3d2urq65ubnQ0NDl5eW3t7fNzc3FxcXa2tqrq6vo6OilNlfVAAAIvklEQVR4nO2dW5uqOgyGpRQRBEQUBuX//89dxuWjKMUmTdrinm/drYsZ3ukpaXPYRN+uje8PYNcf4fr1R7h+/RGuX3+ExBJuf90oN4RCCClFVFXZTdUukuo/nPCyEyq2RDT1+biN08Pmrjzdtvu+qZIRnFeshIouaopjvtFrOHcZLyUjoRRlMRwW6O6Kz03EB8lFKJJyHxvQ3WftsUuYIFkIhawKAN4/7a8sjAyEQjZHMN6vtie1cKlFTiiS04DjG5UWkpqRmFDIU4rn+9VPRMtISihkB19+bzr0pKYAJaHMWnu+UXGX0H0VHaEQZxq+UW1GNlXJCGVjuwCn6qkQiQhFsiflUxoqGkYaQlnSDuBNNclqJCGUNQOf0oViU6UglOQz9K64ske0JxS7LRegUmO9GK0JRcaxBB+qbRFtCeXVxAO0UW+531gSyo6ZT+lsN4p2hKLhB1SOoxWiFaF0AqgQbSaqDaGbERxlM1EtCEXpCtDKSrUgrJZuCal1QiPiCQWBswvQFWvdoAkTIm/XVDnWgMMSysIt4GazRc5TJKG7bfQh5JmBJHS6y9zVoeYpjtD1IrzpsHNGKHsfgJtNi1mKKMKM25/QqUbMUwyhnzn6KzeE4uQNcHOEz1MEofSxj97VgEcRTuj+rH8W/NyHE1a+tpmbTtBBBBPyXR2aKYVaNmDCyi8g/MSAEvoeQjWIzITCNyB4JQIJ/W6kN21hKxFIKHyehXfBzkQYoU9z5iGYYQMjTCwCSQjFOIYO7w+X1EMQQYQigH1mFMh0AxEmbi8Q9SqZCF1eci+rAExTEGEgkxQ2TSGEkvM5G6aMh9C70f0QwPwGEAoH772mAhz6AEL/bsVDubltCiEM5awYVXEQer6+mMp8IZoT+niM0cs8egFA6Okqf14DA6G8+KZ6Vmr83QDCcM77UcZbjTlhEtJGA3D0AevQN9NUxpupOWEwjsVNP6ZbjTFhSDbbqAs9IVOkM1bG78HmhME4hzcZu4jmhD++maaKyQlD8ixGGXsXf4QPwqCMNkVIP0v9BWDM6mD64eaEyMxXLuXkNs3/YB1+PSFl/iSFYnrC77dpvt8u/XrfIjT/8EzvAUe+maYyfgcG3NP4ZpqK4Z4mqEt9wPsagDAosy03jmoH3LUFdSCavwIDCIM6LowPC8hemvmmepZ5SA3k/ZA3aRsm83gTCGFIWw3LG3BIlikgewYSixHQQlTL0PS4AEUMhXPmlyzRJgG5+SlTTFQ4L/mQGgSw2MRQHkkhac8gwlCmKSghAUC4C2aagkoswKKgA/GgAJGJ4Fj9IGJqBlDCBTDfIogATFjSDDRnJoC9BnIYwglFAJZbwUoYwCMbNCsfnLt29U1oHEiDJPQ/iOxZsr6TLoCrEJXL7fVBH5pBisrH3/kkBKdyoyoOeLw4RZThwdTF8GidZvDCGBhCfy4Gpm4brj6NJ9sNvs1gCX1dDqMqmuEI/Vg24KPQgtBLHSVgHr4loYcrfvMXQxrCSLheitiygnhCx54iup6wRWVIp6fiGV2k1aK6p3RYQgJRAYuA0KGBOlgULreqI5w4it9HnhMEhJF0EpK5tfpGy3reLkZxsPtE25rsCbtx0/qtyc6/o9qVK6cgjGTD+aqIs7ZpCSNR8fn8nX0nFooOHkIwmeExICBBK6I+MyyhNkeSTnNEvYJkRZ7pfTjRtLWi6vckqIMz2x1RazK6nl2yJBzGA76O/qsI+66JpKaqyLcn7PVI2zuPJnWoLSn7AxL3P5SZ9VXq0BA2zovICRXjbm9j47TXhLgZKTnheHIU2FuqS0nfbJWBcOwE3CFeiuO+4mgmy0I47qu7HnR4xOeSenr+ExNhNDYlzerWbEluf66CrakzH2E0QkZN8YFyu+8qrnbOv2IljG6t1auuOG7TF9BDGrfnuuRvrs5N+CuFKaMquzanulequ+6aVZHk7xw/ygnhP4knufutLgn96I9w/fojXL9I7tqkzOhNLmUTkRwn1oQiUcaZMk0a2sNNyPKofMVeWauWP9eOUP2di7uBPRAy3vhuJvlPacdoQaiM5XpSZ3840cxVkVwnzldc7Cz+ePhIBdm833TnhbWLN/7d3v2u9oT+udiIoajWPFa0jY0jJOR1P39hlxbIbvK4yD35s3BvmO5LlDskRFIVC27zYY9ixETQ7j4+/KZ76EiqE+e6hHfTJXMQQStEb+S4521fRtJkG1S+lcjqi9ntFXwcoTkzyQlwj5a2RRONPq4GdPQbE3ntj4AHyEMP3LCB2XklvA1LPuz77loJRTr6vOrfrxJZlU19buGvqynsyhiUByzxkReHPN22x8vlrHS5XNohzvEXxxfIuxSkpkIZRn6lUt5x1FTgjyuB6GJsypkSip3vfKcXGb/xGxLKMqTCJjcZxml8JhyDj10GWprLLPvCaAxD6Cc3J6OoUxPCJLDysw8NBvuNASFXPBCF4s8n42dCEdgmOlX6EfEjYSDt8rRKqw+InwiDKg41qzhaRvxAGEKFgU/6kHW5TBjqMTHVclmsRcIwD/p3LcYRLxH6ry5gqqWUocUxDM8W1WnBDF8gTII+CKdaSN3TE/pIosRLv9toCdezCG/qdYh6wmCuLAyla3GlI3ST0UQpXSc2DaHvCiYYaeaphjCwJmtmmp+n84RhVC2D6jh7xThPuAulQCJMs+nes4Rr8CjmNNsDapYwgJJlOM011JsjDN/r1Wmu+MkM4dqsmWfNlPmeIfRer8xCM32u3gnXeNg/9D6I74TrXYWj3lfiO2EQBTzxettO3wjXZ3JP9VZ/4X0M12nOPPTanuWVMKTi+Ti9evuvhKt0KqZanKW7NZ/2dxVigXC1Nvez4kXCYOrK22jqRE0Jw+qWg9W0y86UcN32zF35whhGVOnmftUJHeF3TNKXaToh/I5JutkcEh2h+I5JOrXcnglDaV9hr+cn02fCtbsVD8WaMUzW9hij11NF5ck6zOMvUVprCMXXSLeXfqX+A7Jojj1e8QixAAAAAElFTkSuQmCC" className="card-pic"/>
                        </div>
                        <big>Adam Romines</big>
                        <p>
                     eget tincidunt arcu tellus in ipsum. Vestibulum eget mi nec nibh convallis
                      pretium quis sit amet erat. Sed ullamcorper magna tellus, ut aliquet orci molestie vel.
                        </p>
                    </div>
                    <div className="card">
                        <div>
                            <img src="data:image/png;base64,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" className="card-pic"/>
                        </div>
                        <big>Joshua Leduc</big>
                        <p>
                     eget tincidunt arcu tellus in ipsum. Vestibulum eget mi nec nibh convallis
                      pretium quis sit amet erat. Sed ullamcorper magna tellus, ut aliquet orci molestie vel.
                        </p>
                    </div>
              </div>
            </InlineCss>
        )
    }
})

export default Team
