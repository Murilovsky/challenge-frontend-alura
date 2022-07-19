<script>
    export let userLogged

</script>
<header>
    <img id='forma1' src="Forma_1.svg" alt="Forma1">
    <section>
        <div class="links">
            <a href="#/">
                <img id='logo' src="Logo.svg" alt="Adopet's Logo">
            </a>

            <a href="#/">
                <img class='imagem' src="Casa.svg" alt="Home">                
            </a>

            <a href={userLogged?'#/contato':'#/login'}>
                <img class='imagem' src="Mensagens.svg" alt="Mail">
            </a>
        </div>
        {#if userLogged}
        <div class="perfil">
            <a href="#/perfil">
                <img src="Usuario.png" alt="User">
            </a>
        </div>   
        {/if} 
    </section>
</header>

<style>
    header{
        width: 90vw;
        position: absolute;
    }
    section{
        padding: 2rem 1rem;
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: 100%;
    }
    .links{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .imagem{
        box-sizing: border-box;
        margin: 0 2.5rem;
        max-height: 3rem;
    }
    #logo{
        display: none;
    }
    #forma1{
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        width: 360px;
        position: absolute;
    }
    @media screen and (min-width:768px){
        #logo{
            width: 130px;
            display: inline;
            margin: 0 2rem;
        }
        #forma1{
            width: 560px;
        }
    }
    @media screen and (min-width:1440px){
        section{
            margin-left: 3%;
        }
        .imagem{
            margin: 0 1.5rem;
            max-height: 2rem;
        }
    }
</style>