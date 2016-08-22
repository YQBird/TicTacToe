function render(boardObj) {
	var bo = document.getElementById("board");
    var counter = 0;
	// traverse property in objet and check
	for (var prop in boardObj) {
		if(boardObj.hasOwnProperty(prop)) {
			var node = document.createElement("div");
			var textNode = document.createTextNode(boardObj[prop]);
			node.appendChild(textNode);
			bo.appendChild(node);
			counter++;
			if (counter === 3) {
                var temp = document.createElement("br");
                bo.appendChild(temp);
			}
		}
	}
}