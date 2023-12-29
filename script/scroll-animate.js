let observer = new IntersectionObserver( (e) => {
    e.forEach( ( div ) => {
        if ( div.isIntersecting ) {
            div.target.style.opacity = 1;
        } else {
            div.target.style.opacity = 0;
        }
    })
} );

let div = document.querySelectorAll('.container-fluid');
observer.observe(div[1])
observer.observe(div[2])
observer.observe(div[3])
observer.observe(div[4])
observer.observe(div[5])

let Sobserver = new IntersectionObserver( (e) => {
    e.forEach( ( row ) => {
        if ( row.isIntersecting ) {
            row.target.style.opacity = 1;
        } else {
            row.target.style.opacity = 0;
        }
    })
} );

let row = document.querySelectorAll('.row');
Sobserver.observe(row[3])
Sobserver.observe(row[4])
Sobserver.observe(row[5])
Sobserver.observe(row[6])
Sobserver.observe(row[7])
Sobserver.observe(row[8])
Sobserver.observe(row[9])

let Col12bserver = new IntersectionObserver( (e) => {
    e.forEach( ( col12 ) => {
        if ( col12.isIntersecting ) {
            col12.target.style.opacity = 1;
        } else {
            col12.target.style.opacity = 0;
        }
    })
} );

let col12 = document.querySelectorAll('.col-12');
Col12bserver.observe(col12[1])
Col12bserver.observe(col12[2])
Col12bserver.observe(col12[3])
Col12bserver.observe(col12[4])
Col12bserver.observe(col12[5])
Col12bserver.observe(col12[6])
Col12bserver.observe(col12[7])