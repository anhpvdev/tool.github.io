function addimg(){
    var img = document.getElementById("img").value
    var up = document.getElementById("img-raw");
    var up_done = document.getElementById('img-raw__done')
    up.src = img;
    // up_done.src = img;

}

function addimgnew(){
    let image = document.getElementById('img-raw').src
    let canvas = document.getElementById('canvas-img').src
    let listimg = localStorage.getItem("list-img") ? JSON.parse(localStorage.getItem("list-img")) : []
    listimg.push({
        raw: image,
        trans: canvas
    })
    localStorage.setItem("list-img", JSON.stringify(listimg))
    renderimg()
    }

function renderimg(){
    let listimg = localStorage.getItem("list-img") ? JSON.parse(localStorage.getItem("list-img")) : []
    let img=[]
    listimg.map((value)=>{
        img +=`
        <div class="img-raw">
            <div class="add-img-raw">
                <img id="img-raw__done" src="${value.raw}" alt="">
            </div>
            <img id="canvas-img" src="${value.trans}" alt="">
        </div>`
    })
    document.getElementById("list").innerHTML = img
}

function reload(){
    location.reload();
}

