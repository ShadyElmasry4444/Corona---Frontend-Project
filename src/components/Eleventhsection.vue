<template>
<section class="News section-head" id="news">
    <div class="container">
        <div class="News-msg-container">
            <h5>Recent From Blog</h5>
            <h2>Latest Update</h2>
        </div>
        <div class="News-imgs-container">
            <div class="News-img">
                <div class="img">
                    <img src="../assets/blog-a.jpg">
                </div>
                <div class="img-msg">
                    <h3>Caring for someone at home</h3>
                    <p>Most people who get sick with COVID-19 will have only mild illness and should recover at home. Care at home can help stop the spread of COVID-19</p>
                </div>
            </div>
            <div class="News-img">
                <div class="img">
                    <img src="../assets/blog-b.jpg">
                </div>
                <div class="img-msg">
                    <h3>15 ways to keep safe and healthy</h3>
                    <p>Most people who get sick with COVID-19 will have only mild illness and should recover at home. Care at home can help stop the spread of COVID-19</p>
            </div>
        </div>
            <div class="News-img">
                <div class="img">
                    <img src="../assets/blog-c.jpg">
                </div>
                <div class="img-msg">
                    <h3>If You Think You Are Sick</h3>
                    <p>If you are sick with COVID-19 or think you might have it, follow the steps below to help protect other people in your home and community.</p>
            </div>
        </div>
    </div>
</div>
</section>
</template>


<style>
.News
{
    padding: 100px 0;
    background-color: #f7f9fe;
}
.News .News-msg-container
{
    text-align: center;
    margin: auto;
}
.News .News-msg-container h5
{
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 7px;
    color: #990505;
    letter-spacing: 0.1em;
}
.News .News-msg-container h2
{
    text-transform: uppercase;
    margin-bottom: 25px;
    color: #461414;
    font-size: 42px;
    font-family: 'Oswald', sans-serif;
    font-weight: 900;
}
.News .News-imgs-container
{
    display: flex;
    justify-content: space-between;
}
.News .News-imgs-container .News-img
{
    flex-basis: 31%;
    margin: 0;
    background-color: white;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0px 5px 40px 0px rgba(142, 80, 80, 0.144);
    
}
.News .News-imgs-container .News-img img
{
    max-width: 100%;
    border-radius: 5px;
    filter: opacity(0.4) drop-shadow(0 0 0 rgb(122, 2, 2));
}
.News .News-imgs-container .News-img
{
    position: relative;
    overflow: hidden;
}
.News .News-imgs-container .News-img .img-msg h3
{
    margin: 20px 0;
    text-align: center;
    color: #461414;
    cursor: pointer;
}

.News .News-imgs-container .News-img .img-msg p
{
    text-align: center;
    color: #461414;
    line-height: 1.5em;
}
</style>

