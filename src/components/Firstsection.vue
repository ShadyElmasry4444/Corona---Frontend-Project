<template>
    <section id="hero">
    <div>
    <h1>CORONA</h1>
    <div class="vertical-words">
    <h3>COVID-19</h3>
    <h1>VIRUS</h1>
    </div>
    </div>
    <p>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 1 March 2020.</p>
    <div id="hero-buttons">
    <a href="#prevention"><button type="button" class="btn btn-primary btn-lg">How To Protect <i class="fa-solid fa-shield-halved"></i></button></a>
    <a href="#about-corona"><button type="button" class="btn btn-primary btn-lg">About COVID-19 &nbsp;<i class="fa-solid fa-arrow-right"></i></button></a>
    </div>
    <div class="statistics">
    <div class="vertical-words">
    <h4>WORLDWIDE CASES</h4>
    <h3>8,949,671</h3>
    </div>
    <div class="vertical-words">
    <h4>DEATHS</h4>
    <h3>467,432</h3>
    </div>
    <div class="vertical-words">
    <h4>RECOVERED</h4>
    <h3>4,556,091</h3>
    </div>
    </div>
    <p style="font-size: 12px; font-style: italic; color: grey;">*Last updated: Jun 21, 2020, 09:24 AM America/Chicago</p>

    </section>
</template>


<style>
#hero .statistics .vertical-words{
padding: 40px;
width: 33%;
justify-content: space-between;
font-family: 'Oswald', sans-serif;
}

#hero {
  background-image: url(../assets/header-a.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  height: 90vh;
  width: 100%;
  margin: auto;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
#hero h1 {
  color: #461414;
  font-size: 6rem;
  font-style: bold;
  font-family: "Oswald", sans-serif;
}

#hero h3 {
  color: #990505;
  font-family: "Oswald", sans-serif;
}
#hero div {
  display: flex;
  flex-direction: row;
}
#hero .vertical-words {
  display: flex;
  flex-direction: column;
}
#hero button {
  border: none;
  border-radius: 25px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  padding: 14px 30px 14px 30px;
  margin-left: 5px;
  text-transform: capitalize;
}

#hero a:nth-child(2) button {
  color: #990505;
  background-color: transparent;

}

#hero p:nth-child(2) {
  width: 30%;
  text-align: left;
}




</style>