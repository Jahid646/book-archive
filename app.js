searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
     
    if(searchText === '') {
        
        document.getElementById('error-message').style.display = 'block';
    }
    else{
        const url = `http://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data =>console.log(data));
    }
}
