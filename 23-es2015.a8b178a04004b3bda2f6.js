(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{UWEh:function(t,i,o){"use strict";o.r(i),o.d(i,"super_tab_button",(function(){return n})),o.d(i,"super_tabs_toolbar",(function(){return a}));var e=o("N9VD"),s=o("HLkV");class n{constructor(t){Object(e.h)(this,t),this.disabled=!1,this.scrollableContainer=!1,this.retryAttempts=0}componentDidLoad(){this.indexChildren(),this.initCmp()}initCmp(){this.el&&this.el.shadowRoot||!(++this.retryAttempts<1e3)?(this.label||this.icon||this.indexChildren(),this.el.shadowRoot.querySelector("slot").addEventListener("slotchange",()=>{this.indexChildren()})):requestAnimationFrame(()=>this.initCmp())}indexChildren(){this.label=this.el.querySelector("ion-label"),this.icon=this.el.querySelector("ion-icon")}render(){return Object(e.g)(e.a,{role:"button","aria-label":!!this.label&&this.label.innerText,"aria-disabled":!!this.disabled&&"true","aria-selected":this.active?"true":"false",class:{"ion-activatable":!this.disabled,"ion-focusable":!this.disabled,"icon-only":!!this.icon&&!this.label,"label-only":!!this.label&&!this.icon,active:Boolean(this.active),scrollableContainer:this.scrollableContainer}},Object(e.g)("slot",null),Object(e.g)("ion-ripple-effect",{type:"unbounded"}))}get el(){return Object(e.f)(this)}}n.style=":host{-ms-flex:1 0 0px;flex:1 0 0;cursor:pointer;position:relative;max-width:100%;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);height:72px;padding:0 24px;-webkit-touch-callout:none;-webkit-user-select:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host ion-label,:host ion-icon,:host ::slotted(ion-label),:host ::slotted(ion-icon){-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-delay:0s;transition-delay:0s;-webkit-box-sizing:content-box !important;box-sizing:content-box !important;-webkit-user-select:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host ion-label,:host ::slotted(ion-label){color:var(--st-label-color-inactive, var(--st-base-color-inactive));line-height:var(--st-label-line-height, 14px);height:var(--st-label-height, 14px);font-size:var(--st-label-font-size, 14px);text-transform:var(--st-label-text-transform, uppercase);font-weight:var(--st-label-font-weight, 500);padding-bottom:var(--st-label-padding-bottom, 16px)}:host ion-icon,:host ::slotted(ion-icon){color:var(--st-icon-color-inactive, var(--st-base-color-inactive));fill:var(--st-icon-color-inactive, var(--st-base-color-inactive));min-height:var(--st-icon-size, 24px);min-width:var(--st-icon-size, 24px);font-size:var(--st-icon-size, 24px);padding-top:12px}@media (hover: hover){:host(:hover){background:rgba(var(--ion-color-contrast-rgb), 0.04)}}:host(.active) ion-label,:host(.active) ion-icon,:host(.active) ::slotted(ion-label),:host(.active) ::slotted(ion-icon){-webkit-transition-delay:75ms;transition-delay:75ms}:host(.active) ion-label,:host(.active) ::slotted(ion-label){color:var(--st-label-color-active, var(--st-base-color-active))}:host(.active) ion-icon,:host(.active) ::slotted(ion-icon){color:var(--st-icon-color-active, var(--st-base-color-active));fill:var(--st-icon-color-active, var(--st-base-color-active))}:host(.icon-only),:host(.label-only){height:48px;-ms-flex-pack:center;justify-content:center}:host(.scrollableContainer){-ms-flex-positive:0;flex-grow:0;-ms-flex-preferred-size:auto;flex-basis:auto;min-width:90px;max-width:360px}::slotted{-ms-flex-negative:1;flex-shrink:1}:host(.label-only) ion-label,:host(.label-only) ::slotted(ion-label){padding-bottom:0}:host(.icon-only) ion-icon,:host(.icon-only) ::slotted(ion-icon){padding-top:0}";class a{constructor(t){Object(e.h)(this,t),this.showIndicator=!0,this.color="primary",this.scrollable=!1,this.scrollablePadding=!0,this.buttons=[],this.activeTabIndex=0,this.touchStartTs=0,this.lastClickTs=0,this.leftThreshold=0,this.rightThreshold=0,this.hostCls={},this.buttonClick=Object(e.d)(this,"buttonClick",7)}async componentDidLoad(){this.setHostCls(),await this.queryButtons(),this.slot=this.el.shadowRoot.querySelector("slot"),this.slot.addEventListener("slotchange",this.onSlotChange.bind(this)),this.updateWidth(),requestAnimationFrame(()=>{this.setActiveTab(this.activeTabIndex,!0,!1)})}componentWillUpdate(){this.debug("componentWillUpdate"),this.updateThresholds()}componentDidRender(){this.updateWidth()}updateWidth(){const t=this.el.getBoundingClientRect();this.width=Math.round(100*t.width)/100,this.offsetLeft=t.left}setActiveTab(t,i,o){return t=Math.max(0,Math.min(Math.round(t),this.buttons.length-1)),this.debug("setActiveTab",t,i,o),this.activeTabIndex=t,this.markButtonActive(this.buttons[t]),i&&this.alignIndicator(t,o),Promise.resolve()}setSelectedTab(t,i){return this.alignIndicator(t,i),Promise.resolve()}moveContainer(t,i){return this.buttonsContainerEl?(Object(s.g)(this.buttonsContainerEl,t,0,this.config.nativeSmoothScroll,i?this.config.transitionDuration:0),Promise.resolve()):(this.debug("moveContainer called before this.buttonsContainerEl was defined"),Promise.resolve())}getButtonFromEv(t){let i=t.target;const o=i.tagName.toLowerCase();if("super-tab-button"!==o){if("super-tabs-toolbar"===o)return;i=i.closest("super-tab-button")}return i}onClick(t){if(!t||!t.target)return void this.debug("Got a click event with no target!",t);if(Date.now()-this.touchStartTs<=150)return;const i=this.getButtonFromEv(t);i&&this.onButtonClick(i)}onButtonClick(t){t&&!t.disabled&&(this.lastClickTs=Date.now(),this.setActiveTab(t.index,!0,!0),this.buttonClick.emit(t))}async onTouchStart(t){if(!this.scrollable)return;this.debug("onTouchStart",t);const i=Object(s.f)(t);i.x<this.leftThreshold||i.x>this.width-this.rightThreshold||(this.touchStartTs=Date.now(),this.initialCoords=i,this.lastPosX=i.x)}async onTouchMove(t){if(!this.buttonsContainerEl||!this.scrollable||!this.initialCoords||"number"!=typeof this.lastPosX)return;const i=Object(s.f)(t);if(!this.isDragging){if(!Object(s.c)(i,this.initialCoords,this.config))return void(Math.abs(i.y-this.initialCoords.y)>100&&(this.initialCoords=void 0,this.lastPosX=void 0));this.isDragging=!0}if(!this.isDragging)return;t.stopImmediatePropagation();const o=this.lastPosX-i.x;0!==o&&(this.lastPosX=i.x,requestAnimationFrame(()=>{if(!this.isDragging)return;const t=Object(s.e)(this.buttonsContainerEl,this.buttonsContainerEl.clientWidth,o);t!==this.buttonsContainerEl.scrollLeft&&this.buttonsContainerEl.scroll(t,0)}))}async onTouchEnd(t){var i,o;if(this.lastClickTs<this.touchStartTs&&Date.now()-this.touchStartTs<=150){const e=Object(s.f)(t);if(Math.abs(e.x-(null===(i=this.initialCoords)||void 0===i?void 0:i.x))<(null===(o=this.config)||void 0===o?void 0:o.dragThreshold)){const i=this.getButtonFromEv(t);if(!i)return;this.onButtonClick(i)}}this.isDragging=!1,this.initialCoords=void 0,this.lastPosX=void 0}async onColorUpdate(){this.setHostCls()}setHostCls(){const t={};"string"==typeof this.color&&this.color.trim().length>0&&(t["ion-color-"+this.color.trim()]=!0),this.hostCls=t}async onSlotChange(){this.debug("onSlotChange"),this.updateWidth(),await this.queryButtons(),await this.setActiveTab(this.activeTabIndex,!0)}async queryButtons(){this.debug("Querying buttons");const t=Array.from(this.el.querySelectorAll("super-tab-button"));if(await Promise.all(t.map(t=>t.componentOnReady())),t)for(let i=0;i<t.length;i++){const o=t[i];o.index=i,o.scrollableContainer=this.scrollable,o.active=this.activeTabIndex===i,o.active&&(this.activeButton=o)}this.buttons=t}updateThresholds(){this.config&&("both"!==this.config.sideMenu&&"left"!==this.config.sideMenu||(this.leftThreshold=this.config.sideMenuThreshold),"both"!==this.config.sideMenu&&"right"!==this.config.sideMenu||(this.rightThreshold=this.config.sideMenuThreshold))}markButtonActive(t){t?(this.activeButton&&(this.activeButton.active=!1),t.active=!0,this.activeButton=t):this.debug("markButtonActive","button was undefined!")}setButtonsContainerEl(t){t&&(this.buttonsContainerEl=t)}adjustContainerScroll(t){if(!this.buttonsContainerEl)return void this.debug("adjustContainerScroll called before this.buttonsContainerEl was defined");let i;const o=this.indicatorPosition,e=this.indicatorWidth,n=this.buttonsContainerEl.clientWidth,a=this.buttonsContainerEl.scrollLeft,r=n/2-e/2,l=Math.floor(o+e+r),h=Math.floor(o-r);if(l>Math.floor(n+a))i=o+e+r-n;else{if(!(h<a))return;i=Math.max(o-r,0),i=i>o?o-n+e:i}t?this.moveContainer(i,t):Object(s.g)(this.buttonsContainerEl,i,0,!1,50)}async alignIndicator(t,i=!1){if(!this.showIndicator||!this.indicatorEl)return;this.debug("Aligning indicator",t);const o=t%1,e=this.isDragging=o>0,s=Math.floor(t),n=Math.ceil(t),a=this.buttons[s];if(!a)return;let r=a.offsetLeft,l=a.clientWidth;if(e&&s!==n){const t=this.buttons[n];if(!t)return;r+=o*(t.offsetLeft-r),l+=o*(t.clientWidth-l)}requestAnimationFrame(()=>{this.indicatorPosition=r,this.indicatorWidth=l,this.scrollable&&this.adjustContainerScroll(i||!e),this.indicatorEl.style.setProperty("--st-indicator-position-x",this.indicatorPosition+"px"),this.indicatorEl.style.setProperty("--st-indicator-scale-x",String(this.indicatorWidth/100)),this.indicatorEl.style.setProperty("--st-indicator-transition-duration",this.isDragging?"0":this.config.transitionDuration+"ms")})}debug(...t){Object(s.d)(this.config,"toolbar",t)}render(){return Object(e.g)(e.a,{role:"navigation",class:this.hostCls},Object(e.g)("div",{class:"buttons-container",ref:t=>this.setButtonsContainerEl(t)},Object(e.g)("slot",null),this.showIndicator&&Object(e.g)("super-tab-indicator",{ref:t=>this.indicatorEl=t,toolbarPosition:this.el.assignedSlot.name})))}get el(){return Object(e.f)(this)}static get watchers(){return{color:["onColorUpdate"]}}}a.style=':host{-ms-flex:0 1 auto;flex:0 1 auto;display:block;width:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);position:relative;background:var(--super-tabs-toolbar-background, var(--ion-color-base));overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:auto;-ms-touch-action:pan-x;touch-action:pan-x;z-index:2;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host .buttons-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;width:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);overflow:hidden}:host(:not([no-border])):after{left:0;bottom:-8px;background-position:left 0 top 0;position:absolute;width:100%;height:8px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAIBAMAAAACWGKkAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQCkAAAAB3RSTlMFTEIzJBcOYhQUIwAAAB9JREFUCNdjEIQCBiUoYDCGAgYXKGAIhQKGNChgwAAAorMLKSCkL40AAAAASUVORK5CYII=);background-repeat:repeat-x;content:"";z-index:3;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host([scrollable]) .buttons-container{will-change:scroll-position}:host([scrollable][scrollable-padding]) .buttons-container{padding-left:var(--st-scrollable-toolbar-padding-left, 52px);width:calc(100% - var(--st-scrollable-toolbar-padding-left, $st-scrollable-toolbar-padding-left))}'}}]);