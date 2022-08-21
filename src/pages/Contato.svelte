<div>
    <img id="forma2" src="Forma_2.svg" alt="Blob verde" />
    <p>
        Envie uma mensagem para a pessoa ou instituição que está cuidando do
        animal:
    </p>
    <section>
        <form action="">
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
            <label for="animal">Animal</label>
            <input
                type="text"
                name="animal"
                placeholder="Insira o nome do animal aqui..."
            />
            <label for="mensagem">Mensagem</label>
            <textarea rows="7" name="mensagem" />

            <button>Enviar</button>
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
