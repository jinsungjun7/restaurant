export default function contact() {
    // 37.552199, 126.987981
    // AIzaSyCxoUHPeqFwtjcr6LeKCWGBFZzNbJazqew
    const location = document.createElement('div');
    location.classList.add('location');
    location.textContent = 'Location';

    const address = document.createElement('div');
    address.classList.add('address');
    address.innerHTML = '123 Street';
    address.innerHTML += '<br>';
    address.innerHTML += 'City, State';

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.textContent = 'Hours';

    const hoursContent = document.createElement('div');
    hoursContent.classList.add('hoursContent');
    hoursContent.innerHTML = 'Mon - Fri: 10AM - 8PM';
    hoursContent.innerHTML += '<br>';
    hoursContent.innerHTML += 'Saturday: 12PM - 6PM';
    hoursContent.innerHTML += '<br>';
    hoursContent.innerHTML += 'Sunday: Closed';

    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.textContent = 'Contact';

    const contactContent = document.createElement('div');
    contactContent.classList.add('contactContent');
    contactContent.innerHTML = 'Phone: (123) 456-7890';
    contactContent.innerHTML += '<br>'; 
    contactContent.innerHTML += 'E-mail: koreanpastries@gmail.com';

    // appending children
    location.appendChild(address);
    hours.appendChild(hoursContent);
    contact.appendChild(contactContent);

    return [location, hours, contact]

}