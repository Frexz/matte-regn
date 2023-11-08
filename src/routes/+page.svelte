<script>
    const WIDTH = 1200
    const HEIGHT = 500
    const ADDITION_LANE = 100
    const SUBTRACTION_LANE = 400
    const MULTIPLICATION_LANE = 700
    const DIVISION_LANE = 1000
    let timer = 0
    let animationSpeed = 10
    let moveLength = 0.5
    let rate = 300

    let interval
    let answer
    let poeng = 0
    let gameStarted = false
    let gameOver = false
    let speedIncrease = false
    let rateIncrease = false
    let problemInfo = {
        0: {"operator": "+", "color": "#FF6969", "x": ADDITION_LANE},
        1: {"operator": "-", "color": "#53BF9D", "x": SUBTRACTION_LANE},
        2: {"operator": "*", "color": "#F7D060", "x": MULTIPLICATION_LANE},
        3: {"operator": "/", "color": "#5272F2", "x": DIVISION_LANE},
    }
    let problems = []

    $: {
        if (gameStarted) {
            startGame()
        }
    }

    $: {
        if (poeng % 5 == 0 && poeng > 0) {
            speedIncrease = true
        }

        if (poeng % 10 == 0 && poeng > 0) {
            rateIncrease = true
        }
    }



    function startGame() {
        problems = []
        moveLength = 0.5
        poeng = 0
        rate = 300
        interval = setInterval(() => {
            checkGameOver()
            checkSpeedIncreaseAndRate(poeng)
            generateProblem()
            moveProblems()
            timer++
        }, animationSpeed)
    }

    function moveProblems() {
        for (const problem of problems) {
            problem["y"] += moveLength
        }

        problems = problems
    }

    function checkGameOver() {
        for (const problem of problems) {
            if (problem["y"] > HEIGHT - 50 + 3) {
                clearInterval(interval)
                
                setTimeout(() => {
                    gameOver = true
                    problems = []
                }, 2000);
                
                setTimeout(() => {
                    gameOver = false
                    gameStarted = false
                    
                }, 10000);
            }
        }
    }

    function handleKeypress(e) {
        if (e.keyCode == 13 && !gameStarted) {
            gameStarted = true
        } else if (e.keyCode == 13) {
            checkAnswer(answer)
            answer = ""
        }
    }

    function checkAnswer(answer) {
        problems.forEach((element) => {
            if (element["answer"] == answer) {
                poeng++
            }
        })
        problems = problems.filter((element) => element["answer"] != answer)
    }

    function checkSpeedIncreaseAndRate(poeng) {
        if (speedIncrease) {
            moveLength += 0.1
            speedIncrease = false
        }

        if (rateIncrease) {
            rate -= 30
            rateIncrease = false
        }
    }

    function generateProblem() {
        if (timer % rate == 0) {
            let typeNumber = Math.floor(4*Math.random())
            let num1 = Math.floor(10*Math.random())
            let num2 = Math.floor(10*Math.random())
            
            while (typeNumber == 1 && num1 < num2) {
                num1 = Math.floor(10*Math.random())
                num2 = Math.floor(10*Math.random())
            }

            while (typeNumber == 3 && (num1 < num2 || num1 % num2 != 0 || num2 == 0)) {
                num1 = Math.floor(10*Math.random())
                num2 = Math.floor(10*Math.random())
            }

            let problem = num1.toString() + " " + problemInfo[typeNumber]["operator"] + " " + num2.toString()
            problems.push({
                "problem": problem,
                "answer": eval(problem),
                "color": problemInfo[typeNumber]["color"],
                "x": problemInfo[typeNumber]["x"],
                "y": 0
            })
        }
    }
</script>

<div class="content" style="--width: {WIDTH}px; --height: {HEIGHT}px;">
    <h1>Poeng: {poeng}</h1>
    <div class="game-window">
        {#if !gameStarted}
            <h1 class="start-headline">Trykk ENTER for å starte</h1>
            <p class="start-instructions">Skriv inn svar på regnestykkene og trykk ENTER. Er svaret riktig forsvinner regnestykket. Få så mange poeng som mulig før regnestykkene kommer til bunnen.</p>
        {/if}
        {#if gameOver}
            <div class="game-over">
                <h1 class="game-over-headline">Spillet er slutt</h1>
                <p class="game-over-text">Du fikk {poeng} poeng</p>
            </div>
        {/if}
        {#each problems as problem}
            <p style="color: {problem["color"]}; left: {problem["x"]}px; top: {problem["y"]}px;">{problem["problem"]}</p>
        {/each}
        <hr>
    </div>
    <input class="game-input" type="number" autofocus on:keypress={(e) => handleKeypress(e)} bind:value={answer}>
</div>

<style>
    hr {
        border: 1;
        border-color: #ff00009d;
        margin: 0;
        position: absolute;
        width: var(--width);
        top: 480px;
    }

    p {
        font-size: 30px;
        margin: 0;
        position: absolute;
        text-align: center;
        height: 30px;
        width: 100px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    .game-input {
        font-size: 20px;
        height: 30px;
        margin-top: 10px;
        text-align: center;
        width: var(--width);
    }

    .game-over {
        background-color: #F875AA;
        border: 3px solid white;
        border-radius: 10px;
        height: 120px;
        position: absolute;
        left: 475px;
        top: 175px;
        width: 250px;
    }

    .game-over-headline {
        text-align: center;
    }

    .game-over-text {
        font-size: 20px;
        width: 100%;
    }

    .game-window {
        background-color: #171717;
        border: 5px solid lightslategrey;
        height: var(--height);
        position: relative;
        width: var(--width);
    }

    .start-instructions {
        color: #F875AA;
        font-size: 12px;
        width: var(--width)
    }

    .start-headline {
        color: #F875AA;
        text-align: center;
        width: var(--width);
    }
</style>