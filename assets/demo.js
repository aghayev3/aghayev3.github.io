// The order-number demo: shows broken access control in five seconds.
// Each page supplies its own markup and styling; this file only wires the behaviour.
//
// Markup it expects inside [data-idor]:
//   input[name=order]   the order number field
//   form                submitting it "sends the request"
//   [data-out]          where the response is written (a <pre><code>)
//   [data-verdict]      one plain sentence about what just happened
// Optional on [data-idor]: data-path="/cgi-bin/orders.cgi?id=" to change the request line.
(function () {
  var orders = {
    1041: { order: 1041, customer: 'You', plan: 'Team, annual', total: '€240.00', card: '•••• 4242' },
    1042: { order: 1042, customer: 'Dana Kowal', email: 'dana@kowal-studio.example', plan: 'Studio, monthly', total: '€49.00', address: '14 Elm Street, Leeds' },
    1043: { order: 1043, customer: 'Arif Hasanov', email: 'arif@hasanov.example', plan: 'Team, annual', total: '€240.00', address: '8 Nizami Street, Baku' },
    1040: { order: 1040, customer: 'Mia Torres', email: 'mia.t@example.com', plan: 'Solo, monthly', total: '€12.00', address: '31 Calle Mayor, Madrid' }
  };

  function render(root, n) {
    var out = root.querySelector('[data-out]');
    var verdict = root.querySelector('[data-verdict]');
    var line = 'GET ' + (root.dataset.path || '/api/orders/') + n + '\nCookie: session=yours\n\n';
    var data = orders[n];
    if (!data) {
      out.textContent = line + 'HTTP/1.1 404 Not Found';
      verdict.textContent = 'No order with that number. Try 1042.';
      root.dataset.state = 'none';
      return;
    }
    out.textContent = line + 'HTTP/1.1 200 OK\n' + JSON.stringify(data, null, 2);
    if (n === 1041) {
      verdict.textContent = 'Your own order. Now change the number to 1042.';
      root.dataset.state = 'own';
    } else {
      verdict.textContent = 'That is a stranger’s order, name and address included. The app never checked who was asking. This is broken access control, the top risk on the OWASP Top 10.';
      root.dataset.state = 'leak';
    }
  }

  document.querySelectorAll('[data-idor]').forEach(function (root) {
    var input = root.querySelector('input[name=order]');
    var form = root.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      render(root, parseInt(input.value, 10));
    });
    input.addEventListener('input', function () {
      var n = parseInt(input.value, 10);
      if (!isNaN(n)) render(root, n);
    });
    render(root, 1041);
  });
})();
