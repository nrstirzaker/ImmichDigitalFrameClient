
export async function getNewIds():Promise<string[]> {

    const key: string | undefined = process.env.IMMICH_API_KEY

    if (!key){
        throw new Error('No API key provided.')
    }

    const baseURL: string | undefined = process.env.IMMICH_SERVER_URL;
    if (!baseURL){
        throw new Error('Base URL of image server not provided.')
    }

    const searchCriteria = {
        'takenAfter':'2026-11-1T00:00:00.000Z',
        'takenBefore':'2026-11-6T23:59:59.999Z'
    }

    const response = await fetch(baseURL+"/api/search/metadata", {
        method: "POST",
        headers: {
            "x-api-key": key,
            'Content-Type': 'application/json'
        },
        body: searchCriteria
    });

    const result = await response;
    const json = JSON.stringify(result)


    const assets = json['assets']

    return assets;


}