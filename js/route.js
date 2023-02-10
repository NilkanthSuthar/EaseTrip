
let submitbtn = document.getElementById("submitbtn");
document.getElementById("submitbtn").addEventListener("click", function(event){
    event.preventDefault()
  });
submitbtn.addEventListener("onclick", showresult);
function showresult(){

    let string=`<div class="ml-5">
    <h2>Results Are Following :-</h2>
    <h3>Fastest route result:-</h3>
</div>
    <div class="resultdisplay  mb-4 mt-4">
        <div class="row m-1">
            <div class="col-3 col-lg-1 d-flex justify-content-center m-0">
                <spam class="busimg"><i class="bi bi-truck-front"></i></spam>
            </div>
            <div class="col-9 col-lg-5 m-0 p-0">
                <div class="totalbus">
                    <span class="busnumbertotal">Total number of buses :-</span>
                    <span class="busnumbertotal">4</span>
                </div>
                <div class="busnumbersdiv">
                    <span class="busnumber"><i class="bi bi-truck-front"></i>3014</span>
                    <span class="busnumber"><i class="bi bi-truck-front"></i>3015</span>
                    <span class="busnumber"><i class="bi bi-truck-front"></i>3087</span>


                </div>

                <div class="sourceanddestination">
                    <span class="text">From:-</span>
                    <span class="text">fatehgunj</span>
                </div>
                <div class="sourceanddestination">

                    <span class="text">Destination:-</span>
                    <span class="text">akota</span>
                </div>

            </div>
            <div class="col-6 col-md-6 col-lg d-flex justify-content-center">
                <div class="startingtime text-center">
                    <span class="time">Starting Time</span>
                    <span class="time">18:30 pm</span>

                </div>
            </div>
            <div class="col-6  col-md-6  col-lg d-flex justify-content-center">

                <div class="endingtime text-center">
                    <span class="time">Journey Time</span>
                    <span class="time">28 min</span>

                </div>

            </div>
            <div class="col-6  col-md-6  col-lg d-flex justify-content-center">

                <div class="endingtime text-center">
                    <span class="time">Total Waiting time</span>
                    <span class="time">8 min</span>

                </div>

            </div>
            <div class="col d-flex justify-content-center ">
                <div class="row p-0 m-0">
                    <div class="col-12">
                        <a href="./progress.html" class="viewmore">View More</a>

                    </div>
                    <div class="col-12 p-0 m-0">
                        <span class="time" style="color:#333333">Price:- 55 Rs</span>

                    </div>
                </div>


            </div>
            <div class="col-12">
                <span class="" style="font-weight: 600; margin: 0px 20px;">Waiting Time</span>

                <span class="" style="font-weight: 600; margin: 0px 20px;"><i class="bi bi-truck-front"></i>3014-<i
                        class="bi bi-truck-front"></i>3015 4 min</span>
                <span class="" style="font-weight: 600; margin: 0px 20px;"><i class="bi bi-truck-front"></i>3015-<i
                        class="bi bi-truck-front"></i>3087 7 min</span>




            </div>
        </div>
    </div>
    <div class="ml-5">
    <h3>Least Number of bus changes:-</h3>
    </div>
    <div class="resultdisplay  mb-4 mt-4">
        <div class="row m-1">
            <div class="col-3 col-lg-1 d-flex justify-content-center m-0">
                <spam class="busimg"><i class="bi bi-truck-front"></i></spam>
            </div>
            <div class="col-9 col-lg-5 m-0 p-0">
                <div class="totalbus">
                    <span class="busnumbertotal">Total number of buses :-</span>
                    <span class="busnumbertotal">4</span>
                </div>
                <div class="busnumbersdiv">
                    <span class="busnumber"><i class="bi bi-truck-front"></i>3014</span>



                </div>

                <div class="sourceanddestination">
                    <span class="text">From:-</span>
                    <span class="text">fatehgunj</span>
                </div>
                <div class="sourceanddestination">

                    <span class="text">Destination:-</span>
                    <span class="text">akota</span>
                </div>

            </div>
            <div class="col-6 col-md-6 col-lg d-flex justify-content-center">
                <div class="startingtime text-center">
                    <span class="time">Starting Time</span>
                    <span class="time">18:43 pm</span>

                </div>
            </div>
            <div class="col-6  col-md-6  col-lg d-flex justify-content-center">

                <div class="endingtime text-center">
                    <span class="time">Journey Time</span>
                    <span class="time">40 min</span>

                </div>

            </div>
            <div class="col-6  col-md-6  col-lg d-flex justify-content-center">

                <div class="endingtime text-center">
                    <span class="time">Total Waiting time</span>
                    <span class="time">5 min</span>

                </div>

            </div>
            <div class="col d-flex justify-content-center ">
                <div class="row p-0 m-0">
                    <div class="col-12">
                        <a href="./progress.html" class="viewmore">View More</a>

                    </div>
                    <div class="col-12 p-0 m-0">
                        <span class="time" style="color:#333333">Price:- 50 Rs</span>

                    </div>
                </div>


            </div>
        </div>
    </div>

`
document.getElementById("resultshowdiv").innerHTML=string;
}