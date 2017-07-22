	
var p=new Array();
var i=1,count=0,r,l=0;
var text,points=0,clicks=0,q=0,z;
var t=0;

$(document).ready(function(){


$(".a,.c,.d,.f,.p,.z,.j,.m").click(function(){
	
$(this).animate({
               height: '0px',
              border:'1px solid blue',			  
	          transition:'0.3s'
	         
});


});	

myVar=setInterval(function(){
    t++;
	if(t<61)
    { if(t%60==0)
		{q=1;}
	
		document.getElementById("time").innerHTML = t+"s";
		r=t;}
    if(t>=61)
	{ t=t-60*q;
      z=60*q;
      if(t%60==0)
		{q++;}
		document.getElementById("time").innerHTML =q+"min"+t+"s";
	  r=t;	
	  t=t+z;	}	
	    

    $("#timeback").animate({
			
		width: 1.61*r+"%"
		
	}); 
	
}, 1000);
	


});

function select(obj){
	
	
p[i]= obj.getAttribute('class');	


 setTimeout(function(){

clicks++;
  $('#clicks').html("clicks"+":"+""+clicks);
  
 


if(i!=1)
{
	
	if(p[i-1]==p[i])
   	
	{  

		
       $('.'+p[i]).removeClass(p[i]).addClass("checked");
     
       $(".checked").css('height','110px');
	 
	 $(".checked").prop("onclick",null).off('click');
	 text="Marked";
	 $(".checked").html(text);
       i=0; 
	  points++;
	  $('#points').html("points"+":"+" "+points);
   
       count++;
	   if(count==8)
	   {alert("yes I know you can do it. anyway WELLDONE!!!");
         clearInterval(myVar);
		 $("#title").css('color','white');
		 $("#title").html("YOU HAVE COMPLETED THE GAME IN  "+q+"min"+t+"s "+"WELLDONE");
		  }
	  }
	
	if(p[i-1]!=p[i])
		
	{   
     $("."+p[i-1]).css('height','110px');             
   
     $("."+p[i]).css('height','110px');
       
       i=0;     
	  
   //  document.write(p[i-1]);	  
	  }
	
 
	
	
}	
	
i++;		
	
}, 550); 



  
}

function rotate(){
	
$("#square").animate({
	  borderRadius:'100px',
	 rotate: '90deg'
	
	
},1000);	
	
	
	
	
	
};

