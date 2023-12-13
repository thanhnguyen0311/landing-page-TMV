$(document).ready(function () {
    $('.quart').click(function () {
        let tex;
        const ind = $(this).index();
        switch (ind) {
            case 0:
                tex = "div 1";
                break;
            case 1:
                tex = "div 2";
                break;
            case 2:
                tex = "div 3";
                break;
            case 3:
                tex = "div 4";
                break;
        }
        $('.center').text(tex);
    });

});

future = Date.parse("jan 31, 2024 00:00:00");
now = new Date();
diff = future - now;
days = Math.floor(diff / (1000 * 60 * 60 * 24));
hours = Math.floor(diff / (1000 * 60 * 60));
mins = Math.floor(diff / (1000 * 60));
secs = Math.floor(diff / 1000);
d = days;
h = hours - days * 24;
m = mins - hours * 60;
s = secs - mins * 60;
document.getElementById("timer")
    .innerHTML =
    '<div>' + d + '</div>' +
    '<div>' + h + '</div>' +
    '<div>' + m + '</div>' +
    '<div>' + s + '</div>';

function updateTimer() {
    let future = Date.parse("jan 31, 2024 00:00:00");
    let now = new Date();
    let diff = future - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let mins = Math.floor(diff / (1000 * 60));
    let secs = Math.floor(diff / 1000);

    let d = days;
    let h = hours - days * 24;
    let m = mins - hours * 60;
    let s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '</div>' +
        '<div>' + h + '</div>' +
        '<div>' + m + '</div>' +
        '<div>' + s + '</div>';
}

setInterval('updateTimer()', 1000);