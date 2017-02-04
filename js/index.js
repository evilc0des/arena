$(document).ready(function(){

    var currPage = 'main';

    $('.main-enter-btn').click(function(){
        $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});
        $('.main-page-content').fadeOut(1000, function(){
            $('.list-page-content').fadeIn();
            $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
        });
        
    })
    
    $('.csgo-select').click(function(){
        if(!(currPage == 'csgo'))
            $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});
        if(currPage == 'main')
        {
            $('.main-container .main-page').fadeOut(1000, function(){
                $('.main-container .csgo-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'pes') {
            $('.main-container .pes-page').fadeOut(1000, function(){
                $('.main-container .csgo-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'dota') {
            $('.main-container .dota-page').fadeOut(1000, function(){
                $('.main-container .csgo-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'nfs') {
            $('.main-container .nfs-page').fadeOut(1000, function(){
                $('.main-container .csgo-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        currPage = 'csgo';
    })
    $('.pes-select').click(function(){
        
        if(!(currPage == 'pes'))
            $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});

        if(currPage == 'main')
        {
            $('.main-container .main-page').fadeOut(1000, function(){
                $('.main-container .pes-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'csgo') {
            $('.main-container .csgo-page').fadeOut(1000, function(){
                $('.main-container .pes-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'dota') {
            $('.main-container .dota-page').fadeOut(1000, function(){
                $('.main-container .pes-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'nfs') {
            $('.main-container .nfs-page').fadeOut(1000, function(){
                $('.main-container .pes-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        currPage = 'pes';
    })
    $('.dota-select').click(function(){
        
        if(!(currPage == 'dota'))
            $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});

        if(currPage == 'main')
        {
            $('.main-container .main-page').fadeOut(1000, function(){
                $('.main-container .dota-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'csgo') {
            $('.main-container .csgo-page').fadeOut(1000, function(){
                $('.main-container .dota-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'pes') {
            $('.main-container .pes-page').fadeOut(1000, function(){
                $('.main-container .dota-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'nfs') {
            $('.main-container .nfs-page').fadeOut(1000, function(){
                $('.main-container .dota-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        currPage = 'dota';
    })
    $('.nfs-select').click(function(){
        
        if(!(currPage == 'nfs'))
            $('.container-overlay').css({"background":"url('./assets/overlaybg.gif')"});

        if(currPage == 'main')
        {
            $('.main-container .main-page').fadeOut(1000, function(){
                $('.main-container .nfs-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'csgo') {
            $('.main-container .csgo-page').fadeOut(1000, function(){
                $('.main-container .nfs-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'pes') {
            $('.main-container .pes-page').fadeOut(1000, function(){
                $('.main-container .nfs-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        else if(currPage == 'dota') {
            $('.main-container .dota-page').fadeOut(1000, function(){
                $('.main-container .nfs-page').fadeIn();
                $('.container-overlay').css({"background":"url('./assets/overlaybg.png')"});
            });
        }
        currPage = 'nfs';
    })
    
})