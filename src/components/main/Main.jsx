import React from 'react'
import styled from 'styled-components'
import { MdMoreVert} from 'react-icons/md'
import mediaJSON from '../../vidBank.js'

const Main = ({toggleState}) => {
  return (
    <MainConinter 
      style={{left: `${toggleState ? "17%" : "5%"}`,
        width: `${toggleState ? "83%" : "95%"}`,
        top: `${toggleState ? "8vh" : "6vh"}`
      }}>
        <div className='row' style={{width: `${toggleState ? "100%" : "100%"}`}}>
            {
              mediaJSON.map((media, index) => (
                <div className="col" style={{width: `${toggleState ? "32.5%" : "24.3%"}`}}>
                  <video controls width={`${toggleState ? "380" : "326"}`} height={240}
                  >
                    <source type='video/mp4' src={media.sources}/>
                  </video>

                  <div className='video-details'>
                    <div className='img-logo'>
                      <img src={`https://picsum.photos/id/${index + 5}/100/100`} alt={media.title} />
                    </div>
                    <div>
                      <h3>
                        { media.description.substring(0, 50)}
                      </h3>
                      <p>{media.subtitle} <br /> 136k views <span>7 months ago</span></p>
                    </div>
                    <MdMoreVert size={20}/>
                  </div>
                </div>
              ))
            }

        </div>
    </MainConinter>
  )
}

const MainConinter = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  position: absolute;
  overflow: hidden;
  padding: 0 15px;
  color: white;
  font-size: 30px;

  .row {
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* gap: 3%; */
    flex-wrap: wrap;
    height: 100vh;
    position: relative;
  }
  .col {
      /* width: 22%; */
      height: 45vh;
      /* background-color: green; */
      border-radius: 10px;
      margin-bottom: 20px;
      font-size: 14px;

      video {
        cursor: pointer;
      }

    }

    .video-details {
    background-color: wheat;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 16px;
    gap: 5px;
    background-color: transparent;

    .img-logo {
      width: 20%;
    }

    img {
      width: 100%;
      border-radius: 50%;
    }
`
export default Main