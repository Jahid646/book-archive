

searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('loading-spinner').style.display='block';  
    document.getElementById('no-result').style.display = 'none';
    document.getElementById('search-result').textContent = '';
    document.getElementById('total-result').textContent = '';
    

     
    // searchField empty error 
    if(searchText === '') {
        
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('loading-spinner').style.display='none';
    }
    else{
        
        
        const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data =>  displaySearchResult(data.docs, data.numFound));
    
    
    }
}



// dilsplay search result
const displaySearchResult = (docs, numFound) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(docs.length === 0){
        
        document.getElementById('no-result').style.display = 'block';
        document.getElementById('total-result').style.display = 'none'; 
    }

    
    else{

         // total result found 

    const div  = document.getElementById('total-result');
    div.innerHTML = `
        <div class="text-danger">
              <h5>Showing ${docs.length} Result of ${numFound}.</h5>
        </div>`;
    

    
    docs.forEach(doc => {
        const div  = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100 shadow">
                <img height="400px" src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Book Name: ${doc.title}.</h5>
                  <p class="card-text"><b>Author:</b> ${doc.author_name}.</p>
                  <p class="card-text"><b>First Publish Year:</b> ${doc.first_publish_year}.</p>
                  <p class="card-text"><b>Publisher:</b> ${doc.publisher}.</p>
            </div>`;
        searchResult.appendChild(div);
        
    })

    

    }
   document.getElementById('loading-spinner').style.display='none';
  
   
}