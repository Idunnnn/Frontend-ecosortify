
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const ENDPOINT = {
    LOGIN: `${BACKEND_URL}/login`,

    SEND_CHAT_HISTORY: `${BACKEND_URL}/chatbot`,
    GET_CHAT_HISTORY: `${BACKEND_URL}/chatbot`
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

export async function sendChatHistory(message, uid, token) {

    const data = JSON.stringify({
        chat: message
    });

    const fetchResponse = await fetch(`${ENDPOINT.SEND_CHAT_HISTORY}/${uid}`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: data
    });
    const response = await fetchResponse.json();
    console.log(data);
    console.log(response);

    return {
        ok: fetchResponse.ok,
        ...response
    }
}
export async function getChatHistory(uid, token) {
    const fetchResponse = await fetch(`${ENDPOINT.SEND_CHAT_HISTORY}/${uid}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    const response = await fetchResponse.json();
    console.log(response)
    return {
        ok: fetchResponse.ok,
        ...response
    }
}

