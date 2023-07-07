import { setCurrentAccountId } from "./_store";

export async function load({ params }) {
    setCurrentAccountId(params.id);
}