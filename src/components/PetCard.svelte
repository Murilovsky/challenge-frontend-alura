<script>
    import { fade } from "svelte/transition";

    export let nome
    export let idade
    export let tempo
    export let temperamento
    export let porte
    export let local

    async function MontaPet(json){
        return({
            nome:json.nome
        })
    }

</script>

<div in:fade id="card">
    <img id="foto-pet" src="/Animais/Animais_-_{nome}.png" alt=""/>
    <section>
        <p id="nome-pet">{nome}</p>
        <div id="info">
            <p>{idade} {tempo}</p>
            <p>{porte}</p>
            <p>{temperamento}</p>
        </div>
        <p id="local">{local}</p>
        <div id="contato">
            <img id="icone" src="/ícone_mensagem.svg" alt="Ícone mensagem">
            <a href="#/">
                <p>Falar com o responsável</p>
            </a>
        </div>
    </section>
</div>

<style>
    #card{
        display: flex;
        justify-content: space-between;
        background-color: #F6F6F6;
        padding: 16px 29px;
    }
    #foto-pet{
        width: 130px;
        height: 130px;
    }
    section{
        color: #737380;
        font-size: 14px;
        width: 50%;
        display: flex;
        text-align: left;
        flex-direction: column;
    }
    #nome-pet{
        margin-bottom: 10px;
        font-weight: 600;
        color: #3772FF;
    }
    #info{
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 20px;       
    }
    #local{
        font-size: 12px;
        margin-bottom: 10px;
    }
    #contato{
        display: flex;
        flex-direction: row;
        font-size: 10px;
        vertical-align: middle;
        transition: all 500ms;
    }
    #contato:hover{
        text-decoration: underline;
    }
    #icone{
        margin-right: 8px;
        width: 18px;
    }
    @media screen and (min-width:768px){
        #foto-pet{
            width: 150px;
            height: 150px;
        }
    }
</style>