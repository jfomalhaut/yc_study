var itemList = [];
var addBtn = document.getElementById('add');
addBtn.addEventListener("click",checkList);

function checkList(){
    var item = document.getElementById('item').value; 
    var checkList = itemList.slice(0);
    var checker = false;

    if(checkList.length == 0){
        if(item != ""){
            console.log("item : "+item+ " -->처음 담김"); //1번콘솔
            addList();
        }
    }

    if(item != ""){
        for(var i=0;i<checkList.length;i++){
            if(item == checkList[i]){
                console.log("item : "+item+" ,checkList["+i+"]: "+checkList[i]); //2번콘솔
                checker = true;
                console.log("이미 담겨 있습니다.");
                document.getElementById('item').value = "";
                document.getElementById('item').focus();

            }else{
                checker = false;
            }
        }
    }
    
    if(checker == false){
        addList();
    }
    showList();
}

function addList(){
    // console.log("addList 호출 4번 콘솔"); //4번 콘솔
    var item = document.getElementById('item').value;  
    if(item !=""){
        itemList.push(item);
        document.getElementById('item').value = "";
        document.getElementById('item').focus();
    }
    showList();
}

function showList(){
    var list = "<ul>";
    for(var i=0;i<itemList.length;i++){
        list +="<li>"+itemList[i]+"<span class='close' id = "+i+">X</span></li>";
    }
    list += "</ul>";
    document.getElementById('itemList').innerHTML = list;

    var remove = document.querySelectorAll(".close");
    for(var i=0;i<remove.length;i++){
        remove[i].addEventListener("click", removeList);
    }
}

function removeList(){
   var id = this.getAttribute("id");
   itemList.splice(id,1);
   showList();
}