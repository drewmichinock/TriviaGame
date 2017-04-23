$(document).ready(function() {

    $("#start").click(function() {

        $("#start").hide();

        $("form").show(500);


        // 30 second timer
        var i = 30;

        function startTimer() {

            var countdownTimer = setInterval(function() {

                document.getElementById("timer").innerHTML = (i);

                i = i - 1;

                if (i <= -1) {

                    clearInterval(countdownTimer);

                    alert("Game Over!")

                    
                }

            }, 1000);

        }

        $("timer").html(startTimer())

    });

});
