var seed = Math.floor((Math.random() * 255) + 0);
	var c=document.getElementById("main");
	var ctx=c.getContext("2d");
	var ranval = [];
	for (var i = 0; i < 100; i++) {
		ranval[i] = [];
		for (var j = 0; j < 100; j++) {
			// if(j=0){
			// 	ranval[i] = [];
			// }
			ranval[i][j] = -1;
			// colstring = "rgb("+ranval[i][j]+","+ranval[i][j]+","+ranval[i][j]+")";
			// ctx.fillStyle = colstring;
			// ctx.fillRect(4*j,4*i,4,4);

			// if(i == 0){
			// 	if(seed < 10){
			// 		seed = Math.floor((Math.random() * 255) + 0);
			// 	}else if(seed > 245){
			// 		seed = Math.floor((Math.random() * 255) + 0);
			// 	}
			// 	// alert(seed);
			// 	seed = Math.floor((Math.random() * (seed+10)) + (seed-10));
			// }else if(i > 0){
			// 	if(seed < 10){
			// 		seed = Math.floor((Math.random() * 255) + 0);
			// 	}else if(seed > 245){
			// 		seed = Math.floor((Math.random() * 255) + 0);
			// 	}
			// 	seed = Math.floor((Math.random()*(seed)) + ranval[i-1][j]);
			// }
			// alert(colstring);
		}
	}
	cox = Math.floor((Math.random() * 99) + 0);
	coy = Math.floor((Math.random() * 99) + 0);
	ranval[coy][cox] = 255;
	var colo = ranval[coy][cox];
	colstring = "rgb("+colo+","+colo+","+colo+")";
	// alert(colstring);
	ctx.fillStyle = colstring;
	ctx.fillRect(4*cox,4*coy,4,4);

	var flag = 0;
	do{
		flag++;
		cox = Math.floor((Math.random() * 99) + 0);
		coy = Math.floor((Math.random() * 99) + 0);

		if (ranval[coy][cox] == -1){
			// var prox = [];
			// prox[0] = ranval[coy-1][cox] == -1 ? 0 : ranval[coy-1][cox];
			// prox[1] = ranval[coy-1][cox+1];
			// prox[2] = ranval[coy][cox+1];
			// prox[3] = ranval[coy+1][cox+1];
			// prox[4] = ranval[coy+1][cox];
			// prox[5] = ranval[coy+1][cox-1];
			// prox[6] = ranval[coy][cox-1];
			// prox[7] = ranval[coy-1][cox-1];

			var prox = 0;
			if (coy < 1) {
				if (cox < 1) {
					prox += ranval[coy][cox+1] == -1 ? 0 : ranval[coy][cox+1];
					prox += ranval[coy+1][cox+1] == -1 ? 0 : ranval[coy+1][cox+1];
					prox += ranval[coy+1][cox] == -1 ? 0 : ranval[coy+1][cox];
				}else if (cox > 98){
					prox += ranval[coy+1][cox] == -1 ? 0 : ranval[coy+1][cox];
					prox += ranval[coy+1][cox-1] == -1 ? 0 : ranval[coy+1][cox-1];
					prox += ranval[coy][cox-1] == -1 ? 0 : ranval[coy][cox-1];
				}else{
					prox += ranval[coy][cox+1] == -1 ? 0 : ranval[coy][cox+1];
					prox += ranval[coy+1][cox+1] == -1 ? 0 : ranval[coy+1][cox+1];
					prox += ranval[coy+1][cox] == -1 ? 0 : ranval[coy+1][cox];
					prox += ranval[coy+1][cox-1] == -1 ? 0 : ranval[coy+1][cox-1];
					prox += ranval[coy][cox-1] == -1 ? 0 : ranval[coy][cox-1];
				}
			}else if(coy > 98){
				if (cox < 1) {
					prox += ranval[coy-1][cox] == -1 ? 0 : ranval[coy-1][cox];
					prox += ranval[coy-1][cox+1] == -1 ? 0 : ranval[coy-1][cox+1];
					prox += ranval[coy][cox+1] == -1 ? 0 : ranval[coy][cox+1];
				}else if (cox > 98){
					prox += ranval[coy][cox-1] == -1 ? 0 : ranval[coy][cox-1];
					prox += ranval[coy-1][cox-1] == -1 ? 0 : ranval[coy-1][cox-1];
					prox += ranval[coy-1][cox] == -1 ? 0 : ranval[coy-1][cox];
				}else{
					prox += ranval[coy-1][cox] == -1 ? 0 : ranval[coy-1][cox];
					prox += ranval[coy-1][cox+1] == -1 ? 0 : ranval[coy-1][cox+1];
					prox += ranval[coy][cox+1] == -1 ? 0 : ranval[coy][cox+1];
					prox += ranval[coy][cox-1] == -1 ? 0 : ranval[coy][cox-1];
					prox += ranval[coy-1][cox-1] == -1 ? 0 : ranval[coy-1][cox-1];
				}
			}else{
				prox += ranval[coy-1][cox] == -1 ? 0 : ranval[coy-1][cox];
				prox += ranval[coy-1][cox+1] == -1 ? 0 : ranval[coy-1][cox+1];
				prox += ranval[coy][cox+1] == -1 ? 0 : ranval[coy][cox+1];
				prox += ranval[coy+1][cox+1] == -1 ? 0 : ranval[coy+1][cox+1];
				prox += ranval[coy+1][cox] == -1 ? 0 : ranval[coy+1][cox];
				prox += ranval[coy+1][cox-1] == -1 ? 0 : ranval[coy+1][cox-1];
				prox += ranval[coy][cox-1] == -1 ? 0 : ranval[coy][cox-1];
				prox += ranval[coy-1][cox-1] == -1 ? 0 : ranval[coy-1][cox-1];
			}
			// console.log("coy: "+coy+", cox: "+cox+", prox: "+prox);
			proxavg = parseInt(prox/8);
			// console.log("coy: "+coy+", cox: "+cox+", prox: "+prox+", proxavg: "+proxavg );
			if (proxavg == 0) {
				ranval[coy][cox] = 255;
			}else{
				ranval[coy][cox] = proxavg;
			}
			var colo = ranval[coy][cox];
			colstring = "rgb("+colo+","+colo+","+colo+")";
			// alert(colstring);
			ctx.fillStyle = colstring;
			ctx.fillRect(4*cox,4*coy,4,4);
			// alert(prox);
		}

		


	}while(flag < 40000)
	document.getElementById("data-dump").innerHTML= JSON.stringify(ranval);
	// alert(JSON.stringify(ranval));

	// ctx.fillStyle = "rgb(0,0,255)";
	// ctx.fillRect(10,10,10,10);
	// ctx.fillStyle = "rgb(200,128,64)";
	// ctx.fillRect(20,20,10,10);