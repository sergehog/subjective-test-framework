/* globals $ */


$(function(){

    function selectBest(ev) {
        var target = ev.target;
        var $el = $(ev.target);
        $el.toggleClass('st-selected');
        console.log('clicked', target);
    }


    $('.st-panel').on('click', '.st-choise', selectBest);
})