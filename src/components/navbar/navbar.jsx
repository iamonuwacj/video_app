import React, { useState } from 'react'
import {styled} from 'styled-components'
import './navbar.css'
import { LuMenu } from 'react-icons/lu'
// import logo from '../../logo.svg'
import { IoIosNotifications } from 'react-icons/io'
import { RiVideoUploadLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { CiSearch} from 'react-icons/ci'


const Navbar = ({setToggleState}) => {

    const [search, setSearch] = useState(false)
    const [displayModal, setDisplayModal] = useState("")



  return (
    <AppNav>
        <NavLeft>
            <LuMenu color='white' size={30} 
                onClick={setToggleState}
                className='menu'
            />
            <CgProfile/>
        </NavLeft>

        <NavMiddle style={{width: `${search ? "50%" : "47%"}`}}>
            <CiSearch className={`${search ? 'on' : 'off'}`} color='white' size={20}/>
            <input type="text" placeholder='search' 
                onClick={() => setSearch(true)}
            />
            <button className='search'><CiSearch color='white' size={20}/></button>
        </NavMiddle>
        
        <NavRight>
            <div className='file-div'>
                <RiVideoUploadLine color='white' size={30} className='file'
                    onMouseOver={() => setDisplayModal("create")} 
                    onMouseOut={() => setDisplayModal("")}
                />
                <p style={{display: `${displayModal === "create" ? "block" : "none"}`}}>Create</p>
            </div>
            <div className='not-div'>
                <IoIosNotifications color='white' size={30}
                    onMouseOver={() => setDisplayModal("not")} 
                    onMouseOut={() => setDisplayModal("")}
                />
                <p style={{display: `${displayModal === "not" ? "block" : "none"}`}}>Notifications</p>
            </div>
            <div className='profile'>
                <img src="https://picsum.photos/100/100" alt="" />
            </div>
        </NavRight>
    </AppNav>

  )
}

const AppNav = styled.nav`
    display: flex;
    align-items: center;
    background-color: #0F0F0F;
    width: 100%;
    padding: 10px 20px;
    position: fixed;
    justify-content: space-between;
    top: 0;
    z-index: 100;

    .menu {
        padding: 3px;
        border-radius: 50%;

        &:hover {
            background-color: gray;
        }
    }
    
`

const NavLeft = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
`

const NavMiddle = styled.div`
    border: 2px solid gray;
    width: 50%;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    background-color: #121212;
    position: relative;
    transition-duration: 0.1s;

    .off {
        position: absolute;
        width: 5%;
        left: 7px;
        display: none;
    }

    .on {
        position: absolute;
        width: 5%;
        left: 7px;
    }


    input {
        padding: 10px;
        width: 90%;
        border: none;
        background-color: transparent;
        font-size: 18px;
        color: white;
        border-radius: 50px 0 0px 50px;
        padding-left: 50px;
    }

    button {
        width: 10%;
        padding: 10px;
        border-radius: 0 50px 50px 0;
        border: none;
        background-color: #222222;
        /* border-left: 2px solid blue; */
    }
`



const NavRight = styled.div`
    display: flex;
    width: 30%;
    background-color: transparent;
    justify-content: flex-end;
    align-items: center;
    gap: 5%;

    .file-div {
        position: relative;
        p {
            color: white;
            background-color: gray;
            padding: 10px;
            border-radius: 5px;
            position: absolute;
            left: -60%;
            top: 180%;
            display: none;
            font-size: 12px;
        }
    }

    .not-div {
        position: relative;
        p {
            color: white;
            background-color: gray;
            padding: 10px;
            border-radius: 5px;
            position: absolute;
            left: -90%;
            top: 180%;
            font-size: 12px;
            display: none;
        }
    }

    .profile {
        width: 10%;
        border-radius: 50%;
        img {
            width: 100%;
            border-radius: 50%;
        }
    }
`
export default Navbar