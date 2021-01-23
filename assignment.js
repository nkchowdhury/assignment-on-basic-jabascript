// kilometerToMeter
function kilometerToMeter(kilometer){
         var meter = kilometer*1000;
         return meter;
            
  
}

var newMeter = kilometerToMeter(2);
    console.log(newMeter);


      

// budgetCalculator
function budgetCalculator(num1, num2, num3){

         var watchPrice = num1*50;
         var mobilePrice = num2*100;
         var laptopPrice = num3*500;

         var totalPrice =watchPrice + mobilePrice + laptopPrice ;

         return totalPrice;
       

}

 var  totalPrice = budgetCalculator(10,5,2);

      console.log(totalPrice);



// hotelCost

function hotelCost(stayDay){

  var cost = 0;
  if(stayDay <= 10 ){
      
      hotelCost = stayDay * 100;
  
  }else if(stayDay <= 20 ){
  
      var tenDay = 10*100;
      var remaining = stayDay-10;
      var twentyDay = remaining * 80;
      hotelCost = tenDay+twentyDay;
  }else{
      var tenDay = 10*100;
      var twentyDay = 10*80;
      var remaining = stayDay-20;
      var otherDay = remaining*50;
  
      hotelCost = tenDay + twentyDay + otherDay;
      
  }
      return hotelCost;
  }
  
  var cost = hotelCost( 24);
  
  console.log(cost);
  




//megaFriend
function megaFriend(){
    var friendName = ['Arif','Mozammel','nazmul' ];
  
  var lgth = 0;
  var longest;
  
  for (var i = 0; i < friendName.length; i++) {
      
    if (friendName[i].length > lgth) {
      var lgth = friendName[i].length;
      longest = friendName[i];
    }
  }
  
  return longest;

}


var largeName = megaFriend();
console.log(largeName);

