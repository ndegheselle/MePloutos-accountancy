<script>
    import accountsService from '@lib/services/accounts.js';
    import {Account} from "@lib/models";
    import {colors} from '@lib/base/colors.js';

    import ColorInput from '@components/ColorInput.svelte';

    function handleClosing() {
        show = false;
    }

    function handleSuccess()
    {
        if (currentAccount.id)
            accountsService.update(currentAccount);
        else
            accountsService.create(currentAccount);
        
        show = false;
    }

    let edit = false;
    let show = false;
    let currentAccount = {};

    export const modal = {
        show(_account) {
            edit = !!_account;
            currentAccount = _account || new Account();
            show = true;
        },
    };
</script>

<div class="modal" class:is-active={show} on:closing={handleClosing}>
    <div class="modal-background" />
    <div class="modal-content">
        <div class="box p-0">
            <div class="p-4">
                <span class="has-text-grey-lighter">{(edit)? 'Edit account' : 'Add account'}</span>

                <div class="field">
                    <div class="control">
                        <label class="label">Name
                            <input
                            class="input"
                            type="text"
                            bind:value={currentAccount.name}
                        />
                        </label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label class="label">Color</label>
                        <ColorInput bind:color={currentAccount.color} availableColors={colors}/>
                    </div>
                </div>
            </div>

            <footer class="is-flex is-justify-content-flex-end p-2">
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