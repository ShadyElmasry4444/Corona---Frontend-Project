<template>
    <section class="about-corona section-head" id="about-corona">
    <div class="container">
        <div class="about-corona-info">
            <div class="about-corona-left-info">
                <h5>About the disease</h5>
                <h2>Coronavirus (COVID-19)</h2>
                <p>
                    <span>COVID-19 is a new illness that can affect your lungs and airways.</span>
                    It's caused by a virus called coronavirus. It was discovered in December 2019 in Wuhan, Hubei,
                    China.
                </p>
                <p>Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and
                breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute
                respiratory syndrome, kidney failure and even death.</p>
                <p>Standard recommendations to prevent infection spread include regular hand washing, covering
                mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact
                with anyone showing symptoms of respiratory illness such as coughing and sneezing.</p>
            </div>
            <div class="about-corona-right-info">
                <ul>
                    <li>What you need to know</li>
                    <a href="#spread">
                        <li><span>How Coronavirus is Spread</span>
                            <i class="fas fa-arrow-right"></i>
                        </li>
                    </a>
                    <a href="#symptoms">
                        <li><span>Symptoms of Coronavirus</span>
                            <i class="fas fa-arrow-right"></i>
                        </li>
                    </a>
                    <a href="#dos-and-donts">
                        <li><span>How to Protect Yourself</span>
                            <i class="fas fa-arrow-right"></i>
                        </li>
                    </a>
                    <a href="#treatment">
                        <li><span>Treatment for Coronavirus</span>
                            <i class="fas fa-arrow-right"></i>
                        </li>
                    </a>
                    <a href="#faq">
                        <li><span>Myths Regarding Coronavirus</span>
                            <i class="fas fa-arrow-right"></i>
                        </li>
                    </a>
                    <a href="#faq">
                        <li><span>Questions & Answers</span>
                            <i class="fas fa-arrow-right"></i>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</section>
</template>


<style>
.about-corona {
  padding: 100px 0;
}

.about-corona .about-corona-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.about-corona .about-corona-info .about-corona-left-info {
  flex-basis: 50%;
  text-align: left;
  margin: 0;
}
.about-corona .about-corona-info .about-corona-left-info h5 {
  color: #991c1c;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 7px;
}
.about-corona .about-corona-info .about-corona-left-info h2 {
  color: #991c1c;
  font-size: 35px;
  font-weight: 900;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  margin-bottom: 25px;
}
.about-corona .about-corona-info .about-corona-left-info p span {
  font-weight: bold;
}
.about-corona .about-corona-info .about-corona-left-info p:first-of-type {
  color: #461414;
  font-size: 19px;
  line-height: 1.7em;
  margin-bottom: 20px;
}
.about-corona .about-corona-info .about-corona-left-info p {
  color: #461414;
  margin-bottom: 20px;
  line-height: 1.5em;
  text-align: left;
}
.about-corona .about-corona-info .about-corona-right-info {
  flex-basis: 32%;
  margin: 0;
}
.about-corona .about-corona-info .about-corona-right-info ul li i {
 align-self: center;
}
.about-corona .about-corona-info .about-corona-right-info ul {
  list-style: none;
  border-radius: 15px;
  border: 1px solid #e7e8ff;
  box-shadow: 0px 5px 40px 0px rgba(142, 80, 80, 0.24);
  padding-left: 0;
}
.about-corona .about-corona-info .about-corona-right-info ul li {
  font-weight: bold;
  color: #990505;
  font-size: 20px;
  border-bottom: 1px solid #e7e8ff;
  padding: 20px 30px;
}
.about-corona .about-corona-info .about-corona-right-info ul a {
  text-decoration: none;
  color: #461414;
  border-bottom: 1px solid #e7e8ff;
}
.about-corona .about-corona-info .about-corona-right-info ul a li {
  display: flex;
  justify-content: space-between;
  color: #461414;
  font-weight: normal;
  font-size: 16px;
}
</style>