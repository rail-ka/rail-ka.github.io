$("document").ready(function(){$("#send").click(function(){var n=$("#name").val(),e=$("#number").val(),a=$("#text").val(),t=2;return $.ajax({type:"POST",url:"sendorder.php",data:"name="+n+"&number="+e+"&text="+a+"&button="+t,success:function(n){inst.close()}}),$("#Modal").modal("hide"),$("#Modal2").modal("show"),!1;return!1})}),jQuery(function($){$("#number").mask("+7 (999) 999-99-99")});