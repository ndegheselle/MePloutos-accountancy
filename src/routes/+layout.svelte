<script>
  import "../scss/app.scss";
  import "css.gg/icons/all.scss";

  import Alerts from "./Alerts.svelte";
  import ConfirmModal from "./ConfirmModal.svelte";
  import ContextMenu from "./ContextMenu.svelte";
</script>

<slot />

<Alerts />
<ConfirmModal />
<ContextMenu />