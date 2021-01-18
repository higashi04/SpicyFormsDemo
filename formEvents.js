const form = document.querySelector('#form');
const commentsContainer = document.querySelector('#comments')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = form.elements.username;
    const comment = form.elements.comment.value;
    addComment(user, comment);
    form.elements.username.value = '';
    form.elements.comment.value = '';
})

const addComment = (user, comment) => {
    const newComment = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(user.value);
    newComment.append(bTag);
    newComment.append(`-${comment}`);
    commentsContainer.append(newComment);
}