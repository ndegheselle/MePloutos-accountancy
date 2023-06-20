<script>
    import { Investment } from "@lib/models";
    import { parseDate } from "@lib/helpers";
    import investmentsService from "@lib/services/overview/investments.js";

    function handleClosing() {
        currentInvestment = null;
    }

    function handleSuccess() {
        currentInvestment.values.push(value);
        investmentsService.update(currentInvestment);
        handleClosing();
    }

    let value = {
        value: 0,
        date: new Date(),
    }
    $: console.log(value);
    let currentInvestment = null;
    
    export const modal = {
        show(_investment) {
            currentInvestment = _investment || new Investment();
        },
    };
</script>

<div class="modal" class:is-active={!!currentInvestment} on:closing={handleClosing}>
    <div class="modal-background" />
    <div class="modal-content">
        <div class="box p-0">
            <div class="p-4">
                <span class="has-text-grey-lighter"
                    >Add value</span
                >

                <div class="field">
                    <div class="control">
                        <label class="label"
                            >Value
                            <input
                                class="input"
                                type="number"
                                bind:value={value.value}
                            />
                        </label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label class="label"
                        >Date
                        <input
                            class="input"
                            type="date"
                            value={value.date?.toISOString().split('T')[0]}
                            on:change={e => value.date = parseDate(e.target.value)}
                        />
                    </label>
                    </div>
                </div>
            </div>

            <footer class="is-flex is-justify-content-flex-end p-2">
                <button class="button" aria-label="close">Cancel</button>
                <button class="ml-1 button is-success" on:click={handleSuccess}
                    >Add</button
                >
            </footer>
        </div>
    </div>
</div>
