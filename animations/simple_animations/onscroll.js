var tracker = 0;
var status_s = 0;
var animateD = anime({
    targets: '.clay',
    translateX: 250,
    // scale: 0,
    // rotate: '2turn'
});
anime({
    targets: '.init',
    translateY: -100,
    // scale: 1,
    // rotate: '2turn'
});
const bodyST = document.body.scrollTop;
const docST = document.documentElement.scrollTop;
const docSH = document.documentElement.scrollHeight;
const docCH = document.documentElement.clientHeight;
// animateD.seek(((docST + bodyST) / (docSH - docCH) * 100 / 100) * animateD.duration);

function moveAlittle() {
    const bodyST = document.body.scrollTop;
    const docST = document.documentElement.scrollTop;
    const docSH = document.documentElement.scrollHeight;
    const docCH = document.documentElement.clientHeight;
    // console.log((docST + bodyST) / (docSH - docCH) * 100);
    if ((docST + bodyST) / (docSH - docCH) * 100 < tracker) {
        anime({
            targets: '.clay',
            translateX: 50,
            scale: 1,
            rotate: '2turn'
        });
        anime({
            targets: '.fast',
            translateY: -100,
            // delay: anime.stagger(100)
            // scale: 1,
            // rotate: '2turn'
        });
        anime({
            targets: '.slow',
            translateY: -100,
            delay: anime.stagger(5),
            // scale: 1,
            // rotate: '2turn'
            color: '#8743B4'
        });
        anime({
            targets: '.subtitle',
            // translateY: -100,
            // delay: anime.stagger(5),
            // scale: 1,
            // rotate: '2turn'
            color: '#707070'
        });

    } else {
        anime({
            targets: '.clay',
            translateX: 250,
            scale: 1.5,
            rotate: '1turn'
        });
        anime({
            targets: '.fast',
            translateY: 0,
            delay: anime.stagger(5)
                // scale: 1,
                // rotate: '2turn'
        });

        anime({
            targets: '.slow',
            translateY: 50,
            // delay: anime.stagger(5)
            // scale: 1,
            // rotate: '2turn'
            color: '#707070'
        });
        anime({
            targets: '.subtitle',
            // translateY: -100,
            // delay: anime.stagger(5),
            // scale: 1,
            // rotate: '2turn'
            color: '#8743B4'
        });
    }

    tracker = (docST + bodyST) / (docSH - docCH) * 100
        // console.log('scrolling')





}

setInterval(() => {
        console.log('updating')
        var clay = document.querySelector('.clay');
        if (status_s == 0) {
            anime({
                targets: '.clay',
                // translateX: 250,
                scale: 1.1,
                // rotate: '2turn'
            });
            status_s++
        } else {
            anime({
                targets: '.clay',
                // translateX: 250,
                scale: 1,
                // rotate: '2turn'
            });
            status_s--;
        }
    },
    1000);