var config1 = liquidFillGaugeDefaultSettings();
    config1.circleThickness = 0.15;
    config1.circleColor = "#808015";
    config1.textColor = "#555500";
    config1.waveTextColor = "#FFFFAA";
    config1.waveColor = "#AAAA39";
    config1.textVertPosition = 0.8;
    config1.waveAnimateTime = 1000;
    config1.waveHeight = 0.05;
    config1.waveAnimate = true;
    config1.waveRise = false;
    config1.waveHeightScaling = false;
    config1.waveOffset = 0.25;
    config1.textSize = 0.75;
    config1.waveCount = 3;
	var config2 = liquidFillGaugeDefaultSettings();
    config2.circleThickness = 0.15;
    config2.circleColor = "#808015";
    config2.textColor = "#555500";
    config2.waveTextColor = "#FFFFAA";
    config2.waveColor = "#AAAA39";
    config2.textVertPosition = 0.8;
    config2.waveAnimateTime = 1000;
    config2.waveHeight = 0.05;
    config2.waveAnimate = true;
    config2.waveRise = false;
    config2.waveHeightScaling = false;
    config2.waveOffset = 0.25;
    config2.textSize = 0.75;
    config2.waveCount = 3;
    config2.displayPercent = false;
	
   	var race1_gauge2= loadLiquidFillGauge("race1_fillgauge2", 51.4, config1);
	var race1_gauge3= loadLiquidFillGauge("race1_fillgauge3", 10.9, config2);
	var race1_gauge4= loadLiquidFillGauge("race1_fillgauge4", 45.2, config1);
	var race1_gauge4= loadLiquidFillGauge("race1_fillgauge5", 54.8, config1);
	var race1_gauge6= loadLiquidFillGauge("race1_fillgauge6", 23.8, config2);
	
	
	var config3 = liquidFillGaugeDefaultSettings();
    config3.circleColor = "#FF7777";
    config3.textColor = "#FF4444";
    config3.waveTextColor = "#FFAAAA";
    config3.waveColor = "#FFDDDD";
    config3.circleThickness = 0.2;
    config3.textVertPosition = 0.2;
    config3.waveAnimateTime = 1000;
	var config4 = liquidFillGaugeDefaultSettings();
    config4.circleColor = "#FF7777";
    config4.textColor = "#FF4444";
    config4.waveTextColor = "#FFAAAA";
    config4.waveColor = "#FFDDDD";
    config4.circleThickness = 0.2;
    config4.textVertPosition = 0.2;
    config4.waveAnimateTime = 1000;
	config4.displayPercent = false;
    var race2_gauge2= loadLiquidFillGauge("race2_fillgauge2", 47, config3);
	var race2_gauge3= loadLiquidFillGauge("race2_fillgauge3", 9.3, config4);
	var race2_gauge4= loadLiquidFillGauge("race2_fillgauge4", 47.6, config3);
	var race2_gauge4= loadLiquidFillGauge("race2_fillgauge5", 52.4, config3);
	var race2_gauge6= loadLiquidFillGauge("race2_fillgauge6", 26.2, config4);
	
	
	var config5 = liquidFillGaugeDefaultSettings();
    config5.circleColor = "#D4AB6A";
    config5.textColor = "#553300";
    config5.waveTextColor = "#805615";
    config5.waveColor = "#AA7D39";
    config5.circleThickness = 0.1;
    config5.circleFillGap = 0.2;
    config5.textVertPosition = 0.8;
    config5.waveAnimateTime = 2000;
    config5.waveHeight = 0.3;
    config5.waveCount = 1;
	var config6 = liquidFillGaugeDefaultSettings();
    config6.circleColor = "#D4AB6A";
    config6.textColor = "#553300";
    config6.waveTextColor = "#805615";
    config6.waveColor = "#AA7D39";
    config6.circleThickness = 0.1;
    config6.circleFillGap = 0.2;
    config6.textVertPosition = 0.8;
    config6.waveAnimateTime = 2000;
    config6.waveHeight = 0.3;
    config6.waveCount = 1;
	config6.displayPercent = false;
	
    var race3_gauge2= loadLiquidFillGauge("race3_fillgauge2", 53.9, config5);
	var race3_gauge3= loadLiquidFillGauge("race3_fillgauge3", 9.1, config6);
	var race3_gauge4= loadLiquidFillGauge("race3_fillgauge4", 31.4, config5);
	var race3_gauge4= loadLiquidFillGauge("race3_fillgauge5", 68.6, config5);
	var race3_gauge6= loadLiquidFillGauge("race3_fillgauge6", 24.2, config6);