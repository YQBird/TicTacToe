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