<script lang="ts">
   export let props: Props;
   let input: string = "";

   interface Props {
      placeholder: string;
      title: string;
      type: string;
      name: string;
      funcao: (valor: string) => { value: boolean; text: string };
   }
</script>

<section class="campo">
   <label for={props.name}>{props.title}</label>
   <input
      on:blur={() => props.funcao(input)}
      value={input}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      required
   />
   <span
      >{() => {
         props.funcao(input).value ? props.funcao(input).text : "";
      }}</span
   >
</section>

<style>
   .campo {
      height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
   }
</style>
