(function () {
  emailjs.init('user_GVvtbF6VrvzONf6sm26WI');
  sendmail = () => {
    $('.load').css({ display: 'flex' });
    let name = $('#name').val();
    let gender = $("input[name='gender']:checked").val();
    let email = $('#email').val();
    let company = $('#company').val();
    let phone = $('#tel').val();
    let sub = $('#sub').val();
    let bodytext = $('#bodytext').val();

    let templateParams = {
      name: name,
      gender: gender,
      email: email,
      company: company,
      phone: phone,
      sub: sub,
      bodytext: bodytext,
    };

    emailjs
      .send(
        'service_q9qitra',
        'template_98la6js',
        templateParams,
        'user_GVvtbF6VrvzONf6sm26WI'
      )
      .then(async (response) => {
        await console.log('SUCCESS!', response.status, response.text);
        await $('.load').css({ display: 'none' });
        await history.go(0);
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  };
})();
