import{r as t,h as n}from"./p-42f33164.js";const e=class{constructor(n){t(this,n),this.content=""}componentWillLoad(){if(null!=this.documentLocation)return this.fetchNewContent(this.documentLocation)}fetchNewContent(t){return fetch(t).then(t=>t.text()).then(t=>{this.content=t})}render(){return n("div",{innerHTML:this.content})}static get watchers(){return{documentLocation:["fetchNewContent"]}}};export{e as stencil_async_content};