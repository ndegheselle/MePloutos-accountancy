<script>
    import { confirmStore } from "./Confirm.js";

    function handleClosing(success)
    {
        $confirmStore.show = false;
        $confirmStore.callback(success);
    }

</script>

{#if $confirmStore.show}
<div class="modal is-active" on:closing={() => handleClosing(false)}>
    <div class="modal-background"/>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">{$confirmStore.title}</p>
            <button class="delete" aria-label="close"/>
        </header>
        <section class="modal-card-body">
            <p>{$confirmStore.message}</p>
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end p-2">
            <button class="button" aria-label="close">Cancel</button>
            <button class="button {$confirmStore.type}" on:click={() => handleClosing(true)}>Confirm</button
            >
        </footer>
    </div>
</div>
{/if}