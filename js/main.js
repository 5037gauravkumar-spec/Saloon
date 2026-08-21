// Rynix Salon — Main JavaScript

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Booking form → WhatsApp
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const stylist = document.getElementById('stylist').value;
    const message = document.getElementById('message').value.trim();

    let text = `Hi Rynix Salon 👋%0A%0A`;
    text += `*New Booking Enquiry*%0A%0A`;
    text += `*Name:* ${name}%0A`;
    text += `*Phone:* ${phone}%0A`;
    text += `*Service:* ${service}%0A`;
    if (date) text += `*Preferred Date:* ${date}%0A`;
    if (time) text += `*Preferred Time:* ${time}%0A`;
    if (stylist) text += `*Preferred Stylist:* ${stylist}%0A`;
    if (message) text += `%0A*Message / Special Request:*%0A${message}%0A`;
    text += `%0APlease confirm availability. Thank you!`;

    const url = `https://wa.me/917417495807?text=${text}`;
    window.open(url, '_blank');
  });
}

// Contact form → WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('cname').value.trim();
    const phone = document.getElementById('cphone').value.trim();
    const subject = document.getElementById('csubject').value;
    const message = document.getElementById('cmessage').value.trim();

    let text = `Hi Rynix Salon 👋%0A%0A`;
    text += `*Contact Enquiry*%0A%0A`;
    text += `*Name:* ${name}%0A`;
    text += `*Phone:* ${phone}%0A`;
    text += `*Subject:* ${subject}%0A%0A`;
    text += `*Message:*%0A${message}`;

    const url = `https://wa.me/917417495807?text=${text}`;
    window.open(url, '_blank');
  });
}

// FAQ accordion (if present)
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) {
      item.classList.add('active');
      const answer = item.querySelector('.faq-answer');
      if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      const answer = item.querySelector('.faq-answer');
      if (answer) answer.style.maxHeight = '0';
    }
  });
});

// Set min date for booking to today
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}