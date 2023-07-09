<script>
    import CreateEditModal from "@components/layout/CreateEditModal.svelte";

    import AccountsRepo from "@lib/repos/accounts.js";
    import { Account } from "@lib/models";

    let internalModal = null;
    export const modal = {
        show(_account) {
            internalModal.show(_account || new Account());
        },
    };
</script>

<CreateEditModal
    name="Account"
    form={[
        [
            {
                prop: "color",
                type: "color",
                class: "is-one-quarter"
            },
            {
                prop: "name",
            },
        ],
    ]}
    repo={AccountsRepo}
    bind:modal={internalModal}
/>
