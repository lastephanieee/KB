/**
 * Created by Kostadinovska Stefani on 18/08/2016.
 */

$(document).ready(function () {

    $(".subParagraphs").hide();
    $(".intro").hide();
    $(".conds").hide();
    $(".insta").hide();
    $(".safe").hide();
    $(".extraDiv2").hide();
    $(".extraDiv3").hide();
    $(".extraDiv4").hide();
    $(".aboutUs").hide();
    $(".bancomats").hide();
    $(".cell").show();
    $(".network").hide();
    $(".currency").hide();
    $(".creditCards").hide();
    $(".notifications").hide();
    $(".myTrans").hide();
    $(".devizniSmetki").hide();


    $(".mainMenu h3")
        .mouseover(function () {
            $(".subParagraphs").show();
            $(".subParagraphs")
                .mouseover(function () {
                    $(".subParagraphs").show();
                })
                .mouseout(function () {
                    $(".subParagraphs").hide();

                });
        });

    $(".introduction").click(function () {
        $(".intro").show();
        $(".conds").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".aboutUs").hide();
        $(".bancomats").hide();
        $(".cell").show();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".notifications").hide();
        $(".myTrans").hide();
        $(".devizniSmetki").hide();

    });

    $('.conditions').click(function () {
        $(".conds").show();
        $(".intro").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".aboutUs").hide();
        $(".bancomats").hide();
        $(".cell").show();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".notifications").hide();
        $(".myTrans").hide();
        $(".devizniSmetki").hide();

    });

    $(".instalation").click(function () {
        $(".conds").hide();
        $(".intro").hide();
        $(".text").hide();
        $(".insta").show();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".aboutUs").hide();
        $(".bancomats").hide();
        $(".cell").show();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".notifications").hide();
        $(".myTrans").hide();
        $(".devizniSmetki").hide();

    });

    $(".safety").click(function () {
        $(".safe").show();
        $(".conds").hide();
        $(".intro").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".extraDiv2").show();
        $(".extraDiv3").show();
        $(".extraDiv4").show();
        $(".aboutUs").hide();
        $(".bancomats").hide();
        $(".cell").show();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".notifications").hide();
        $(".myTrans").hide();
        $(".devizniSmetki").hide();

    });

    $(".contact").click(function () {
        $(".aboutUs").show();
        $(".intro").hide();
        $(".conds").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".bancomats").hide();
        $(".cell").show();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".notifications").hide();
        $(".myTrans").hide();
        $(".devizniSmetki").hide();

    });


    $(".ban").click(function () {
        $(".bancomats").show();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".conds").hide();
        $(".intro").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".aboutUs").hide();
        $(".safe").hide();
        $(".cell").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".notifications").hide();
        $(".myTrans").hide();
        $(".devizniSmetki").hide();

    });

    $(".net").click(function () {
        $(".bancomats").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".conds").hide();
        $(".intro").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".aboutUs").hide();
        $(".safe").hide();
        $(".cell").hide();
        $(".network").show();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".notifications").hide();
        $(".myTrans").hide();
        $(".devizniSmetki").hide();

    });

    $(".cur").click(function () {
        $(".bancomats").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".conds").hide();
        $(".intro").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".aboutUs").hide();
        $(".safe").hide();
        $(".cell").hide();
        $(".network").hide();
        $(".currency").show();
        $(".creditCards").hide();
        $(".notifications").hide();
        $(".myTrans").hide();
        $(".devizniSmetki").hide();

    });

    $(".cards").click(function () {
        $(".bancomats").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".conds").hide();
        $(".intro").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".aboutUs").hide();
        $(".safe").hide();
        $(".cell").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").show();
        $(".notifications").hide();
        $(".myTrans").hide();
        $(".devizniSmetki").hide();

    });

    $(".not").click(function () {
        $(".bancomats").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".conds").hide();
        $(".intro").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".aboutUs").hide();
        $(".safe").hide();
        $(".cell").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".notifications").show();
        $(".myTrans").hide();
        $(".devizniSmetki").hide();

    });

    $(".tran").click(function(){
        $(".myTrans").show();
        $(".bancomats").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".conds").hide();
        $(".intro").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".aboutUs").hide();
        $(".safe").hide();
        $(".cell").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".notifications").hide();
        $(".devizniSmetki").hide();
    });

    $(".devizni").click(function(){
        $(".myTrans").hide();
        $(".bancomats").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".conds").hide();
        $(".intro").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".aboutUs").hide();
        $(".safe").hide();
        $(".cell").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".notifications").hide();
        $(".devizniSmetki").show();
    })

});