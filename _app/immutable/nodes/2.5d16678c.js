import{s as safe_not_equal,n as noop,r as run_all}from"../chunks/scheduler.e108d1fd.js";import{S as SvelteComponent,i as init,g as element,m as text,s as space,h as claim_element,j as children,n as claim_text,f as detach,c as claim_space,y as get_svelte_dataset,k as attr,l as set_style,a as insert_hydration,x as append_hydration,z as set_input_value,A as listen,o as set_data,B as to_number,C as destroy_each}from"../chunks/index.e9311cfd.js";function ensure_array_like(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const _page_svelte_svelte_type_style_lang="";function get_each_context(t,e,n){const i=t.slice();return i[22]=e[n],i}function get_each_context_1(t,e,n){const i=t.slice();return i[25]=e[n],i}function create_if_block_1(t){let e,n="Trykk ENTER for å starte",i,s,r="Skriv inn svar på regnestykkene og trykk ENTER. Er svaret riktig forsvinner regnestykket. Få så mange poeng som mulig før regnestykkene kommer til bunnen.";return{c(){e=element("h1"),e.textContent=n,i=space(),s=element("p"),s.textContent=r,this.h()},l(p){e=claim_element(p,"H1",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(e)!=="svelte-1hwwec"&&(e.textContent=n),i=claim_space(p),s=claim_element(p,"P",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(s)!=="svelte-ine46i"&&(s.textContent=r),this.h()},h(){attr(e,"class","start-headline svelte-tgvypc"),attr(s,"class","start-instructions svelte-tgvypc")},m(p,c){insert_hydration(p,e,c),insert_hydration(p,i,c),insert_hydration(p,s,c)},d(p){p&&(detach(e),detach(i),detach(s))}}}function create_if_block(t){let e,n,i="Spillet er slutt",s,r,p,c,b;return{c(){e=element("div"),n=element("h1"),n.textContent=i,s=space(),r=element("p"),p=text("Du fikk "),c=text(t[0]),b=text(" poeng"),this.h()},l(d){e=claim_element(d,"DIV",{class:!0});var _=children(e);n=claim_element(_,"H1",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(n)!=="svelte-de7d2n"&&(n.textContent=i),s=claim_space(_),r=claim_element(_,"P",{class:!0});var I=children(r);p=claim_text(I,"Du fikk "),c=claim_text(I,t[0]),b=claim_text(I," poeng"),I.forEach(detach),_.forEach(detach),this.h()},h(){attr(n,"class","game-over-headline svelte-tgvypc"),attr(r,"class","game-over-text svelte-tgvypc"),attr(e,"class","game-over svelte-tgvypc")},m(d,_){insert_hydration(d,e,_),append_hydration(e,n),append_hydration(e,s),append_hydration(e,r),append_hydration(r,p),append_hydration(r,c),append_hydration(r,b)},p(d,_){_&1&&set_data(c,d[0])},d(d){d&&detach(e)}}}function create_each_block_1(t){let e,n=t[25].problem+"",i;return{c(){e=element("p"),i=text(n),this.h()},l(s){e=claim_element(s,"P",{style:!0,class:!0});var r=children(e);i=claim_text(r,n),r.forEach(detach),this.h()},h(){set_style(e,"color",t[25].color),set_style(e,"left",t[25].x+"px"),set_style(e,"top",t[25].y+"px"),attr(e,"class","svelte-tgvypc")},m(s,r){insert_hydration(s,e,r),append_hydration(e,i)},p(s,r){r&16&&n!==(n=s[25].problem+"")&&set_data(i,n),r&16&&set_style(e,"color",s[25].color),r&16&&set_style(e,"left",s[25].x+"px"),r&16&&set_style(e,"top",s[25].y+"px")},d(s){s&&detach(e)}}}function create_each_block(t){let e,n=t[22]+"",i,s,r,p,c=(t[5][t[22]][0]||"")+"",b,d,_,I=(t[5][t[22]][1]||"")+"",L;return{c(){e=element("p"),i=text(n),s=text("."),r=space(),p=element("p"),b=text(c),d=space(),_=element("p"),L=text(I),this.h()},l(o){e=claim_element(o,"P",{class:!0});var y=children(e);i=claim_text(y,n),s=claim_text(y,"."),y.forEach(detach),r=claim_space(o),p=claim_element(o,"P",{class:!0});var k=children(p);b=claim_text(k,c),k.forEach(detach),d=claim_space(o),_=claim_element(o,"P",{style:!0,class:!0});var $=children(_);L=claim_text($,I),$.forEach(detach),this.h()},h(){attr(e,"class","svelte-tgvypc"),attr(p,"class","svelte-tgvypc"),set_style(_,"text-align","right"),attr(_,"class","svelte-tgvypc")},m(o,y){insert_hydration(o,e,y),append_hydration(e,i),append_hydration(e,s),insert_hydration(o,r,y),insert_hydration(o,p,y),append_hydration(p,b),insert_hydration(o,d,y),insert_hydration(o,_,y),append_hydration(_,L)},p:noop,d(o){o&&(detach(e),detach(r),detach(p),detach(d),detach(_))}}}function create_fragment(t){let e,n,i,s,r,p,c,b,d,_,I,L,o,y,k,$,R="<h1>~*~ Topp 10 ~*~</h1>",S,g,M,F="<b>#</b>",w,C,U="<b>Navn</b>",O,T,j="<b>Poeng</b>",G,V,B,v=!t[1]&&create_if_block_1(),f=t[3]&&create_if_block(t),A=ensure_array_like(t[4]),h=[];for(let l=0;l<A.length;l+=1)h[l]=create_each_block_1(get_each_context_1(t,A,l));let D=ensure_array_like(Object.keys(t[5])),m=[];for(let l=0;l<D.length;l+=1)m[l]=create_each_block(get_each_context(t,D,l));return{c(){e=element("div"),n=element("div"),i=element("h1"),s=text("Poeng: "),r=text(t[0]),p=space(),c=element("div"),v&&v.c(),b=space(),f&&f.c(),d=space();for(let l=0;l<h.length;l+=1)h[l].c();_=space(),I=element("hr"),L=space(),o=element("input"),y=space(),k=element("div"),$=element("div"),$.innerHTML=R,S=space(),g=element("div"),M=element("p"),M.innerHTML=F,w=space(),C=element("p"),C.innerHTML=U,O=space(),T=element("p"),T.innerHTML=j,G=space();for(let l=0;l<m.length;l+=1)m[l].c();this.h()},l(l){e=claim_element(l,"DIV",{class:!0});var u=children(e);n=claim_element(u,"DIV",{class:!0,style:!0});var a=children(n);i=claim_element(a,"H1",{});var x=children(i);s=claim_text(x,"Poeng: "),r=claim_text(x,t[0]),x.forEach(detach),p=claim_space(a),c=claim_element(a,"DIV",{class:!0});var E=children(c);v&&v.l(E),b=claim_space(E),f&&f.l(E),d=claim_space(E);for(let H=0;H<h.length;H+=1)h[H].l(E);_=claim_space(E),I=claim_element(E,"HR",{class:!0}),E.forEach(detach),L=claim_space(a),o=claim_element(a,"INPUT",{class:!0,type:!0}),a.forEach(detach),y=claim_space(u),k=claim_element(u,"DIV",{class:!0,style:!0});var P=children(k);$=claim_element(P,"DIV",{class:!0,"data-svelte-h":!0}),get_svelte_dataset($)!=="svelte-1c9xji3"&&($.innerHTML=R),S=claim_space(P),g=claim_element(P,"DIV",{class:!0});var N=children(g);M=claim_element(N,"P",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(M)!=="svelte-eduls"&&(M.innerHTML=F),w=claim_space(N),C=claim_element(N,"P",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(C)!=="svelte-1glm0ic"&&(C.innerHTML=U),O=claim_space(N),T=claim_element(N,"P",{style:!0,class:!0,"data-svelte-h":!0}),get_svelte_dataset(T)!=="svelte-cy9vxw"&&(T.innerHTML=j),G=claim_space(N);for(let H=0;H<m.length;H+=1)m[H].l(N);N.forEach(detach),P.forEach(detach),u.forEach(detach),this.h()},h(){attr(I,"class","svelte-tgvypc"),attr(c,"class","game-window svelte-tgvypc"),attr(o,"class","game-input svelte-tgvypc"),attr(o,"type","number"),o.autofocus=!0,attr(n,"class","game svelte-tgvypc"),set_style(n,"--width",WIDTH+"px"),set_style(n,"--height",HEIGHT+"px"),attr($,"class","highscore-head svelte-tgvypc"),attr(M,"class","svelte-tgvypc"),attr(C,"class","svelte-tgvypc"),set_style(T,"text-align","right"),attr(T,"class","svelte-tgvypc"),attr(g,"class","entries svelte-tgvypc"),attr(k,"class","highscore-list svelte-tgvypc"),set_style(k,"--height",HEIGHT+"px"),attr(e,"class","content svelte-tgvypc")},m(l,u){insert_hydration(l,e,u),append_hydration(e,n),append_hydration(n,i),append_hydration(i,s),append_hydration(i,r),append_hydration(n,p),append_hydration(n,c),v&&v.m(c,null),append_hydration(c,b),f&&f.m(c,null),append_hydration(c,d);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(c,null);append_hydration(c,_),append_hydration(c,I),append_hydration(n,L),append_hydration(n,o),set_input_value(o,t[2]),append_hydration(e,y),append_hydration(e,k),append_hydration(k,$),append_hydration(k,S),append_hydration(k,g),append_hydration(g,M),append_hydration(g,w),append_hydration(g,C),append_hydration(g,O),append_hydration(g,T),append_hydration(g,G);for(let a=0;a<m.length;a+=1)m[a]&&m[a].m(g,null);o.focus(),V||(B=[listen(o,"keypress",t[7]),listen(o,"input",t[8])],V=!0)},p(l,[u]){if(u&1&&set_data(r,l[0]),l[1]?v&&(v.d(1),v=null):v||(v=create_if_block_1(),v.c(),v.m(c,b)),l[3]?f?f.p(l,u):(f=create_if_block(l),f.c(),f.m(c,d)):f&&(f.d(1),f=null),u&16){A=ensure_array_like(l[4]);let a;for(a=0;a<A.length;a+=1){const x=get_each_context_1(l,A,a);h[a]?h[a].p(x,u):(h[a]=create_each_block_1(x),h[a].c(),h[a].m(c,_))}for(;a<h.length;a+=1)h[a].d(1);h.length=A.length}if(u&4&&to_number(o.value)!==l[2]&&set_input_value(o,l[2]),u&32){D=ensure_array_like(Object.keys(l[5]));let a;for(a=0;a<D.length;a+=1){const x=get_each_context(l,D,a);m[a]?m[a].p(x,u):(m[a]=create_each_block(x),m[a].c(),m[a].m(g,null))}for(;a<m.length;a+=1)m[a].d(1);m.length=D.length}},i:noop,o:noop,d(l){l&&detach(e),v&&v.d(),f&&f.d(),destroy_each(h,l),destroy_each(m,l),V=!1,run_all(B)}}}const WIDTH=1200,HEIGHT=700,ADDITION_LANE=100,SUBTRACTION_LANE=400,MULTIPLICATION_LANE=700,DIVISION_LANE=1e3;let animationSpeed=10;function instance($$self,$$props,$$invalidate){let timer=0,moveLength=.5,rate=300,interval,answer,poeng=0,gameStarted=!1,gameOver=!1,speedIncrease=!1,rateIncrease=!1,problemInfo={0:{operator:"+",color:"#FF6969",x:ADDITION_LANE},1:{operator:"-",color:"#53BF9D",x:SUBTRACTION_LANE},2:{operator:"*",color:"#F7D060",x:MULTIPLICATION_LANE},3:{operator:"/",color:"#5272F2",x:DIVISION_LANE}},problems=[],highscoresDummy={1:["Bjørn",32],2:["Ulf",30],3:["Jerv",30],4:["Gåshild Gassesen",27],5:["Anna",25],6:["Varg",22],7:[],8:[],9:[],10:[]};function startGame(){interval=setInterval(()=>{checkGameOver(),checkSpeedIncreaseAndRate(),generateProblem(),moveProblems(),timer++},animationSpeed)}function moveProblems(){for(const t of problems)t.y+=moveLength;$$invalidate(4,problems)}function checkGameOver(){for(const t of problems)t.y>HEIGHT-50+3&&(clearInterval(interval),setTimeout(()=>{$$invalidate(3,gameOver=!0),$$invalidate(4,problems=[])},2e3),setTimeout(()=>{$$invalidate(3,gameOver=!1),$$invalidate(1,gameStarted=!1),$$invalidate(0,poeng=0),$$invalidate(4,problems=[]),moveLength=.5,rate=300},1e4))}function handleKeypress(t){t.keyCode==13&&!gameStarted?$$invalidate(1,gameStarted=!0):t.keyCode==13&&(checkAnswer(answer),$$invalidate(2,answer=""))}function checkAnswer(t){problems.forEach(e=>{e.answer==t&&$$invalidate(0,poeng++,poeng)}),$$invalidate(4,problems=problems.filter(e=>e.answer!=t))}function checkSpeedIncreaseAndRate(t){speedIncrease&&(moveLength+=.1,speedIncrease=!1),rateIncrease&&(rate-=30,rateIncrease=!1)}function generateProblem(){if(timer%rate==0){let typeNumber=Math.floor(4*Math.random()),num1=Math.floor(10*Math.random()),num2=Math.floor(10*Math.random());for(;typeNumber==1&&num1<num2;)num1=Math.floor(10*Math.random()),num2=Math.floor(10*Math.random());for(;typeNumber==3&&(num1<num2||num1%num2!=0||num2==0);)num1=Math.floor(10*Math.random()),num2=Math.floor(10*Math.random());let problem=num1.toString()+" "+problemInfo[typeNumber].operator+" "+num2.toString();problems.push({problem,answer:eval(problem),color:problemInfo[typeNumber].color,x:problemInfo[typeNumber].x,y:0})}}const keypress_handler=t=>handleKeypress(t);function input_input_handler(){answer=to_number(this.value),$$invalidate(2,answer)}return $$self.$$.update=()=>{$$self.$$.dirty&2&&gameStarted&&startGame(),$$self.$$.dirty&1&&(poeng%5==0&&poeng>0&&(speedIncrease=!0),poeng%10==0&&poeng>0&&(rateIncrease=!0))},[poeng,gameStarted,answer,gameOver,problems,highscoresDummy,handleKeypress,keypress_handler,input_input_handler]}class Page extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{})}}export{Page as component};