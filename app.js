searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
     
    // searchField empty error 
    if(searchText === '') {
        
        document.getElementById('error-message').style.display = 'block';
    }
    else{
        const url = `http://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data =>  displaySearchResult(data.docs));
    }
}

// dilsplay search result
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(docs.length === 0){
        document.getElementById('error-message').style.display = 'block';
    }



    docs.forEach(doc => {
        const div  = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top img-fluid h-100" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Book Name: ${doc.title}</h5>
                  <p class="card-text">Author Name: ${doc.author_name}</p>
                  <p class="card-text">Publisher: ${doc.publisher}</p>
                  <p class="card-text">First Publish: ${doc.first_publish_year}</p>
            </div>`;
        searchResult.appendChild(div);
    })
}