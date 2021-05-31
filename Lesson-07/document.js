function st(){
	var eleme = document.getElementById('try');
	eleme.innerHTML = 'I have ';
	eleme.style.cssText=`
		width: 100px;
	    padding: 15px;
		border: 1px solid #d6e9c6;
		border-radius: 4px;
		color: #3c763d;
		background-color: #dff0d8;
	  `;
	
}
function second(){
	var elements = document.querySelectorAll('ul>li:first-child');
	for(var i=0; i< elements.length; i++){
		var currElements = elements[i];
		console.log(currElements.innerHTML);
		currElements.innerHTML ='ha ha ha';
		currElements.style.cssText=`
				width: 100px;
			    padding: 15px;
				border: 1px solid #d6e9c6;
				border-radius: 4px;
				color: #3c763d;
				background-color: #dff0d8;
			  `;
	}
	
}
function third(){
	var elements = document.querySelectorAll('ul>li:last-child');
	for(var i=0; i< elements.length; i++){
		var currElements = elements[i];
		currElements.style.cssText=`
			width: 100px;
		    padding: 15px;
			border: 1px solid #d6e9c6;
			border-radius: 4px;
			color: #3c763d;
			background-color: #dff0d8;
		  `;
		console.log(currElements.innerHTML);
		currElements.innerHTML ='ho ho ho';
	}
}

function ddd(){
	var elements = document.getElementById('second');
	console.log( elements.innerHTML);
	 elements.innerHTML ='hi hi hi';
	 elements.style.cssText=`
			width: 100px;
		    padding: 15px;
			border: 1px solid #d6e9c6;
			border-radius: 4px;
			color: #3c763d;
			background-color: #dff0d8;
		  `;
		
}
	