const path = require('path');

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Skills = require('./models/skills');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

exphbs.registerA

var hbs = exphbs.create({
    extname: 'html',
    helpers: {
        multiply: function (val) {
            return 5 * val;
        },

        bar_graph: function (val) {

            let i = 0;
            if (i == 0) {
                i = 1;
                let width = 1;
                let id = setInterval(frame, 10);
                function frame() {
                    if (width >= val) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        // elem.style.width = width + "%";
                        // elem.innerHTML = width + "%";
                    }
                }
            }
        }
    }
});
app.engine('html', hbs.engine);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    Skills.fetchAll(skill_data => {
        res.render('bar-graph', {
            level: skill_data.level,
            skills: skill_data,
            hasSkills: skill_data > 0,
            title: "My First Bar Graph",
            // path: '/skills',
        });
    });
});

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'view', '404.html'));
// })

const port = 3000;
app.listen(port, () => console.log(`App listening on ${port}`));