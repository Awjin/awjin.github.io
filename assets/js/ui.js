window.onload = function () {
    document.body.removeAttribute('class')

    $('header a').click(function () {
        var section = $(this).attr('href')

        $('html, body').animate(
            { scrollTop: $(section).offset().top },
            200
        )
    })
}
