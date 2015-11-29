/* globals $, st */

window.st = window.st || {};

$(function(){

    function selectBest(ev) {
        var target = ev.target;
        var $el = $(ev.target);
        $el.toggleClass('st-selected');
        console.log('clicked', target);
    }


    $('.st-panel').on('click', '.st-choise', selectBest);



    st.data = [
        [
            'datasets/aloe_2/aloe_2_conventional.png',
            'datasets/aloe_2/aloe_2_true.png',
            'datasets/aloe_2/aloe_2_matting.png',
            'datasets/aloe_2/aloe_2_matting_inpainting.png'
        ]
    ];

    var imgTpl = function(path){
        return '<div class="st-choise"><img src="' + path + '"/></div>';
    }

    var tpl = function(steps){
        var s = '';
        var l = steps.length;

        steps.forEach(function(step, i){
            s += '<div class="st-step">';
            s += '    <h1>Dataset # '+(i+1)+' from '+l+'</h1>';
            s += '    <div class="st-panel clearfix">';

            step.forEach(function(el){
                s += imgTpl(el);
            });

            s += '   </div>';
            s += '   <div align="right">';
            s += '      <button>Next Dataset &gt;&gt;</button>';
            s += '   </div>';
            s += '</div>';
        });

        return s;
    };



    (function generate() {
        $('.st-steps').html(tpl(st.data));

    })();

    // var steps = data.length // 1


    // result = [
    //     'datasets/aloe_2/aloe_2_conventional.png',

    // ]




});
