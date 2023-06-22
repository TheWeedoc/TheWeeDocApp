import React from 'react'
import Header from '../../components/Layout/Header/Header'
import Videoplayer from '../../components/videplayer/videoplayer'
import "./indivialpage.css"
import { savebtn,starbtn,sharebtn,thumbsup,thumbsdown} from '../../Assests/Svg/Commonsvg'
function Indivialpage() {

  return (
    <>
    <Header/>
    <div className='indivialpage-main-Div'>
        <Videoplayer />
        <div className='vid-topDiv'>
            <div className='vid-topleft'>
                  <h1>Left Right Left</h1>
                  <div className='options_div'>
                    <div>
                      {savebtn}
                    </div>
                    <div>
                      {starbtn}
                    </div>
                  </div>
            </div>

            <div className='vid-topright' >
                      <div className='share_text'>
                        {sharebtn} Share
                      </div>

                      <div className='likesDiv'>
                          <div >
                           {thumbsup} 25k
                          </div>
                          <hr style={{borderRight:"1.4px solid #fff",height:"14px"}}/>
                          <div>
                            {thumbsdown} 300
                          </div>
                      </div>
            </div>
        </div>

        <div className='details-div'>
          <ul>
            <li style={{padding:"2px 10px 2px 0px"}}>2022</li>
            <li>1h 59m</li>
            <li>Tamil</li>
            <li>Action</li>
            <li>Triller</li>
            <li>Fantasy</li>
            <li style={{border:"none"}}>U/A 13+</li>
          </ul>

        </div>

        <div className='userprofileSec'>
              <div>
                  <img src="https://media.licdn.com/dms/image/C5603AQGIYT25qdyUmQ/profile-displayphoto-shrink_800_800/0/1637938260330?e=2147483647&v=beta&t=bga--I_pyA8FUDbHvJb92QCuuhiPJnYViXPt4Kmp2Zk"
                  className='profilepic'
                  alt="Nirmal" />
              </div>
              <div>

              </div>
              <button>Follow</button>
        </div>


        <div>

        </div>
    </div>
    </>
  )
}

export default Indivialpage