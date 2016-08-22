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
    $(".menu").hide();
    $(".bancomats").hide();
    $(".network").hide();
    $(".currency").hide();
    $(".creditCards").hide();
    $(".registration").hide();
    $(".myTrans").hide();
    $(".tekovniSmetki").hide();
    $(".kreditniKartichki").hide();
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
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
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
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
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
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
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
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
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
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();
    });

    $(".mainMenu").click(function () {
        $(".menu").show();
        $(".aboutUs").hide();
        $(".intro").hide();
        $(".conds").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").show();
        $(".extraDiv3").show();
        $(".extraDiv4").show();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();
    });

    $(".ban").click(function () {
        $(".aboutUs").hide();
        $(".intro").hide();
        $(".conds").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".menu").hide();
        $(".bancomats").show();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();

    });

    $(".net").click(function () {
        $(".aboutUs").hide();
        $(".intro").hide();
        $(".conds").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").show();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();
    });

    $(".cur").click(function () {
        $(".intro").show();
        $(".conds").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".aboutUs").hide();
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").show();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();
    });

    $(".cards").click(function () {
        $(".intro").show();
        $(".conds").hide();
        $(".text").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".aboutUs").hide();
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").show();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();
    });

    $(".devizni").click(function(){
        $(".intro").hide();
        $(".conds").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".aboutUs").hide();
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").show();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();
    });

    (".kreditni").click(function(){
        $(".intro").hide();
        $(".conds").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".aboutUs").hide();
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").show();
        $(".devizniSmetki").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();
    });

    $(".tekovni").click(function(){
        $(".intro").hide();
        $(".conds").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".aboutUs").hide();
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").hide();
        $(".tekovniSmetki").show();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();

    });

    $(".tran").click(function(){
        $(".intro").hide();
        $(".conds").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".aboutUs").hide();
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").hide();
        $(".myTrans").show();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();
    });

    $(".reg").click(function(){
        $(".intro").hide();
        $(".conds").hide();
        $(".insta").hide();
        $(".safe").hide();
        $(".extraDiv2").hide();
        $(".extraDiv3").hide();
        $(".extraDiv4").hide();
        $(".aboutUs").hide();
        $(".menu").hide();
        $(".bancomats").hide();
        $(".network").hide();
        $(".currency").hide();
        $(".creditCards").hide();
        $(".registration").show();
        $(".myTrans").hide();
        $(".tekovniSmetki").hide();
        $(".kreditniKartichki").hide();
        $(".devizniSmetki").hide();
    })


});