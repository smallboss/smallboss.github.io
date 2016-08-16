var options = {
   frequency: 60,
   friction: 80,
   anticipationSize: 0,
   anticipationStrength: 0
};

// FUNCTION dynamicSpring =====================
$.Velocity.Easings.dynamicSpring = function (p, opts, tweenDelta) {
    var t = p;

    var A1, A2, decal, s,
        frequency = opts.frequency, 
        friction = opts.friction;


    frequency = Math.max(1, frequency / 20);
    friction = Math.pow(20, friction / 100);
    s = options.anticipationSize / 1000;
    decal = Math.max(0, s);
    A1 = function(t) {
      var M, a, b, x0, x1;
      M = 0.8;
      x0 = s / (1 - s);
      x1 = 0;
      b = (x0 - (M * x1)) / (x0 - x1);
      a = (M - b) / x0;
      return (a * t * options.anticipationStrength / 100) + b;
    };
    A2 = function(t) {
      return Math.pow(friction / 10, -t) * (1 - t);
    };

   var A, At, a, angle, b, frictionT, y0, yS;
   frictionT = (t / (1 - s)) - (s / (1 - s));
   if (t < s) {
     yS = (s / (1 - s)) - (s / (1 - s));
     y0 = (0 / (1 - s)) - (s / (1 - s));
     b = Math.acos(1 / A1(yS));
     a = (Math.acos(1 / A1(y0)) - b) / (frequency * (-s));
     A = A1;
   } else {
     A = A2;
     b = 0;
     a = 1;
   }
   At = A(frictionT);
   angle = frequency * (t - s) * a + b;
   var y = 1 - (At * Math.cos(angle));
    
   return y;
};



// FUNCTION  1 =====================
$.Velocity.Easings.dynamicSpringExpanded = function (p, opts, tweenDelta) {
    var maxY = -11111;
    var minY = 11;
    var newValue = false;
    var timeShowed = false;
    var timeShowed1 = false;
    var timeShowed2 = false;
    var timeShowed3 = false;
    var timeStart = 0;


    var t = p;
    if (timeStart == 0) {
      timeStart = new Date().getTime();
    }

    var A1, A2, decal, s,
        frequency = opts.frequency, 
        friction = opts.friction;


      if (timeShowed1) {
         frequency = opts.frequency_2, 
         friction = opts.friction_2;
         t += 0.035;
      }

    frequency = Math.max(1, frequency / 20);
    friction = Math.pow(20, friction / 100);
    s = options.anticipationSize / 1000;
    decal = Math.max(0, s);
    A1 = function(t) {
      var M, a, b, x0, x1;
      M = 0.8;
      x0 = s / (1 - s);
      x1 = 0;
      b = (x0 - (M * x1)) / (x0 - x1);
      a = (M - b) / x0;
      return (a * t * options.anticipationStrength / 100) + b;
    };
    A2 = function(t) {
      return Math.pow(friction / 10, -t) * (1 - t);
    };

   var A, At, a, angle, b, frictionT, y0, yS;
   frictionT = (t / (1 - s)) - (s / (1 - s));
   if (t < s) {
     yS = (s / (1 - s)) - (s / (1 - s));
     y0 = (0 / (1 - s)) - (s / (1 - s));
     b = Math.acos(1 / A1(yS));
     a = (Math.acos(1 / A1(y0)) - b) / (frequency * (-s));
     A = A1;
   } else {
     A = A2;
     b = 0;
     a = 1;
   }
   At = A(frictionT);
   angle = frequency * (t - s) * a + b;
   var y = 1 - (At * Math.cos(angle));


   if(y > 0.99 && !timeShowed){
      timeShowed = true;
    }

   if(y < maxY && !timeShowed1){
      timeShowed1 = true;
      newValue = true;
   }
   else{
      maxY = y;
   }

   if(y > 0.99 && y < 1.01 && !timeShowed2 && timeShowed1){
      timeShowed2 = true;
    }

    if(y > minY && timeShowed2 && !timeShowed3){
      timeShowed3 = true;
    }
    else{
      minY = y;
    }

    if (timeShowed2 && y < 1) {
      y *= 1.008; 
      if (y > 1) y = 1;
   }

   if(y < 0) y = 0;

   return y;
};
