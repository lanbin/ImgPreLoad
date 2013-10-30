var imgPreLoad = function(WH, imgObj){
	var tw, th;

	if(WH instanceof Array) {
		tw = WH[0];
		th = WH[1];
	}else if(WH instanceof Object) {
		tw = WH.width;
		th = WH.height;
	}else if(!isNaN(WH)) {
		tw = th = WH;
	}

	var img = new Image();
	img.src = imgObj.attr("origin_src");

	img.onload = function(){
		var hRatio;
	    var wRatio;
	    var Ratio = 1;
	    var w = img.width;
	    var h = img.height;
	    wRatio = tw / w;
	    hRatio = th / h;
	    if (tw == 0 && th == 0) {
	        Ratio = 1;
	    } else if (tw == 0) { //
	        if (hRatio < 1) Ratio = hRatio;
	    } else if (th == 0) {
	        if (wRatio < 1) Ratio = wRatio;
	    } else if (wRatio < 1 || hRatio < 1) {
	        Ratio = (wRatio <= hRatio ? wRatio : hRatio);
	    }
	    if (Ratio < 1) {
	        w = w * Ratio;
	        h = h * Ratio;
	    }

	    imgObj.height(h);
	    imgObj.width(w);

	     if (tw/th > w/h) {
	        var margin = (tw - w) / 2;
	    	imgObj.css({"marginLeft": margin + "px"});

	    }else {
	        var margin=(th-h)/2;  
	    	imgObj.css({"marginTop": margin + "px"});
	    }

	    imgObj.attr("src", imgObj.attr("origin_src")).show();

	    img = img.onload = null;
	};
};