(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[133],{876:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return y}});var t=r(2784);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(r),y=o,m=f["".concat(p,".").concat(y)]||f[y]||u[y]||a;return r?t.createElement(m,l(l({ref:n},s),{},{components:r})):t.createElement(m,l({ref:n},s))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7929:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var t=r(7560),o=r(8283),a=(r(2784),r(876)),l={title:"Other layers"},i={unversionedId:"example-other-layers",id:"example-other-layers",isDocsHomePage:!1,title:"Other layers",description:"`tsx live noInline",source:"@site/docs/example-other-layers.md",sourceDirName:".",slug:"/example-other-layers",permalink:"/docs/example-other-layers",version:"current",frontMatter:{title:"Other layers"},sidebar:"docs",previous:{title:"SVG Overlay",permalink:"/docs/example-svg-overlay"},next:{title:"Tooltips",permalink:"/docs/example-tooltips"}},p=[],c={toc:p};function s(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},"const center = [51.505, -0.09]\nconst rectangle = [\n  [51.49, -0.08],\n  [51.5, -0.06],\n]\n\nconst fillBlueOptions = { fillColor: 'blue' }\nconst fillRedOptions = { fillColor: 'red' }\nconst greenOptions = { color: 'green', fillColor: 'green' }\nconst purpleOptions = { color: 'purple' }\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n      url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    />\n    <LayerGroup>\n      <Circle center={center} pathOptions={fillBlueOptions} radius={200} />\n      <Circle\n        center={center}\n        pathOptions={fillRedOptions}\n        radius={100}\n        stroke={false}\n      />\n      <LayerGroup>\n        <Circle\n          center={[51.51, -0.08]}\n          pathOptions={greenOptions}\n          radius={100}\n        />\n      </LayerGroup>\n    </LayerGroup>\n    <FeatureGroup pathOptions={purpleOptions}>\n      <Popup>Popup in FeatureGroup</Popup>\n      <Circle center={[51.51, -0.06]} radius={200} />\n      <Rectangle bounds={rectangle} />\n    </FeatureGroup>\n  </MapContainer>,\n)\n")))}s.isMDXComponent=!0}}]);