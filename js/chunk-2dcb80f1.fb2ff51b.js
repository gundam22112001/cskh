(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dcb80f1"],{2532:function(t,e,n){"use strict";var c=n("23e7"),r=n("e330"),o=n("5a34"),i=n("1d80"),u=n("577e"),a=n("ab13"),l=r("".indexOf);c({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~l(u(i(this)),u(o(t)),arguments.length>1?arguments[1]:void 0)}})},"498a":function(t,e,n){"use strict";var c=n("23e7"),r=n("58a8").trim,o=n("c8d2");c({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},"4de4":function(t,e,n){"use strict";var c=n("23e7"),r=n("b727").filter,o=n("1dde"),i=o("filter");c({target:"Array",proto:!0,forced:!i},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var c=n("e330"),r=n("1d80"),o=n("577e"),i=n("5899"),u=c("".replace),a="["+i+"]",l=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),d=function(t){return function(e){var n=o(r(e));return 1&t&&(n=u(n,l,"")),2&t&&(n=u(n,s,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},"5a34":function(t,e,n){var c=n("da84"),r=n("44e7"),o=c.TypeError;t.exports=function(t){if(r(t))throw o("The method doesn't accept regular expressions");return t}},"88b3":function(t,e,n){"use strict";n("f5f1")},ab13:function(t,e,n){var c=n("b622"),r=c("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(c){}}return!1}},b64b:function(t,e,n){var c=n("23e7"),r=n("7b0b"),o=n("df75"),i=n("d039"),u=i((function(){o(1)}));c({target:"Object",stat:!0,forced:u},{keys:function(t){return o(r(t))}})},bee2:function(t,e,n){"use strict";function c(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function r(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,"a",(function(){return r}))},c3fb:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("a4d3"),n("e01a");var c=n("7a23"),r=function(t){return Object(c["C"])("data-v-7316c44c"),t=t(),Object(c["A"])(),t},o={class:"grid"},i={class:"col-12"},u={class:"card"},a={class:"my-2"},l={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},s=r((function(){return Object(c["j"])("h5",{class:"m-0"},"Manage Products",-1)})),d={class:"block mt-2 md:mt-0 p-input-icon-left"},b=r((function(){return Object(c["j"])("i",{class:"pi pi-search"},null,-1)})),f=r((function(){return Object(c["j"])("span",{class:"p-column-title"},"Code",-1)})),p=r((function(){return Object(c["j"])("span",{class:"p-column-title"},"Name",-1)})),j=r((function(){return Object(c["j"])("span",{class:"p-column-title"},"Image",-1)})),O=["src","alt"],m=r((function(){return Object(c["j"])("span",{class:"p-column-title"},"Price",-1)})),h=r((function(){return Object(c["j"])("span",{class:"p-column-title"},"Category",-1)})),g=r((function(){return Object(c["j"])("span",{class:"p-column-title"},"Rating",-1)})),y=r((function(){return Object(c["j"])("span",{class:"p-column-title"},"Status",-1)})),v=["src","alt"],P={class:"field"},w=r((function(){return Object(c["j"])("label",{for:"name"},"Name",-1)})),S={key:0,class:"p-invalid"},k={class:"field"},C=r((function(){return Object(c["j"])("label",{for:"description"},"Description",-1)})),D={class:"field"},x=r((function(){return Object(c["j"])("label",{for:"inventoryStatus",class:"mb-3"},"Inventory Status",-1)})),V={key:0},R={key:1},L={key:2},U={class:"field"},I=r((function(){return Object(c["j"])("label",{class:"mb-3"},"Category",-1)})),T={class:"formgrid grid"},N={class:"field-radiobutton col-6"},_=r((function(){return Object(c["j"])("label",{for:"category1"},"Accessories",-1)})),H={class:"field-radiobutton col-6"},z=r((function(){return Object(c["j"])("label",{for:"category2"},"Clothing",-1)})),A={class:"field-radiobutton col-6"},E=r((function(){return Object(c["j"])("label",{for:"category3"},"Electronics",-1)})),F={class:"field-radiobutton col-6"},q=r((function(){return Object(c["j"])("label",{for:"category4"},"Fitness",-1)})),M={class:"formgrid grid"},K={class:"field col"},$=r((function(){return Object(c["j"])("label",{for:"price"},"Price",-1)})),B={class:"field col"},J=r((function(){return Object(c["j"])("label",{for:"quantity"},"Quantity",-1)})),W={class:"flex align-items-center justify-content-center"},Y=r((function(){return Object(c["j"])("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)})),Q={key:0},G=Object(c["m"])("Are you sure you want to delete "),X=Object(c["m"])("?"),Z={class:"flex align-items-center justify-content-center"},tt=r((function(){return Object(c["j"])("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)})),et={key:0};function nt(t,e,n,r,nt,ct){var rt=Object(c["H"])("Toast"),ot=Object(c["H"])("Button"),it=Object(c["H"])("FileUpload"),ut=Object(c["H"])("Toolbar"),at=Object(c["H"])("InputText"),lt=Object(c["H"])("Column"),st=Object(c["H"])("Rating"),dt=Object(c["H"])("DataTable"),bt=Object(c["H"])("Textarea"),ft=Object(c["H"])("Dropdown"),pt=Object(c["H"])("RadioButton"),jt=Object(c["H"])("InputNumber"),Ot=Object(c["H"])("Dialog");return Object(c["z"])(),Object(c["i"])("div",o,[Object(c["j"])("div",i,[Object(c["j"])("div",u,[Object(c["n"])(rt),Object(c["n"])(ut,{class:"mb-4"},{start:Object(c["R"])((function(){return[Object(c["j"])("div",a,[Object(c["n"])(ot,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:ct.openNew},null,8,["onClick"]),Object(c["n"])(ot,{label:"Delete",icon:"pi pi-trash",class:"p-button-danger",onClick:ct.confirmDeleteSelected,disabled:!nt.selectedProducts||!nt.selectedProducts.length},null,8,["onClick","disabled"])])]})),end:Object(c["R"])((function(){return[Object(c["n"])(it,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",class:"mr-2 inline-block"}),Object(c["n"])(ot,{label:"Export",icon:"pi pi-upload",class:"p-button-help",onClick:e[0]||(e[0]=function(t){return ct.exportCSV(t)})})]})),_:1}),Object(c["n"])(dt,{ref:"dt",value:nt.products,selection:nt.selectedProducts,"onUpdate:selection":e[2]||(e[2]=function(t){return nt.selectedProducts=t}),dataKey:"id",paginator:!0,rows:10,filters:nt.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(c["R"])((function(){return[Object(c["j"])("div",l,[s,Object(c["j"])("span",d,[b,Object(c["n"])(at,{modelValue:nt.filters["global"].value,"onUpdate:modelValue":e[1]||(e[1]=function(t){return nt.filters["global"].value=t}),placeholder:"Search..."},null,8,["modelValue"])])])]})),default:Object(c["R"])((function(){return[Object(c["n"])(lt,{selectionMode:"multiple",headerStyle:"width: 3rem"}),Object(c["n"])(lt,{field:"code",header:"Code",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(c["R"])((function(t){return[f,Object(c["m"])(" "+Object(c["L"])(t.data.code),1)]})),_:1}),Object(c["n"])(lt,{field:"name",header:"Name",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(c["R"])((function(t){return[p,Object(c["m"])(" "+Object(c["L"])(t.data.name),1)]})),_:1}),Object(c["n"])(lt,{header:"Image",headerStyle:"width:14%; min-width:10rem;"},{body:Object(c["R"])((function(t){return[j,Object(c["j"])("img",{src:"images/product/"+t.data.image,alt:t.data.image,class:"shadow-2",width:"100"},null,8,O)]})),_:1}),Object(c["n"])(lt,{field:"price",header:"Price",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:Object(c["R"])((function(t){return[m,Object(c["m"])(" "+Object(c["L"])(ct.formatCurrency(t.data.price)),1)]})),_:1}),Object(c["n"])(lt,{field:"category",header:"Category",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(c["R"])((function(t){return[h,Object(c["m"])(" "+Object(c["L"])(ct.formatCurrency(t.data.category)),1)]})),_:1}),Object(c["n"])(lt,{field:"rating",header:"Reviews",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(c["R"])((function(t){return[g,Object(c["n"])(st,{modelValue:t.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]})),_:1}),Object(c["n"])(lt,{field:"inventoryStatus",header:"Status",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(c["R"])((function(t){return[y,Object(c["j"])("span",{class:Object(c["u"])("product-badge status-"+(t.data.inventoryStatus?t.data.inventoryStatus.toLowerCase():""))},Object(c["L"])(t.data.inventoryStatus),3)]})),_:1}),Object(c["n"])(lt,{headerStyle:"min-width:10rem;"},{body:Object(c["R"])((function(t){return[Object(c["n"])(ot,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:function(e){return ct.editProduct(t.data)}},null,8,["onClick"]),Object(c["n"])(ot,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:function(e){return ct.confirmDeleteProduct(t.data)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value","selection","filters"]),Object(c["n"])(Ot,{visible:nt.productDialog,"onUpdate:visible":e[12]||(e[12]=function(t){return nt.productDialog=t}),style:{width:"450px"},header:"Product Details",modal:!0,class:"p-fluid"},{footer:Object(c["R"])((function(){return[Object(c["n"])(ot,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:ct.hideDialog},null,8,["onClick"]),Object(c["n"])(ot,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:ct.saveProduct},null,8,["onClick"])]})),default:Object(c["R"])((function(){return[nt.product.image?(Object(c["z"])(),Object(c["i"])("img",{key:0,src:"images/product/"+nt.product.image,alt:nt.product.image,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},null,8,v)):Object(c["h"])("",!0),Object(c["j"])("div",P,[w,Object(c["n"])(at,{id:"name",modelValue:nt.product.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return nt.product.name=t}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(c["u"])({"p-invalid":nt.submitted&&!nt.product.name})},null,8,["modelValue","class"]),nt.submitted&&!nt.product.name?(Object(c["z"])(),Object(c["i"])("small",S,"Name is required.")):Object(c["h"])("",!0)]),Object(c["j"])("div",k,[C,Object(c["n"])(bt,{id:"description",modelValue:nt.product.description,"onUpdate:modelValue":e[4]||(e[4]=function(t){return nt.product.description=t}),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])]),Object(c["j"])("div",D,[x,Object(c["n"])(ft,{id:"inventoryStatus",modelValue:nt.product.inventoryStatus,"onUpdate:modelValue":e[5]||(e[5]=function(t){return nt.product.inventoryStatus=t}),options:nt.statuses,optionLabel:"label",placeholder:"Select a Status"},{value:Object(c["R"])((function(t){return[t.value&&t.value.value?(Object(c["z"])(),Object(c["i"])("div",V,[Object(c["j"])("span",{class:Object(c["u"])("product-badge status-"+t.value.value)},Object(c["L"])(t.value.label),3)])):t.value&&!t.value.value?(Object(c["z"])(),Object(c["i"])("div",R,[Object(c["j"])("span",{class:Object(c["u"])("product-badge status-"+t.value.toLowerCase())},Object(c["L"])(t.value),3)])):(Object(c["z"])(),Object(c["i"])("span",L,Object(c["L"])(t.placeholder),1))]})),_:1},8,["modelValue","options"])]),Object(c["j"])("div",U,[I,Object(c["j"])("div",T,[Object(c["j"])("div",N,[Object(c["n"])(pt,{id:"category1",name:"category",value:"Accessories",modelValue:nt.product.category,"onUpdate:modelValue":e[6]||(e[6]=function(t){return nt.product.category=t})},null,8,["modelValue"]),_]),Object(c["j"])("div",H,[Object(c["n"])(pt,{id:"category2",name:"category",value:"Clothing",modelValue:nt.product.category,"onUpdate:modelValue":e[7]||(e[7]=function(t){return nt.product.category=t})},null,8,["modelValue"]),z]),Object(c["j"])("div",A,[Object(c["n"])(pt,{id:"category3",name:"category",value:"Electronics",modelValue:nt.product.category,"onUpdate:modelValue":e[8]||(e[8]=function(t){return nt.product.category=t})},null,8,["modelValue"]),E]),Object(c["j"])("div",F,[Object(c["n"])(pt,{id:"category4",name:"category",value:"Fitness",modelValue:nt.product.category,"onUpdate:modelValue":e[9]||(e[9]=function(t){return nt.product.category=t})},null,8,["modelValue"]),q])])]),Object(c["j"])("div",M,[Object(c["j"])("div",K,[$,Object(c["n"])(jt,{id:"price",modelValue:nt.product.price,"onUpdate:modelValue":e[10]||(e[10]=function(t){return nt.product.price=t}),mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue"])]),Object(c["j"])("div",B,[J,Object(c["n"])(jt,{id:"quantity",modelValue:nt.product.quantity,"onUpdate:modelValue":e[11]||(e[11]=function(t){return nt.product.quantity=t}),integeronly:""},null,8,["modelValue"])])])]})),_:1},8,["visible"]),Object(c["n"])(Ot,{visible:nt.deleteProductDialog,"onUpdate:visible":e[14]||(e[14]=function(t){return nt.deleteProductDialog=t}),style:{width:"450px"},header:"Confirm",modal:!0},{footer:Object(c["R"])((function(){return[Object(c["n"])(ot,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[13]||(e[13]=function(t){return nt.deleteProductDialog=!1})}),Object(c["n"])(ot,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:ct.deleteProduct},null,8,["onClick"])]})),default:Object(c["R"])((function(){return[Object(c["j"])("div",W,[Y,nt.product?(Object(c["z"])(),Object(c["i"])("span",Q,[G,Object(c["j"])("b",null,Object(c["L"])(nt.product.name),1),X])):Object(c["h"])("",!0)])]})),_:1},8,["visible"]),Object(c["n"])(Ot,{visible:nt.deleteProductsDialog,"onUpdate:visible":e[16]||(e[16]=function(t){return nt.deleteProductsDialog=t}),style:{width:"450px"},header:"Confirm",modal:!0},{footer:Object(c["R"])((function(){return[Object(c["n"])(ot,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[15]||(e[15]=function(t){return nt.deleteProductsDialog=!1})}),Object(c["n"])(ot,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:ct.deleteSelectedProducts},null,8,["onClick"])]})),default:Object(c["R"])((function(){return[Object(c["j"])("div",Z,[tt,nt.product?(Object(c["z"])(),Object(c["i"])("span",et,"Are you sure you want to delete the selected products?")):Object(c["h"])("",!0)])]})),_:1},8,["visible"])])])])}var ct=n("5530"),rt=(n("498a"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("0393")),ot=n("e9c0"),it={data:function(){return{products:null,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:{},selectedProducts:null,filters:{},submitted:!1,statuses:[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}},productService:null,created:function(){this.productService=new ot["a"],this.initFilters()},mounted:function(){var t=this;this.productService.getProducts().then((function(e){return t.products=e}))},methods:{formatCurrency:function(t){if(t)return t.toLocaleString("en-US",{style:"currency",currency:"USD"})},openNew:function(){this.product={},this.submitted=!1,this.productDialog=!0},hideDialog:function(){this.productDialog=!1,this.submitted=!1},saveProduct:function(){this.submitted=!0,this.product.name.trim()&&(this.product.id?(this.product.inventoryStatus=this.product.inventoryStatus.value?this.product.inventoryStatus.value:this.product.inventoryStatus,this.products[this.findIndexById(this.product.id)]=this.product,this.$toast.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.code=this.createId(),this.product.image="product-placeholder.svg",this.product.inventoryStatus=this.product.inventoryStatus?this.product.inventoryStatus.value:"INSTOCK",this.products.push(this.product),this.$toast.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.productDialog=!1,this.product={})},editProduct:function(t){this.product=Object(ct["a"])({},t),this.productDialog=!0},confirmDeleteProduct:function(t){this.product=t,this.deleteProductDialog=!0},deleteProduct:function(){var t=this;this.products=this.products.filter((function(e){return e.id!==t.product.id})),this.deleteProductDialog=!1,this.product={},this.$toast.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},findIndexById:function(t){for(var e=-1,n=0;n<this.products.length;n++)if(this.products[n].id===t){e=n;break}return e},createId:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<5;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},exportCSV:function(){this.$refs.dt.exportCSV()},confirmDeleteSelected:function(){this.deleteProductsDialog=!0},deleteSelectedProducts:function(){var t=this;this.products=this.products.filter((function(e){return!t.selectedProducts.includes(e)})),this.deleteProductsDialog=!1,this.selectedProducts=null,this.$toast.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},initFilters:function(){this.filters={global:{value:null,matchMode:rt["a"].CONTAINS}}}}},ut=(n("88b3"),n("6b0d")),at=n.n(ut);const lt=at()(it,[["render",nt],["__scopeId","data-v-7316c44c"]]);e["default"]=lt},c8d2:function(t,e,n){var c=n("5e77").PROPER,r=n("d039"),o=n("5899"),i="​᠎";t.exports=function(t){return r((function(){return!!o[t]()||i[t]()!==i||c&&o[t].name!==t}))}},caad:function(t,e,n){"use strict";var c=n("23e7"),r=n("4d64").includes,o=n("d039"),i=n("44d2"),u=o((function(){return!Array(1).includes()}));c({target:"Array",proto:!0,forced:u},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d4ec:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("d9e2");function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},dbb4:function(t,e,n){var c=n("23e7"),r=n("83ab"),o=n("56ef"),i=n("fc6a"),u=n("06cf"),a=n("8418");c({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,c=i(t),r=u.f,l=o(c),s={},d=0;while(l.length>d)n=r(c,e=l[d++]),void 0!==n&&a(s,e,n);return s}})},e439:function(t,e,n){var c=n("23e7"),r=n("d039"),o=n("fc6a"),i=n("06cf").f,u=n("83ab"),a=r((function(){i(1)})),l=!u||a;c({target:"Object",stat:!0,forced:l,sham:!u},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},e9c0:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n("d4ec"),r=n("bee2"),o=(n("d3b7"),function(){function t(){Object(c["a"])(this,t)}return Object(r["a"])(t,[{key:"getProductsSmall",value:function(){return fetch("data/products-small.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getProducts",value:function(){return fetch("data/products.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("data/products-orders-small.json").then((function(t){return t.json()})).then((function(t){return t.data}))}}]),t}())},f5f1:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2dcb80f1.fb2ff51b.js.map