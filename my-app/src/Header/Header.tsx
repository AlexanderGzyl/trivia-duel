// @ts-nocheck
import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import LogOut from './LogOut';


//Header should have login logic with nav to profile page
const Header = () =>{
    const {user, logOut} = UserAuth()
  
    return(
<Wrapper>
    
    {user?.displayName ? <LogOut/>:
    <Link to ='/signin'>Login</Link>}
    <p>Welcome {user?.displayName}</p>
</Wrapper>
    )

}

const Wrapper = styled.div`
grid-row: 1;
color:white;  
background-color: Black;
`;

export default Header