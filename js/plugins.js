$(document).ready(function(){

    // On scroll show the nav bar
    $(window).on('scroll', function() {
        var navbarElemetn = $("nav.navbar");
        if($(this).scrollTop() >= 100) {
            navbarElemetn.addClass("navbar-scrolled");
        } else {
            navbarElemetn.removeClass("navbar-scrolled");
        }        
    });

    $('.show-modal').click(function(){
        let modalTitle = $('.modal-title'),
            tableBody = $('.modal-body table tbody'),
            selectedDegree = $(this).parents('.degree-documents').attr('data-degree'),
            selectedSemester = $(this).attr('data-semester');

            // Change the title of the modal ddepending on the degree and the semester
            modalTitle.text(getDegreeName(selectedDegree) + ': Semester 0' + selectedSemester);
            // get data from moduleData file
            let dataDegree = getDegreeData(selectedDegree),
                dataSemester = dataDegree[selectedSemester];

            tableBody.empty(); // empty the table before appending any rows

            // foreach modules of semester append the data to the table
            dataSemester.forEach(function(module) {
                tableBody.append(createTableRow(module.url, module.name, createSign(module.course), createSign(module.td), createSign(module.tp)));
                // tableBody.append("<hr>");
            });

        
            // helper function

            // render an row of table
            function createTableRow(url, name, course, td, tp) {
                let tr = '<tr data-hred="' + url + '"><td>' + name + '</td><td>' + course + '</td><td>' + td + '</td><td>' + tp + '</td></tr>';
                return tr;
            }

            // create sign (true/false) depending on a boolean
            function createSign(bool) {
                if(bool) return '<span class="glyphicon glyphicon-ok" style="color: #4cae4c" aria-hidden="true"></span>';
                else return '<span class="glyphicon glyphicon-remove" style="color: #d43f3a" aria-hidden="true"></span>'
            }
    });


    // on click any tr has href

    $('.modal-body table tbody').on("click", "tr", function(){
        alert("jj");
    });
});