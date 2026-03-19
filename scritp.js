
     window.onload = function() {
        alert("Bem-vindo ao site! 👋");
    };

   
    document.getElementById("btnCalcular").addEventListener("click", function() {
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Digite números válidos!");
            return;
        }

        let soma = num1 + num2;
        let subtracao = num1 - num2;
        let multiplicacao = num1 * num2;
        let divisao = num2 === 0 ? "Erro: divisão por zero!" : num1 / num2;

        const lista = document.getElementById("resultados-list");
        lista.innerHTML = "";

        const criarItem = (texto, classe) => {
            const li = document.createElement("li");
            li.textContent = texto;
            li.classList.add(classe, "fw-bold", "mb-1");
            return li;
        }

        lista.appendChild(criarItem(`Soma: ${soma}`, "result-soma"));
        lista.appendChild(criarItem(`Subtração: ${subtracao}`, "result-subtracao"));
        lista.appendChild(criarItem(`Multiplicação: ${multiplicacao}`, "result-multiplicacao"));
        lista.appendChild(criarItem(`Divisão: ${divisao}`, "result-divisao"));

        // Mostrar no console
        console.log("Número 1:", num1);
        console.log("Número 2:", num2);
        console.log("Soma:", soma);
        console.log("Subtração:", subtracao);
        console.log("Multiplicação:", multiplicacao);
        console.log("Divisão:", divisao);
    });
