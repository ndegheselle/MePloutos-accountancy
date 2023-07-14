<script>
  import "../scss/app.scss";
  import { onMount } from "svelte";

  import Alert from "@components/dialogs/Alert.svelte";
  import Confirm from "@components/dialogs/Confirm.svelte";
  import ContextMenu from "@components/dialogs/ContextMenu.svelte";
  import Loading from "@components/page/Loading.svelte";
  import initComponents from "@components/_init.js";

  import { initCustomCSS } from "@lib/_init";
  import initDb from "@lib/db/_init.js";
  import initDesktop from '@lib/desktop/_init.js';
  import { isDesktop } from '@lib/desktop/helpers.js'

  import { categories } from "@lib/store";

  $: initCustomCSS($categories);

  onMount(async () => {
    if (isDesktop()) initDesktop();

    initDb();
    initComponents();
  });
</script>

<svelte:head>
  <title>MePloutos - Home</title>
</svelte:head>

<slot />

<Loading />

<Alert />
<Confirm />
<ContextMenu />
