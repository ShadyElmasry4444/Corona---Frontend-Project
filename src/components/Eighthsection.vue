<template>
<section class="be-careful section-head" id="treatment">
    <div class="container">
        <div class="be-careful-container">
            <div class="be-careful-left-container">
                <h5>Be careful & Stay Safe</h5>
                <h2>Treatment for coronavirus</h2>
                <p><span>To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019.</span>
                 However, those affected should receive care to relieve symptoms.
                People with serious illnesses should be hospitalized. Most patients recover thanks to supportive care.
                </p>
                <p>Antibiotics do not help, as they do not work against viruses. Treatment aims to relieve the
                symptoms while your body fights the illness. You'll need to stay in isolation, away from other
                people, until you have recovered.</p>
            </div>
            <div class="be-careful-right-container">
                <h6>Self Care</h6>
                <p>If you have mild symptoms, stay at home until you’ve recovered. You can relieve your symptoms if
                you:</p>
                <ul>
                    <li>
                        <div class="icon"><i class="fas fa-arrow-right"></i></div>
                        <div class="txt">Rest and sleep</div>
                    </li>
                    <li>
                        <div class="icon"><i class="fas fa-arrow-right"></i></div>
                        <div class="txt">Keep warm</div>
                    </li>
                    <li>
                        <div class="icon"><i class="fas fa-arrow-right"></i></div>
                        <div class="txt">Drink plenty of liquids</div>
                    </li>
                    <li>
                        <div class="icon"><i class="fas fa-arrow-right"></i></div>
                        <div class="txt">Use a room humidifier or take a hot shower to help ease a sore throat and cough</div>
                    </li>
                </ul>
                <h6>Medical Treatments</h6>
                <p>If you develop a fever, cough and have difficulty breathing, promptly seek medical care. Call
                in advance and tell your health provider of any recent travel or recent contact with travelers.</p>
            </div>
        </div>
    </div>
</section>
</template>

<style>
.be-careful
{
    background-image: url('../assets/shape-a.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 100px 0;
    color: white;
    background-color: #2766bb;
   
}
.be-careful .be-careful-container
{
    display: flex;
    justify-content: space-between;
}
.be-careful .be-careful-container .be-careful-left-container
{
    flex-basis: 75%;
    margin: 0;
}
.be-careful .be-careful-container .be-careful-left-container h5
{
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 7px;
    color: lightblue;
    font-style: bold;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.1em
}
.be-careful .be-careful-container .be-careful-left-container h2
{
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 25px;
    font-family: 'Oswald', sans-serif;
    font-size: 35px;
    font-weight: 900;
}
.be-careful .be-careful-container .be-careful-left-container p span
{
    font-weight: bold;
    color: #fff;
}
.be-careful .be-careful-container .be-careful-left-container p
{
    text-align: left;
    color: whitesmoke;
    margin-bottom: 20px;
    line-height: 1.5em;
}
.be-careful .be-careful-container .be-careful-right-container
{
    flex-basis: 40%;
    margin: 0;
    background-color: #1b47a1;
    padding: 40px;
    border-radius: 5px;
}
.be-careful .be-careful-container .be-careful-right-container h6
{
    text-align: left;
    font-style: bold;
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 16px;
}
.be-careful .be-careful-container .be-careful-right-container p
{
    text-align: left;
    margin-bottom: 10px;
    line-height: 1.5em;
}
.be-careful .be-careful-container .be-careful-right-container ul
{
    list-style: none;
    text-align: left;
}
.be-careful .be-careful-container .be-careful-right-container ul li
{
    display: flex;
    margin-bottom: 10px;
}
.be-careful .be-careful-container .be-careful-right-container ul li .icon
{
    margin-right: 10px;
}

@media (max-width: 950px) {
.be-careful .be-careful-container .be-careful-right-container ul{
    width: 200px
}
}
</style>