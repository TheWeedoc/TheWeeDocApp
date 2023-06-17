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

        <div className=''>

        </div>
    </div>
    </>
  )
}

export default Indivialpage