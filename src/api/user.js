const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const ENDPOINT = {
    LOGIN: `${BACKEND_URL}/login`,
    REGISTER: `${BACKEND_URL}/register`,
}

export async function sendLoginRequest({ token }) {

    const data = JSON.stringify({ token });

    const fetchResponse = await fetch(ENDPOINT.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: data
    })

    const response = await fetchResponse.json();

    return {
        ok: fetchResponse.ok,
        ...response
    }

}