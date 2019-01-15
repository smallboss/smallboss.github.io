

varying float vDuration;
varying float vTime;
varying float vIsVisible;

void main() {


	vec4 col = vec4( .89, .89, .89, 1.);
	float alphaRate;
	if(vTime < 0.2){
		alphaRate = vTime/0.2;
	}else{

		float rate = vTime - vDuration + 0.4;

		if( rate > 0.0){
			alphaRate = 1.0 - rate/0.4;
		}else{
			alphaRate = 1.0;
		}
	}


	if(alphaRate < 0.) {alphaRate = 0.;}

	gl_FragColor = vec4( col.rgb, col.a * alphaRate * alphaRate * vIsVisible );
}