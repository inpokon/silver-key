$(document).ready(function () {
    genPlan();
});

function genPlan() {
    var $areaBtn = $('.st29'),
        $houseBtn = $('.plan__house-st'),
        estate = $('body #plan__estate span'),
        square = $('body #plan__acreage span'),
        street = $('body #plan__street span'),
        estBtn;
    $areaBtn.hover(function () {
        if ($(this).is('[id]')) {
            var btnId = $(this).attr('id');
            btnId = btnId.slice(4);
            btnId = Number(btnId);
            estBtn = btnId % 100;
            if(!$(this).hasClass('plan__active')) {
                $areaBtn.removeClass('plan__active');
            }
            $(this).toggleClass('plan__active');
            estate.text('№ ' + estBtn);
            streetText(btnId);
        }
    });
    $houseBtn.hover(function () {
        var houseId = $(this).attr('id');
        houseId = houseId.slice(4);
        var houseNum = Number(houseId);
        estBtn = houseNum % 100;
        var $thisArea = $('#pha-' + houseId + '');
        if (!$thisArea.hasClass('plan__active')) {
            $areaBtn.removeClass('plan__active');
        }
        $thisArea.toggleClass('plan__active');
        estate.text('№ ' + estBtn);
        streetText(houseNum);
    });
    function streetText(streetBtn) {
        if (streetBtn > 0 && streetBtn < 100) {
            street.text('Сосновая');
        }
        if (streetBtn > 100 && streetBtn < 200) {
            street.text('1-я Серебряная');
        }
        if (streetBtn > 200 && streetBtn < 300) {
            street.text('2-я Серебряная');
        }
        if (streetBtn > 300 && streetBtn < 400) {
            street.text('3-я Серебряная');
        }
        if (streetBtn > 400 && streetBtn < 500) {
            street.text('4-я Серебряная');
        }
        if (streetBtn > 500 && streetBtn < 600) {
            street.text('5-я Серебряная');
        }
        if (streetBtn > 600 && streetBtn < 700) {
            street.text('6-я Серебряная');
        }
        if (streetBtn > 700 && streetBtn < 800) {
            street.text('7-я Серебряная');
        }
        if (streetBtn > 800 && streetBtn < 900) {
            street.text('8-я Серебряная');
        }
        if (streetBtn > 900) {
            street.text('Березовая');
        }
    }
}