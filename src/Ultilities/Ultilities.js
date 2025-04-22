
import toast from 'react-hot-toast';

const notifyWrong = () => toast.error("You Already booked this doctor")



export const getBookings = () => {
    const bookings = localStorage.getItem('bookings')
    if (bookings) return JSON.parse(bookings)
    return []
}



export const addBookings = doctor => {
    const bookings = getBookings();
    const isExist = bookings.find(d => d.id === doctor.id);
    if (isExist) {
        return notifyWrong()
    }
    bookings.push(doctor);
    localStorage.setItem("bookings", JSON.stringify(bookings))
}


export const removeBookings = id => {
    const bookings = getBookings();
    const remainingFavorites = bookings.filter(doctor => doctor.id !== id)
    localStorage.setItem("bookings", JSON.stringify(remainingFavorites))
    
}