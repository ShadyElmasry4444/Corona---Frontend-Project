<template>
    <section class="hand-washing-steps section-head" id="hand-washing">
    <div class="container">
        <div class="hand-washing-steps-container">
            <div class="hand-washing-steps-list">
                <h2>Take steps to protect others</h2>
                <ul>
                    <li>
                        <div class="check-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="more-info">
                            <span>Stay home if you’re sick</span> - Stay home if you are sick, except to get medical
                            care.
                        </div>
                    </li>
                    <li>
                        <div class="check-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="more-info">
                            <span>Cover your mouth and nose</span> - with a tissue when you cough or sneeze (throw
                            used tissues in the trash) or use the inside of your elbow.
                        </div>
                    </li>
                    <li>
                        <div class="check-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="more-info">
                            <span>Wear a facemask if you are</span> - You should wear a facemask when you are
                            around other people (e.g., sharing a room or vehicle) and before you enter a healthcare
                            provider’s.
                        </div>
                    </li>
                    <li>
                        <div class="check-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="more-info">
                            <span>Clean AND disinfect frequently touched surfaces daily</span> - This includes
                            phones, tables, light switches, doorknobs, countertops, handles, desks, toilets,
                            faucets, and sinks.
                        </div>
                    </li>
                    <li>
                        <div class="check-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="more-info">
                            <span>Clean the dirty surfaces</span> - Use detergent or soap and water prior to
                            disinfection.
                        </div>
                    </li>
                    <li>
                        <div class="check-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="more-info">
                            <span>Stay informed about the local COVID-19 situation</span> - Get up-to-date
                            information about local COVID-19 activity from <a href="#">public health officials.</a>
                        </div>
                    </li>
                    <li>
                        <div class="check-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="more-info">
                            <span>Dedicated, lined trash can</span> - If possible, dedicate a lined trash can for
                            the ill person. Use gloves when removing garbage bags, and handling & disposing of
                            trash.
                        </div>
                    </li>
                </ul>
            </div>
            <div class="hand-washing-steps-img">
                <img src="../assets/steps.png">
            </div>
        </div>
    </div>
</section>
</template>

<style>
.hand-washing-steps
{
    background-color: #f7f9fe;
}
.hand-washing-steps .hand-washing-steps-container
{
    display: flex;
    background-color: #fff;
    box-shadow: 5px 5px 40px 5px rgba(142, 80, 80, 0.212);
    position: relative;
    
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-list
{
    flex-basis: 60%;
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-list h2
{
    margin-top: 30px;
    margin-left: 30px;
    color: #461414;
    font-size: 30px;
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-list ul
{
    text-align: left;
    list-style: none;
    margin: 40px;
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-list ul li
{
    display: flex;
    color: #693d3d;
    margin-bottom: 20px;
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-list li .check-icon i
{
    margin-right: 10px;
    color: #3dca50;
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-list li .more-info span
{
    font-weight: bold;
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-list li a
{
    color: #2a81ea;
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-img
{
    flex-basis: 35%;
    padding: 30px;
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-img img
{
    max-width: 100%;
}


@media (max-width: 950px) {
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-img img {
display: none;
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-img {
display:none;
}
.hand-washing-steps .hand-washing-steps-container .hand-washing-steps-list {
    flex-basis: 100%;
    margin: auto;
}
}
</style>