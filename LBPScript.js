function chap(...args) {
        const outputDiv = document.getElementById('output');
        if (args.length > 0) {
            const output = args.filter(arg => arg !== "").join(' ');
             console.log(output);
        }
    }

    function startShart(condition, callback) {
        if (condition) {
            callback();
        }
    }

    function not(callback) {
        callback();
    }
    function startTabe(name, condition, callback) {
        	if (name) {
        callback();
    }
    }
    
    const scripts = document.getElementsByTagName('LBPScript');

    for (let script of scripts) {
        const code = script.textContent;
        eval(code);
    
