<script lang="ts">
   import "../reset.css";
   import "../app.css";
   import Header from "$lib/components/Header.svelte";
   import Footer from "$lib/components/Footer.svelte";
</script>

<div>
   <Header userLogged={false} />
   <slot />
   <Footer />
</div>
