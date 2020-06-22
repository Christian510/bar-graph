const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'skills.json'
);

const getSkills = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}

const moveBar = (value) => {
    
    let i = 0;
    if (i == 0) {
        i = 1;
        let elem = document.getElementsById("mybar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= value) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

module.exports = class Skills {

    static fetchAll(cb) {
        getSkills(cb);
    }

    static getFunction() {
        moveBar();
    }

}




