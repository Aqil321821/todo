const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};

const filterTodos = term => {

  // seracj filter add karna ha is code me
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // jab value field me jaye to us term ki base pe list filter out kren
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};

// naya list add krne ka function

addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }

});

// li ko delete krna use of .remove in DOM 
list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }

});

// Search perform krny ka function trim bhi krdia ta k empty string avoid ho saky
// input value ko lower case me krdia ta k match ho sky
search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);

});
