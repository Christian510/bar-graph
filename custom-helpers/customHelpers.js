// const exphbs = require('express-handlebars');
// const Handlebars = require('handlebars');
// const { template } = require('handlebars');

// const hbs = exphbs.create({

//     helpers: {

//         math: function () {
//             return 5 * 5;
//         },

//         moveBar: function (value) {

//             const move = () => {
//                 let i = 0;
//                 if (i == 0) {
//                     i = 1;
//                     let width = 1;
//                     let id = setInterval(frame, 10);
//                     function frame() {
//                         if (width >= value) {
//                             clearInterval(id);
//                             i = 0;
//                         } else {
//                             width++;
//                             elem.style.width = width + "%";
//                             elem.innerHTML = width + "%";
//                         }
//                     }
//                 }
//             }
//             let output = 
//         }
//     }
// });


// var source = document.getElementById("skills-bar").innerHTML;
// var template = Handlebars.compile(source);
// function move(value) {
//     let i = 0;
//     if (i == 0) {
//         i = 1;
//         let elem = document.getElementsByName("mybar");
//         var width = 1;
//         var id = setInterval(frame, 10);
//         function frame() {
//             if (width >= value) {
//                 clearInterval(id);
//                 i = 0;
//             } else {
//                 width++;
//                 elem.style.width = width + "%";
//                 elem.innerHTML = width + "%";
//             }
//         }
//     }
// }

// var output = template(move());
// document.getElementById("myBar").innerHTML = output;


