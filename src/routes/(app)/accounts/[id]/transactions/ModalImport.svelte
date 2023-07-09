<script>
    import { alert } from "@global/dialogs/Alert.js";
    import importService from "@lib/services/transactions/import";
    import desktopSave from "@lib/desktop/save.js";
    import { params } from "@lib/store";

    function isFormValid(files) {
        return files && files.length === 1;
    }

    async function importFile() {
        desktopSave.saveImportedFile(files[0]);

        let result = await importService.importTransactions(files[0], {
            accountId: accountId,
            bank: bank,
            saveImportedFiles: $params.saveImportedFiles,
        });

        if (result.count)
            alert.success(`${result.count} new transactions imported.`);
        else 
            alert.info(`No new transaction imported.`);

        handleClosing();
    }

    function handleClosing() {
        accountId = null;
    }

    let files;
    let bank = "labanquepostale";

    export let accountId = null;
    export const modal = {
        show(_accountId = null) {
            accountId = _accountId;
        },
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
                                <option value="labanquepostale"
                                    >La banque postal : CSV</option
                                >
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
            <button
                class="button is-success"
                disabled={!isFormValid(files)}
                on:click={importFile}>Import</button
            >
        </footer>
    </div>
</div>
