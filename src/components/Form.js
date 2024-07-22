function Form() {

    function CadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou o usuário!")
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <input type="text" placeholder= "Digite seu nome" />
                </div>
                <div>
                    <input type="submit" placeholder= "CADASTRAR" />
                </div>
            </form>
        </div>
    )

}

export default Form