<div>
    <section>
        <img class='logo' src="Logo.svg" alt="">
        <h3>Boas Vindas!</h3>
        <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
        <a href="#/login"><button>Já tenho uma conta</button></a>
        <a href="#/login"><button>Quero me Cadastrar</button></a>
    </section>
    <img id="bichos" src="Ilustracao.png" alt="Um gato e um cachorro em flat design">
    <img id="forma2" src="Forma_2.svg" alt="Blob verde">
</div>

<style>
div{
    padding: 150px 14% 0 14%;
    min-height:calc(100vh - 230px);;
    background-color: #3772FF;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: white;
}
section{
    min-height: 370px;
    vertical-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
#bichos{
    width: 300px;
    align-self: center;
}
#forma2{
    width: 70px;
    right: 0;
    position: absolute;
}
.logo{
    max-height: 50px;
    align-self: center;
}
@media screen and (min-width:768px){
    div{
        font-size: 18px;
        padding: 230px 20% 0 20%;
        min-height: calc(1100px - 180px);
    }
    p{
        padding: 0 19%;
    }
    section{
        min-height: 450px;
    }
    #bichos{
        width: 360px;
    }
}
@media screen and (min-width:1440px){
    div{
        padding: 50px 20% 0 20%;
    }
}

</style>