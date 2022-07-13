<template>
<section class="dos-and-donts section-head" id="dos-and-donts">
    <div class="container">
        <div class="dos-and-donts-container">
            <h5>Do’s & Don’ts</h5>
            <h2>Protect yourself</h2>
            <p>The best thing you can do now is plan for how you can adapt your daily routine. Take few steps to
            protect yourself as Clean your hands often, Avoid close contact, Cover coughs and sneezes, clean
            daily used surfaces etc. The best way to prevent illness is to avoid being exposed to this virus.</p>
        </div>
        <div class="dos-and-donts-imgs-container">
            <div class="dos-and-donts-left-imgs-container">
                <div class="dos-and-donts-left-imgs">
                    <div class="dos-and-donts-msg">
                        <p>Avoid Close Contact</p>
                    </div>
                    <div class="dos-and-donts-icon">
                        <i class="fas fa-times-circle"></i>
                    </div>
                    <div class="dos-and-donts-img">
                        <img src="../assets/donts-a.png" class="wrong">
                    </div>
                </div>
                <div class="dos-and-donts-left-imgs">
                    <div class="dos-and-donts-msg">
                        <p>Don’t Touch Face</p>
                    </div>
                    <div class="dos-and-donts-icon">
                        <i class="fas fa-times-circle"></i>
                    </div>
                    <div class="dos-and-donts-img">
                        <img src="../assets/donts-b.png" class="wrong">
                    </div>
                </div>
                <div class="dos-and-donts-left-imgs">
                    <div class="dos-and-donts-msg">
                        <p>Social Distancing</p>
                    </div>
                    <div class="dos-and-donts-icon">
                        <i class="fas fa-times-circle"></i>
                    </div>
                    <div class="dos-and-donts-img">
                        <img src="../assets/donts-c.png" class="wrong">
                    </div>
                </div>
            </div>
            <div class="dos-and-donts-middle-img">
                <img src="../assets/protect.png">
            </div>
            <div class="dos-and-donts-right-imgs-container">
                <div class="dos-and-donts-right-imgs">
                    <div class="dos-and-donts-img">
                        <img src="../assets/dos-a.png" class="right">
                    </div>
                    <div class="dos-and-donts-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="dos-and-donts-msg">
                        <p>Wash Your Hands</p>
                    </div>
                </div>
                <div class="dos-and-donts-right-imgs">
                    <div class="dos-and-donts-img">
                        <img src="../assets/dos-b.png" class="right">
                    </div>
                    <div class="dos-and-donts-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="dos-and-donts-msg">
                        <p>Drink Much Water</p>
                    </div>
                </div>
                <div class="dos-and-donts-right-imgs">
                    <div class="dos-and-donts-img">
                        <img src="../assets/dos-c.png" class="right">
                    </div>
                    <div class="dos-and-donts-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="dos-and-donts-msg">
                        <p>Use Face Mask</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style>
.dos-and-donts
{
    background-color: #f7f9fe;
    padding: 100px 0;
}
.dos-and-donts .dos-and-donts-container
{
    text-align: center;
    width: 100%;
    margin: auto;
}
.dos-and-donts .dos-and-donts-container h5
{
    color: #990505;
    font-size: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 7px;
}
.dos-and-donts .dos-and-donts-container h2
{
    color: #461414;
    font-size: 42px;
    font-family: 'Oswald', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 25px;
}
.dos-and-donts .dos-and-donts-container p
{
    color: #461414;
    line-height: 1.5em;
}
.dos-and-donts .dos-and-donts-imgs-container
{
    display: flex;
    margin-top: 100px;
    justify-content: space-around;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-left-imgs-container
{
    flex-basis: 25%;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-left-imgs-container .dos-and-donts-left-imgs
{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-left-imgs-container .dos-and-donts-left-imgs .dos-and-donts-msg
{
    margin: 0 20px 0 0;
    color: #990505;
    font-weight: bold;
    font-size: 14px;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-left-imgs-container .dos-and-donts-left-imgs .dos-and-donts-icon
{
    position: absolute;
    top: 0;
    left: 78%;
    font-size: 21px;
    color: #f70310;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-left-imgs-container .dos-and-donts-left-imgs .dos-and-donts-icon i
{
    background-color: #fff;
    border-radius: 50%;
}

.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-left-imgs-container .dos-and-donts-left-imgs .dos-and-donts-img
{
    width: 80px;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-left-imgs-container .dos-and-donts-left-imgs .dos-and-donts-img img
{
    max-width: 100%;
    border-radius: 50%;
    border: 2px solid rgb(240, 93, 93); 
    background-color: #fff;
    
}

.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-middle-img
{
    flex-basis: 50%;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-middle-img img
{
    max-width: 100%;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-right-imgs-container
{
    flex-basis: 25%;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-right-imgs-container .dos-and-donts-right-imgs
{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-right-imgs-container .dos-and-donts-img
{
    width: 80px;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-right-imgs-container .dos-and-donts-img img
{
    max-width: 100%;
    border-radius: 50%;
    border: 2px solid rgb(12, 139, 12);
    background-color: #fff;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-right-imgs-container .dos-and-donts-icon
{
    position: absolute;
    right: 78%;
    top: 0;
    color: #06e706;
    font-size: 21px;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-right-imgs-container .dos-and-donts-icon i
{
    border-radius: 50%;
    background-color: #fff;
}
.dos-and-donts .dos-and-donts-imgs-container .dos-and-donts-right-imgs-container .dos-and-donts-msg
{
    margin: 0 0 0 20px;
    color: #098109;
    font-weight: bold;
    font-size: 14px;
}

</style>