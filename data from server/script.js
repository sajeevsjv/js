fetch("http://127.0.0.1:4000/datas")
    .then(response => {
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        console.log("Data received:", data);
        
        let container = document.getElementById("container");
        let content ='';
        for(let i=0;i<30;i++){
            content = content + `
             <div class="box">
            <div class="img-div">
                <img src="${data[i].url}" alt="img">
            </div>
            <span class="title">${data[i].title}</span>
            <p class="album id">${"id : "+data[i].id}</p>
        </div>`

        }
        container.innerHTML = content;
          
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    });
