import styled, {createGlobalStyle, keyframes} from "styled-components"
 
// Reset do CSS
export const Reset = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
`
//Os botões
export const Botões = styled.button`
border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  width: 25%;
  transition: border-color 0.25s;
&:hover {
  border-color: rgba(133, 22, 3, 0.384);
  color: #ff00007f;
}
&:focus,
&:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`
// Estilização da calculadora
export const Calculadora = styled.section`
box-shadow: rgba(133, 22, 3, 0.384) 0px 20px 30px -10px;
border-radius: 5%;
background-color: rgba(133, 22, 3, 0.384);
padding: 1%;
/* Coloquei uma largura minima para nn precisar a fazer o @ media do resposivo */
min-width: 220px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border: solid 1px black;
width: 18%;
height: 50%;
.linha{
  display: flex;
  justify-content: space-between;
}
.botões{
  display: flex;
  flex-direction: column;
}
`

// A main
export const MainContainer = styled.main`
 width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
`
// Visor Da calculadora

export const Visor = styled.div`
  padding: 0px 2% 0px 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  border: solid 1px;
  width: 80%;
  height: 20%;
  background-color: rgb(27, 27, 27);
.expressão{
  font-size: 10px;
}
.valorDigitado{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
 .valorDigitado span{
  text-align: end;
  width: 30%;
  overflow: hidden auto;
}

`
// Animação de quando aparece o erro

const MostrarErro = keyframes`
from{
    width: 100%;
  }to{
    background-color: rgb(218, 32, 32);
    width: 0%;
  }
`

// caixa do erro q aparece qnd algo deu errado
export const ContainerDeErro = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 200px;
  position: absolute;
  right: 0;
  bottom: 0;
  border: solid 2px ;
  width: 20%;
  height: 15%;
 p{
  padding: 1%;
  overflow-y:  hidden scroll;
}
.containerDaBarra{
  width: 100%;
  border: solid 1px ;
  height: 12%;
}
.barra{
  background-color: green;
  width: 100%;
  height: 100%;
  animation: ${MostrarErro} ease 3s;
}

`