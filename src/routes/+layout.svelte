<script>
  import "../scss/app.scss";

  import Alerts from "./Alerts.svelte";
  import ConfirmModal from "./ConfirmModal.svelte";
  import ContextMenu from "./ContextMenu.svelte";

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

    document.getElementById("customStyles").innerHTML = styles;
  }
</script>

<slot />

<Alerts />
<ConfirmModal />
<ContextMenu />
