async function getAllprodoct(){
   var allDetails= await fetch('https://fakestoreapi.com/products',{method:'GET'});
   var data=await allDetails.json();
   console.log(data);
   var prodoct=document.getElementById('product-card');
   var prod='';
   for(var s of data){
    prod=prod+"<div class='product-container'>"+'<img class="product-image" src="'+s.image+'" />'+
             "<div class='category'>"+s.category+"</div>"+
             "<div class='price'>"+s.price+"</div>"+
             "<div class='rating-count'>"+s.rating.count+"</div>"+
             "<div class='rating-rate'>"+s.rating.rate+"</div>"+
             "<div class='title'>"+s.title+"</div>"+
             "<div class='description'>"+s.description+"</div>"+
        "</div>"
   }
   prodoct.innerHTML=prod;
}

getAllprodoct()