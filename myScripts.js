            let totalMoney = 0;
            let clickPower = 1;
            let autoClickPower = 0;
            x1 = 50;
            x5 = 500;
            dragonFrame = 1; // so the computer knows witch frame to display when you click
           
            


            const totMoney = document.getElementById("money");
            const moneyButton = document.getElementById("moneyButton")
            const cp = document.getElementById("power");

            const doubleClickButtonX1 = document.getElementById('clickPowerButtonX1');
            const doubleClickButtonX5 = document.getElementById('clickPowerButtonX5');

            const autoClickerX1 = document.getElementById('autoClickButtonX1');

            const clickPriceX1 = document.getElementById('clickCostX1');
            const clickPriceX5 = document.getElementById('clickCostX5');
            
        

            doubleClickButtonX1.addEventListener("click", buyClickPowerX1);
            doubleClickButtonX5.addEventListener("click", buyClickPowerX5);

            autoClickerX1.addEventListener("click",autoClick);            

            moneyButton.addEventListener("click", updateNum); //just added
            
            


            function updateNum(){ //updates total money and plays clicking animations 
                
                checkClickPower();
                totMoney.textContent = totalMoney; //updates the number
                dragonFlap();// makes the draon flap her wings
            }


            function buyClickPowerX1(){
                if (totalMoney >= x1){

                totalMoney -= x1; // subtracts cost from money
                x1 = Math.round(x1 * 1.195) //updates the cost of the button
                ++clickPower; //increases click power buy one
                clickPriceX1.textContent = x1;
                cp.textContent = clickPower;
                totMoney.textContent = totalMoney;
                }
            }



            function buyClickPowerX5(){
                if (totalMoney >= x5){
                    for (var i = 0; i < 5; i++){
                        ++clickPower;    
                    }
                totalMoney -= x5; // subtracts cost from money
                x5 = Math.round(x5 * 1.195) //updates the cost of the button
                clickPriceX5.textContent = x5;
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
