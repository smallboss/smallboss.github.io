// delay and duration are used to calculate animation progress (0-1) for each vertex
attribute vec3 aAnimation;
attribute float aTime;

attribute vec3 aTranslation;
attribute vec3 aTargetTranslation;
attribute float aTargetRotation;

attribute vec4 aAxisAngle;
attribute vec4 aAxisAngle2;

attribute float aRandomValue;

// time passed from the cpu
uniform float uTime;

float PI = 3.141592;



varying vec2 vUv;
varying vec3 vPos;
varying float vRandom;
varying float aAlpha;

vec3 rotateVector(vec4 q, vec3 v)
{
	return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

vec4 quatFromAxisAngle(vec3 axis, float angle)
{
	float halfAngle = (angle) * 0.5;

	return vec4(axis.xyz * sin(halfAngle), cos(halfAngle));
}

vec3 cubicBezier(vec3 p0, vec3 p1, vec3 c0, vec3 c1, float t)
{
	vec3 tp;
	float tn = 1.0 - t;

	tp.xyz = tn * tn * tn * p0.xyz + 3.0 * tn * tn * t * c0.xyz + 3.0 * tn * t * t * c1.xyz + t * t * t * p1.xyz;

	return tp;
}

// t = time, b = begin value, c = change in value, d = duration
float easeOutCubic(float t, float b, float c, float d) {
	return c * ((t = t / d - 1.0) * t * t + 1.0) + b;
}
float easeOutQuart(float t, float b, float c, float d) {
	return -c * ((t = t / d - 1.0) * t * t * t - 1.0) + b;
}
float easeOutQuint(float t, float b, float c, float d) {
	return c * ((t = t / d - 1.0) * t * t * t * t + 1.0) + b;
}

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}


void main()
{
	// determine progress based on time, duration and delay


	 float tDelay = aAnimation.x;
	// float tDuration = aDuration;
	float duration = aAnimation.z;
	float tTime = clamp(aTime - tDelay, 0.0, duration);
	float tProgress = sineInOut(tTime/duration); // easeOutCubic(tTime, 0.0, 1.0, duration);

	float rate = clamp(aTime - aAnimation.y, 0.0, 1.0);

	vec3 tPosition = position;
	vec4 tQuat = quatFromAxisAngle(aAxisAngle.xyz, aAxisAngle.w * (1. - rate) );


	tPosition = rotateVector(tQuat, tPosition);

	if(aTime > aAnimation.y){

		vec4 tQuat1 = quatFromAxisAngle(aAxisAngle2.xyz, (aAxisAngle2.w ) * rate );
		tPosition = rotateVector(tQuat1, tPosition);
	}

	// calculate position on bezier curve

	/*
	vec3 tp0 = tPosition + aTranslation;
	vec3 tp1 = tPosition + aTranslation + aTargetTranslation;
	vec3 tc0 = tPosition + aTranslation + aControlPoint0;
	vec3 tc1 = tPosition + aTranslation + aControlPoint1;
	*/


	tPosition = tPosition * tProgress * (1.0 - rate) *  (1.0 - aTargetTranslation.z/40.0) + aTranslation + aTargetTranslation; ///cubicBezier(tp0, tp1, tc0, tc1, tProgress);
//	tPosition = tPosition  + aTranslation + aTargetTranslation; ///cubicBezier(tp0, tp1, tc0, tc1, tProgress);

	// pass colors to fragment shader
	vUv = uv;
	vRandom = aRandomValue;

	vPos = tPosition;

	aAlpha = 1.-rate;


	// determine screen position
	gl_Position = projectionMatrix * modelViewMatrix * vec4(tPosition, 1.0) ; //+ vec4(0., 0., tPosition.z/600., 0.0);
}