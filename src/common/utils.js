export const headers = token => ({
    headers: {
        'Content-Type': 'application/json',
        Authorization: token
    }
})