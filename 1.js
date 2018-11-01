document.getElementById('r1').oninput = cssGenerator;

function cssGenerator(){
	// прямоугольник
	var div = document.getElementById('color');
	// получаю textarea
	var out = document.getElementById('out');
	// console.log(this.value);
	div.style.borderRadius = this.value + 'нм';
	// border-radius: 30px;
	out.innerHTML = this.value+'нм\n' ;
    if(this.value<=440){
        div.style.background= "purple";
    }
    else if(this.value >= 440 && this.value<=485){
        div.style.background= "blue";
    }
    else if(this.value >=485 && this.value<=500 ){
        div.style.background= "aqua";
    }
    else if(this.value>=500 && this.value<=565){
        div.style.background= "green";
    }
    else if(this.value>=565 && this.value<=590){
        div.style.background= "yellow";
    }
    else if(this.value>=590 && this.value<=625){
        div.style.background= "orange";
    }
    else if(this.value>=625 && this.value<=740){
        div.style.background= "red";
    }
	//out.innerHTML += 'Длина волны: '+this.value+'нм;' ;
}