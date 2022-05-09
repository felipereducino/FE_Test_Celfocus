import styled from 'styled-components';

export const TblHeader = styled.div`
    background-color: rgba(255,255,255,0.3);
`

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 0;
    justify-content: center;
    justify-items: center;
`

export const Heading = styled.h1`
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin-bottom: 15px;    
    border-bottom: solid 1px rgba(255,255,255,0.1);
`

export const BoldText = styled.b`
    font-weight: bold;
    color: #fff;
`

export const ClickableText = styled.li`
    cursor: pointer;
    padding: 15px 10px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    &:hover {
    background-color: lightblue;
    border-radius: 5px;
    list-style-type: none;
  }
`

export const Text = styled.li`
    padding: 15px 10px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    list-style-type: none;
`

export const List = styled.ul`
    list-style-type: none;
`

export const GoBackButton = styled.span`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;

    text-decoration: none;
    color: white;
    
    display: inline-block;
    outline: 0;
    border: none;
    cursor: pointer;
    height: 20px;
    padding: 12px 17px;
    border-radius: 50px;
    background-color: #2222220d;
    font-size: 16px;
    font-weight: 500;    
    &:hover {
    background-color: lightblue;
  }
`

export const Body = styled.div`
    background: -webkit-linear-gradient(left, #25c481, #25b7c4);
    background: linear-gradient(to right, #25c481, #25b7c4);
    font-family: 'Roboto', sans-serif;
`


export const Section = styled.section`
    margin: 50px;
`