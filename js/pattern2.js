var seed;
var c=document.getElementById("main");
var ctx=c.getContext("2d");
var ranval = [];
for (var i = 0; i < 100; i++) {
	ranval[i] = [];
	for (var j = 0; j < 100; j++) {
		ranval[i][j] = Math.floor((Math.random() * 255) + 0);
		colstring = "rgb("+ranval[i][j]+","+ranval[i][j]+","+ranval[i][j]+")";
		// alert(colstring);
		ctx.fillStyle = colstring;
		ctx.fillRect(4*j,4*i,4,4);
	}
}

document.getElementById("data-dump").innerHTML= JSON.stringify(ranval);
