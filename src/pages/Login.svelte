<script>
    import { fly } from 'svelte/transition';
    import { getContext } from 'svelte';
    import {ValidaCampo} from '../utils/validacoes'

    let cadastro = 

</script>

<div>
    <img in:fly="{{y:-100,x:100,duration:500}}" id='patas' src="Patas.png" alt="Patas">
    <img src="Logo-azul.svg" alt="Logo do adopet">
    <p>Já tem conta? Faça seu login</p>
    <form>
        <section>
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Digite seu email" required>
            <span>{ValidaCampo('email')}</span>
        </section>
        {#if cadastro}
        <section>
            <label for="nome" >Nome e Sobrenome</label>
            <input type="text" name='nome' placeholder="Juliana Campos" minlength="6" required>
            <span>{ValidaCampo('nome')}</span>
        </section>
        {/if}
        <section>
            <label for="senha" >Senha</label>
            <input type="password" name='senha' placeholder="senhaforte123" required minlength="8">
            <span>{ValidaCampo('senha')}</span>
        </section>
        {#if cadastro}
        <section>
            <label for="senha_con" >Confirmar Senha</label>
            <input type="password" name='senha_con' placeholder="senhaforte123" required minlength="8">
            <span>{ValidaCampo('senha')}</span>
        </section>
        {/if}

        {#if !cadastro}
            <span class="forget">Esqueci minha senha</span>
        {/if}
        <button type="submit">{cadastro?'Cadastrar':'Entrar'}</button>

    </form>
</div>

<style>
    #patas{
        margin: 0;
        position: absolute;
        right: 0px;
        top: 0px;
        height: 220px;
    }
    img{
        margin: 7% 0;
        height: 40px;
    }
    p{
        color: #3772FF;
        margin-bottom: 7%;
    }
    div{
        padding: 150px 6% 0 6%;
        min-height: calc(800px - 180px);
        height: calc(100vh - 230px);
        text-align: center;
    }
    form{
        margin: auto 0;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    section{
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .forget{
        margin-top: 10px;
        font-size: 14px;
        text-decoration: underline;
    }
    button{
        margin-top: 20px;
        width: 60%;
    }

</style>