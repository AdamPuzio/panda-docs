"use strict";(self.webpackChunkpanda_website=self.webpackChunkpanda_website||[]).push([[3598],{3974:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=a(4848),o=a(8453);const r={},i="Roadmap",s={id:"entities/command/roadmap",title:"Roadmap",description:"Potential Features",source:"@site/docs/entities/command/05-roadmap.md",sourceDirName:"entities/command",slug:"/entities/command/roadmap",permalink:"/panda-docs/docs/entities/command/roadmap",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/panda-docs/docs/entities/command/examples"},next:{title:"Commands",permalink:"/panda-docs/docs/internal/command"}},c={},d=[{value:"Potential Features",id:"potential-features",level:2},{value:"Chainable Properties",id:"chainable-properties",level:3},{value:"Create via Definition",id:"create-via-definition",level:3},{value:"Command Center",id:"command-center",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"roadmap",children:"Roadmap"}),"\n",(0,t.jsx)(n.h2,{id:"potential-features",children:"Potential Features"}),"\n",(0,t.jsx)(n.p,{children:"Let us know what features you'd like to see in future releases."}),"\n",(0,t.jsx)(n.h3,{id:"chainable-properties",children:"Chainable Properties"}),"\n",(0,t.jsxs)(n.p,{children:["The ability to create a new Command in a chainable format, similar to how ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/commander",children:"CommanderJS"})," works:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { ChainCommand } from '@panda/command'\n\nconst cmd = new ChainCommand()\ncmd.command('foo:create')\n  .name('foo-create')\n  .action()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-via-definition",children:"Create via Definition"}),"\n",(0,t.jsx)(n.p,{children:"The ability to create a new Command via a definition object:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { Command } from '@panda/command'\n\nconst cmd = new Command(`\nThis is a basic command\n\nUsage:\n  basic-cmd [name] [OPTIONS]\n\nArguments:\n  name                                  The name of the thing\n\nOptions:\n  --log-level <level>                   Set the log level\n  --log-format <log-format>             Set the logging output format\n  --file <file...>                      The file(s) to read\n  --debug                               Run debug mode\n  -v, --version                         Show version\n`)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"command-center",children:"Command Center"}),"\n",(0,t.jsx)(n.p,{children:"A central hub that acts as the container for a set of Commands, often as a full CLI:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { CommandCenter } from '@panda/command'\nimport { createProject, readProject, updateProject, deleteProject } from './commands'\n\nconst MyCLI = new CommandCenter({\n  name: 'project',\n  commands: [\n    createProject,\n    readProject,\n    updateProject,\n    deleteProject\n  ]\n})\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var t=a(6540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);