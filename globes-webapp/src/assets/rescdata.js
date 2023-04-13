window.addEventListener(load, () => {
   $("#pickupLoc").on('keyup change', function(){
   if($(this).val() != ""){
      $("##pickupLocVal").text($(this).val());
      $(".#pickupLoc").show();
   }else{
      $(".#pickupLoc").hide();
   }
   });
   $("#age").on('blur', function(){
   if($(this).val() != ""){
      $("#ageVal").text($(this).val());
      $(".age").show();
   }else{
      $(".age").hide();
   }
   });
   $("#gender").on('change', function(){
   if($(this).val() != ""){
      $("#genderVal").text($("#gender option:selected").text());
      $(".gender").show();
   }else{
      $(".gender").hide();
   }
   });  
})