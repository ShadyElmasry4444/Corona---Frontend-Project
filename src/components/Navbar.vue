<template>
    <div id="header">
        <a href="#"><p class="logo">
            C<i class="fa-solid fa-virus"></i>VID<span>19</span></p></a>
        <div>
            <ul id="navbar">
                <li class="hero"><a href="#hero">Home</a></li>
                <li class="about-corona spread"><a href="#about-corona">About Corona</a></li>
                <li class="symptoms"><a href="#symptoms">Symptoms</a></li>
                <li class="prevention instructions hand-washing"><a href="#prevention">Prevention</a></li>
                <li class="treatment"><a href="#treatment">Treatment</a></li>
                <li class="faq"><a href="#faq">FAQ</a></li>
                <li class="news"><a href="#news">News</a></li>
                <a href="#dos-and-donts"><button type="button" class="btn btn-primary btn-lg">Do's and Don'ts</button></a>
                <a href="#" id="close" onclick="openBar()"><i class="fa-solid fa-xmark"></i></a>
            </ul>
        </div>
        <div id="mobile">
            <i id="bar" class="fa-solid fa-bars media" onclick="openBar()"></i>
        </div>
    </div>
</template>

<style>
#header ul li.active {
  background-color: rgb(194, 71, 71);
  border-radius: 5px;
  transition: 0.3s ease background-color;
  
}
#header ul li.active a {
  color: rgb(255, 255, 255) !important;
  padding: 5px;
}

#header a {
    text-decoration: none;
}
.logo {
    font-size: 50px;
    font-style: bold;
    font-weight: 600;
    color: #470303;
}

.logo i {
    color:#f53030;
    line-height: 150%;
}
.logo span {
    color: #990505;
    
}
#navbar button {
    font-size: 16px;
    font-style: bold;
    font-weight: 600;
    padding: 14px 30px 14px 30px;
    border-radius: 25px;
    background: #990505;
    border: #990505;
    margin: auto;
    margin-left: 5px;
    align-self: center;
}
#navbar button:hover {
    background: #470303;
}

#bar {
    cursor: pointer;
}

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  background-color: #edeff7;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
}
.logo {
  display: flex;
}

#header a:nth-child(1) {
  position: relative;
  display: flex;
}

#header #navbar {
  display: flex;
}
#header #navbar li {
  padding: 0 20px;
  list-style: none;
  position: relative;
  margin: auto;
}
#header #navbar li a {
  text-decoration: none;
  text-transform: capitalize;
  color: #470303;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;
}

#header #navbar li a:hover {
  color: #990505;
}

#header #navbar li a:hover::after {
  content: "";
  width: 30%;
  height: 2px;
  background-color: #990505;
  bottom: -10%;
  left: 20px;
  position: absolute;
}

#header #navbar li a.active::after {
  color: #fff;
}

#header #mobile {
  display: none;
  align-items: center;
}
#close {
  display: none;
}

.scrollActive {
  background-color: #fff !important;
  transition: 0.5s background-color;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  /* animation: scrollActiveAnimation 1s; */
}

/* @keyframes scrollActiveAnimation {
  from {
    background: transparent;
  }
  to {
    background: white;
  }
}
@keyframes scrollInactiveAnimation {
  from {
    background: white;
  }
  to {
    background: transparent;
  }
} */

.scrollInactive {
background: #edeff7;
}


.overlay {
  opacity: 0.5;
  transition: 0.3s;
}

</style>