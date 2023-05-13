<script>
    import { confirmModal } from "@global/store.js";

    function handleClosing(success)
    {
        $confirmModal.show = false;
        $confirmModal.callback(success);
    }

</script>

{#if $confirmModal.show}
<div class="modal is-active" on:closing={() => handleClosing(false)}>
    <div class="modal-background"/>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">{$confirmModal.title}</p>
            <button class="delete" aria-label="close"/>
        </header>
        <section class="modal-card-body">
            <p>{$confirmModal.message}</p>
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end p-2">
            <button class="button" aria-label="close">Cancel</button>
            <button class="button {$confirmModal.type}" on:click={() => handleClosing(true)}>Confirm</button
            >
        </footer>
    </div>
</div>
{/if}