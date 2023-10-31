'use strict';

//=============Varriable=============//

//Element
const newsContainer = document.getElementById("news-container");
const pageNum = document.getElementById("page-num");

const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

//Post
let page = 1;

//=============Function=============//

//Render list post
function renderListPost(data, perPage){
    newsContainer.innerHTML = "";

    for(let i = 0; i <= perPage - 1; i++){
        newsContainer.insertAdjacentHTML(
            "afterbegin", 
            `<div class="card flex-row flex-wrap">
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${data[i].urlToImage}" class="card-img" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">
                                    ${data[i].title}
                                </h5>
                                <p class="card-text">
                                    ${data[i].description}
                                </p>
                                <a href="${data[i].url}" class="btn btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        )
    }
}

//Get API Post
async function getAPIPost(page){
    let url = 'https://newsapi.org/v2/top-headlines?country=us'+ 
                '&category=' + currentUser.category +
                '&pageSize=' + currentUser.pageSize +
                '&page=' + page +
                '&apiKey=48934b9ff2714b2ba8147febee0b3af1';

    let response = await fetch(url);
    let data = await response.json();
    
    //Locked Button Next
    if(page >= data.totalResults/currentUser.pageSize){
        btnNext.disabled = true; 
        btnNext.style.display = 'none';     
    }
    else{
        btnNext.disabled = false; 
        btnNext.style.display = 'block'; 
    }

    //Locked Button Prev
    if(page <= 1){
        btnPrev.disabled = true; 
        btnPrev.style.display = 'none';               
    }
    else{
        btnPrev.disabled = false; 
        btnPrev.style.display = 'block'; 
    }

    //Render list post
    renderListPost(data.articles, data.articles.length);
    
    //Return total page 
    if(data.totalResults % currentUser.pageSize === 0){       
        return Math.floor(data.totalResults/currentUser.pageSize) 
    }
    else{
        return Math.floor(data.totalResults/currentUser.pageSize) + 1;
    }
        
}

//Render list post with page
function renderListPostPage(pageNumber){
    page = pageNumber;
    getAPIPost(page)
    .then(totalPages => {
        renderPaginate(totalPages);
    });
}

//Render paginate
function renderPaginate(pagiNum){
    //Reset paginate
    pageNum.innerHTML = '';
    
    //render paginate
    for(let i = 1; i <= pagiNum; i++){
        pageNum.innerHTML += `<a class="page-link" href="#" onclick="renderListPostPage(${i})">${i}</a>`;
    }

    //style paginate
    const pageLink = document.querySelectorAll("a.page-link");

    for(let i = 0; i <= pageLink.length - 1; i++){
        if(i + 1 === page){
            pageLink[i].classList.add("active");
        }
        else{
            pageLink[i].classList.remove("active");
        }
    }
}

//=============Event=============//

//Button Next page
btnNext.addEventListener('click', function(){
    page += 1;
    getAPIPost(page)
    .then(totalPages => {
        renderPaginate(totalPages);
    });
})

//Button Prev page
btnPrev.addEventListener('click', function(){
    page -= 1;
    getAPIPost(page)
    .then(totalPages => {
        renderPaginate(totalPages);
    });
})

//=============Default program=============//

validateLogin();

getAPIPost(page)
.then(totalPages => {
    renderPaginate(totalPages);
});
