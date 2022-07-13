<template>
    <section class="spread section-head" id="spread">
    <div class="spread-container">
        <div class="spread-info">
            <h5>How coronavirus is spread</h5>
                <h2>Transmission of COVID-19</h2>
                <p>
                    Because it's a new illness, we do not know exactly how coronavirus spreads from person to person.
                    Similar viruses are spread in cough droplets.
                </p>
        </div>
        <div class="spread-imgs-container">
            <div class="spread-imgs">
                <div class="spread-img">
                    <img src="../assets/spread-a.png">
                </div>
                <div class="spread-img-info">
                    <h3>Person-to-person spread at close contact with infected</h3>
                        <p>
                            The coronavirus is thought to spread mainly from person to person. This can happen between
                            people who are in close contact with one another.
                        </p>
                </div>
            </div>
            <div class="spread-imgs">
                <div class="spread-img">
                    <img src="../assets/spread-b.png">
                </div>
                <div class="spread-img-info">
                    <h3>Touching or contact with infected surfaces or objects</h3>
                        <p>
                            A person can get COVID-19 by touching a surface or object that has the virus on it and then
                            touching their own mouth, nose or possibly their eyes.
                        </p>
                </div>
            </div>
            <div class="spread-imgs">
                <div class="spread-img">
                    <img src="../assets/spread-c.png">
                </div>
                <div class="spread-img-info">
                    <h3>Droplets from an infected persons' coughs or sneezes</h3>
                        <p>
                            The coronavirus is thought to spread mainly from person to person. This can happen between
                            people who are in close contact with one another.
                        </p>
                </div>
            </div>
        </div>
        <div class="spread-btn">
            <a href="#faq"><button type="button" class="btn btn-primary btn-lg"><i class="far fa-question-circle"></i>&nbsp; Have a question about spreading?</button></a>
        </div>
    </div>
</section>
</template>

<style>
.spread-container {
  padding: 100px 0;
  background-color: #f7f9fe;
}
.spread-container .spread-info {
  text-align: center;
  margin: auto;
  width: 57%;
}
.spread-container .spread-info h5 {
  color: #990505;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 0.1em;
  margin-bottom: 7px;
}
.spread-container .spread-info h2 {
  color: #461414;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 25px;

}
.spread-container .spread-info p {
  color: #461414;
  margin-bottom: 60px;
  line-height: 1.5em;
 
}
.spread-container .spread-imgs-container {
  display: flex;
  justify-content: space-between;
  margin: 50px 150px 50px 205px;
  width: 80%;
}
.spread-container .spread-imgs-container .spread-imgs {
  flex-basis: 31%;
  margin: 0 auto 25px;
  border-radius: 20px;
  box-shadow: 0px 5px 40px 0px rgba(12, 7, 7, 0.24);
}
.spread-container .spread-imgs-container .spread-img img {
  max-width: 50%;
  border-bottom: 2px solid;
  filter: opacity(0.4) drop-shadow(0 0 0 rgb(122, 2, 2));
}
.spread-container .spread-imgs-container .spread-imgs .spread-img-info {
  background-color: #fff;
  padding: 25px;
  border-radius: 20px;
}
.spread-container .spread-imgs-container .spread-imgs .spread-img-info h3 {
  color: #990505;
  font-size: 18px;
  font-style: bold;
  font-weight: 700;
  margin-bottom: 7px;
  text-align: left;
}
.spread-container .spread-imgs-container .spread-imgs .spread-img-info p {
  color: #461414;
  line-height: 1.5em;
  text-align: left;
}
.spread-container .spread-btn {
  margin: 20px auto 0;
  width: fit-content;
}
.spread-container .spread-btn button {
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

</style>