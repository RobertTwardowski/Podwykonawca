import styled from "styled-components";



export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #f2f4f5;
`
export const Container = styled.div`
display: flex;
border-radius: 6px;
width: 400px;
height: 600px;
background-color: #fff;
`

export const RegistrationForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

input{
width: 90%;
height: 40px;
font-size: 30px;
}
`