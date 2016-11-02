var navli = $('.navli');
var navphone = $('.nav-phone');
// 顶部导航菜单ajax请求获取数据。
$.ajax({
	type:"get",
	url:"../php/code/index.php",
	async:true,
	success: function(obj){
		 var my = JSON.parse(obj);
		 var small = my.splice(6);
		 var red = my.splice(-6)
		 // console.log(red);
		 createnav(red,navli[0]);
		 createnav(small,navli[1]);
	}
})
omo(navphone[0],navli[0]);
omo(navphone[1],navli[1]);


var listli = $('.side-list-myli');
var listdiv = $('.side-list-li');
//右侧导航菜单ajax请求获取数据
$.ajax({
	type:"get",
	url:"../php/code/index2.php",
	async:true,
	success: function(obj){
		 var my = JSON.parse(obj);
		 var small = my.splice(0,6);
		 var red = my.splice(0,6);
		 var zuan = my.splice(0,3);
		 var tong = my.splice(0,4);
		 var live = my.splice(0,1);
		 
		 createSideli(small,listdiv[0])
		 createSideli(red,listdiv[1])
		 createSideli(zuan,listdiv[2])
		 createSideli(tong,listdiv[3])
		 createSideli(live,listdiv[4])
	}
})
omo(listli[0],listdiv[0]);
omo(listli[1],listdiv[1]);
omo(listli[2],listdiv[2]);
omo(listli[3],listdiv[3]);
omo(listli[4],listdiv[4]);


// 轮播图
var mySwiper = new Swiper('.swiper-container', {
		loop : true,    //循环轮播
		autoplay : 5000,   //轮播
		autoplayDisableOnInteraction : false,
		effect : 'fade',
		pagination : '.swiper-pagination',
		paginationClickable :true,
		autoHeight:true,
})


// 获取明星产品数据库
var starli = $('.star-goods-li');
$.ajax({
	type:"get",
	url:"../php/code/star.php",
	async:true,
	success: function(obj){
		 var my = JSON.parse(obj);
		 star(my,starli)
		 
	}
})

//获取精选配件数据库
var partsl= $('.selection-parts-left');
var partsli = $('.selection-parts-li');
$.ajax({
	type:"get",
	url:"../php/code/part.php",
	async:true,
	success: function(obj){
		 var my = JSON.parse(obj);
		 console.log(my[0].part_img);
		 partsl[0].style.background = "url(img/"+my[0].part_img+")";
		 parts(my,partsli);
	}
})


//获取推荐套餐数据库
var etuilli = $('.etui-left-li')
var etuirli = $('.etui-right-li')
$.ajax({
	type:"get",
	url:"../php/code/combo.php",
	async:true,
	success: function(obj){
		 var my = JSON.parse(obj);
		 console.log(my);
		 etuilli[0].style.background = "url(img/"+my[0].combo_img+")";
		 etuilli[1].style.background = "url(img/"+my[1].combo_img+")";
		 combo(my,etuirli);
	}
})





//获取为你推荐数据库
var recoml= $('.recommend-big');
var recomli = $('.recommend-li');
$.ajax({
	type:"get",
	url:"../php/code/recom.php",
	async:true,
	success: function(obj){
		 var my = JSON.parse(obj);
		 // console.log(my);
		 recoml[0].style.background = "url(img/"+my[0].recom_img+")";
		 recom(my,recomli);
	}
})

//内容部分数据库
var contentli = $('.website-content-li');
$.ajax({
	type:"get",
	url:"../php/code/content.php",
	async:true,
	success: function(obj){
		 var my = JSON.parse(obj);
		 content(my,contentli);
	}
})

























