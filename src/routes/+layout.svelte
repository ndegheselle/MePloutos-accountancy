<script>
  import "../scss/app.scss";
  import Alert from "@components/dialogs/Alert.svelte";
  import Confirm from "@components/dialogs/Confirm.svelte";
  import ContextMenu from "@components/dialogs/ContextMenu.svelte";
  import Loading from "@components/page/Loading.svelte";

  import { initCustomCSS } from "@lib/_init";
  import { categories } from "@lib/store";

  $: initCustomCSS($categories)
</script>

<svelte:head>
    <title>MePloutos - Home</title> 
</svelte:head>

<slot />

<Loading />

<Alert />
<Confirm />
<ContextMenu />
