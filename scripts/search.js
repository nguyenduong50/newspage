'use strict';

//=============Varriable=============//

const inputQuery = document.getElementById("input-query");

const btnSubmit = document.getElementById("btn-submit");

const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

const newsContainer = document.getElementById("news-container");
const pageNum = document.getElementById("page-num");

//Post
let page = 1;

//=============Function=============//

//Render list post
function renderListPost(data){
    newsContainer.innerHTML = "";

    for(let i = 0; i <= currentUser.pageSize - 1; i++){
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
                                    ${data[i].author}
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

async function getAPIDataSearch(page){
    let url = 'https://newsapi.org/v2/everything?' +
                'q=' + inputQuery.value + 
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
    renderListPost(data.articles);
    console.log(page,data.totalResults/currentUser.pageSize);
    
    //Return total page 
    if(data.totalResults % ListUser.pageSize === 0){
        return Math.floor(data.totalResults/currentUser.pageSize) 
    }
    else{
        return Math.floor(data.totalResults/currentUser.pageSize) + 1;
    }
}

//render list post with page
function renderListPostPage(pageNum){
    page = pageNum;
    getAPIDataSearch(page);
}

//render paginate
function renderPaginate(pagiNum){
    for(let i = 1; i <= pagiNum; i++){
        pageNum.innerHTML += `<a class="page-link" href="#" onclick="renderListPostPage(${i})">${i}</a>`;
    }
}

//=============Event=============//

//Button Search
btnSubmit.addEventListener('click', function(){
    //Validate
    if(inputQuery.value === ''){
        alert('Input search missing');
        return;
    }

    getAPIDataSearch(page)
    .then(totalPages => {
        renderPaginate(totalPages);
    });
})

//Button Next page
btnNext.addEventListener('click', function(){
    page += 1;
    getAPIDataSearch(page);
})

//Button Prev page
btnPrev.addEventListener('click', function(){
    page -= 1;
    getAPIDataSearch(page);
})

//=============Default program=============//

validateLogin();

//Search cat tabby



