attribute vec3 aTranslation;
attribute vec3 aAnimation;
attribute float aTime;
attribute float aDuration;
attribute float aIsVisible;

varying float vDuration;
varying float vTime;
varying float vIsVisible;

void main(){
  vTime = aTime;
  vDuration = aDuration;
  vIsVisible = aIsVisible;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position + aTranslation + aAnimation,1.0);
}