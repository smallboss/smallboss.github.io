varying vec2 vUv;
varying float vRandom;
varying vec3 vPos;
varying float aAlpha;

uniform sampler2D uFeather;
uniform sampler2D uFeather2;
uniform sampler2D uFeather3;
uniform sampler2D uFeather4;
uniform vec2 uMouse;

void main()
{
	vec4 col;


	if(vRandom < 0.33){
		col =  texture2D(uFeather, vUv);
	}else if(vRandom < 0.66){
		col = texture2D(uFeather2, vUv);
	}/**else{
		col = texture2D(uFeather3, vUv);
	}*/

//	col = texture2D(uFeather, vUv);


	gl_FragColor = vec4(col.rgb, col.a * aAlpha);

	/**
	if(col.a == 0.0){
		gl_FragColor = vec4(vUv.r, vUv.g, 1.0, 1.0);
	}else{

	}*/
}