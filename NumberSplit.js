function numberSpliter(n) {
    document.getElementById("numbersplitoutput").innerHTML = "Output: <br>";
    if (n > 0 && n < 21)
        displayPartitions(n, []);
    else 
        document.getElementById("numbersplitoutput").innerHTML = "Invalid number";
}

function displayPartitions(n, list) {
    var sum = 0, i = 1;
    for (p = 0; p < list.length; p++)
        sum += list[p];
    if (sum == n) {
        document.getElementById("numbersplitoutput").innerHTML += (n + " = ");
        for (e = 0; e < list.length; e++)
            if (e != list.length - 1)
                document.getElementById("numbersplitoutput").innerHTML += (list[e] + " + ");
            else
                document.getElementById("numbersplitoutput").innerHTML += list[e] + "<br>";
    } else {
        if (list.length != 0)
            i = list[list.length - 1];
        while (i <= n - sum) {
            list[list.length] = i;
            displayPartitions(n, list);
            list.splice(list.length - 1, 1);
            i++;
        }
    }
}