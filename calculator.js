var expression = document.getElementById("inputField").value;
        // let exp = document.getElementById("inputField");
        // exp.style.fontFamily = "consolas";
        // exp.style.fontSize = "3rem";
        function createExp(value) {
            expression = expression + value;
            document.getElementById("inputField").value = expression;
        }

        function calculate(params) {
            document.getElementById("inputField").value = eval(expression);
        }
        function clearExp(params) {
            expression = "";
            document.getElementById("inputField").value = expression;
        }

        // function deleteExp(params) {

        //     expression = expression.length.tostring() - 1;
        //     document.getElementById("inputField").value = expression;
        // }

        // function Sin(){
        //     expression = "sin" + expression;
        //     // expression = Math.sin(expression);
        //     document.getElementById("inputField").value = expression;
        // }