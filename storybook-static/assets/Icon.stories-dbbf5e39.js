import{j as t,a as r,F as l}from"./emotion-react-jsx-runtime.browser.esm-415e3999.js";import{I as a,i as c,c as p}from"./Icon-d5a92470.js";import"./jsx-runtime-238b5308.js";import"./index-fd0a9805.js";import"./_commonjsHelpers-725317a4.js";import"./index-2baff29e.js";const O=p("div",{target:"e1dhe5we2"})({name:"qp2n5j",styles:"color:#666;font-size:12px"});var S={name:"1fizidn",styles:"flex:none;min-width:auto;padding:0;background:#fff;border:1px solid #666;svg{display:block;margin-right:0;width:48px;height:48px;}"};const j=p("li",{target:"e1dhe5we1"})("display:inline-flex;flex-direction:row;align-items:center;flex:0 1 20%;min-width:120px;padding:0px 7.5px 20px;svg{margin-right:10px;width:24px;height:24px;}",e=>e.minimal&&S,";"),L=p("ul",{target:"e1dhe5we0"})({name:"14hrywh",styles:"display:flex;flex-flow:row wrap;list-style:none"}),F={title:"Design System/Icon",component:a},n={render:()=>t(l,{children:["There are ",Object.keys(c).length," icons",r(L,{children:Object.keys(c).map(e=>t(j,{children:[r(a,{icon:e,"aria-hidden":!0}),r(O,{children:e})]},e))})]})},s={name:"no labels",render:()=>r(L,{children:Object.keys(c).map(e=>r(j,{minimal:!0,children:r(a,{icon:e,"aria-label":e})},e))})},i={render:e=>t(l,{children:["this is an inline ",r(a,{...e})," icon (default)"]}),args:{icon:"facehappy","aria-label":"Happy face"}},o={render:e=>t(l,{children:["this is a block ",r(a,{...e})," icon"]}),args:{icon:"facehappy","aria-label":"Happy face",block:!0}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>\r
      There are {Object.keys(icons).length} icons\r
      <List>\r
        {Object.keys(icons).map(key => <Item key={key}>\r
            <Icon icon={key} aria-hidden />\r
            <Meta>{key}</Meta>\r
          </Item>)}\r
      </List>\r
    </>
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'no labels',
  render: () => <List>\r
      {Object.keys(icons).map(key => <Item minimal key={key}>\r
          <Icon icon={key} aria-label={key} />\r
        </Item>)}\r
    </List>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,u,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <>\r
      this is an inline <Icon {...args} /> icon (default)\r
    </>,
  args: {
    icon: 'facehappy',
    'aria-label': 'Happy face'
  }
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var k,I,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <>\r
      this is a block <Icon {...args} /> icon\r
    </>,
  args: {
    icon: 'facehappy',
    'aria-label': 'Happy face',
    block: true
  }
}`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const N=["Labels","NoLabels","Inline","Block"];export{o as Block,i as Inline,n as Labels,s as NoLabels,N as __namedExportsOrder,F as default};
//# sourceMappingURL=Icon.stories-dbbf5e39.js.map
