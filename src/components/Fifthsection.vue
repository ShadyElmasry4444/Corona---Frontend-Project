<template>
    <section class="protect section-head" id="prevention">
    <div class="container">
        <div class="protect-msg">
            <h5>How to Protect Yourself?</h5>
            <h2>Prevention & advice</h2>
            <p>
                There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19).
                <span>The best way to
                prevent illness is to avoid being exposed to this virus.</span> Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and
                local public health authority
            </p>
        </div>
        <div class="protect-imgs">
            <div class="protect-img-container">
                <div class="protect-img">
                    <img src="../assets/advice-a.png">
                </div>
                <div class="protect-img-msg">
                    <h3>Wash your hands frequently</h3>
                    <p>
                        Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with
                            soap and water for at least 20 seconds.
                    </p>
                </div>
            </div>
            <div class="protect-img-container">
                <div class="protect-img">
                    <img src="../assets/advice-b.png">
                </div>
                <div class="protect-img-msg">
                    <h3>Maintain social distancing</h3>
                    <p>
                        Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or
                        sneezing. If you are too close, get chance to infected.
                    </p>
                </div>
            </div>
                <div class="protect-img-container">
                    <div class="protect-img">
                        <img src="../assets/advice-c.png">
                    </div>
                    <div class="protect-img-msg">
                        <h3>Avoid touching face</h3>
                        <p>
                            Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your
                            eyes, nose or mouth and can make you sick.
                        </p>
                    </div>
                </div>
                <div class="protect-img-container">
                    <div class="protect-img">
                        <img src="../assets/advice-d.png">
                    </div>
                    <div class="protect-img-msg">
                        <h3>Practice respiratory hygiene</h3>
                        <p>
                            Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or
                            tissue when cough or sneeze.
                        </p>
                    </div>
                </div>
        </div>
        <div class="bottom-protect-btn">
            <a href="#instructions"><button type="button" class="btn btn-primary btn-lg">Check how to wash your hand <i class="fas fa-arrow-right"></i></button></a>
            <a href="#faq">Q&A on Coronavirus <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
</section>
</template>


<style >
.protect
{
    padding: 100px 0;
    background-color: #f7f9fe;
}
.protect .protect-msg
{
    margin: auto;
    text-align: center;
    width: 70%;
}
.protect .protect-msg h5
{
    text-transform: uppercase;
    margin-bottom: 7px;
    font-size: 18px;
    color: #990505;
    letter-spacing: 0.1em;
}
.protect .protect-msg h2
{
    text-transform: uppercase;
    margin-bottom: 25px;
    font-family: 'Oswald', sans-serif;
    font-size: 42px;
    font-weight: 900;
    color: #461414;
}
.protect .protect-msg p
{
    color: #461414;
    line-height: 1.5em;
}
.protect .protect-msg p span
{
    font-weight: bold;
}
.protect .protect-imgs
{
    display: flex;
    margin: 70px 0;
}
.protect .protect-imgs .protect-img-container
{
    flex-basis: 22.1%;
    margin: 0 auto 50px
}
.protect .protect-imgs .protect-img-container .protect-img
{
    width: 120px;
    margin: auto;
}
.protect .protect-imgs .protect-img-container .protect-img img
{
    max-width: 100%;
    border-radius: 50%;
    box-shadow: 0px 5px 40px 0px rgb(80 101 142 / 8%);
    filter: opacity(0.4) drop-shadow(0 0 0 rgb(122, 2, 2));
}
.protect .protect-imgs .protect-img-container .protect-img-msg
{
    margin-top: 20px;
    text-align: center;
}
.protect .protect-imgs .protect-img-container .protect-img-msg h3
{
    color: #461414;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700 !important;
}
.protect .protect-imgs .protect-img-container .protect-img-msg p
{
    color: #461414;
    line-height: 1.5em;
}
.protect .bottom-protect-btn
{
    display: flex;
    width: 65%;
    margin: 100px auto 0;
    align-items: center;
    justify-content: space-around;
}
.protect .bottom-protect-btn a
{
    text-decoration: none;
    color: #990505;
    font-style: italic;
    font-weight: bold;
    flex-basis: 50%;
    margin: 0;
}
.protect .bottom-protect-btn a:last-of-type
{
    flex-basis: 35%;
    margin: 0;
}
.protect .bottom-protect-btn button
{
    padding: 13px 30px;
    font-size: 16px;
    border: none;
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    font-weight: 550;
    cursor: pointer;
    padding: 10px 30px 10px 30px;
    margin-left: 5px;
}
.protect .bottom-protect-btn svg
{
    margin-left: 10px;
}
</style>