//book class : represent a book
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI class : handle UI task 
class UI{
    static displayBooks() {
        const books = Store.getBook();
        

        books.forEach((book)=>UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('.book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();

        }
    }

    static showAlert(massage,className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(massage));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        //vanish in 3 seconds
        setTimeout(()=> document.querySelector('.alert').remove(),
        3000)
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
// storage class : handle storage
class Store{
    static getBook(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;

    }
    static addBook(book){
        const books = Store.getBook();

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));

    }
    static removeBook(isbn){
        const books = Store.getBook();

        books.forEach((book,index)=>{
            if(book.isbn === isbn){
                books.splice(index, 1);
            }

        });

        localStorage.setItem('books',JSON.stringify(books));

    }

}

// evant : display book
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// event : add a book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    
    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Validate
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert('Please fill in the all fields', 'danger');
    }
    else{
          // instatiate book 
    const book = new Book(title,author,isbn);
    
    // add book to list
    UI.addBookToList(book);

    //add book to store
    Store.addBook(book);


    //success massage
    UI.showAlert('Book addes', 'success')
    // clear field 
    UI.clearFields();
    }
  
})
//event remove a book
document.querySelector('.book-list').addEventListener('click',(e)=>{
    // remove book from UI
    UI.deleteBook(e.target)

    //remove book from storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
    // remove massage 
    UI.showAlert('Book deleted', 'primary')
})
