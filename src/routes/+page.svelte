<script>
    import { onMount, tick } from "svelte"

    const WIDTH = 1200
    const HEIGHT = 700
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
    let name

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
    let highscores = []

    let gameInput
    let highscoreInput

    onMount(() => {
        gameInput.focus()
        if (typeof window !== "undefined") {
            const savedScores = localStorage.getItem("highscores")
            if (savedScores) {
                highscores = JSON.parse(savedScores)
        }
        }
        
    })


    $: {
        if (gameOver) {
            highscoreInput?.focus()
        }
    }

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
                gameOver = true
                
            }
        }
    }

    function saveHighscores() {
        if (typeof window !== "undefined") {
        localStorage.setItem("highscores", JSON.stringify(highscores))
        }
    }

    function handleKeypress(e) {
        if (e.keyCode == 13 && !gameStarted) {
            gameStarted = true
        } else if (e.keyCode == 13 && gameOver) {
            highscores = [[name, poeng], ...highscores].sort((a, b) => {return b[1] - a[1]}).slice(0, 10)
            saveHighscores()
            name = ""
            gameOver = false
            gameStarted = false
            poeng = 0
            problems = []
            moveLength = 0.5
            rate = 300
            gameInput.focus()
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

    function checkSpeedIncreaseAndRate() {
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

<div class="content" >
    <div class="game" style="--width: {WIDTH}px; --height: {HEIGHT}px;">
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
                    <input type="text" placeholder="Skriv inn navet ditt her og trykk ENTER" style="margin-top: 50px; width: 97%;" bind:this={highscoreInput} on:keypress={(e) => handleKeypress(e)} bind:value={name}>
                </div>
            {/if}
            {#each problems as problem}
                <p style="color: {problem["color"]}; left: {problem["x"]}px; top: {problem["y"]}px;">{problem["problem"]}</p>
            {/each}
            <hr>
        </div>
        <input class="game-input" type="number" on:keypress={(e) => handleKeypress(e)} bind:value={answer} bind:this={gameInput}>
    </div>

    <div class="highscore-list" style="--height: {HEIGHT}px;">
        <div class="highscore-head">
            <h1>~*~ Topp 10 ~*~</h1>
        </div>
        <div class="entries">
            <p><b>#</b></p>
            <p><b>Navn</b></p>
            <p style="text-align: right;"><b>Poeng</b></p>

            {#each highscores.sort((a, b) => {return b[1] - a[1]}).slice(0, 10) as entry, i}
                <p>{i + 1}.</p>
                <p>{entry[0] || ""}</p>
                <p style="text-align: right;">{entry[1] || ""}</p>
            {/each}
        </div>
    </div>
</div>

<style>
    hr {
        border: 1;
        border-color: #ff00009d;
        margin: 0;
        position: absolute;
        width: var(--width);
        top: 680px;
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
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    .game {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
        height: 200px;
        position: absolute;
        padding: 5px;
        left: 475px;
        top: 175px;
        width: 300px;
        z-index: 10;
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
        border-radius: 7px;
        height: var(--height);
        position: relative;
        width: var(--width);
        z-index: 1;
    }

    .highscore-head {
        display: flex;
        justify-content: center;
        height: 0px;
        margin-bottom: 100px;
    }

    .highscore-list {
        display: flex;
        flex-direction: column;
        height: var(--height);
        width: 20vw;
        padding-left: 50px;
    }

    .entries {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-row: repeat(11, auto);
        row-gap: 10px;
        column-gap: 10px;
        width: 100%;
        text-align: left;
    }

    .entries p {
        position: relative;
        margin: 0;
        font-size: 20px;
        width: 100%;
        text-align: left;
    }

    .start-instructions {
        color: #F875AA;
        font-size: 12px;
        width: var(--width);
    }

    .start-headline {
        color: #F875AA;
        text-align: center;
        width: var(--width);
    }
</style>