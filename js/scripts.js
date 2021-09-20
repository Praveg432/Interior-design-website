function test(){

  var tabsNewAnim = $('#navbarSupportedContent');
  var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
  var activeItemNewAnim = tabsNewAnim.find('.active');
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    "top":itemPosNewAnimTop.top + "px", 
    "left":itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click","li",function(e){
    $('#navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
  });
}
$(document).ready(function(){
  setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
  setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
  setTimeout(function(){ test(); });
});

$(document).ready(function(){
    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    $(".modal").on("shown.bs.modal", alignModal);
    
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });   
});

$(document).ready(function(){
            $("#di-0,#di-0a").click(function(){
                    $(".di-main").css('background-image','url(imgs/dining0.png)');
            });
            $("#di-1,#di-1a").click(function(){
                    $(".di-main").css('background-image','url(imgs/dining1.png)');
            });
            $("#di-2,#di-2a").click(function(){
                    $(".di-main").css('background-image','url(imgs/dining2.png)');
            });
            $("#di-3,#di-3a").click(function(){
                    $(".di-main").css('background-image','url(imgs/dining3.png)');
            });
            $("#di-4,#di-4a").click(function(){
                    $(".di-main").css('background-image','url(imgs/dining4.png)');
            });
            $("#ki-0,#ki-0a").click(function(){
                    $(".ki-main").css('background-image','url(imgs/kitchen0.png)');
            });
            $("#ki-1,#ki-1a").click(function(){
                    $(".ki-main").css('background-image','url(imgs/kitchen1.png)');
            });
            $("#ki-2,#ki-2a").click(function(){
                    $(".ki-main").css('background-image','url(imgs/kitchen2.png)');
            });
            $("#ki-3,#ki-3a").click(function(){
                    $(".ki-main").css('background-image','url(imgs/kitchen3.png)');
            });
            $("#ki-4,#ki-4a").click(function(){
                    $(".ki-main").css('background-image','url(imgs/kitchen4.png)');
            });
            $("#oi-0,#oi-0a").click(function(){
                    $(".oi-main").css('background-image','url(imgs/office0.png)');
            });
            $("#oi-1,#oi-1a").click(function(){
                    $(".oi-main").css('background-image','url(imgs/office1.png)');
            });
            $("#oi-2,#oi-2a").click(function(){
                    $(".oi-main").css('background-image','url(imgs/office2.png)');
            });
            $("#oi-3,#oi-3a").click(function(){
                    $(".oi-main").css('background-image','url(imgs/office3.png)');
            });
            $("#oi-4,#oi-4a").click(function(){
                    $(".oi-main").css('background-image','url(imgs/office4.jpeg)');
            });
            $("#bi-0,#bi-0a").click(function(){
                    $(".bi-main").css('background-image','url(imgs/bedroom0.png)');
            });
            $("#bi-1,#bi-1a").click(function(){
                    $(".bi-main").css('background-image','url(imgs/bedroom1.png)');
            });
            $("#bi-2,#bi-2a").click(function(){
                    $(".bi-main").css('background-image','url(imgs/bedroom2.png)');
            });
            $("#bi-3,#bi-3a").click(function(){
                    $(".bi-main").css('background-image','url(imgs/bedroom3.png)');
            });
            $("#bi-4,#bi-4a").click(function(){
                    $(".bi-main").css('background-image','url(imgs/bedroom4.png)');
            });
            $("#si-0,#si-0a").click(function(){
                    $(".si-main").css('background-image','url(imgs/space0.png)');
            });
            $("#si-1,#si-1a").click(function(){
                    $(".si-main").css('background-image','url(imgs/space1.png)');
            });
            $("#si-2,#si-2a").click(function(){
                    $(".si-main").css('background-image','url(imgs/space2.png)');
            });
            $("#si-3,#si-3a").click(function(){
                    $(".si-main").css('background-image','url(imgs/space3.png)');
            });
            $("#si-4,#si-4a").click(function(){
                    $(".si-main").css('background-image','url(imgs/space4.png)');
            });
            $("#ri-0,#ri-0a").click(function(){
                    $(".ri-main").css('background-image','url(imgs/royal0.png)');
            });
            $("#ri-1,#ri-1a").click(function(){
                    $(".ri-main").css('background-image','url(imgs/royal1.png)');
            });
            $("#ri-2,#ri-2a").click(function(){
                    $(".ri-main").css('background-image','url(imgs/royal2.png)');
            });
            $("#ri-3,#ri-3a").click(function(){
                    $(".ri-main").css('background-image','url(imgs/royal3.png)');
            });
            $("#ri-4,#ri-4a").click(function(){
                    $(".ri-main").css('background-image','url(imgs/royal4.png)');
            });
            $(".close").click(function(){
                    $("#loginModal").modal('hide');
            });
            $(".close").click(function(){
                    $("#searchModal").modal('hide');
            });
            $(".close").click(function(){
                    $("#imgModal0").modal('hide');
            });
            $(".close").click(function(){
                    $("#imgModal1").modal('hide');
            });
            $(".close").click(function(){
                    $("#imgModal2").modal('hide');
            });
            $(".close").click(function(){
                    $("#imgModal3").modal('hide');
            });
            $(".close").click(function(){
                    $("#imgModal4").modal('hide');
            });
            $(".close").click(function(){
                    $("#imgModal5").modal('hide');
            });
            $(".close").click(function(){
                    $("#reserveModal").modal('hide');
            });
            $(".close").click(function(){
                    $("#imgModalSamples").modal('hide');
            });
            $("#cancelr").click(function(){
                    $("#reserveModal").modal('hide');
            });
            $("#logr").click(function(){
                    $("#reserveModal").modal('show');
            });
            $("#cancel").click(function(){
                    $("#loginModal").modal('hide');
            });
            $("#log").click(function(){
                    $("#loginModal").modal('show');
            });
            $("#logs").click(function(){
                    $("#searchModal").modal('show');
            });
            $("#imgpop0").click(function(){
                    $("#imgModal0").modal('show');
            });
            $("#imgpop1").click(function(){
                    $("#imgModal1").modal('show');
            });
            $("#imgpop2").click(function(){
                    $("#imgModal2").modal('show');
            });
            $("#imgpop3").click(function(){
                    $("#imgModal3").modal('show');
            });
            $("#imgpop4").click(function(){
                    $("#imgModal4").modal('show');
            });
            $("#imgpop5").click(function(){
                    $("#imgModal5").modal('show');
            });
            $("#imgpopSamples").click(function(){
                    $("#imgModalSamples").modal('show');
            });

            $("#mycarousel").carousel( { interval: 1900 } );
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
        });