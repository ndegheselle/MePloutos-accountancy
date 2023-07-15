<script>
    import Form from "./Form.svelte";

    function handleClosing() {
        show = false;
    }

    function handleSuccess()
    {
        if (edit)
            repo.udapte(value);
        else
            repo.create(value);
        
        handleClosing();
    }

    let show = false;
    let edit = false;
    let value = {};

    export let name = "";
    // XXX : maybe pass callback instead of repo ?
    export let repo = null;
    export let form = [];
    export const modal = {
        isEdit() {
            return edit;
        },
        show(_value) {
            value = _value;
            edit = !!(value?.id);
            show = true;
        },
    };
</script>

{#if show }
<div class="modal is-active" on:closing={handleClosing}>
    <div class="modal-background" />
    <div class="modal-content">
        <div class="box">
            <div>
                <span class="has-text-grey-lighter">{(edit)? `Edit ${name}` : `Add ${name}`}</span>
                <Form bind:form={form} bind:value={value}/>
            </div>

            <footer class="is-flex is-justify-content-flex-end">
                <button class="button" aria-label="close">Cancel</button>
                <button class="ml-1 button is-success" on:click={handleSuccess}>{(edit)? 'Edit' : 'Add'}</button>
            </footer>
        </div>
    </div>
</div>
{/if}
<style scoped>
    .modal-content {
        overflow: initial;
    }
</style>