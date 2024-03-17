document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var post = '<div class="post"><h2>' + name + '</h2><p>' + message + '</p></div>';
    document.getElementById('posts').innerHTML += post;
    document.getElementById('postForm').reset();
});
