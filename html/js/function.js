// nav中创建一个下拉内容函数
function createnav(arr,div){
	var myul = $('<ul/>');
	$(div).append(myul);
	for (var i = 0; i < arr.length; i++) {
	  	var myli = $('<li/>');
	  	var mya = $('<a/>');
	  	var myimg = $('<img/>');
	  	myimg[0].src = "img/"+ arr[i].goods_img;
	  	var myp = $('<p/>');
	  	myp.text(arr[i].goods_name);
	  	var myspan = $('<span/>');
	  	myspan.text('￥'+arr[i].goods_price);
	  	myul.append(myli);
	  	myli.append(mya);
	  	mya.append(myimg);
	  	mya.append(myp);
	  	mya.append(myspan);
	  }  
}

//右侧边栏创建一个目录
function createSideli(arr,div){
	var mydiv = $('<div/>');
	$(div).append(mydiv);
	for (var i = 0; i < arr.length; i++) {
		var sdiv = $('<div/>');
		sdiv.addClass('side-list-sdiv')
		var mya = $('<a/>');
		var myimg = $('<img/>')
		myimg[0].src = "img/"+ arr[i].goods_img;
		var myspan = $('<span/>')
		myspan.text(arr[i].goods_name);
		mydiv.append(sdiv);
		sdiv.append(mya);
		mya.append(myimg);
		mya.append(myspan);
	}

}


// 移入移出函数
function omo(a,b){	
	a.onmouseover = function(){
		b.style.display = 'block';
	}
	a.onmouseout = function(){
		b.style.display = 'none';
	}
}

// star内容函数
function star(arr,div){
	for (var i = 0; i < arr.length; i++) {
		var mya = $('<a/>');
		var myimg = $('<img/>')
		var myh4 = $('<h4/>')
		var myp = $('<p/>')
		var myspan = $('<span/>')
		myimg[0].src = "img/"+ arr[i].star_img;
		myh4.text(arr[i].star_name)
		myp.text(arr[i].star_title)
		myspan.text('￥'+arr[i].star_price);
		$(div[i]).append(mya);
		mya.append(myimg);
		mya.append(myh4);
		mya.append(myp);
		mya.append(myspan);
	}
}
		
//精选配件内容右侧列表
function parts(arr,div){
	for (var i = 1; i < arr.length; i++) {
		var mya = $('<a/>');
		var myimg = $('<img/>')
		var myh4 = $('<h4/>')
		var myspan = $('<span/>')
		myimg[0].src = "img/"+ arr[i].part_img;
		myh4.text(arr[i].part_name)
		myspan.text(arr[i].part_price);
		$(div[i-1]).append(mya);
		mya.append(myimg);
		mya.append(myh4);
		mya.append(myspan);
	}
}
	

//推荐套餐右侧列表
function combo(arr,div){
	for (var i = 2; i < arr.length; i++) {
		var mya = $('<a/>');
		var myimg = $('<img/>')
		var myh4 = $('<h4/>')
		var myp = $('<p/>')
		var myspan = $('<span/>')
		myimg[0].src = "img/"+ arr[i].combo_img;
		myh4.text(arr[i].combo_name)
		myp.text(arr[i].property)
		myspan.text(arr[i].combo_price);
		$(div[i-2]).append(mya);
		mya.append(myimg);
		mya.append(myh4);
		mya.append(myp);
		mya.append(myspan);
	}
}


//为你推荐右侧列表
function recom(arr,div){
	for (var i = 1; i < arr.length; i++) {
		var mya = $('<a/>');
		var myimg = $('<img/>')
		var myh4 = $('<h4/>')
		var myp = $('<p/>')
		var myspan = $('<span/>')
		myimg[0].src = "img/"+ arr[i].recom_img;
		myh4.text(arr[i].recom_name)
		myp.text(arr[i].property)
		myspan.text(arr[i].recommend);
		$(div[i-1]).append(mya);
		mya.append(myimg);
		mya.append(myh4);
		mya.append(myp);
		mya.append(myspan);
	}
}

//内容函数
function content(arr,div){
	for (var i = 0; i < arr.length; i++) {
		var mya = $('<a/>')
		var myimg = $('<img/>')
		var myh3 = $('<h3/>')
		var myp = $('<p/>')
		myimg[0].src = "img/"+ arr[i].con_img;
		myh3.text(arr[i].con_title)
		myp.text(arr[i].con_con)
		$(div[i]).append(mya);
		mya.append(myimg);
		mya.append(myh3);
		mya.append(myp);
		
	}
}




















