// ==============================================
//  script.js
//  src/main/resources/static/script.js
// ==============================================

function togglePwd() {
    var input = document.getElementById('password');
    var open = document.getElementById('eyeOpen');
    var off = document.getElementById('eyeOff');
    var isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    open.style.display = isHidden ? 'none' : '';
    off.style.display = isHidden ? '' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    var btn = document.getElementById('submitBtn');
    var text = document.getElementById('btnText');
    var loader = document.getElementById('btnLoader');
    var arrow = document.getElementById('btnArrow');

    if (form) {
        form.addEventListener('submit', function() {
            if (text) text.textContent = 'Signing in';
            if (loader) loader.style.display = '';
            if (arrow) arrow.style.display = 'none';
            if (btn) btn.disabled = true;
        });
    }

    var usernameEl = document.getElementById('username');
    var passwordEl = document.getElementById('password');
    if (usernameEl && !usernameEl.value) {
        usernameEl.focus();
    } else if (passwordEl) {
        passwordEl.focus();
    }
});
