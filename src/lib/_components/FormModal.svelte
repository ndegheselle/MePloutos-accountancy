<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleClosing() {
        modal.data = null;
    }

    function send()
    {
        dispatch("finished", modal.data);
        modal.data = null;
    }

    export let title;

    function show(_data = null) {
        modal.data = _data;
    }
    export const modal = {
        show,
        data: null,
    };
</script>

<div class="modal" class:is-active={!!modal.data} on:closing={handleClosing}>
    <div class="modal-background" />
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">
                {modal.data?.id ? "Update" : "Create"}
                {title}
            </p>
            <button class="delete" aria-label="close" />
        </header>
        <section class="modal-card-body">
            {#if modal.data}
                <slot name="form" />
            {/if}
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
            <button class="button" data-dismiss="modal">Cancel</button>
            <button class="button is-success" on:click={send}
                >{modal.data?.id ? "Update" : "Create"}</button
            >
        </footer>
    </div>
</div>