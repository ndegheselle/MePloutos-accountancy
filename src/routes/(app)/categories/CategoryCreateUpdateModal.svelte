<script>
    import CreateUpdateModal from "@components/layout/CreateUpdateModal.svelte";

    import {CategoriesRepo} from "@lib/db/categories";
    import { Category } from "@lib/db/categories";

    let internalModal = null;
    export const modal = {
        show(_account) {
            internalModal.show(_account || new Category());
        },
    };
</script>

<CreateUpdateModal
    name="Category"
    repo={CategoriesRepo}
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
    bind:modal={internalModal}
/>
