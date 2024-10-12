import React from 'react'
import {styled} from 'styled-components'
import { GoHome } from 'react-icons/go'
import { SiYoutubeshorts } from 'react-icons/si'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { LiaDownloadSolid } from 'react-icons/lia'


const Sidebar = ({toggleState}) => {

    
  return (
    <Container style={{width: `${toggleState ? "18%" : "6%"}`}}>
        {
            toggleState ?
            <>
                <div>
                    <div className='homeicons'>
                        <GoHome size={24}/>
                        <span>Home</span>
                    </div>
                    <div className='homeicons'>
                        <SiYoutubeshorts size={24}/>
                        <span>Shorts</span>
                    </div>
                    <div className='homeicons'>
                        <MdOutlineSubscriptions size={24}/>
                        <span>Subscriptions</span>
                    </div>
                </div>
                <hr />

                <Contents>
                    <div>
                        <span>You {">"}</span>
                    </div>

                    <div>
                        <img src="" alt="logo" />
                        <span>Your Channel</span>
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>Your Channel</span>
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>History</span>
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>Playlists</span>
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>Your Videos</span>
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>Your Courses</span>
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>Watch Later</span>
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>Liked Videos</span>
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>Downloads</span>
                    </div>

                </Contents>
            <hr />

                <Subscriptions>
                    <div>
                        <span>Subscriptions</span>
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>talkSport</span>
                        <img src="" alt="icon" />
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>talkSport</span>
                        <img src="" alt="icon" />
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>talkSport</span>
                        <img src="" alt="icon" />
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>talkSport</span>
                        <img src="" alt="icon" />
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>talkSport</span>
                        <img src="" alt="icon" />
                    </div>
                    <div>
                        <img src="" alt="logo" />
                        <span>talkSport</span>
                        <img src="" alt="icon" />
                    </div>
                </Subscriptions>
            </> : <>
                <ModalHome>
                <div>
                    <div className=''>
                        <GoHome size={20}/>
                        <span>Home</span>
                    </div>
                    <div className=''>
                        <SiYoutubeshorts size={20} />
                        <span>Shorts</span>
                    </div>
                    <div className=''>
                        <MdOutlineSubscriptions size={20}/>
                        <span>Subscriptions</span>
                    </div>
                    <div>
                        <LiaDownloadSolid size={20}/>
                        <span>Downloads</span>
                    </div>
                </div>

                </ModalHome>
            </>
        }
        
        
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    position: fixed;
    z-index: 0;
    /* width: 18%; */
    top: 50px;
    padding: 10px;
    padding-top: 30px;
    color: white;
    overflow-y: scroll;
    left: 0;
    background-color: black;
    z-index: 100;

    hr {
        margin-top: 20px;
        display: none;
    }

    .homeicons {
        display: flex;
        gap: 10%;
        margin-bottom: 10px;
        padding: 10px;
        width: 90%;
        font-size: 13px;
        align-items: center;

        &:hover {
            background-color: gray;
            border-radius: 10px;
        }
    }
`

const Contents = styled.div`
    margin-top: 10px;
    display: block;
    flex-direction: column;
    font-size: 13px;
    width: 90%;
    

    div {
        padding: 10px;
        border-radius: 10px;
        display: flex;
        gap: 10%;
        &:hover{
            background-color: gray;   
        }
    }
`

const Subscriptions = styled.div`
    width: 90%;
    display: block;
    flex-direction: column;
    font-size: 13px;
    margin-top: 10px;
    div {
        display: flex;
        gap: 10%;
        padding: 10px;
        border-radius: 10px;
        justify-content: space-between;
        align-items: center;

        &:hover {
            background-color: gray;
        }
    }
`

const ModalHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    font-size: 10px;
    padding: 0 25px 25px 25px;
    div {
        display: flex;
        flex-direction: column;
        gap: 20%;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
        border-radius: 10px;

        span {
            margin-top: 10px;
        }

        div:hover {
            background-color: gray;
        }
    }
`

export default Sidebar