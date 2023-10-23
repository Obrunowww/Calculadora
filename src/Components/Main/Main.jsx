import { useState } from 'react'
import { Calculadora, MainContainer, Visor, Botões, ContainerDeErro } from './MainStyled'
function Main() {

    const [resultado, setResultado] = useState(0)
    const [primeiroValor, setPrimeiroValor] = useState(false)
    const [segundoValor, setSegundoValor] = useState(false)
    const [mostrarErro, setMostrarErro] = useState(false)
    const [erroAtual, setErroAtual] = useState("")
    const [visor, setVisor] = useState("")
    // Fiz os botões assim pq fica mais facil de modificar dps 
    const botões = [
        ["c"],
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']]


    const [operaçãoAtual, setOperaçãoAtual] = useState("")

    // Fiz essa função para disponibbilizar erros variados 
    const exibirErro = (erro) => {
        setMostrarErro(true)
        setErroAtual(erro)

        setTimeout(() => {
            setMostrarErro(false)
        }, 3000);

    }

    // Essa é a função base da calculadora onde entra 3 valores 2 numeros e um operador 
    const calcular = (valor1, valor2, operação) => {

        let calculo;
        switch (operação) {
            case "+":
                calculo = (+valor1) + (+valor2)
                break;
            case "-":
                calculo = (+valor1) - (+valor2)
                break;
            case "*":
                calculo = (+valor1) * (+valor2)
                break;

            case "/":
                calculo = (+valor1) / (+valor2)
                // mostrar apenas 2 numeros dps da virgula 
                calculo = calculo.toFixed(2)
                break;
            default:
                exibirErro("Algum dos valores foi invalido")
                break;
        }
        setResultado(calculo)
        setPrimeiroValor(calculo)
        setVisor(calculo)

    }

    const adicionarACalculadora = (botão) => {
        const operadores = ['/', '*', '-', '+', '=']
        // Esse if esta fazendo o seguinte ele ta verificando primeiro se tem os 2 valores e se tem alguma operação acontecendo 
        //se a operação for = sem um segundo valor ele nn faz nada e se for outro ele coloca a operação desejada 
        // e o ultimo é pra filtrar erro caso coloque a operação antes do primeiro valor 
        if (operadores.includes(botão)) {
            if (primeiroValor && segundoValor && botão == "=") {
                setVisor("")
                calcular(primeiroValor, segundoValor, operaçãoAtual)
                setSegundoValor(false)
                setOperaçãoAtual("")

            } else if (primeiroValor) {
                setOperaçãoAtual(botão == "=" ? "" : botão)
                setVisor("")
            } else {
                exibirErro("A operação só poderá ser feita depois de algum valor digitado");
            }

        } else {
            setVisor((valorDoVisor) => valorDoVisor + botão)
            if (operaçãoAtual && botão != "c") {
                setSegundoValor(visor + botão)
            }
            else if (botão != "c") {
                setPrimeiroValor(visor + botão)
            }else{
                    setResultado(0)
                    setPrimeiroValor(false)
                    setSegundoValor(false)
                    setOperaçãoAtual("")
                    setVisor("")
            }

        }
    }
    return (
        <MainContainer>
            <Calculadora>
                <Visor>
                    <div>
                        <p className='expressão'> {primeiroValor} {operaçãoAtual} {segundoValor}</p>
                    </div>
                    <p className='valorDigitado'>Valor digitado: <span>{visor == "" ? resultado : visor}</span></p>
                </Visor>
                <div className='botões'>
                    {botões.map((fileira, indexFileira) => (
                        <div key={indexFileira} className='linha'>
                            {fileira.map((botão, index) => (
                                <Botões key={index} onClick={() => adicionarACalculadora(botão)}> {botão}</Botões>))}
                        </div>
                    ))}
                </div>
            </Calculadora>
            {mostrarErro && (<ContainerDeErro><p>{erroAtual == "" ? "erro" : erroAtual}</p><div className='containerDaBarra'><div className='barra'></div></div></ContainerDeErro>)}
        </MainContainer>
    )
}
export default Main