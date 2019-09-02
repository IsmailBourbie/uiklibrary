$(document).ready(function(){

    // on reload page check the scroll
    if($(window).scrollTop() >= 470) {
        $("nav.navbar").addClass("navbar-scrolled");
    } else {            
        $("nav.navbar").removeClass("navbar-scrolled");
    }


    // On scroll show the nav bar
    $(window).on('scroll', function() {
        console.log($(this).scrollTop());
        let navbarElement = $("nav.navbar");
        if($(this).scrollTop() >= 470) {
            navbarElement.addClass("navbar-scrolled");
        } else {
            navbarElement.removeClass("navbar-scrolled");
        }
    });

    // fill the licence table with data onload page
    fillTable(1);

    // Onchange semester 
    $('.licence-container .semester-btn').click(function() {
        let selectedSemester = $(this).attr('data-semester'),
            selectedYear = $('select').val();
        $('.licence-container .semester-btn').removeClass('selected');
        $(this).addClass('selected');

        fillTable(selectedYear, selectedSemester);
    });
    

    // onchange Licence year
    $(".licence-container select#select-level").change(function(){
        $('.licence-container .semester-btn:eq(0)').click();
        let selectedYear = $(this).val();
        fillTable(selectedYear);
    });
    // helper function

    function fillTable(year, semester = 0) {
        let tableBody = $(".documents-table table tbody"),
        dataLicence = getLicenceSemester(year, semester);

        tableBody.empty();

        for(let i in dataLicence) {
            tableBody.append(createTableRow(dataLicence[i]));
        }
    }

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