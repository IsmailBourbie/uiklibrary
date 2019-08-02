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
        let modal = $('#semester-files'),
            modalTitle = $('.modal-title'),
            tableBody = $('.modal-body table tbody'),
            selectedDegree = $(this).parents('.degree-documents').attr('data-degree'),
            selectedSemester = $(this).attr('data-semester');

            modalTitle.text(getDegreeName(selectedDegree) + ': Semester 0' + selectedSemester);
                    
            let dataDegree = getDegreeData(selectedDegree),
                dataSemester = dataDegree[selectedSemester];

            tableBody.empty();
            dataSemester.forEach(function(module) {
                tableBody.append(createTableRow(module.url, module.name, createSign(module.course), createSign(module.td), createSign(module.tp)));
            });

            console.log(dataSemester);
            // helper function
            function createTableRow(url, name, course, td, tp) {
                let tr = document.createElement('tr'),                    
                    td1 = document.createElement('td'),                    
                    td2 = document.createElement('td'),                    
                    td3 = document.createElement('td'),                    
                    td4 = document.createElement('td');               

                td1.innerHTML = name;
                td2.innerHTML = course;
                td3.innerHTML = td;
                td4.innerHTML = tp;

                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                tr.append(td4);

                tr.setAttribute('data-href', url);
                return tr;

            }


            function createSign(n) {
                if(n == 1 ) return '<span class="glyphicon glyphicon-ok" style="color: #4cae4c" aria-hidden="true"></span>';
                else return '<span class="glyphicon glyphicon-remove" style="color: #d43f3a" aria-hidden="true"></span>'
            }
    });


    // on click any tr has href

    $('.modal-body table tbody tr').on("click", function(){
        alert("jj");
    });
});