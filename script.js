    $(document).ready(function(){
      for (var i = 9; i < 18; i++) {
        $("#"+i).val(localStorage.getItem("textItem"+i));
        }
      })
      
      $(document).ready(function(){
      //  $(".text1").val(localStorage.getItem("textItem1"));
        var timeNow = moment().format('MMMM Do YYYY');
        $("#currentDay").append(timeNow)
      })

      for (var i = 9; i < 18; i++) {
        var time= (moment().format('H'));
        if((i)< time){
          $("#"+i).css("background-color", "gray");
        } else if((i)> time) {
          $("#"+i).css("background-color", "green")
        } else {
          $("#"+i).css("background-color", "red")
        }
      }

      $(document).ready(function(){ 
       $(".save").on("click", function(){
        var text = $(this).prev(".text").val()
        var number= $(this).prev(".text").attr("id")
         localStorage.setItem(("textItem"+ number), text);
         $(this).prev("#"+number).val(localStorage.getItem("textItem"+ number));
      })})