<script>
    import DynamicForm from "./DynamicForm.svelte";

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
        show(_value) {
            value = _value;
            edit = !!(value?.id);
            show = true;
        },
    };
</script>


<div class="modal" class:is-active={show} on:closing={handleClosing}>
    <div class="modal-background" />
    <div class="modal-content">
        <div class="box">
            <span class="has-text-grey-lighter">{(edit)? `Edit ${name}` : `Add ${name}`}</span>
            <DynamicForm bind:form={form} bind:value={value}/>

            <footer class="is-flex is-justify-content-flex-end">
                <button class="button" aria-label="close">Cancel</button>
                <button class="ml-1 button is-success" on:click={handleSuccess}>{(edit)? 'Edit' : 'Add'}</button>
            </footer>
        </div>
    </div>
</div>

<style scoped>
    .modal-content {
        overflow: initial;
    }
</style>