            let totalMoney = 0;
            let clickPower = 1;
            let autoClickPower = 0;
            x1 = 50;
            x5 = 350;
			x10 = 1000;
			
			y1 = 30;
			y5 = 300;
            dragonFrame = 1; // so the computer knows witch frame to display when you click
           AC = false;
            


            const totMoney = document.getElementById("money");
            const moneyButton = document.getElementById("moneyButton");
            const cp = document.getElementById("power");
			const ac = document.getElementById("auto");

            const doubleClickButtonX1 = document.getElementById('clickPowerButtonX1');
            const doubleClickButtonX5 = document.getElementById('clickPowerButtonX5');
			const doubleClickButtonX10 = document.getElementById('clickPowerButtonX10');

            const autoClickerY1 = document.getElementById('autoClickButtonY1');
			const autoClickerY5 = document.getElementById('autoClickButtonY5');
			
            const clickPriceX1 = document.getElementById('clickCostX1');
            const clickPriceX5 = document.getElementById('clickCostX5');
			const clickPriceX10 = document.getElementById('clickCostX10');
			
			const autoPriceY1 = document.getElementById('autoCostY1');
            const autoPriceY5 = document.getElementById('autoCostY5');
        

            doubleClickButtonX1.addEventListener("click", buyClickPowerX1);
            doubleClickButtonX5.addEventListener("click", buyClickPowerX5);
			doubleClickButtonX10.addEventListener("click", buyClickPowerX10);

            autoClickerY1.addEventListener("click", autoClickY1);
			autoClickerY5.addEventListener("click", autoClickY5);

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
			
			
			function buyClickPowerX10(){
                if (totalMoney >= x10){
                    for (var i = 0; i < 10; i++){
                        ++clickPower;    
                    }
                totalMoney -= x10; // subtracts cost from money
                x10 = Math.round(x10 * 1.195) //updates the cost of the button
                clickPriceX10.textContent = x10;
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
					totMoney.textContent = totalMoney;
					autoPriceY1.textContent = y1;
					ac.textContent = autoClickPower;
					
					if (AC <= false){
						setInterval(autoClick, 1000); 
						AC = true;
					}
				}
			}
			
			
			function autoClickY5(){
				if (totalMoney >=y5){
					totalMoney -= y5;
					y5 = Math.round(y5 * 1.915)
					for (var i = 0; i < 5; i++){
                        ++autoClickPower;    
                    }
					totMoney.textContent = totalMoney;
					autoPriceY5.textContent = y5;
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

            
