import { setCurrentAccountId } from "./store";

export async function load({ params }) {
    setCurrentAccountId(params.id);
}