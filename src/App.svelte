<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Router from 'svelte-spa-router';
  import Home from './pages/Home.svelte';
  import Login from './pages/Login.svelte';
  import Cadastro from './pages/Cadastro.svelte';
  import Contato from './pages/Contato.svelte';
  import Pets from './pages/Pets.svelte';
  import Perfil from './pages/Perfil.svelte';
  let user = {
    username:'',
    password:''
  }
  let userLogged = (user.password && user.username)!= ''
  const routes = {'/':Home,'/login':Login,'/cadastro':Cadastro,'/contato':Contato,'/pets':Pets,'/perfil':Perfil}
</script>

<main>
  <Header {userLogged}/>
  <Router {routes}/>
  <Footer/>
</main>

<style>
</style>
