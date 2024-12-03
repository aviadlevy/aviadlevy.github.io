"use strict";(self.webpackChunkmy_github_pages=self.webpackChunkmy_github_pages||[]).push([[351],{3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return v},S:function(){return M},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,m=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,d=s(e,f);return r.createElement("img",o({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},w=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,h),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(y,o({},c,t,{sizes:d,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],v=function(e){var t=e.fallback,a=s(e,b);return t?r.createElement(w,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(u=w.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(w,o({},e)),r.createElement("noscript",null,r.createElement(w,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=w.propTypes;var x,k,C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},A={image:i().object.isRequired,alt:C},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],z=new Set,T=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=s(e,L),y=i.width,w=i.height,b=i.layout,v=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,w,b),E=v.style,C=v.className,A=s(v,S),T=(0,r.useRef)(),O=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(u=m);var R=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,w);return(0,r.useEffect)((function(){x||(x=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=T.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(O)):k&&z.has(O)?void 0:(x.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;T.current&&(T.current.innerHTML=r(o({isLoading:!0,isLoaded:z.has(O),image:i},h)),z.has(O)||(e=requestAnimationFrame((function(){T.current&&(t=n(T.current,O,z,c,p,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){z.has(O)&&k&&(T.current.innerHTML=k(o({isLoading:z.has(O),isLoaded:z.has(O),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},A,{style:o({},E,c,{backgroundColor:d}),className:C+(u?" "+u:""),ref:T,dangerouslySetInnerHTML:{__html:R},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));O.propTypes=A,O.displayName="GatsbyImage";var R,N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],U=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),I={src:i().string.isRequired,alt:C,width:U,height:U,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(R=O,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,N);return n&&console.warn(n),a?r.createElement(R,o({image:a},i)):(console.warn("Image not loaded",t),null)});M.displayName="StaticImage",M.propTypes=I},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},680:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(3494),n=a(7294),i=a(1082),o=a(3723),s=function(e){var t=e.menuLinks;return n.createElement("header",{style:{background:"black",marginBottom:"1rem"}},n.createElement("div",{style:{margin:"0 auto",maxWidth:"1100px",padding:"1.45rem 1.0875rem",display:"flex",justifyItems:"space-between",alignItems:"center",height:80,zIndex:"12"}},n.createElement(i.Link,{to:"/"},n.createElement(o.S,{src:"../images/icon.png",alt:"Aviad Levy",placeholder:"blurred",layout:"constrained",width:75,height:75,style:{margin:0},__imageData:a(4872)})),n.createElement("div",{style:{display:"flex",flex:1}}),n.createElement("div",null,n.createElement("nav",null,n.createElement("ul",{style:{display:"flex",flex:1}},t.map((function(e){return n.createElement("li",{key:e.name,style:{listStyleType:"none",padding:"1rem"}},n.createElement(i.Link,{style:{color:"white"},to:e.link},e.name))})))))))};s.defaultProps={siteTitle:""};var l=s,c=r.default.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-n4jugo-0"})(["width:100%;height:3.5rem;margin:0 auto;padding:0 2.5rem;background:black;color:white;display:flex;justify-content:center;align-items:center;font-size:0.8rem;text-transform:uppercase;letter-spacing:+1px;font-weight:700;"]),d={GitHub:"https://github.com/aviadlevy",Twitter:"https://twitter.com/AviadLevy",Mastodon:"https://tooot.im/@aviadlevy",Linkedin:"https://www.linkedin.com/in/aviadlevy/"},u=function(){return n.createElement(c,null,n.createElement("ul",{style:{display:"flex"}},Object.keys(d).map((function(e){return n.createElement("li",{key:e,style:{listStyleType:"none",padding:"1rem"}},n.createElement(i.Link,{to:d[e],target:"_blank",rel:"me"},e))}))))},m=(0,r.createGlobalStyle)(['*{box-sizing:border-box;}html{width:100%;height:100%;}body{width:100%;height:100%;margin:0;padding:0;background-color:white;color:black;font-size:1.125rem;font-family:"Roboto",Arial,Helvetica,sans-serif;line-height:1.5rem;font-weight:400;}h1{font-weight:700;font-size:2rem;line-height:2.375rem;color:black;@media (min-width:1200px){font-size:2.625rem;line-height:4rem;}}h2{font-weight:700;font-size:1.25rem;line-height:1.5rem;color:black;@media (min-width:1200px){font-size:2rem;line-height:3rem;}}a{display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;cursor:pointer;&:hover,&:focus{outline:0;}}a.projects{color:#1f6feb;font-weight:bold;}pre code{display:block;background:#ffeff0;white-space:pre;-webkit-overflow-scrolling:touch;overflow-x:scroll;max-width:100%;min-width:100px;padding:0;}p > code,li > code,dd > code,td > code{background:#ffeff0;word-wrap:break-word;box-decoration-break:clone;padding:.1rem .3rem .2rem;border-radius:.2rem;}blockquote{margin:0;padding:0 1em;color:#8b949e;border-left:.25em solid #30363d;}blockquote a{color:#58a6ff;}.card{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;padding:2px 16px 26px;margin-bottom:15px;border-radius:25px;}.card:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);}']),p=r.default.div.withConfig({displayName:"Layout__StyledLayout",componentId:"sc-1brgwqf-0"})(["width:100%;min-height:100vh;margin:0 auto;display:grid;grid-template-rows:auto 1fr auto;grid-template-columns:100%;#main-content{width:100%;max-width:1100px;margin:0 auto;padding:0 1.0875rem;}"]),g=function(e){var t=e.children;return n.createElement(i.StaticQuery,{query:"1947816842",render:function(e){return n.createElement(p,null,n.createElement(m,null),n.createElement(l,{menuLinks:e.site.siteMetadata.menuLinks}),n.createElement("main",{id:"main-content"},t),n.createElement(u,null))}})}},1755:function(e,t,a){var r=a(7294),n=a(1082);t.Z=function(e){var t,a,i,o=e.description,s=e.title,l=e.children,c=(0,n.useStaticQuery)("2841359383").site,d=o||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?s+" | "+u:s),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:u?s+" | "+u:s}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:u?s+" | "+u:s}),r.createElement("meta",{name:"twitter:description",content:d}),l)}},4872:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFDElEQVQ4y03U+W8UZRzH8adNSEg04c8QfxB+MhijRo0mxgOIpKAcMRbLobQoVKiRUmwpRuhJKVCgaMvRw3KUlragpChHeu3u7DEze8zM7uw1u92dvXoBs30+5lm2xB++yfwweeX9zPfJEDPvJf+bQhPvJSZBXcaJ6kZO8HbZpIgybvc9Y8MrUR/vCfZyorrF6Y0ut7uDhJfChQ5PiCzNElQwaZOIyaGwWW+yy6KZ94Jzh9Df3YvzNYdw6WQDev7sx4RdgShrsLkCkt0d/IKXQsTqDDCs4AVodfqJRfCx51oGmXkFZjFgmAe6DbF1/6LUdpBO1H1HR+orFq9c7DAempyGqERgdwfh8IQaWanN5X9RWJivfI45lKzVo2UfDg9R+Vw5Td/roNMDrdT0WzF92FpNnTYbbW/vpDZ3MMtL4azDE2JosyBrRJC1gqUjr39e5s1yom9xzKbg/pmjdO5mPU3d64J26wzcp/ZiuGYvJIedXuvrow/GrHB6o5SXwoYghyHI2hZBDhMyYfUsM/Ne0SL4YOG9WasrgEcTdjpQu5/21+yDvbsNieFLGDyyG20Hv8X9nivoON2CcRNPBTnC6rKCrDHQJ8jaS6xuI6uzCD7DwnvZUeiDxxwajlWismofmvbsQGv5LhRvXIvN77+Nyu/LcOJIJcY5FwQlQh2eIHV4QgZDRSVSzJZxldVxompwgpdapQg1D97A6OkqDNUfwt3qfegq24qqbRvwy6ZP0FJTibbDBzDSdBwuv84wNux7MnCQWESfwokqAxc5wUc5TwT86F34Oo8h8Ecjop31GK36AW3b1mGq4Sfcv3oB7ds3YODAHri1DBzuAOU9IZo/ts4KnzHQ6vRTq6hSu6RhcmwKtrMV+OfwVxguK8LxDR9ix5qVuF6+FVeOlKK9pAhjt+9ADCTAe4JsMQyj7Cox0FgCbU4/dUhhmGwSbtWV4+aBzRCaajF29GfUfvYuDn3+Fup3rMX4nRHwchQM4qXwC5BVMlDNg4u5SqcKp6rjYlMdmvd8Ca37JKaO/YDWnUX4YPUrqC0pAu9W4ZA08J7QEkTzS0kSTlR786DBQE5UKXt5bNKBbes+xamyrzFUXYqP33wda15bhZaKUjgEGXZ37kKzOoZl8+AwK9ycX4rxvJChfgguH/rPNWPde+/gjVdXYs2q1di9/iOc/XEXeLcfvHcadneAbZgd28gfeyexuQLLOVGV8pVZq9Of+56cKwT73X486r6AC7WVaCwtRtPuregs/wbjt3phMvNUVLTcxc6jQVHRVuR+DFanfxODONGfZVeHlyN4MDBAH7fXUXG4D1PXL2Oo+Sj+bq7GtYoSeruyhNomLVCCSaoEYobbl1vQdkEKE1ZYaBFVhjbyUgjeYNzwR1JZ29VWync2UMetbmruu0y5ax3UdqmFTrb+ShUrh7C+kA1FUkZ4OoNwLHM+EE2RUCxTQJyKRipOdJNFChKJzzQn0vOIZ57Ca7EY4uW2LN9zkU71/A7njQ7I/V1U8wayscwzY1qfQSw5h2hi9vy0liF6eo6EY+kCwn6QHjVa4HCFiC+cIMnMwpZkZkHVM08QlhTI/46C+2uE+swmGo8lEc88gZ6chZ6aC8WTc9vj6TmSfpLNYcFoihCnEiG+kE5kf4w4vZHC1MwCmZl/+nIiNVucms8OJuYMneH6rAE9PZ/Uk7MjifT8zkR6fkU8NU+i+kxBbhKzJKLPkP8Ax77Wpkcm7eMAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/8d16f4d178976f931bbe63b87a06a120/7458e/icon.png","srcSet":"/static/8d16f4d178976f931bbe63b87a06a120/546b2/icon.png 19w,\\n/static/8d16f4d178976f931bbe63b87a06a120/f2a56/icon.png 38w,\\n/static/8d16f4d178976f931bbe63b87a06a120/7458e/icon.png 75w,\\n/static/8d16f4d178976f931bbe63b87a06a120/de3a1/icon.png 150w","sizes":"(min-width: 75px) 75px, 100vw"},"sources":[{"srcSet":"/static/8d16f4d178976f931bbe63b87a06a120/89d20/icon.webp 19w,\\n/static/8d16f4d178976f931bbe63b87a06a120/0852d/icon.webp 38w,\\n/static/8d16f4d178976f931bbe63b87a06a120/18188/icon.webp 75w,\\n/static/8d16f4d178976f931bbe63b87a06a120/c65bc/icon.webp 150w","type":"image/webp","sizes":"(min-width: 75px) 75px, 100vw"}]},"width":75,"height":75}')}}]);
//# sourceMappingURL=commons-5625a876ce326baebbb7.js.map