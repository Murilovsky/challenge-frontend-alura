<script lang="ts">
    import { fly } from "svelte/transition";
    import InputLabel from "$lib/components/InputLabel.svelte";
    import {
        ValidaEmail,
        ValidaNome,
        ValidaSenha,
    } from "$lib/utils/validacoes";
</script>

<svelte:head>
    <title>Adopet | Register</title>
</svelte:head>

<div>
    <img
        in:fly={{ y: -100, x: 100, duration: 500 }}
        id="patas"
        src="Patas.png"
        alt="Patas"
    />
    <img src="Logo-azul.svg" alt="Logo do adopet" />
    <img id="forma2" src="Forma_2.svg" alt="Blob verde" />
    <p>Já tem conta? Faça seu login</p>
    <section>
        <form>
            <InputLabel
                props={{
                    title: "Email",
                    name: "email",
                    placeholder: "user@email.com",
                    type: "email",
                    funcao: ValidaEmail,
                }}
            />

            <InputLabel
                props={{
                    title: "Nome e Sobrenome",
                    name: "nome",
                    placeholder: "Juliana Campos",
                    type: "text",
                    funcao: ValidaNome,
                }}
            />

            <InputLabel
                props={{
                    title: "Senha",
                    name: "senha",
                    placeholder: "senhaforte123",
                    type: "password",
                    funcao: ValidaSenha,
                }}
            />
            //FALTA FAZER A CONFIRMAÇÃO DE SENHA
            <button type="submit">Cadastrar</button>
        </form>
    </section>
</div>

<style>
    #forma2 {
        position: absolute;
        transform: scaleX(-1);
        height: 600px;
        left: 0;
        top: 30%;
        z-index: -1;
    }
    #patas {
        margin: 0;
        position: absolute;
        right: 0px;
        top: 0px;
        height: 220px;
    }
    img {
        margin: 7% 0;
        height: 40px;
    }
    p {
        color: #3772ff;
        margin-bottom: 7%;
    }
    div {
        padding: 150px 6% 0 6%;
        min-height: calc(100vh - 80px);
        text-align: center;
    }
    form {
        margin: auto 0;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    section {
        margin: auto 0;
    }
    .campo {
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .forget {
        margin-top: 10px;
        font-size: 14px;
        text-decoration: underline;
    }
    button {
        margin-top: 20px;
        width: 60%;
    }
    @media screen and (min-width: 768px) {
        div {
            padding: auto 6%;
        }
        button {
            width: 30%;
        }
        #forma2 {
            transform: scaleX(1);
            top: 20%;
            right: 0;
            left: auto;
            height: 620px;
        }
    }
    @media screen and (min-width: 1280px) {
        div {
            padding: 0 6%;
        }
        img {
            margin: 5% 0;
        }
        p {
            margin-bottom: 2%;
        }
        #forma2 {
            top: 10%;
        }
    }
</style>
