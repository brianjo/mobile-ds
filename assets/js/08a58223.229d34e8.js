(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[807],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,h=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return t?n.createElement(h,a(a({ref:r},u),{},{components:t})):n.createElement(h,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4845:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],d={},l="Building PyTorch Android from Source",c={unversionedId:"building/androidbuild",id:"building/androidbuild",isDocsHomePage:!1,title:"Building PyTorch Android from Source",description:"In some cases you might want to use a local build of PyTorch android, for example you may build custom LibTorch binary with another set of operators or to make local changes, or try out the latest PyTorch code.",source:"@site/docs/building/androidbuild.md",sourceDirName:"building",slug:"/building/androidbuild",permalink:"/mobile-ds/docs/building/androidbuild",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/building/androidbuild.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Making a Native Android Application that uses PyTorch prebuilt libraries",permalink:"/mobile-ds/docs/building/android_native_app_with_custom_op"},next:{title:"Build PyTorch iOS Libraries from Source",permalink:"/mobile-ds/docs/building/iosbuild"}},u=[],p={toc:u};function s(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-pytorch-android-from-source"},"Building PyTorch Android from Source"),(0,i.kt)("p",null,"In some cases you might want to use a local build of PyTorch android, for example you may build custom LibTorch binary with another set of operators or to make local changes, or try out the latest PyTorch code."),(0,i.kt)("p",null,"For this you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/build_pytorch_android.sh")," script."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/pytorch/pytorch.git\ncd pytorch\nsh ./scripts/build_pytorch_android.sh\n")),(0,i.kt)("p",null,"The workflow contains several steps:"),(0,i.kt)("p",null,"1","."," Build libtorch for android for all 4 android abis (armeabi-v7a, arm64-v8a, x86, x86_64)"),(0,i.kt)("p",null,"2","."," Create symbolic links to the results of those builds:\n",(0,i.kt)("inlineCode",{parentName:"p"},"android/pytorch_android/src/main/jniLibs/${abi}")," to the directory with output libraries\n",(0,i.kt)("inlineCode",{parentName:"p"},"android/pytorch_android/src/main/cpp/libtorch_include/${abi}")," to the directory with headers. These directories are used to build ",(0,i.kt)("inlineCode",{parentName:"p"},"libpytorch_jni.so")," library, as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"pytorch_android-release.aar")," bundle, that will be loaded on android device."),(0,i.kt)("p",null,"3","."," And finally run ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"android/pytorch_android")," directory with task ",(0,i.kt)("inlineCode",{parentName:"p"},"assembleRelease")),(0,i.kt)("p",null,"Script requires that Android SDK, Android NDK, Java SDK, and gradle are installed.\nThey are specified as environment variables:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ANDROID_HOME")," - path to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/sdkmanager.html"},"Android SDK")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ANDROID_NDK")," - path to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/projects/install-ndk"},"Android NDK")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GRADLE_HOME")," - path to ",(0,i.kt)("a",{parentName:"p",href:"https://gradle.org/releases/"},"gradle")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," - path to ",(0,i.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase-downloads.html#javasejdk"},"JAVA JDK")),(0,i.kt)("p",null,"After successful build, you should see the result as aar file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ find android -type f -name *aar\nandroid/pytorch_android/build/outputs/aar/pytorch_android-release.aar\nandroid/pytorch_android_torchvision/build/outputs/aar/pytorch_android_torchvision-release.aar\n")))}s.isMDXComponent=!0}}]);