<script>
import { ListaPets } from "../utils/dao";
import PetCard from "../components/PetCard.svelte";

</script>

<div>
    <p>Olá! Veja os amigos disponíveis para adoção!</p>
        {#await ListaPets()}
            <p>Buscando pets disponíveis</p>

        {:then promise}

        <section>
            {#each promise as pet}
                <PetCard nome={pet.nome} idade={pet.idade} temperamento={pet.temperamento} tempo={pet.tempo} local={pet.local} porte={pet.porte}/>
            {/each}
        </section>

        {:catch err} 
            <p>Algo deu errado: {err.message}</p>    
        {/await}

</div>

<style>
    div{
        text-align: center;
        min-height: calc(100vh - 80px);
    }

    p{
        font-size: 18px;
        color: #3772FF;
        padding:150px 65px 0 65px;
        margin-bottom: 40px;
    }

    section{
        padding: 10px 15px;
        box-sizing: border-box;
        display: grid;
        gap: 16px;
        
    }
    @media screen and (min-width:768px){
        p{
            padding-top: 200px;
        }
        section{
            padding: 10px 35px 10px 20px;
            grid-template-columns: 50% 50%;
        }
    }
    @media screen and (min-width:1280px){
        p{
            padding-top: 100px;
            padding-bottom: 40px;
        }
        section{
            padding: 10px 235px 10px 220px;
            grid-template-columns: 33.33% 33.33% 33.33%;
            grid-template-rows: 33.33%;
        }
    }
</style>
