<svelte:head>
    <title>Adopet | Home</title>
</svelte:head>
<div>
    <img id="forma2" src="Forma_2.svg" alt="Blob verde" />
    <section>
        <img class="logo" src="Logo.svg" alt="" />
        <h3>Boas Vindas!</h3>
        <p>
            Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
            gente!
        </p>
        <a href="/login"><button>Já tenho uma conta</button></a>
        <a href="/register"><button>Quero me Cadastrar</button></a>
    </section>
    <img
        id="bichos"
        src="Ilustracao.png"
        alt="Um gato e um cachorro em flat design"
    />
</div>

<style>
    div {
        min-height: calc(100vh - 80px);
        background-color: #3772ff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        text-align: center;
        font-size: 16px;
        line-height: 24px;
        color: white;
    }
    section {
        padding: 0 10%;
        height: 300px;
        vertical-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    #bichos {
        width: 50%;
        max-width: 250px;
        display: block;
    }
    #forma2 {
        height: 300px;
        position: absolute;
        right: 0;
        top: 40%;
    }
    .logo {
        max-height: 150px;
        align-self: center;
    }
    @media screen and (min-width: 768px) {
        div {
            font-size: 18px;
            padding: 0 20%;
        }
        p {
            padding: 0 19%;
        }
        section {
            height: 370px;
        }
        #bichos {
            max-width: 200px;
        }
        #forma2 {
            top: 20%;
            height: 670px;
        }
    }
    @media screen and (min-width: 1280px) {
        #bichos {
            max-width: 250px;
        }
    }
</style>
