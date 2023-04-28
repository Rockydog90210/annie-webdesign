            let totalMoney = 0;
            let clickPower = 1;
            let autoClickPower = 0;
            x1 = 50;
            x5 = 350;
			y1 = 30;
            dragonFrame = 1; // so the computer knows witch frame to display when you click
           AC = false;
            


            const totMoney = document.getElementById("money");
            const moneyButton = document.getElementById("moneyButton");
            const cp = document.getElementById("power");
			const ac = document.getElementById("auto");

            const doubleClickButtonX1 = document.getElementById('clickPowerButtonX1');
            const doubleClickButtonX5 = document.getElementById('clickPowerButtonX5');

            const autoClickerY1 = document.getElementById('autoClickButtonY1');

            const clickPriceX1 = document.getElementById('clickCostX1');
            const clickPriceX5 = document.getElementById('clickCostX5');
			
			const autoPriceY1 = document.getElementById('autoCostY1');
            
        

            doubleClickButtonX1.addEventListener("click", buyClickPowerX1);
            doubleClickButtonX5.addEventListener("click", buyClickPowerX5);

            autoClickerY1.addEventListener("click", autoClickY1);            

            moneyButton.addEventListener("click", updateNum); 
            
            


            function updateNum(){ //updates total money and plays clicking animations 
                
                checkClickPower();
                totMoney.textContent = totalMoney; //updates the number
                dragonFlap();// makes the draon flap her wings
            }


            function buyClickPowerX1(){
                if (totalMoney >= x1){

                totalMoney -= x1; // subtracts cost from money
                x1 = Math.round(x1 * 1.195); //updates the cost of the button
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
			
			function checkClickPower(){
                for (var i = 0; i < clickPower; i++){
                    ++totalMoney;    
                }
            }
			
			//autoclickers
			
			function autoClickY1(){
				if (totalMoney >=y1){
					totalMoney -= y1;
					y1 = Math.round(y1 * 1.915)
					++autoClickPower;
					//function to update were it shows how many auto clicks you have 
					totMoney.textContent = totalMoney;
					autoPriceY1.textContent = y1;
					ac.textContent = autoClickPower;
					
					if (AC <= false){
						setInterval(autoClick, 1000); 
						AC = true;
					}
				}
			}
			
			function autoClick(){
				
				for (var i = 0; i < autoClickPower; i++){
                    ++totalMoney; 
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

            
