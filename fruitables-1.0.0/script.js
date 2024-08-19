let req = new XMLHttpRequest();
console.log(req);


function loaddata() {
    req.open("get", "https://fakestoreapi.com/products");
    req.send();
    req.onreadystatechange = function () {
        console.log("readystate :", req.readyState);
        if (req.readyState === 4) {
            console.log("status:", req.status);
            let response = req.response;
            let result = JSON.parse(response);
            console.log(result);
            let tab1 = document.getElementById("tab1-data");
            let carousel = document.getElementById("carousel");
            let carousaldata = '';
            let datas = '';
            for(let i=0;i<result.length;i++){
                datas = datas + `
                <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="rounded position-relative fruite-item">
                                                <div class="fruite-img">
                                                    <img src="${result[i].image}" onclick = "handleclick(${result[i].id})"  class="img-fluid w-100 rounded-top image" alt="">
                                                </div>
                                                <div class="category text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style="top: 10px; left: 10px;">${result[i].category}</div>
                                                <div class="p-3 border border-secondary border-top-0 rounded-bottom">
                                                    <h4 class="title">${result[i].title.slice(0,12)+".."}</h4>
                                                    <p class="description">${result[i].description.slice(0,100)+".."}</p>
                                                    <div class="d-flex justify-content-between   flex-lg-wrap">
                                                        <p class="price text-dark fs-5 fw-bold mb-0">${result[i].price}$</p>
                                                        <a href="#"
                                                            class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                                class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                                                            cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`

           
            }
            tab1.innerHTML = datas;
            carousaldata = `
              <div id="carousel" class="carousel-item active ">
                                <img src=${result[1].image}
                                    class="img-fluid imageFirstcarosel w-100 h-100 bg-secondary rounded"
                                    alt="First slide">
                                <a href="#" class="btn px-4 py-2 text-white rounded title">${result[1].title.slice(0,7)}</a>
                            </div>
                            <div id="carousel2" class="carousel-item rounded">
                                <img src=${result[14].image} class="img-fluid imageFirstcarosel w-100 h-100 rounded"
                                    alt="Second slide">
                                <a href="#" class="btn px-4 py-2 text-white rounded title">${result[14].title.slice(0,7)}</a>
                            </div>`;
                            
            
            carousel.innerHTML = carousaldata;
        }


    }

}


function handleclick(id){
    console.log("id:",id);
    window.location.href = `viewpage.html?id=${id}`;
    return;

}

function loaddataa(){
    console.log("loading...")

    let location = window.location;
    console.log("location:",location);

    let querystring = location.search;
    console.log("querystring",querystring);

    let urlparams = new URLSearchParams(querystring);
    console.log("urlparams:",urlparams);

    let id = urlparams.get("id");
    console.log("id:",id);

    req.open("get", `https://fakestoreapi.com/products/${id}`);
    req.send();
    req.onreadystatechange = function () {
        console.log("readystate :", req.readyState);
        if (req.readyState === 4) {
            console.log("status:", req.status);
            let response = req.response;
            let result = JSON.parse(response);
            console.log("result",result);
            let viewitem = document.getElementById("viewitem");
            
            let datas = '';
           
                datas = `                                   
                 <div class="col-lg-6">
                                <div class="border rounded">
                                    <a href="#">
                                        <img src=${result.image} class="img-fluid photto rounded" alt="Image">
                                    </a>
                                </div>
                            </div>
                <div  class="col-lg-6">
                <h4 class="fw-bold mb-3">${result.title}</h4>
                                <p class="mb-3">Category: ${result.category}</p>
                                <h5 class="fw-bold mb-3">${result.price} $</h5>
                                <div class="d-flex mb-4">
                                    <i class="fa fa-star text-secondary"></i>
                                    <i class="fa fa-star text-secondary"></i>
                                    <i class="fa fa-star text-secondary"></i>
                                    <i class="fa fa-star text-secondary"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <p class="mb-4">${result.description}</p>
                                <div class="input-group quantity mb-5" style="width: 100px;">
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-minus rounded-circle bg-light border" >
                                            <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm text-center border-0" value="1">
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <a href="#" class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>`
            
            viewitem.innerHTML = datas;
        }


    }




}