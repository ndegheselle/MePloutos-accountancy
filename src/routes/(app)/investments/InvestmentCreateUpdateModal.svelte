<script>
    import { Investment } from "@lib/models";
    import { parseDate } from "@lib/helpers";

    import investmentsService from "@lib/services/overview/investments.js";

    function handleClosing() {
        show = false;
    }

    function handleSuccess() {
        if (currentInvestment.id)
            investmentsService.update(currentInvestment);
        else
            investmentsService.create(currentInvestment);

        handleClosing();
    }

    let edit = false;
    let show = false;
    let currentInvestment = {};
    
    export const modal = {
        show(_investment) {
            edit = !!_investment;
            currentInvestment = _investment || new Investment();
            show = true;
        },
    };
</script>

<div class="modal" class:is-active={show} on:closing={handleClosing}>
    <div class="modal-background" />
    <div class="modal-content">
        <div class="box p-0">
            <div class="p-4">
                <span class="has-text-grey-lighter"
                    >{edit ? "Edit subscription" : "Add subscription"}</span
                >

                <div class="field">
                    <div class="control">
                        <label class="label"
                            >Name
                            <input
                                class="input"
                                type="text"
                                bind:value={currentInvestment.name}
                            />
                        </label>
                    </div>
                </div>
                <div class="columns mb-0">
                    <div class="field column mb-0">
                        <div class="control">
                            <label class="label"
                                >Initial investment
                                <input
                                    class="input"
                                    type="number"
                                    bind:value={currentInvestment.initialValue}
                                />
                            </label>
                        </div>
                    </div>
                    <div class="field column">
                        <div class="control">
                            <label class="label"
                            >Start date
                            <input
                                class="input"
                                type="date"
                                value={currentInvestment.startDate?.toISOString().split('T')[0]}
                                on:change={e => currentInvestment.startDate = parseDate(e.target.value)}
                            />
                        </label>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="is-flex is-justify-content-flex-end p-2">
                <button class="button" aria-label="close">Cancel</button>
                <button class="ml-1 button is-success" on:click={handleSuccess}
                    >{edit ? "Edit" : "Add"}</button
                >
            </footer>
        </div>
    </div>
</div>
