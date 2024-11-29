export default class APIService {
    // Insert an article
    static recycle(body) {
        // return fetch(`https://recycle-garbage-backend.onrender.com/recycle`, {
        return fetch(`https://pure-energy.onrender.com/recycle`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
    static monitor(body) {
        // return fetch(`https://recycle-garbage-backend.onrender.com/recycle`, {
        return fetch(`https://pure-energy.onrender.com/monitor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
    static chat(body) {
        return fetch(`https://pure-energy.onrender.com/chat`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

}