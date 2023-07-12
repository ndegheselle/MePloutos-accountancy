<script>
  import "../scss/app.scss";

  import Alert from "@components/dialogs/Alert.svelte";
  import Confirm from "@components/dialogs/Confirm.svelte";
  import ContextMenu from "@components/dialogs/ContextMenu.svelte";
  import Loading from "@components/page/Loading.svelte";

  import { categories } from "@lib/store";

  $: updateCategoriesCSS($categories)

  function updateCategoriesCSS(categories)
  {
    if (!categories) return;
    
    let styles = "";
    for(const category of categories)
    {
      styles += `.category-${category.id} {stroke: ${category.color};}`;
    }

    document.getElementById("generatedStyles").innerHTML = styles;
  }
</script>

<svelte:head>
    <title>MePloutos - Home</title> 
</svelte:head>

<slot />

<Loading />

<Alert />
<Confirm />
<ContextMenu />
