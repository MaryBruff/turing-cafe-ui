export default async function getReservations() {
    return await fetch('http://localhost:3001/api/v1/reservations')
        .then(response => response.json())
        .then(data => data)
        return data
        .catch(error => console.log(error))
}  




//url http://localhost:3001/api/v1/reservations

//response: [{ id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }]