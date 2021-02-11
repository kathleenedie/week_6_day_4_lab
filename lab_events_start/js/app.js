document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);


})

const handleFormSubmit = function(event){
  event.preventDefault();
  console.log(event.target.category.value);
  const newListItem = document.createElement('li');
  newListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
  
  const list = document.querySelector('ul');
  list.appendChild(newListItem);

  document.getElementById('new-item-form').reset();

}


