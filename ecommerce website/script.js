let req = new XMLHttpRequest;
console.log(req);

req.open("get", "https://fakestoreapi.com/products");
function loaddata() {
    req.send();
    req.onreadystatechange = function () {
        console.log("readystate :", req.readyState);
        if (req.readyState === 4) {
            console.log("status:", req.status);
            let response = req.response;
            let result = JSON.parse(response);
            console.log(result);
            let div = document.getElementById("div")
            let datas = '';
            for(let i=0;i<result.length;i++){
                datas = datas + `
                <div class="rounded position-relative fruite-item h-100">
                            <div class="fruite-img">
                                <img src=${result[i].image} class="img-fluid w-100 rounded-top image" alt="">
                            </div>
                            <div class="category text-white bg-secondary px-3 py-1 rounded position-absolute"
                                style="top: 10px; left: 10px;">Fruits</div>
                            <div class="p-3 border border-secondary border-top-0 rounded-bottom">
                                <h4 class="title">${result[i].title}</h4>
                                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                    eiusmod te incididunt</p>
                                <div class="d-flex justify-content-between  flex-lg-wrap">
                                    <span class="price text-dark fs-5 fw-bold mb-0">$4.99 / kg</span>
                                    <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i
                                            class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>`
            }
            div.innerHTML = datas;
        }


    }

}