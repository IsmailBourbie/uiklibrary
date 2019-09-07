$(document).ready(function(){

    // on reload page check the scroll
    if($(window).scrollTop() >= 470) {
        $("nav.navbar").addClass("navbar-scrolled");
    } else {            
        $("nav.navbar").removeClass("navbar-scrolled");
    }


    // On scroll show the nav bar
    $(window).on('scroll', function() {
        let navbarElement = $("nav.navbar");
        if($(this).scrollTop() >= 470) {
            navbarElement.addClass("navbar-scrolled");
        } else {
            navbarElement.removeClass("navbar-scrolled");
        }
    });

    // get the current year
    $('#currentYear').text(new Date().getFullYear());

    // fill the licence table with data onload page
    fillAllTables(1);

    // Onchange licence semester 
    $('.licence-container .semester-btn').click(function() {
        let selectedSemester = $(this).attr('data-semester'),
            selectedYear = $('.licence-container select').val();
        $('.licence-container .semester-btn').removeClass('selected');
        $(this).addClass('selected');

        fillLicenceTable(selectedYear, selectedSemester);
    });

    // Onchange master semester 
    $('.master-container .semester-btn').click(function() {
        let selectedSemester = $(this).attr('data-semester'),
            selectedYear = $('.master-container select').val(),
            selectedSpeciality = $('.master-container select option:selected').closest('optgroup').attr('data-speciality');
        $('.master-container .semester-btn').removeClass('selected');
        $(this).addClass('selected');

        fillMasterTable(selectedYear, selectedSpeciality, selectedSemester);
    });
    

    // onchange Licence year
    $(".licence-container select#select-level").change(function(){
        $('.licence-container .semester-btn:eq(0)').click();
        let selectedYear = $(this).val();
        fillLicenceTable(selectedYear);
    });

    // onchange Master year
    $(".master-container select#select-level").change(function(){
        $('.master-container .semester-btn:eq(0)').click();
        let selectedYear = $(this).val(),
        selectedSpeciality = $('.master-container select option:selected').closest('optgroup').attr('data-speciality');
        fillMasterTable(selectedYear, selectedSpeciality);
    });
    // helper function

    function fillLicenceTable(year, semester = 0) {
        let tableBody = $(".licence-container .documents-table table tbody"),
        dataLicence = getLicenceSemester(year, semester);

        tableBody.empty();

        for(let i in dataLicence) {
            tableBody.append(createTableRow(dataLicence[i]));
        }
    }

    
    function fillMasterTable(year, speciality = "SE", semester = 0) {
        let tableBody = $(".master-container .documents-table table tbody"),
        dataMaster = getMasterSemester(speciality, year, semester);

        tableBody.empty();

        for(let i in dataMaster) {
            tableBody.append(createTableRow(dataMaster[i]));
        }
    }

    function fillAllTables (year) {
        fillLicenceTable(year);
        fillMasterTable(year);
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