export async function getImageFromImmich(id: string): Promise<globalThis.Response> {
    //e41ec084-02fb-4654-8423-667813c5988a
    //3164fe25-0814-416b-98bd-c3511156e00f
    const key: string | undefined = process.env.IMMICH_API_KEY

    if (!key){
        throw new Error('No API key provided.')
    }

    const baseURL: string | undefined = process.env.IMMICH_SERVER_URL;
    if (!baseURL){
        throw new Error('Base URL of image server not provided.')
    }


    return await fetch(baseURL+"/api/assets/" + id + "/thumbnail", {
        method: "GET",
        headers: {
            "x-api-key": key
        }
    });
}





