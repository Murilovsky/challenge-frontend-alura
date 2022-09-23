<div>
    <img id="forma2" src="Forma_2.svg" alt="Blob verde" />
    <p>
        Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
    </p>
    <section>
        <form action="">
            <label for="foto">Foto de Perfil</label>
            <img src="/Usuario.png" alt="foto de perfil">
            <label for="nome">Nome</label>
            <input
                type="text"
                name="nome"
                placeholder="Insira seu nome aqui..."
            />
            <label for="telefone">Telefone/Whatsapp</label>
            <input
                type="tel"
                name="telefone"
                placeholder="Insira seu telefone aqui..."
            />
            <label for="cidade">Cidade</label>
            <input
                type="text"
                name="cidade"
                placeholder="Rio de Janeiro"
            />
            <label for="mensagem">Mensagem</label>
            <textarea rows="7" name="mensagem" />

            <button>Salvar</button>
        </form>
    </section>
</div>

<style>
    div {
        min-height: calc(100vh - 80px);
        text-align: center;
    }
    p {
        padding: 160px 60px 40px 60px;
        font-size: 18px;
        color: #3772ff;
    }
    section {
        background-color: #f6f6f6;
        border-radius: 10px;
        margin: 0 5% 10% 5%;
        padding: 5%;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    img{
        align-self: center;
        width: 120px;
    }
    input {
        background-color: white;
        margin-bottom: 10px;
    }
    label {
        color: #3772ff;
        font-size: 16px;
        font-weight: 600;
        text-align: left;
        margin: 15px 0;
    }
    textarea {
        background-color: white;
        text-align: left;
        resize: none;
        margin-bottom: 20px;
    }
    #forma2 {
        display: none;
        height: 300px;
        position: absolute;
        right: 0;
        top: 40%;
    }
    button{
        align-self: center;
    }
    @media screen and (min-width: 768px) {
        p {
            padding: 200px 200px 60px 200px;
        }
        section {
            margin: 0 20%;
            padding: 30px;
        }
        #forma2 {
            display: inline;
            top: 10%;
            height: 670px;
        }
    }
    @media screen and (min-width: 1280px) {
        p {
            padding: 80px 30% 60px 30%;
        }
        section {
            margin: 0 30%;
            padding: 30px;
        }
    }
</style>
