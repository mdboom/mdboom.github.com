(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ns="180",Bo=0,js=1,zo=2,ja=1,Ho=2,sn=3,En=0,wt=1,an=2,Mn=0,ni=1,Qs=2,ea=3,ta=4,Vo=5,Un=100,Go=101,ko=102,Wo=103,Xo=104,qo=200,Yo=201,Ko=202,Zo=203,qr=204,Yr=205,$o=206,Jo=207,jo=208,Qo=209,e1=210,t1=211,n1=212,i1=213,r1=214,Kr=0,Zr=1,$r=2,ri=3,Jr=4,jr=5,Qr=6,es=7,Qa=0,s1=1,a1=2,Sn=0,o1=1,l1=2,c1=3,u1=4,h1=5,f1=6,d1=7,eo=300,si=301,ai=302,ts=303,ns=304,ur=306,sr=1e3,Nn=1001,is=1002,Xt=1003,p1=1004,Ui=1005,Yt=1006,dr=1007,Fn=1008,$t=1009,to=1010,no=1011,Mi=1012,Fs=1013,Bn=1014,on=1015,Ai=1016,Os=1017,Bs=1018,Si=1020,io=35902,ro=35899,so=1021,ao=1022,Wt=1023,Ei=1026,yi=1027,oo=1028,zs=1029,lo=1030,Hs=1031,Vs=1033,er=33776,tr=33777,nr=33778,ir=33779,rs=35840,ss=35841,as=35842,os=35843,ls=36196,cs=37492,us=37496,hs=37808,fs=37809,ds=37810,ps=37811,ms=37812,_s=37813,gs=37814,vs=37815,xs=37816,Ms=37817,Ss=37818,Es=37819,ys=37820,Ts=37821,As=36492,bs=36494,ws=36495,Rs=36283,Cs=36284,Ps=36285,Ds=36286,m1=3200,_1=3201,co=0,g1=1,vn="",bt="srgb",oi="srgb-linear",ar="linear",je="srgb",Vn=7680,na=519,v1=512,x1=513,M1=514,uo=515,S1=516,E1=517,y1=518,T1=519,ia=35044,ra="300 es",Kt=2e3,or=2001;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pr=Math.PI/180,Ls=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function A1(i,e){return(i%e+e)%e}function mr(i,e,t){return(1-t)*i+t*e}function di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],d=n[r+2],h=n[r+3];const f=s[a+0],m=s[a+1],v=s[a+2],E=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=E;return}if(h!==E||c!==f||l!==m||d!==v){let p=1-o;const u=c*f+l*m+d*v+h*E,A=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const C=Math.sqrt(T),R=Math.atan2(C,u*A);p=Math.sin(p*R)/C,o=Math.sin(o*R)/C}const S=o*A;if(c=c*p+f*S,l=l*p+m*S,d=d*p+v*S,h=h*p+E*S,p===1-o){const C=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=C,l*=C,d*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],d=n[r+3],h=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+d*h+c*m-l*f,e[t+1]=c*v+d*f+l*h-o*m,e[t+2]=l*v+d*m+o*f-c*h,e[t+3]=d*v-o*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(r/2),h=o(s/2),f=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*d*h+l*m*v,this._y=l*m*h-f*d*v,this._z=l*d*v+f*m*h,this._w=l*d*h-f*m*v;break;case"YXZ":this._x=f*d*h+l*m*v,this._y=l*m*h-f*d*v,this._z=l*d*v-f*m*h,this._w=l*d*h+f*m*v;break;case"ZXY":this._x=f*d*h-l*m*v,this._y=l*m*h+f*d*v,this._z=l*d*v+f*m*h,this._w=l*d*h-f*m*v;break;case"ZYX":this._x=f*d*h-l*m*v,this._y=l*m*h+f*d*v,this._z=l*d*v-f*m*h,this._w=l*d*h+f*m*v;break;case"YZX":this._x=f*d*h+l*m*v,this._y=l*m*h+f*d*v,this._z=l*d*v-f*m*h,this._w=l*d*h-f*m*v;break;case"XZY":this._x=f*d*h-l*m*v,this._y=l*m*h-f*d*v,this._z=l*d*v+f*m*h,this._w=l*d*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-n*l,this._z=s*d+a*l+n*c-r*o,this._w=a*d-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),d=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*d,this.y=n+c*d+o*l-s*h,this.z=r+c*h+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _r.copy(this).projectOnVector(e),this.sub(_r)}reflect(e){return this.sub(_r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new z,sa=new wi;class Ie{constructor(e,t,n,r,s,a,o,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],m=n[5],v=n[8],E=r[0],p=r[3],u=r[6],A=r[1],T=r[4],S=r[7],C=r[2],R=r[5],b=r[8];return s[0]=a*E+o*A+c*C,s[3]=a*p+o*T+c*R,s[6]=a*u+o*S+c*b,s[1]=l*E+d*A+h*C,s[4]=l*p+d*T+h*R,s[7]=l*u+d*S+h*b,s[2]=f*E+m*A+v*C,s[5]=f*p+m*T+v*R,s[8]=f*u+m*S+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*s*d+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,f=o*c-d*s,m=l*s-a*c,v=t*h+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=h*E,e[1]=(r*l-d*n)*E,e[2]=(o*n-r*a)*E,e[3]=f*E,e[4]=(d*t-r*c)*E,e[5]=(r*s-o*t)*E,e[6]=m*E,e[7]=(n*c-l*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gr.makeScale(e,t)),this}rotate(e){return this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Ie;function ho(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function b1(){const i=lr("canvas");return i.style.display="block",i}const aa={};function Ti(i){i in aa||(aa[i]=!0,console.warn(i))}function w1(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const oa=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),la=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R1(){const i={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===je&&(r.r=ln(r.r),r.g=ln(r.g),r.b=ln(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vn?ar:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ti("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ti("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oi]:{primaries:e,whitePoint:n,transfer:ar,toXYZ:oa,fromXYZ:la,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:oa,fromXYZ:la,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}const qe=R1();function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ii(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class C1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gn===void 0&&(Gn=lr("canvas")),Gn.width=e.width,Gn.height=e.height;const r=Gn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Gn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ln(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ln(t[n]/255)*255):t[n]=ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P1=0;class Gs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(vr(r[a].image)):s.push(vr(r[a]))}else s=vr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?C1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D1=0;const xr=new z;class yt extends ci{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=Nn,r=Nn,s=Yt,a=Fn,o=Wt,c=$t,l=yt.DEFAULT_ANISOTROPY,d=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=bi(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xr).x}get height(){return this.source.getSize(xr).y}get depth(){return this.source.getSize(xr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=eo;yt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],d=c[4],h=c[8],f=c[1],m=c[5],v=c[9],E=c[2],p=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-E)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+E)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,S=(m+1)/2,C=(u+1)/2,R=(d+f)/4,b=(h+E)/4,L=(v+p)/4;return T>S&&T>C?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=R/n,s=b/n):S>C?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=R/r,s=L/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=b/s,r=L/s),this.set(n,r,s,t),this}let A=Math.sqrt((p-v)*(p-v)+(h-E)*(h-E)+(f-d)*(f-d));return Math.abs(A)<.001&&(A=1),this.x=(p-v)/A,this.y=(h-E)/A,this.z=(f-d)/A,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L1 extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new yt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends L1{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fo extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class U1 extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(s,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ii.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ii.copy(n.boundingBox)),Ii.applyMatrix4(e.matrixWorld),this.union(Ii)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pi),Ni.subVectors(this.max,pi),kn.subVectors(e.a,pi),Wn.subVectors(e.b,pi),Xn.subVectors(e.c,pi),fn.subVectors(Wn,kn),dn.subVectors(Xn,Wn),An.subVectors(kn,Xn);let t=[0,-fn.z,fn.y,0,-dn.z,dn.y,0,-An.z,An.y,fn.z,0,-fn.x,dn.z,0,-dn.x,An.z,0,-An.x,-fn.y,fn.x,0,-dn.y,dn.x,0,-An.y,An.x,0];return!Mr(t,kn,Wn,Xn,Ni)||(t=[1,0,0,0,1,0,0,0,1],!Mr(t,kn,Wn,Xn,Ni))?!1:(Fi.crossVectors(fn,dn),t=[Fi.x,Fi.y,Fi.z],Mr(t,kn,Wn,Xn,Ni))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qt=[new z,new z,new z,new z,new z,new z,new z,new z],zt=new z,Ii=new Ri,kn=new z,Wn=new z,Xn=new z,fn=new z,dn=new z,An=new z,pi=new z,Ni=new z,Fi=new z,bn=new z;function Mr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){bn.fromArray(i,s);const o=r.x*Math.abs(bn.x)+r.y*Math.abs(bn.y)+r.z*Math.abs(bn.z),c=e.dot(bn),l=t.dot(bn),d=n.dot(bn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const I1=new Ri,mi=new z,Sr=new z;class ks{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):I1.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mi.subVectors(e,this.center);const t=mi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(mi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mi.copy(e.center).add(Sr)),this.expandByPoint(mi.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const en=new z,Er=new z,Oi=new z,pn=new z,yr=new z,Bi=new z,Tr=new z;class N1{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Er.copy(e).add(t).multiplyScalar(.5),Oi.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(Er);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Oi),o=pn.dot(this.direction),c=-pn.dot(Oi),l=pn.lengthSq(),d=Math.abs(1-a*a);let h,f,m,v;if(d>0)if(h=a*c-o,f=a*o-c,v=s*d,h>=0)if(f>=-v)if(f<=v){const E=1/d;h*=E,f*=E,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=v?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Er).addScaledVector(Oi,f),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),r=en.dot(en)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,r,s){yr.subVectors(t,e),Bi.subVectors(n,e),Tr.crossVectors(yr,Bi);let a=this.direction.dot(Tr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,e);const c=o*this.direction.dot(Bi.crossVectors(pn,Bi));if(c<0)return null;const l=o*this.direction.dot(yr.cross(pn));if(l<0||c+l>a)return null;const d=-o*pn.dot(Tr);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,r,s,a,o,c,l,d,h,f,m,v,E,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,d,h,f,m,v,E,p)}set(e,t,n,r,s,a,o,c,l,d,h,f,m,v,E,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=v,u[11]=E,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/qn.setFromMatrixColumn(e,0).length(),s=1/qn.setFromMatrixColumn(e,1).length(),a=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,v=o*d,E=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=m+v*l,t[5]=f-E*l,t[9]=-o*c,t[2]=E-f*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*d,m=c*h,v=l*d,E=l*h;t[0]=f+E*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=m*o-v,t[6]=E+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*d,m=c*h,v=l*d,E=l*h;t[0]=f-E*o,t[4]=-a*h,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*d,t[9]=E-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*d,m=a*h,v=o*d,E=o*h;t[0]=c*d,t[4]=v*l-m,t[8]=f*l+E,t[1]=c*h,t[5]=E*l+f,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,v=o*c,E=o*l;t[0]=c*d,t[4]=E-f*h,t[8]=v*h+m,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*h+v,t[10]=f-E*h}else if(e.order==="XZY"){const f=a*c,m=a*l,v=o*c,E=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=f*h+E,t[5]=a*d,t[9]=m*h-v,t[2]=v*h-m,t[6]=o*d,t[10]=E*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F1,e,O1)}lookAt(e,t,n){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),mn.crossVectors(n,Dt),mn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),mn.crossVectors(n,Dt)),mn.normalize(),zi.crossVectors(Dt,mn),r[0]=mn.x,r[4]=zi.x,r[8]=Dt.x,r[1]=mn.y,r[5]=zi.y,r[9]=Dt.y,r[2]=mn.z,r[6]=zi.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],m=n[13],v=n[2],E=n[6],p=n[10],u=n[14],A=n[3],T=n[7],S=n[11],C=n[15],R=r[0],b=r[4],L=r[8],M=r[12],x=r[1],D=r[5],O=r[9],H=r[13],$=r[2],Y=r[6],Z=r[10],te=r[14],q=r[3],he=r[7],ge=r[11],be=r[15];return s[0]=a*R+o*x+c*$+l*q,s[4]=a*b+o*D+c*Y+l*he,s[8]=a*L+o*O+c*Z+l*ge,s[12]=a*M+o*H+c*te+l*be,s[1]=d*R+h*x+f*$+m*q,s[5]=d*b+h*D+f*Y+m*he,s[9]=d*L+h*O+f*Z+m*ge,s[13]=d*M+h*H+f*te+m*be,s[2]=v*R+E*x+p*$+u*q,s[6]=v*b+E*D+p*Y+u*he,s[10]=v*L+E*O+p*Z+u*ge,s[14]=v*M+E*H+p*te+u*be,s[3]=A*R+T*x+S*$+C*q,s[7]=A*b+T*D+S*Y+C*he,s[11]=A*L+T*O+S*Z+C*ge,s[15]=A*M+T*H+S*te+C*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],f=e[10],m=e[14],v=e[3],E=e[7],p=e[11],u=e[15];return v*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*m-n*c*m)+E*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*d-s*c*d)+p*(+t*l*h-t*o*m-s*a*h+n*a*m+s*o*d-n*l*d)+u*(-r*o*d-t*c*h+t*o*f+r*a*h-n*a*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],f=e[10],m=e[11],v=e[12],E=e[13],p=e[14],u=e[15],A=h*p*l-E*f*l+E*c*m-o*p*m-h*c*u+o*f*u,T=v*f*l-d*p*l-v*c*m+a*p*m+d*c*u-a*f*u,S=d*E*l-v*h*l+v*o*m-a*E*m-d*o*u+a*h*u,C=v*h*c-d*E*c-v*o*f+a*E*f+d*o*p-a*h*p,R=t*A+n*T+r*S+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=A*b,e[1]=(E*f*s-h*p*s-E*r*m+n*p*m+h*r*u-n*f*u)*b,e[2]=(o*p*s-E*c*s+E*r*l-n*p*l-o*r*u+n*c*u)*b,e[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*m-n*c*m)*b,e[4]=T*b,e[5]=(d*p*s-v*f*s+v*r*m-t*p*m-d*r*u+t*f*u)*b,e[6]=(v*c*s-a*p*s-v*r*l+t*p*l+a*r*u-t*c*u)*b,e[7]=(a*f*s-d*c*s+d*r*l-t*f*l-a*r*m+t*c*m)*b,e[8]=S*b,e[9]=(v*h*s-d*E*s-v*n*m+t*E*m+d*n*u-t*h*u)*b,e[10]=(a*E*s-v*o*s+v*n*l-t*E*l-a*n*u+t*o*u)*b,e[11]=(d*o*s-a*h*s-d*n*l+t*h*l+a*n*m-t*o*m)*b,e[12]=C*b,e[13]=(d*E*r-v*h*r+v*n*f-t*E*f-d*n*p+t*h*p)*b,e[14]=(v*o*r-a*E*r-v*n*c+t*E*c+a*n*p-t*o*p)*b,e[15]=(a*h*r-d*o*r+d*n*c-t*h*c-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+n,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,h=o+o,f=s*l,m=s*d,v=s*h,E=a*d,p=a*h,u=o*h,A=c*l,T=c*d,S=c*h,C=n.x,R=n.y,b=n.z;return r[0]=(1-(E+u))*C,r[1]=(m+S)*C,r[2]=(v-T)*C,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(f+u))*R,r[6]=(p+A)*R,r[7]=0,r[8]=(v+T)*b,r[9]=(p-A)*b,r[10]=(1-(f+E))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=qn.set(r[0],r[1],r[2]).length();const a=qn.set(r[4],r[5],r[6]).length(),o=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const l=1/s,d=1/a,h=1/o;return Ht.elements[0]*=l,Ht.elements[1]*=l,Ht.elements[2]*=l,Ht.elements[4]*=d,Ht.elements[5]*=d,Ht.elements[6]*=d,Ht.elements[8]*=h,Ht.elements[9]*=h,Ht.elements[10]*=h,t.setFromRotationMatrix(Ht),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Kt,c=!1){const l=this.elements,d=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let v,E;if(c)v=s/(a-s),E=a*s/(a-s);else if(o===Kt)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===or)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Kt,c=!1){const l=this.elements,d=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r);let v,E;if(c)v=1/(a-s),E=a/(a-s);else if(o===Kt)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===or)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new z,Ht=new ct,F1=new z(0,0,0),O1=new z(1,1,1),mn=new z,zi=new z,Dt=new z,ca=new ct,ua=new wi;class Jt{constructor(e=0,t=0,n=0,r=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ua.setFromEuler(this),this.setFromQuaternion(ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B1=0;const ha=new z,Yn=new wi,tn=new ct,Hi=new z,_i=new z,z1=new z,H1=new wi,fa=new z(1,0,0),da=new z(0,1,0),pa=new z(0,0,1),ma={type:"added"},V1={type:"removed"},Kn={type:"childadded",child:null},Ar={type:"childremoved",child:null};class vt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new z,t=new Jt,n=new wi,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ie}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(fa,e)}rotateY(e){return this.rotateOnAxis(da,e)}rotateZ(e){return this.rotateOnAxis(pa,e)}translateOnAxis(e,t){return ha.copy(e).applyQuaternion(this.quaternion),this.position.add(ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fa,e)}translateY(e){return this.translateOnAxis(da,e)}translateZ(e){return this.translateOnAxis(pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hi.copy(e):Hi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(_i,Hi,this.up):tn.lookAt(Hi,_i,this.up),this.quaternion.setFromRotationMatrix(tn),r&&(tn.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(tn),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ma),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V1),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ma),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,z1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,H1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vt.DEFAULT_UP=new z(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new z,nn=new z,br=new z,rn=new z,Zn=new z,$n=new z,_a=new z,wr=new z,Rr=new z,Cr=new z,Pr=new at,Dr=new at,Lr=new at;class Gt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),nn.subVectors(n,t),br.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(nn),c=Vt.dot(br),l=nn.dot(nn),d=nn.dot(br),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(l*c-o*d)*f,v=(a*d-o*c)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,rn.x),c.addScaledVector(a,rn.y),c.addScaledVector(o,rn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Pr.setScalar(0),Dr.setScalar(0),Lr.setScalar(0),Pr.fromBufferAttribute(e,t),Dr.fromBufferAttribute(e,n),Lr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Pr,s.x),a.addScaledVector(Dr,s.y),a.addScaledVector(Lr,s.z),a}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),nn.subVectors(e,t),Vt.cross(nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Vt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Zn.subVectors(r,n),$n.subVectors(s,n),wr.subVectors(e,n);const c=Zn.dot(wr),l=$n.dot(wr);if(c<=0&&l<=0)return t.copy(n);Rr.subVectors(e,r);const d=Zn.dot(Rr),h=$n.dot(Rr);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Zn,a);Cr.subVectors(e,s);const m=Zn.dot(Cr),v=$n.dot(Cr);if(v>=0&&m<=v)return t.copy(s);const E=m*l-c*v;if(E<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector($n,o);const p=d*v-m*h;if(p<=0&&h-d>=0&&m-v>=0)return _a.subVectors(s,r),o=(h-d)/(h-d+(m-v)),t.copy(r).addScaledVector(_a,o);const u=1/(p+E+f);return a=E*u,o=f*u,t.copy(n).addScaledVector(Zn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},Vi={h:0,s:0,l:0};function Ur(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=A1(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ur(a,s,e+1/3),this.g=Ur(a,s,e),this.b=Ur(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=mo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ln(e.r),this.g=ln(e.g),this.b=ln(e.b),this}copyLinearToSRGB(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return qe.workingToColorSpace(Mt.copy(this),e),Math.round(Ve(Mt.r*255,0,255))*65536+Math.round(Ve(Mt.g*255,0,255))*256+Math.round(Ve(Mt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=bt){qe.workingToColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(Vi);const n=mr(_n.h,Vi.h,t),r=mr(_n.s,Vi.s,t),s=mr(_n.l,Vi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new We;We.NAMES=mo;let G1=0;class Ci extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=ni,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _o extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new z,Gi=new Ge;let k1=0;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ia,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ia&&(e.usage=this.usage),e}}class go extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vo extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let W1=0;const Ft=new ct,Ir=new vt,Jn=new z,Lt=new Ri,gi=new Ri,_t=new z;class Bt extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ho(e)?vo:go)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gi.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Lt.min,gi.min),Lt.expandByPoint(_t),_t.addVectors(Lt.max,gi.max),Lt.expandByPoint(_t)):(Lt.expandByPoint(gi.min),Lt.expandByPoint(gi.max))}Lt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)_t.fromBufferAttribute(o,l),c&&(Jn.fromBufferAttribute(e,l),_t.add(Jn)),r=Math.max(r,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new z,c[L]=new z;const l=new z,d=new z,h=new z,f=new Ge,m=new Ge,v=new Ge,E=new z,p=new z;function u(L,M,x){l.fromBufferAttribute(n,L),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,M),v.fromBufferAttribute(s,x),d.sub(l),h.sub(l),m.sub(f),v.sub(f);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(E.copy(d).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(D),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(D),o[L].add(E),o[M].add(E),o[x].add(E),c[L].add(p),c[M].add(p),c[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,M=A.length;L<M;++L){const x=A[L],D=x.start,O=x.count;for(let H=D,$=D+O;H<$;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new z,S=new z,C=new z,R=new z;function b(L){C.fromBufferAttribute(r,L),R.copy(C);const M=o[L];T.copy(M),T.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(R,M);const D=S.dot(c[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,D)}for(let L=0,M=A.length;L<M;++L){const x=A[L],D=x.start,O=x.count;for(let H=D,$=D+O;H<$;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,l=new z,d=new z,h=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),E=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,f=new l.constructor(c.length*d);let m=0,v=0;for(let E=0,p=c.length;E<p;E++){o.isInterleavedBufferAttribute?m=c[E]*o.data.stride+o.offset:m=c[E]*d;for(let u=0;u<d;u++)f[v++]=l[m++]}return new Zt(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,h=l.length;d<h;d++){const f=l[d],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ga=new ct,wn=new N1,ki=new ks,va=new z,Wi=new z,Xi=new z,qi=new z,Nr=new z,Yi=new z,xa=new z,Ki=new z;class lt extends vt{constructor(e=new Bt,t=new _o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Yi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],h=s[c];d!==0&&(Nr.fromBufferAttribute(h,e),a?Yi.addScaledVector(Nr,d):Yi.addScaledVector(Nr.sub(t),d))}t.add(Yi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ki.copy(n.boundingSphere),ki.applyMatrix4(s),wn.copy(e.ray).recast(e.near),!(ki.containsPoint(wn.origin)===!1&&(wn.intersectSphere(ki,va)===null||wn.origin.distanceToSquared(va)>(e.far-e.near)**2))&&(ga.copy(s).invert(),wn.copy(e.ray).applyMatrix4(ga),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const p=f[v],u=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,C=T;S<C;S+=3){const R=o.getX(S),b=o.getX(S+1),L=o.getX(S+2);r=Zi(this,u,e,n,l,d,h,R,b,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let p=v,u=E;p<u;p+=3){const A=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);r=Zi(this,a,e,n,l,d,h,A,T,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const p=f[v],u=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,C=T;S<C;S+=3){const R=S,b=S+1,L=S+2;r=Zi(this,u,e,n,l,d,h,R,b,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let p=v,u=E;p<u;p+=3){const A=p,T=p+1,S=p+2;r=Zi(this,a,e,n,l,d,h,A,T,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function X1(i,e,t,n,r,s,a,o){let c;if(e.side===wt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===En,o),c===null)return null;Ki.copy(o),Ki.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ki);return l<t.near||l>t.far?null:{distance:l,point:Ki.clone(),object:i}}function Zi(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Wi),i.getVertexPosition(c,Xi),i.getVertexPosition(l,qi);const d=X1(i,e,t,n,Wi,Xi,qi,xa);if(d){const h=new z;Gt.getBarycoord(xa,Wi,Xi,qi,h),r&&(d.uv=Gt.getInterpolatedAttribute(r,o,c,l,h,new Ge)),s&&(d.uv1=Gt.getInterpolatedAttribute(s,o,c,l,h,new Ge)),a&&(d.normal=Gt.getInterpolatedAttribute(a,o,c,l,h,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new z,materialIndex:0};Gt.getNormal(Wi,Xi,qi,f.normal),d.face=f,d.barycoord=h}return d}class ui extends Bt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(h,2));function v(E,p,u,A,T,S,C,R,b,L,M){const x=S/b,D=C/L,O=S/2,H=C/2,$=R/2,Y=b+1,Z=L+1;let te=0,q=0;const he=new z;for(let ge=0;ge<Z;ge++){const be=ge*D-H;for(let Ne=0;Ne<Y;Ne++){const Ye=Ne*x-O;he[E]=Ye*A,he[p]=be*T,he[u]=$,l.push(he.x,he.y,he.z),he[E]=0,he[p]=0,he[u]=R>0?1:-1,d.push(he.x,he.y,he.z),h.push(Ne/b),h.push(1-ge/L),te+=1}}for(let ge=0;ge<L;ge++)for(let be=0;be<b;be++){const Ne=f+be+Y*ge,Ye=f+be+Y*(ge+1),Ke=f+(be+1)+Y*(ge+1),ke=f+(be+1)+Y*ge;c.push(Ne,Ye,ke),c.push(Ye,Ke,ke),q+=6}o.addGroup(m,q,M),m+=q,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=li(i[t]);for(const r in n)e[r]=n[r]}return e}function q1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Y1={clone:li,merge:Et};var K1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K1,this.fragmentShader=Z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mo extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Kt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new z,Ma=new Ge,Sa=new Ge;class Ot extends Mo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gn.x,gn.y).multiplyScalar(-e/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-e/gn.z)}getViewSize(e,t){return this.getViewBounds(e,Ma,Sa),t.subVectors(Sa,Ma)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jn=-90,Qn=1;class $1 extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ot(jn,Qn,e,t);r.layers=this.layers,this.add(r);const s=new Ot(jn,Qn,e,t);s.layers=this.layers,this.add(s);const a=new Ot(jn,Qn,e,t);a.layers=this.layers,this.add(a);const o=new Ot(jn,Qn,e,t);o.layers=this.layers,this.add(o);const c=new Ot(jn,Qn,e,t);c.layers=this.layers,this.add(c);const l=new Ot(jn,Qn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Kt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class So extends yt{constructor(e=[],t=si,n,r,s,a,o,c,l,d){super(e,t,n,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J1 extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new So(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ui(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:Mn});s.uniforms.tEquirect.value=t;const a=new lt(r,s),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Yt),new $1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class xn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j1={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,n),u=this._getHandJoint(l,E);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j1)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ws{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new Ws(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Q1 extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Or=new z,el=new z,tl=new Ie;class Dn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Or.subVectors(n,t).cross(el.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Or),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tl.getNormalMatrix(e),r=this.coplanarPoint(Or).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new ks,nl=new Ge(.5,.5),$i=new z;class Xs{constructor(e=new Dn,t=new Dn,n=new Dn,r=new Dn,s=new Dn,a=new Dn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],h=s[5],f=s[6],m=s[7],v=s[8],E=s[9],p=s[10],u=s[11],A=s[12],T=s[13],S=s[14],C=s[15];if(r[0].setComponents(l-a,m-d,u-v,C-A).normalize(),r[1].setComponents(l+a,m+d,u+v,C+A).normalize(),r[2].setComponents(l+o,m+h,u+E,C+T).normalize(),r[3].setComponents(l-o,m-h,u-E,C-T).normalize(),n)r[4].setComponents(c,f,p,S).normalize(),r[5].setComponents(l-c,m-f,u-p,C-S).normalize();else if(r[4].setComponents(l-c,m-f,u-p,C-S).normalize(),t===Kt)r[5].setComponents(l+c,m+f,u+p,C+S).normalize();else if(t===or)r[5].setComponents(c,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){Rn.center.set(0,0,0);const t=nl.distanceTo(e.center);return Rn.radius=.7071067811865476+t,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($i.x=r.normal.x>0?e.max.x:e.min.x,$i.y=r.normal.y>0?e.max.y:e.min.y,$i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class il extends yt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eo extends yt{constructor(e,t,n=Bn,r,s,a,o=Xt,c=Xt,l,d=Ei,h=1){if(d!==Ei&&d!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yo extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class On extends Bt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let v=0;const E=[],p=n/2;let u=0;A(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function A(){const S=new z,C=new z;let R=0;const b=(t-e)/n;for(let L=0;L<=s;L++){const M=[],x=L/s,D=x*(t-e)+e;for(let O=0;O<=r;O++){const H=O/r,$=H*c+o,Y=Math.sin($),Z=Math.cos($);C.x=D*Y,C.y=-x*n+p,C.z=D*Z,h.push(C.x,C.y,C.z),S.set(Y,b,Z).normalize(),f.push(S.x,S.y,S.z),m.push(H,1-x),M.push(v++)}E.push(M)}for(let L=0;L<r;L++)for(let M=0;M<s;M++){const x=E[M][L],D=E[M+1][L],O=E[M+1][L+1],H=E[M][L+1];(e>0||M!==0)&&(d.push(x,D,H),R+=3),(t>0||M!==s-1)&&(d.push(D,O,H),R+=3)}l.addGroup(u,R,0),u+=R}function T(S){const C=v,R=new Ge,b=new z;let L=0;const M=S===!0?e:t,x=S===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),v++;const D=v;for(let O=0;O<=r;O++){const $=O/r*c+o,Y=Math.cos($),Z=Math.sin($);b.x=M*Z,b.y=p*x,b.z=M*Y,h.push(b.x,b.y,b.z),f.push(0,x,0),R.x=Y*.5+.5,R.y=Z*.5*x+.5,m.push(R.x,R.y),v++}for(let O=0;O<r;O++){const H=C+O,$=D+O;S===!0?d.push($,$+1,H):d.push($+1,$,H),L+=3}l.addGroup(u,L,S===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qs extends On{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new qs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ys extends Bt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),d(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const T=new z,S=new z,C=new z;for(let R=0;R<t.length;R+=3)m(t[R+0],T),m(t[R+1],S),m(t[R+2],C),c(T,S,C,A)}function c(A,T,S,C){const R=C+1,b=[];for(let L=0;L<=R;L++){b[L]=[];const M=A.clone().lerp(S,L/R),x=T.clone().lerp(S,L/R),D=R-L;for(let O=0;O<=D;O++)O===0&&L===R?b[L][O]=M:b[L][O]=M.clone().lerp(x,O/D)}for(let L=0;L<R;L++)for(let M=0;M<2*(R-L)-1;M++){const x=Math.floor(M/2);M%2===0?(f(b[L][x+1]),f(b[L+1][x]),f(b[L][x])):(f(b[L][x+1]),f(b[L+1][x+1]),f(b[L+1][x]))}}function l(A){const T=new z;for(let S=0;S<s.length;S+=3)T.x=s[S+0],T.y=s[S+1],T.z=s[S+2],T.normalize().multiplyScalar(A),s[S+0]=T.x,s[S+1]=T.y,s[S+2]=T.z}function d(){const A=new z;for(let T=0;T<s.length;T+=3){A.x=s[T+0],A.y=s[T+1],A.z=s[T+2];const S=p(A)/2/Math.PI+.5,C=u(A)/Math.PI+.5;a.push(S,1-C)}v(),h()}function h(){for(let A=0;A<a.length;A+=6){const T=a[A+0],S=a[A+2],C=a[A+4],R=Math.max(T,S,C),b=Math.min(T,S,C);R>.9&&b<.1&&(T<.2&&(a[A+0]+=1),S<.2&&(a[A+2]+=1),C<.2&&(a[A+4]+=1))}}function f(A){s.push(A.x,A.y,A.z)}function m(A,T){const S=A*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function v(){const A=new z,T=new z,S=new z,C=new z,R=new Ge,b=new Ge,L=new Ge;for(let M=0,x=0;M<s.length;M+=9,x+=6){A.set(s[M+0],s[M+1],s[M+2]),T.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),R.set(a[x+0],a[x+1]),b.set(a[x+2],a[x+3]),L.set(a[x+4],a[x+5]),C.copy(A).add(T).add(S).divideScalar(3);const D=p(C);E(R,x+0,A,D),E(b,x+2,T,D),E(L,x+4,S,D)}}function E(A,T,S,C){C<0&&A.x===1&&(a[T]=A.x-1),S.x===0&&S.z===0&&(a[T]=C/2/Math.PI+.5)}function p(A){return Math.atan2(A.z,-A.x)}function u(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.vertices,e.indices,e.radius,e.details)}}class cr extends Ys{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cr(e.radius,e.detail)}}class Pi extends Bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,d=c+1,h=e/o,f=t/c,m=[],v=[],E=[],p=[];for(let u=0;u<d;u++){const A=u*f-a;for(let T=0;T<l;T++){const S=T*h-s;v.push(S,-A,0),E.push(0,0,1),p.push(T/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let A=0;A<o;A++){const T=A+l*u,S=A+l*(u+1),C=A+1+l*(u+1),R=A+1+l*u;m.push(T,S,R),m.push(S,C,R)}this.setIndex(m),this.setAttribute("position",new dt(v,3)),this.setAttribute("normal",new dt(E,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.widthSegments,e.heightSegments)}}class rl extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sl extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class al extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class To extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ol extends To{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Br=new ct,Ea=new z,ya=new z;class ll{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ea.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ea),ya.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ya),t.updateMatrixWorld(),Br.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ao extends Mo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cl extends ll{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ul extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new cl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hl extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ta(i,e,t,n){const r=fl(n);switch(t){case so:return i*e;case oo:return i*e/r.components*r.byteLength;case zs:return i*e/r.components*r.byteLength;case lo:return i*e*2/r.components*r.byteLength;case Hs:return i*e*2/r.components*r.byteLength;case ao:return i*e*3/r.components*r.byteLength;case Wt:return i*e*4/r.components*r.byteLength;case Vs:return i*e*4/r.components*r.byteLength;case er:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ss:case os:return Math.max(i,16)*Math.max(e,8)/4;case rs:case as:return Math.max(i,8)*Math.max(e,8)/2;case ls:case cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ds:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ps:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ms:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _s:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ms:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ss:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Es:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ys:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ts:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case As:case bs:case ws:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Rs:case Cs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ps:case Ds:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fl(i){switch(i){case $t:case to:return{byteLength:1,components:1};case Mi:case no:case Ai:return{byteLength:2,components:1};case Os:case Bs:return{byteLength:2,components:4};case Bn:case Fs:case on:return{byteLength:4,components:1};case io:case ro:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ns}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ns);function bo(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function dl(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){const v=h[f],E=h[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++f,h[f]=E)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){const E=h[m];i.bufferSubData(l,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var pl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ml=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_l=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ml=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,El=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Al=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ll=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ul=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Il=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ol=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ql=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$l=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ql=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ec=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ic=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ac=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_c=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ec=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ac=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ic=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Oc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$c=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,t2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,i2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,o2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,l2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,S2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,L2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,X2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:pl,alphahash_pars_fragment:ml,alphamap_fragment:_l,alphamap_pars_fragment:gl,alphatest_fragment:vl,alphatest_pars_fragment:xl,aomap_fragment:Ml,aomap_pars_fragment:Sl,batching_pars_vertex:El,batching_vertex:yl,begin_vertex:Tl,beginnormal_vertex:Al,bsdfs:bl,iridescence_fragment:wl,bumpmap_pars_fragment:Rl,clipping_planes_fragment:Cl,clipping_planes_pars_fragment:Pl,clipping_planes_pars_vertex:Dl,clipping_planes_vertex:Ll,color_fragment:Ul,color_pars_fragment:Il,color_pars_vertex:Nl,color_vertex:Fl,common:Ol,cube_uv_reflection_fragment:Bl,defaultnormal_vertex:zl,displacementmap_pars_vertex:Hl,displacementmap_vertex:Vl,emissivemap_fragment:Gl,emissivemap_pars_fragment:kl,colorspace_fragment:Wl,colorspace_pars_fragment:Xl,envmap_fragment:ql,envmap_common_pars_fragment:Yl,envmap_pars_fragment:Kl,envmap_pars_vertex:Zl,envmap_physical_pars_fragment:ac,envmap_vertex:$l,fog_vertex:Jl,fog_pars_vertex:jl,fog_fragment:Ql,fog_pars_fragment:ec,gradientmap_pars_fragment:tc,lightmap_pars_fragment:nc,lights_lambert_fragment:ic,lights_lambert_pars_fragment:rc,lights_pars_begin:sc,lights_toon_fragment:oc,lights_toon_pars_fragment:lc,lights_phong_fragment:cc,lights_phong_pars_fragment:uc,lights_physical_fragment:hc,lights_physical_pars_fragment:fc,lights_fragment_begin:dc,lights_fragment_maps:pc,lights_fragment_end:mc,logdepthbuf_fragment:_c,logdepthbuf_pars_fragment:gc,logdepthbuf_pars_vertex:vc,logdepthbuf_vertex:xc,map_fragment:Mc,map_pars_fragment:Sc,map_particle_fragment:Ec,map_particle_pars_fragment:yc,metalnessmap_fragment:Tc,metalnessmap_pars_fragment:Ac,morphinstance_vertex:bc,morphcolor_vertex:wc,morphnormal_vertex:Rc,morphtarget_pars_vertex:Cc,morphtarget_vertex:Pc,normal_fragment_begin:Dc,normal_fragment_maps:Lc,normal_pars_fragment:Uc,normal_pars_vertex:Ic,normal_vertex:Nc,normalmap_pars_fragment:Fc,clearcoat_normal_fragment_begin:Oc,clearcoat_normal_fragment_maps:Bc,clearcoat_pars_fragment:zc,iridescence_pars_fragment:Hc,opaque_fragment:Vc,packing:Gc,premultiplied_alpha_fragment:kc,project_vertex:Wc,dithering_fragment:Xc,dithering_pars_fragment:qc,roughnessmap_fragment:Yc,roughnessmap_pars_fragment:Kc,shadowmap_pars_fragment:Zc,shadowmap_pars_vertex:$c,shadowmap_vertex:Jc,shadowmask_pars_fragment:jc,skinbase_vertex:Qc,skinning_pars_vertex:e2,skinning_vertex:t2,skinnormal_vertex:n2,specularmap_fragment:i2,specularmap_pars_fragment:r2,tonemapping_fragment:s2,tonemapping_pars_fragment:a2,transmission_fragment:o2,transmission_pars_fragment:l2,uv_pars_fragment:c2,uv_pars_vertex:u2,uv_vertex:h2,worldpos_vertex:f2,background_vert:d2,background_frag:p2,backgroundCube_vert:m2,backgroundCube_frag:_2,cube_vert:g2,cube_frag:v2,depth_vert:x2,depth_frag:M2,distanceRGBA_vert:S2,distanceRGBA_frag:E2,equirect_vert:y2,equirect_frag:T2,linedashed_vert:A2,linedashed_frag:b2,meshbasic_vert:w2,meshbasic_frag:R2,meshlambert_vert:C2,meshlambert_frag:P2,meshmatcap_vert:D2,meshmatcap_frag:L2,meshnormal_vert:U2,meshnormal_frag:I2,meshphong_vert:N2,meshphong_frag:F2,meshphysical_vert:O2,meshphysical_frag:B2,meshtoon_vert:z2,meshtoon_frag:H2,points_vert:V2,points_frag:G2,shadow_vert:k2,shadow_frag:W2,sprite_vert:X2,sprite_frag:q2},de={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},qt={basic:{uniforms:Et([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Et([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Et([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Et([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Et([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Et([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Et([de.points,de.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Et([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Et([de.common,de.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Et([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Et([de.sprite,de.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Et([de.common,de.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Et([de.lights,de.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};qt.physical={uniforms:Et([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ji={r:0,b:0,g:0},Cn=new Jt,Y2=new ct;function K2(i,e,t,n,r,s,a){const o=new We(0);let c=s===!0?0:1,l,d,h=null,f=0,m=null;function v(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function E(T){let S=!1;const C=v(T);C===null?u(o,c):C&&C.isColor&&(u(C,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,S){const C=v(S);C&&(C.isCubeTexture||C.mapping===ur)?(d===void 0&&(d=new lt(new ui(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:li(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Cn.copy(S.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Y2.makeRotationFromEuler(Cn)),d.material.toneMapped=qe.getTransfer(C.colorSpace)!==je,(h!==C||f!==C.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=C,f=C.version,m=i.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new lt(new Pi(2,2),new yn({name:"BackgroundMaterial",uniforms:li(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=qe.getTransfer(C.colorSpace)!==je,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=C,f=C.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function u(T,S){T.getRGB(Ji,xo(i)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,S,a)}function A(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),c=S,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,u(o,c)},render:E,addToRenderList:p,dispose:A}}function Z2(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(x,D,O,H,$){let Y=!1;const Z=h(H,O,D);s!==Z&&(s=Z,l(s.object)),Y=m(x,H,O,$),Y&&v(x,H,O,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(x,D,O,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function h(x,D,O){const H=O.wireframe===!0;let $=n[x.id];$===void 0&&($={},n[x.id]=$);let Y=$[D.id];Y===void 0&&(Y={},$[D.id]=Y);let Z=Y[H];return Z===void 0&&(Z=f(c()),Y[H]=Z),Z}function f(x){const D=[],O=[],H=[];for(let $=0;$<t;$++)D[$]=0,O[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:H,object:x,attributes:{},index:null}}function m(x,D,O,H){const $=s.attributes,Y=D.attributes;let Z=0;const te=O.getAttributes();for(const q in te)if(te[q].location>=0){const ge=$[q];let be=Y[q];if(be===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(be=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(be=x.instanceColor)),ge===void 0||ge.attribute!==be||be&&ge.data!==be.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function v(x,D,O,H){const $={},Y=D.attributes;let Z=0;const te=O.getAttributes();for(const q in te)if(te[q].location>=0){let ge=Y[q];ge===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor));const be={};be.attribute=ge,ge&&ge.data&&(be.data=ge.data),$[q]=be,Z++}s.attributes=$,s.attributesNum=Z,s.index=H}function E(){const x=s.newAttributes;for(let D=0,O=x.length;D<O;D++)x[D]=0}function p(x){u(x,0)}function u(x,D){const O=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;O[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),$[x]!==D&&(i.vertexAttribDivisor(x,D),$[x]=D)}function A(){const x=s.newAttributes,D=s.enabledAttributes;for(let O=0,H=D.length;O<H;O++)D[O]!==x[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function T(x,D,O,H,$,Y,Z){Z===!0?i.vertexAttribIPointer(x,D,O,$,Y):i.vertexAttribPointer(x,D,O,H,$,Y)}function S(x,D,O,H){E();const $=H.attributes,Y=O.getAttributes(),Z=D.defaultAttributeValues;for(const te in Y){const q=Y[te];if(q.location>=0){let he=$[te];if(he===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),he!==void 0){const ge=he.normalized,be=he.itemSize,Ne=e.get(he);if(Ne===void 0)continue;const Ye=Ne.buffer,Ke=Ne.type,ke=Ne.bytesPerElement,J=Ke===i.INT||Ke===i.UNSIGNED_INT||he.gpuType===Fs;if(he.isInterleavedBufferAttribute){const j=he.data,Se=j.stride,le=he.offset;if(j.isInstancedInterleavedBuffer){for(let Ee=0;Ee<q.locationSize;Ee++)u(q.location+Ee,j.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<q.locationSize;Ee++)p(q.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Ee=0;Ee<q.locationSize;Ee++)T(q.location+Ee,be/q.locationSize,Ke,ge,Se*ke,(le+be/q.locationSize*Ee)*ke,J)}else{if(he.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)u(q.location+j,he.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let j=0;j<q.locationSize;j++)p(q.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let j=0;j<q.locationSize;j++)T(q.location+j,be/q.locationSize,Ke,ge,be*ke,be/q.locationSize*j*ke,J)}}else if(Z!==void 0){const ge=Z[te];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(q.location,ge);break;case 3:i.vertexAttrib3fv(q.location,ge);break;case 4:i.vertexAttrib4fv(q.location,ge);break;default:i.vertexAttrib1fv(q.location,ge)}}}}A()}function C(){L();for(const x in n){const D=n[x];for(const O in D){const H=D[O];for(const $ in H)d(H[$].object),delete H[$];delete D[O]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const O in D){const H=D[O];for(const $ in H)d(H[$].object),delete H[$];delete D[O]}delete n[x.id]}function b(x){for(const D in n){const O=n[D];if(O[x.id]===void 0)continue;const H=O[x.id];for(const $ in H)d(H[$].object),delete H[$];delete O[x.id]}}function L(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:p,disableUnusedAttributes:A}}function $2(i,e,t){let n;function r(l){n=l}function s(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=d[v];t.update(m,n,1)}function c(l,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],d[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,h);let v=0;for(let E=0;E<h;E++)v+=d[E]*f[E];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function J2(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Wt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const L=b===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==$t&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==on&&!L)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:C,maxSamples:R}}function j2(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Dn,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,E=h.clipIntersection,p=h.clipShadows,u=i.get(h);if(!r||v===null||v.length===0||s&&!p)s?d(null):l();else{const A=s?0:n,T=A*4;let S=u.clippingState||null;c.value=S,S=d(v,f,T,m);for(let C=0;C!==T;++C)S[C]=t[C];u.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,m,v){const E=h!==null?h.length:0;let p=null;if(E!==0){if(p=c.value,v!==!0||p===null){const u=m+E*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,S=m;T!==E;++T,S+=4)a.copy(h[T]).applyMatrix4(A,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}function Q2(i){let e=new WeakMap;function t(a,o){return o===ts?a.mapping=si:o===ns&&(a.mapping=ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ts||o===ns)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new J1(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ti=4,Aa=[.125,.215,.35,.446,.526,.582],In=20,zr=new Ao,ba=new We;let Hr=null,Vr=0,Gr=0,kr=!1;const Ln=(1+Math.sqrt(5))/2,ei=1/Ln,wa=[new z(-Ln,ei,0),new z(Ln,ei,0),new z(-ei,0,Ln),new z(ei,0,Ln),new z(0,Ln,-ei),new z(0,Ln,ei),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],eu=new z;class Ra{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=eu}=s;Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Da(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hr,Vr,Gr),this._renderer.xr.enabled=kr,e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ai,format:Wt,colorSpace:oi,depthBuffer:!1},r=Ca(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ca(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tu(s)),this._blurMaterial=nu(s,e,t)}return r}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,n,r,s){const c=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(ba),h.toneMapping=Sn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const E=new _o({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),p=new lt(new ui,E);let u=!1;const A=e.background;A?A.isColor&&(E.color.copy(A),e.background=null,u=!0):(E.color.copy(ba),u=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[T],s.y,s.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[T]));const C=this._cubeSize;ji(r,S*C,T>2?C:0,C,C),h.setRenderTarget(r),u&&h.render(p,c),h.render(e,c)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===si||e.mapping===ai;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Da()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ji(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wa[(r-s-1)%wa.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new lt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*In-1),E=s/v,p=isFinite(s)?1+Math.floor(d*E):In;p>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${In}`);const u=[];let A=0;for(let b=0;b<In;++b){const L=b/E,M=Math.exp(-L*L/2);u.push(M),b===0?A+=M:b<p&&(A+=2*M)}for(let b=0;b<u.length;b++)u[b]=u[b]/A;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-n;const S=this._sizeLods[r],C=3*S*(r>T-ti?r-T+ti:0),R=4*(this._cubeSize-S);ji(t,C,R,3*S,2*S),c.setRenderTarget(t),c.render(h,zr)}}function tu(i){const e=[],t=[],n=[];let r=i;const s=i-ti+1+Aa.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-ti?c=Aa[a-i+ti-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,v=6,E=3,p=2,u=1,A=new Float32Array(E*v*m),T=new Float32Array(p*v*m),S=new Float32Array(u*v*m);for(let R=0;R<m;R++){const b=R%3*2/3-1,L=R>2?0:-1,M=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];A.set(M,E*v*R),T.set(f,p*v*R);const x=[R,R,R,R,R,R];S.set(x,u*v*R)}const C=new Bt;C.setAttribute("position",new Zt(A,E)),C.setAttribute("uv",new Zt(T,p)),C.setAttribute("faceIndex",new Zt(S,u)),e.push(C),r>ti&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ca(i,e,t){const n=new zn(i,e,t);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function nu(i,e,t){const n=new Float32Array(In),r=new z(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Pa(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Da(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iu(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ts||c===ns,d=c===si||c===ai;if(l||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ra(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return l&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Ra(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ru(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ti("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function su(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(h){const f=[],m=h.index,v=h.attributes.position;let E=0;if(m!==null){const A=m.array;E=m.version;for(let T=0,S=A.length;T<S;T+=3){const C=A[T+0],R=A[T+1],b=A[T+2];f.push(C,R,R,b,b,C)}}else if(v!==void 0){const A=v.array;E=v.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const C=T+0,R=T+1,b=T+2;f.push(C,R,R,b,b,C)}}else return;const p=new(ho(f)?vo:go)(f,1);p.version=E;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function au(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*a),t.update(m,n,1)}function l(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,f*a,v),t.update(m,n,v))}function d(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];t.update(p,n,1)}function h(f,m,v,E){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/a,m[u],E[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,E,0,v);let u=0;for(let A=0;A<v;A++)u+=m[A]*E[A];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function ou(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function lu(i,e,t){const n=new WeakMap,r=new at;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let x=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),E===!0&&(S=2),p===!0&&(S=3);let C=o.attributes.position.count*S,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*R*4*h),L=new fo(b,C,R,h);L.type=on,L.needsUpdate=!0;const M=S*4;for(let D=0;D<h;D++){const O=u[D],H=A[D],$=T[D],Y=C*R*4*D;for(let Z=0;Z<O.count;Z++){const te=Z*M;v===!0&&(r.fromBufferAttribute(O,Z),b[Y+te+0]=r.x,b[Y+te+1]=r.y,b[Y+te+2]=r.z,b[Y+te+3]=0),E===!0&&(r.fromBufferAttribute(H,Z),b[Y+te+4]=r.x,b[Y+te+5]=r.y,b[Y+te+6]=r.z,b[Y+te+7]=0),p===!0&&(r.fromBufferAttribute($,Z),b[Y+te+8]=r.x,b[Y+te+9]=r.y,b[Y+te+10]=r.z,b[Y+te+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new Ge(C,R)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];const E=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",E),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function cu(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const wo=new yt,La=new Eo(1,1),Ro=new fo,Co=new U1,Po=new So,Ua=[],Ia=[],Na=new Float32Array(16),Fa=new Float32Array(9),Oa=new Float32Array(4);function hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ua[r];if(s===void 0&&(s=new Float32Array(r),Ua[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hr(i,e){let t=Ia[e];t===void 0&&(t=new Int32Array(e),Ia[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function uu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function fu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function du(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function pu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Oa.set(n),i.uniformMatrix2fv(this.addr,!1,Oa),mt(t,n)}}function mu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Fa.set(n),i.uniformMatrix3fv(this.addr,!1,Fa),mt(t,n)}}function _u(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Na.set(n),i.uniformMatrix4fv(this.addr,!1,Na),mt(t,n)}}function gu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function xu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Mu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function Su(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Eu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function yu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function Tu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function Au(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(La.compareFunction=uo,s=La):s=wo,t.setTexture2D(e||s,r)}function bu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Co,r)}function wu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Po,r)}function Ru(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ro,r)}function Cu(i){switch(i){case 5126:return uu;case 35664:return hu;case 35665:return fu;case 35666:return du;case 35674:return pu;case 35675:return mu;case 35676:return _u;case 5124:case 35670:return gu;case 35667:case 35671:return vu;case 35668:case 35672:return xu;case 35669:case 35673:return Mu;case 5125:return Su;case 36294:return Eu;case 36295:return yu;case 36296:return Tu;case 35678:case 36198:case 36298:case 36306:case 35682:return Au;case 35679:case 36299:case 36307:return bu;case 35680:case 36300:case 36308:case 36293:return wu;case 36289:case 36303:case 36311:case 36292:return Ru}}function Pu(i,e){i.uniform1fv(this.addr,e)}function Du(i,e){const t=hi(e,this.size,2);i.uniform2fv(this.addr,t)}function Lu(i,e){const t=hi(e,this.size,3);i.uniform3fv(this.addr,t)}function Uu(i,e){const t=hi(e,this.size,4);i.uniform4fv(this.addr,t)}function Iu(i,e){const t=hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nu(i,e){const t=hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fu(i,e){const t=hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ou(i,e){i.uniform1iv(this.addr,e)}function Bu(i,e){i.uniform2iv(this.addr,e)}function zu(i,e){i.uniform3iv(this.addr,e)}function Hu(i,e){i.uniform4iv(this.addr,e)}function Vu(i,e){i.uniform1uiv(this.addr,e)}function Gu(i,e){i.uniform2uiv(this.addr,e)}function ku(i,e){i.uniform3uiv(this.addr,e)}function Wu(i,e){i.uniform4uiv(this.addr,e)}function Xu(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||wo,s[a])}function qu(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Co,s[a])}function Yu(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Po,s[a])}function Ku(i,e,t){const n=this.cache,r=e.length,s=hr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ro,s[a])}function Zu(i){switch(i){case 5126:return Pu;case 35664:return Du;case 35665:return Lu;case 35666:return Uu;case 35674:return Iu;case 35675:return Nu;case 35676:return Fu;case 5124:case 35670:return Ou;case 35667:case 35671:return Bu;case 35668:case 35672:return zu;case 35669:case 35673:return Hu;case 5125:return Vu;case 36294:return Gu;case 36295:return ku;case 36296:return Wu;case 35678:case 36198:case 36298:case 36306:case 35682:return Xu;case 35679:case 36299:case 36307:return qu;case 35680:case 36300:case 36308:case 36293:return Yu;case 36289:case 36303:case 36311:case 36292:return Ku}}class $u{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cu(t.type)}}class Ju{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zu(t.type)}}class ju{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function Ba(i,e){i.seq.push(e),i.map[e.id]=e}function Qu(i,e,t){const n=i.name,r=n.length;for(Wr.lastIndex=0;;){const s=Wr.exec(n),a=Wr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ba(t,l===void 0?new $u(o,i,e):new Ju(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new ju(o),Ba(t,h)),t=h}}}class rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Qu(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function za(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const eh=37297;let th=0;function nh(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ha=new Ie;function ih(i){qe._getMatrix(Ha,qe.workingColorSpace,i);const e=`mat3( ${Ha.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case ar:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Va(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+nh(i.getShaderSource(e),o)}else return s}function rh(i,e){const t=ih(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sh(i,e){let t;switch(e){case o1:t="Linear";break;case l1:t="Reinhard";break;case c1:t="Cineon";break;case u1:t="ACESFilmic";break;case f1:t="AgX";break;case d1:t="Neutral";break;case h1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qi=new z;function ah(){qe.getLuminanceCoefficients(Qi);const i=Qi.x.toFixed(4),e=Qi.y.toFixed(4),t=Qi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xi).join(`
`)}function lh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ch(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xi(i){return i!==""}function Ga(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ka(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Us(i){return i.replace(uh,fh)}const hh=new Map;function fh(i,e){let t=Be[e];if(t===void 0){const n=hh.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Us(t)}const dh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wa(i){return i.replace(dh,ph)}function ph(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xa(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mh(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ho?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(e="SHADOWMAP_TYPE_VSM"),e}function _h(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case si:case ai:e="ENVMAP_TYPE_CUBE";break;case ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gh(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ai&&(e="ENVMAP_MODE_REFRACTION"),e}function vh(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qa:e="ENVMAP_BLENDING_MULTIPLY";break;case s1:e="ENVMAP_BLENDING_MIX";break;case a1:e="ENVMAP_BLENDING_ADD";break}return e}function xh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mh(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=mh(t),l=_h(t),d=gh(t),h=vh(t),f=xh(t),m=oh(t),v=lh(s),E=r.createProgram();let p,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xi).join(`
`),u.length>0&&(u+=`
`)):(p=[Xa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),u=[Xa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Sn?sh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,rh("linearToOutputTexel",t.outputColorSpace),ah(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xi).join(`
`)),a=Us(a),a=Ga(a,t),a=ka(a,t),o=Us(o),o=Ga(o,t),o=ka(o,t),a=Wa(a),o=Wa(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=A+p+a,S=A+u+o,C=za(r,r.VERTEX_SHADER,T),R=za(r,r.FRAGMENT_SHADER,S);r.attachShader(E,C),r.attachShader(E,R),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function b(D){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(E)||"",H=r.getShaderInfoLog(C)||"",$=r.getShaderInfoLog(R)||"",Y=O.trim(),Z=H.trim(),te=$.trim();let q=!0,he=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,C,R);else{const ge=Va(r,C,"vertex"),be=Va(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+ge+`
`+be)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(Z===""||te==="")&&(he=!1);he&&(D.diagnostics={runnable:q,programLog:Y,vertexShader:{log:Z,prefix:p},fragmentShader:{log:te,prefix:u}})}r.deleteShader(C),r.deleteShader(R),L=new rr(r,E),M=ch(r,E)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(E,eh)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=th++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=R,this}let Sh=0;class Eh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yh(e),t.set(e,n)),n}}class yh{constructor(e){this.id=Sh++,this.code=e,this.usedTimes=0}}function Th(i,e,t,n,r,s,a){const o=new po,c=new Eh,l=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,x,D,O,H){const $=O.fog,Y=H.geometry,Z=M.isMeshStandardMaterial?O.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),q=te&&te.mapping===ur?te.image.height:null,he=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ge=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,be=ge!==void 0?ge.length:0;let Ne=0;Y.morphAttributes.position!==void 0&&(Ne=1),Y.morphAttributes.normal!==void 0&&(Ne=2),Y.morphAttributes.color!==void 0&&(Ne=3);let Ye,Ke,ke,J;if(he){const Oe=qt[he];Ye=Oe.vertexShader,Ke=Oe.fragmentShader}else Ye=M.vertexShader,Ke=M.fragmentShader,c.update(M),ke=c.getVertexShaderID(M),J=c.getFragmentShaderID(M);const j=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),le=H.isInstancedMesh===!0,Ee=H.isBatchedMesh===!0,ze=!!M.map,Ze=!!M.matcap,w=!!te,et=!!M.aoMap,Le=!!M.lightMap,Ce=!!M.bumpMap,ye=!!M.normalMap,$e=!!M.displacementMap,Me=!!M.emissiveMap,Ue=!!M.metalnessMap,ut=!!M.roughnessMap,nt=M.anisotropy>0,y=M.clearcoat>0,_=M.dispersion>0,B=M.iridescence>0,K=M.sheen>0,F=M.transmission>0,I=nt&&!!M.anisotropyMap,ie=y&&!!M.clearcoatMap,V=y&&!!M.clearcoatNormalMap,se=y&&!!M.clearcoatRoughnessMap,ue=B&&!!M.iridescenceMap,X=B&&!!M.iridescenceThicknessMap,Q=K&&!!M.sheenColorMap,fe=K&&!!M.sheenRoughnessMap,pe=!!M.specularMap,ne=!!M.specularColorMap,_e=!!M.specularIntensityMap,P=F&&!!M.transmissionMap,ee=F&&!!M.thicknessMap,ce=!!M.gradientMap,ve=!!M.alphaMap,re=M.alphaTest>0,W=!!M.alphaHash,ae=!!M.extensions;let Ae=Sn;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const Fe={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:Ye,fragmentShader:Ke,defines:M.defines,customVertexShaderID:ke,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ee,batchingColor:Ee&&H._colorsTexture!==null,instancing:le,instancingColor:le&&H.instanceColor!==null,instancingMorph:le&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:oi,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:Ze,envMap:w,envMapMode:w&&te.mapping,envMapCubeUVHeight:q,aoMap:et,lightMap:Le,bumpMap:Ce,normalMap:ye,displacementMap:f&&$e,emissiveMap:Me,normalMapObjectSpace:ye&&M.normalMapType===g1,normalMapTangentSpace:ye&&M.normalMapType===co,metalnessMap:Ue,roughnessMap:ut,anisotropy:nt,anisotropyMap:I,clearcoat:y,clearcoatMap:ie,clearcoatNormalMap:V,clearcoatRoughnessMap:se,dispersion:_,iridescence:B,iridescenceMap:ue,iridescenceThicknessMap:X,sheen:K,sheenColorMap:Q,sheenRoughnessMap:fe,specularMap:pe,specularColorMap:ne,specularIntensityMap:_e,transmission:F,transmissionMap:P,thicknessMap:ee,gradientMap:ce,opaque:M.transparent===!1&&M.blending===ni&&M.alphaToCoverage===!1,alphaMap:ve,alphaTest:re,alphaHash:W,combine:M.combine,mapUv:ze&&E(M.map.channel),aoMapUv:et&&E(M.aoMap.channel),lightMapUv:Le&&E(M.lightMap.channel),bumpMapUv:Ce&&E(M.bumpMap.channel),normalMapUv:ye&&E(M.normalMap.channel),displacementMapUv:$e&&E(M.displacementMap.channel),emissiveMapUv:Me&&E(M.emissiveMap.channel),metalnessMapUv:Ue&&E(M.metalnessMap.channel),roughnessMapUv:ut&&E(M.roughnessMap.channel),anisotropyMapUv:I&&E(M.anisotropyMap.channel),clearcoatMapUv:ie&&E(M.clearcoatMap.channel),clearcoatNormalMapUv:V&&E(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&E(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&E(M.iridescenceMap.channel),iridescenceThicknessMapUv:X&&E(M.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&E(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&E(M.sheenRoughnessMap.channel),specularMapUv:pe&&E(M.specularMap.channel),specularColorMapUv:ne&&E(M.specularColorMap.channel),specularIntensityMapUv:_e&&E(M.specularIntensityMap.channel),transmissionMapUv:P&&E(M.transmissionMap.channel),thicknessMapUv:ee&&E(M.thicknessMap.channel),alphaMapUv:ve&&E(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ye||nt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(ze||ve),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===je,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===an,flipSided:M.side===wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ae&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function u(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(A(x,M),T(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function A(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function T(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const x=v[M.type];let D;if(x){const O=qt[x];D=Y1.clone(O.uniforms)}else D=M.uniforms;return D}function C(M,x){let D;for(let O=0,H=d.length;O<H;O++){const $=d[O];if($.cacheKey===x){D=$,++D.usedTimes;break}}return D===void 0&&(D=new Mh(i,x,M,s),d.push(D)),D}function R(M){if(--M.usedTimes===0){const x=d.indexOf(M);d[x]=d[d.length-1],d.pop(),M.destroy()}}function b(M){c.remove(M)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:b,programs:d,dispose:L}}function Ah(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function bh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ya(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,m,v,E,p){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:E,group:p},i[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=E,u.group=p),e++,u}function o(h,f,m,v,E,p){const u=a(h,f,m,v,E,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(h,f,m,v,E,p){const u=a(h,f,m,v,E,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(h,f){t.length>1&&t.sort(h||bh),n.length>1&&n.sort(f||qa),r.length>1&&r.sort(f||qa)}function d(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:d,sort:l}}function wh(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ya,i.set(n,[a])):r>=s.length?(a=new Ya,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new We};break;case"SpotLight":t={position:new z,direction:new z,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Ch(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ph=0;function Dh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lh(i){const e=new Rh,t=Ch(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const r=new z,s=new ct,a=new ct;function o(l){let d=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,v=0,E=0,p=0,u=0,A=0,T=0,S=0,C=0,R=0,b=0;l.sort(Dh);for(let M=0,x=l.length;M<x;M++){const D=l[M],O=D.color,H=D.intensity,$=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*H,h+=O.g*H,f+=O.b*H;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],H);b++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,q=t.get(D);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=D.shadow.matrix,A++}n.directional[m]=Z,m++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(O).multiplyScalar(H),Z.distance=$,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[E]=Z;const te=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,te.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[E]=te.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.spotShadow[E]=q,n.spotShadowMap[E]=Y,S++}E++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(O).multiplyScalar(H),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=Z,p++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const te=D.shadow,q=t.get(D);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=Y,n.pointShadowMatrix[v]=D.shadow.matrix,T++}n.point[v]=Z,v++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(H),Z.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[u]=Z,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==v||L.spotLength!==E||L.rectAreaLength!==p||L.hemiLength!==u||L.numDirectionalShadows!==A||L.numPointShadows!==T||L.numSpotShadows!==S||L.numSpotMaps!==C||L.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=E,n.rectArea.length=p,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,L.directionalLength=m,L.pointLength=v,L.spotLength=E,L.rectAreaLength=p,L.hemiLength=u,L.numDirectionalShadows=A,L.numPointShadows=T,L.numSpotShadows=S,L.numSpotMaps=C,L.numLightProbes=b,n.version=Ph++)}function c(l,d){let h=0,f=0,m=0,v=0,E=0;const p=d.matrixWorldInverse;for(let u=0,A=l.length;u<A;u++){const T=l[u];if(T.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(T.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const S=n.hemi[E];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),E++}}}return{setup:o,setupView:c,state:n}}function Ka(i){const e=new Lh(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Uh(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ka(i),e.set(r,[o])):s>=a.length?(o=new Ka(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ih=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fh(i,e,t){let n=new Xs;const r=new Ge,s=new Ge,a=new at,o=new sl({depthPacking:_1}),c=new al,l={},d=t.maxTextureSize,h={[En]:wt,[wt]:En,[an]:an},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Ih,fragmentShader:Nh}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Bt;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new lt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let u=this.type;this.render=function(R,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Mn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=u!==sn&&this.type===sn,$=u===sn&&this.type!==sn;for(let Y=0,Z=R.length;Y<Z;Y++){const te=R[Y],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const he=q.getFrameExtents();if(r.multiply(he),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/he.x),r.x=s.x*he.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/he.y),r.y=s.y*he.y,q.mapSize.y=s.y)),q.map===null||H===!0||$===!0){const be=this.type!==sn?{minFilter:Xt,magFilter:Xt}:{};q.map!==null&&q.map.dispose(),q.map=new zn(r.x,r.y,be),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ge=q.getViewportCount();for(let be=0;be<ge;be++){const Ne=q.getViewport(be);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),O.viewport(a),q.updateMatrices(te,be),n=q.getFrustum(),S(b,L,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===sn&&A(q,L),q.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(M,x,D)};function A(R,b){const L=e.update(E);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zn(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,L,f,E,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,L,m,E,null)}function T(R,b,L,M){let x=null;const D=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)x=D;else if(x=L.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const O=x.uuid,H=b.uuid;let $=l[O];$===void 0&&($={},l[O]=$);let Y=$[H];Y===void 0&&(Y=x.clone(),$[H]=Y,b.addEventListener("dispose",C)),x=Y}if(x.visible=b.visible,x.wireframe=b.wireframe,M===sn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=L}return x}function S(R,b,L,M,x){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===sn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const H=e.update(R),$=R.material;if(Array.isArray($)){const Y=H.groups;for(let Z=0,te=Y.length;Z<te;Z++){const q=Y[Z],he=$[q.materialIndex];if(he&&he.visible){const ge=T(R,he,M,x);R.onBeforeShadow(i,R,b,L,H,ge,q),i.renderBufferDirect(L,null,H,ge,R,q),R.onAfterShadow(i,R,b,L,H,ge,q)}}}else if($.visible){const Y=T(R,$,M,x);R.onBeforeShadow(i,R,b,L,H,Y,null),i.renderBufferDirect(L,null,H,Y,R,null),R.onAfterShadow(i,R,b,L,H,Y,null)}}const O=R.children;for(let H=0,$=O.length;H<$;H++)S(O[H],b,L,M,x)}function C(R){R.target.removeEventListener("dispose",C);for(const L in l){const M=l[L],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const Oh={[Kr]:Zr,[$r]:Qr,[Jr]:es,[ri]:jr,[Zr]:Kr,[Qr]:$r,[es]:Jr,[jr]:ri};function Bh(i,e){function t(){let P=!1;const ee=new at;let ce=null;const ve=new at(0,0,0,0);return{setMask:function(re){ce!==re&&!P&&(i.colorMask(re,re,re,re),ce=re)},setLocked:function(re){P=re},setClear:function(re,W,ae,Ae,Fe){Fe===!0&&(re*=Ae,W*=Ae,ae*=Ae),ee.set(re,W,ae,Ae),ve.equals(ee)===!1&&(i.clearColor(re,W,ae,Ae),ve.copy(ee))},reset:function(){P=!1,ce=null,ve.set(-1,0,0,0)}}}function n(){let P=!1,ee=!1,ce=null,ve=null,re=null;return{setReversed:function(W){if(ee!==W){const ae=e.get("EXT_clip_control");W?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),ee=W;const Ae=re;re=null,this.setClear(Ae)}},getReversed:function(){return ee},setTest:function(W){W?j(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(W){ce!==W&&!P&&(i.depthMask(W),ce=W)},setFunc:function(W){if(ee&&(W=Oh[W]),ve!==W){switch(W){case Kr:i.depthFunc(i.NEVER);break;case Zr:i.depthFunc(i.ALWAYS);break;case $r:i.depthFunc(i.LESS);break;case ri:i.depthFunc(i.LEQUAL);break;case Jr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case Qr:i.depthFunc(i.GREATER);break;case es:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=W}},setLocked:function(W){P=W},setClear:function(W){re!==W&&(ee&&(W=1-W),i.clearDepth(W),re=W)},reset:function(){P=!1,ce=null,ve=null,re=null,ee=!1}}}function r(){let P=!1,ee=null,ce=null,ve=null,re=null,W=null,ae=null,Ae=null,Fe=null;return{setTest:function(Oe){P||(Oe?j(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Oe){ee!==Oe&&!P&&(i.stencilMask(Oe),ee=Oe)},setFunc:function(Oe,ft,ot){(ce!==Oe||ve!==ft||re!==ot)&&(i.stencilFunc(Oe,ft,ot),ce=Oe,ve=ft,re=ot)},setOp:function(Oe,ft,ot){(W!==Oe||ae!==ft||Ae!==ot)&&(i.stencilOp(Oe,ft,ot),W=Oe,ae=ft,Ae=ot)},setLocked:function(Oe){P=Oe},setClear:function(Oe){Fe!==Oe&&(i.clearStencil(Oe),Fe=Oe)},reset:function(){P=!1,ee=null,ce=null,ve=null,re=null,W=null,ae=null,Ae=null,Fe=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let d={},h={},f=new WeakMap,m=[],v=null,E=!1,p=null,u=null,A=null,T=null,S=null,C=null,R=null,b=new We(0,0,0),L=0,M=!1,x=null,D=null,O=null,H=null,$=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,te=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=te>=2);let he=null,ge={};const be=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Ye=new at().fromArray(be),Ke=new at().fromArray(Ne);function ke(P,ee,ce,ve){const re=new Uint8Array(4),W=i.createTexture();i.bindTexture(P,W),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<ce;ae++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(ee+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return W}const J={};J[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(ri),Ce(!1),ye(js),j(i.CULL_FACE),et(Mn);function j(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Se(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function le(P,ee){return h[P]!==ee?(i.bindFramebuffer(P,ee),h[P]=ee,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ee),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ee(P,ee){let ce=m,ve=!1;if(P){ce=f.get(ee),ce===void 0&&(ce=[],f.set(ee,ce));const re=P.textures;if(ce.length!==re.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let W=0,ae=re.length;W<ae;W++)ce[W]=i.COLOR_ATTACHMENT0+W;ce.length=re.length,ve=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ce)}function ze(P){return v!==P?(i.useProgram(P),v=P,!0):!1}const Ze={[Un]:i.FUNC_ADD,[Go]:i.FUNC_SUBTRACT,[ko]:i.FUNC_REVERSE_SUBTRACT};Ze[Wo]=i.MIN,Ze[Xo]=i.MAX;const w={[qo]:i.ZERO,[Yo]:i.ONE,[Ko]:i.SRC_COLOR,[qr]:i.SRC_ALPHA,[e1]:i.SRC_ALPHA_SATURATE,[jo]:i.DST_COLOR,[$o]:i.DST_ALPHA,[Zo]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[Qo]:i.ONE_MINUS_DST_COLOR,[Jo]:i.ONE_MINUS_DST_ALPHA,[t1]:i.CONSTANT_COLOR,[n1]:i.ONE_MINUS_CONSTANT_COLOR,[i1]:i.CONSTANT_ALPHA,[r1]:i.ONE_MINUS_CONSTANT_ALPHA};function et(P,ee,ce,ve,re,W,ae,Ae,Fe,Oe){if(P===Mn){E===!0&&(Se(i.BLEND),E=!1);return}if(E===!1&&(j(i.BLEND),E=!0),P!==Vo){if(P!==p||Oe!==M){if((u!==Un||S!==Un)&&(i.blendEquation(i.FUNC_ADD),u=Un,S=Un),Oe)switch(P){case ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFunc(i.ONE,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ta:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ea:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ta:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,T=null,C=null,R=null,b.set(0,0,0),L=0,p=P,M=Oe}return}re=re||ee,W=W||ce,ae=ae||ve,(ee!==u||re!==S)&&(i.blendEquationSeparate(Ze[ee],Ze[re]),u=ee,S=re),(ce!==A||ve!==T||W!==C||ae!==R)&&(i.blendFuncSeparate(w[ce],w[ve],w[W],w[ae]),A=ce,T=ve,C=W,R=ae),(Ae.equals(b)===!1||Fe!==L)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Fe),b.copy(Ae),L=Fe),p=P,M=!1}function Le(P,ee){P.side===an?Se(i.CULL_FACE):j(i.CULL_FACE);let ce=P.side===wt;ee&&(ce=!ce),Ce(ce),P.blending===ni&&P.transparent===!1?et(Mn):et(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const ve=P.stencilWrite;o.setTest(ve),ve&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function ye(P){P!==Bo?(j(i.CULL_FACE),P!==D&&(P===js?i.cullFace(i.BACK):P===zo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),D=P}function $e(P){P!==O&&(Z&&i.lineWidth(P),O=P)}function Me(P,ee,ce){P?(j(i.POLYGON_OFFSET_FILL),(H!==ee||$!==ce)&&(i.polygonOffset(ee,ce),H=ee,$=ce)):Se(i.POLYGON_OFFSET_FILL)}function Ue(P){P?j(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function ut(P){P===void 0&&(P=i.TEXTURE0+Y-1),he!==P&&(i.activeTexture(P),he=P)}function nt(P,ee,ce){ce===void 0&&(he===null?ce=i.TEXTURE0+Y-1:ce=he);let ve=ge[ce];ve===void 0&&(ve={type:void 0,texture:void 0},ge[ce]=ve),(ve.type!==P||ve.texture!==ee)&&(he!==ce&&(i.activeTexture(ce),he=ce),i.bindTexture(P,ee||J[P]),ve.type=P,ve.texture=ee)}function y(){const P=ge[he];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function I(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(P){Ye.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ye.copy(P))}function fe(P){Ke.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ke.copy(P))}function pe(P,ee){let ce=l.get(ee);ce===void 0&&(ce=new WeakMap,l.set(ee,ce));let ve=ce.get(P);ve===void 0&&(ve=i.getUniformBlockIndex(ee,P.name),ce.set(P,ve))}function ne(P,ee){const ve=l.get(ee).get(P);c.get(ee)!==ve&&(i.uniformBlockBinding(ee,ve,P.__bindingPointIndex),c.set(ee,ve))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},he=null,ge={},h={},f=new WeakMap,m=[],v=null,E=!1,p=null,u=null,A=null,T=null,S=null,C=null,R=null,b=new We(0,0,0),L=0,M=!1,x=null,D=null,O=null,H=null,$=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:Se,bindFramebuffer:le,drawBuffers:Ee,useProgram:ze,setBlending:et,setMaterial:Le,setFlipSided:Ce,setCullFace:ye,setLineWidth:$e,setPolygonOffset:Me,setScissorTest:Ue,activeTexture:ut,bindTexture:nt,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:ue,texImage3D:X,updateUBOMapping:pe,uniformBlockBinding:ne,texStorage2D:V,texStorage3D:se,texSubImage2D:K,texSubImage3D:F,compressedTexSubImage2D:I,compressedTexSubImage3D:ie,scissor:Q,viewport:fe,reset:_e}}function zh(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,_){return m?new OffscreenCanvas(y,_):lr("canvas")}function E(y,_,B){let K=1;const F=nt(y);if((F.width>B||F.height>B)&&(K=B/Math.max(F.width,F.height)),K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const I=Math.floor(K*F.width),ie=Math.floor(K*F.height);h===void 0&&(h=v(I,ie));const V=_?v(I,ie):h;return V.width=I,V.height=ie,V.getContext("2d").drawImage(y,0,0,I,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+I+"x"+ie+")."),V}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),y;return y}function p(y){return y.generateMipmaps}function u(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,B,K,F=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let I=_;if(_===i.RED&&(B===i.FLOAT&&(I=i.R32F),B===i.HALF_FLOAT&&(I=i.R16F),B===i.UNSIGNED_BYTE&&(I=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(I=i.R8UI),B===i.UNSIGNED_SHORT&&(I=i.R16UI),B===i.UNSIGNED_INT&&(I=i.R32UI),B===i.BYTE&&(I=i.R8I),B===i.SHORT&&(I=i.R16I),B===i.INT&&(I=i.R32I)),_===i.RG&&(B===i.FLOAT&&(I=i.RG32F),B===i.HALF_FLOAT&&(I=i.RG16F),B===i.UNSIGNED_BYTE&&(I=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(I=i.RG8UI),B===i.UNSIGNED_SHORT&&(I=i.RG16UI),B===i.UNSIGNED_INT&&(I=i.RG32UI),B===i.BYTE&&(I=i.RG8I),B===i.SHORT&&(I=i.RG16I),B===i.INT&&(I=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(I=i.RGB8UI),B===i.UNSIGNED_SHORT&&(I=i.RGB16UI),B===i.UNSIGNED_INT&&(I=i.RGB32UI),B===i.BYTE&&(I=i.RGB8I),B===i.SHORT&&(I=i.RGB16I),B===i.INT&&(I=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),B===i.UNSIGNED_INT&&(I=i.RGBA32UI),B===i.BYTE&&(I=i.RGBA8I),B===i.SHORT&&(I=i.RGBA16I),B===i.INT&&(I=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(I=i.R11F_G11F_B10F)),_===i.RGBA){const ie=F?ar:qe.getTransfer(K);B===i.FLOAT&&(I=i.RGBA32F),B===i.HALF_FLOAT&&(I=i.RGBA16F),B===i.UNSIGNED_BYTE&&(I=ie===je?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function S(y,_){let B;return y?_===null||_===Bn||_===Si?B=i.DEPTH24_STENCIL8:_===on?B=i.DEPTH32F_STENCIL8:_===Mi&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Bn||_===Si?B=i.DEPTH_COMPONENT24:_===on?B=i.DEPTH_COMPONENT32F:_===Mi&&(B=i.DEPTH_COMPONENT16),B}function C(y,_){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Xt&&y.minFilter!==Yt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function R(y){const _=y.target;_.removeEventListener("dispose",R),L(_),_.isVideoTexture&&d.delete(_)}function b(y){const _=y.target;_.removeEventListener("dispose",b),x(_)}function L(y){const _=n.get(y);if(_.__webglInit===void 0)return;const B=y.source,K=f.get(B);if(K){const F=K[_.__cacheKey];F.usedTimes--,F.usedTimes===0&&M(y),Object.keys(K).length===0&&f.delete(B)}n.remove(y)}function M(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const B=y.source,K=f.get(B);delete K[_.__cacheKey],a.memory.textures--}function x(y){const _=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let F=0;F<_.__webglFramebuffer[K].length;F++)i.deleteFramebuffer(_.__webglFramebuffer[K][F]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=y.textures;for(let K=0,F=B.length;K<F;K++){const I=n.get(B[K]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(y)}let D=0;function O(){D=0}function H(){const y=D;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),D+=1,y}function $(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function Y(y,_){const B=n.get(y);if(y.isVideoTexture&&Ue(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&B.__version!==y.version){const K=y.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,y,_);return}}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function Z(y,_){const B=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){J(B,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function te(y,_){const B=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){J(B,y,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function q(y,_){const B=n.get(y);if(y.version>0&&B.__version!==y.version){j(B,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const he={[sr]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[is]:i.MIRRORED_REPEAT},ge={[Xt]:i.NEAREST,[p1]:i.NEAREST_MIPMAP_NEAREST,[Ui]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[dr]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},be={[v1]:i.NEVER,[T1]:i.ALWAYS,[x1]:i.LESS,[uo]:i.LEQUAL,[M1]:i.EQUAL,[y1]:i.GEQUAL,[S1]:i.GREATER,[E1]:i.NOTEQUAL};function Ne(y,_){if(_.type===on&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Yt||_.magFilter===dr||_.magFilter===Ui||_.magFilter===Fn||_.minFilter===Yt||_.minFilter===dr||_.minFilter===Ui||_.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,he[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,he[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,he[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ge[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Ui&&_.minFilter!==Fn||_.type===on&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ye(y,_){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",R));const K=_.source;let F=f.get(K);F===void 0&&(F={},f.set(K,F));const I=$(_);if(I!==y.__cacheKey){F[I]===void 0&&(F[I]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),F[I].usedTimes++;const ie=F[y.__cacheKey];ie!==void 0&&(F[y.__cacheKey].usedTimes--,ie.usedTimes===0&&M(_)),y.__cacheKey=I,y.__webglTexture=F[I].texture}return B}function Ke(y,_,B){return Math.floor(Math.floor(y/B)/_)}function ke(y,_,B,K){const I=y.updateRanges;if(I.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,K,_.data);else{I.sort((X,Q)=>X.start-Q.start);let ie=0;for(let X=1;X<I.length;X++){const Q=I[ie],fe=I[X],pe=Q.start+Q.count,ne=Ke(fe.start,_.width,4),_e=Ke(Q.start,_.width,4);fe.start<=pe+1&&ne===_e&&Ke(fe.start+fe.count-1,_.width,4)===ne?Q.count=Math.max(Q.count,fe.start+fe.count-Q.start):(++ie,I[ie]=fe)}I.length=ie+1;const V=i.getParameter(i.UNPACK_ROW_LENGTH),se=i.getParameter(i.UNPACK_SKIP_PIXELS),ue=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let X=0,Q=I.length;X<Q;X++){const fe=I[X],pe=Math.floor(fe.start/4),ne=Math.ceil(fe.count/4),_e=pe%_.width,P=Math.floor(pe/_.width),ee=ne,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,_e,P,ee,ce,B,K,_.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,V),i.pixelStorei(i.UNPACK_SKIP_PIXELS,se),i.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function J(y,_,B){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);const F=Ye(y,_),I=_.source;t.bindTexture(K,y.__webglTexture,i.TEXTURE0+B);const ie=n.get(I);if(I.version!==ie.__version||F===!0){t.activeTexture(i.TEXTURE0+B);const V=qe.getPrimaries(qe.workingColorSpace),se=_.colorSpace===vn?null:qe.getPrimaries(_.colorSpace),ue=_.colorSpace===vn||V===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let X=E(_.image,!1,r.maxTextureSize);X=ut(_,X);const Q=s.convert(_.format,_.colorSpace),fe=s.convert(_.type);let pe=T(_.internalFormat,Q,fe,_.colorSpace,_.isVideoTexture);Ne(K,_);let ne;const _e=_.mipmaps,P=_.isVideoTexture!==!0,ee=ie.__version===void 0||F===!0,ce=I.dataReady,ve=C(_,X);if(_.isDepthTexture)pe=S(_.format===yi,_.type),ee&&(P?t.texStorage2D(i.TEXTURE_2D,1,pe,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,pe,X.width,X.height,0,Q,fe,null));else if(_.isDataTexture)if(_e.length>0){P&&ee&&t.texStorage2D(i.TEXTURE_2D,ve,pe,_e[0].width,_e[0].height);for(let re=0,W=_e.length;re<W;re++)ne=_e[re],P?ce&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ne.width,ne.height,Q,fe,ne.data):t.texImage2D(i.TEXTURE_2D,re,pe,ne.width,ne.height,0,Q,fe,ne.data);_.generateMipmaps=!1}else P?(ee&&t.texStorage2D(i.TEXTURE_2D,ve,pe,X.width,X.height),ce&&ke(_,X,Q,fe)):t.texImage2D(i.TEXTURE_2D,0,pe,X.width,X.height,0,Q,fe,X.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,pe,_e[0].width,_e[0].height,X.depth);for(let re=0,W=_e.length;re<W;re++)if(ne=_e[re],_.format!==Wt)if(Q!==null)if(P){if(ce)if(_.layerUpdates.size>0){const ae=Ta(ne.width,ne.height,_.format,_.type);for(const Ae of _.layerUpdates){const Fe=ne.data.subarray(Ae*ae/ne.data.BYTES_PER_ELEMENT,(Ae+1)*ae/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ae,ne.width,ne.height,1,Q,Fe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,X.depth,Q,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,pe,ne.width,ne.height,X.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ne.width,ne.height,X.depth,Q,fe,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,pe,ne.width,ne.height,X.depth,0,Q,fe,ne.data)}else{P&&ee&&t.texStorage2D(i.TEXTURE_2D,ve,pe,_e[0].width,_e[0].height);for(let re=0,W=_e.length;re<W;re++)ne=_e[re],_.format!==Wt?Q!==null?P?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ne.width,ne.height,Q,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,re,pe,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ce&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ne.width,ne.height,Q,fe,ne.data):t.texImage2D(i.TEXTURE_2D,re,pe,ne.width,ne.height,0,Q,fe,ne.data)}else if(_.isDataArrayTexture)if(P){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,pe,X.width,X.height,X.depth),ce)if(_.layerUpdates.size>0){const re=Ta(X.width,X.height,_.format,_.type);for(const W of _.layerUpdates){const ae=X.data.subarray(W*re/X.data.BYTES_PER_ELEMENT,(W+1)*re/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,X.width,X.height,1,Q,fe,ae)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Q,fe,X.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,X.width,X.height,X.depth,0,Q,fe,X.data);else if(_.isData3DTexture)P?(ee&&t.texStorage3D(i.TEXTURE_3D,ve,pe,X.width,X.height,X.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Q,fe,X.data)):t.texImage3D(i.TEXTURE_3D,0,pe,X.width,X.height,X.depth,0,Q,fe,X.data);else if(_.isFramebufferTexture){if(ee)if(P)t.texStorage2D(i.TEXTURE_2D,ve,pe,X.width,X.height);else{let re=X.width,W=X.height;for(let ae=0;ae<ve;ae++)t.texImage2D(i.TEXTURE_2D,ae,pe,re,W,0,Q,fe,null),re>>=1,W>>=1}}else if(_e.length>0){if(P&&ee){const re=nt(_e[0]);t.texStorage2D(i.TEXTURE_2D,ve,pe,re.width,re.height)}for(let re=0,W=_e.length;re<W;re++)ne=_e[re],P?ce&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Q,fe,ne):t.texImage2D(i.TEXTURE_2D,re,pe,Q,fe,ne);_.generateMipmaps=!1}else if(P){if(ee){const re=nt(X);t.texStorage2D(i.TEXTURE_2D,ve,pe,re.width,re.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,fe,X)}else t.texImage2D(i.TEXTURE_2D,0,pe,Q,fe,X);p(_)&&u(K),ie.__version=I.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function j(y,_,B){if(_.image.length!==6)return;const K=Ye(y,_),F=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+B);const I=n.get(F);if(F.version!==I.__version||K===!0){t.activeTexture(i.TEXTURE0+B);const ie=qe.getPrimaries(qe.workingColorSpace),V=_.colorSpace===vn?null:qe.getPrimaries(_.colorSpace),se=_.colorSpace===vn||ie===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,X=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let W=0;W<6;W++)!ue&&!X?Q[W]=E(_.image[W],!0,r.maxCubemapSize):Q[W]=X?_.image[W].image:_.image[W],Q[W]=ut(_,Q[W]);const fe=Q[0],pe=s.convert(_.format,_.colorSpace),ne=s.convert(_.type),_e=T(_.internalFormat,pe,ne,_.colorSpace),P=_.isVideoTexture!==!0,ee=I.__version===void 0||K===!0,ce=F.dataReady;let ve=C(_,fe);Ne(i.TEXTURE_CUBE_MAP,_);let re;if(ue){P&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,_e,fe.width,fe.height);for(let W=0;W<6;W++){re=Q[W].mipmaps;for(let ae=0;ae<re.length;ae++){const Ae=re[ae];_.format!==Wt?pe!==null?P?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,0,0,Ae.width,Ae.height,pe,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,_e,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,0,0,Ae.width,Ae.height,pe,ne,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,_e,Ae.width,Ae.height,0,pe,ne,Ae.data)}}}else{if(re=_.mipmaps,P&&ee){re.length>0&&ve++;const W=nt(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,_e,W.width,W.height)}for(let W=0;W<6;W++)if(X){P?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Q[W].width,Q[W].height,pe,ne,Q[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,_e,Q[W].width,Q[W].height,0,pe,ne,Q[W].data);for(let ae=0;ae<re.length;ae++){const Fe=re[ae].image[W].image;P?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,0,0,Fe.width,Fe.height,pe,ne,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,_e,Fe.width,Fe.height,0,pe,ne,Fe.data)}}else{P?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,pe,ne,Q[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,_e,pe,ne,Q[W]);for(let ae=0;ae<re.length;ae++){const Ae=re[ae];P?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,0,0,pe,ne,Ae.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,_e,pe,ne,Ae.image[W])}}}p(_)&&u(i.TEXTURE_CUBE_MAP),I.__version=F.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Se(y,_,B,K,F,I){const ie=s.convert(B.format,B.colorSpace),V=s.convert(B.type),se=T(B.internalFormat,ie,V,B.colorSpace),ue=n.get(_),X=n.get(B);if(X.__renderTarget=_,!ue.__hasExternalTextures){const Q=Math.max(1,_.width>>I),fe=Math.max(1,_.height>>I);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?t.texImage3D(F,I,se,Q,fe,_.depth,0,ie,V,null):t.texImage2D(F,I,se,Q,fe,0,ie,V,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),Me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,F,X.__webglTexture,0,$e(_)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,F,X.__webglTexture,I),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(y,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const K=_.depthTexture,F=K&&K.isDepthTexture?K.type:null,I=S(_.stencilBuffer,F),ie=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=$e(_);Me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V,I,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,V,I,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,I,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,y)}else{const K=_.textures;for(let F=0;F<K.length;F++){const I=K[F],ie=s.convert(I.format,I.colorSpace),V=s.convert(I.type),se=T(I.internalFormat,ie,V,I.colorSpace),ue=$e(_);B&&Me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,se,_.width,_.height):Me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const F=K.__webglTexture,I=$e(_);if(_.depthTexture.format===Ei)Me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(_.depthTexture.format===yi)Me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function ze(y){const _=n.get(y),B=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const K=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const F=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",F)};K.addEventListener("dispose",F),_.__depthDisposeCallback=F}_.__boundDepthTexture=K}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const K=y.texture.mipmaps;K&&K.length>0?Ee(_.__webglFramebuffer[0],y):Ee(_.__webglFramebuffer,y)}else if(B){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),le(_.__webglDepthbuffer[K],y,!1);else{const F=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,I)}}else{const K=y.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),le(_.__webglDepthbuffer,y,!1);else{const F=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,I)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(y,_,B){const K=n.get(y);_!==void 0&&Se(K.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ze(y)}function w(y){const _=y.texture,B=n.get(y),K=n.get(_);y.addEventListener("dispose",b);const F=y.textures,I=y.isWebGLCubeRenderTarget===!0,ie=F.length>1;if(ie||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,a.memory.textures++),I){B.__webglFramebuffer=[];for(let V=0;V<6;V++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[V]=[];for(let se=0;se<_.mipmaps.length;se++)B.__webglFramebuffer[V][se]=i.createFramebuffer()}else B.__webglFramebuffer[V]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let V=0;V<_.mipmaps.length;V++)B.__webglFramebuffer[V]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ie)for(let V=0,se=F.length;V<se;V++){const ue=n.get(F[V]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&Me(y)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let V=0;V<F.length;V++){const se=F[V];B.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[V]);const ue=s.convert(se.format,se.colorSpace),X=s.convert(se.type),Q=T(se.internalFormat,ue,X,se.colorSpace,y.isXRRenderTarget===!0),fe=$e(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,B.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),le(B.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(I){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,_);for(let V=0;V<6;V++)if(_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)Se(B.__webglFramebuffer[V][se],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,se);else Se(B.__webglFramebuffer[V],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);p(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let V=0,se=F.length;V<se;V++){const ue=F[V],X=n.get(ue);let Q=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Q=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,X.__webglTexture),Ne(Q,ue),Se(B.__webglFramebuffer,y,ue,i.COLOR_ATTACHMENT0+V,Q,0),p(ue)&&u(Q)}t.unbindTexture()}else{let V=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(V=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(V,K.__webglTexture),Ne(V,_),_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)Se(B.__webglFramebuffer[se],y,_,i.COLOR_ATTACHMENT0,V,se);else Se(B.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,V,0);p(_)&&u(V),t.unbindTexture()}y.depthBuffer&&ze(y)}function et(y){const _=y.textures;for(let B=0,K=_.length;B<K;B++){const F=_[B];if(p(F)){const I=A(y),ie=n.get(F).__webglTexture;t.bindTexture(I,ie),u(I),t.unbindTexture()}}}const Le=[],Ce=[];function ye(y){if(y.samples>0){if(Me(y)===!1){const _=y.textures,B=y.width,K=y.height;let F=i.COLOR_BUFFER_BIT;const I=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(y),V=_.length>1;if(V)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const se=y.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ue]);const X=n.get(_[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,X,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,F,i.NEAREST),c===!0&&(Le.length=0,Ce.length=0,Le.push(i.COLOR_ATTACHMENT0+ue),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Le.push(I),Ce.push(I),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ue]);const X=n.get(_[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,X,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function $e(y){return Math.min(r.maxSamples,y.samples)}function Me(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ue(y){const _=a.render.frame;d.get(y)!==_&&(d.set(y,_),y.update())}function ut(y,_){const B=y.colorSpace,K=y.format,F=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||B!==oi&&B!==vn&&(qe.getTransfer(B)===je?(K!==Wt||F!==$t)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function nt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=Ze,this.setupRenderTarget=w,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Me}function Hh(i,e){function t(n,r=vn){let s;const a=qe.getTransfer(r);if(n===$t)return i.UNSIGNED_BYTE;if(n===Os)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===io)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ro)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===to)return i.BYTE;if(n===no)return i.SHORT;if(n===Mi)return i.UNSIGNED_SHORT;if(n===Fs)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Ai)return i.HALF_FLOAT;if(n===so)return i.ALPHA;if(n===ao)return i.RGB;if(n===Wt)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===oo)return i.RED;if(n===zs)return i.RED_INTEGER;if(n===lo)return i.RG;if(n===Hs)return i.RG_INTEGER;if(n===Vs)return i.RGBA_INTEGER;if(n===er||n===tr||n===nr||n===ir)if(a===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===er)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===er)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rs||n===ss||n===as||n===os)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ss)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===as)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===os)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ls||n===cs||n===us)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ls||n===cs)return a===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===us)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hs||n===fs||n===ds||n===ps||n===ms||n===_s||n===gs||n===vs||n===xs||n===Ms||n===Ss||n===Es||n===ys||n===Ts)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===hs)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fs)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ds)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ps)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ms)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_s)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gs)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vs)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xs)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ms)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ss)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Es)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ys)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ts)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===As||n===bs||n===ws)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===As)return a===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ws)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rs||n===Cs||n===Ps||n===Ds)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Rs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ps)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ds)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Vh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yn({vertexShader:Vh,fragmentShader:Gh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wh extends ci{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,f=null,m=null,v=null;const E=typeof XRWebGLBinding<"u",p=new kh,u={},A=t.getContextAttributes();let T=null,S=null;const C=[],R=[],b=new Ge;let L=null;const M=new Ot;M.viewport=new at;const x=new Ot;x.viewport=new at;const D=[M,x],O=new hl;let H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let j=C[J];return j===void 0&&(j=new Fr,C[J]=j),j.getTargetRaySpace()},this.getControllerGrip=function(J){let j=C[J];return j===void 0&&(j=new Fr,C[J]=j),j.getGripSpace()},this.getHand=function(J){let j=C[J];return j===void 0&&(j=new Fr,C[J]=j),j.getHandSpace()};function Y(J){const j=R.indexOf(J.inputSource);if(j===-1)return;const Se=C[j];Se!==void 0&&(Se.update(J.inputSource,J.frame,l||a),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",te);for(let J=0;J<C.length;J++){const j=R[J];j!==null&&(R[J]=null,C[J].disconnect(j))}H=null,$=null,p.reset();for(const J in u)delete u[J];e.setRenderTarget(T),m=null,f=null,h=null,r=null,S=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",te),A.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,le=null,Ee=null;A.depth&&(Ee=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=A.stencil?yi:Ei,le=A.stencil?Si:Bn);const ze={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new zn(f.textureWidth,f.textureHeight,{format:Wt,type:$t,depthTexture:new Eo(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new zn(m.framebufferWidth,m.framebufferHeight,{format:Wt,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(J){for(let j=0;j<J.removed.length;j++){const Se=J.removed[j],le=R.indexOf(Se);le>=0&&(R[le]=null,C[le].disconnect(Se))}for(let j=0;j<J.added.length;j++){const Se=J.added[j];let le=R.indexOf(Se);if(le===-1){for(let ze=0;ze<C.length;ze++)if(ze>=R.length){R.push(Se),le=ze;break}else if(R[ze]===null){R[ze]=Se,le=ze;break}if(le===-1)break}const Ee=C[le];Ee&&Ee.connect(Se)}}const q=new z,he=new z;function ge(J,j,Se){q.setFromMatrixPosition(j.matrixWorld),he.setFromMatrixPosition(Se.matrixWorld);const le=q.distanceTo(he),Ee=j.projectionMatrix.elements,ze=Se.projectionMatrix.elements,Ze=Ee[14]/(Ee[10]-1),w=Ee[14]/(Ee[10]+1),et=(Ee[9]+1)/Ee[5],Le=(Ee[9]-1)/Ee[5],Ce=(Ee[8]-1)/Ee[0],ye=(ze[8]+1)/ze[0],$e=Ze*Ce,Me=Ze*ye,Ue=le/(-Ce+ye),ut=Ue*-Ce;if(j.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ut),J.translateZ(Ue),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ee[10]===-1)J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const nt=Ze+Ue,y=w+Ue,_=$e-ut,B=Me+(le-ut),K=et*w/y*nt,F=Le*w/y*nt;J.projectionMatrix.makePerspective(_,B,K,F,nt,y),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function be(J,j){j===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(j.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let j=J.near,Se=J.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),O.near=x.near=M.near=j,O.far=x.far=M.far=Se,(H!==O.near||$!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,$=O.far),O.layers.mask=J.layers.mask|6,M.layers.mask=O.layers.mask&3,x.layers.mask=O.layers.mask&5;const le=J.parent,Ee=O.cameras;be(O,le);for(let ze=0;ze<Ee.length;ze++)be(Ee[ze],le);Ee.length===2?ge(O,M,x):O.projectionMatrix.copy(M.projectionMatrix),Ne(J,O,le)};function Ne(J,j,Se){Se===null?J.matrix.copy(j.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(j.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ls*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(J){return u[J]};let Ye=null;function Ke(J,j){if(d=j.getViewerPose(l||a),v=j,d!==null){const Se=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let le=!1;Se.length!==O.cameras.length&&(O.cameras.length=0,le=!0);for(let w=0;w<Se.length;w++){const et=Se[w];let Le=null;if(m!==null)Le=m.getViewport(et);else{const ye=h.getViewSubImage(f,et);Le=ye.viewport,w===0&&(e.setRenderTargetTextures(S,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(S))}let Ce=D[w];Ce===void 0&&(Ce=new Ot,Ce.layers.enable(w),Ce.viewport=new at,D[w]=Ce),Ce.matrix.fromArray(et.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(et.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Le.x,Le.y,Le.width,Le.height),w===0&&(O.matrix.copy(Ce.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),le===!0&&O.cameras.push(Ce)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=n.getBinding();const w=h.getDepthInformation(Se[0]);w&&w.isValid&&w.texture&&p.init(w,r.renderState)}if(Ee&&Ee.includes("camera-access")&&E){e.state.unbindTexture(),h=n.getBinding();for(let w=0;w<Se.length;w++){const et=Se[w].camera;if(et){let Le=u[et];Le||(Le=new yo,u[et]=Le);const Ce=h.getCameraImage(et);Le.sourceTexture=Ce}}}}for(let Se=0;Se<C.length;Se++){const le=R[Se],Ee=C[Se];le!==null&&Ee!==void 0&&Ee.update(le,j,l||a)}Ye&&Ye(J,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}const ke=new bo;ke.setAnimationLoop(Ke),this.setAnimationLoop=function(J){Ye=J},this.dispose=function(){}}}const Pn=new Jt,Xh=new ct;function qh(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,xo(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,A,T,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),E(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,A,T):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===wt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===wt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=e.get(u),T=A.envMap,S=A.envMapRotation;T&&(p.envMap.value=T,Pn.copy(S),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),p.envMapRotation.value.setFromMatrix4(Xh.makeRotationFromEuler(Pn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,A,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=T*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===wt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function E(p,u){const A=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Yh(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const S=T.program;n.uniformBlockBinding(A,S)}function l(A,T){let S=r[A.id];S===void 0&&(v(A),S=d(A),r[A.id]=S,A.addEventListener("dispose",p));const C=T.program;n.updateUBOMapping(A,C);const R=e.render.frame;s[A.id]!==R&&(f(A),s[A.id]=R)}function d(A){const T=h();A.__bindingPointIndex=T;const S=i.createBuffer(),C=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=r[A.id],S=A.uniforms,C=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,b=S.length;R<b;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,x=L.length;M<x;M++){const D=L[M];if(m(D,R,M,C)===!0){const O=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let Y=0;Y<H.length;Y++){const Z=H[Y],te=E(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,O+$,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,$),$+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,S,C){const R=A.value,b=T+"_"+S;if(C[b]===void 0)return typeof R=="number"||typeof R=="boolean"?C[b]=R:C[b]=R.clone(),!0;{const L=C[b];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return C[b]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function v(A){const T=A.uniforms;let S=0;const C=16;for(let b=0,L=T.length;b<L;b++){const M=Array.isArray(T[b])?T[b]:[T[b]];for(let x=0,D=M.length;x<D;x++){const O=M[x],H=Array.isArray(O.value)?O.value:[O.value];for(let $=0,Y=H.length;$<Y;$++){const Z=H[$],te=E(Z),q=S%C,he=q%te.boundary,ge=q+he;S+=he,ge!==0&&C-ge<te.storage&&(S+=C-ge),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=te.storage}}}const R=S%C;return R>0&&(S+=C-R),A.__size=S,A.__cache={},this}function E(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Kh{constructor(e={}){const{canvas:t=b1(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),E=new Int32Array(4);let p=null,u=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=bt;let R=0,b=0,L=null,M=-1,x=null;const D=new at,O=new at;let H=null;const $=new We(0);let Y=0,Z=t.width,te=t.height,q=1,he=null,ge=null;const be=new at(0,0,Z,te),Ne=new at(0,0,Z,te);let Ye=!1;const Ke=new Xs;let ke=!1,J=!1;const j=new ct,Se=new z,le=new at,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Ze(){return L===null?q:1}let w=n;function et(g,U){return t.getContext(g,U)}try{const g={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ns}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",re,!1),w===null){const U="webgl2";if(w=et(U,g),w===null)throw et(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Le,Ce,ye,$e,Me,Ue,ut,nt,y,_,B,K,F,I,ie,V,se,ue,X,Q,fe,pe,ne,_e;function P(){Le=new ru(w),Le.init(),pe=new Hh(w,Le),Ce=new J2(w,Le,e,pe),ye=new Bh(w,Le),Ce.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),$e=new ou(w),Me=new Ah,Ue=new zh(w,Le,ye,Me,Ce,pe,$e),ut=new Q2(S),nt=new iu(S),y=new dl(w),ne=new Z2(w,y),_=new su(w,y,$e,ne),B=new cu(w,_,y,$e),X=new lu(w,Ce,Ue),V=new j2(Me),K=new Th(S,ut,nt,Le,Ce,ne,V),F=new qh(S,Me),I=new wh,ie=new Uh(Le),ue=new K2(S,ut,nt,ye,B,m,c),se=new Fh(S,B,Ce),_e=new Yh(w,$e,Ce,ye),Q=new $2(w,Le,$e),fe=new au(w,Le,$e),$e.programs=K.programs,S.capabilities=Ce,S.extensions=Le,S.properties=Me,S.renderLists=I,S.shadowMap=se,S.state=ye,S.info=$e}P();const ee=new Wh(S,w);this.xr=ee,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const g=Le.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Le.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(g){g!==void 0&&(q=g,this.setSize(Z,te,!1))},this.getSize=function(g){return g.set(Z,te)},this.setSize=function(g,U,G=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=g,te=U,t.width=Math.floor(g*q),t.height=Math.floor(U*q),G===!0&&(t.style.width=g+"px",t.style.height=U+"px"),this.setViewport(0,0,g,U)},this.getDrawingBufferSize=function(g){return g.set(Z*q,te*q).floor()},this.setDrawingBufferSize=function(g,U,G){Z=g,te=U,q=G,t.width=Math.floor(g*G),t.height=Math.floor(U*G),this.setViewport(0,0,g,U)},this.getCurrentViewport=function(g){return g.copy(D)},this.getViewport=function(g){return g.copy(be)},this.setViewport=function(g,U,G,k){g.isVector4?be.set(g.x,g.y,g.z,g.w):be.set(g,U,G,k),ye.viewport(D.copy(be).multiplyScalar(q).round())},this.getScissor=function(g){return g.copy(Ne)},this.setScissor=function(g,U,G,k){g.isVector4?Ne.set(g.x,g.y,g.z,g.w):Ne.set(g,U,G,k),ye.scissor(O.copy(Ne).multiplyScalar(q).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(g){ye.setScissorTest(Ye=g)},this.setOpaqueSort=function(g){he=g},this.setTransparentSort=function(g){ge=g},this.getClearColor=function(g){return g.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(g=!0,U=!0,G=!0){let k=0;if(g){let N=!1;if(L!==null){const oe=L.texture.format;N=oe===Vs||oe===Hs||oe===zs}if(N){const oe=L.texture.type,me=oe===$t||oe===Bn||oe===Mi||oe===Si||oe===Os||oe===Bs,Te=ue.getClearColor(),xe=ue.getClearAlpha(),Pe=Te.r,De=Te.g,we=Te.b;me?(v[0]=Pe,v[1]=De,v[2]=we,v[3]=xe,w.clearBufferuiv(w.COLOR,0,v)):(E[0]=Pe,E[1]=De,E[2]=we,E[3]=xe,w.clearBufferiv(w.COLOR,0,E))}else k|=w.COLOR_BUFFER_BIT}U&&(k|=w.DEPTH_BUFFER_BIT),G&&(k|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ue.dispose(),I.dispose(),ie.dispose(),Me.dispose(),ut.dispose(),nt.dispose(),B.dispose(),ne.dispose(),_e.dispose(),K.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ot),ee.removeEventListener("sessionend",Rt),jt.stop()};function ce(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const g=$e.autoReset,U=se.enabled,G=se.autoUpdate,k=se.needsUpdate,N=se.type;P(),$e.autoReset=g,se.enabled=U,se.autoUpdate=G,se.needsUpdate=k,se.type=N}function re(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function W(g){const U=g.target;U.removeEventListener("dispose",W),ae(U)}function ae(g){Ae(g),Me.remove(g)}function Ae(g){const U=Me.get(g).programs;U!==void 0&&(U.forEach(function(G){K.releaseProgram(G)}),g.isShaderMaterial&&K.releaseShaderCache(g))}this.renderBufferDirect=function(g,U,G,k,N,oe){U===null&&(U=Ee);const me=N.isMesh&&N.matrixWorld.determinant()<0,Te=Lo(g,U,G,k,N);ye.setMaterial(k,me);let xe=G.index,Pe=1;if(k.wireframe===!0){if(xe=_.getWireframeAttribute(G),xe===void 0)return;Pe=2}const De=G.drawRange,we=G.attributes.position;let He=De.start*Pe,Je=(De.start+De.count)*Pe;oe!==null&&(He=Math.max(He,oe.start*Pe),Je=Math.min(Je,(oe.start+oe.count)*Pe)),xe!==null?(He=Math.max(He,0),Je=Math.min(Je,xe.count)):we!=null&&(He=Math.max(He,0),Je=Math.min(Je,we.count));const st=Je-He;if(st<0||st===1/0)return;ne.setup(N,k,Te,G,xe);let tt,Qe=Q;if(xe!==null&&(tt=y.get(xe),Qe=fe,Qe.setIndex(tt)),N.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*Ze()),Qe.setMode(w.LINES)):Qe.setMode(w.TRIANGLES);else if(N.isLine){let Re=k.linewidth;Re===void 0&&(Re=1),ye.setLineWidth(Re*Ze()),N.isLineSegments?Qe.setMode(w.LINES):N.isLineLoop?Qe.setMode(w.LINE_LOOP):Qe.setMode(w.LINE_STRIP)}else N.isPoints?Qe.setMode(w.POINTS):N.isSprite&&Qe.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ti("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,it=N._multiDrawCounts,Xe=N._multiDrawCount,Ct=xe?y.get(xe).bytesPerElement:1,Hn=Me.get(k).currentProgram.getUniforms();for(let Pt=0;Pt<Xe;Pt++)Hn.setValue(w,"_gl_DrawID",Pt),Qe.render(Re[Pt]/Ct,it[Pt])}else if(N.isInstancedMesh)Qe.renderInstances(He,st,N.count);else if(G.isInstancedBufferGeometry){const Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,it=Math.min(G.instanceCount,Re);Qe.renderInstances(He,st,it)}else Qe.render(He,st)};function Fe(g,U,G){g.transparent===!0&&g.side===an&&g.forceSinglePass===!1?(g.side=wt,g.needsUpdate=!0,Li(g,U,G),g.side=En,g.needsUpdate=!0,Li(g,U,G),g.side=an):Li(g,U,G)}this.compile=function(g,U,G=null){G===null&&(G=g),u=ie.get(G),u.init(U),T.push(u),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),g!==G&&g.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const k=new Set;return g.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const oe=N.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const Te=oe[me];Fe(Te,G,N),k.add(Te)}else Fe(oe,G,N),k.add(oe)}),u=T.pop(),k},this.compileAsync=function(g,U,G=null){const k=this.compile(g,U,G);return new Promise(N=>{function oe(){if(k.forEach(function(me){Me.get(me).currentProgram.isReady()&&k.delete(me)}),k.size===0){N(g);return}setTimeout(oe,10)}Le.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Oe=null;function ft(g){Oe&&Oe(g)}function ot(){jt.stop()}function Rt(){jt.start()}const jt=new bo;jt.setAnimationLoop(ft),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(g){Oe=g,ee.setAnimationLoop(g),g===null?jt.stop():jt.start()},ee.addEventListener("sessionstart",ot),ee.addEventListener("sessionend",Rt),this.render=function(g,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),g.isScene===!0&&g.onBeforeRender(S,g,U,L),u=ie.get(g,T.length),u.init(U),T.push(u),j.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ke.setFromProjectionMatrix(j,Kt,U.reversedDepth),J=this.localClippingEnabled,ke=V.init(this.clippingPlanes,J),p=I.get(g,A.length),p.init(),A.push(p),ee.enabled===!0&&ee.isPresenting===!0){const oe=S.xr.getDepthSensingMesh();oe!==null&&cn(oe,U,-1/0,S.sortObjects)}cn(g,U,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(he,ge),ze=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ze&&ue.addToRenderList(p,g),this.info.render.frame++,ke===!0&&V.beginShadows();const G=u.state.shadowsArray;se.render(G,g,U),ke===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,N=p.transmissive;if(u.setupLights(),U.isArrayCamera){const oe=U.cameras;if(N.length>0)for(let me=0,Te=oe.length;me<Te;me++){const xe=oe[me];hn(k,N,g,xe)}ze&&ue.render(g);for(let me=0,Te=oe.length;me<Te;me++){const xe=oe[me];un(p,g,xe,xe.viewport)}}else N.length>0&&hn(k,N,g,U),ze&&ue.render(g),un(p,g,U);L!==null&&b===0&&(Ue.updateMultisampleRenderTarget(L),Ue.updateRenderTargetMipmap(L)),g.isScene===!0&&g.onAfterRender(S,g,U),ne.resetDefaultState(),M=-1,x=null,T.pop(),T.length>0?(u=T[T.length-1],ke===!0&&V.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function cn(g,U,G,k){if(g.visible===!1)return;if(g.layers.test(U.layers)){if(g.isGroup)G=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(U);else if(g.isLight)u.pushLight(g),g.castShadow&&u.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Ke.intersectsSprite(g)){k&&le.setFromMatrixPosition(g.matrixWorld).applyMatrix4(j);const me=B.update(g),Te=g.material;Te.visible&&p.push(g,me,Te,G,le.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Ke.intersectsObject(g))){const me=B.update(g),Te=g.material;if(k&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),le.copy(g.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),le.copy(me.boundingSphere.center)),le.applyMatrix4(g.matrixWorld).applyMatrix4(j)),Array.isArray(Te)){const xe=me.groups;for(let Pe=0,De=xe.length;Pe<De;Pe++){const we=xe[Pe],He=Te[we.materialIndex];He&&He.visible&&p.push(g,me,He,G,le.z,we)}}else Te.visible&&p.push(g,me,Te,G,le.z,null)}}const oe=g.children;for(let me=0,Te=oe.length;me<Te;me++)cn(oe[me],U,G,k)}function un(g,U,G,k){const N=g.opaque,oe=g.transmissive,me=g.transparent;u.setupLightsView(G),ke===!0&&V.setGlobalState(S.clippingPlanes,G),k&&ye.viewport(D.copy(k)),N.length>0&&Di(N,U,G),oe.length>0&&Di(oe,U,G),me.length>0&&Di(me,U,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function hn(g,U,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new zn(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Ai:$t,minFilter:Fn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const oe=u.state.transmissionRenderTarget[k.id],me=k.viewport||D;oe.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const Te=S.getRenderTarget(),xe=S.getActiveCubeFace(),Pe=S.getActiveMipmapLevel();S.setRenderTarget(oe),S.getClearColor($),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),ze&&ue.render(G);const De=S.toneMapping;S.toneMapping=Sn;const we=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),ke===!0&&V.setGlobalState(S.clippingPlanes,k),Di(g,G,k),Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe),Le.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Je=0,st=U.length;Je<st;Je++){const tt=U[Je],Qe=tt.object,Re=tt.geometry,it=tt.material,Xe=tt.group;if(it.side===an&&Qe.layers.test(k.layers)){const Ct=it.side;it.side=wt,it.needsUpdate=!0,Zs(Qe,G,k,Re,it,Xe),it.side=Ct,it.needsUpdate=!0,He=!0}}He===!0&&(Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe))}S.setRenderTarget(Te,xe,Pe),S.setClearColor($,Y),we!==void 0&&(k.viewport=we),S.toneMapping=De}function Di(g,U,G){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,oe=g.length;N<oe;N++){const me=g[N],Te=me.object,xe=me.geometry,Pe=me.group;let De=me.material;De.allowOverride===!0&&k!==null&&(De=k),Te.layers.test(G.layers)&&Zs(Te,U,G,xe,De,Pe)}}function Zs(g,U,G,k,N,oe){g.onBeforeRender(S,U,G,k,N,oe),g.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),N.onBeforeRender(S,U,G,k,g,oe),N.transparent===!0&&N.side===an&&N.forceSinglePass===!1?(N.side=wt,N.needsUpdate=!0,S.renderBufferDirect(G,U,k,N,g,oe),N.side=En,N.needsUpdate=!0,S.renderBufferDirect(G,U,k,N,g,oe),N.side=an):S.renderBufferDirect(G,U,k,N,g,oe),g.onAfterRender(S,U,G,k,N,oe)}function Li(g,U,G){U.isScene!==!0&&(U=Ee);const k=Me.get(g),N=u.state.lights,oe=u.state.shadowsArray,me=N.state.version,Te=K.getParameters(g,N.state,oe,U,G),xe=K.getProgramCacheKey(Te);let Pe=k.programs;k.environment=g.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(g.isMeshStandardMaterial?nt:ut).get(g.envMap||k.environment),k.envMapRotation=k.environment!==null&&g.envMap===null?U.environmentRotation:g.envMapRotation,Pe===void 0&&(g.addEventListener("dispose",W),Pe=new Map,k.programs=Pe);let De=Pe.get(xe);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===me)return Js(g,Te),De}else Te.uniforms=K.getUniforms(g),g.onBeforeCompile(Te,S),De=K.acquireProgram(Te,xe),Pe.set(xe,De),k.uniforms=Te.uniforms;const we=k.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(we.clippingPlanes=V.uniform),Js(g,Te),k.needsLights=Io(g),k.lightsStateVersion=me,k.needsLights&&(we.ambientLightColor.value=N.state.ambient,we.lightProbe.value=N.state.probe,we.directionalLights.value=N.state.directional,we.directionalLightShadows.value=N.state.directionalShadow,we.spotLights.value=N.state.spot,we.spotLightShadows.value=N.state.spotShadow,we.rectAreaLights.value=N.state.rectArea,we.ltc_1.value=N.state.rectAreaLTC1,we.ltc_2.value=N.state.rectAreaLTC2,we.pointLights.value=N.state.point,we.pointLightShadows.value=N.state.pointShadow,we.hemisphereLights.value=N.state.hemi,we.directionalShadowMap.value=N.state.directionalShadowMap,we.directionalShadowMatrix.value=N.state.directionalShadowMatrix,we.spotShadowMap.value=N.state.spotShadowMap,we.spotLightMatrix.value=N.state.spotLightMatrix,we.spotLightMap.value=N.state.spotLightMap,we.pointShadowMap.value=N.state.pointShadowMap,we.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function $s(g){if(g.uniformsList===null){const U=g.currentProgram.getUniforms();g.uniformsList=rr.seqWithValue(U.seq,g.uniforms)}return g.uniformsList}function Js(g,U){const G=Me.get(g);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Lo(g,U,G,k,N){U.isScene!==!0&&(U=Ee),Ue.resetTextureUnits();const oe=U.fog,me=k.isMeshStandardMaterial?U.environment:null,Te=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:oi,xe=(k.isMeshStandardMaterial?nt:ut).get(k.envMap||me),Pe=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!G.morphAttributes.position,He=!!G.morphAttributes.normal,Je=!!G.morphAttributes.color;let st=Sn;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(st=S.toneMapping);const tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qe=tt!==void 0?tt.length:0,Re=Me.get(k),it=u.state.lights;if(ke===!0&&(J===!0||g!==x)){const St=g===x&&k.id===M;V.setState(k,g,St)}let Xe=!1;k.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==it.state.version||Re.outputColorSpace!==Te||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==xe||k.fog===!0&&Re.fog!==oe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==V.numPlanes||Re.numIntersection!==V.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==De||Re.morphTargets!==we||Re.morphNormals!==He||Re.morphColors!==Je||Re.toneMapping!==st||Re.morphTargetsCount!==Qe)&&(Xe=!0):(Xe=!0,Re.__version=k.version);let Ct=Re.currentProgram;Xe===!0&&(Ct=Li(k,U,N));let Hn=!1,Pt=!1,fi=!1;const rt=Ct.getUniforms(),It=Re.uniforms;if(ye.useProgram(Ct.program)&&(Hn=!0,Pt=!0,fi=!0),k.id!==M&&(M=k.id,Pt=!0),Hn||x!==g){ye.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),rt.setValue(w,"projectionMatrix",g.projectionMatrix),rt.setValue(w,"viewMatrix",g.matrixWorldInverse);const Tt=rt.map.cameraPosition;Tt!==void 0&&Tt.setValue(w,Se.setFromMatrixPosition(g.matrixWorld)),Ce.logarithmicDepthBuffer&&rt.setValue(w,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&rt.setValue(w,"isOrthographic",g.isOrthographicCamera===!0),x!==g&&(x=g,Pt=!0,fi=!0)}if(N.isSkinnedMesh){rt.setOptional(w,N,"bindMatrix"),rt.setOptional(w,N,"bindMatrixInverse");const St=N.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),rt.setValue(w,"boneTexture",St.boneTexture,Ue))}N.isBatchedMesh&&(rt.setOptional(w,N,"batchingTexture"),rt.setValue(w,"batchingTexture",N._matricesTexture,Ue),rt.setOptional(w,N,"batchingIdTexture"),rt.setValue(w,"batchingIdTexture",N._indirectTexture,Ue),rt.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&rt.setValue(w,"batchingColorTexture",N._colorsTexture,Ue));const Nt=G.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&X.update(N,G,Ct),(Pt||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,rt.setValue(w,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(It.envMap.value=xe,It.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(It.envMapIntensity.value=U.environmentIntensity),Pt&&(rt.setValue(w,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&Uo(It,fi),oe&&k.fog===!0&&F.refreshFogUniforms(It,oe),F.refreshMaterialUniforms(It,k,q,te,u.state.transmissionRenderTarget[g.id]),rr.upload(w,$s(Re),It,Ue)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(rr.upload(w,$s(Re),It,Ue),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&rt.setValue(w,"center",N.center),rt.setValue(w,"modelViewMatrix",N.modelViewMatrix),rt.setValue(w,"normalMatrix",N.normalMatrix),rt.setValue(w,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const St=k.uniformsGroups;for(let Tt=0,fr=St.length;Tt<fr;Tt++){const Tn=St[Tt];_e.update(Tn,Ct),_e.bind(Tn,Ct)}}return Ct}function Uo(g,U){g.ambientLightColor.needsUpdate=U,g.lightProbe.needsUpdate=U,g.directionalLights.needsUpdate=U,g.directionalLightShadows.needsUpdate=U,g.pointLights.needsUpdate=U,g.pointLightShadows.needsUpdate=U,g.spotLights.needsUpdate=U,g.spotLightShadows.needsUpdate=U,g.rectAreaLights.needsUpdate=U,g.hemisphereLights.needsUpdate=U}function Io(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(g,U,G){const k=Me.get(g);k.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Me.get(g.texture).__webglTexture=U,Me.get(g.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,U){const G=Me.get(g);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const No=w.createFramebuffer();this.setRenderTarget=function(g,U=0,G=0){L=g,R=U,b=G;let k=!0,N=null,oe=!1,me=!1;if(g){const xe=Me.get(g);if(xe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(w.FRAMEBUFFER,null),k=!1;else if(xe.__webglFramebuffer===void 0)Ue.setupRenderTarget(g);else if(xe.__hasExternalTextures)Ue.rebindTextures(g,Me.get(g.texture).__webglTexture,Me.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const we=g.depthTexture;if(xe.__boundDepthTexture!==we){if(we!==null&&Me.has(we)&&(g.width!==we.image.width||g.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(g)}}const Pe=g.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(me=!0);const De=Me.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(De[U])?N=De[U][G]:N=De[U],oe=!0):g.samples>0&&Ue.useMultisampledRTT(g)===!1?N=Me.get(g).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[G]:N=De,D.copy(g.viewport),O.copy(g.scissor),H=g.scissorTest}else D.copy(be).multiplyScalar(q).floor(),O.copy(Ne).multiplyScalar(q).floor(),H=Ye;if(G!==0&&(N=No),ye.bindFramebuffer(w.FRAMEBUFFER,N)&&k&&ye.drawBuffers(g,N),ye.viewport(D),ye.scissor(O),ye.setScissorTest(H),oe){const xe=Me.get(g.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,G)}else if(me){const xe=U;for(let Pe=0;Pe<g.textures.length;Pe++){const De=Me.get(g.textures[Pe]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Pe,De.__webglTexture,G,xe)}}else if(g!==null&&G!==0){const xe=Me.get(g.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,xe.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(g,U,G,k,N,oe,me,Te=0){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Me.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){ye.bindFramebuffer(w.FRAMEBUFFER,xe);try{const Pe=g.textures[Te],De=Pe.format,we=Pe.type;if(!Ce.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=g.width-k&&G>=0&&G<=g.height-N&&(g.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Te),w.readPixels(U,G,k,N,pe.convert(De),pe.convert(we),oe))}finally{const Pe=L!==null?Me.get(L).__webglFramebuffer:null;ye.bindFramebuffer(w.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(g,U,G,k,N,oe,me,Te=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Me.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe)if(U>=0&&U<=g.width-k&&G>=0&&G<=g.height-N){ye.bindFramebuffer(w.FRAMEBUFFER,xe);const Pe=g.textures[Te],De=Pe.format,we=Pe.type;if(!Ce.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,He),w.bufferData(w.PIXEL_PACK_BUFFER,oe.byteLength,w.STREAM_READ),g.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Te),w.readPixels(U,G,k,N,pe.convert(De),pe.convert(we),0);const Je=L!==null?Me.get(L).__webglFramebuffer:null;ye.bindFramebuffer(w.FRAMEBUFFER,Je);const st=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await w1(w,st,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,He),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,oe),w.deleteBuffer(He),w.deleteSync(st),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,U=null,G=0){const k=Math.pow(2,-G),N=Math.floor(g.image.width*k),oe=Math.floor(g.image.height*k),me=U!==null?U.x:0,Te=U!==null?U.y:0;Ue.setTexture2D(g,0),w.copyTexSubImage2D(w.TEXTURE_2D,G,0,0,me,Te,N,oe),ye.unbindTexture()};const Fo=w.createFramebuffer(),Oo=w.createFramebuffer();this.copyTextureToTexture=function(g,U,G=null,k=null,N=0,oe=null){oe===null&&(N!==0?(Ti("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let me,Te,xe,Pe,De,we,He,Je,st;const tt=g.isCompressedTexture?g.mipmaps[oe]:g.image;if(G!==null)me=G.max.x-G.min.x,Te=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Pe=G.min.x,De=G.min.y,we=G.isBox3?G.min.z:0;else{const Nt=Math.pow(2,-N);me=Math.floor(tt.width*Nt),Te=Math.floor(tt.height*Nt),g.isDataArrayTexture?xe=tt.depth:g.isData3DTexture?xe=Math.floor(tt.depth*Nt):xe=1,Pe=0,De=0,we=0}k!==null?(He=k.x,Je=k.y,st=k.z):(He=0,Je=0,st=0);const Qe=pe.convert(U.format),Re=pe.convert(U.type);let it;U.isData3DTexture?(Ue.setTexture3D(U,0),it=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ue.setTexture2DArray(U,0),it=w.TEXTURE_2D_ARRAY):(Ue.setTexture2D(U,0),it=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Xe=w.getParameter(w.UNPACK_ROW_LENGTH),Ct=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Hn=w.getParameter(w.UNPACK_SKIP_PIXELS),Pt=w.getParameter(w.UNPACK_SKIP_ROWS),fi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,tt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,tt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Pe),w.pixelStorei(w.UNPACK_SKIP_ROWS,De),w.pixelStorei(w.UNPACK_SKIP_IMAGES,we);const rt=g.isDataArrayTexture||g.isData3DTexture,It=U.isDataArrayTexture||U.isData3DTexture;if(g.isDepthTexture){const Nt=Me.get(g),St=Me.get(U),Tt=Me.get(Nt.__renderTarget),fr=Me.get(St.__renderTarget);ye.bindFramebuffer(w.READ_FRAMEBUFFER,Tt.__webglFramebuffer),ye.bindFramebuffer(w.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let Tn=0;Tn<xe;Tn++)rt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Me.get(g).__webglTexture,N,we+Tn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,oe,st+Tn)),w.blitFramebuffer(Pe,De,me,Te,He,Je,me,Te,w.DEPTH_BUFFER_BIT,w.NEAREST);ye.bindFramebuffer(w.READ_FRAMEBUFFER,null),ye.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||g.isRenderTargetTexture||Me.has(g)){const Nt=Me.get(g),St=Me.get(U);ye.bindFramebuffer(w.READ_FRAMEBUFFER,Fo),ye.bindFramebuffer(w.DRAW_FRAMEBUFFER,Oo);for(let Tt=0;Tt<xe;Tt++)rt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Nt.__webglTexture,N,we+Tt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Nt.__webglTexture,N),It?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,St.__webglTexture,oe,st+Tt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,St.__webglTexture,oe),N!==0?w.blitFramebuffer(Pe,De,me,Te,He,Je,me,Te,w.COLOR_BUFFER_BIT,w.NEAREST):It?w.copyTexSubImage3D(it,oe,He,Je,st+Tt,Pe,De,me,Te):w.copyTexSubImage2D(it,oe,He,Je,Pe,De,me,Te);ye.bindFramebuffer(w.READ_FRAMEBUFFER,null),ye.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else It?g.isDataTexture||g.isData3DTexture?w.texSubImage3D(it,oe,He,Je,st,me,Te,xe,Qe,Re,tt.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(it,oe,He,Je,st,me,Te,xe,Qe,tt.data):w.texSubImage3D(it,oe,He,Je,st,me,Te,xe,Qe,Re,tt):g.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,oe,He,Je,me,Te,Qe,Re,tt.data):g.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,oe,He,Je,tt.width,tt.height,Qe,tt.data):w.texSubImage2D(w.TEXTURE_2D,oe,He,Je,me,Te,Qe,Re,tt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Xe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ct),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Hn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Pt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,fi),oe===0&&U.generateMipmaps&&w.generateMipmap(it),ye.unbindTexture()},this.initRenderTarget=function(g){Me.get(g).__webglFramebuffer===void 0&&Ue.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?Ue.setTextureCube(g,0):g.isData3DTexture?Ue.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?Ue.setTexture2DArray(g,0):Ue.setTexture2D(g,0),ye.unbindTexture()},this.resetState=function(){R=0,b=0,L=null,ye.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Zh=[[49.3153061,-123.0160954],[49.3155166,-123.016317],[49.3155954,-123.016419],[49.3156529,-123.016463],[49.3157592,-123.0164713],[49.3158809,-123.016446],[49.3159706,-123.0164132],[49.3160962,-123.0163503],[49.3162975,-123.0162184],[49.3164586,-123.0161113],[49.316576,-123.016005],[49.316781,-123.015796],[49.3170407,-123.0155308],[49.3171296,-123.0154304],[49.3172886,-123.01517],[49.3173543,-123.0150535],[49.3173812,-123.0149345],[49.3173906,-123.0147606]],Xr=[49.31635,-123.016],kt=Zh.map(([i,e])=>({x:(e-Xr[1])*111320*Math.cos(Xr[0]*Math.PI/180),z:-(i-Xr[0])*111320}));function Is(i,e){let t=1/0;for(let n=1;n<kt.length;n++){const r=kt[n-1],s=kt[n],a=s.x-r.x,o=s.z-r.z,c=Math.max(0,Math.min(1,((i-r.x)*a+(e-r.z)*o)/(a*a+o*o)));t=Math.min(t,Math.hypot(i-r.x-c*a,e-r.z-c*o))}return t}function Do(i){for(let e=1;e<kt.length;e++){const t=kt[e-1],n=kt[e],r=n.x-t.x,s=n.z-t.z,a=Math.hypot(r,s);if(i<=a)return{x:t.x+r*i/a,z:t.z+s*i/a,dx:r/a,dz:s/a};i-=a}return null}const $h=5,Jh=131,jh=-325,Qh=JSON.parse("[85,85.21,85.45,85.64,85.75,86,86.12,86.09,86.06,85.99,86.01,86.02,86.1,86.15,87.11,88.69,89.7,90.51,90.55,90.52,90.55,90.25,90.13,90.19,90.17,90.29,90.48,90.64,91.19,91.15,91.07,91.03,91.12,91.09,91.61,91.15,91.4,91.11,91.04,90.9,90.95,90.88,91.3,91.35,91.26,91.09,90.78,90.53,89.74,88.41,86.93,85.15,86.12,87.52,88.54,90.06,89.94,89.67,90.54,90.23,88.09,85.5,83.14,80.45,77.68,75.85,74.94,74.96,74.14,74.02,73.7,72.98,70.83,67.66,64.94,62.06,59.02,56,52.35,48.2,44.95,41.61,38.75,36.38,33.49,30.55,27.9,26.11,26.08,26.24,26.24,25.8,25.59,25.42,25.32,25.24,25.32,25.52,25.15,25.27,25.29,24.65,24.58,24.49,24.28,23.5,23.3,21.94,20.25,17.57,16.26,16.08,16.06,16.08,16.09,16.07,16.06,16.06,16.01,15.98,16.08,16.07,16.17,16.37,17.08,17.93,18.01,20.45,21.19,21.6,21.86,84.99,85.23,85.39,85.54,85.7,86,86.06,86.05,86.03,85.95,85.99,86,86.08,86.15,87.61,89.06,90.13,90.55,90.55,90.56,90.52,90.28,90.15,90.23,90.16,90.36,90.49,90.62,90.95,90.94,91.13,91,91.09,91.09,91.09,90.94,91.16,91.11,90.84,90.89,90.9,90.9,91.24,91.17,91.05,90.09,90.25,89.1,87.88,86.22,84.64,83.45,82.76,84.36,84.41,85.74,86.58,87.92,88.74,88.45,86.74,84.07,81.69,79.45,76.67,75.35,74.73,75,74.02,74.1,74.11,73.81,73.11,69.83,66.87,63.82,60.87,57.4,53.66,49.28,46.36,43.56,39.93,37.28,34.14,31.41,28.79,26.4,25.94,25.93,26.01,25.67,25.5,25.44,25.45,24.81,24.72,24.72,24.77,25.55,24.89,24.65,24.44,24.36,23.82,22.87,22.91,22.32,21.88,20.74,17.27,16.1,16.06,16.1,16.06,16.02,16.04,15.98,15.95,16.01,16,16.03,16.06,16.11,16.33,17.72,17.9,20,20.09,20.95,21.33,85.03,85.2,85.28,85.53,85.66,85.95,86.06,85.99,85.99,85.91,85.95,85.98,86.06,86.14,87.91,89.53,90.53,90.55,90.55,90.56,90.49,90.27,90.15,90.22,90.16,90.36,90.51,90.49,90.64,90.84,91.08,90.96,91.07,91.07,90.96,90.98,90.81,90.77,90.8,90.8,90.88,91.04,90.94,91.02,90.55,89.42,88.28,86.95,84.59,83.19,82.08,80.99,79.7,80.59,81.17,82.16,84.88,86.79,87.03,86.8,85.1,82.57,80.1,77.64,77.05,74.97,74.43,74.3,73.88,73.96,74.03,73.8,73.5,72.19,69.08,65.52,62.57,58.74,54.54,51.18,48.14,45.3,41.3,38.72,35.65,32.26,29.8,27.53,25.57,25.39,25.15,25.1,25.42,25.48,25.35,24.57,24.65,24.65,24.9,25.67,24.62,24.48,24.39,24.08,23.23,22.99,23.05,22.9,22.06,21.74,18.33,16.64,16.09,16.05,16.06,16.06,16.03,16.01,15.98,15.91,16.02,16,15.95,16,16.13,16.35,17.29,17.82,19.56,20.03,19.54,84.92,85.12,85.27,85.45,85.54,85.91,85.96,86,85.98,85.87,85.92,85.96,86.03,86.13,88.2,90.58,90.56,90.55,90.54,90.56,90.48,90.3,90.17,90.12,90.21,90.28,90.44,90.9,90.95,91.1,91.02,90.93,91.05,91.06,90.89,90.82,90.78,90.76,90.79,90.84,90.83,90.85,90.82,90.81,90.02,88.23,85.79,84.54,82.16,81.06,79.55,77.47,77.03,78.09,78.69,81.09,84.08,85.18,85.34,84.82,83.36,81.23,78.42,76.47,75.92,74.63,74.64,74.14,74.24,74.25,73.89,74.09,73.7,73.3,70.72,67.13,63.91,60.31,56.59,52.81,49.67,45.99,42.17,39.18,36.59,33.13,30.43,28.39,25.72,25.16,25.08,25.18,25.79,25.55,25.4,24.66,24.55,24.55,25.67,24.92,25.41,24.35,24.28,24.42,23,23.09,23.07,23.11,22.19,21.94,21.08,17.27,16.04,16.02,16.03,16.04,16.05,15.95,15.94,15.88,15.83,15.98,15.87,15.95,16.03,16.07,16.62,17.11,18.02,18.29,21.71,84.85,85.07,85.25,85.4,85.46,85.72,85.78,85.93,85.98,85.97,86.01,86.01,86.01,86.06,86.1,86.08,86.48,86.76,86.81,89.6,90.52,90.31,90.17,90.15,90.22,90.31,90.41,90.74,90.93,91.02,91.03,90.9,91.03,91.02,90.98,90.92,90.88,90.87,90.96,91.06,90.91,90.74,90.91,90.68,88.2,86.02,83.23,81.4,79.5,78.25,76.74,75.36,75.51,76.08,76.99,79.21,82.65,83.87,83.45,83.2,81.45,79.76,76.77,75.7,74.79,74.73,74.93,73.43,74.39,74.52,73.63,73.36,73.19,73.38,72.25,68.18,64.64,60.98,57.65,54.07,50.53,46.46,43.3,40.23,36.85,33.86,31.6,28.74,26.82,25.23,25.56,25.71,25.77,25.46,25.19,24.66,24.4,24.4,25.35,25.01,26.74,24.37,24.13,24.45,22.92,23.04,22.97,22.67,22.67,22.52,21.73,17.87,16.23,16.08,16.06,16.01,15.9,15.9,15.8,15.83,15.76,15.74,15.84,15.76,15.88,15.96,15.95,16.81,17.38,17.86,20.66,84.72,84.87,85.19,85.38,85.37,85.5,85.77,85.86,85.97,86.21,86.38,86.42,86.51,86.66,86.88,87.1,87.24,87.38,87.53,89.44,90.45,90.31,90.22,90.18,90.22,90.33,90.43,90.56,90.63,90.7,90.81,90.88,90.99,90.99,91.02,90.96,90.9,90.89,91.01,90.97,90.92,90.74,90.38,90.08,86.26,83.34,80.98,78.55,77.22,76.09,74.64,74.18,74.65,74.53,76.28,78.33,80.55,81.29,81.49,81.15,79.85,77.49,74.92,74.16,74.36,74.02,74.42,73.16,73.39,73.21,73.1,72.71,73.02,73.55,72.64,69.13,65.5,61.96,58.74,55.47,51.53,47.24,43.53,41.14,37.45,34.73,31.81,29.3,27.2,25.38,25.44,25.72,25.66,25.41,25.06,24.66,24.29,24.3,24.69,25.75,25.99,24.68,24.46,23.57,22.8,22.78,22.84,22.74,22.71,22.66,22.05,20.33,18.33,17.05,16.01,15.95,15.8,15.86,15.82,15.77,15.77,15.73,15.66,15.72,15.75,15.8,15.94,16.22,17.05,18.23,19.95,84.64,84.93,85.06,85.23,85.35,85.26,85.48,85.79,86.07,86.47,86.83,87.2,87.53,87.89,88.24,88.64,89,89.37,89.7,90.08,90.37,90.31,90.26,90.22,90.27,90.35,90.45,90.58,90.68,90.74,90.79,90.85,90.98,90.98,90.95,90.87,90.78,90.87,90.86,90.96,90.92,90.72,90.2,87.43,83.8,80.78,78.78,76.91,75.63,75.06,73.78,73.3,73.05,73.47,74.83,76.63,78.38,79.34,79.52,79.22,78.02,75.73,74.59,73.91,74.78,74.2,73.06,73.53,72.87,72.57,72.71,72.69,73.31,73.87,73.27,70.23,66.41,63.27,59.47,55.97,52.19,48.18,44.89,41.51,38.53,34.69,31.95,29.85,27.42,25.43,25.42,25.45,25.43,25.42,25.02,24.52,24.2,24.19,24.82,24.52,24.71,24.35,23.41,22.53,22.51,22.51,22.73,22.05,22,21.96,22.38,21.63,19.26,18.34,17.03,15.9,15.87,15.84,15.77,15.71,15.7,15.69,15.61,15.57,15.69,15.69,15.68,15.98,16.94,18.32,20.58,84.16,84.96,85.44,85.71,85.2,84.97,85.22,85.54,85.8,86.02,86.35,86.55,86.79,87.21,87.55,88.09,88.25,88.3,88.7,89.51,90.15,90.22,90.31,90.36,90.34,90.38,90.48,90.6,90.79,90.86,90.89,90.87,90.93,90.93,90.77,91.21,91.06,90.84,90.84,90.83,90.91,90.31,88.92,85.34,81.87,79.03,76.83,75.16,74.1,73.56,73.22,73.15,72.42,72.44,73.82,75.25,76.52,77.26,77.41,77.97,76.23,74.58,74.24,74.44,74.83,73.65,73.34,74.39,73.38,72.37,72.67,73.23,73.53,73.87,73.22,70.75,68.59,64.38,60.23,56.78,53.5,50.18,45.93,42.46,39.18,36.58,32.87,29.95,27.53,25.9,24.96,24.76,24.78,24.79,24.91,24.7,24.11,24.08,24.21,24.46,24.75,24,22.76,22.51,22.44,22.41,22.62,22.1,22.03,21.92,21.92,21.89,20.69,18.54,18.32,17.3,15.93,15.82,15.71,15.63,15.62,15.59,15.52,15.52,15.6,15.55,15.61,15.68,16.52,18.15,20.27,83.71,84.25,84.63,84.79,84.56,84.75,84.92,85.06,85.18,85.29,85.5,85.71,85.92,86.09,86.24,86.43,86.59,86.72,87.45,88.2,89.36,89.97,90.52,90.51,90.5,90.08,90.05,90.56,90.66,90.57,90.82,91,90.9,90.88,90.85,90.98,91.2,90.92,90.77,90.74,90.58,88.72,86.3,82.86,79.94,77.36,75.36,74.19,73.28,73.19,72.72,72.22,72.33,72.54,73.54,74.77,74.99,75.52,75.57,76.37,74.98,73.41,73.36,74.37,73.83,72.72,73.81,74.44,74.02,72.39,72.93,73.62,73.66,73.86,73.14,71.31,69.32,65.31,61.47,58.63,54.65,50.98,46.65,43.36,40.06,36.59,33.62,30.44,28.68,26.07,24.92,25.12,24.89,24.72,24.97,24.55,24.08,23.93,24.03,24.36,24.03,23.26,22.32,22.81,22.47,22.51,22.44,22.19,22.11,22.11,22.08,22.05,21.58,18.46,18.3,18.22,16.67,15.74,15.67,15.58,15.54,15.41,15.49,15.4,15.46,15.42,15.57,15.57,15.74,17.43,21.11,83.63,83.82,84.05,84.22,84.38,84.52,84.64,84.82,84.91,84.97,85.05,85.12,85.21,85.42,85.52,85.61,85.7,85.76,85.83,87.51,89.16,89.94,90.52,90.4,90.09,90.18,90.08,90.24,90.11,90.01,89.98,90.68,90.93,90.82,90.8,90.8,90.88,90.88,90.77,90.64,89.27,86.31,83.74,80.63,78.07,75.92,74.18,73.16,72.66,72.05,72.35,72.14,71.93,72.83,73.75,73.98,74.05,74.39,74.52,74.73,74.54,73.2,73.35,73.23,72.45,74.12,74.25,74.33,73.23,72.66,73.39,73.61,73.73,73.79,72.82,71.01,68.7,64.98,61.66,58.6,55.39,51.41,48.18,44.64,41.21,38.08,34.66,30.79,28.52,26.14,25.01,25.15,25.2,25.03,24.66,24.21,23.83,23.74,23.82,24.17,22.4,22.42,22.28,22.45,22.4,22.32,22.62,22.15,22.12,22.1,22.08,22.04,21.88,20.22,18.31,18.22,18.05,16.72,15.78,15.56,15.48,15.52,15.43,15.43,15.33,15.3,15.31,15.4,15.55,16.19,20.49,83.42,83.65,83.89,84.04,84.36,84.7,84.67,84.84,84.96,84.99,85.04,85.12,85.2,85.39,85.37,85.04,85.24,85.37,85.01,86.97,88.91,89.94,89.9,90.02,90.18,90.16,90.15,90.12,90.14,89.96,89.89,90.64,90.76,90.71,90.75,90.74,90.74,90.73,90.44,90.33,88.1,84.98,81.27,78.39,76.86,75.15,73.76,73.16,72.86,72.15,71.62,71.7,71.71,72.48,72.61,73.62,73.55,73.21,73.58,73.16,73.69,73.16,73.09,72.72,72.73,74.21,74.18,73.81,73.61,73.36,73.31,73.6,73.68,73.46,72.62,70.56,68.19,64.28,60.95,58.3,55.81,51.79,48.24,44.64,41.66,38.3,35.43,32,29.14,27.6,25.42,25.11,25.04,24.92,24.68,24.2,23.68,23.56,23.48,22.86,22.32,22.14,22.14,22.41,22.34,22.36,22.38,22.14,22.2,22.13,22.3,22.11,22.04,21.74,19.03,18.13,18.02,17.29,16.17,15.6,15.94,15.39,15.32,15.32,15.24,15.24,15.24,15.18,15.36,15.22,16.75,83.43,83.5,83.71,84.13,84.83,84.79,84.82,84.97,85.14,85.11,85.1,85.1,85.18,85.32,85.21,85.09,85.04,85.02,85.1,86.91,88.74,89.94,90.08,90.29,90.16,90.14,90.13,90.11,90.1,89.95,89.86,90.56,90.67,90.57,90.71,90.8,90.75,90.5,89.82,89.37,86.44,82.63,79.64,77.31,75.21,74.06,73.46,72.82,72.35,71.9,71.89,71.44,71.7,71.68,71.78,72.94,73.37,72.64,72.68,72.63,72.75,72.66,72.18,72.3,73.51,74.24,73.96,73.69,73.17,73.46,73.42,73.46,73.85,73.43,72.34,70.21,67.57,63.8,60.55,57.5,54.47,50.87,47.42,43.98,40.61,37.93,35.54,33.05,31.02,29.4,27.45,25.16,24.87,24.72,24.98,24.68,23.62,23.32,23.19,23.03,22.57,22.42,22.35,22.28,22.23,22.24,22.21,22.06,22.01,21.93,22.1,22.15,22.09,21.82,19.83,18.7,17.94,17.95,16.62,15.48,15.34,15.23,15.32,15.28,15.18,15.19,15.14,15.09,15.06,15.33,16.32,83.32,83.38,83.62,84.1,84.95,84.89,84.73,84.89,85,85.06,85.13,85.07,85.16,85.25,85.13,85.06,85.02,85.12,85.94,86.59,88.73,89.94,90.14,90.16,90.15,90.14,90.13,90.11,90.13,89.91,89.88,90.24,90.53,90.46,90.79,90.78,90.72,89.97,89.61,88.27,85.47,81.68,78.07,75.92,74.03,73.4,72.91,72.57,72.15,71.72,71.47,71.47,71.75,71.65,71.56,71.77,73.08,72.3,72.33,72.4,72.38,72.42,72.13,73.31,73.63,73.93,73.64,73.35,72.85,73.23,73.43,73.6,73.31,73.34,71.44,69.19,66.08,62.64,59.16,56.01,52.37,49.36,46.64,42.69,39.51,37.13,34.64,33.59,32.78,31.53,30.28,28.81,26.84,25.53,25.03,24.61,23.54,23.08,23,22.85,22.5,22.34,22.3,22.16,22.24,22.26,22.26,22.26,22,21.99,22.18,22.29,22.19,21.72,20.67,19.09,18.04,17.81,17.22,16.42,15.52,15.32,15.21,15.21,15.18,15.16,15.12,15.06,14.98,15.07,15.62,82.88,83.34,83.51,83.72,84.83,84.83,84.79,84.85,84.95,85,85.05,85.05,85.14,85.18,85.05,85.04,85.04,85.12,85.89,86.55,88.62,89.94,90.11,90.15,90.14,90.13,90.11,90.1,90.09,89.96,89.91,90.34,90.36,90.36,90.86,90.77,90.41,89.66,89.34,87.33,83.12,79.79,76.72,74.53,73.72,73.26,72.28,72.29,71.92,71.61,71.33,71.74,71.61,71.45,71.46,72.61,72.41,72.45,72.37,72.31,72.08,72.01,72.4,72.89,73.57,73.78,73.68,72.89,73.34,73.2,73.31,73.39,73.22,73.04,70.9,67.55,64.27,60.96,57.95,54.54,50.61,47.57,44.83,41.49,39.05,36.7,34.18,34.09,33.68,32.55,31.62,30.15,28.48,26.82,26.31,24.95,23.69,22.85,22.78,22.4,22.25,22.11,22.15,22.68,22.21,22.26,22.02,21.97,22.11,22.02,21.93,22.03,22.11,21.74,21.06,19.86,18.22,17.72,17.57,17.27,16.61,15.25,15.19,15.14,15.09,15.09,14.98,14.88,14.8,14.83,15.09,83.22,83.21,83.4,83.44,84.29,84.8,84.6,84.7,84.9,84.95,84.97,85.02,85.12,85.1,85.06,85.01,85.08,85.07,85.27,86.58,88.75,89.92,90.13,90.13,90.13,90.12,90.1,90.1,90.09,90.06,90.12,90.24,90.1,90.15,90.3,90.2,89.84,89.54,88.67,86.16,81.72,77.86,75.55,74.16,73.25,72.83,72.37,71.88,71.7,71.37,71.39,71.54,71.68,71.34,71.44,71.96,72.11,72.15,72.2,71.95,71.73,71.94,72.08,73.3,73.19,73.49,73.45,73.31,73.42,73.16,73.16,73.14,73.21,71.88,69.33,65.74,62.63,59.55,56.98,53.5,49.69,46.69,43.25,40.42,37.66,35.42,34.83,34.26,34.03,32.77,31.7,30.26,29.9,29.12,28.46,26.75,24.28,22.66,22.58,22.43,22.19,22.17,22.07,22.11,22.18,22.12,21.98,21.94,21.9,22.02,21.99,22.02,22.11,22.24,21.07,19.84,18.3,17.7,17.47,18,17.06,15.27,15.17,15.05,15.1,15.02,14.97,14.88,14.74,14.52,14.82,83.26,83.07,83.18,83.32,83.46,83.59,83.78,83.99,84.39,84.62,84.78,84.89,84.93,84.96,84.93,84.92,84.97,85.09,85.46,86.44,89.08,89.77,90.12,90.12,90.11,90.1,90.1,90.13,90.06,90.06,90.07,89.78,89.77,90.1,91.07,89.72,89.53,88.68,87.3,84.26,80.14,77.36,74.33,73.33,72.82,72.71,72.11,71.55,71.63,71.23,71.3,71.79,71.76,71.37,71.38,71.42,71.85,72.33,72.02,71.72,71.65,71.77,72.01,73.19,73.51,73.27,73.03,73.02,73.09,73.06,73.04,73.16,72.78,70.7,67.72,64.59,61.64,58.1,54.96,51.18,47.75,46.77,43.49,39,36.65,35.54,34.8,34.45,33.95,32.6,32.17,31.26,31.13,31.08,30.27,27.87,24.3,22.53,22.4,22.3,22.14,22,21.95,21.99,22.07,21.92,21.92,21.9,22,22,21.91,22.06,22.13,21.66,20.99,20.07,18.4,17.65,17.52,17.55,17.56,16.25,15.17,15.12,15.01,14.98,14.93,14.73,14.6,14.49,14.53,82.77,82.89,83.07,83.25,83.86,84.51,84.4,84.32,84.39,84.67,84.83,84.91,85.04,84.99,84.97,85.12,85.18,85.29,85.22,86.9,89.55,89.46,90.1,90.11,90.11,90.12,90.13,90.24,90.02,90.05,90.11,89.5,89.33,89.51,89.26,88.43,87.92,86.71,83.87,80.6,77.6,74.58,73.58,72.97,72.49,71.98,71.63,71.56,71.37,70.97,71.3,71.72,71.74,71.25,71.44,71.81,72.01,72.56,71.66,71.7,71.52,71.63,72.84,73.59,73.32,73,72.96,72.64,72.85,72.94,72.82,73,71.71,69.2,66.48,63.71,60.9,56.11,53.06,49.73,46.33,44.72,42.72,38.58,36.12,35.37,34.72,34.01,33.28,33.3,33.06,31.91,31.7,31.74,30.08,26.6,23.91,22.12,22.13,22.08,22.18,21.95,21.87,21.98,21.99,21.89,21.89,21.82,21.93,21.91,21.99,22.01,22.12,21.61,21.48,21.13,19.24,17.5,17.45,17.37,17.71,17.12,15.12,14.98,14.98,14.99,14.83,14.54,14.51,14.43,14.45,82.55,82.65,82.86,83.65,84.39,84.65,85.03,85.11,84.9,84.92,85.03,85.05,85.38,85.33,85.16,85.71,87.95,88.75,88.57,89.25,89.92,89.17,89.84,90.05,90.08,90.1,90.14,90.19,89.98,90.04,89.92,89.13,88.83,88.92,88.26,85.25,84.23,83.27,81.13,77.52,75.39,73.69,72.77,72.59,72.3,71.9,71.61,71.58,71.3,70.92,71.28,71.58,71.46,71.14,71.37,72.09,71.87,72.03,71.58,71.38,72.21,72.15,73,73.4,72.98,72.66,72.58,72.5,72.85,72.88,72.93,72.53,69.76,67.59,65.08,62.19,59.05,56.48,53.14,50.39,46.23,42.55,39.8,37.59,35.96,34.74,34.12,32.97,32.88,32.77,32.89,32.53,32.19,30.45,28.62,25.67,23.25,21.94,21.95,21.93,21.84,21.83,22.04,21.83,21.96,22.01,21.86,21.75,21.8,21.85,21.94,21.92,21.92,21.6,21.5,21.35,20.39,17.7,17.36,17.57,17.43,17.58,16.3,14.97,14.94,14.87,14.72,14.55,14.42,14.34,14.39,82.22,82.54,82.85,83.87,83.82,84.3,84.5,85.16,85.29,85.91,86.12,86.41,86.88,87.03,87.12,87.06,87.8,88.96,90.25,89.86,89.9,89.13,89.78,89.82,89.95,89.98,89.97,89.86,89.73,89.78,89.53,88.55,88.27,88.39,86.92,83.26,80.55,79.78,78,74.72,73.41,72.52,72.6,72.11,71.77,71.85,71.24,71.1,71.04,70.75,71.01,71.5,71.48,71.01,71.65,72.07,71.97,71.28,71.38,71.15,71.94,72.79,72.94,73.28,72.79,72.19,72.67,72.69,72.94,72.66,72.58,71.01,68.41,66.07,63.28,60.48,57.54,54.81,51.78,48.95,45.71,42.18,38.79,37.29,36.03,34.66,33.26,32.8,32.65,32.74,32.93,33.19,31.98,29.77,28.11,25.49,23.42,21.73,21.77,21.78,21.77,21.68,21.55,21.53,21.61,21.61,21.53,21.78,21.74,21.58,21.58,21.72,21.62,21.49,21.44,21.38,20.8,18.98,17.59,17.3,17.32,17.32,17.19,14.98,14.9,14.87,14.63,14.58,14.35,14.37,14.27,81.85,82.2,83.29,84,84.23,84.28,84.61,85.12,85.09,85.14,86.06,86.24,86.43,86.85,86.74,87.03,87.44,88.05,88.78,89.3,89.09,88.88,89.71,89.86,89.83,89.9,89.99,90.03,89.34,89.09,88.75,87.88,87.57,87.37,84.98,81.64,79.13,76.82,74.81,73.61,72.44,72.12,71.89,71.76,71.7,71.62,71.27,71.12,71.08,70.72,71.06,71.5,71.22,71,71.56,71.67,72.29,71.3,70.91,71.32,72.65,72.79,72.89,73.01,72.55,71.98,72.26,72.67,72.71,72.62,71.92,69.23,66.17,64.14,61.61,58.78,56.09,53.01,50.13,47.36,44.28,41.73,38.25,36.13,34.66,34.25,33.64,32.79,32.74,32.81,32.99,33.18,31.96,29.49,27.81,24.93,22.59,21.56,21.65,21.63,21.64,21.6,21.71,21.75,21.85,22.15,21.83,21.64,21.63,21.41,21.38,21.4,21.44,21.3,21.12,21.04,20.92,20.07,17.88,17.2,16.97,17.01,17.16,15.81,14.82,14.87,14.65,14.55,14.26,14.27,14.24,81.45,82.42,83.72,83.95,84.23,84.35,84.56,85.14,85.05,85.35,85.52,85.77,86.46,86.42,86.01,85.88,86.43,87.07,87.42,87.67,87.91,87.83,88.47,89.2,89.8,90.08,89.99,89.59,89.35,89.13,88.74,87.23,86.92,86.8,84.1,80.4,77.16,75.54,73.65,72.54,71.75,71.55,71.46,71.39,71.48,71.32,71.11,71.28,71.12,70.76,70.98,71.33,71.08,71.47,71.67,71.83,72.23,71.23,70.73,71.62,72.94,72.9,73.28,72.77,71.47,71.77,71.93,73.01,72.39,72.24,70.31,67.91,65.07,62.67,59.97,57.17,54.58,51.15,48.44,45.9,43.59,41.17,37.42,35.95,34.7,34.27,33.9,32.93,32.86,32.92,33.01,33.23,32.14,29.52,27.73,25.57,22.32,21.36,21.57,21.53,21.6,21.6,21.62,21.71,21.71,21.74,22.09,21.58,21.53,21.25,20.96,20.95,21.17,21.24,21.23,21.06,20.86,20.82,19.53,17.13,16.97,16.95,17.17,16.67,14.86,14.69,14.59,14.51,14.26,14.26,14.28,81.21,82.83,83.79,83.61,84.02,84.26,84.49,84.86,84.93,85.17,85.23,85.52,85.72,86.16,85.98,85.52,85.63,85.87,86.35,86.63,86.89,86.46,87.11,87.95,89.19,89.21,89.48,88.74,88.11,88.04,87.12,86.48,86.2,85.64,82.76,78.93,75.73,73.9,72.89,71.88,71.56,71.07,71.16,71.07,71.45,71.28,71.23,71.1,70.98,70.56,71,71.5,71.02,71.54,72.17,72.01,71.44,70.55,70.89,72.1,72.74,72.97,72.3,72.12,71.42,71.7,71.86,72.37,72.35,71.69,67.97,66.33,63.66,61.18,58.4,55.18,52.18,49.02,47.34,45.28,43.23,40.94,36.61,35.08,34.75,34.46,33.91,33.27,32.96,33.06,32.98,32.4,31.89,28.83,26.9,25.55,21.77,21.24,21.5,21.43,21.38,21.43,21.67,21.69,21.77,21.75,21.69,21.55,21.57,21.18,21.16,21.21,21.13,21.16,21.03,21.02,20.96,20.77,19.8,17.11,16.96,16.86,16.97,17.32,15.12,14.66,14.59,14.36,14.18,14.16,14.17,80.8,82.48,83.23,83.09,83.53,83.49,83.53,84.13,84.56,84.32,84.9,84.73,85.08,85.39,85.27,85.08,84.74,84.74,84.78,85.3,85.55,85.48,86.03,86.23,86.86,87.29,87.5,87.71,86.91,85.8,85.8,85.72,85.39,85.02,81.4,77.83,74.86,72.84,72.02,71.84,71.21,70.9,71.06,71.09,71.18,71.14,71.14,71.21,71.27,70.77,70.56,71.21,71.28,72.21,72.41,72.01,70.97,70.54,71.13,72.75,72.48,72.27,72.38,71.41,71.45,71.61,71.74,72.18,72.81,70.65,67.49,65.36,61.94,59.15,56.43,53.4,50.69,48.3,46.56,44.6,42.62,40.52,37.68,35.65,34.58,34.24,33.52,33.2,33.1,33.25,33.42,32.24,31.13,28.64,25.6,23.49,21.53,21.01,21.37,21.3,21.17,21.36,21.42,21.61,21.72,21.79,21.65,21.6,21.52,21.1,21.1,21.19,21.22,21.02,21.07,21.09,21.07,20.98,19.9,17.82,17.17,17,16.99,16.96,16.18,14.72,14.57,14.31,14.17,14.12,14.14,80.6,82.23,82.24,82.84,82.89,82.72,82.92,83.81,83.98,83.82,83.74,84.14,84.39,84.23,84.16,84.2,83.68,83.69,83.6,83.95,84.6,83.97,84.38,84.65,85.11,85.32,85.52,85.73,85.94,85.09,85.1,84.94,84.72,84.39,80.67,77.47,74.33,72.56,71.99,71.42,71.12,70.86,70.79,71.68,71.11,70.99,71.01,70.97,71.47,70.87,70.68,70.72,70.68,71.15,71.83,71.15,70.65,70.48,72.11,72.64,73,72.33,72.02,71.46,71.43,72.73,72.71,72.62,72.54,70.42,66.3,63.11,60.01,57.68,54.33,51.52,48.77,46.57,44.81,43.69,42.04,40.04,36.7,36.19,35.08,33.66,33.36,33.26,33.2,33.32,33.02,31.38,29.69,27.02,26.02,23.52,21.48,20.87,21.24,21.18,21.24,21.27,21.28,21.28,21.5,21.67,21.68,21.59,21.51,20.54,21.64,21.82,21.29,20.9,20.9,21,20.96,20.67,19.91,19.62,17.91,17.1,17.04,16.88,16.94,14.99,14.48,14.36,14.16,14.13,14.1,80.52,81.73,81.65,81.88,82.2,81.97,82.52,83.2,83.35,83.49,83.22,83.45,83.26,83.14,83.05,82.83,83.06,82.66,82.74,82.94,82.91,83.12,82.8,81.5,81.76,81.93,82.1,82.3,82.61,82.91,83.93,84.23,83.96,83.3,79.98,77.91,74,72.1,71.42,71.09,70.85,71.02,71.22,71.36,70.81,71,70.98,70.62,71.24,71.15,70.41,70.82,70.72,70.95,71.03,70.92,70.23,70.75,72.17,72.31,70.93,71.4,71.44,71.37,71.65,72.46,72.41,72.93,71.75,68.35,64.87,62.32,58.78,56.23,53.13,49.72,47.56,45.56,43.74,43.34,41.82,39.64,36.67,36.35,35.57,34.79,33.67,33.37,33.31,33.32,31.84,30.34,29.02,26.32,24.5,23.36,21.26,20.67,21.18,21.05,21.1,21.22,21.52,21.86,21.58,21.61,21.53,21.49,21.39,21.13,22.07,22.47,21.49,20.75,20.84,20.93,20.94,20.91,20.08,19.68,17.47,17.33,17.02,16.88,16.71,15.29,14.43,14.14,14.08,14.05,14.08,80.59,80.66,81.04,81.34,81.53,81.42,82.07,82.75,82.9,82.76,82.52,82.32,82.38,82.41,82.08,81.72,81.9,81.84,82.27,81.86,82.43,82.64,82.64,81.33,81.44,81.52,81.56,81.54,81.52,81.49,83.37,83.46,83.29,82.95,80,76.85,74.05,72.12,71.19,70.79,71.12,70.69,70.97,70.85,70.88,70.68,70.82,70.47,70.48,70.98,70.5,70.66,71.1,71.54,71.25,70.57,70.19,71.54,72.26,71.68,70.82,70.91,70.96,71.42,71.96,71.52,71.6,72,70.64,67.54,64.41,61.17,58.36,54.96,51.43,48.66,45.98,44.7,43.28,42.44,41.07,38.95,36.74,36.05,35.22,34.19,33.76,33.7,33.16,33.03,31.34,29.73,27.99,25.16,23.15,21.74,21.06,20.72,21.13,21.02,20.99,21.06,20.92,21.91,21.49,21.49,21.48,21.46,21.31,21.05,21.79,21.95,21.6,20.74,20.66,21.02,21.2,20.23,19.88,19.33,18.28,17.77,17.68,17.47,16.91,16.52,14.43,14.21,14.04,14.02,14,79.94,80.37,80.34,80.49,80.52,81.74,80.73,81.47,82.14,81.6,81.22,81.31,81.26,81.05,80.91,81.13,81.2,81.21,81.49,81.6,81.66,82.09,81.45,81.41,81.46,81.46,81.45,81.45,81.44,81.44,82.9,82.8,82.56,82.56,80.3,76.7,74.02,72.2,70.85,70.69,70.53,70.64,70.6,70.78,70.65,70.59,70.71,70.38,70.34,70.7,70.88,70.48,71.05,71.61,70.85,70.09,70.45,71.97,72.47,72.61,71.88,72.13,71.08,71.64,71.76,71.43,71.47,72.1,70.25,66.43,63.78,60.31,57.25,53.69,50.6,48.05,45.16,43.76,42.81,41.62,39.39,37.78,36.07,35.26,35.07,34.1,33.84,33.82,32.96,31.71,31.1,29.05,26.8,24.17,22.01,21.28,21.5,20.67,21.09,21.14,21,20.87,21,22.6,21.74,21.54,21.44,21.45,21.28,21.04,21.04,21.66,21.71,20.89,20.7,20.62,20.7,20.28,19.95,19.96,19.83,18.4,17.5,18.22,16.73,16.21,14.57,14.02,13.97,13.94,13.97,79.42,79.63,79.89,79.77,79.82,79.38,79.56,79.95,80.39,80,80.04,80.25,80.13,80.19,80.19,80.43,80.68,81.27,80.65,80.82,81.39,81.53,81.31,81.37,81.43,81.38,81.32,81.27,81.21,81.16,82.25,82.1,81.91,81.8,79.4,76.93,73.73,71.21,70.64,70.44,70.53,70.59,70.49,70.68,70.57,70.64,70.62,70.28,70.16,70.47,70.6,70.52,70.51,71.15,70.55,69.97,71.24,72.55,72.56,72.25,72.08,71.69,71.19,70.85,71.67,71.64,72.11,71.78,70.14,65.76,63.4,59.78,57.03,53.76,50.45,47.48,44.09,42.43,41.86,39.03,37.3,36.94,35.84,35.05,34.49,34.15,34.06,33.85,32.93,31.47,30.32,28.11,25.32,23.44,22.97,22.88,22.1,20.48,21.04,21,21.02,20.89,21.79,22.4,21.81,21.56,21.47,21.29,21.19,20.89,20.89,21.17,21.2,20.84,20.58,20.64,20.7,20.43,20.43,19.89,18.22,17.64,16.92,16.73,16.67,15.88,14.55,14.18,13.95,13.88,13.86,78.65,78.88,78.73,78.69,78.71,78.46,78.39,78.67,78.65,78.9,79.04,79.28,79.29,79.77,79.85,79.81,80.12,80.11,80.2,80.41,80.76,81.17,81.32,81.35,81.05,80.19,79.47,78.75,78.03,77.22,81.33,81.53,81.27,81.09,78.62,75.72,73.06,71.28,70.38,70.24,70.31,70.31,70.38,70.63,70.53,70.35,70.51,70.19,69.91,70.39,70.53,70.36,70.54,70.67,69.81,70.05,71.84,72.65,72.42,72.35,71.68,70.64,70.51,70.84,71.23,71.27,71.48,71.56,69.18,64.97,62.34,58.75,56.2,52.96,50.05,46.46,43,41,39.64,37.43,37.29,36.41,34.89,34.82,34.44,34.26,34.26,33.56,32.06,30.87,29.86,27.27,24.44,22.75,23.15,23.28,22.11,21.15,21.09,21.04,21.17,21.05,20.95,20.9,21.77,21.34,21.31,21.23,21.07,21.01,20.95,21,20.75,20.68,20.58,20.66,20.69,20.62,20.37,18.89,18.34,17.63,16.98,16.66,16.64,16.59,15.25,14.08,13.84,13.81,13.83,77.53,77.7,77.46,77.56,77.86,77.41,77.66,78.22,78.27,78.2,78.26,78.54,78.79,79.12,79.48,79.61,80.38,80.29,80,80.04,80.36,81.1,81.21,81.37,81.06,80.08,79.27,78.51,77.75,77.15,80.33,81.01,80.74,80.72,77.3,74.96,72.7,70.82,70.31,70.18,70.29,70.12,70.22,70.18,70.22,70.38,70.62,70.28,69.93,70.23,70.42,70.23,70.34,70.32,69.79,70.73,72.18,72.32,71.93,71.84,71.5,70.46,70.96,71.12,71.04,71.59,71.44,70.88,66.84,64.4,61.64,58.39,55.46,52.57,48.76,45.25,42.42,40.88,38.78,37.38,37.25,36.18,34.83,34.56,34.38,34.36,34.41,33.12,31.56,30.49,28.85,26.17,23.57,22.72,22.17,22.16,21.87,21.13,21.09,21.05,21.09,21,20.96,20.94,21.04,20.83,20.81,20.85,20.87,20.74,20.63,20.56,20.61,20.56,20.62,20.63,20.72,20.4,19.45,19.36,18.52,17.58,16.9,16.71,16.65,16.62,15.33,14.06,13.84,13.81,13.8,76.91,76.62,76.46,76.94,77.08,76.84,77.17,77.57,77.9,77.92,77.75,78.15,78.31,78.87,79.02,79.07,79.4,79.93,79.54,79.68,80.13,81.23,81.15,80.28,80.19,79.12,78.23,77.42,77.22,77.13,80.07,80.43,80.22,80.05,77.17,74.36,71.87,70.64,70.01,70.16,70.05,70.04,69.99,70.16,70.3,70.57,70.56,70.3,69.67,70.12,70.12,70.19,70.29,69.86,69.68,71.96,72.32,72.48,71.52,70.73,70.22,70.38,70.93,71.32,71.71,71.99,70.91,68.29,64.66,62.02,60.18,57.09,54.45,51.8,48.74,44.98,42.02,40.59,38.89,36.99,36.53,35.6,34.78,34.46,34.37,34.26,33.87,32.99,32.47,30.26,27.98,24.19,22.62,22.29,22.18,22.15,21.93,21.17,21.06,20.94,20.85,20.81,20.71,20.71,20.67,20.6,20.6,20.56,20.58,20.56,20.57,20.6,20.61,20.6,20.66,20.66,20.66,19.91,19.3,19.3,18.68,17.64,16.84,16.65,16.56,16.62,14.82,13.92,13.83,13.72,13.78,77.54,76.41,76.19,76.09,76.82,76.72,76.87,77.1,77.3,77.47,77.64,77.89,78.03,78.22,78.36,78.53,78.66,79.42,79.09,79.6,79.47,80.31,79.31,78.21,78.05,77.82,77.62,77.43,77.24,77.05,79.98,80.07,79.8,79.64,76.75,73.25,71.38,70.33,70.06,69.99,70.02,69.83,70.27,70.13,70.22,70.32,70.51,70.25,69.87,69.93,70.1,70.09,70.01,69.69,70.08,71.69,72.1,71.92,71.27,70.47,70.38,70.36,70.73,71.58,71.01,71.28,68.18,64.66,62.23,60,57.78,55.77,53.57,51,47.71,44.51,41.22,40.2,38.81,37.01,36.42,35.49,34.83,34.34,34.52,34.69,34.41,32.52,31.4,28.77,26.12,23.46,22.72,22.24,22.17,22.08,21.97,21.15,21.08,20.95,20.84,20.76,20.68,20.68,20.62,20.58,20.55,20.52,20.54,20.52,20.46,20.48,20.57,20.57,20.6,20.68,20.47,20.16,19.64,19.24,18.81,17.55,17.38,17.6,16.63,16.56,15.22,14.13,13.79,13.77,13.76,76.75,76.48,76.35,76.18,76.43,76.4,76.43,77.19,77.07,77.22,77.39,77.38,77.61,77.6,77.62,77.84,78.57,78.56,78.62,78.89,78.96,79.21,78.89,77.77,77.63,77.51,77.4,77.29,77.13,77.09,79.72,79.72,79.43,79.27,76.59,72.9,70.99,70.29,70.3,69.78,69.82,69.9,70.08,70.02,70.1,70.33,70.2,70.16,69.8,69.68,69.88,70.06,69.85,69.57,70.25,71.24,71.53,71.36,70.27,70.04,70.09,70.49,70.83,70.94,70.02,68.19,65.79,62.78,60.15,57.99,56.36,54.66,52.64,50.43,46.67,42.83,40.58,39.06,37.7,37.24,36.18,35.11,34.77,34.23,34.58,34,33.61,32.09,30.06,27.77,25.23,22.65,22.4,22.33,22.32,22.05,21.9,21.17,21.06,21.26,20.95,20.61,20.65,20.44,20.41,20.54,20.53,20.65,20.83,20.35,20.3,20.61,20.37,20.32,20.63,20.29,20.32,20.13,19.79,18.99,18.1,17.31,16.94,16.75,16.76,16.63,16.39,14.65,13.78,13.73,13.75,76.07,76.16,76.4,76.33,76.26,76.36,76.36,76.46,76.98,77.14,77.27,77.17,77.52,77.42,77.51,77.65,77.85,78.22,78.32,78.62,78.79,78.64,77.66,77.28,77.22,77.11,77.02,77.03,77.05,77.07,77.93,79.4,79.07,78.84,75.98,72.35,70.71,70.09,69.67,69.64,69.69,70.17,70.25,69.86,69.69,69.92,69.94,69.98,70.04,70.13,69.85,69.85,69.42,69.8,70.97,71.93,71.64,71.2,70,69.92,70.2,70.7,70.94,69.68,67.51,65.35,62.81,60.72,58.87,56.82,55.07,53.48,51.2,48.23,44.9,41.88,39.99,37.59,37.54,36.95,36.02,34.76,34.28,33.96,33.88,32.9,32.22,31.46,29.01,26.68,24.11,22.48,22.23,22.28,22.27,22.07,21.6,21.02,20.96,21.19,20.89,20.6,20.46,20.43,20.22,20.18,20.22,20.3,20.2,20.07,20.19,20.29,20.19,19.99,19.89,19.9,19.87,20.08,18.96,18.33,17.88,17.39,16.98,16.67,16.53,16.38,15.78,14.69,13.8,13.74,13.72,75.78,75.62,76.42,76.39,76.15,76.73,76.25,76.98,76.9,76.96,77.45,78.4,77.99,77.27,77.48,77.3,77.69,78.33,78.47,78.26,78.43,78.45,77.18,77.07,77.13,77.15,77.18,77.2,77.22,77.14,77.83,79.01,78.8,78.62,75.15,71.85,70.55,69.63,69.7,69.61,69.76,69.61,69.85,69.64,69.7,69.78,69.71,69.93,69.87,69.92,69.83,69.69,69.31,69.87,71.2,71.35,71.34,71.55,69.56,69.54,69.88,70.16,69.19,66.58,64.99,62.55,59.94,58.63,56.19,55.23,53.83,51.86,48.73,46.36,42.49,39.84,38.31,36.41,36.35,36.14,35.4,34.8,34.06,33.56,33.72,33.66,32.39,31.29,28.61,25.98,23.62,22.25,22.2,22.2,21.84,21.68,21.34,20.98,20.92,20.91,20.78,20.66,20.39,20.19,20.19,20.18,20.23,20.14,20.11,20.05,20.05,19.89,19.85,19.78,19.74,19.87,20.14,19.7,18.82,18.21,17.77,17.24,16.94,16.67,16.4,16.3,15.72,14.66,13.79,13.71,13.73,75.49,75.44,75.53,75.71,76.29,76.57,76.25,77.17,77,76.66,77.32,78.18,78.39,78.18,77.09,77.31,77.4,77.56,77.71,77.87,78.3,78.33,77.13,77.07,77.72,77.84,77.93,78.01,77.95,77.22,77.86,78.76,78.52,78.45,75.14,72.07,70.29,69.56,69.51,69.36,69.65,69.55,69.4,69.5,69.63,70,70.04,69.77,69.65,69.58,69.64,69.15,69.2,70.55,71.2,71.61,70.77,69.16,69.3,69.26,69.24,68.41,66.44,64.51,62.52,59.51,57.48,55.11,54.58,53.27,52.22,49.75,46.93,44.54,40.68,38.4,36.48,36.13,35.07,34.64,34.23,34.22,33.9,33.37,33.76,33.85,32.34,30.92,28.23,25.68,23.19,22.14,22.16,21.98,21.89,21.72,21.36,20.9,20.89,20.73,20.64,20.67,20.48,20.21,20.2,20.26,20.18,20.17,20.01,20.11,20.08,19.85,19.66,19.59,19.55,19.85,20.01,19.91,19.07,18.46,17.95,17.32,17.22,16.94,16.78,16.47,15.84,14.69,13.78,13.69,13.71,75.19,75.51,75.55,75.51,75.77,76.18,76.68,76.91,76.57,76.36,76.71,77.08,77.44,77.32,76.66,77.08,77.47,77.41,77.37,77.52,77.87,78.17,77.01,77.06,77.72,78.88,78.98,78.87,78.16,77.3,77.75,78.49,78.24,78.25,76.52,72.93,70.33,69.42,69.28,69.42,69.39,69.37,69.28,69.46,69.76,70.04,69.82,69.35,69.34,69.41,69.51,68.98,69.5,70.82,70.59,70.68,70.93,68.25,68.38,68.15,66.84,65.68,63.77,62.51,59.97,56.99,55.4,53.9,53.2,51.58,49.51,47.05,44.43,41.81,39.01,37.48,36.09,35.7,35.39,34.76,33.96,33.3,33.27,33.29,33.52,33.19,31.81,30.49,27.93,25.47,23.04,22.09,22.1,22.06,21.99,21.7,21.36,20.74,20.8,20.8,20.39,20.43,20.25,20.25,20.25,20.25,20.13,20.17,20.09,20.07,20,19.69,19.56,19.54,19.57,19.67,20.03,20.01,20.07,19.9,19.91,17.56,17.13,16.69,16.6,16.25,15.88,14.53,13.89,13.74,13.71,74.74,74.8,74.97,75.37,75.36,75.88,77.28,76.83,76.19,75.96,76.23,76.46,77.42,77.53,76.79,76.52,77,77.09,77.39,77.27,77.93,77.9,77.05,77.09,77.81,78.9,79.67,78.78,77.95,77.23,77.7,78.24,77.93,78.03,77.02,73.07,70.89,69.59,69.39,69.29,69.3,69.26,69.51,69.42,69.99,70.02,69.97,69.52,69.43,69.35,68.78,68.92,70.29,70.66,69.53,69.13,68.29,65.59,65.59,65.88,64.64,63.37,60.96,58.85,56.98,54.97,54,52.75,51.14,49.2,47.14,45.05,42.51,42.04,38.61,37.29,36.26,35.9,35.84,35.05,33.95,33.26,33.06,33.15,33.41,32.79,31,30.37,27.91,25.51,23.04,22.2,21.87,21.92,21.69,21.46,21.21,20.73,20.7,20.59,20.26,20.18,20.34,20.55,20.56,20.41,20.21,20.12,20.22,20,19.92,19.57,19.69,19.62,19.5,19.63,19.84,19.96,19.83,19.84,17.53,16.88,16.7,16.6,16.55,16.29,16.07,15.26,13.88,13.74,13.7,74.71,74.61,74.66,74.92,75.25,75.36,75.8,75.81,75.72,75.72,76.19,76.5,76.9,76.92,76.98,76.58,76.66,76.76,76.98,77.15,77.46,77.66,76.98,77.02,77.24,78.23,77.64,78.06,77.23,77.21,77.52,77.9,77.68,77.75,76.76,74.05,71.38,69.51,69.19,69.17,69,69.63,69.18,69.44,69.86,69.54,69.45,69.36,69.21,69.2,68.73,69.04,70.8,70.55,68.74,66.56,65.15,63.95,62.6,62.98,61.7,60.46,58.09,56.19,54.87,54.63,53.06,50.98,49.22,47.24,44.87,43.27,40.93,39.3,38.03,37.56,36.3,36.12,35.92,35.09,34.14,33.18,32.87,32.93,32.57,31.23,31.14,30.49,27.98,25.44,22.81,21.68,21.67,21.64,21.74,21.32,21.2,20.64,20.6,20.46,20.24,20,20.06,20.2,20.28,20.22,20.37,20.4,20.15,19.59,19.77,19.6,19.56,19.4,19.36,19.41,19.42,19.58,19.41,19.29,17.65,17.11,16.79,16.59,16.4,16.25,16.59,15.6,14.29,13.65,13.7,74.27,74.52,74.58,74.8,74.92,75.07,75.27,75.25,75.36,75.64,75.93,75.99,76.01,76.09,76.21,76.44,76.48,76.55,76.68,76.48,76.92,77.11,76.7,76.88,77.13,77.14,77.02,77.12,77.16,77.12,77.33,77.46,77.38,77.63,77.06,74.98,72.15,70.05,69.22,69.3,69.11,69.2,69.14,69.51,69.28,68.99,69.53,69.01,69.16,68.52,68.52,69.92,70.42,68.97,67.7,64.6,62.65,62.11,61.39,60.25,59.63,57.75,56.2,54.15,53.52,52.19,51.11,49.7,47.3,45.47,43.11,41.51,40.2,38.78,37.94,37.24,35.98,35.71,34.93,34.66,33.71,33.22,32.8,32.7,32.66,32.5,31.67,29.8,27.79,25.29,22.78,21.66,21.71,21.66,21.54,21.31,20.87,20.43,20.49,20.32,20.07,19.8,19.91,20.17,20.04,20.47,20.51,20.38,20.34,19.5,19.51,19.54,19.25,19.25,19.19,19.25,18.62,19.51,19.55,19.31,17.84,17.37,17.39,16.88,16.34,16.19,16.12,15.57,14.5,13.71,13.65,74.17,74.35,74.5,74.64,74.82,74.99,75.15,75.27,75.42,75.55,75.68,75.78,75.89,75.96,76.02,76.15,76.28,76.35,76.34,76.45,76.45,76.53,76.57,76.65,76.77,76.81,76.84,76.94,77.05,77.08,77.11,77.17,77.07,77.16,77.05,75.53,72.92,70.46,69.05,68.8,68.76,68.99,69.16,69.62,69.27,69.35,68.95,69.12,69.66,68.48,68.38,69.93,69.98,69.38,67.7,64.01,62.3,59.08,58.44,58.44,56.96,55.99,54.79,53.32,51.63,50.24,49.36,47.91,45.51,43.68,41.18,40.15,39.26,37.91,37.3,36.45,35.9,34.96,34.32,34.13,33.39,32.92,32.68,32.55,32.66,32.45,30.82,29.65,28.05,25.47,22.87,21.54,21.69,21.71,21.45,21.19,20.69,20.48,20.38,20.26,20.07,19.77,19.91,19.92,19.83,20.41,20.43,20.14,20.35,19.26,19.35,19.41,19.27,19.18,19.19,18.18,18.99,19.67,19.67,19.53,17.84,17.44,17.2,16.84,16.32,16.18,16.2,15.5,14.4,13.66,13.62,74.02,74.3,74.37,74.62,74.82,75.07,75.16,75.28,75.38,75.55,75.71,75.77,75.7,75.51,75.37,75.56,76.15,76.57,76.46,76.56,76.61,76.68,76.8,76.87,77.13,77.21,77.17,77.1,77.18,77.07,77.08,76.89,76.77,76.98,76.74,75.83,73.47,71.47,69.17,69.36,68.58,69.22,69.06,68.95,68.92,69.33,69,69.44,68.71,68.35,68.95,69.41,68.87,69.87,68.06,64.52,62.05,58.66,56.97,56.75,54.16,53.18,52.55,51.95,50.2,48.32,47.02,44.72,43.18,41.32,40.16,38.96,38,37.81,37.99,36.52,35.55,34.96,34.31,33.64,33.07,32.8,32.52,32.42,32.64,32.42,30.83,29.59,28.3,25.6,22.74,21.3,21.1,21.02,21,21.12,20.6,20.34,20.29,20.15,19.81,19.94,19.64,19.66,19.69,20.12,20.03,19.71,19.68,19.2,19.34,19.19,19.25,19.27,18.64,18.38,18.94,19.33,19.34,19.26,17.46,17.39,17.21,16.78,16.27,16.31,16.19,15.31,14.03,13.62,13.6,73.69,73.75,73.87,74.17,74.95,74.74,72.52,76.28,76.3,76.04,75.96,75.65,75.22,74.98,74.82,74.72,75.2,75.43,75.83,75.66,75.94,76.28,76.62,76.88,76.97,77.06,77.13,77.22,77.12,77.15,76.93,76.64,76.53,76.6,77.32,76.19,74.22,71.45,69.4,68.85,68.37,68.55,68.71,68.72,68.97,69.25,69.24,69.63,68.22,68.51,70.01,70.25,68.66,67.89,66.84,65.44,63.27,58.55,56.58,55.38,53.34,51.06,50.66,50.25,48.83,46.62,44.69,43.22,42.04,40.36,39.9,38.05,37.78,37.08,37.19,35.64,34.91,34.72,33.98,33.44,33.03,32.61,32.3,32.16,32.6,32.67,30.88,29.61,28.18,25.43,22.62,21.2,21.17,21.1,21.04,20.79,20.54,20.21,20.18,20.08,19.71,19.73,19.82,19.59,19.62,19.6,19.55,19.45,19.2,19.11,19.31,19.3,19.27,19.16,19.26,19,19.33,19.11,19.06,18.91,17.72,17.37,17.22,16.77,16.2,16.14,16.08,15.67,14.19,13.55,13.59,73.4,72.85,73.11,73.3,73.84,73.99,72.51,76.29,76.3,74.29,75.1,75.21,74.93,74.49,74.28,74.18,74.43,75.23,75.16,75.58,75.91,76.33,76.62,76.91,76.88,77.04,77.17,77.2,77.23,77.1,76.74,76.52,76.4,76.75,76.69,76.39,74.34,72.06,69.47,68.43,68.2,68.47,68.7,68.91,68.77,68.63,69.52,69.42,68.19,68.41,70.16,70.27,68.53,67.61,67.81,65.55,63.29,57.76,55.98,55.14,53.25,49.27,47.76,47.18,46.28,44.63,43.7,42.31,40.89,39.61,38.29,37.67,36.93,36.6,36,35.15,34.64,34.17,33.79,33.58,33.45,32.7,32.08,31.8,31.71,31.37,30.54,29.6,28.61,26.46,23.5,21.01,21.08,21.06,21,20.71,20.49,20.14,20.09,19.97,20,19.87,19.53,19.63,19.79,19.57,19.73,19.46,19.09,19.02,19.26,19.23,19.22,19.18,19.14,19.11,19.06,19.01,19.03,18.48,17.44,17.32,17.45,16.65,16.29,16.93,16.12,15.73,13.9,13.59,13.43,72.97,72.89,72.77,73.31,73.31,73.56,72.82,73.24,73.01,74.28,74.56,74.7,74.56,74.24,73.77,74.06,74.85,74.87,75.16,75.59,75.91,76.31,76.74,76.89,77,77.07,77.08,77.1,77.11,77.1,76.54,76.38,76.3,76.43,77.1,76.34,74.11,72.27,69.7,68.42,68.29,68.29,68.8,69.04,68.82,68.61,68.89,67.94,68.16,68.98,69.9,69.51,67.62,66.78,67.4,65.82,62.31,58.96,56.16,54.96,52.25,49.57,47.42,45,44.21,43.37,42.66,41.89,39.74,38.69,38.53,38.17,36.81,36.26,35.63,35.07,34.49,34.2,33.95,33.47,32.88,32.8,31.98,31.51,31.35,31.44,31.08,30.12,28.79,26.67,24.53,21.4,21,20.88,20.82,20.5,20.23,20.05,20,19.87,19.79,19.72,19.49,19.55,19.23,19.32,19.13,19.06,19,18.96,19.26,19.27,19.26,19.14,19.11,18.99,18.88,18.59,18.34,17.6,17.28,17.15,17.08,16.61,16.75,17.15,16.65,15.65,14.22,13.63,13.52,72.97,72.6,72.6,72.93,73.04,73.12,73.2,73.14,73.07,73.79,73.96,74.07,74.12,73.89,73.54,74.02,75.47,76.42,76.31,75.69,75.98,76.29,76.69,76.95,76.98,77.04,77.09,77.16,77.21,77.12,76.57,76.46,76.2,76.38,76.19,75.66,74.83,72.44,69.93,68.8,67.99,68.28,68.55,68.39,68.33,69.03,68.48,67.96,68.19,69.27,69.62,68.4,66.22,65.91,66.24,63.98,61.59,59.24,55.93,54.51,52.48,50.34,48.26,45.93,43.73,42.41,41.57,40.73,38.63,38.55,38.44,37.84,35.87,35.73,35.33,34.77,34.57,34.45,33.47,33,32.91,32.82,32.62,31.3,31.18,31.43,31.21,29.53,28.76,26.73,24.54,22.29,21.01,20.72,20.3,20.11,20,19.93,19.91,19.79,19.7,19.55,19.41,19.28,19.1,18.99,18.91,18.86,18.89,18.94,19.05,19.12,19.14,19.03,18.94,18.74,18.38,18.04,17.82,17.55,17.15,17.07,17.01,17.08,17.06,17.02,17.06,16.93,15.75,13.79,13.43,72.94,72.48,72.57,72.7,72.75,72.75,72.58,72.56,72.7,72.98,73.1,73.68,73.7,73.43,73.31,74.41,75.93,76.48,76.52,76.6,76.62,76.42,76.83,76.96,77.09,77.13,77.15,77.17,77.19,77.12,76.6,76.29,76.19,76.35,76.5,76.17,75.05,72.65,69.88,68.54,67.93,68.1,68.1,67.69,68.15,68.44,68.02,67.9,68.25,69.85,68.67,67.8,64.8,64.9,65.36,63.43,59.68,57.26,55.59,54.01,51.63,49.62,46.91,45.95,43.58,41.73,39.97,38.36,38.43,38.07,37.22,36.54,35.72,35.47,35.12,34.89,34.86,34.48,32.32,32.82,32.93,33.05,32.15,31.03,30.85,30.72,30.1,28.8,28.62,26.67,24.53,22.69,21.21,20.43,20.24,20.12,20.18,20.23,19.87,19.71,19.63,19.47,19.23,19.09,19.09,18.97,18.87,18.78,18.8,18.87,19.02,19.06,19.08,18.95,18.77,18.55,18.2,17.78,17.44,17.29,17.18,17.11,17.04,16.97,16.88,16.93,16.98,16.83,15.9,14.11,13.47,73.12,72.51,72.6,72.67,72.7,72.69,72.6,72.53,72.57,72.83,72.96,72.79,73.32,73.2,73.1,73.86,75.64,76.25,76.3,76.36,76.79,76.71,76.89,77,77.14,77.18,77.16,77.17,77.17,77.11,76.43,76.28,76.17,76.29,76.94,76.12,75.25,72.49,69.85,68.12,67.9,67.77,67.88,67.73,69.06,68.07,67.74,67.9,68.22,69.26,69.08,64.96,63.26,64.04,63.01,60.28,56.97,55.86,55.24,53.92,50.63,49.14,46.32,45.31,42.96,40.34,38.66,38.17,37.72,37.38,36.79,36.28,35.66,35.27,35.11,34.95,34.97,33.97,31.85,32.28,32.82,32.71,31.83,30.91,30.6,30.31,29.81,29.3,28.76,27.76,25.08,22.71,21.05,20.51,20.36,20.23,19.97,20.14,19.94,19.61,19.44,19.26,19.17,18.75,18.88,18.76,18.73,18.68,18.55,18.58,18.45,18.76,19.04,18.97,18.83,18.61,18.04,17.37,17,16.86,17.07,17.11,17.09,17.34,17.28,16.97,16.77,16.74,16.1,13.63,13.42,73.04,72.48,72.56,72.61,72.66,72.66,72.58,72.55,72.56,72.81,72.78,72.89,73,73.33,73.26,73.39,73.79,74.46,74.68,74.71,77.13,76.9,76.83,76.99,77.1,77.1,77.13,77.15,77.15,77.1,76.42,76.22,76.15,76.4,76.56,76.22,74.73,71.94,69.79,68.63,67.61,67.57,67.28,68.13,68.22,67.57,67.6,68.03,68.4,68.62,66.52,63.58,61.42,63.31,60.78,56.94,57.41,57.04,55.11,51.85,49.56,47.93,45.98,43.35,41.66,39.37,38.66,38.48,38.03,36.85,36.17,35.9,35.44,35.25,35.44,34.75,34.37,33.39,31.2,31.23,31.54,31.52,31.12,30.68,30.37,30.06,30.09,29.87,28.88,28.06,25.81,22.77,21.09,20.83,20.42,19.97,19.61,19.85,19.58,19.45,19.51,18.49,18.47,18.5,18.47,18.47,18.43,18.46,18.53,18.37,18.2,18.11,18.98,19.21,18.89,18.58,18.81,17.28,16.46,16.34,16.88,17.07,17.12,17.23,17.28,17.1,16.75,16.67,16.13,13.71,13.49,72.54,72.53,72.52,72.56,72.58,72.6,72.57,72.55,72.53,72.58,72.65,72.86,72.97,73.35,73.3,73.3,73.3,73.35,73.45,73.79,73.45,73.75,76.71,77.26,77.13,77.12,77.12,77.12,77.12,77.11,76.36,76.32,76.14,76.37,77.02,76.3,74.73,72.41,70.25,68.65,67.57,67.26,67.55,67.75,67.8,67.39,67.71,68.33,68.82,66.93,64.86,62.45,60.59,60.45,57.51,57.11,57.19,56.14,53.8,50.88,48.01,47,44.71,42.15,40.1,38.58,38.69,38.69,38.03,36.9,35.97,35.61,35.37,35.23,33.66,33.2,32.22,31.4,30.95,30.59,30.48,30.54,30.53,30.4,30.21,29.96,30.13,29.7,28.92,28.43,26.86,23.33,21.36,21.25,20.05,19.51,19.27,19.48,19.53,19.65,19.18,18.66,18.5,18.45,18.5,18.38,18.39,18.38,18.42,18.5,18.42,18.24,18.55,18.83,18.52,18.51,18.69,17.33,16.04,16.04,16.48,16.86,16.91,17.06,17.05,16.81,16.82,16.71,16.39,13.61,13.58,72.58,72.51,72.49,72.56,72.57,72.59,72.58,72.59,72.53,72.58,72.64,72.71,72.91,72.99,73.23,73.24,73.28,73.38,73.25,73.06,73.01,73.78,76.36,76.93,77.16,77.15,77.14,77.14,77.14,76.97,76.25,76.1,76.02,76.41,76.83,76.23,74.65,72.37,70.31,68.3,67.38,67.12,67.74,67.64,67.14,67.24,67.61,69.22,66.04,64.86,63.42,59.55,58.55,57.44,56.76,57.09,55.99,53.66,50.79,48.65,47.16,45.46,43.35,40.99,38.68,38.51,38.35,38.09,37.14,36.25,35.8,35.46,35.37,33.8,33.7,32.92,31.62,31.15,30.66,30.51,30.43,30.37,30.26,30.16,30.05,29.85,30.11,29.55,28.81,28.66,27.35,24.07,21.83,21.56,19.7,19.05,19.23,19.5,20.05,19.54,19.25,18.7,18.52,18.41,18.48,18.46,18.39,18.4,18.44,18.41,18.92,18.45,18.37,18.34,18.3,19.27,19.24,17.24,15.75,15.75,16.87,16.89,16.94,16.9,16.87,16.82,16.79,16.74,15.79,13.6,13.46,72.66,72.51,72.45,72.54,72.61,72.61,72.61,72.57,72.53,72.58,72.63,72.69,72.73,72.79,73.14,73.13,73.17,73.24,73.14,72.99,72.68,73.47,75.4,76.35,77.2,77.19,77.17,77.16,77.23,77,76.18,75.99,75.97,76.17,76.62,76.16,74.47,71.95,69.39,67.95,67.2,67.03,68.04,67.71,67.02,66.93,67.67,66.21,64.13,62.39,61.81,57.8,56.84,56.26,56.99,54.87,53.7,52.13,49.91,47.7,46.11,43.89,41.73,39.81,37.81,37.33,36.85,36.94,36.74,36.12,35.48,35.3,34.41,33.84,33.52,32.39,31.06,30.87,30.68,30.89,30.44,30.37,30.23,30.14,30,29.95,29.76,29.2,28.75,28.57,27.79,24.97,22.64,22.06,19.96,18.96,19.18,20.05,20.08,19.52,18.71,18.6,18.46,18.38,18.47,18.6,18.46,18.4,18.48,18.35,18.32,18.27,18.22,18.16,18.39,18.74,18.69,17.97,15.53,15.54,16.76,16.82,16.86,16.93,16.9,16.79,16.86,16.92,16.6,13.55,13.48,72.49,72.53,72.45,72.46,72.63,72.62,72.66,72.58,72.54,72.58,72.63,72.67,72.72,72.74,72.77,73.03,73.03,73.03,73,72.88,72.62,73.3,74.67,75,73.8,75.16,75.63,76.7,77.09,76.37,76.06,75.96,75.87,76.09,76.38,75.75,73.93,71.19,68.93,67.03,66.67,67.15,67.77,66.88,66.76,67.81,67.93,65.06,62.05,59.3,58.12,57.04,56.61,55.74,55.47,54.69,51.41,50.34,48.61,46.29,44.33,42.12,40.28,38.48,37.79,37.68,36.53,35.83,35.32,35.14,35.04,35.58,33.87,33.4,32.64,31.87,31.11,30.77,30.81,31.3,31.28,30.52,30.16,30.08,29.99,29.98,29.77,29.13,28.66,28.83,28.01,25.14,23.21,22.64,20.65,18.79,18.85,19.29,19.64,19.29,18.78,18.3,18.29,18.22,18.19,18.26,18.31,18.33,18.51,18.33,18.32,18.19,18.12,18.23,18.22,18.32,18.49,17,15.41,15.37,16.09,16.82,16.96,16.97,16.73,16.73,16.82,16.72,15.82,13.48,13.43,72.13,72.08,72.09,72.22,72.33,72.45,72.44,72.59,72.54,72.58,72.62,72.66,72.69,72.65,72.69,72.85,72.84,72.85,72.83,72.72,72.58,72.66,73.08,73.53,73.92,74.47,74.95,75.2,75.43,75.71,75.82,75.81,75.7,76.03,76.1,75.13,73.13,70.65,68.29,66.91,66.75,68.16,66.99,66.63,66.87,68.16,67.91,63.36,61.15,59.28,55.78,56.68,55,54.56,53.17,51.52,49.67,48.17,46.71,44.67,42.06,40.46,39.03,37.98,38,37.63,35.82,35.28,35.05,34.78,34.83,34.29,33.66,32.87,32.48,31.73,31.42,30.83,30.94,31.4,31.08,30.71,30.42,30.06,29.93,29.95,30.08,29.85,29.07,28.79,27.98,24.93,23.9,23.08,20.91,18.84,18.37,18.93,18.94,18.96,18.63,18.43,18.42,18.43,18.21,18.24,18.28,18.35,18.72,18.65,18.24,18.17,18.13,18.1,18.29,18.3,17.89,16.34,15.37,15.28,15.71,16.86,16.97,16.75,16.75,16.78,16.94,16.95,16.44,13.55,13.33,72.05,72.13,72.13,72.22,72.29,72.39,72.42,72.46,72.53,72.57,72.6,72.64,72.66,72.6,72.61,72.73,72.74,72.72,72.62,72.57,72.54,72.62,73.4,74.16,74.48,74.76,75.17,75.2,75.44,75.64,75.65,75.56,75.45,75.7,76.04,74.6,72.89,70.12,67.59,66.42,66.93,66.95,67.09,66.46,67.16,67.53,66.79,64,61.43,58.62,55.93,55.29,52.41,52.72,52.14,49.19,48.06,46.2,44.46,43.6,41.38,39.3,37.95,37.9,36.86,36.31,35.15,34.89,34.72,34.75,34.39,33.71,33.55,33.22,32.69,31.65,31.1,30.87,31.07,31.38,31.17,30.74,30.27,30.06,29.78,29.85,29.99,29.85,29.22,28.84,26.91,24.8,24.57,23.94,21.79,19.33,18.17,18.21,18.83,18.39,18.38,18.43,18.45,18.45,18.24,18.22,18.29,18.36,18.52,18.44,18.1,18.1,18.26,18.32,18.25,18.24,17.77,17.3,15.3,15.23,15.5,15.73,15.87,16.12,15.78,15.89,15.84,16.15,15.76,13.6,13.3,72.44,72.14,71.78,72.86,72.33,72.45,72.37,72.39,72.46,72.58,72.58,72.59,72.58,72.49,72.52,72.51,72.6,72.6,72.56,72.54,72.5,72.58,73.57,74.13,74.76,75.09,75.25,75.46,75.42,75.3,75.38,75.29,75.07,75.58,76.14,74.63,72.94,69.64,67.38,66.57,66.81,66.64,66.31,66.27,66.95,67.66,67.45,64.13,60.68,57.25,54.75,51.34,50.22,50.37,50.36,47.77,45.97,44.28,43.24,42.22,39.85,38.28,37.63,36.7,36.2,35.68,35.11,34.64,34.52,34.81,34.02,33.48,33.51,33.51,32.85,31.83,31.1,31.03,31.29,31.35,31.23,30.31,30.24,29.87,29.59,29.78,29.99,29.76,29.13,28.53,27.19,25.31,25.21,24.74,22.76,19.56,18.04,18.12,18.22,18.17,18.16,17.98,18.22,18.22,17.98,17.98,18.08,18.07,18.08,17.95,17.98,18.12,18.18,18.3,18.27,18.15,17.85,16.76,15.23,15.18,15.52,15.42,15.6,15.67,15.73,15.96,15.98,15.91,15.67,13.9,13.14,71.1,70.76,71.69,69.66,67.5,72.62,72.4,72.4,72.43,72.5,72.62,72.61,72.56,72.48,72.53,72.52,72.55,72.56,72.54,72.46,72.48,72.55,73.44,74.22,74.99,75.36,75.47,75.5,75.47,75.38,75.32,74.91,74.63,74.76,75.75,74.7,72.85,69.85,67.05,66.44,66.56,66.35,66.1,66.42,66.71,67.19,66.5,63.64,60.16,56.7,53.8,51,48.83,47.1,47.24,45.68,43.84,42.81,40.83,39.55,38.47,37.8,37.26,36.53,35.87,35.3,34.87,34.49,34.42,34.5,34.02,33.46,33.63,33.42,32.76,31.71,31.08,31.05,31.04,30.98,30.24,30.09,30.09,29.73,29.4,29.58,29.66,29.37,28.82,27.78,26.88,25.91,25.84,24.81,21.86,19.81,18.53,18.06,18.14,18.08,18.11,17.93,18.24,18.11,17.84,17.85,17.86,17.89,17.89,17.88,17.97,18.06,17.56,17.67,17.95,17.23,16.69,15.57,15.18,15.12,15.47,15.43,15.52,15.73,15.6,15.74,15.99,15.98,15.6,14.53,13.13,68.48,69.7,70.64,71.45,70.23,71.63,72.42,72.38,72.47,72.47,72.67,72.49,72.5,72.58,72.78,72.6,72.74,73.14,72.98,72.51,72.5,72.59,73.05,74.07,75.08,75.52,75.46,75.46,75.46,75.45,75.42,74.46,74.11,74.1,75.46,74.53,72.8,70.28,67.71,66.33,66.44,65.96,65.94,66.34,66.74,67.01,65.1,62.52,59.25,55.81,53.02,50.03,48.27,46.89,44.77,44.02,42.54,41.8,40.06,39.09,38.15,37.94,37.22,35.78,35.4,35.06,34.63,34.52,34.06,33.84,33.62,33.4,33.55,32.41,32.21,31.64,31.13,31.04,30.95,31.41,30.65,30.2,29.58,29.49,29.21,29.24,28.75,28.48,28.43,27.46,26.69,26.48,26.86,23.62,21.3,19.62,18.68,17.84,17.84,17.82,17.81,17.76,17.72,17.84,17.72,17.71,17.73,17.81,17.79,17.74,17.72,17.9,18.3,17.58,16.98,16.7,16.28,15.68,15.1,15.03,15.31,15.43,15.56,15.7,15.56,15.72,15.78,15.83,15.4,14.66,13.25,67.51,68.65,69.6,70.41,71.22,71.72,71.62,71.93,72.66,72.56,72.42,72.25,72.45,73.33,74.28,73.91,73.8,73.93,73.96,72.49,72.43,72.72,72.66,72.95,74.76,75.51,75.47,74.94,74.88,74.84,74.21,73.84,73.56,73.5,75.47,74.42,72.23,70.5,67.66,66.44,66.15,65.86,65.66,66.32,66.84,66.36,63.89,60.18,57.4,54.37,51.78,49.27,48.09,45.86,43.3,42.81,41.95,40.77,39.61,38.35,37.66,37.07,36.63,35.29,35.13,34.76,34.51,34.34,33.71,33.23,33.36,33.12,32.43,31.47,31.19,31.09,31.38,31.06,31.33,31.75,30.92,29.51,29.16,29.02,29.07,28.96,28.6,28.17,27.78,27.26,27.11,27.79,27.12,23.22,20.92,18.99,17.71,17.73,17.66,17.78,17.81,17.51,17.49,17.6,17.6,17.62,17.58,17.64,17.67,17.67,17.93,17.92,17.88,17.94,17.84,17.38,16.38,15.43,15.05,14.99,15.29,15.4,15.6,15.67,15.52,15.66,15.99,15.88,15.47,14.19,13.06,67.24,67.6,68.56,69.45,70.43,71.17,71.18,71.64,72.46,72.56,72.34,72.1,72.07,72.56,73.8,73.19,73.15,73.11,72.83,72.01,72.45,72.64,72.36,72.44,72.45,72.68,73.21,73.96,73.92,73.8,73.8,73.25,72.97,72.84,74.01,73.97,72.41,69.77,67.21,66.12,65.95,65.76,66.04,66.91,66.67,64.47,61.87,57.96,55.59,53.27,50.81,48.33,46.69,45.24,42.37,41.29,40.85,39.83,38.86,37.8,37.09,36.46,35.84,35.2,34.89,34.62,34.74,33.76,32.08,32.11,32.08,32.05,31.78,31.24,31.24,31.23,31.16,31.57,31.78,31.34,30.64,29.06,28.9,28.83,28.91,28.67,28.4,28.25,27.92,27.72,28.79,28.22,25.7,22.66,20.07,17.96,17.41,17.62,17.46,17.52,17.6,17.46,17.37,17.29,17.18,17.19,17.17,17.17,17.66,17.6,17.61,17.57,17.56,17.68,17.67,17.72,16.7,15.69,14.96,15.01,15.16,15.44,15.43,15.5,15.48,15.57,15.78,15.6,15.53,13.57,13.04,67.23,67.25,67.85,68.69,69.43,70.18,70.93,71.48,72.52,72.59,72.62,71.95,71.92,71.85,71.53,70.68,70.48,70.92,71.97,72.05,72.42,72.5,72.15,72.2,72.14,72.5,72.74,73.03,73.21,73.52,73.36,72.76,72.39,72.21,73.13,73.03,70.88,69.26,66.67,65.94,65.72,65.58,65.99,66.56,65.62,63.22,60.15,56.86,54.03,52.63,50.28,46.96,45.56,42.8,40.29,39.52,39.66,39.33,38.77,38.34,37.58,36.49,35.63,34.96,34.69,34.66,34.51,33.41,32.09,32,32.04,32.13,31.52,30.93,31.07,30.77,30.95,30.66,30.27,30.38,29.54,29.07,28.82,28.64,28.54,28.58,28.56,28.17,28.14,28.48,28.57,27.73,24.94,21.86,19.14,17.31,17.34,17.3,17.32,17.45,17.4,17.42,17.38,17.3,17.19,17.22,17.36,17.14,17.42,17.38,17.42,17.59,17.73,18.03,17.71,17.51,16.42,15.36,14.96,15,15.32,15.27,15.36,15.51,15.52,15.46,15.55,15.7,15.39,14.15,13.1,67.11,67.09,67.95,68.79,69.51,70.24,70.97,71.36,72.19,72.46,72.62,72.07,71.69,71.79,71.41,71.35,71.52,71.76,71.91,71.83,71.82,72.04,72.23,72.1,72.11,72.24,72.36,72.42,72.65,72.88,72.36,72.07,71.79,71.57,71.1,70.52,69.02,67.72,66.18,65.94,66.06,65.62,67.34,65.42,63.95,61.47,59.04,55.41,52.47,50.32,48.17,46.12,44,41.22,39.27,39.25,39.11,38.85,38.63,38.76,37.85,36.37,35.47,34.96,34.67,34.52,33.32,32.6,32.09,32.03,32.02,31.87,31.28,30.84,30.74,30.69,30.55,30.08,29.97,29.85,29.14,28.9,28.53,28.5,28.31,28.6,28.35,28.11,28.06,28.47,28.1,27.27,24.32,21.25,19.21,17.25,17.32,17.34,17.3,17.35,17.38,17.41,17.3,17.2,17.23,17.33,17.3,17.19,17.14,17.21,17.98,18.07,17.48,17.46,17.26,17.02,16.37,15.32,14.89,14.97,14.98,15.32,15.27,15.5,15.45,15.42,15.65,15.85,15.53,14.37,12.93,67.12,67.15,68.22,69.69,70.47,71.2,71.36,71.61,71.88,72.47,72.49,72.31,71.66,71.49,71.77,71.84,72,71.77,71.8,71.99,71.92,71.9,72.01,72.01,72.21,72.39,72.27,72.43,72.46,72.41,71.93,71.51,71.22,71,70.63,68.86,67.11,66.11,66.16,65.76,65.46,66.22,67.35,64.45,62.61,59.75,56.61,54.09,51.79,49.72,47.3,44.33,42.06,41.15,38.54,38.99,38.73,38.35,38.39,38.33,37.6,36.32,35.31,34.78,34.79,33.58,33.65,32.31,32.18,32.13,31.85,31.28,30.77,30.75,30.58,30.64,30.76,30.84,30.27,29.25,28.7,28.42,28.33,28.42,28.29,28.39,28.46,27.95,27.69,27.32,27.51,26.67,23.17,20.64,18.28,17.26,17.32,17.33,17.28,17.32,17.36,17.35,17.09,17.13,17.19,17.36,17.24,17.1,17.07,17.09,17.94,17.95,16.9,16.93,16.8,16.45,16.06,14.89,14.82,14.81,14.92,15.1,15.26,15.3,15.3,15.36,15.41,15.77,15.79,14.2,13.2,67.14,67.17,68.58,71.06,71.42,71.82,71.75,71.7,71.77,72.25,72.47,72.56,72.29,71.88,71.63,71.56,71.49,72.03,71.72,72.08,71.94,71.99,72.08,71.87,72.18,72.35,72.38,72.46,72.59,72.65,71.67,70.95,70.66,70.43,70.21,67.87,66.08,65.98,65.86,65.81,65.57,65.66,66.66,62.71,60.62,57.52,55.04,52.95,50.94,48.32,44.95,42.97,40.5,38.33,37.31,37.28,37.42,37.89,37.77,37.66,36.49,35.68,35.08,34.66,34.29,33.12,32.46,32.13,32.13,31.99,31.59,31.46,30.77,30.67,30.5,30.61,30.87,30.8,30.77,29.7,28.62,28.34,28.28,28.38,28.29,28.19,28.19,28.28,27.97,26.92,27.08,25.73,22.31,19.74,17.78,17.23,17.36,17.32,17.3,17.26,17.32,17.33,16.91,16.94,17.01,17.16,16.96,16.88,17.1,17.1,17.22,17.51,17.75,17.39,17.17,16.65,15.71,14.79,14.8,14.86,15.09,15.34,15.05,15.09,15.13,15.28,15.71,16.81,15.81,14.22,12.7,66.46,66.35,67.85,69.76,70.87,70.74,70.34,71.12,71.62,71.95,72.01,72.68,72.16,72.15,71.82,71.56,71.34,71.62,71.65,71.86,71.71,71.97,71.89,72.13,72.31,72.37,72.47,72.38,72.27,72.09,71.33,70.53,70.11,69.89,69.5,67.35,66.16,66.04,65.9,65.82,65.75,67,64.12,61.54,59.06,56.75,53.79,50.76,49.16,46.55,44.62,40.98,39.21,37.31,37.32,37.68,36.87,36.16,36.25,36.72,35.98,35.42,34.69,34.62,34.04,33.23,32.41,32.08,31.82,31.58,31.43,31.39,30.89,30.73,30.63,30.59,30.91,30.9,30.48,29.48,28.55,28.35,28.32,28.39,28.22,28.03,28.15,28.39,28.26,27.56,27.12,24.71,21.67,18.76,17.1,17.19,17.31,17.15,17.04,16.9,17.01,16.78,16.48,16.68,16.69,16.98,16.61,16.49,17.17,17.23,17.04,16.86,17.25,17.49,17.57,16.52,15.21,14.79,14.72,14.9,15.15,15.38,15.32,15.06,15.33,15.5,15.66,15.84,16.32,14.64,12.71,66.1,66.01,66.95,68.62,68.67,68.72,68.12,69.85,71.79,69,70.88,70.97,71.15,70.78,71.09,71.03,71.18,71.29,71.22,71.44,70.94,70.91,71.29,71.01,71.57,71.78,71.92,71.72,71.47,70.79,70.26,69.91,69.66,69.42,69.42,67.13,66.13,66.05,65.95,65.82,65.81,65.81,65.05,61.02,58.59,55.89,52.73,49.55,47.39,45.07,43.37,39.41,37.92,37.27,37.54,37.04,35.77,35.39,34.78,34.98,35.15,34.57,34.37,34.44,33.52,33.3,32.47,32.06,31.75,31.45,31.34,31.41,30.96,30.83,30.6,30.53,30.9,30.55,30,29.23,28.51,28.29,28.25,28.13,28.06,27.96,28.12,28.42,28.39,27.85,27.5,24.28,20.67,18.27,17.16,17.16,17.25,17.53,17.31,16.91,16.73,16.64,16.56,16.48,16.41,16.32,16.25,16.14,15.98,15.83,15.69,15.5,15.35,15.19,15.01,14.85,14.77,14.74,14.69,14.92,15.7,14.94,14.92,15.21,15.4,15.58,15.56,15.53,15.45,15.21,13.52,65.52,66.43,66.66,66.89,67.11,67.27,67.5,67.2,71.43,66.49,67.59,68.01,68.68,68.68,68.72,69.33,68.82,68.94,69.16,68.76,68.99,68.95,70.38,70.8,70.87,71.57,71.12,70.71,70.32,68.91,68.37,69.02,69.13,69.02,68.86,66.84,66.13,66.04,65.93,65.84,65.92,65.77,65.59,61.09,58.29,55.95,52.65,49.78,46.88,43.88,40.67,38.87,37.56,36.98,36.67,36.03,34.92,34.8,34.74,34.57,34.55,34.33,34.11,33.89,33.34,32.8,32.35,32.01,31.73,31.42,31.31,31.43,31.06,30.6,30.44,30.4,30.37,30.09,29.45,28.73,28.23,28.08,28.14,28.1,28.05,28.1,28.19,28.38,28.76,26.7,25.54,23.59,19.88,17.51,16.9,17.16,16.98,17.01,16.94,16.81,16.74,16.64,16.59,16.5,16.41,16.35,16.25,16.13,16.02,15.88,15.64,15.52,15.34,15.21,15.07,14.96,14.81,14.76,14.69,14.8,14.97,15.13,15.01,15.08,15.22,15.82,15.67,15.59,15.44,15.17,12.47,65.76,66.47,66.65,66.83,67.1,67.25,67.4,67.15,70.42,66.49,67.06,67.98,68.16,68.49,68.59,68.66,68.44,68.3,68.24,68.01,68.19,67.99,70.2,70.73,70.77,70.46,69.53,68.03,67.38,67.06,67.11,68.4,68.74,68.66,68.47,66.74,66.11,66.02,65.93,65.85,65.93,65.87,64.87,62.31,58.38,55.37,53.41,50.86,46.19,42.88,40.17,38.4,37.69,36.72,36.24,35.44,35.1,34.79,34.65,34.42,34.14,33.91,34.03,33.65,33.15,32.58,32.18,31.98,31.9,31.63,31.36,31.65,30.92,30.52,30.38,30.36,30.81,30.74,29.23,28.29,28.01,27.98,28.26,28.49,28.28,28.24,28.24,28.07,27.34,26.92,25.4,22.89,19.08,17.72,17.25,17.12,17.05,16.93,16.93,16.95,16.73,16.53,16.46,16.56,16.49,16.46,16.32,16.21,16.09,16.17,16.12,16.01,15.48,15.05,14.93,14.97,14.89,14.67,14.6,14.8,15,14.78,14.87,14.99,15.16,15.39,15.84,15.91,15.46,15.21,12.39,66.51,66.44,66.62,66.82,67.04,67.14,67.17,67.35,69,66.51,67.27,67.66,67.89,68.22,68.33,68.24,68.08,67.66,67.46,67.23,67.25,67.34,69.45,69.42,68.46,67.78,66.7,66,65.06,66.57,67.38,68.17,68.37,68.35,68.18,66.71,66.16,66.02,65.94,65.85,65.88,65.82,66,62.12,59.36,56.08,52.57,50.37,46.09,43.19,40.82,38.93,37.87,36.78,36.17,36.08,35.45,35.24,34.64,34.17,33.88,33.86,33.8,33.57,32.95,31.95,32.08,32.16,32.12,32,31.28,31.66,31.2,30.6,30.26,30.41,30.77,30.34,28.85,28,27.9,27.8,28.22,28.47,28.33,28.32,27.95,27.63,27.13,26.77,25.32,21.34,18.4,16.48,16.72,17.12,17,16.98,16.85,16.65,16.55,16.74,16.62,16.73,16.95,17.03,16.33,16.25,16.28,16.59,16.64,16.51,15.22,14.78,14.82,14.87,14.77,14.58,14.57,14.67,14.87,14.69,14.84,14.93,15.12,15.42,15.75,15.85,15.47,15.25,12.37,66.5,66.4,66.36,66.78,66.94,66.98,66.99,67.01,67.59,66.52,67.18,67.31,67.41,67.52,68.02,67.58,67.52,67.26,67.01,66.61,66.3,66.72,67.46,66.87,66.25,65.64,64.97,64.64,66.39,68.39,68.4,67.82,68.1,68.07,67.95,67.72,65.99,66.04,65.94,65.89,65.83,65.88,65.98,63.31,59.94,57.19,54.86,49.98,46.94,43.94,41.93,39.51,38.4,37.21,36.13,36.26,35.81,35.02,34.32,33.71,33.61,33.65,33.46,33.41,32.58,30.97,31.93,31.88,31.85,31.8,30.89,31.93,31.85,30.69,30.12,30.42,30.6,29.66,28.68,27.96,27.81,27.71,28.09,28.35,28.35,28.36,28.34,27.28,26.7,26.12,23.64,20.66,17.57,16.25,16.53,16.62,16.94,16.86,16.76,16.56,16.55,16.82,17.1,17.45,17.56,17.59,16.41,16.47,16.58,16.69,16.63,16.64,15.1,14.78,14.79,14.76,14.62,14.48,14.52,14.8,15.04,14.96,14.97,14.96,15.26,15.38,15.45,15.45,15.38,15.29,12.34,66.44,66.23,66.11,66.41,66.72,66.8,66.75,66.75,66.99,66.52,66.85,66.96,67.12,67.06,67.18,67.2,67.03,66.73,66.63,66.36,66.31,66.28,65.99,65.07,64.65,64.22,64.59,64.22,66.1,68.08,67.42,67.77,67.84,67.84,67.69,67.52,66.79,66.09,65.98,65.94,65.84,65.89,66.12,65.52,61.47,58.13,54.77,50.74,47.27,44.97,43.2,40.29,38.42,37.49,36.35,36.19,36.46,35.25,33.99,33.46,33.43,33.52,33.4,33.57,33.44,30.88,31.29,31.32,31.36,31.4,30.74,30.98,30.45,30.08,29.92,30.05,29.52,28.96,28.78,28.03,27.65,27.64,27.9,28.28,28.24,28.13,28.08,27.91,26.73,24.72,22.3,20.12,16.99,16.17,16.8,16.5,16.96,16.73,16.89,16.54,16.55,16.89,17.41,17.59,17.71,17.78,16.45,16.56,16.52,17.12,16.54,15.41,15.06,14.87,14.94,14.76,14.61,14.42,14.47,14.75,14.91,15.01,15.17,15.26,15.47,15.38,15.41,15.36,15.46,14.21,12.37,66.18,66.01,65.83,66.46,66.52,66.65,66.57,66.55,66.93,66.47,66.62,66.71,66.71,66.84,66.68,66.6,66.49,66.38,66.28,66.16,66.11,65.98,65.22,64.15,63.5,63.02,63.14,64.04,65.3,66.56,66.9,67.99,67.61,67.6,67.51,67.43,67.37,66.06,66,65.93,65.85,65.99,65.88,64.12,61.7,58.73,56.46,52.28,48.78,45.86,43.76,41.6,39.32,37.8,36.32,36.19,35.85,34.81,33.8,33.29,33.25,33.39,33.27,33.07,32.05,30.78,31.02,30.77,30.85,31.16,30.56,30.42,30.1,29.83,29.7,29.97,30.18,29.25,28.97,28.11,27.56,27.55,27.74,27.83,27.69,27.79,27.74,27.95,26.13,23.89,22.45,19.11,16.45,16.2,16.46,16.37,16.58,16.44,16.51,16.66,16.53,16.83,17.77,18.2,17.92,17.58,16.56,16.27,16.17,17.13,16.43,14.5,14.87,14.87,14.83,14.71,14.56,14.38,14.45,14.54,14.79,14.74,14.9,15.02,15.2,15.27,15.13,15.24,15.28,14.75,12.34,65.43,65.77,65.61,66.38,66.49,66.53,66.43,66.32,66.31,66.46,66.45,66.44,66.21,66.15,66.11,66.35,66.28,66.19,66.09,65.96,65.8,65.33,64.25,63.11,62.75,62.65,62.7,63.4,63,63.84,66.3,67.43,67.39,67.37,67.3,67.23,67.2,65.96,65.99,65.92,65.83,65.69,65.79,65.52,62.44,60.32,56.92,53.95,51.02,48.13,45.24,42.99,40.71,38.77,37.34,35.79,35.12,34.35,33.55,33.01,33.05,32.89,32.6,32.13,31.5,30.94,30.59,30.47,30.37,30.18,30.09,29.87,29.67,29.6,29.53,29.93,29.96,29.79,29.24,28.19,27.5,27.42,27.36,27.61,27.6,27.52,27.76,28.04,26.46,24.23,21.6,18.49,16.43,16.32,16.3,16.28,15.89,16.3,17.19,16.93,16.55,16.62,17.15,17.32,17.3,16.65,16.58,15.97,15.97,17.16,15.63,14.48,14.99,14.92,14.81,14.71,14.48,14.35,14.37,14.56,14.7,14.72,15.12,15.13,15.28,15.46,15.24,15,15.09,12.95,12.38,65.17,65.27,65.32,66.49,66.66,66.63,65.88,65.99,66.1,66.17,66.3,66.22,66.16,66.1,66.04,66,65.93,65.98,65.77,65.64,64.56,63.32,62.66,62.53,62.44,62.38,62.48,62.66,62.58,62.65,63.72,66.61,67.15,67.15,67.12,67.04,67.05,65.75,65.95,65.89,65.82,65.71,65.81,65.5,62.83,61.36,58.8,55.78,52.86,50.35,47.04,44.1,41.48,39.28,37.64,36.25,35.02,34.11,33.22,32.67,32.85,31.99,31.28,30.76,30.78,30.51,30.2,30.12,30.18,29.95,29.5,29.41,29.43,29.34,29.44,29.98,30.08,30.03,29.22,28.15,27.52,27.35,27.23,27.22,27.32,27.44,27.8,27.93,27.04,24.33,21.89,18.61,16.53,15.86,15.86,15.5,15.67,16.32,17.02,16.85,16.48,16.31,16.28,16.34,16.76,16.57,16.49,16.46,16.47,16.75,14.44,14.47,14.81,15.16,15.1,14.72,14.52,14.33,14.32,14.5,15,14.74,14.95,15.1,15.17,15.32,15.16,15.04,13.85,12.5,12.3,64.82,64.94,65.06,65.23,65.38,65.48,65.57,65.46,65.19,65.63,66.34,66.16,66.13,66.09,66.03,65.98,65.85,65.68,65.1,64.02,62.83,62.52,62.4,62.26,62.14,62.1,62.26,62.45,62.72,63,63.39,66.35,66.95,66.92,66.94,66.9,66.92,65.64,65.87,65.84,65.78,65.63,65.71,65.5,64.82,62.27,59.39,57.54,54.37,51.82,48.17,45.2,42.62,39.94,37.93,36.19,35.14,34.14,32.65,32.29,32.23,30.87,30.8,30.63,30.52,30.23,30.02,29.98,30.18,30.47,30.66,29.4,29.4,29.26,29.25,29.76,29.9,29.4,29,28.06,27.54,27.41,27.37,27.18,27.29,27.44,27.77,27.26,26.85,24.1,21.64,18.13,16.5,15.47,15.45,15.68,15.82,16.18,16.8,16.76,15.82,16.12,15.82,16.4,16.89,16.45,16.48,16.34,16.44,16.62,14.41,14.39,14.72,14.31,13.92,14.64,14.5,14.24,14.3,14.64,14.93,15.02,14.93,15.06,15.13,15.17,15.09,15.02,13.34,12.22,12.22,64.35,64.49,64.79,64.95,65.05,65.13,65.09,65.01,65,65.48,65.93,65.97,66,66.04,65.97,65.91,65.52,64.59,63.48,62.59,62.37,62.29,62.15,62.03,61.89,61.88,62.05,62.26,62.42,62.74,63.76,65.72,66.74,66.74,66.76,66.74,66.77,65.57,65.81,65.79,65.72,65.76,65.6,65.48,65.68,64.19,61.43,58.41,55.23,52.29,49.24,46.71,43.52,40.52,37.96,36.32,34.95,33.78,32.13,31.88,31.54,30.89,30.65,30.49,30.29,30.12,29.99,29.88,30.18,30.47,30.7,29.51,29.33,29.2,29.2,29.32,29.28,29.18,28.63,27.96,27.58,27.46,27.52,27.39,27.48,27.66,27.9,28.27,27.54,24.71,20.87,18.37,16.12,15.34,15.43,15.65,15.85,16.05,16.08,16.15,16.28,15.95,15.96,16.27,16.29,16.22,16.33,16.24,16.3,15.86,14.42,14.35,14.67,14.71,14.66,14.66,14.46,14.21,14.25,14.52,14.65,14.77,14.87,14.98,15.06,15.06,15,15,13.38,12.34,12.21,64.11,64.28,64.39,64.67,64.77,64.76,64.85,64.81,64.83,64.87,65.1,65.88,65.97,65.89,65.86,65.33,64.46,62.93,62.34,62.27,62.16,62.05,61.96,61.86,61.74,61.82,61.99,62.16,62.31,62.42,62.92,65.4,66.56,66.57,66.59,66.44,66.7,66.8,65.76,65.7,65.64,65.51,65.54,65.58,65.34,65.17,60.9,59.23,56.18,53.01,50.16,47.72,44.88,41.44,38.48,36.35,34.72,34.04,32.09,31.61,31.19,30.75,30.58,30.51,30.26,29.99,30.06,29.94,30.43,30.71,30.7,29.52,29.27,29.21,29.28,29.37,29.02,28.79,28.39,27.87,27.84,27.48,27.51,27.74,27.79,27.99,28.26,27.97,26.72,23.34,19.67,18.08,15.66,15.29,15.09,15.48,15.76,15.9,15.95,16.05,16.18,15.88,15.9,16.01,16.14,16.31,16.25,15.92,15.26,14.63,14.44,14.59,14.62,14.59,14.64,14.56,14.4,14.25,14.19,14.81,14.91,14.79,14.81,14.81,14.84,14.8,14.9,14.88,13.05,12.49,12.05,63.94,64.07,64.25,64.39,64.99,64.68,64.66,64.69,64.68,64.7,64.91,65.16,65.86,65.56,64.65,63.89,62.67,62.23,62.14,62.03,61.97,61.87,61.77,61.71,61.8,61.88,61.96,62.1,62.21,62.31,62.48,65.13,66.31,66.42,66.39,66.26,66.39,66.14,65.81,65.58,65.53,65.44,65.43,65.76,65.7,63.27,60.83,59.59,56.44,53.35,50.63,47.45,45.18,41.96,39.28,36.83,35.36,32.88,31.76,31.35,30.81,30.66,30.64,30.63,30.15,30.36,30.04,29.78,29.91,29.81,29.57,29.4,29.17,29.03,29.17,29.24,28.22,28.04,28.01,27.95,27.75,27.56,27.23,28.02,27.84,28.22,27.71,25.15,24.14,21.45,19.19,16.73,15.63,15.59,15.03,15.72,15.69,15.71,15.78,15.81,16.01,15.86,15.9,16.02,16.4,15.9,16.03,15.36,14.4,14.08,14.32,14.72,14.74,14.84,14.48,14.46,14.33,14.19,14.14,14.6,14.82,14.58,14.69,14.67,14.75,14.86,14.82,14.04,12.51,12.13,11.92,63.73,63.94,64.11,64.25,64.47,64.41,64.48,64.53,64.54,64.59,64.6,64.55,64.76,64.2,64.15,62.32,62.12,61.99,61.92,61.85,61.76,61.68,61.68,61.78,61.86,61.94,61.99,62.06,62.13,62.17,62.35,64.84,66.01,66.19,66.15,66.22,66.25,65.5,65.84,65.44,65.41,65.63,65.42,65.37,63.22,60.57,59.32,57.46,55,52.28,49.69,46.99,44.4,41.71,39.06,36.67,34.55,32.65,31.14,30.65,30.49,30.4,30.37,30.36,29.5,29.73,29.65,28.88,29.4,29.21,29.11,29,28.89,28.82,29.07,29.5,27.44,27.89,27.78,27.83,27.43,27.62,27.25,28.14,27.95,27.65,26.5,23.87,21.61,20.25,17.38,15.19,15.2,15.18,14.76,15.78,15.66,15.73,15.73,15.78,15.85,15.92,15.89,15.88,15.93,15.67,15.42,14.83,14.15,14.02,14.41,14.86,15.01,14.75,14.5,14.54,14.43,14.14,14.1,14.72,15.07,14.48,14.55,14.58,14.8,14.89,14.85,14.01,12.4,11.86,11.82,63.65,63.87,64.03,64.28,64.35,64.24,63.87,63.76,64.03,64.33,64.43,64.22,64.01,62.99,62.12,62.02,61.92,61.8,61.73,61.63,61.55,61.61,61.72,61.8,61.9,61.94,61.98,61.97,62.03,62.09,62.25,64.2,65.83,65.91,65.91,65.91,66.27,67.01,65.37,65.3,65.26,65.54,65.43,63.14,60.37,58.36,56.45,55.01,53.02,50.38,47.93,45.19,43.12,40.17,37.49,35.5,33.36,32.2,30.36,30.23,30.2,30.18,30.1,30.09,29.27,29.23,29.32,28.97,28.9,28.69,28.53,28.5,28.63,29.13,29.22,29.49,27.4,27.72,27.57,27.66,27.43,27.55,27.49,27.47,27.75,26.43,22.92,22.09,20.51,17.38,15.47,14.89,14.77,14.53,15.42,15.52,15.62,15.66,15.8,15.85,15.73,15.75,15.88,15.83,15.76,15.45,15.02,14.39,14.16,14.32,14.46,14.89,14.97,14.94,14.44,14.46,14.22,14.08,14.01,14.82,14.86,14.44,14.5,14.45,14.52,14.91,14.81,13.52,12.56,11.82,11.81,63.99,64.13,64.19,64.44,64.33,64.05,63.62,63.34,63.03,63.51,64.04,63.38,62.67,62.03,61.94,61.81,61.69,61.58,61.5,61.38,61.51,61.65,61.74,61.84,61.93,61.94,61.93,61.92,61.92,61.94,62.12,63.83,65.59,65.63,65.62,65.69,66.5,66.19,65.19,65.15,65.12,65.21,66.33,63.29,58.9,56.18,53.71,52.12,50.39,48.34,46.12,43.8,40.89,38.45,36.22,34.1,32.43,30.96,29.86,29.65,29.7,29.55,29.94,29.84,29.12,29.08,28.96,28.63,28.68,28.92,28.52,28.6,28.61,29.2,29.57,28.53,27.79,27.33,27.34,27.35,27.57,27.57,26.38,26.34,26.55,26.11,23.66,21.63,19.06,15.79,15,14.49,14.44,14.04,15.13,15.53,15.65,15.79,16.15,16.32,15.89,16.16,15.8,15.68,15.49,14.93,14.18,14.16,14.15,14.13,14.3,14.49,14.99,14.64,14.56,14.33,14.15,14.05,13.98,14.64,14.54,14.55,14.52,14.52,14.54,14.42,14.29,13.22,12,11.71,11.71,63.5,63.85,63.72,63.13,62.96,62.72,63.29,63.01,62.78,62.48,62.26,62.17,62.05,61.8,61.72,61.62,61.49,61.37,61.21,61.37,61.5,61.63,61.77,61.84,61.86,61.85,61.86,61.84,61.86,61.86,62.07,63.75,65.3,65.36,65.38,65.52,66.63,65.32,65.06,64.99,64.9,65.17,64.36,61.8,57.94,55.02,52.03,49.84,48.24,45.89,44.2,41.23,39.1,37.23,34.88,32.96,31.6,30.32,29.37,29.17,29.24,29.04,28.86,28.83,28.65,28.83,28.7,28.17,27.48,28.94,28.77,28.89,28.2,28.15,28.15,27.38,27.3,27.05,27.16,27.28,27.48,27.56,26.77,26.72,26.74,24.33,22.79,20.12,16.77,15.82,14.81,14.45,14.33,14.97,15.16,15.37,15.65,15.73,15.92,16.04,15.79,15.82,15.58,15.26,15.27,14.62,14.17,14.14,14.2,14.16,14.04,14.17,14.6,14.53,14.43,14.29,14.08,14.04,14.05,14.25,14.34,14.68,14.83,14.52,14.83,14.56,14.11,12.6,11.75,11.66,11.63,62.85,63.26,63.14,62.66,61.76,60.39,61.23,62.84,62.65,62.24,62.09,61.81,61.73,61.61,61.54,61.42,61.27,61.15,61.25,61.37,61.48,61.61,61.72,61.83,61.77,61.78,61.78,61.77,61.81,61.83,61.98,63.56,64.99,65.11,65.13,65.36,66.41,64.96,64.91,64.83,64.91,65.25,63.16,59.47,56.62,54.1,51.01,48.11,46.09,44,41.98,39.42,36.68,34.63,33.97,31.56,30.82,29.29,29.06,28.7,28.55,28.3,28.14,28.17,28.36,28.84,28.82,27.77,27.2,28.14,28.96,28.01,27.44,27.36,26.86,26.73,26.84,26.95,27,27.12,27.33,27.26,26.48,25.9,25.12,22.63,20.2,18.37,15.52,14.39,14.24,14.09,14.76,14.77,15.16,15.14,15.55,15.58,15.78,15.88,15.92,15.36,15.1,14.9,15.08,14.55,14.11,14.17,14.28,14.37,14.08,14.02,14.01,14.82,14.51,14.07,13.96,13.98,14.13,14.33,14.42,14.88,14.85,15.11,14.6,14.05,12.84,11.87,11.64,11.59,11.6,62.21,62.37,62.45,61.93,61.49,60.4,60.01,61.63,62.3,62.15,61.9,61.7,61.55,61.41,61.46,61.21,61.11,61.13,61.25,61.34,61.49,61.59,61.66,61.67,61.68,61.7,61.69,61.67,61.79,61.81,62.02,63.98,64.69,64.85,64.91,65.15,65.21,64.78,64.76,64.7,64.82,65.06,60.46,58.19,55.03,52.31,49.67,46.95,44.37,42.09,39.4,37.3,35.41,33.08,31.94,31.52,30.04,29.37,29.01,28.39,27.99,27.76,27.63,27.44,27.62,28.67,28.85,27.33,27.28,27.61,27.91,27.53,27.16,26.7,26.68,26.64,26.74,26.89,26.98,27.12,27.04,26.22,26.15,25.21,22.59,20.45,19.09,17.39,14.82,14.22,14.26,14.67,14.84,15.17,15.32,15.28,15.33,15.56,15.6,15.97,15.03,14.87,14.7,14.43,14.5,14.55,14,14.18,14.38,14.48,14.02,13.99,13.95,14.16,14.07,13.88,13.98,14.05,14.29,14.51,14.61,14.74,14.91,15.64,14.6,14.13,12.15,11.58,11.55,11.56,11.64,61.49,61.43,61.34,61.13,60.79,60.29,60.01,61.21,61.51,61.58,61.5,61.45,61.36,61.27,61.03,61.02,60.99,61.1,61.2,61.3,61.42,61.5,61.52,61.54,61.59,61.6,61.63,61.69,61.72,61.77,62.03,63.75,64.32,64.55,64.73,64.86,64.69,64.68,64.63,64.61,64.52,63.75,59.97,56.4,54.07,50.73,48.19,45.35,42.39,40.36,37.98,36.16,34.36,33.48,32.12,32.08,30.51,29.36,29.16,28.19,27.65,27.42,27.21,27.02,27.03,27.22,27.46,27.32,26.79,26.76,26.56,26.37,26.52,26.37,26.47,26.56,26.75,27.08,27.1,27.09,26.98,26.45,26.24,22.95,20.81,20.67,18.4,15.7,14.64,13.9,14.48,14.77,15.16,15.83,15.57,15.4,15.38,15.48,15.43,15.45,14.68,14.63,14.75,14.74,14.47,14.43,14.4,14.18,14.44,14.05,14.02,13.9,13.88,13.92,13.84,13.89,13.92,14.13,14.21,15.09,14.62,14.66,14.69,14.84,14.51,12.65,11.82,11.61,11.46,11.53,11.6,61.01,60.5,60.44,60.39,60.17,60.02,60.01,60.96,61.25,61.28,61.18,61.25,61.2,61.1,61.04,60.91,60.95,61.01,61.1,61.2,61.31,61.37,61.38,61.42,61.45,61.54,61.56,61.61,61.66,61.75,62.17,63.79,63.96,64.18,64.53,64.56,64.59,64.62,64.55,64.73,64.44,63.08,59.32,55.62,52.49,49.46,46.49,43.98,41.25,38.95,37.54,34.98,33.68,32.45,31.85,31.73,30.52,29.45,28.5,28.01,27.34,26.99,26.81,26.4,26.08,26.09,26.94,27.21,26.14,26,26,26,26.11,26.28,26.35,26.53,26.55,26.58,27,26.73,26.47,26.18,24.77,21.71,19.6,18.36,16.69,14.85,13.91,14.11,14.68,14.85,15.66,15.67,15.49,15.44,15.48,15.3,15.18,15.03,14.6,14.63,14.72,14.75,14.34,13.87,13.72,14.07,13.9,13.9,14,13.74,13.76,13.84,13.84,13.87,14.08,14.22,14.22,14.8,14.76,14.7,14.52,14.46,14.59,12.58,11.64,11.5,11.48,11.52,11.5,60.14,60.1,60.04,60.15,60.02,60.04,60.01,60.34,60.66,60.87,61.09,61,61.04,60.99,60.9,60.95,60.82,60.9,60.98,61.09,61.15,61.22,61.26,61.33,61.42,61.48,61.47,61.52,61.59,61.7,62.32,63.2,63.52,63.85,64.24,64.79,64.14,64.4,65.26,64.59,64.22,62.26,59.62,55.67,51.43,48.58,45.71,42.63,40.28,37.82,35.96,34.14,32.74,31.92,31.92,30.6,29.73,24.92,28.41,27.82,27.31,26.78,26.39,26.13,25.9,26.03,26.06,26,25.88,25.96,25.97,26.06,26.16,26.33,26.43,26.75,26.69,25.6,25.92,26.38,26.35,26.04,23.28,20.55,17.92,16.86,15.47,14.65,14.23,14.54,14.69,14.9,15.41,15.7,15.36,15.28,15.14,15.18,14.75,14.62,14.48,14.63,14.65,14.71,14.44,13.76,14.07,13.78,13.76,13.75,13.76,13.72,13.78,13.75,13.84,13.96,14.01,14.07,14.41,14.66,14.81,14.69,14.19,14.18,13.43,12.18,11.42,11.44,11.47,11.41,11.41,60.17,60.11,60.02,60.01,60.06,59.98,60,60.37,60.59,60.96,60.84,60.82,60.82,60.85,60.83,60.82,60.88,60.88,60.9,60.98,61.04,61.1,61.22,61.35,61.38,61.38,61.39,61.39,61.56,61.69,62.65,62.87,63.02,63.56,63.23,63.75,63.91,64.38,64.2,64.65,63.5,61.27,58.75,55.68,51.29,47.79,45.1,41.93,39.69,36.74,35.19,33.3,32.08,31.16,30.16,29.04,28.34,28.47,28.45,28.11,27.48,26.88,26.03,25.73,25.59,25.66,25.66,25.84,25.97,26.11,26.18,26.23,26.4,26.47,26.72,26.92,27.17,26.29,26.01,26.2,25.58,23.96,21.11,20.03,17.07,15.05,14.57,14.6,14.58,14.55,14.81,14.95,15.23,15.28,15.16,15.02,14.94,14.88,14.48,14.58,14.46,14.36,14.5,14.77,14.82,13.63,13.48,13.64,13.68,13.59,13.68,13.71,13.8,13.86,14.02,14.03,14.05,13.94,14.16,14.6,14.71,14.6,14.21,14.12,12.43,11.53,11.37,11.19,11.28,11.37,11.36,60.15,60.03,60,60.07,60.01,59.98,60.13,60.29,60.78,60.66,60.58,60.66,60.71,60.77,60.77,60.78,60.82,60.82,60.9,60.86,60.93,61.02,61.16,61.27,61.28,61.26,61.24,61.35,61.52,61.89,62.26,62.47,62.84,63.28,63.3,63.34,63.51,64.06,64.26,64.44,64.53,60.86,57.52,54.68,50.82,47.38,44.44,41.29,38.48,36.08,34.51,32.58,31.28,30.59,29.4,29.03,28.78,28.47,28.43,28,27.15,27.03,26.08,25.37,25.07,25.27,25.78,26.1,26.12,26.33,26.4,26.45,26.33,26.53,26.95,27.21,27.06,26.6,25.78,25.58,24.2,22.05,19.8,19.3,15.3,14.51,14.47,14.69,14.72,14.68,14.74,14.81,15.06,15.07,14.87,14.71,14.47,14.89,14.24,14.52,14.6,14.31,14.24,14.17,13.78,13.52,13.56,13.64,13.6,13.63,13.59,13.93,13.97,13.99,14.18,13.94,13.91,13.92,14.16,14.47,14.65,14.21,14.15,14.24,11.87,11.42,11.24,11.21,11.5,11.38,11.32,59.89,59.88,59.92,59.93,59.93,59.94,60,60.6,60.49,60.5,60.53,60.6,60.63,60.67,60.68,60.71,60.77,60.81,60.78,60.84,60.86,60.92,61.02,61.1,61.14,61.14,61.23,61.46,61.48,61.77,62,62.23,62.31,62.52,62.94,62.91,63.26,63.57,64.36,64.67,63.9,60.88,57.42,54.27,51.16,47.5,44.12,40.9,38.44,34.88,33.31,31.71,30.56,29.95,29.46,28.57,28.76,28.66,27.73,27.26,27.11,26.66,25.54,25.15,24.67,24.53,25.12,25.54,25.51,26.25,26.19,26.19,26.16,25.39,26.2,27.05,25.37,25.26,26.36,25.12,23.32,20.68,18.48,17.58,15.4,14.29,14.53,14.78,14.69,14.72,14.69,14.88,14.77,14.64,14.48,14.27,14.19,14.23,14.08,14.35,14.18,14.16,14.07,14.01,13.68,13.54,13.48,13.56,13.59,13.61,13.76,13.83,14.11,14.14,14.17,14.16,13.98,13.73,13.84,14.56,14.2,14.19,14.21,12.27,11.57,11.29,11.26,11.26,11.22,11.28,11.4,59.74,59.76,59.82,59.79,59.81,59.83,60.27,60.21,60.27,60.36,60.46,60.55,60.54,60.54,60.56,60.64,60.71,60.84,60.74,60.71,60.74,60.8,60.86,60.96,60.97,61.11,61.2,61.32,61.43,61.62,61.69,61.84,62,62.22,62.48,62.73,62.97,63.43,65.05,64.4,63.57,60.85,57.49,54.22,50.85,47.36,44.1,40.98,37.84,34.5,31.95,30.35,29.8,29.01,28.52,28.23,27.72,27.59,27.42,27.29,27.04,26.97,26.3,25.21,24.27,23.83,24.13,24.44,24.52,25.52,25.9,25.88,25.09,25.03,25.07,24.92,25.23,25.93,24.67,22.88,21.3,19.48,17.15,15.72,14.24,14.5,14.5,14.79,14.69,14.47,14.78,15.14,14.41,13.98,14.01,14.04,14.05,14.04,14.01,14.12,14.04,13.96,13.9,13.89,13.57,13.46,13.52,13.48,13.76,13.67,13.7,13.94,14.13,14.08,14.32,14.73,14.64,13.83,13.8,14.18,14.17,14.12,12.99,11.7,11.2,11.18,11.18,11.18,11.16,11.28,11.4,59.25,59.4,59.2,59.56,59.69,59.95,59.91,59.99,60.09,60.26,60.4,60.44,60.45,60.42,60.51,60.59,60.64,60.66,60.69,60.72,60.66,60.69,60.75,60.81,60.93,61.06,61.12,61.22,61.34,61.37,61.46,61.59,61.75,61.95,62.2,62.52,62.83,63.16,64.68,63.87,62.78,60.54,56.93,53.98,50.49,47.62,44.12,40.88,37.67,34,31.11,29.68,28.98,28.45,28.82,28.04,27.36,27.27,27.13,27.02,26.88,27.52,26.42,25.15,24.6,23.32,22.87,23.11,24.2,25.2,25.24,25.44,24.43,24.94,25.28,24.67,23.91,23.42,22.25,21.51,18.84,17.18,15.33,14.01,13.59,14.5,14.54,14.76,14.33,13.83,13.77,13.73,13.83,13.77,13.84,13.97,13.85,13.91,13.83,13.77,13.76,13.82,13.65,13.38,13.45,13.44,13.45,13.58,13.84,13.98,13.92,14.03,14.1,14.02,14.26,14.81,14.85,14.78,13.74,13.95,14.07,13.44,11.88,11.41,11.14,11.16,11.16,11.13,11.18,11.24,11.45,57.08,57.14,58.06,59.63,59.74,59.63,59.7,59.79,59.97,60.16,60.23,60.26,60.29,60.36,60.47,60.5,60.53,60.56,60.64,60.71,60.71,60.6,60.74,60.9,60.86,61.04,61.03,61.12,61.18,61.2,61.26,61.35,61.47,61.72,62,62.32,62.38,63.97,62.54,62.31,60.86,58.39,56.01,53.04,49.47,46.79,43.5,40.46,37.27,33.69,31.02,28.62,27.91,27.77,27.61,27.86,27.4,27.06,27,26.82,26.3,26.51,25.82,24.72,24.26,23.28,22.23,22.13,22.33,24.07,24.16,24.06,24.14,24.56,24.18,23.3,22.22,21.1,20.9,19.35,16.02,14.82,13.67,13.64,13.56,14.09,14.37,14.38,14.19,13.68,13.61,13.79,13.73,14.05,13.87,13.98,13.86,13.78,13.78,13.7,13.56,13.41,13.37,13.41,13.39,13.55,13.69,13.89,14.03,14.08,14.17,14.16,13.92,13.85,14.12,14.63,14.7,13.89,13.74,13.56,13.72,13.19,11.39,11.1,11.1,11.08,11.17,11.14,11.12,11.17,11.92,55.98,56.25,58.29,59.97,59.45,59.4,59.49,59.65,59.86,59.95,60.02,60.11,60.22,60.33,60.35,60.34,60.35,60.43,60.5,60.58,60.63,60.68,60.62,60.78,60.79,60.91,60.95,61.08,61.05,61.08,61.12,61.2,61.32,61.58,61.82,61.69,62.6,60.95,60.08,59.65,57.84,56.2,53.93,51.33,48.55,45.73,43.18,39.63,36.02,33.17,30.87,28.33,27.84,27.49,26.82,26.35,27.2,26.78,26.49,26.19,26.08,25.92,25.37,24.93,23.72,23.08,21.99,21.48,21.47,22.24,23.86,23.84,23.8,22.64,22.09,21.09,17.54,16.46,15.89,15.65,15.58,13.68,12.9,13.21,13.68,13.85,14.04,14.02,13.64,13.62,13.62,13.84,13.89,13.92,13.96,13.85,13.79,13.71,13.72,13.48,13.51,13.42,13.37,13.41,13.21,13.25,13.99,14.14,14.19,14.24,14.19,14.27,14.24,13.64,14.28,14.8,13.75,13.73,13.66,13.53,13.38,11.53,11.13,11.16,11.04,10.99,11.02,11.04,11.06,11.2,14.21,55.39,58.13,58.88,59.54,59.38,59.25,59.32,59.47,59.59,59.65,59.8,59.97,60.15,60.18,60.12,60.16,60.23,60.32,60.4,60.43,60.55,60.63,60.72,60.76,60.79,60.69,60.95,60.9,60.93,60.98,61,61.13,61.32,61.49,60.9,61,60.56,58.97,57.98,56.78,55.33,53.48,51.49,49.42,46.99,44.67,41.73,38.67,35.66,32.49,30.51,28,27.43,26.77,26.31,26.27,26.19,26.1,26.27,26.15,26.02,25.88,25.49,25.22,24.18,22.34,21.57,21.29,20.93,20.91,22.22,23.58,22.29,20.77,19.1,16.4,16.54,16.56,16.41,14.95,13.42,13.3,13.34,13.44,13.48,13.63,13.89,13.82,13.75,13.68,13.63,13.84,14.08,14.16,13.82,13.84,13.82,13.67,13.42,13.39,13.41,13.26,13.3,13.11,12.95,13.06,13.98,14.2,14.21,14.23,14.38,14.35,14.26,14.12,13.6,14.7,13.86,13.68,13.59,13.52,11.6,11.02,10.95,10.9,11,11.04,11.05,11.06,11,11.49,14.4,56.58,57.74,58.05,58.39,59.43,59.08,59.05,59.2,59.31,59.47,59.62,59.77,59.88,59.89,59.94,60.02,60.13,60.22,60.28,60.39,60.59,60.53,60.66,60.69,60.88,60.7,60.71,60.74,60.79,60.84,60.95,61.09,61.29,60.64,61.23,60.15,58.85,57.62,56.32,55.12,52.68,50.19,49.09,46.25,44.73,42.6,39.78,37.07,34.41,31.46,29.65,27.76,26.6,26.4,26.17,26.14,25.78,25.79,25.98,26.07,25.97,25.5,24.98,24.43,23.7,22.14,21.66,21.26,20.8,20.51,21.22,21.75,19.86,19.13,16.93,16.46,15.82,14.99,15.35,14.29,13.21,13.29,13.39,13.37,13.5,13.57,13.97,13.91,13.71,13.62,13.61,13.81,13.9,13.8,13.65,13.66,13.67,13.17,13.3,13.25,13.26,13.11,12.82,12.81,12.99,13,13.04,14.17,14.23,14.35,14.37,14.42,14.34,14.47,13.73,13.81,13.64,13.55,13.41,12.66,10.88,10.92,10.97,10.92,10.91,10.93,10.99,11.12,11.03,12.77,16.75,54.77,55.38,55.67,56.31,59.33,58.82,58.86,58.95,59.08,59.24,59.38,59.53,59.59,59.69,59.83,59.96,60.07,60.19,60.28,60.4,60.38,60.42,60.51,60.53,60.57,60.57,60.58,60.59,60.64,60.7,60.92,61.06,60.56,60.54,59.93,60.18,57.18,55.71,54.33,53.01,50.43,47.84,46.13,44.99,42.74,40.08,37.51,35.29,33.01,30.93,28.17,26.5,26.45,26.43,26.11,25.8,25.83,25.86,25.83,25.85,25.72,25.34,24.23,23.52,22.72,22.28,21.71,21.08,20.51,20,19.79,19.55,19.64,18.25,16.55,14.06,15.43,13.83,13.5,13.29,13.26,13.35,13.4,13.35,14.09,14.56,14.01,13.98,13.81,13.54,13.6,13.5,13.64,13.41,13.56,13.28,13.16,13.23,13.18,13.15,13.02,13.02,12.94,12.85,13.04,12.87,13,13.41,14.28,14.52,14.52,14.71,14.25,14.44,13.83,13.54,13.52,13.63,12.86,11.06,10.91,10.87,10.81,10.95,10.86,10.93,10.97,11.08,12.07,15.84,16.94,52.52,52.42,54.83,55.81,56.9,58.47,58.65,58.76,58.88,59.01,59.12,59.27,59.44,59.65,59.84,60,60.11,60.17,60.25,60.26,60.31,60.36,60.37,60.37,60.39,60.38,60.4,60.43,60.56,60.71,60.87,60.42,60.3,57.83,58,58.12,55.44,54.07,52.88,50.54,47.01,44.93,43.97,41.67,39.77,37.55,35.34,33.4,31.69,29.76,27.02,26.39,26.36,25.56,25.6,25.78,25.94,25.74,25.63,25.58,25.45,24.95,23.98,23.34,22.97,22.4,21.73,21,20.09,19.57,19.12,19.13,19.14,17.43,15.38,13.62,13.39,13.38,13.13,13.33,13.22,13.42,13.64,13.54,14.34,14.21,14.05,13.83,13.74,13.57,13.41,13.29,13.29,13.29,13.1,13.15,13.14,13.3,13.51,13.13,12.91,13.02,12.82,12.8,13.12,13.24,12.85,12.89,13.61,14.48,14.22,14.68,14.4,14.49,13.98,13.42,13.38,13.04,11.15,10.9,10.95,10.86,10.89,10.86,10.92,10.92,11,12.27,14.2,16.76,16.81,51.93,51.44,53.64,55.12,56.54,58.03,58.72,58.65,58.66,58.86,59.07,59.27,59.47,59.63,59.75,59.87,59.94,60,60.06,60.09,60.12,60.15,60.17,60.19,60.19,60.2,60.23,60.36,60.55,60.68,60.28,60.28,58.13,56.43,55.77,56.28,53.36,52.22,50.38,48.43,45.22,42.43,40.45,39.41,36.77,34.68,33.47,32.41,30.9,27.83,26.25,26.97,25.58,25.6,25.71,25.85,25.77,25.69,25.66,25.38,25.25,24.57,24.04,23.71,23.16,23.95,24.07,23.59,21.6,18.96,18.68,18.42,18.78,14.81,12.97,13.11,13.26,13.27,13.08,13.08,13.18,13.49,13.71,13.7,13.83,13.84,13.5,13.55,13.52,13.44,13.22,13.23,13.14,13.03,13.11,13.08,13.21,13.44,13.24,12.83,13.1,12.99,12.71,12.64,13.14,13.39,13.26,12.85,12.86,13.77,14,14.19,13.92,14.37,13.79,13.44,12.58,11.11,11.05,10.91,10.81,10.85,10.8,10.93,10.91,10.97,12.07,14.2,16.54,16.61,16.71,51.75,51.69,52.95,54.38,55.67,57.37,58.45,58.55,58.66,58.77,58.96,59.11,59.29,59.43,59.55,59.64,59.7,59.77,59.8,59.86,59.9,59.93,59.96,59.96,60,60.04,60.22,60.35,60.43,59.94,60.69,59.78,57.01,54.59,53.91,54.57,51.37,50.1,48.91,46.04,43.02,40.65,37.86,36.18,34.38,33.78,32.72,30.42,28.52,26.88,25.99,27.04,25.87,25.63,25.62,25.73,25.56,25.57,25.46,25.22,24.92,24.62,24.33,24.38,25.27,26.05,26.15,25.54,22.67,19.32,18.08,17.76,17.4,14.03,12.61,12.62,12.69,12.81,13,13.1,13.7,13.74,13.74,13.57,13.55,13.5,13.51,13.63,13.5,13.18,12.96,12.87,12.97,12.98,13.09,13.2,13.38,12.82,12.5,12.44,12.98,12.86,12.77,12.66,13.39,13.41,13.42,13.26,12.9,13.22,13.75,13.86,13.64,13.46,13.39,12.02,11.02,10.91,10.84,10.88,10.87,10.89,10.9,10.93,10.84,11.24,13.62,15.13,16.64,16.62,16.55,50.94,51.43,51.93,53.45,56.18,58.12,58.63,58.54,58.55,58.62,58.69,58.82,59.01,59.15,59.27,59.39,59.45,59.51,59.58,59.62,59.66,59.72,59.76,59.78,59.89,60.06,60.19,59.98,58.64,59.22,59.37,59.51,55.44,52.91,52.55,51.85,49.36,47.92,47.23,44.69,41.83,38.74,37.14,33.74,32.09,32.85,30.38,27.43,26.56,26.1,25.93,27,26.73,25.7,25.64,25.64,25.54,25.46,25.65,25.13,25.02,24.77,24.7,25.03,25.81,26.11,26.08,25.87,22.16,19.69,18.26,17.19,16.84,15.83,12.62,12.36,12.44,12.78,13.01,13.09,13.29,13.55,13.63,13.63,13.41,13.31,13.24,13.31,13.23,12.89,12.8,12.89,12.87,13,13.12,14.12,13,12.48,12.34,12.34,12.42,12.71,12.98,12.66,12.58,13.38,13.29,12.86,12.84,12.97,13.31,13.39,13.68,13.33,11.48,11.03,10.99,10.85,10.83,10.9,10.86,10.87,10.94,10.93,11,12.55,15.2,16.47,16.43,16.49,16.74,51.46,51.08,51.41,52.7,55.14,57.81,58.24,58.48,58.59,58.48,58.42,58.48,58.68,58.86,58.98,59.12,59.19,59.27,59.35,59.4,59.45,59.47,59.55,59.71,59.9,60.02,59.36,58.21,58.12,58.74,58.37,58.66,53.91,51.38,50.39,50.12,47.11,46.26,45.37,42.83,39.42,36.98,34.49,32.08,30.1,28.57,27.34,26.44,26.42,26.01,26.03,26.67,26.15,25.8,25.64,25.59,25.49,25.46,25.29,25.27,25.05,25.19,25.63,25.73,25.84,26.01,25.94,24.84,21.04,18.99,18.93,16.53,16.26,15.92,13.84,12.55,12.65,12.51,12.69,12.64,12.93,13.26,13.55,13.43,13.29,13.09,12.93,12.88,12.64,12.76,12.75,12.94,12.87,12.82,12.63,12.92,12.48,12.46,12.27,12.61,12.58,12.86,12.63,12.65,12.74,12.72,12.8,12.91,12.99,13,12.92,13.38,12.32,11.29,11.27,11,10.85,10.84,10.75,10.88,10.9,10.92,10.88,11.02,12.76,14.26,16.17,16.32,16.43,16.45,16.35,50.68,50.27,51.28,52.07,53.95,57.17,58.9,58.43,58.59,58.42,58.36,58.23,58.37,58.59,58.72,58.88,58.97,59.03,59.09,59.15,59.22,59.39,59.58,59.75,59.8,59.11,57.82,57.22,57.4,58.87,58.49,56.3,52.37,49.22,48.6,48.25,45.51,44.42,43.26,40.47,37.47,34.53,32.25,30.56,28.94,27.5,26.42,26.69,27.58,27.83,25.72,26.08,25.93,25.73,25.61,25.53,25.48,25.38,25.37,25.22,25.43,25.76,25.87,25.78,25.9,25.9,25.88,23.37,20.09,18.35,16.85,15.39,15.74,15.41,15.1,12.45,12.45,12.39,12.52,12.6,12.89,13,13.38,13.48,13.37,13.15,12.56,12.6,12.68,12.66,12.89,12.98,13.48,12.63,12.48,12.32,12.45,12.46,12.46,12.69,12.64,12.7,12.75,12.67,12.84,12.78,12.73,12.84,12.96,12.89,12.86,12.12,11.26,11.07,10.93,10.9,10.81,10.78,10.85,10.94,10.95,10.93,10.87,12.59,14.94,16.12,16.36,16.28,16.31,16.39,16.66,49.54,49.39,50.97,51.15,52.91,54.85,57.44,58.63,58.52,58.63,58.37,58.28,58.22,58.35,58.5,58.65,58.73,58.8,58.79,59.03,59.22,59.43,59.62,59.56,58.58,57.15,56.58,57.13,57.29,58.06,57.23,54.14,50.79,47.13,46.77,45.5,43.04,42.45,41.24,38.36,35.83,32.81,30.82,29.19,27.65,26.51,26.37,26.73,27.45,27.86,26.04,25.74,25.58,25.47,25.38,25.44,25.39,25.35,25.37,25.49,25.86,26.1,26.01,25.88,25.81,26.13,25.29,22.34,18.98,17.8,15.62,13.95,14.75,14.85,14.53,13.41,12.36,12.38,12.33,12.7,12.65,12.73,13.05,13.24,12.81,12.44,12.51,12.56,12.69,12.84,12.93,12.86,12.6,12.32,12.3,12.37,12.3,12.35,12.4,12.45,12.49,12.71,12.87,12.58,12.8,12.67,12.7,12.82,12.48,12.77,11.93,11.27,11.03,10.91,10.8,10.76,10.86,10.85,10.83,10.9,10.91,10.92,11.32,15.74,16.39,16.43,16.14,16.26,16.45,16.66,16.43,48.98,48.93,49.45,49.99,51.73,53.11,55.33,58.23,58.66,58.58,58.54,58.36,58.27,58.18,58.27,58.41,58.5,58.7,58.89,59.07,59.24,59.18,58.65,57.03,56.46,55.89,56.15,56.61,57.57,57.47,55.55,52.71,48.15,45.3,44.9,43.44,41.08,40.44,38.79,36.4,34.15,32.18,30.4,28.79,26.96,26.69,25.96,25.92,26.59,26.6,25.24,25.43,25.33,25.22,25.22,25.32,25.29,25.15,25.43,25.45,25.58,25.88,26.08,26.03,25.77,26.26,24.94,21.24,18.55,16.94,16.08,13.16,13.14,14.06,14.02,13.78,12.27,12.45,12.6,12.55,12.5,12.5,12.49,12.47,12.38,12.43,12.45,12.68,12.77,12.82,12.51,12.43,12.2,12.18,12.24,12.31,12.41,12.49,12.48,12.48,12.56,12.89,12.58,12.53,12.62,12.74,12.77,12.72,12.59,11.6,10.75,10.78,10.89,10.72,10.74,10.84,10.77,10.78,10.8,10.8,10.86,10.94,13.8,16.41,16.31,16.24,16.18,16.15,16.35,16.46,16.33,48.5,48.51,48.8,49.35,51.08,52.26,54.03,56.37,58.44,58.79,58.6,58.54,58.33,58.25,58.15,58.38,58.59,58.79,58.9,59.18,58.63,57.22,56.1,55.2,55.36,55.6,56.53,56.68,57.28,56.54,53.14,50.14,46.79,43.46,43.12,42.05,39.32,38.57,36.71,34.84,32.62,30.63,28.68,27.6,27.77,28.36,25.91,25.64,25.75,25.69,25.4,25.11,25.23,25.17,25.24,25.14,25.28,25.25,25.26,25.32,25.37,25.67,25.95,26.12,25.6,25.87,23.93,20.61,16.9,13.71,13.05,12.94,12.82,12.98,13.41,13.13,12.98,12.25,12.56,12.28,12.4,12.26,12.22,12.29,12.34,12.51,12.46,12.76,12.63,12.5,12.53,12.4,12.19,12.14,12.14,12.44,12.54,12.64,12.88,12.51,12.48,12.51,12.41,12.4,12.55,12.13,12.22,12.62,11.12,10.83,10.69,10.7,10.74,10.72,10.84,10.76,10.74,10.85,10.86,10.9,11.89,13.88,16.19,16.5,16.43,16.04,16.11,16.31,16.28,16.47,16.51,48.26,48.33,48.39,49.26,49.91,51.36,52.09,54.65,56.92,58.4,58.54,58.32,58.47,58.36,58.38,58.52,58.71,59.46,59.64,57.62,55.64,55.2,54.31,54.81,54.95,56.66,56.82,57.19,57.16,55.21,52.04,48.75,45.58,41.78,41.21,39.8,37.82,36.62,35.26,32.65,30.87,28.71,27.47,27.35,27.3,27.53,26.56,25.62,25.59,25.38,25.3,25.06,25.01,25.08,25.06,25.04,25,25.2,25.25,25.34,25.47,25.56,25.74,26.1,25.64,25.6,23.19,19.34,15.46,13.02,12.89,12.78,12.9,12.53,12.85,12.7,12.45,12.16,12.33,12.24,12.12,12.14,12.21,12.22,12.42,12.47,12.7,12.52,12.62,12.94,12.99,12.8,12.39,12.14,12.2,12.35,12.52,12.52,12.74,12.48,12.36,12.48,12.43,12.46,12.6,11.51,11.34,11,10.75,10.66,10.59,10.67,10.68,10.74,10.82,10.83,10.78,10.83,10.77,11.17,14.11,15.81,16.3,16.24,16.03,16.02,16.14,16.18,16.26,16.5,16.51,48.07,48.11,48.22,48.33,48.67,49.56,51.26,53.22,55.43,58.54,58.58,57.45,58.09,58.53,58.42,59.26,58.71,58.16,56.24,54.49,54.35,53.82,54.36,54.57,56.26,57.35,58.21,57.38,55.7,53.8,50.58,46.55,43.16,39.74,39.03,37.88,35.83,34.39,32.48,30.3,28.62,27.45,27.29,27.02,26.44,26.28,25.86,25.29,25.05,25.13,25,24.9,24.95,25,25,24.92,24.96,24.99,25.18,25.29,25.77,25.33,25.59,25.59,25.66,24.63,21.5,18.3,14.59,12.79,12.7,12.83,12.82,12.67,12.35,12.34,12.23,12.17,12.16,12.03,12.09,12.11,12.18,12.46,12.73,12.71,12.69,12.47,12.42,13.69,13.81,12.94,12.29,12.18,12.32,12.3,12.48,12.46,12.45,12.33,12.39,12.48,12.43,12.46,12.48,11.39,10.75,10.64,10.63,10.67,10.64,10.55,10.7,10.79,10.74,10.74,10.87,10.9,11.06,12.95,14.94,15.4,16.09,15.98,15.94,15.96,16.05,16.05,16.18,16.66,16.54,48.1,48.18,48.34,48.57,49.27,49.49,50.81,51.56,54.04,58.19,56.54,56.66,58.48,59.01,59.1,57.58,56.42,54.69,53.34,53.48,54.09,54.28,54.71,57.4,56.56,56.79,57.44,56.64,54.63,52.77,48.8,44.57,40.38,37.44,37.17,35.96,34.2,31.95,30.09,28.98,27.85,27.31,26.72,26.62,26.25,26.07,25.6,25.26,24.83,24.69,24.84,24.84,24.95,25.06,24.95,24.93,25.15,25.05,24.92,25.24,25.87,25.56,25.38,25.39,24.73,22.75,19.44,16.24,13.68,12.63,12.81,12.81,12.82,12.55,12.26,12.2,12.12,12.13,12.09,12.06,12.09,12.34,12.33,12.56,12.48,12.31,12.43,12.55,12.32,12.5,12.86,13.12,12.26,12.4,12.42,12.26,12.4,12.37,12.18,12.34,12.37,12.51,12.47,12.16,11.41,10.51,10.51,10.63,10.64,10.63,10.63,10.61,10.62,10.77,10.75,10.8,10.79,11.08,11.82,14.39,14.51,15.44,15.92,15.79,15.9,16.05,15.95,16.03,16.23,16.24,16.28,47.83,47.83,47.96,48.01,49.43,49.96,50.51,52.2,54.02,54.51,55.01,56.96,57.54,56.9,56.26,54.31,53.68,53.67,53.9,54.01,53.68,54.32,55.4,54.25,53.41,53.7,54.45,54.86,53.3,50.19,46.78,42.94,38.34,35.16,35.38,34.5,32.53,29.84,28.98,27.83,26.87,26.25,26.18,26.09,25.94,25.57,25.07,24.87,24.62,24.78,24.68,24.91,24.82,24.91,24.92,25.18,25.03,25.17,24.98,25.06,25.03,25.05,25.1,22.95,20.73,19.63,16.87,14.46,12.94,12.44,12.75,12.54,12.37,12.28,12.12,12.05,12.07,12.13,12.12,12.12,12.4,12.54,12.37,12.43,12.27,12.19,12.1,12.28,12.55,12.26,12.22,12.53,12.34,12.54,12.45,12.28,12.08,12.04,12.12,12.25,12.35,12.67,11.73,10.47,10.44,10.52,10.51,10.49,10.55,10.53,10.6,10.62,10.65,10.74,10.72,10.77,10.79,11.41,14.7,14.38,14.61,15.48,15.83,15.73,15.79,15.83,15.9,16.08,16.25,16.42,16.25,46.85,46.94,48.33,47.54,48.66,49.37,50.3,51.79,52.36,53.33,55.38,55.92,55.24,54.61,52.83,53.14,53.38,53.64,53.92,53.92,53.99,53.82,52.53,51.46,50.57,50.7,51.72,52.59,51.58,48.27,45.73,41.83,36.71,33.43,33.73,32.72,30.78,29.45,26.71,26.16,25.93,25.76,25.89,25.61,25.25,25,24.66,24.53,24.7,24.84,25.65,25.4,24.79,24.9,24.98,25.33,25.28,24.87,24.85,25.08,25.37,25.3,21.25,18.98,17.75,17.29,15.45,14.35,13.52,12.44,12.24,12.22,12.11,11.99,11.97,11.96,12.04,12.13,12.19,12.32,12.68,12.61,12.44,12.37,12.4,12.24,12,12.34,12.22,12.25,12.19,12.2,12.27,12.57,12.45,12.12,12.06,12.01,12.08,12.21,12.09,10.74,10.38,10.28,10.4,10.45,10.44,10.51,10.5,10.58,10.6,10.62,10.61,10.67,10.69,11.1,11.16,12.7,15.24,14.51,15.16,15.75,15.68,15.7,15.93,15.87,15.96,16.11,16.3,16.51,16.3,47,47.95,46.76,47.83,48.27,48.86,49.8,50.68,51.88,52.26,52.28,51.71,52.34,52.12,52.45,52.95,52.79,53.82,53.77,53.68,53.03,52.03,49.6,48.22,47.62,47.23,49.09,50.1,48.67,45.86,43.95,40.88,35.79,32.02,32.33,31.15,28.82,26.34,26.05,26.01,25.87,25.12,24.64,24.57,24.55,24.47,24.51,24.62,24.88,25.11,25.52,25.32,25.25,24.85,24.95,25.44,24.73,24.75,24.65,24.56,23.54,18.54,16.35,13.79,13.79,13.42,13.49,13.46,13.54,12.67,12.12,12.1,12.01,11.88,11.93,11.93,12.02,12.12,12.3,12.53,12.93,12.82,12.58,12.42,12.36,12.61,13.53,12.89,12.28,12.3,12.34,12.02,12.05,11.96,11.84,12.13,12.18,12.35,12.04,10.86,10.26,10.2,10.21,10.33,10.42,10.36,10.36,10.45,10.44,10.55,10.55,10.61,10.6,10.62,10.63,11.31,12.66,15.81,15.76,14.88,15.1,15.7,15.6,15.62,15.63,15.81,15.99,16.14,16.27,16.44,16.3,46.24,46.65,46.96,48.03,48.67,49.19,50.2,50.05,49.79,50.28,50.81,51.12,51.73,52.35,53.22,52.83,53.84,53.56,53.67,53.7,51.86,49.77,46.56,44.77,44.16,45.24,45.4,47.56,47.18,44.93,42.46,38.6,34.01,30.76,31.34,30.42,27.28,25.87,26.07,25.98,25.65,24.63,24.61,24.58,24.55,24.55,24.51,24.94,24.77,25.02,25.24,25.29,24.9,24.11,23.09,21.93,21.56,22.61,22.55,20.64,18.06,16.58,13.26,12.98,12.8,12.78,13.51,13.34,12.37,12.35,11.9,11.84,11.85,11.92,11.87,11.96,11.96,11.95,12.33,12.67,12.78,13.07,12.19,12.42,13.03,13.47,13.68,13.15,12.56,12.33,12.21,12.07,11.73,11.83,11.93,12.06,12.5,11.7,10.83,10.13,10.13,10.08,10.2,10.3,10.25,10.28,10.38,10.41,10.49,10.52,10.52,10.63,10.7,10.65,12.25,13.83,14.95,15.58,15.22,15.29,15.58,15.55,15.47,15.58,15.47,15.71,15.52,16.09,16.34,16.42,16.26,46.54,46.98,47.67,47.25,48.33,48.49,48.41,48.99,50.22,49.67,51.37,51.53,51.65,51.27,52.28,52.75,54.04,53.82,53.34,52.15,49.17,46.61,44.06,42.18,40.88,41.74,42.82,43.66,44.89,43.1,40.95,36.64,32.27,30.87,30.31,28.08,25.77,26.04,25.86,25.59,25.01,24.53,24.51,24.5,24.49,24.4,23.95,23.72,24.89,24.95,24.02,23.26,23.05,21.55,19,18.01,17.88,17.5,16.57,15.79,14.86,13.85,12.94,12.73,12.67,12.65,12.86,12.42,11.92,11.82,11.76,11.85,11.86,11.89,11.89,11.8,11.83,11.84,11.97,12.77,13.01,13.34,12.73,12.54,12.62,13.51,13.65,13.67,12.4,12.27,12.26,11.93,12,12.28,12.51,12.46,11.04,10.19,9.8,9.93,10.02,10.13,10.15,10.26,10.27,10.32,10.35,10.31,10.44,10.47,10.52,10.65,10.87,11.58,15.49,15.89,15.36,15.42,15.17,15.45,15.45,15.5,15.68,15.5,15.6,15.6,15.67,15.48,15.67,16.14,16.16,47.59,47.38,47.18,46.7,47.2,47.36,48.04,49.89,49.33,51.63,52.08,50.25,49.24,49.09,49.51,50.96,51.8,51.66,52.58,50.28,47.43,44.55,42.26,39.33,38.64,39,40.14,40.54,41.24,40.7,39.63,34.99,30.91,29.34,29.27,26.96,25.85,26.07,25.77,25.47,24.98,25.29,24.39,24.33,24.46,23.17,21.31,21.54,22.15,21.7,20.88,20.14,20.27,19.02,16.15,15.2,14.19,15.54,14.3,14.54,13.67,12.8,12.69,12.43,12.37,12.42,12.46,11.99,11.76,11.77,11.84,11.79,11.81,11.67,11.87,11.79,11.84,11.87,11.84,12.02,13.15,13.32,13.76,12.23,12.39,12.79,13.62,13.63,13.24,12.51,12.2,12.15,12.32,12.34,12.14,10.7,9.83,9.75,9.77,9.9,10.1,10.06,10.11,10.2,10.15,10.22,10.27,10.33,10.46,10.46,10.52,10.81,11.81,14.52,15.83,15.95,15.6,15.43,15.29,15.52,15.45,15.44,15.53,15.47,15.52,15.64,15.65,15.43,15.51,15.49,15.89,47.24,47.1,47.23,46.74,46.33,47,48.02,47.69,49.59,52.22,49.97,47.83,46.01,45.87,46.12,47.01,48.15,48.33,48.31,47.12,45.5,42.45,39.62,36.98,35.86,35.55,36.21,36.58,36.66,37.81,37.16,33.09,29.44,28.28,28.63,25.55,25.66,25.78,25.77,25.29,25.17,25.47,23.86,22.91,22.46,21.41,19.54,18.87,18.64,18.52,18.47,16.46,16.63,15.9,13.66,12.31,12.18,12.02,11.91,12.78,13.03,12.26,12.18,12.31,12.23,12.14,11.97,11.68,11.72,11.74,11.91,12.03,11.84,11.5,11.59,11.61,10.9,11.99,12.09,12.16,13.06,13.51,13.62,13.69,11.99,12.4,13.59,13.48,12.17,12.07,12.11,12.05,12.01,11.83,9.92,9.89,9.87,9.71,9.74,10.02,10.11,10.13,10.1,10.21,10.23,10.29,10.22,10.29,10.34,10.42,10.57,12.64,15.22,15.52,15.61,15.86,15.72,15.22,15.35,15.36,15.39,15.49,15.48,15.6,15.5,15.57,15.67,15.77,15.52,15.54,15.82,46.61,46.64,46.21,46.06,46.5,47.25,46.63,47.26,48.23,49.39,48.12,45.28,42.66,42.1,42.55,43.38,44.02,44.14,44.33,43.24,42.06,39.59,37.21,34.3,32.8,32.44,32.58,32.59,32.71,33.64,34.1,31.78,28.54,26.84,26.16,25.42,25.47,25.41,25.18,24.62,23.39,21.15,20.79,20.39,19.7,18.54,16.71,15.61,16.38,16.37,14.44,13.66,13,12.77,12.23,11.97,11.99,11.91,11.87,11.9,12.06,12.04,12.08,12.13,12.01,11.82,11.7,11.74,11.67,11.73,12.02,11.68,11.65,11.55,11.52,11.66,10.26,11.7,12.18,12.17,11.96,13.63,13.86,14.23,13.05,12.19,12.29,12.07,12.11,12,11.77,11.94,11.04,9.42,9.31,9.5,9.74,9.7,9.78,9.92,10.03,10.06,9.96,9.94,10.14,10.16,10.19,10.3,10.31,11.95,14.7,14.29,14.88,15.05,15.4,15.58,15.89,15.29,15.33,15.36,15.4,15.28,15.56,15.55,15.55,15.55,15.63,15.56,15.51,15.54,15.97,45.75,45.8,45.95,46.88,47.37,46.53,46.74,47.04,48.67,49.64,47.2,43.64,40.63,39.01,39.43,39.97,39.86,39.8,38.05,38,37.6,35.57,34.24,31.88,29.73,29.75,29.77,29.74,29.9,30.46,30.83,29.35,27.49,25.3,24.9,24.49,24.8,24.78,23.98,21.62,19.78,18.71,17.96,17.53,16.93,15.72,14.8,13.49,12.78,13.02,12.11,11.97,12.09,12.09,12.05,11.99,11.92,11.91,11.84,11.8,11.94,12.02,12,11.9,11.76,11.8,11.73,11.76,11.68,11.6,11.6,11.54,11.6,11.51,11.52,11.46,10.91,11.63,11.96,12.15,12.12,12.68,14.04,14.17,14.38,12.23,12.13,11.99,11.97,11.91,11.76,10.05,9.1,9.22,9.33,9.47,9.59,9.76,9.91,9.98,9.95,9.94,9.87,9.92,9.92,10.07,10.2,10.58,12.04,13.66,14.67,14.78,14.82,15,15.12,15.08,15.02,15.26,15.21,15.25,15.26,15.37,15.76,16.13,16.14,15.23,14.97,15.33,15.5,15.88,15.74,45.78,46.01,47.5,47.34,46.91,46.72,46.61,47.06,49.19,49.31,46.13,42.63,39.62,37.06,36.74,36.27,36.31,35.07,32.68,32.95,33.37,31.85,30.14,28.51,27.25,26.85,26.93,27.24,27.57,28.25,28.81,27.05,24.96,23.43,23.7,22.79,22.68,21.34,20.68,17.49,16.29,15.86,15.32,14.86,14.72,13.9,13.02,11.96,11.91,12,12.06,11.97,12.16,12.03,12.1,12.12,12.02,11.84,11.9,11.8,11.85,12.05,11.89,11.8,11.83,11.72,11.78,11.53,11.53,11.58,11.58,11.65,11.68,11.56,11.5,11.58,11.44,11.8,12,11.96,12.27,11.78,13.57,13.89,13.23,13.28,11.86,11.87,11.48,10.64,9.02,8.94,9,9.05,9.33,9.6,9.74,9.82,9.8,9.98,9.84,9.59,9.63,9.62,9.78,9.93,11.39,14.02,14.06,14.28,14.58,14.74,15.01,14.86,15.25,15.58,15.25,15.04,15.16,15.32,15.14,15.41,16.52,17.17,16.17,15.33,15.32,15.54,15.85,15.8,16.57,47.11,47.49,47.23,45.71,45.89,46.64,46.58,48.52,48.25,47.88,45.02,41.78,38.7,35.78,34.15,33.59,32.66,29.84,28.3,28.9,29.22,28.78,28,26.16,25.12,24,23.84,24.61,25.16,25.71,25.86,24.16,23.03,21.47,21.62,21.35,20.7,18.71,17.16,15.16,14.39,13.54,13.2,13.04,12.89,12.47,11.84,11.6,11.78,11.97,12.07,12.08,12.16,12.11,12.17,12.25,12.05,11.81,11.88,11.84,11.82,11.83,11.9,11.82,11.79,11.66,11.38,11.43,11.44,11.54,11.55,11.78,11.56,11.62,11.84,11.72,11.48,11.61,12.18,11.8,12.3,12.13,11.84,12.46,12.73,12.34,11.21,9.71,9.17,8.98,8.89,8.94,8.98,9.15,9.23,9.42,9.52,9.54,9.6,9.61,9.64,9.66,9.63,9.55,9.65,12.84,14.58,14.81,14.52,14.24,14.43,14.88,14.83,14.86,14.97,15.08,15.13,15.08,15.1,15.03,15,15.17,15.38,15.27,15.27,15.4,15.35,15.78,15.65,15.69,15.77,46.55,45.93,45.05,46.02,46.5,47.14,47.84,49.14,47.91,44.71,41.71,40.22,37.61,34.51,31.81,31.01,28.95,27.5,26.3,25.95,25.63,25.67,25.65,23.75,22.67,22.04,21.92,22.08,22.66,23.16,22.67,21.68,21.03,20.16,20.57,19.39,18.47,16.77,16.3,13.65,12.51,11.84,12.02,11.82,11.79,11.41,11.38,11.52,11.63,12.14,12.07,12.13,12.27,12.27,12.22,12.07,11.95,11.88,11.89,11.93,11.92,11.93,11.83,11.84,11.63,11.43,11.33,11.32,11.43,11.62,12.11,11.9,11.53,11.5,11.9,11.94,11.54,11.7,12.27,12.28,11.9,11.89,11.87,11.76,10.46,9.67,8.91,8.88,8.86,8.91,8.88,8.91,9.13,9.14,9.21,9.31,9.52,9.59,9.68,9.79,9.65,9.7,9.66,9.66,12.13,14.54,14.97,14.7,14.8,14.89,14.33,14.59,14.61,14.71,14.93,15.12,14.99,15.04,15.18,15.08,15.12,15.07,15.05,15.08,15.16,15.5,17.36,16.74,14.96,15.99,16.75,45,46.29,45.99,46.19,46.24,46.84,47.53,47.81,44.45,40.55,36.54,35.79,34.73,33.81,30.28,28.33,25.76,24.48,23.65,23.21,22.99,22.64,22.26,21.42,20.77,20.83,21.07,20.41,20.87,21.2,20.47,19.74,19.01,17.77,18.76,17.1,16.19,15.01,14.24,12.98,12.02,11.56,11.54,11.56,11.47,11.26,11.42,11.6,11.67,11.88,11.96,12.13,12.16,12.08,12.01,11.91,11.65,11.89,11.89,11.99,11.91,11.93,11.87,11.85,11.48,11.32,11.37,11.32,11.22,11.45,11.85,12.29,11.84,11.64,11.54,12.03,11.48,11.46,11.74,11.67,11.58,11.77,10.82,9.04,8.93,8.9,8.9,8.88,8.86,8.89,8.91,8.96,9.1,9.19,9.18,9.27,9.48,9.56,9.68,9.95,9.83,9.6,10.13,13,14.31,14.48,14.8,14.92,15.02,14.96,14.51,14.36,14.55,14.5,14.72,14.96,14.99,14.99,14.96,14.74,15.03,14.95,15.05,15.15,15.06,15.58,15.89,15,15.11,15.04,15.33,44.81,45.36,45.67,45.83,46.01,46.26,45.52,43.93,41.32,37.7,34.99,32.24,31.4,31.32,28.4,26.6,23.66,22.47,21.44,20.49,20.88,20.41,19.4,17.76,17.92,17.78,18.82,18.92,19.11,18.83,18.35,17.88,16.98,16.32,17.49,14.85,14.38,14.2,14,12.43,12.03,11.49,11.4,11.46,11.5,11.5,11.59,11.7,11.84,11.94,12.35,12.1,12.11,12.08,11.97,11.89,11.85,11.88,11.94,11.88,11.95,11.94,11.95,11.62,11.51,11.44,11.4,11.38,11.4,11.44,11.5,11.92,12,11.58,11.53,11.44,11.45,11.89,11.68,10.8,10.76,8.76,8.64,8.74,8.9,8.88,8.92,8.84,8.86,8.86,8.95,8.99,9.06,9.1,9.21,9.25,9.39,9.56,9.75,10.29,12,12.5,13.22,13.84,14.07,14.51,14.53,14.59,14.72,14.94,14.9,14.68,14.72,14.71,14.87,14.84,14.86,14.98,14.86,14.89,15,14.97,14.98,16.16,14.99,15.18,15.42,14.99,14.91,14.59,15.37,45.14,45.03,45.41,45.78,45.81,46.57,44.57,41.35,38.38,35.31,32.75,30.88,28.2,27.76,26.28,25.04,22.94,21.96,20.04,18.32,16.12,15.94,15.58,15.45,14.57,14.32,16.14,17.16,15.51,16.4,15.88,16.11,15.77,15.22,14.1,13.82,13.67,13.96,13.13,11.95,11.98,11.47,11.38,11.48,11.57,11.49,11.66,11.87,11.95,11.94,11.93,11.92,11.98,11.94,11.85,11.84,11.88,11.84,11.87,11.84,11.85,11.95,11.74,11.49,11.42,11.34,11.34,11.5,11.52,11.24,11.31,11.51,11.53,11.56,11.48,11.45,11.5,10.62,10.25,8.91,8.6,8.68,8.68,8.77,8.78,8.86,8.92,8.88,8.86,8.88,8.87,8.93,9.2,9.15,9.33,9.38,9.6,10.08,11.72,12.99,13.84,13.64,13.48,13.8,13.89,14.54,14.64,14.66,14.52,14.62,14.73,14.61,14.95,14.86,14.75,14.83,14.9,14.92,15.82,15.5,15.04,15.02,15.01,14.96,14.97,15.46,15.1,14.79,14.46,14.74,14.94,43.99,44.51,44.8,45.09,45.62,44.9,41.96,38.78,36.28,33.41,30.77,29.01,25.6,24.77,24.48,23.41,21.46,19.69,17.1,15.67,15.93,15.27,15.06,12.75,13.11,13.26,14.1,14.15,15.33,13.23,13.19,13.75,14.33,13.67,13.43,13.07,12.55,12.71,12.4,11.93,11.86,12.02,11.47,11.67,11.7,11.73,11.6,11.83,11.88,11.7,11.6,11.81,11.81,11.82,11.82,11.84,11.78,11.72,11.75,11.46,11.21,11.44,11.47,11.36,11.32,11.2,11.27,11.45,11.3,11.16,11.15,11.26,11.5,11.36,11.2,11.1,10.06,8.96,8.44,8.49,8.55,8.58,8.64,8.65,8.75,8.79,8.85,8.84,8.77,8.83,8.88,8.87,9.2,9.49,10.08,10.67,11.42,13.08,13.61,13.8,14.26,13.83,13.57,13.97,14.69,14.71,14.52,14.61,14.56,14.62,14.66,14.6,14.57,14.83,14.75,14.71,14.54,14.57,15.07,15.36,14.88,14.89,14.97,15.13,15.13,15.26,15.22,15.1,14.39,15.05,15.26,43.1,43.33,44.11,43.91,42.29,40.31,38.32,35.87,33.32,30.45,28.94,25.85,24.63,21.74,21.45,20.7,18.83,16.48,15.33,15.09,13.89,13.92,13.31,13.06,13.37,12.61,13.3,13.6,12.25,12.14,12.18,12.1,13.22,12.97,12.83,12.51,12.31,12.18,11.93,12.02,12.04,11.91,11.71,11.63,11.78,11.8,11.74,11.62,11.61,11.67,11.59,11.7,11.74,11.82,11.8,11.84,11.54,11.41,11.23,11.22,11,11.07,11.41,11.29,11.18,11.15,11.14,11.19,11.15,10.92,11.34,11.19,11.35,11.11,10.24,9.29,8.22,8.29,8.39,8.44,8.4,8.59,8.64,8.68,8.76,8.78,8.78,8.81,8.83,8.83,8.89,9.05,10.27,10.51,12.47,13.21,13.65,13.67,13.7,13.73,13.99,13.69,13.88,13.92,14.46,14.71,14.62,14.52,14.55,14.53,14.63,14.6,14.59,14.58,14.68,14.7,14.47,14.57,14.76,14.77,14.88,14.95,14.98,15.03,15.25,14.99,14.59,15.23,15.29,14.97,14.85,42.86,42.86,42.15,40.53,39.07,36.69,34.15,32.03,29.2,27.78,25.24,23.45,22.26,20.49,18.59,18.18,16.88,15.24,14.41,14.04,13.59,13.38,13.14,12.86,12.86,12.59,12.54,12.28,12.01,12.13,12.13,12.04,12.15,12.54,12.48,12.2,12.12,11.98,11.78,11.8,11.94,11.96,11.99,11.71,11.76,11.76,11.61,11.53,11.6,11.62,11.69,11.72,11.76,11.67,11.75,11.76,11.45,11.14,10.89,10.84,10.79,10.91,11.2,11.14,11.1,11.11,11.07,11.24,11.2,10.95,11.13,10.82,10.24,10.05,8.74,8.13,8.07,8.18,8.26,8.38,8.53,8.54,8.63,8.68,8.71,8.82,8.75,8.9,9,8.88,9.86,10.78,12.05,12.86,13.53,13.71,13.71,13.88,13.74,14.29,13.66,13.38,13.56,14.37,14.52,14.49,14.53,14.62,14.49,14.48,14.51,14.54,14.5,14.64,14.6,14.48,14.59,14.56,14.79,14.83,14.87,14.82,14.96,15.24,15.94,14.8,14.74,14.73,15.03,14.79,15.09,42.39,41.1,38.99,37.49,35.89,33.4,31.23,28.22,26.18,24.59,22.9,21.43,21.38,19.97,18.06,17.4,15.85,14.07,13.93,13.23,12.62,13.25,12.98,12.81,12.7,12.63,12.46,12.19,12.03,12.04,12.02,12.01,11.85,12.19,12.22,12.06,11.99,11.96,12.01,11.83,12.06,11.94,12.04,11.9,11.63,11.64,11.53,11.86,11.59,11.62,11.66,11.67,11.77,11.79,11.51,11.11,11.15,10.93,10.91,10.86,10.95,11.05,11.3,11.36,11.14,11.09,11.04,11.04,10.8,10.21,10.06,9.08,8.78,8.15,8.08,8.03,8.04,8.2,8.27,8.4,8.52,8.57,8.6,8.75,8.69,8.81,8.78,8.89,9.28,10.28,11.4,12.88,13.23,13.05,13.55,13.76,14.02,13.9,14.1,15.2,14.41,13.42,13.25,13.52,14.38,14.5,14.66,14.59,14.65,14.53,14.55,14.48,14.49,14.52,14.5,14.58,14.64,14.71,14.71,14.84,14.85,14.85,14.87,14.93,16.12,15.85,14.52,14.71,14.78,14.59,14.65,40.74,37.41,35.48,33.88,31.95,29.74,28.28,26.15,24.28,22.52,20.76,19.66,19.58,19.12,17.04,16.31,15.44,14.02,13.72,12.66,12.33,12.95,12.76,12.7,12.64,12.59,12.41,12.23,12.09,11.99,11.87,11.86,11.91,11.82,12.05,11.92,12.07,12.05,12.07,12.12,12.01,12.04,12.05,11.85,11.57,11.6,11.58,11.59,11.6,11.65,11.63,11.57,11.6,11.43,11.15,11.04,10.94,10.95,10.92,11,11.05,11.2,11.33,11.22,11.2,11.1,10.95,10.64,9.73,9.78,8.14,7.9,8.05,7.91,7.93,7.93,8.03,8.17,8.36,8.41,8.42,8.58,8.66,8.67,8.62,8.82,9.2,9.95,10.72,12.06,12.96,13.66,13.38,13.22,13.4,13.66,13.85,13.69,13.71,14.58,13.98,13.56,13.3,13.3,14.27,14.45,14.55,14.65,14.61,14.58,14.5,14.38,14.49,14.52,14.27,14.28,14.41,14.64,14.64,14.74,14.85,14.84,14.85,14.75,15.54,15.03,15.99,15.4,14.59,14.33,14.75,37.01,34.76,32.54,30.44,28.76,27.14,25.03,23.33,21.42,19.74,18.06,16.64,16.2,16.3,15.04,15.34,14.57,13.96,13.22,12.94,12.37,12.41,12.39,12.5,12.37,12.01,12.15,12.08,12.04,11.95,11.81,11.89,11.75,11.77,11.81,11.93,11.9,12.07,12.03,11.93,11.82,11.93,11.9,11.75,11.66,11.53,11.55,11.63,11.58,11.62,11.64,11.37,11.17,10.81,11.04,10.88,10.99,10.93,11.02,11.02,10.97,11.25,11.24,11.11,10.93,11.05,10.68,9.84,7.95,8.63,7.85,7.94,7.92,7.91,7.9,7.98,8.02,8.24,8.29,8.33,8.37,8.58,8.64,8.78,9.56,9.79,10.45,12.09,13.34,13.85,14.3,14.21,13.29,13.35,13.47,13.94,14.01,13.68,13.72,13.73,14.06,13.85,13.49,13.61,13.9,14.41,14.55,14.5,14.57,14.47,14.37,14.4,14.36,14.45,14.52,14.49,14.54,14.47,14.51,14.8,14.91,14.89,14.77,14.71,14.5,14.38,14.87,14.69,14.61,14.46,14.31,34.58,32.92,29.9,27.7,25.94,23.94,22.18,20.27,18.53,17.02,15.35,13.94,13.81,13.84,13.8,12.43,12.41,12.65,12.53,12.43,12.18,12.05,11.74,11.8,12.05,12.18,12.06,12.04,12.06,11.96,11.98,11.91,11.84,11.71,11.74,11.87,11.83,12.04,11.93,11.83,11.76,11.68,11.55,11.8,11.49,11.56,11.56,11.53,11.51,11.43,11.4,11.04,10.73,10.72,10.87,10.8,10.76,11.01,11.25,11.29,11.17,11.2,11.16,11.09,10.3,10.28,9.1,7.79,7.88,7.86,7.91,7.87,7.81,7.91,7.88,7.91,8.18,8.13,8.29,8.35,8.5,8.6,8.99,9.63,11.08,11.01,12.63,13.02,13.56,14.25,14.2,14.05,13.63,13.41,13.57,13.99,13.89,13.49,13.72,13.94,13.75,13.8,13.36,13.84,14.21,14.41,14.45,14.36,14.41,14.37,14.27,14.34,14.41,14.35,14.45,14.56,14.48,14.48,14.44,14.66,14.72,14.79,14.74,14.64,14.56,14.43,14.44,14.47,14.64,14.6,14.38]"),gt={step:$h,count:Jh,origin:jh,elevations:Qh},Za=gt.step*(gt.count-1),ef=30;function Ut(i,e){const t=Math.max(0,Math.min(gt.count-1,(i-gt.origin)/gt.step)),n=Math.max(0,Math.min(gt.count-1,(e-gt.origin)/gt.step)),r=Math.min(Math.floor(t),gt.count-2),s=Math.min(Math.floor(n),gt.count-2),a=t-r,o=n-s,c=s*gt.count+r,l=gt.elevations[c]*(1-a)+gt.elevations[c+1]*a,d=gt.elevations[c+gt.count]*(1-a)+gt.elevations[c+gt.count+1]*a;return l*(1-o)+d*o-ef}function $a(){const i=Do(10);return{x:i.x,z:i.z,heading:Math.atan2(i.dx,i.dz),speed:0,distance:0,lastPedal:null,steering:0}}function tf(i,e){if(e!=="left"&&e!=="right")throw new Error(`Unknown pedal: ${e}`);return e===i.lastPedal?!1:(i.lastPedal=e,i.speed+=1.1*Math.max(0,1-Math.max(0,i.speed)/7.5),!0)}function nf(i,e,t,n=[],r=Ut){const s=Is(i.x,i.z)<4.8,a=Math.sin(i.heading),o=Math.cos(i.heading),c=r(i.x+a*.5,i.z+o*.5)-r(i.x-a*.5,i.z-o*.5),l=-9.81*c/Math.sqrt(1+c*c);i.speed+=l*t;const d=(e.brake?7:s?.18:.8)*t;i.speed=Math.sign(i.speed)*Math.max(0,Math.abs(i.speed)-d),i.speed*=Math.exp(-(s?.06:.6)*t),i.speed=Math.max(s?-8:-4,Math.min(s?18:5,i.speed));const h=Math.max(-1,Math.min(1,+!!e.left-+!!e.right-(e.steer??0)));i.steering+=(h-i.steering)*(1-Math.exp(-t/.25)),i.heading+=i.steering*Math.min(Math.abs(i.speed)/2,1)*Math.sign(i.speed)*1.15*t;const f=Math.sin(i.heading)*i.speed*t,m=Math.cos(i.heading)*i.speed*t,v=i.x+f,E=i.z+m;return Math.abs(v)>180||Math.abs(E)>220||n.some(p=>Math.hypot(v-p.x,E-p.z)<p.radius)?i.speed=0:(i.x=v,i.z=E,i.distance+=Math.hypot(f,m)),s}function rf(i){let e=193731;const t=()=>(e=e*1664525+1013904223>>>0,e/4294967296);function n(h,f,m){const v=document.createElement("canvas");v.width=v.height=256;const E=v.getContext("2d");if(!E)throw new Error("Canvas 2D is unavailable");h(E);const p=new il(v);return p.colorSpace=bt,p.wrapS=p.wrapT=sr,p.repeat.set(f,m),p.anisotropy=i,p}function r(h,f,m,v,E){for(let p=0;p<f;p++){const u=t()<.5?`rgba(0,0,0,${v})`:`rgba(255,255,255,${E})`;h.fillStyle=u,h.fillRect(t()*256,t()*256,1+t()*m,1+t()*m)}}const s=n(h=>{h.fillStyle="#d5d5d5",h.fillRect(0,0,256,256);for(let f=0;f<1600;f++)h.fillStyle=t()<.5?"rgba(25,35,20,.035)":"rgba(255,255,235,.055)",h.beginPath(),h.ellipse(t()*256,t()*256,2+t()*9,2+t()*5,t()*Math.PI,0,Math.PI*2),h.fill();r(h,18e3,2,.22,.18)},100,100),a=n(h=>{h.fillStyle="#cecece",h.fillRect(0,0,256,256),r(h,22e3,2,.2,.2)},3,3),o=n(h=>{h.fillStyle="#ecece8",h.fillRect(0,0,256,256);for(let f=0;f<256;f+=16)h.fillStyle="rgba(25,25,20,.25)",h.fillRect(0,f,256,2),h.fillStyle="rgba(255,255,255,.55)",h.fillRect(0,f+3,256,1);r(h,2500,1,.05,.06)},1,2),c=n(h=>{h.fillStyle="#c9c9c9",h.fillRect(0,0,256,256);for(let f=0;f<500;f++)h.fillStyle=t()<.5?"rgba(20,20,20,.2)":"rgba(255,255,255,.12)",h.fillRect(t()*256,t()*256,1+t()*3,15+t()*90);r(h,5e3,2,.16,.12)},2,2),l=n(h=>{h.fillStyle="#cccccc",h.fillRect(0,0,256,256),r(h,24e3,5,.25,.25)},3,3),d=n(h=>{h.fillStyle="#bdbdbd",h.fillRect(0,0,256,256),r(h,12e3,2,.2,.15);for(let f=0;f<256;f+=16){h.fillStyle="rgba(0,0,0,.2)",h.fillRect(0,f,256,1);for(let m=f/16%2*16;m<256;m+=32)h.fillRect(m,f,1,8)}},2,2);return{grass:s,asphalt:a,siding:o,bark:c,foliage:l,shingles:d}}function vi(i,e){return!!i.buttons[e]?.pressed}function sf(i,e={}){const t=i.buttons[6]?.value??0,n=i.buttons[7]?.value??0,r=t>=(e.leftTrigger?.3:.55),s=n>=(e.rightTrigger?.3:.55),a=r&&!e.leftTrigger,o=s&&!e.rightTrigger,c=vi(i,3),l=vi(i,9),d=Math.max(-1,Math.min(1,i.axes[0]??0)),h=Math.abs(d)<=.2?0:Math.sign(d)*(Math.abs(d)-.2)/.8;return{leftTrigger:r,rightTrigger:s,camera:c,reset:l,stroke:a===o?null:a?"left":"right",steer:h,left:vi(i,14),right:vi(i,15),brake:vi(i,1),cameraPressed:c&&!e.camera,resetPressed:l&&!e.reset}}const Ja=document.querySelector("#error");function af(){const i=new Kh({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(12178396),i.outputColorSpace=bt,document.querySelector("#game").appendChild(i.domElement);const e=new Q1;e.background=new We(12178396),e.fog=new Ws(12178396,160,370);const t=new Ot(57,window.innerWidth/window.innerHeight,.1,600);e.add(new ol(15005183,4545334,2.2));const n=new ul(16770749,2.5);n.position.set(-80,120,40),e.add(n);const r=rf(Math.min(i.capabilities.getMaxAnisotropy(),4)),s=(F,I=null)=>new rl({color:F,map:I,roughness:.9}),a=s(8689520,r.grass),o=s(7830134,r.asphalt),c=s(10921370);s(7360568);const l=s(7493694,r.bark),d=s(6717052),h=s(5328456,r.shingles),f=s(5131335),m=s(7829106),v=[s(4352585,r.foliage),s(5667920,r.foliage),s(6784599,r.foliage),s(4811336,r.foliage)],E=[s(15000020,r.siding),s(13684418,r.siding),s(14605004,r.siding),s(13092281,r.siding)],p=[],u=(F,I,ie,V)=>new lt(new ui(F,I,ie),V),A=new Pi(Za,Za,260,260);A.rotateX(-Math.PI/2);const T=A.getAttribute("position");for(let F=0;F<T.count;F++)T.setY(F,Ut(T.getX(F),T.getZ(F))-.07);A.computeVertexNormals();const S=new lt(A,a);e.add(S);function C(F,I,ie){const V=new Bt;V.setAttribute("position",new dt(F,3)),V.setAttribute("uv",new dt(I,2)),V.setIndex(ie),V.computeVertexNormals(),e.add(new lt(V,o))}for(let F=1;F<kt.length;F++){const I=kt[F-1],ie=kt[F],V=Math.hypot(ie.x-I.x,ie.z-I.z),se=-(ie.z-I.z)/V,ue=(ie.x-I.x)/V,X=Math.ceil(V/2),Q=[],fe=[],pe=[];for(let ne=0;ne<=X;ne++){for(let _e=-1;_e<=1;_e++){const P=I.x+(ie.x-I.x)*ne/X+se*_e*4.7,ee=I.z+(ie.z-I.z)*ne/X+ue*_e*4.7;Q.push(P,Ut(P,ee)+.1,ee),fe.push((_e+1)/2,ne/X)}if(ne)for(let _e=0;_e<2;_e++){const P=(ne-1)*3+_e,ee=ne*3+_e;pe.push(P,P+1,ee,ee,P+1,ee+1)}}C(Q,fe,pe)}for(const F of kt){const I=[F.x,Ut(F.x,F.z)+.12,F.z],ie=[.5,.5],V=[];for(let se=0;se<=32;se++){const ue=se*Math.PI*2/32,X=F.x+Math.cos(ue)*4.7,Q=F.z+Math.sin(ue)*4.7;I.push(X,Ut(X,Q)+.12,Q),ie.push(.5+Math.cos(ue)/2,.5+Math.sin(ue)/2),se&&V.push(0,se+1,se)}C(I,ie,V)}let R=85491;function b(){return R=R*1664525+1013904223>>>0,R/4294967296}function L(F,I,ie){const V=new xn;function se(W,ae){const Ae=F+W*Math.cos(ie)+ae*Math.sin(ie),Fe=I-W*Math.sin(ie)+ae*Math.cos(ie);return Ut(Ae,Fe)}const ue=[[0,0],[-5.4,-3.7],[-5.4,3.7],[5.4,-3.7],[5.4,3.7]].map(([W,ae])=>se(W,ae)),X=Math.max(...ue);V.position.set(F,X,I),V.rotation.y=ie;const Q=E[Math.floor(b()*E.length)];function fe(W,ae,Ae,Fe,Oe,ft,ot){const Rt=u(W,ae,Ae,Fe);return Rt.position.set(Oe,ft,ot),V.add(Rt),Rt}const pe=Math.max(0,X-Math.min(...ue));fe(10.8,1.8+pe,7.4,m,0,.9-pe/2,0),fe(3.6,1.55,.08,f,-2.7,.8,3.73),fe(3.6,1.55,.08,f,2.7,.8,3.73);for(const W of[-1,1]){const ae=W*2.7,Ae=W*.35,Fe=W===1?4.55:4.1,Oe=1.8+Fe,ft=2.7,ot=1.15;fe(5.4,Fe,7.4,Q,ae,1.8+Fe/2,Ae);const Rt=new Bt;Rt.setAttribute("position",new dt([-ft,0,0,ft,0,0,0,ot,0],3)),Rt.setAttribute("uv",new dt([0,0,1,0,.5,1],2)),Rt.computeVertexNormals();for(const un of[-1,1]){const hn=new lt(Rt,Q);hn.position.set(ae,Oe,Ae+un*3.7),un===-1&&(hn.rotation.y=Math.PI),V.add(hn)}const jt=Math.hypot(ft+.25,ot);for(const un of[-1,1]){const hn=fe(jt,.2,7.9,h,ae+un*1.48,Oe+ot/2,Ae);hn.rotation.z=-un*Math.atan2(ot,ft+.25)}const cn=Ae+3.73;fe(1.45,1.25,.08,f,ae-1.35,3.2,cn),fe(1.23,1.05,.1,d,ae-1.35,3.2,cn+.05),fe(1.35,1.8,.08,f,ae+1.15,3.45,cn),fe(1.13,1.6,.1,d,ae+1.15,3.45,cn+.05),fe(.55,1.7,.6,m,ae-1.6,Oe+.8,Ae-1.9)}const ne=-2.7,_e=4.2;fe(4.5,.2,1.65,f,ne,2.15,_e),fe(4.5,.11,.11,f,ne,3.15,_e+.8);for(let W=0;W<=12;W++)fe(.07,.9,.07,f,ne-2.15+W*4.3/12,2.65,_e+.8);for(const W of[-1,1]){fe(.1,.1,1.65,f,ne+W*2.2,3.15,_e);for(let ae=0;ae<=4;ae++)fe(.07,.9,.07,f,ne+W*2.2,2.65,_e-.75+ae*.375)}const P=[],ee=[],ce=[];for(let W=0;W<=4;W++)for(let ae=0;ae<=4;ae++){const Ae=.7+ae,Fe=3.6+W;if(P.push(Ae,se(Ae,Fe)-X+.03,Fe),ee.push(ae/4,W/4),W&&ae){const Oe=(W-1)*5+ae-1,ft=Oe+1,ot=Oe+5,Rt=ot+1;ce.push(Oe,ot,ft,ft,ot,Rt)}}const ve=new Bt;ve.setAttribute("position",new dt(P,3)),ve.setAttribute("uv",new dt(ee,2)),ve.setIndex(ce),ve.computeVertexNormals(),V.add(new lt(ve,c));const re=new cr(.85,1);for(let W=0;W<5;W++){const ae=new lt(re,v[Math.floor(b()*v.length)]),Ae=-5+b()*2.5,Fe=3.8+b()*2;ae.position.set(Ae,se(Ae,Fe)-X+.5,Fe),ae.scale.set(1+b()*.5,.65+b()*.4,1),V.add(ae)}e.add(V),p.push({x:F,z:I,radius:5.3})}for(let F=21;;F+=19){const I=Do(F);if(!I)break;for(const ie of[-1,1]){const V=-I.dz*ie,se=I.dx*ie,ue=I.x+V*15,X=I.z+se*15;Is(ue,X)<11||p.some(Q=>Math.hypot(ue-Q.x,X-Q.z)<12)||L(ue,X,Math.atan2(-V,-se))}}const M=new On(.23,.4,4,7),x=new qs(2.6,5.2,9),D=new cr(2.8,1);function O(F,I){const ie=.8+b()*.65,V=new xn;V.position.set(F,Ut(F,I),I),V.scale.setScalar(ie);const se=new lt(M,l);se.position.y=2,V.add(se);const ue=b()<.7,X=v[Math.floor(b()*v.length)];if(ue)for(let Q=0;Q<3;Q++){const fe=new lt(x,X);fe.position.y=4.7+Q*1.7,fe.scale.setScalar(1-Q*.17),V.add(fe)}else{const Q=new lt(D,X);Q.position.y=5,V.add(Q)}e.add(V),p.push({x:F,z:I,radius:1})}for(let F=0;F<520;F++){const I=(b()-.5)*320,ie=(b()-.5)*400;Is(I,ie)<8||p.some(V=>Math.hypot(I-V.x,ie-V.z)<V.radius+3.5)||O(I,ie)}const H=new xn;e.add(H);const $=s(15085864),Y=s(16435996),Z=s(556743),te=s(2106147),q=s(8752523),he=s(3357241);function ge(F,I,ie,V,se,ue=!1){const X=new xn;X.position.set(F,I,ie);const Q=new lt(new On(V,V,se,20),te);Q.rotation.z=Math.PI/2,X.add(Q);const fe=new lt(new On(V*.76,V*.76,se+.02,20),he);fe.rotation.z=Math.PI/2,X.add(fe);for(const pe of[-1,1]){if(ue)for(let _e=0;_e<12;_e++){const P=_e*Math.PI/6,ee=u(.015,V*.1,V*.62,q);ee.position.set(pe*(se/2+.02),Math.sin(P)*V*.36,Math.cos(P)*V*.36),ee.rotation.x=-P,X.add(ee)}const ne=new lt(new On(V*.17,V*.17,.05,16),he);if(ne.rotation.z=Math.PI/2,ne.position.x=pe*(se/2+.04),X.add(ne),ue){const _e=u(.06,.07,.38,Y);_e.position.set(pe*(se/2+.1),0,pe*.18),X.add(_e);const P=u(.22,.09,.16,Z);P.position.set(pe*(se/2+.19),0,pe*.34),X.add(P)}}return H.add(X),{mesh:X,radius:V}}const be=[ge(0,.72,1.05,.72,.24,!0),ge(-.55,.29,-.68,.29,.25),ge(.55,.29,-.68,.29,.25)],Ne=u(.74,.24,1.4,$);Ne.position.set(0,.39,-.12),H.add(Ne);const Ye=u(.76,.12,.65,Z);Ye.position.set(0,.58,-.51),H.add(Ye);const Ke=u(.76,.55,.16,Z);Ke.position.set(0,.82,-.84),Ke.rotation.x=-.2,H.add(Ke);const ke=u(.22,1,.22,$);ke.position.set(0,.92,.54),ke.rotation.x=.18,H.add(ke);for(const F of[-1,1]){const I=u(.12,1.03,.16,Y);I.position.set(F*.2,1.1,.8),I.rotation.x=-.57,H.add(I)}const J=u(1.05,.12,.12,Y);J.position.set(0,1.55,.55),H.add(J);const j=new Set,Se=new Set(["KeyA","KeyD","KeyJ","KeyL","ArrowLeft","ArrowRight","Space","KeyC","KeyR"]);let le=$a(),Ee=0,ze=null,Ze={};const w=document.querySelector("#camera"),et=document.querySelector("#pedal-hint"),Le=document.querySelector("#controller-status");function Ce(){et.textContent=le.lastPedal==="left"?"Next: L / RT":le.lastPedal==="right"?"Next: J / LT":"Start with J or L"}function ye(F){tf(le,F)&&Ce()}function $e(){Ee=1-Ee,w.setAttribute("aria-pressed",String(Ee===1))}function Me(){le=$a(),Ce(),t.position.set(le.x,Ut(le.x,le.z)+6,le.z-8)}window.addEventListener("keydown",F=>{Se.has(F.code)&&(F.code==="Space"&&F.target instanceof HTMLButtonElement||(F.preventDefault(),!F.repeat&&F.code==="KeyR"&&Me(),!F.repeat&&F.code==="KeyC"&&$e(),!F.repeat&&!j.has(F.code)&&(F.code==="KeyJ"||F.code==="KeyL")&&ye(F.code==="KeyJ"?"left":"right"),j.add(F.code)))}),window.addEventListener("keyup",F=>j.delete(F.code)),window.addEventListener("blur",()=>j.clear()),document.querySelector("#reset").addEventListener("click",Me),w.addEventListener("click",$e),window.addEventListener("resize",()=>{i.setSize(window.innerWidth,window.innerHeight),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()});const Ue=document.querySelector("#speed"),ut=document.querySelector("#distance"),nt=document.querySelector("#surface"),y=document.querySelector("#map").getContext("2d");function _(){const I=se=>[90+se.x*.53,90+se.z*.53];y.clearRect(0,0,180,180),y.lineWidth=6,y.lineCap="round",y.lineJoin="round",y.strokeStyle="#d4d3b9",y.beginPath(),kt.forEach((se,ue)=>{const[X,Q]=I(se);ue?y.lineTo(X,Q):y.moveTo(X,Q)}),y.stroke();const[ie,V]=I(le);y.fillStyle="#f9c664",y.beginPath(),y.arc(ie,V,5,0,Math.PI*2),y.fill(),y.strokeStyle="#fff6db",y.lineWidth=2,y.beginPath(),y.moveTo(ie,V),y.lineTo(ie+Math.sin(le.heading)*11,V+Math.cos(le.heading)*11),y.stroke()}Me();let B=performance.now();function K(F){const I=Math.min((F-B)/1e3,.05);B=F;const ie=navigator.getGamepads?navigator.getGamepads():[],V=document.hasFocus()?Array.from(ie).find(_e=>_e?.connected&&_e.mapping==="standard"):null;V?(ze!==V.index&&(Ze={}),ze=V.index,Ze=sf(V,Ze),Ze.stroke&&ye(Ze.stroke),Ze.cameraPressed&&$e(),Ze.resetPressed&&Me(),Le.textContent="Controller connected"):(ze=null,Ze={},Le.textContent=navigator.getGamepads?"Controller: press any button to connect":"Controller unavailable in this browser");const se=nf(le,{left:j.has("KeyA")||j.has("ArrowLeft")||Ze.left,right:j.has("KeyD")||j.has("ArrowRight")||Ze.right,steer:Ze.steer,brake:j.has("Space")||Ze.brake},I,p),ue=Ut(le.x,le.z);H.position.set(le.x,ue+.12,le.z);const X=Math.sin(le.heading),Q=Math.cos(le.heading),fe=Ut(le.x+X*.8,le.z+Q*.8)-Ut(le.x-X*.8,le.z-Q*.8);H.rotation.set(0,le.heading,0),H.rotateX(-Math.atan(fe/1.6));for(const _e of be)_e.mesh.rotation.x+=le.speed*I/_e.radius;const pe=Ee===0?new z(le.x-X*7,ue+3.4,le.z-Q*7):new z(le.x-X*.5,Ut(le.x-X*.5,le.z-Q*.5)+2.05,le.z-Q*.5);Ee===0?t.position.lerp(pe,1-Math.exp(-5*I)):t.position.copy(pe);const ne=Ut(le.x+X*5,le.z+Q*5);t.lookAt(le.x+X*5,ne+(Ee===0?1:2.05),le.z+Q*5),Ye.visible=Ke.visible=Ee===0,Ue.textContent=Math.round(Math.abs(le.speed)*3.6),ut.textContent=le.distance<1e3?`${Math.floor(le.distance)} m`:`${(le.distance/1e3).toFixed(2)} km`,nt.textContent=se?"Pavement":"Grass",_(),i.render(e,t),requestAnimationFrame(K)}requestAnimationFrame(K)}try{af()}catch(i){console.error(i),Ja.hidden=!1,Ja.textContent=`Unable to start the game. Your browser may not support WebGL. ${i.message}`}
