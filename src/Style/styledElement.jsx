import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom";

export const NavbarCon = styled.div`
    background-color: #44555f;
    color: #FFF;
    position: sticky;
    top: 0;
    font-family: 'Kanit', sans-serif;
    font-size: .875rem ;
    font-weight: 500;
`
export const NavList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    margin-left: 25%;
    margin-right: auto;
`
export const NavItem = styled.li`
    padding: 7px 10px 7px 10px;
    list-style: none;
`
export const NavLink = styled(Link)`
    color: #FFF;
    display: flex;
    text-decoration: none;
    text-transform: uppercase;
    &:hover{
        color: #ffc526;
    }
`
export const NavLinkShow = styled(Link)`
    color: #FFF;
    display: flex;
    text-decoration: none;
    text-transform: uppercase;
    display: ${props => props.show ? 'block' : 'none'};
    &:hover{
        color: #ffc526;
    }
`