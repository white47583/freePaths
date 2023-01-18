netlifyIdentity.on('init', user => console.log('init', user));
netlifyIdentity.on('login', user => console.log('login', user));
netlifyIdentity.on('logout', () => console.log('Logged out'));
netlifyIdentity.on('error', err => console.error('Error', err));
netlifyIdentity.on('open', () => console.log('Widget opened'));
netlifyIdentity.on('close', () => console.log('Widget closed'));
setTimeout(function() {
    const user = netlifyIdentity.currentUser();
    if (user==null) {
        goToPage('../error/error.html');
    }
    console.log(user);    
},20)

function openModal() {
    netlifyIdentity.open();
}
function goToPage(page) {
    window.location = page
}