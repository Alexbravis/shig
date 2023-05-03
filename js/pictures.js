let studs = document.querySelectorAll('.slave_studs_photo');
let sl = document.querySelector('.studs_arrow_left');
let sr = document.querySelector('.studs_arrow_right');


let index = 1;
       show();

        function show(n) { 

            if (n > studs.length) { 
                index = 1;
            }
            if (n < 1) {             
                index = studs.length;
            }

           studs.forEach((item) => item.style.display = 'none'); 
           studs[index - 1].style.display = 'block';
 }

        function plus(n) {
            show(index += n);  
        }

        function currentSlids(n) {
            show(index = n); 
        }

        sl.addEventListener('click', function() { 
            plus(-1);
        });
        sr.addEventListener('click', function() { 
            plus(1);
        });



