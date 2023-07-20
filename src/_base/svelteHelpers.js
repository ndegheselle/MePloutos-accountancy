export function subscribeMultiples(stores, callback)
{
    // Store values of all the stores
    const values = [];
    const unsubscribes = [];
    // Subscribe to all the stores
    for (let i = 0; i < stores.length; i++)
    {
        stores[i].subscribe((value) => {
            values[i] = value;
            // Call the callback when all the stores have values
            if (values.length == stores.length) callback(values);
        });
    }

    return () => {
        unsubscribes.forEach((unsubscribe) => unsubscribe());
    }
}