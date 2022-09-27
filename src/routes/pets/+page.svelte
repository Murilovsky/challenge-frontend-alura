<script lang="ts">
    import { ListaPets } from "$lib/utils/dao";
    import PetCard from "$lib/components/PetCard.svelte";
</script>

<svelte:head>
    <title>Adopet | Pets</title>
</svelte:head>
<div>
    <p>Olá! Veja os amigos disponíveis para adoção!</p>
    {#await ListaPets()}
        <p>Buscando pets disponíveis</p>
        <img id="logo" src="/adopet_bar.png" alt="" />
    {:then data}
        <section>
            {#each data as pet}
                <PetCard {pet} />
            {/each}
        </section>
    {:catch err}
        <p>Algo deu errado: {err.message}</p>
    {/await}
</div>

<style>
    div {
        text-align: center;
        min-height: calc(100vh - 80px);
    }
    #logo {
        animation: pulse 1s infinite;
    }
    @keyframes pulse {
        0% {
            scale: 0.75;
        }
        50% {
            scale: 1;
        }
        100% {
            scale: 0.75;
        }
    }
    p {
        font-size: 18px;
        color: #3772ff;
        padding: 150px 65px 0 65px;
        margin-bottom: 40px;
    }

    section {
        padding: 10px 15px;
        box-sizing: border-box;
        display: grid;
        gap: 16px;
    }
    @media screen and (min-width: 768px) {
        p {
            padding-top: 200px;
        }
        section {
            padding: 10px 35px 10px 20px;
            grid-template-columns: 50% 50%;
        }
    }
    @media screen and (min-width: 1280px) {
        p {
            padding-top: 100px;
            padding-bottom: 40px;
        }
        section {
            padding: 10px 235px 10px 220px;
            grid-template-columns: 33.33% 33.33% 33.33%;
            grid-template-rows: 33.33%;
        }
    }
</style>
