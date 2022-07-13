<template>
    <section class="instructions section-head" id="instructions">
    <div class="instruction-container">
        <div class="instructions-msg">
            <h2>Follow steps to washing hands</h2>
            <a href="#faq">Why do I need to wash my hand <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="instructions-imgs">
            <div class="instructions-imgs-container">
                <div class="instructions-img">
                    <img src="../assets/hand-a.png">
                </div>
                <div class="instructions-img-msg">
                    <p>Soap on Hand</p>
                </div>
            </div>
            <div class="instructions-imgs-container">
                <div class="instructions-img">
                    <img src="../assets/hand-b.png">
                </div>
                <div class="instructions-img-msg">
                    <p>Palm on Palm</p>
                </div>
            </div>
            <div class="instructions-imgs-container">
                <div class="instructions-img">
                    <img src="../assets/hand-c.png">
                </div>
                <div class="instructions-img-msg">
                    <p>Between Fingers</p>
                </div>
            </div>
            <div class="instructions-imgs-container">
                <div class="instructions-img">
                    <img src="../assets/hand-d.png">
                </div>
                <div class="instructions-img-msg">
                    <p>Back to Hands</p>
                </div>
            </div>
            <div class="instructions-imgs-container">
                <div class="instructions-img">
                    <img src="../assets/hand-e.png">
                </div>
                <div class="instructions-img-msg">
                    <p>Clean with Water</p>
                </div>
            </div>
            <div class="instructions-imgs-container">
                <div class="instructions-img">
                    <img src="../assets/hand-f.png">
                </div>
                <div class="instructions-img-msg">
                <p>Focus on Wrist</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style>
.instruction-container
{
    background-color: #f7f9fe;
    padding: 100px 0;
}
.instruction-container .instructions-msg
{
    text-align: center;
}
.instruction-container .instructions-msg h2
{
    margin-bottom: 20px;
    color: #461414;
    font-size: 30px;
    font-style: bold;
    font-weight: 700;
}
.instruction-container .instructions-msg a
{
    text-decoration: none;
    color: #4880d3;
    font-weight: bold;
    font-style: italic;
}
.instruction-container .instructions-msg a i
{
    margin-left: 10px;
}
.instruction-container .instructions-imgs
{
    display: flex;
    justify-content: space-between;
    margin: 50px 150px 50px 285px;
    width: 70%;
    
}
.instruction-container .instructions-imgs .instructions-imgs-container
{
    flex-basis: 10%;
    align-self: center;
    margin: auto;
}
.instruction-container .instructions-imgs .instructions-imgs-container .instructions-img
{
    width: 100%;
}
.instruction-container .instructions-imgs .instructions-imgs-container .instructions-img img
{
    max-width: 70%;
    border-radius: 50%;
    margin: 15px 0;
    box-shadow: 5px 5px 40px 5px rgba(142, 80, 80, 0.212);
    text-shadow: 0px 0px 9px #09f;
    filter: opacity(0.7) drop-shadow(0 0 0 rgb(122, 2, 2));
}

.instruction-container .instructions-imgs .instructions-imgs-container .instructions-img-msg
{
    text-align: center;
    margin: 10px;
    font-size: 17px;
    font-weight: bold;
    color: #461414;
}
</style>