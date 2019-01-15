!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=27)}([function(e,t,a){e.exports=a.p+"ibiEnvMap.01c04b117079eaf7beb0.png"},function(e,t,a){e.exports=a.p+"9.9145ae407b5f4ebed61b.png"},function(e,t,a){e.exports=a.p+"Door_03_AO.9f34ba8beaa6d4ec296c.png"},function(e,t,a){e.exports=a.p+"Doors_02_AO.89a6beb5873cd246e001.png"},function(e,t,a){e.exports=a.p+"Doors_01_AO.140f34b1faa0c14dd0ae.png"},function(e,t,a){e.exports=a.p+"DoorsTop_02_AO.626278781c5b0bd875b1.png"},function(e,t,a){e.exports=a.p+"Susp_front_AO.943835abf93789cac397.png"},function(e,t,a){e.exports=a.p+"Susp_back_AO.e22c912ce5330bd770cf.png"},function(e,t,a){e.exports=a.p+"Seat_AO.808f1b3f40d0bb24a1b3.png"},function(e,t,a){e.exports=a.p+"Roof_AO.eb0ee90a1dc05c9cd1cb.png"},function(e,t,a){e.exports=a.p+"Rim_AO.42e3fa878e48f93ca5f7.png"},function(e,t,a){e.exports=a.p+"Dash_AO.c5d4be8d271e84994c04.png"},function(e,t,a){e.exports=a.p+"Chassis_Back_AO.1dc3597283f99aec6baa.png"},function(e,t,a){e.exports=a.p+"ChassieFront_AO.6334e2761431de1aad6d.png"},function(e,t,a){e.exports=a.p+"Cab_Low_AO.e4be0a673cd4ac170c7d.png"},function(e,t,a){e.exports=a.p+"Cab_Back_AO.5aaa448fd0df954b951a.png"},function(e,t,a){e.exports=a.p+"front_ao.cd990c229018052baed9.png"},function(e,t,a){e.exports=a.p+"Back_AO.03416813949cd0c3aced.png"},function(e,t,a){e.exports=a.p+"Tire_AO.2512c4679af20fd65739.png"},function(e,t,a){e.exports=a.p+"Accessories_AO.8484a644998fb06a5f34.png"},function(e,t,a){e.exports=a.p+"GolfCart5.849ff7d60dc0edfe009f.fbx"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"generateEnv",value:function(e){var t=new THREE.Group;this.shader=new THREE.ShaderMaterial({uniforms:{map:{type:"t",value:null},placement:{type:"v3",value:new THREE.Vector3},rotation:{type:"v3",value:new THREE.Vector3}},vertexShader:"                            varying vec3 worldPosition;\n                            varying vec2 vUv;\n                            void main () {\n                                vec4 p = vec4 (position, 1.0);\n                                worldPosition = (modelMatrix * p).xyz;\n                                gl_Position = projectionMatrix * modelViewMatrix * p;\n                            }",fragmentShader:"                            uniform sampler2D map;\n                            uniform vec3 placement;\n                            varying vec3 worldPosition;\n                            varying vec2 vUv;\n                            void main () {\n                                vec3 R = worldPosition;\n                                R.y -= placement.y;\n                                float r = length (R);\n                                vec2 uv = vUv;\n                                float theta = acos (-R.y / r);\n                                float phi = atan (R.x, -R.z);\n                                float roty =  (0.75 + phi  / 6.2831853072);\n                                roty = mod(roty, 1.0);\n                                if(roty < .0) {\n                                    roty = roty + 1.0;\n                                }\n                                vec4 test = texture2D(map, vec2 (\n                                    roty,\n                                    theta / 3.1415926536\n                                ));\n                                test *= vec4(1.12);\n                                gl_FragColor = test;\n                            }"});var a=new THREE.SphereGeometry(12e3,64,64),n=e;n.magFilter=THREE.LinearFilter,n.minFilter=THREE.LinearFilter,this.shader.uniforms.map.value=n,window.pl=this.shader.uniforms.placement.value=new THREE.Vector3(0,2400,0),this.shader.side=THREE.DoubleSide;var i=new THREE.Mesh(a,this.shader);t.add(i),i.position.set(0,0,0),i.castShadow=!1;var r=new THREE.PlaneGeometry(3e4,3e4,1,1),o=new THREE.Mesh(r,this.shader);return o.rotation.x=Math.PI/2,o.position.y=20,t.add(o),o.position.y=-5,t}}]),e}();t.default=i},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config={apiKey:"AIzaSyBBNdWLBe7CqLA_W3UZTzZ_uCSrQLaR8ow",authDomain:"tnr-3d-viewer.firebaseapp.com",databaseURL:"https://tnr-3d-viewer.firebaseio.com",projectId:"tnr-3d-viewer",storageBucket:"tnr-3d-viewer.appspot.com",messagingSenderId:"653966245926"},this.fbApp=firebase.initializeApp(this.config),this.fbStorage=this.fbApp.storage(),this.fbStorageRef=this.fbStorage.ref(),this.fbStore=this.fbApp.firestore(),this.fbStore.settings({timestampsInSnapshots:!0})}return n(e,[{key:"sendData",value:function(e,t){var a=this,n=0;e.imageList.forEach(function(i){var r=e.firstName+"_"+e.lastName+"_"+i.name+"_"+parseInt(1e6*Math.random())+".jpg";a.fbStorageRef.child(r).putString(i.imgBase64,"data_url").then(function(e){return console.log("Uploaded a base64 image!",e),a.fbStorageRef.child(r).getDownloadURL()}).then(function(r){if(i.imageUrl=r,++n===e.imageList.length){var o={firstName:e.firstName,lastName:e.lastName,company:e.company,jobTitle:e.jobTitle,email:e.email,phone:e.phone,stateRegion:e.stateRegion,city:e.city};e.imageList.forEach(function(e){o[e.name]=e.imageUrl,o["FillMode_"+e.name]=e.fillMode}),a.saveToBase(o).then(function(a){console.log("Document written with ID: ",a.id),e.orderId=a.id,t(e)}).catch(function(e){console.error("Error adding document: ",e)})}})})}},{key:"saveToBase",value:function(e){return this.fbStore.collection("orders").add(e)}}]),e}();t.default=i},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.Email={send:function(e,t,a,i,r,o,s,l){var m=Math.floor(1e6*Math.random()+1),c="From="+e;c+="&to="+t,c+="&Subject="+encodeURIComponent(a),c+="&Body="+encodeURIComponent(i),void 0==r.token?(c+="&Host="+r,c+="&Username="+o,c+="&Password="+s,c+="&Action=Send"):(c+="&SecureToken="+r.token,c+="&Action=SendFromStored",l=r.callback),c+="&cachebuster="+m,n.ajaxPost("https://smtpjs.com/v2/smtp.aspx?",c,l)},sendWithAttachment:function(e,t,a,i,r,o,s,l,m){var c=Math.floor(1e6*Math.random()+1),d="From="+e;d+="&to="+t,d+="&Subject="+encodeURIComponent(a),d+="&Body="+encodeURIComponent(i),d+="&Attachment="+encodeURIComponent(l),void 0==r.token?(d+="&Host="+r,d+="&Username="+o,d+="&Password="+s,d+="&Action=Send"):(d+="&SecureToken="+r.token,d+="&Action=SendFromStored"),d+="&cachebuster="+c,n.ajaxPost("https://smtpjs.com/v2/smtp.aspx?",d,m)},ajaxPost:function(e,t,a){var i=n.createCORSRequest("POST",e);i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.onload=function(){var e=i.responseText;void 0!=a&&a(e)},i.send(t)},ajax:function(e,t){var a=n.createCORSRequest("GET",e);a.onload=function(){var e=a.responseText;void 0!=t&&t(e)},a.send()},createCORSRequest:function(e,t){var a=new XMLHttpRequest;return"withCredentials"in a?a.open(e,t,!0):"undefined"!=typeof XDomainRequest?(a=new XDomainRequest).open(e,t):a=null,a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendEmail=function(e){var t=new FormData;t.append("orderId",e.orderId),t.append("firstName",e.firstName),t.append("lastName",e.lastName),t.append("company",e.company),t.append("jobTitle",e.jobTitle),t.append("email",e.email),t.append("phone",e.phone),t.append("stateRegion",e.stateRegion),t.append("city",e.city),t.append("fileImage",new File([e.image],e.orderId+".png",new Date)),fetch("email.php",{method:"POST",mode:"cors",body:t}).then(function(e){return e.text()}).then(function(e){console.log(e)})};a(23)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(24),r=u(a(22)),o=u(a(21)),s=u(a(20)),l=(u(a(19)),u(a(18))),m=(u(a(17)),u(a(16)),u(a(15)),u(a(14)),u(a(13)),u(a(12)),u(a(11)),u(a(10))),c=(u(a(9)),u(a(8))),d=(u(a(7)),u(a(6)),u(a(5)),u(a(4)),u(a(3)),u(a(2)),u(a(1)));u(a(0));function u(e){return e&&e.__esModule?e:{default:e}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}return n(e,[{key:"init",value:function(){this.container=document.getElementById("threeJS"),this.camera=new THREE.PerspectiveCamera(45,.7*window.innerWidth/(.6*window.innerHeight),10,2e4),this.camera.name="PerspectiveCamera",window.scene=this.scene=new THREE.Scene,window.v=this,this.scene.add(this.camera),this.renderer=new THREE.WebGLRenderer({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(.7*window.innerWidth,.55*window.innerHeight),this.renderer.setClearColor(15856113),this.raycaster=new THREE.Raycaster,this.initControls(),this.initObjects(),this.container.appendChild(this.renderer.domElement),this.firebaseWorker=new r.default,this.animate(),this.dropNumber=1,this.userForm=document.getElementById("user-from"),this.imgInput=document.getElementById("img-input"),this.labelBtns=document.getElementById("label-btns"),this.wrapFitFillToggle=document.getElementById("tg-list-item"),this.mouse=new THREE.Vector2,this.position=new THREE.Vector3,this.size=new THREE.Vector3(15,15,15),this.params={scale:15,rotate:!0},this.mouseHelper=new THREE.Mesh(new THREE.BoxBufferGeometry(1,1,1),new THREE.MeshNormalMaterial),this.mouseHelper.visible=!1,this.scene.add(this.mouseHelper),this.labelGroup=new THREE.Group,this.labelGroup.name="LabelGroup",this.scene.add(this.labelGroup),this.initEvents()}},{key:"initEvents",value:function(){var e=this;window.addEventListener("resize",this.onWindowResize.bind(this)),document.addEventListener("mousedown",function(){return e.isMouseDown=!0}),document.addEventListener("mouseup",function(t){return e.onMouseup(t)}),document.addEventListener("mousemove",function(t){return e.onMouseMove(t)}),document.addEventListener("dragover",function(t){return e.onMoveImg(t)}),document.addEventListener("dragenter",function(t){return e.onMoveImg(t)}),document.addEventListener("drop",function(t){return e.onDropImg(t)}),this.imgInput.addEventListener("change",function(t){return e.onDropImg(t)}),document.getElementById("btn-show-modal").addEventListener("click",function(){return e.onDownloadClick()}),document.getElementById("wrap-modal").addEventListener("click",function(e){"wrap-modal"===e.target.id&&document.getElementById("wrap-modal").classList.remove("show")}),document.getElementById("close").addEventListener("click",function(e){document.getElementById("wrap-modal").classList.remove("show")}),document.getElementById("reset").addEventListener("click",function(t){document.getElementById("img-form").reset(),e.deleteLabelImage(!0)}),this.userForm.addEventListener("submit",function(t){return e.sendData(t)}),document.getElementById("upload-img").addEventListener("click",function(){return e.imgInput.click()}),document.getElementById("label-edit").addEventListener("click",function(){return e.onEditClick()}),document.getElementById("label-del").addEventListener("click",function(){return e.deleteLabelImage()}),document.getElementById("label-toggle").addEventListener("change",function(t){return e.onRangeInput(t,!0)}),document.getElementById("fill-mode").addEventListener("change",function(t){return e.onRangeInput(t)}),document.getElementById("thankyou").addEventListener("click",function(){document.getElementById("wrap-modal").classList.remove("show")})}},{key:"sendData",value:function(e){var t=this;e.preventDefault(),this.userForm.style.display="none",document.getElementById("after-email").style.display="block",document.getElementById("text-email").innerText=e.target.email.value;var a={firstName:e.target["first-name"].value,lastName:e.target["last-name"].value,company:e.target.company.value,jobTitle:e.target["job-title"].value,email:e.target.email.value,phone:e.target.phone.value,stateRegion:e.target.state.value,city:e.target.city.value,imageList:[]};this.surfaseList.forEach(function(e){"cloneRoofAd"!==e.name&&e.userData.isMarked&&a.imageList.push({name:e.name,imgBase64:e.material.map.image.toDataURL("image/jpeg",1),fillMode:e.userData.repeatData.mode})});var n=document.createElement("canvas");n.width=this.renderer.domElement.width,n.height=this.renderer.domElement.height;var r=n.getContext("2d");r.drawImage(this.renderer.domElement,0,0);var o=document.querySelector("#stng-item img");r.drawImage(o,n.width/2-o.width/2,n.height/2-o.height/2),n.toBlob(function(e){a.image=e,t.firebaseWorker.sendData(a,i.sendEmail)},"image/png",1)}},{key:"onDownloadClick",value:function(){this.userForm.reset(),this.userForm.style.display="block",document.getElementById("after-email").style.display="none",document.getElementById("wrap-modal").classList.add("show")}},{key:"onEditClick",value:function(){this.labelBtns.classList.remove("show"),this.preActiveLabel=this.activeLabel=this.activeLabelMove,this.imgInput.click()}},{key:"deleteLabelImage",value:function(e){var t=this;e?this.surfaseList.forEach(function(e){t.activeLabel=e,t.activeLabel.userData.isMarked=!1,t.activeLabel.material.map=t.activeLabel.userData.mapEmpty,t.activeLabel.material.map.image=t.activeLabel.userData.mapEmpty.image,t.activeLabel.material.map.needsUpdate=!0,t.activeLabel.material.needsUpdate=!0,t.activeLabel.userData.cloneLabel&&(t.activeLabel.userData.cloneLabel.isMarked=!1,t.activeLabel.userData.cloneLabel.material.map=t.activeLabel.userData.mapEmpty,t.activeLabel.userData.cloneLabel.material.map.needsUpdate=!0,t.activeLabel.userData.cloneLabel.material.needsUpdate=!0)}):(this.activeLabel=this.activeLabelMove,this.activeLabel.userData.isMarked=!1,this.activeLabel.material.map=this.activeLabel.userData.mapEmpty,this.activeLabel.material.map.image=this.activeLabel.userData.mapEmpty.image,this.activeLabel.material.map.needsUpdate=!0,this.activeLabel.material.needsUpdate=!0,this.activeLabel.userData.cloneLabel&&(this.activeLabel.userData.cloneLabel.isMarked=!1,this.activeLabel.userData.cloneLabel.material.map=this.activeLabel.userData.mapEmpty,this.activeLabel.userData.cloneLabel.material.map.needsUpdate=!0,this.activeLabel.userData.cloneLabel.material.needsUpdate=!0)),this.labelBtns.classList.remove("show"),0===this.surfaseList.filter(function(e){return e.userData.isMarked}).length&&(this.dropNumber=1,this.activeLabel=null,this.showSection(1))}},{key:"onRangeInput",value:function(e,t){var a=this;t?(this.activeLabelMove.userData.repeatData.mode=e.target.checked?"fill":"fit",this.computeTextureRepeat(this.activeLabelMove)):this.surfaseList.forEach(function(t){t.userData.isMarked&&(t.userData.repeatData.mode=e.target.checked?"fill":"fit",a.computeTextureRepeat(t))})}},{key:"onMoveImg",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"onDropImg",value:function(e){var t=this;e.preventDefault(),e.stopPropagation(),this.showSection(2);var a=[].concat(function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}("drop"===e.type?e.dataTransfer.files:e.target.files)),n=[],i=[],r=0,o=0;a.forEach(function(s,l){n.push(new FileReader),n[l].readAsDataURL(new Blob([s],{type:"octet/stream"})),n[l].onload=function(s){i.push(new Image),i[r].src=s.target.result,i[r].onload=function(){if(++o===a.length){var r=0,s=t.onMouseup(e);"drop"===e.type?(s=null,t.surfaseList.forEach(function(e,o){"cloneRoofAd"===e.name||(o+1)%t.dropNumber||(e.userData.imgSrc=n[r].result,e.userData.repeatData.mode="fit",document.getElementById("fill-mode").checked=!1,t.shoot(e),t.setLabelTexture(e,i[r]),++r===a.length&&(r=0))})):s||(t.dropNumber=1),s?(t.activeLabel.userData.imgSrc=n[r].result,t.activeLabel.userData.cloneLabel&&(t.activeLabel.userData.cloneLabel.userData.imgSrc=n[r].result),t.setLabelTexture(s,i[r])):"drop"!==e.type&&(t.dropNumber=2,t.wrapFitFillToggle.classList.remove("disabled"),t.surfaseList.forEach(function(e){e.userData.imgSrc=n[r].result,e.userData.repeatData.mode="fit",document.getElementById("fill-mode").checked=!1,t.shoot(e),t.setLabelTexture(e,i[r])})),"drop"===e.type&&(t.dropNumber++,t.dropNumber>t.surfaseList.length-1&&(t.dropNumber=1)),t.showSection(2),document.getElementById("img-form").reset(),t.wrapFitFillToggle.classList.remove("disabled")}},r++}})}},{key:"showSection",value:function(e){1===e?(document.getElementById("step-1").style.display="block",document.getElementById("step-2").style.display="none"):(document.getElementById("step-1").style.display="none",document.getElementById("step-2").style.display="block")}},{key:"setLabelTexture",value:function(e,t){e.userData.isMarked=!0;var a=document.createElement("canvas");a.width=t.width,a.height=t.height;var n=a.getContext("2d");n.drawImage(t,0,0,t.width,t.height),n.beginPath(),n.clearRect(0,0,a.width,2),n.clearRect(a.width-2,0,a.width,a.height),n.clearRect(0,a.height-2,a.width,a.height),n.clearRect(0,0,2,a.height),n.fill(),n.stroke();var i=new THREE.Texture;i.image=a,i.minFilter=THREE.LinearFilter,i.magFilter=THREE.LinearFilter,e.material.map=i,e.material.map.wrapS=THREE.ClampToEdgeWrapping,e.material.map.wrapT=THREE.ClampToEdgeWrapping,this.computeTextureRepeat(e)}},{key:"computeTextureRepeat",value:function(e){var t=e.material.map.image,a=t.width/t.height,n=e.userData.repeatData.ratio;e.material.map.repeat=new THREE.Vector2(1,1),e.material.map.offset=new THREE.Vector2,"fill"==e.userData.repeatData.mode?n>a?(e.material.map.repeat.y=a/n,e.material.map.offset.y=-(e.material.map.repeat.y-1)/2):(e.material.map.repeat.x=n/a,e.material.map.offset.x=-(e.material.map.repeat.x-1)/2):n>a?(e.material.map.repeat.x=n/a,e.material.map.offset.x=-e.material.map.repeat.x/2+.5):(e.material.map.repeat.y=a/n,e.material.map.offset.y=-e.material.map.repeat.y/2+.5),e.userData.cloneLabel&&(e.userData.cloneLabel.material.map=e.material.map.clone(),e.userData.cloneLabel.material.map.offset=e.material.map.offset.clone(),e.userData.cloneLabel.material.map.needsUpdate=!0,e.userData.cloneLabel.material.needsUpdate=!0),e.material.map.needsUpdate=!0,e.material.needsUpdate=!0}},{key:"initObjects",value:function(){var e=(new o.default).generateEnv((new THREE.TextureLoader).load(d.default));e.name="EnvironmentLoader",this.scene.add(e),this.loadModel()}},{key:"onMouseup",value:function(e){if(this.isMouseDown=!1,this.preActiveLabel&&"change"!==e.type&&(this.preActiveLabel=null),this.orbCntrlsChanged)this.orbCntrlsChanged=!1;else if(e.target===this.renderer.domElement||"change"===e.type){this.mouse.x=e.layerX/this.renderer.domElement.offsetWidth*2-1,this.mouse.y=-e.layerY/this.renderer.domElement.offsetHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var t=this.raycaster.intersectObjects(this.surfaseList);if(t[0]||"change"===e.type&&("change"!==e.type||this.preActiveLabel)){var a=t[0]&&t[0].object;if("change"===e.type&&(a=this.preActiveLabel),this.preActiveLabel=null,"mouseup"!==e.type){if(a.name.includes("Ad")&&!a.name.includes("RoofAd_Frame1"))return window.al=this.activeLabel=a,this.shoot(this.activeLabel),this.wrapFitFillToggle.classList.remove("disabled"),document.getElementById("fill-mode").checked="fill"==this.activeLabel.userData.repeatData.mode,this.activeLabel}else{if(!a.userData.isMarked)return this.preActiveLabel=t[0].object,void this.imgInput.click();if(!this.activeLabel||a.uuid===this.activeLabel.uuid)return;window.al=this.activeLabel=a,this.wrapFitFillToggle.classList.remove("disabled"),document.getElementById("fill-mode").checked="fill"==this.activeLabel.userData.repeatData.mode}}}}},{key:"onMouseMove",value:function(e){if(e.target===this.renderer.domElement&&!this.orbCntrlsChanged){this.mouse.x=e.layerX/this.renderer.domElement.offsetWidth*2-1,this.mouse.y=-e.layerY/this.renderer.domElement.offsetHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var t=this.raycaster.intersectObjects(this.surfaseList);if(t[0])if(this.activeLabelMove=t[0].object,t[0].object.userData.isMarked){this.activeLabelMove.geometry.boundingSphere||this.activeLabelMove.geometry.computeBoundingSphere();var a=this.activeLabelMove.geometry.boundingSphere.center.clone();this.activeLabelMove.localToWorld(a),a.project(this.camera),a.x=Math.round((a.x+1)*this.renderer.domElement.width/2),a.y=Math.round((1-a.y)*this.renderer.domElement.height/2),a.z=0,this.labelBtns.classList.add("show");var n={x:a.x+this.renderer.domElement.offsetLeft-this.labelBtns.offsetWidth/2,y:a.y+this.renderer.domElement.offsetTop-this.labelBtns.offsetHeight/2};this.labelBtns.style.transform="translate("+n.x+"px, "+n.y+"px)",document.getElementById("label-toggle").checked="fill"==this.activeLabelMove.userData.repeatData.mode}else document.body.classList.add("cursor-pointer"),this.labelBtns.classList.remove("show");else document.body.classList.remove("cursor-pointer"),this.labelBtns.classList.remove("show")}}},{key:"loadModel",value:function(){var e=this;(new THREE.FBXLoader).load(s.default,function(t){e.model=t,e.initLight(),e.model.name="WrapModel",e.surfaseList=[],e.model.traverse(function(t){if("RoofAd"===t.name&&t.material.color.setRGB(.78,.78,.78),"Seats"===t.name&&(t.material.shininess=2,t.material.color.setRGB(.2,.2,.2),t.material.specular.setRGB(.5,.5,.5)),"DriverControl1"===t.name&&(t.material[0].shininess=t.material[1].shininess=2),"Dashboard"===t.name&&(t.material.shininess=2,t.material.color.setRGB(.13,.13,.13),t.material.specular.setRGB(.6,.6,.6)),"Cab_Low"===t.name&&(t.material.shininess=2),"Cab_Back"===t.name&&(t.material.shininess=2),"RoofHatch"===t.name&&(t.material.shininess=2,t.material.color.setRGB(.1,.1,.1)),"Rims"===t.name&&(t.material.shininess=2,t.material.color.setRGB(.06,.06,.06),t.material.aoMap=(new THREE.TextureLoader).load(m.default)),"Tires"===t.name&&(t.material.normalScale.set(100,100),t.material.color.setRGB(.14,.14,.14),t.material.aoMap=(new THREE.TextureLoader).load(l.default)),"Floor"===t.name&&(t.material.shininess=2,t.material.color.setRGB(.17,.17,.17)),"Doors1"===t.name&&(t.material[1].shininess=2,t.material[1].color.setRGB(.17,.17,.17)),"Front_Black"===t.name&&(t.material[0].shininess=2,t.material[0].color.setRGB(.17,.17,.17)),"FrontAccessories"===t.name&&(t.material.shininess=2,t.material.color.setRGB(.17,.17,.17)),"DoorHandles1"===t.name&&(t.material[0].shininess=2,t.material[0].color.setRGB(.17,.17,.17)),"Doors_Support"===t.name&&(t.material[0].shininess=2,t.material[0].color.setRGB(.17,.17,.17)),"Doors_01"===t.name&&(t.material[0].shininess=2,t.material[0].color.setRGB(.17,.17,.17)),"DoorsTop_01"===t.name&&(t.material.shininess=2,t.material.color.setRGB(.17,.17,.17)),"DoorsTop_02"===t.name&&(t.material.shininess=2,t.material.color.setRGB(.17,.17,.17)),"RoofAd_Frame1"===t.name&&(t.material.shininess=2,t.material.color.setRGB(.17,.17,.17)),"Seats"===t.name&&(t.material.aoMap=(new THREE.TextureLoader).load(c.default)),"Glass"===t.name&&(t.material.color.setRGB(.7,.7,.7),(new THREE.TextureLoader).load(d.default,function(e){e.mapping=THREE.SphericalReflectionMapping,t.material.envMap=e,t.material.envMap.needsUpdate=!0,t.material.needsUpdate=!0})),t.name.includes("Ad")&&!t.name.includes("RoofAd_Frame1")){if(t.material.map.magFilter=THREE.NearestMipMapLinearFilter,t.material.map.minFilter=THREE.NearestMipMapLinearFilter,t.material.map.anisotropy=8,t.userData.repeatData={ratio:1.4},"FrontAdd"===t.name&&(t.userData.repeatData={ratio:3}),"BackAd"===t.name&&(t.userData.repeatData={ratio:2.4}),"BackWindowAd"===t.name&&(t.userData.repeatData={ratio:2}),t.name.includes("RoofAd")&&(t.userData.repeatData={ratio:4.2}),t.userData.repeatData.mode="fit","SideAdd_04"===t.name&&(e.surfaseList[0]=t),"SideAdd_05"===t.name&&(e.surfaseList[1]=t),"SideAdd_06"===t.name&&(e.surfaseList[2]=t),"SideAdd_01"===t.name&&(e.surfaseList[3]=t),"SideAdd_02"===t.name&&(e.surfaseList[4]=t),"SideAdd_03"===t.name&&(e.surfaseList[5]=t),"BackWindowAd"===t.name&&(e.surfaseList[6]=t),"BackAd"===t.name&&(e.surfaseList[7]=t),"FrontAdd"===t.name&&(e.surfaseList[8]=t),"RoofAd"===t.name&&(e.surfaseList[9]=t),t.name.includes("RoofAd")){var a=new THREE.Mesh(t.geometry.clone(),t.material.clone()),n=new THREE.Mesh(t.geometry.clone(),t.material.clone());a.name="cloneRoofAd",n.name="cloneRoofAdMiddle",a.material.transparent=!0,n.material.map=null,t.userData.cloneLabel=a,a.userData.cloneLabel=t,a.position.set(-.5,0,-67.5),n.position.set(-.25,0,-67.5),a.rotateY(Math.PI),n.rotateY(Math.PI),a.userData.mapEmpty=a.userData.map=a.material.map=t.userData.mapEmpty=t.userData.map=t.material.map.clone(),t.material.map.onUpdate=function(){a.userData.mapEmpty.image=a.userData.map.image=a.material.map.image=t.userData.mapEmpty.image=t.userData.map.image=t.material.map.image.cloneNode(),a.userData.map.needsUpdate=!0},t.userData.offset=new THREE.Vector2,t.userData.aspectRatio=1,t.material.alphaMap=null,t.userData.color=t.material.color.clone(),a.userData.repeatData={ratio:4.2,mode:"fit"},a.userData.offset=new THREE.Vector2,a.userData.aspectRatio=1,a.material.alphaMap=null,a.userData.color=a.material.color.clone(),e.surfaseList.push(a),e.model.add(a),e.model.add(n)}else t.userData.mapEmpty=t.userData.map=t.material.map.clone(),t.material.map.onUpdate=function(){return t.userData.mapEmpty.image=t.userData.map.image=t.material.map.image.cloneNode()},t.userData.offset=new THREE.Vector2,t.userData.aspectRatio=1,t.material.alphaMap=null,t.userData.color=t.material.color.clone();t.material.transparent=!0}}),e.model.scale.set(10,10,10),e.scene.add(e.model),setTimeout(function(){return document.getElementById("preloader").classList.add("hide")},3e3)},function(e){},function(e){console.log("error",e)})}},{key:"shoot",value:function(e){this.activeLabel=e;var t=this.activeLabel.userData.cloneLabel;this.activeLabel.userData.cloneLabel&&(t.userData.isMarked=!0,t.userData.currPosition=t.userData.startPosition=this.position.clone())}},{key:"disposeLabel",value:function(e){this.labelGroup.remove(e);var t=e.geometry,a=e.material.map;e.geometry=null,e.material.map=null,t.dispose(),a.dispose()}},{key:"initControls",value:function(){var e=this;window.oc=this.orbitControls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.orbitControls.target.set(0,800,0),this.orbitControls.object.position.set(3620,1328,2600),this.orbitControls.maxPolarAngle=1.7,this.orbitControls.enablePan=!1,this.orbitControls.minDistance=2600,this.orbitControls.maxDistance=5800,this.orbitControls.addEventListener("change",function(t){e.labelBtns&&e.labelBtns.classList.remove("show"),e.isMouseDown&&(e.orbCntrlsChanged=!0)}),setTimeout(function(){return e.orbCntrlsChanged=!1},500)}},{key:"initLight",value:function(){var e=new THREE.AmbientLight(16777215,1.21);e.name="AmbientLight",e.position.set(0,300,0),this.model.add(e);var t=new THREE.DirectionalLight(16777215,.02);t.name="DirectionalLight0",t.position.set(0,170,400),this.model.add(t);var a=new THREE.DirectionalLight(16777215,.04);a.name="DirectionalLight1",a.position.set(480,170,230),this.model.add(a);var n=new THREE.DirectionalLight(16777215,.04);n.name="DirectionalLight2",n.position.set(-480,170,-230),this.model.add(n);var i=new THREE.PointLight(16777215,.9,2e3);i.name="PointLight1",i.position.set(0,125,115),this.model.add(i);var r=new THREE.PointLight(16777215,.2,2e3);r.name="PointLight2",r.position.set(0,125,0),this.model.add(r);var o=new THREE.PointLight(16777215,.4,2e3);o.name="PointLight3",o.position.set(0,125,-115),this.model.add(o);var s=new THREE.PointLight(16777215,.8,400);s.name="pointLightFR",s.position.set(-85,30,160),this.model.add(s);var l=new THREE.PointLight(16777215,.8,400);l.name="pointLightFL",l.position.set(85,30,160),this.model.add(l);var m=new THREE.PointLight(16777215,.8,400);m.name="pointLightBR",m.position.set(-85,30,-175),this.model.add(m);var c=new THREE.PointLight(16777215,.8,400);c.name="pointLightBL",c.position.set(85,30,-175),this.model.add(c)}},{key:"onWindowResize",value:function(){this.camera.aspect=this.container.offsetWidth/this.container.offsetHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight)}},{key:"animate",value:function(){var e=this;requestAnimationFrame(function(){return e.animate()}),this.orbitControls.update(),this.renderer.render(this.scene,this.camera)}}]),e}();t.default=p},function(e,t,a){"use strict";var n,i=a(25),r=(n=i)&&n.__esModule?n:{default:n};document.addEventListener("DOMContentLoaded",function(){new r.default})},function(e,t,a){"use strict";var n,i=a(26);(n=i)&&n.__esModule;a(34),a(29)},,function(e,t){},,,,,function(e,t){}]);
//# sourceMappingURL=main.34bec46d2c85f0cf5801.js.map