<script lang="ts">
  import datasets from "../utils/datasets";
  import { type Datasets } from "../utils/type";

  export let field: string;
  export let value: string;

  let dataform = datasets[field as keyof Datasets];
</script>

<select
  bind:value
  class=" rounded-md w-full p-3 bg-[#42497f] hover:bg-[#3a406f] text-white border-r-8 border-[#42497f]"
>
  <option value="">Any {field}</option>
  {#each dataform as data}
    <option value={data.id}>{data.name}</option>
  {/each}
</select>
