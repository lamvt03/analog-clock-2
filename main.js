$(function () {
    const clock = $('.clock');
    const hour_hand = $('.hour-hand');
    const minute_hand = $('.minute-hand');
    const second_hand = $('.second-hand');

    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();


        let second_deg = second * 6;
        let minute_deg = minute * 6 + second / 12
        let hour_deg = hour * 30 + minute / 2;

        hour_hand.css({
            "transform":`rotateZ(${hour_deg}deg)`
        });
        minute_hand.css({
            "transform":`rotateZ(${minute_deg}deg)`
        });
        second_hand.css({
            "transform":`rotateZ(${second_deg}deg)`
        });
    }, 1000)

    function createASmallIndicate(deg) {
        let el = $('<div></div>');
        el.addClass('small-indicates');

        let windowSize = $(window).width()
        let smallIndicateGap = ''
        if(windowSize >= 480)
            smallIndicateGap += '-172px'
        else
            smallIndicateGap += '-130px'

        el.css({
            "transform":`rotateZ(${deg}deg) translateY(${smallIndicateGap})`
        })
        clock.append(el);
    }
    
    for (let i = 0; i <= 360; i += 5) {
        createASmallIndicate(i);
    }


    $(window).resize(()=>{
        var els = $('.small-indicates');

        let windowSize = $(window).width()
        let smallIndicateGap = ''
        if(windowSize >= 480)
            smallIndicateGap += '-172px'
        else
            smallIndicateGap += '-130px'

        let deg = 0
        for(let i = 0; i < els.length; i++){
            els[i].style.transform = `rotateZ(${deg}deg) translateY(${smallIndicateGap})`
            deg += 5
        }
       
    })
});