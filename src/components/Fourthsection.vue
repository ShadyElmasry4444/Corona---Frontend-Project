<template>
    <section class="symptoms section-head" id="symptoms">
    <div class="container">
            <div class="symptoms-info">
            <h5>WHAT ARE THE SYMPTOMS OF COVID-19?</h5>
                <h2>SYMPTOMS OF CORONAVIRUS</h2>
                <p>
                    The most common symptoms of COVID-19 are fever, tiredness and a dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and behin gradually. Also the symptoms may appear 2-14 days after exposure.
                </p>
        </div>
                <div class="symptoms-imgs-container">
            <div class="symptoms-img">
                <div class="symptoms-img-info">
                    <img src="../assets/symptom-a.png">
                </div>
                <div class="symptoms-img-more-info">
                    <h3>Fever</h3>
                        <p>
                            <span>High Fever</span>– this means you feel hot to the touch on your chest or back (you do not
                            need to measure your temperature). It is a common sign and also may appear in 2-10 days if
                            you affected.
                        </p>
                </div>
            </div>
            <div class="symptoms-img">
                <div class="symptoms-img-info">
                    <img src="../assets/symptom-b.png">
                </div>
                <div class="symptoms-img-more-info">
                    <h3>Cough</h3>
                        <p>
                            <span>Continuous Cough</span> – this means coughing a lot for more than an hour, or 3 or
                            more coughing episodes in 24 hours (if you usually have a cough, it may be worse than
                            usual).
                        </p>
                </div>
            </div>
            <div class="symptoms-img">
                <div class="symptoms-img-info">
                    <img src="../assets/symptom-c.png">
                </div>
                <div class="symptoms-img-more-info">
                    <h3>Shortness of Breath</h3>
                        <p>
                            <span>Difficulty breathing</span> – It was found that approximately 1 out of every 6 people who gets COVID-19 becomes
                            seriously ill and develops difficulty breathing or shortness of breath.
                        </p>
                </div>
            </div>
        </div>
        <div class="bottom-symptoms">
            <div class="symptoms-moreinfo symptoms-child">
                <i class="fas fa-exclamation-triangle"></i>
                <p>
                    <span>Stay at home and call your doctor:</span> If you think you have been exposed to COVID-19
                    and developed a fever or any symptoms, such as coughing or difficulty breathing, call your
                    healthcare provider as soon as possible for medical advice.
                </p>
            </div>
        <div class="symptom-btn">
            <a href="#faq"><button type="button" class="btn btn-primary btn-lg"><i class="far fa-question-circle"></i>&nbsp; Have a question? Find an answer</button></a>
            
        </div>
        </div>
    </div>
    </section>
</template>



<style>

.symptoms
{
    padding: 100px 0;
}
.symptoms .symptoms-info
{
    margin: auto;
    text-align: center;
    width: 63%;
}
.symptoms .symptoms-info h5
{
    color: #990505;
    font-size: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 7px;
}
.symptoms .symptoms-info h2
{
    color: #461414;
    font-size: 42px;
    font-family: 'Oswald', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 25px;
}
.symptoms .symptoms-info p
{
    color: #461414;
    margin-bottom: 60px;
    line-height: 1.5em;
}
.symptoms .symptoms-imgs-container
{
    display: flex;
    justify-content: space-between;
    margin: 120px 0;
}
.symptoms .symptoms-imgs-container .symptoms-img
{
    flex-basis: 33%;
    position: relative;
    margin: 0;
    box-shadow: 0px 5px 40px 0px rgba(142, 80, 80, 0.08);
    border-bottom: 3px solid #fff;
    border-radius: 5px;
}
.symptoms .symptoms-imgs-container .symptoms-img .symptoms-img-info
{
    width: 80px;
    position: absolute;
    top: -20%;
    right: 5%;
}
.symptoms .symptoms-imgs-container .symptoms-img .symptoms-img-info img
{
    max-width: 100%;
    border-radius: 50%;
    box-shadow: 1px 5px 25px 0px rgba(209, 62, 62, 0.397);
    filter: opacity(0.4) drop-shadow(0 0 0 rgb(122, 2, 2));
}
.symptoms .symptoms-imgs-container .symptoms-img .symptoms-img-more-info
{
    padding: 25px;
    border-top: 3px solid #fff;
    border-radius: 20px;
    box-shadow: 0px 5px 40px 0px rgba(12, 7, 7, 0.24);
}

.symptoms .symptoms-imgs-container .symptoms-img .symptoms-img-more-info h3
{
    color: #990505;
    margin-bottom: 10px;
    font-size: 16px;
    font-style: bold;
    font-weight: 700;
}
.symptoms .symptoms-imgs-container .symptoms-img .symptoms-img-more-info p
{
    color: #461414;
    line-height: 1.5em;
}
.symptoms .symptoms-imgs-container .symptoms-img .symptoms-img-more-info p span
{
    font-weight: bold
}
.bottom-symptoms {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 130px;
}
.symptoms-moreinfo {
    display: flex;
    align-items: center;
}
.symptoms-moreinfo.symptoms-child {
    flex-basis: 60%;
    margin: 0;
}
.symptoms-moreinfo i {
    color: #990505;
    font-size: 120px;
    margin-right: 10px;
    align-self: flex-start;
}
.bottom-symptoms .symptoms-moreinfo p {
    color: #461414;
    line-height: 1.5em;
    font-style: italic;
    text-align: left;
    margin-bottom: 0;
}
.bottom-symptoms .symptoms-moreinfo p span
{
    color: #461414;
    font-weight: bold;
    font-style: normal;
}
.bottom-symptoms-btn.symptoms-child {
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-basis: 34%;
    margin: 0;
}


.symptom-btn button {
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


@media (max-width: 950px) {
.symptoms-moreinfo.symptoms-child {
display: inline-block;
}
.symptom-btn {
width: 50%;
}
}

</style>