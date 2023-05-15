<script>
    import { accounts } from "@lib/accountancy/store.js";
    import { alerts } from "@global/dialogs.js";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let files;
    let bank = "labanquepostale";

    function isFormValid(files) {
        return files && files.length === 1;
    }

    async function sendImport()
    {
        let result = await importFile(files[0], {accountId: accountId, bank: bank});
        dispatch('transactionsImported', result.count);

        if (result.count) {
            alerts.success(`${result.count} new transactions imported.`);
            accounts.update((_accounts) => {
                _accounts.find(a => a.id == accountId).balance = result.balance;
                return _accounts;
            });
        }
        else
            alerts.success(`No new transaction imported.`);
        
        handleClosing();
    }

    function handleClosing()
    {
        accountId = null;
    }

    export let accountId = null;
    export const modal = {
        show(_accountId = null) {
            accountId = _accountId;
        }
    };
</script>

<div class="modal" class:is-active={!!accountId} on:closing={handleClosing}>
    <div class="modal-background" />
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Import</p>
            <button class="delete" aria-label="close" />
        </header>
        <section class="modal-card-body">
            <div class="field">
                <label class="label">
                    Bank
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select bind:value={bank}>
                                <option value="labanquepostale">La banque postal : CSV</option>
                            </select>
                        </div>
                    </div>
                </label>
            </div>

            <div class="field">
                <div class="control">
                    <div
                        class="file has-name is-boxed is-justify-content-center"
                    >
                        <label class="file-label">
                            <input
                                class="file-input"
                                type="file"
                                name="resume"
                                bind:files
                            />
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="gg-software-upload" />
                                </span>
                                <span class="file-label"> Choose a file… </span>
                            </span>
                            <span class="file-name">
                                {#if files && files[0]}
                                    {files[0].name}
                                {/if}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
            <button class="button" data-dismiss="modal">Cancel</button>
            <button class="button is-success" disabled={!isFormValid(files)} on:click={sendImport}
                >Import</button
            >
        </footer>
    </div>
</div>
