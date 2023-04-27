            let totalMoney = 0;
            let clickPower = 1;
            let autoClickPower = 0;
            x = 50;
            dragonFrame = 1; // so the computer knows witch frame to display when you click
           
            


            const totMoney = document.getElementById("money");
            const moneyButton = document.getElementById("moneyButton")
            const doubleClickButtonX1 = document.getElementById('clickPowerButtonX1');
            const clickPriceX1 = document.getElementById('clickCostX1')
            const cp = document.getElementById("power");


            doubleClickButtonX1.addEventListener("click", buyClickPowerX1);
            moneyButton.addEventListener("click", updateNum);
            


            function updateNum(){ //updates total money and plays clicking animations 
                
                checkClickPower();
                totMoney.textContent = totalMoney; //updates the number
                dragonFlap();// makes the draon flap her wings
            }


            function buyClickPowerX1(){
                if (totalMoney >= x){

                totalMoney -= x; // subtracts cost from money
                x = Math.round(x * 1.195) //updates the cost of the button
                ++clickPower; //increases click power buy one
                clickPriceX1.textContent = x;
                cp.textContent = clickPower;
                totMoney.textContent = totalMoney;
                }
            }


            function dragonFlap(){ //animates the main image 
                if (dragonFrame === 1){
                    document.getElementById("moneyButton").src = "dragonflap.png";
                    dragonFrame = 2;
                    
                }else if (dragonFrame = 2){
                    document.getElementById("moneyButton").src = "dragon.png";
                    dragonFrame = 1; 
                }
            }

            function checkClickPower(){
                for (var i = 0; i < clickPower; i++){
                    ++totalMoney;    
                }
            }