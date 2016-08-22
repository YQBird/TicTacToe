var board = {
	block1: "",
	block2: "",
	block3: "",
	block4: "",
	block5: "",
	block6: "",
	block7: "",
	block8: "",
	block9: ""
}

var player1 = {
	name: "p1",
	symbol: "X",
	status: false,
}

var player2 = {
	name: "p2",
	symbol: "O",
	status: false,
}

var currentPlayer = {
	name: "default",
	symbol: "",
	status: true
}

function render(boardObj) {
	var bo = document.getElementById("board");
    var counter = 0;
	// traverse property in objet and check
	for (var prop in boardObj) {
		if(boardObj.hasOwnProperty(prop)) {
			var node = document.createElement("div");
			var textNode = document.createTextNode(boardObj[prop]);
			node.setAttribute("id", prop)
			node.appendChild(textNode);
			bo.appendChild(node);
			counter++;
			if (counter === 3) {
                var temp = document.createElement("br");
                bo.appendChild(temp);
                counter = 0;
			}
		}
	}
}

function refresh(boardObj) {
	var bo = document.getElementById("board").getElementsByTagName("div");
	for(var i = 0; i < bo.length; i++) {
		var pos = "block" + (i + 1);
		bo[i].innerText = boardObj[pos];
	}
}

function addBlockListener(boardObj) {
    for (var i = 1; i < 10; i++) {
        var str = "block" + i;
        var block = document.getElementById(str);
        block.addEventListener("click", function(e) {
	    	var pos = e.target.id;	    	
	    	if(!boardObj[pos]){
	    		boardObj[pos] = currentPlayer.symbol;
	    	    refresh(boardObj);
	    	    rst = checkResult(boardObj);
	    	    if (rst) {
                    if(rst === "X"){
                    	alert("player1 win");
                    	return;
                    } else{
                    	alert("player2 win");
                    	return;
                    }
	    	    }
	    	    if(checkDraw(boardObj)){
                    alert("this game is draw");
	    	    }
	    	}
	    	
	    })
    }
}

function addButtonListener() {
    document.getElementById("p1").addEventListener('click', function(e){
        currentPlayer = player1;
    });
    document.getElementById("p2").addEventListener('click', function(e){
        currentPlayer = player2;
    });
    document.getElementById("init").addEventListener('click',function(e){
        board = {
	        block1: "",
	        block2: "",
	        block3: "",
	        block4: "",
	        block5: "",
	        block6: "",
	        block7: "",
	        block8: "",
	        block9: ""
        } 
        var bo = document.getElementById("board");
        while(bo.hasChildNodes()){
        	bo.removeChild(bo.childNodes[0]);
        }
        render(board);
        addBlockListener(board)
    });
}

function checkResult(boardObj) {
    if(boardObj.block5){
    	if(boardObj.block5 === boardObj.block1 && boardObj.block5 === boardObj.block9){
    		return boardObj.block5;
    	}
    	if(boardObj.block5 === boardObj.block2 && boardObj.block5 === boardObj.block8){
    		return boardObj.block5;
    	}
    	if(boardObj.block5 === boardObj.block3 && boardObj.block5 === boardObj.block7){
    		return boardObj.block5;
    	}
    	if(boardObj.block5 === boardObj.block4 && boardObj.block5 === boardObj.block6){
    		return boardObj.block5;
    	}
    }
    if(boardObj.block2){
    	if(boardObj.block2 === boardObj.block1 && boardObj.block2 === boardObj.block3){
    		return boardObj.block2;
    	}
    }
    if(boardObj.block8){
    	if(boardObj.block8 === boardObj.block7 && boardObj.block8 === boardObj.block9){
    		return boardObj.block8;
    	}
    }
    if(boardObj.block4){
    	if(boardObj.block4 === boardObj.block1 && boardObj.block4 === boardObj.block7){
    		return boardObj.block4;
    	}
    }
    if(boardObj.block6){
    	if(boardObj.block6 === boardObj.block3 && boardObj.block6 === boardObj.block9){
    		return boardObj.block6;
    	}
    }

    return "";
    
}

function checkDraw(boardObj) {
	if(boardObj.block1 && boardObj.block2 && boardObj.block3 && boardObj.block4 
		&& boardObj.block5 && boardObj.block6 && boardObj.block7 && boardObj.block8
		&& boardObj.block9){
		return true;
	} else{
		return false;
	}

}

window.onload = function 	() {
	render(board);
    addBlockListener(board)
    addButtonListener();
};


