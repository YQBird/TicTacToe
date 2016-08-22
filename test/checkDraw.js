function checkDraw(boardObj) {
	if(boardObj.block1 && boardObj.block2 && boardObj.block3 && boardObj.block4 
		&& boardObj.block5 && boardObj.block6 && boardObj.block7 && boardObj.block8
		&& boardObj.block9){
		return true;
	} else{
		return false;
	}

}