document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('#feedback-name').value;
  const email = this.querySelector('#feedback-email').value;
  const message = this.querySelector('#feedback-text').value;

  Email.send({
    SecureToken: '11d83847-9354-4a88-8ccd-9a06c211340f',
    To:   'boris375447763943@gmail.com',
    From: 'boris375447763943@gmail.com',
    Subject: 'Фидбэк от' + name + ': ' + email,
    Body: message,
    port: 2525
  }).then(
    alert('Спасибо за вашу обратную связь! Мы обязательно ответим вам!')
  );
});
