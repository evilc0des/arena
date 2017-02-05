var currPage = 'main';


$(document).ready(function(){

    

    $('.main-enter-btn').click(function(){
        $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});
        $('.main-page-content').fadeOut(1000, function(){
            $('.list-page-content').fadeIn();
            $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
        });
        
    })
    
    $('.csgo-select').click(function(){
         $('.game-content').fadeOut();
        if(!(currPage == 'csgo'))
            $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});
        $('.main-container .game-page:visible').fadeOut(1000, function(){
            $('.main-container .csgo-page').fadeIn();
            $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
        });
        TweenMax.to('.content-logo', 0.5, {paddingTop:"15vh"});
        TweenMax.to('.csgo-select', 0.5, {fontSize: "30px", fontWeight:"bold"});
        TweenMax.to('.pes-select,.dota-select,.nfs-select', 0.5, {fontSize: "10px"});
        $('.game-details').hide();
        $('.csgo-details').show();
        currPage = 'csgo';
    })

    $('.pes-select').click(function(){
         $('.game-content').fadeOut();
        if(!(currPage == 'pes'))
            $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});

        $('.main-container .game-page:visible').fadeOut(1000, function(){
            $('.main-container .pes-page').fadeIn();
            $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
        });

        TweenMax.to('.content-logo', 0.5, {paddingTop:"15vh"});
        TweenMax.to('.pes-select', 0.5, {fontSize: "30px", fontWeight:"bold"});
        TweenMax.to('.csgo-select,.dota-select,.nfs-select', 0.5, {fontSize: "10px"});
        $('.game-details').hide();
        $('.pes-details').show();
        currPage = 'pes';
    })

    $('.dota-select').click(function(){
         $('.game-content').fadeOut();
        if(!(currPage == 'dota'))
            $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});

        $('.main-container .game-page:visible').fadeOut(1000, function(){
            $('.main-container .dota-page').fadeIn();
            $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
        });

        TweenMax.to('.content-logo', 0.5, {paddingTop:"15vh"});
        TweenMax.to('.dota-select', 0.5, {fontSize: "30px", fontWeight:"bold"});
        TweenMax.to('.pes-select,.csgo-select,.nfs-select', 0.5, {fontSize: "10px"});
        $('.game-details').hide();
        $('.dota-details').show();
        currPage = 'dota';
    })

    $('.nfs-select').click(function(){
        $('.game-content').fadeOut();
        if(!(currPage == 'nfs'))
            $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});

        $('.main-container .game-page:visible').fadeOut(1000, function(){
            $('.main-container .nfs-page').fadeIn();
            $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
        });

        TweenMax.to('.content-logo', 0.5, {paddingTop:"15vh"});
        TweenMax.to('.nfs-select', 0.5, {fontSize: "30px",fontWeight:"bold"});
        TweenMax.to('.pes-select,.dota-select,.csgo-select', 0.5, {fontSize: "10px"});
        $('.game-details').hide();
        $('.nfs-details').show();
        currPage = 'nfs';
    })
    $('.terms-link').click(function(){
        openTerms()
    })

    $('.csgo-enlist-btn').click(function(){ window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfSagnNUsFZj1xu0nWW5ZAwkZybVsoD49-eoloOBlLfFSF4yA/viewform'});
    $('.pes-enlist-btn').click(function(){ window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe9Qrr_7alq6NXiKw042cIK9MOUtYLJtAi5iY9pgYPHwaOCkw/viewform'});
    $('.dota-enlist-btn').click(function(){ window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf00BqOyQorzH9S_cX8k20jNxZeM1g0Oe2HLPEirdn3APlYBA/viewform'});
    $('.nfs-enlist-btn').click(function(){ window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSezddIa-PJV9e9WwH7trEZMnSx-EMvopptmsAfmQojBl4Qmtg/viewform'});

    if (window.location.hash){
      var hash = window.location.hash.substring(1);
      if (hash == "toc"){
         openTerms()
      }
   }
})

function openTerms(){
    if(!(currPage == 'terms'))
            $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});
            
        $('.main-container .game-page:visible').fadeOut(1000, function(){
            $('.main-container .term-page').fadeIn(1000, function(){
                $('.term-content').fadeIn(1000);
            });
            $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
        });
        TweenMax.to('.content-logo', 0.5, {paddingTop:"40vh"});
        TweenMax.to('.nfs-select,.pes-select,.dota-select,.csgo-select', 0.5, {fontSize: "10px", fontWeight:"400"});
        $('.game-details').hide();
        currPage = 'terms';
}