import{s as safe_not_equal,n as noop,r as run_all,o as onMount,b as binding_callbacks}from"../chunks/scheduler.e108d1fd.js";import{S as SvelteComponent,i as init,g as element,m as text,s as space,h as claim_element,j as children,n as claim_text,f as detach,c as claim_space,y as get_svelte_dataset,k as attr,l as set_style,a as insert_hydration,x as append_hydration,z as set_input_value,A as listen,o as set_data,B as to_number,C as destroy_each,e as empty}from"../chunks/index.e9311cfd.js";function ensure_array_like(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const _page_svelte_svelte_type_style_lang="";function get_each_context(t,e,n){const r=t.slice();return r[28]=e[n],r[30]=n,r}function get_each_context_1(t,e,n){const r=t.slice();return r[31]=e[n],r}function create_if_block_2(t){let e,n="Trykk ENTER for å starte",r,l,a="Skriv inn svar på regnestykkene og trykk ENTER. Er svaret riktig forsvinner regnestykket. Få så mange poeng som mulig før regnestykkene kommer til bunnen.";return{c(){e=element("h1"),e.textContent=n,r=space(),l=element("p"),l.textContent=a,this.h()},l(o){e=claim_element(o,"H1",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(e)!=="svelte-1hwwec"&&(e.textContent=n),r=claim_space(o),l=claim_element(o,"P",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(l)!=="svelte-ine46i"&&(l.textContent=a),this.h()},h(){attr(e,"class","start-headline svelte-omoyn4"),attr(l,"class","start-instructions svelte-omoyn4")},m(o,p){insert_hydration(o,e,p),insert_hydration(o,r,p),insert_hydration(o,l,p)},d(o){o&&(detach(e),detach(r),detach(l))}}}function create_if_block(t){let e;function n(a,o){return a[2]?create_if_block_1:create_else_block}let r=n(t),l=r(t);return{c(){l.c(),e=empty()},l(a){l.l(a),e=empty()},m(a,o){l.m(a,o),insert_hydration(a,e,o)},p(a,o){r===(r=n(a))&&l?l.p(a,o):(l.d(1),l=r(a),l&&(l.c(),l.m(e.parentNode,e)))},d(a){a&&detach(e),l.d(a)}}}function create_else_block(t){let e,n,r="Spillet er slutt",l,a,o,p,v;return{c(){e=element("div"),n=element("h1"),n.textContent=r,l=space(),a=element("p"),o=text("Du fikk "),p=text(t[0]),v=text(" poeng"),this.h()},l(_){e=claim_element(_,"DIV",{class:!0});var d=children(e);n=claim_element(d,"H1",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(n)!=="svelte-de7d2n"&&(n.textContent=r),l=claim_space(d),a=claim_element(d,"P",{class:!0});var g=children(a);o=claim_text(g,"Du fikk "),p=claim_text(g,t[0]),v=claim_text(g," poeng"),g.forEach(detach),d.forEach(detach),this.h()},h(){attr(n,"class","game-over-headline svelte-omoyn4"),attr(a,"class","game-over-text svelte-omoyn4"),attr(e,"class","game-over svelte-omoyn4")},m(_,d){insert_hydration(_,e,d),append_hydration(e,n),append_hydration(e,l),append_hydration(e,a),append_hydration(a,o),append_hydration(a,p),append_hydration(a,v)},p(_,d){d[0]&1&&set_data(p,_[0])},d(_){_&&detach(e)}}}function create_if_block_1(t){let e,n,r="Spillet er slutt",l,a,o,p,v,_,d,g="Gratulerer! Din poengsum har nådd topplisten.",E,c,m,b;return{c(){e=element("div"),n=element("h1"),n.textContent=r,l=space(),a=element("p"),o=text("Du fikk "),p=text(t[0]),v=text(" poeng"),_=space(),d=element("p"),d.textContent=g,E=space(),c=element("input"),this.h()},l(h){e=claim_element(h,"DIV",{class:!0});var k=children(e);n=claim_element(k,"H1",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(n)!=="svelte-de7d2n"&&(n.textContent=r),l=claim_space(k),a=claim_element(k,"P",{class:!0});var C=children(a);o=claim_text(C,"Du fikk "),p=claim_text(C,t[0]),v=claim_text(C," poeng"),C.forEach(detach),_=claim_space(k),d=claim_element(k,"P",{class:!0,style:!0,"data-svelte-h":!0}),get_svelte_dataset(d)!=="svelte-j231gc"&&(d.textContent=g),E=claim_space(k),c=claim_element(k,"INPUT",{type:!0,placeholder:!0,style:!0}),k.forEach(detach),this.h()},h(){attr(n,"class","game-over-headline svelte-omoyn4"),attr(a,"class","game-over-text svelte-omoyn4"),attr(d,"class","game-over-text svelte-omoyn4"),set_style(d,"margin-top","40px"),attr(c,"type","text"),attr(c,"placeholder","Skriv inn navet ditt her og trykk ENTER"),set_style(c,"margin-top","90px"),set_style(c,"width","100%"),attr(e,"class","game-over svelte-omoyn4")},m(h,k){insert_hydration(h,e,k),append_hydration(e,n),append_hydration(e,l),append_hydration(e,a),append_hydration(a,o),append_hydration(a,p),append_hydration(a,v),append_hydration(e,_),append_hydration(e,d),append_hydration(e,E),append_hydration(e,c),t[10](c),m||(b=listen(c,"keypress",t[11]),m=!0)},p(h,k){k[0]&1&&set_data(p,h[0])},d(h){h&&detach(e),t[10](null),m=!1,b()}}}function create_each_block_1(t){let e,n=t[31].problem+"",r;return{c(){e=element("p"),r=text(n),this.h()},l(l){e=claim_element(l,"P",{style:!0,class:!0});var a=children(e);r=claim_text(a,n),a.forEach(detach),this.h()},h(){set_style(e,"color",t[31].color),set_style(e,"left",t[31].x+"px"),set_style(e,"top",t[31].y+"px"),attr(e,"class","svelte-omoyn4")},m(l,a){insert_hydration(l,e,a),append_hydration(e,r)},p(l,a){a[0]&64&&n!==(n=l[31].problem+"")&&set_data(r,n),a[0]&64&&set_style(e,"color",l[31].color),a[0]&64&&set_style(e,"left",l[31].x+"px"),a[0]&64&&set_style(e,"top",l[31].y+"px")},d(l){l&&detach(e)}}}function create_each_block(t){let e,n=t[30]+1+"",r,l,a,o,p=(t[28][0]||"")+"",v,_,d,g=(t[28][1]||"")+"",E;return{c(){e=element("p"),r=text(n),l=text("."),a=space(),o=element("p"),v=text(p),_=space(),d=element("p"),E=text(g),this.h()},l(c){e=claim_element(c,"P",{class:!0});var m=children(e);r=claim_text(m,n),l=claim_text(m,"."),m.forEach(detach),a=claim_space(c),o=claim_element(c,"P",{class:!0});var b=children(o);v=claim_text(b,p),b.forEach(detach),_=claim_space(c),d=claim_element(c,"P",{style:!0,class:!0});var h=children(d);E=claim_text(h,g),h.forEach(detach),this.h()},h(){attr(e,"class","svelte-omoyn4"),attr(o,"class","svelte-omoyn4"),set_style(d,"text-align","right"),attr(d,"class","svelte-omoyn4")},m(c,m){insert_hydration(c,e,m),append_hydration(e,r),append_hydration(e,l),insert_hydration(c,a,m),insert_hydration(c,o,m),append_hydration(o,v),insert_hydration(c,_,m),insert_hydration(c,d,m),append_hydration(d,E)},p:noop,d(c){c&&(detach(e),detach(a),detach(o),detach(_),detach(d))}}}function create_fragment(t){let e,n,r,l,a,o,p,v,_,d,g,E,c,m,b,h,k="<h1>~*~ Topp 10 ~*~</h1>",C,x,D,U="<b>#</b>",O,L,F="<b>Navn</b>",G,H,B="<b>Poeng</b>",V,R,j,I=!t[1]&&create_if_block_2(),y=t[5]&&create_if_block(t),S=ensure_array_like(t[6]),u=[];for(let i=0;i<S.length;i+=1)u[i]=create_each_block_1(get_each_context_1(t,S,i));let A=ensure_array_like(t[8]),f=[];for(let i=0;i<A.length;i+=1)f[i]=create_each_block(get_each_context(t,A,i));return{c(){e=element("div"),n=element("div"),r=element("h1"),l=text("Poeng: "),a=text(t[0]),o=space(),p=element("div"),I&&I.c(),v=space(),y&&y.c(),_=space();for(let i=0;i<u.length;i+=1)u[i].c();d=space(),g=element("hr"),E=space(),c=element("input"),m=space(),b=element("div"),h=element("div"),h.innerHTML=k,C=space(),x=element("div"),D=element("p"),D.innerHTML=U,O=space(),L=element("p"),L.innerHTML=F,G=space(),H=element("p"),H.innerHTML=B,V=space();for(let i=0;i<f.length;i+=1)f[i].c();this.h()},l(i){e=claim_element(i,"DIV",{class:!0});var $=children(e);n=claim_element($,"DIV",{class:!0,style:!0});var s=children(n);r=claim_element(s,"H1",{});var T=children(r);l=claim_text(T,"Poeng: "),a=claim_text(T,t[0]),T.forEach(detach),o=claim_space(s),p=claim_element(s,"DIV",{class:!0});var N=children(p);I&&I.l(N),v=claim_space(N),y&&y.l(N),_=claim_space(N);for(let P=0;P<u.length;P+=1)u[P].l(N);d=claim_space(N),g=claim_element(N,"HR",{class:!0}),N.forEach(detach),E=claim_space(s),c=claim_element(s,"INPUT",{class:!0,type:!0}),s.forEach(detach),m=claim_space($),b=claim_element($,"DIV",{class:!0,style:!0});var w=children(b);h=claim_element(w,"DIV",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(h)!=="svelte-1c9xji3"&&(h.innerHTML=k),C=claim_space(w),x=claim_element(w,"DIV",{class:!0});var M=children(x);D=claim_element(M,"P",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(D)!=="svelte-eduls"&&(D.innerHTML=U),O=claim_space(M),L=claim_element(M,"P",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(L)!=="svelte-1glm0ic"&&(L.innerHTML=F),G=claim_space(M),H=claim_element(M,"P",{style:!0,class:!0,"data-svelte-h":!0}),get_svelte_dataset(H)!=="svelte-cy9vxw"&&(H.innerHTML=B),V=claim_space(M);for(let P=0;P<f.length;P+=1)f[P].l(M);M.forEach(detach),w.forEach(detach),$.forEach(detach),this.h()},h(){attr(g,"class","svelte-omoyn4"),attr(p,"class","game-window svelte-omoyn4"),attr(c,"class","game-input svelte-omoyn4"),attr(c,"type","number"),attr(n,"class","game svelte-omoyn4"),set_style(n,"--width",WIDTH+"px"),set_style(n,"--height",HEIGHT+"px"),attr(h,"class","highscore-head svelte-omoyn4"),attr(D,"class","svelte-omoyn4"),attr(L,"class","svelte-omoyn4"),set_style(H,"text-align","right"),attr(H,"class","svelte-omoyn4"),attr(x,"class","entries svelte-omoyn4"),attr(b,"class","highscore-list svelte-omoyn4"),set_style(b,"--height",HEIGHT+"px"),attr(e,"class","content svelte-omoyn4")},m(i,$){insert_hydration(i,e,$),append_hydration(e,n),append_hydration(n,r),append_hydration(r,l),append_hydration(r,a),append_hydration(n,o),append_hydration(n,p),I&&I.m(p,null),append_hydration(p,v),y&&y.m(p,null),append_hydration(p,_);for(let s=0;s<u.length;s+=1)u[s]&&u[s].m(p,null);append_hydration(p,d),append_hydration(p,g),append_hydration(n,E),append_hydration(n,c),set_input_value(c,t[4]),t[14](c),append_hydration(e,m),append_hydration(e,b),append_hydration(b,h),append_hydration(b,C),append_hydration(b,x),append_hydration(x,D),append_hydration(x,O),append_hydration(x,L),append_hydration(x,G),append_hydration(x,H),append_hydration(x,V);for(let s=0;s<f.length;s+=1)f[s]&&f[s].m(x,null);R||(j=[listen(c,"keypress",t[12]),listen(c,"input",t[13])],R=!0)},p(i,$){if($[0]&1&&set_data(a,i[0]),i[1]?I&&(I.d(1),I=null):I||(I=create_if_block_2(),I.c(),I.m(p,v)),i[5]?y?y.p(i,$):(y=create_if_block(i),y.c(),y.m(p,_)):y&&(y.d(1),y=null),$[0]&64){S=ensure_array_like(i[6]);let s;for(s=0;s<S.length;s+=1){const T=get_each_context_1(i,S,s);u[s]?u[s].p(T,$):(u[s]=create_each_block_1(T),u[s].c(),u[s].m(p,d))}for(;s<u.length;s+=1)u[s].d(1);u.length=S.length}if($[0]&16&&to_number(c.value)!==i[4]&&set_input_value(c,i[4]),$[0]&256){A=ensure_array_like(i[8]);let s;for(s=0;s<A.length;s+=1){const T=get_each_context(i,A,s);f[s]?f[s].p(T,$):(f[s]=create_each_block(T),f[s].c(),f[s].m(x,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=A.length}},i:noop,o:noop,d(i){i&&detach(e),I&&I.d(),y&&y.d(),destroy_each(u,i),t[14](null),destroy_each(f,i),R=!1,run_all(j)}}}const WIDTH=1200,HEIGHT=700,ADDITION_LANE=100,SUBTRACTION_LANE=400,MULTIPLICATION_LANE=700,DIVISION_LANE=1e3;let animationSpeed=10;function instance($$self,$$props,$$invalidate){let timer=0,moveLength=.5,rate=300,interval,answer,poeng=0,gameStarted=!1,gameOver=!1,speedIncrease=!1,rateIncrease=!1,isHighscore=!1,problemInfo={0:{operator:"+",color:"#FF6969",x:ADDITION_LANE},1:{operator:"-",color:"#53BF9D",x:SUBTRACTION_LANE},2:{operator:"*",color:"#F7D060",x:MULTIPLICATION_LANE},3:{operator:"/",color:"#5272F2",x:DIVISION_LANE}},problems=[],highscoresDummy=[["Bjørn",32],["Ulf",30],["Jerv",30],["Gåshild Gassesen",27],["Anna",25],["Varg",22],[],[],[],[]],gameInput,highscoreInput;onMount(()=>{gameInput.focus()});function startGame(){interval=setInterval(()=>{checkGameOver(),checkSpeedIncreaseAndRate(),generateProblem(),moveProblems(),timer++},animationSpeed)}function moveProblems(){for(const t of problems)t.y+=moveLength;$$invalidate(6,problems)}function checkGameOver(){for(const t of problems)t.y>HEIGHT-50+3&&(clearInterval(interval),$$invalidate(5,gameOver=!0),$$invalidate(2,isHighscore=!0))}function handleKeypress(t){t.keyCode==13&&!gameStarted?$$invalidate(1,gameStarted=!0):t.keyCode==13&&isHighscore?($$invalidate(5,gameOver=!1),$$invalidate(2,isHighscore=!1),$$invalidate(1,gameStarted=!1),$$invalidate(0,poeng=0),$$invalidate(6,problems=[]),moveLength=.5,rate=300,gameInput.focus()):t.keyCode==13&&(checkAnswer(answer),$$invalidate(4,answer=""))}function checkAnswer(t){problems.forEach(e=>{e.answer==t&&$$invalidate(0,poeng++,poeng)}),$$invalidate(6,problems=problems.filter(e=>e.answer!=t))}function checkSpeedIncreaseAndRate(){speedIncrease&&(moveLength+=.1,speedIncrease=!1),rateIncrease&&(rate-=30,rateIncrease=!1)}function generateProblem(){if(timer%rate==0){let typeNumber=Math.floor(4*Math.random()),num1=Math.floor(10*Math.random()),num2=Math.floor(10*Math.random());for(;typeNumber==1&&num1<num2;)num1=Math.floor(10*Math.random()),num2=Math.floor(10*Math.random());for(;typeNumber==3&&(num1<num2||num1%num2!=0||num2==0);)num1=Math.floor(10*Math.random()),num2=Math.floor(10*Math.random());let problem=num1.toString()+" "+problemInfo[typeNumber].operator+" "+num2.toString();problems.push({problem,answer:eval(problem),color:problemInfo[typeNumber].color,x:problemInfo[typeNumber].x,y:0})}}function input_binding(t){binding_callbacks[t?"unshift":"push"](()=>{highscoreInput=t,$$invalidate(3,highscoreInput)})}const keypress_handler=t=>handleKeypress(t),keypress_handler_1=t=>handleKeypress(t);function input_input_handler(){answer=to_number(this.value),$$invalidate(4,answer)}function input_binding_1(t){binding_callbacks[t?"unshift":"push"](()=>{gameInput=t,$$invalidate(7,gameInput)})}return $$self.$$.update=()=>{$$self.$$.dirty[0]&12&&isHighscore&&(highscoreInput==null||highscoreInput.focus()),$$self.$$.dirty[0]&2&&gameStarted&&startGame(),$$self.$$.dirty[0]&1&&(poeng%5==0&&poeng>0&&(speedIncrease=!0),poeng%10==0&&poeng>0&&(rateIncrease=!0))},[poeng,gameStarted,isHighscore,highscoreInput,answer,gameOver,problems,gameInput,highscoresDummy,handleKeypress,input_binding,keypress_handler,keypress_handler_1,input_input_handler,input_binding_1]}class Page extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{},null,[-1,-1])}}export{Page as component};
