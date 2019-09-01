$(document).ready(function(){

    // on reload page check the scroll
    if($(window).scrollTop() >= 100) {
        $("nav.navbar").addClass("navbar-scrolled");
    } else {            
        $("nav.navbar").removeClass("navbar-scrolled");
    }


    // On scroll show the nav bar
    $(window).on('scroll', function() {
        let navbarElement = $("nav.navbar");
        if($(this).scrollTop() >= 100) {
            navbarElement.addClass("navbar-scrolled");
        } else {            
            navbarElement.removeClass("navbar-scrolled");
        }
    });

    // fill the licence table with data onload page
    var tableBody = $(".documents-table table tbody"),
        dataLicence01 = getLicenceSemester(1, 0);
    for(let i in dataLicence01) {
        tableBody.append(createTableRow(dataLicence01[i]));
    }

    
        
    // helper function

    // render an row of table
    function createTableRow(object) {
        let tr = '<tr data-hred="' + object.url + '">'
                +'<td>' + object.name + '</td>'
                +'<td>' + createSign(object.course) + '</td>'
                +'<td>' + createSign(object.td) + '</td>'
                +'<td>' + createSign(object.tp) + '</td></tr>';
        return tr;
    }

    // create sign (true/false) depending on a boolean
    function createSign(bool) {
        if(bool) return '<span class="glyphicon glyphicon-ok true-sign" aria-hidden="true"></span>';
        else return '<span class="glyphicon glyphicon-remove false-sign" aria-hidden="true"></span>'
    }

    // on click any tr has href

    $('.modal-body table tbody').on("click", "tr", function(){
        alert("jj");
    });
});