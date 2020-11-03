(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1196:function(n,s){n.exports={content:["article",["blockquote",["p","前言： 在后续子应用 UI 改造过程中，可能需要添加新的样式规范，可参照以下进行开发。"]],["p","项目目录介绍："],["pre",{lang:"bash",highlighted:"├── bisheng.config.js // bisheng 文档工具基本配置\n├── components    // Components 展示内容\n│   └── treeselect    // 单个组件 预览文件\n│       ├── demo    // 代码演示\n│       │   ├── basic.md    // 单个 demo 文件\n│       │   └── shadow.md\n│       └── index.zh-CN.md    // 组件说明文档\n├── docs\n│   └── react    // 全局说明文档\n│       ├── change-log.zh-CN.md\n│       ├── color.zh-CN.md\n│       ├── font.zh-CN.md\n│       └── getting-started.zh-CN.md\n└── theme    // 本站主题文档\n    └── dt-theme    // 数栈UI规范样式文件\n        ├── breadcrumb.less\n        ├── button.less\n        ├── card.less\n        ├── comm.less\n        ├── const.less\n        ├── const.scss\n        ├── form.less\n        ├── index.less\n        ├── layout.less\n        ├── modal.less\n        ├── notice.less\n        ├── reset.less\n        ├── tab.less\n        └── table.less"},["code","├── bisheng.config.js // bisheng 文档工具基本配置\n├── components    // Components 展示内容\n│   └── treeselect    // 单个组件 预览文件\n│       ├── demo    // 代码演示\n│       │   ├── basic.md    // 单个 demo 文件\n│       │   └── shadow.md\n│       └── index.zh-CN.md    // 组件说明文档\n├── docs\n│   └── react    // 全局说明文档\n│       ├── change-log.zh-CN.md\n│       ├── color.zh-CN.md\n│       ├── font.zh-CN.md\n│       └── getting-started.zh-CN.md\n└── theme    // 本站主题文档\n    └── dt-theme    // 数栈UI规范样式文件\n        ├── breadcrumb.less\n        ├── button.less\n        ├── card.less\n        ├── comm.less\n        ├── const.less\n        ├── const.scss\n        ├── form.less\n        ├── index.less\n        ├── layout.less\n        ├── modal.less\n        ├── notice.less\n        ├── reset.less\n        ├── tab.less\n        └── table.less"]],["p","1、 添加样式"],["p","规范样式都是放在",["code","/theme/dt-theme"],"目录下的，可在对应的组件文件或添加新的文件进行样式的添加，特别的新添加的样式文件需要在",["code","/theme/dt-theme/index.less"],"中导入。（自定义样式名规范见文章末尾）"],["p","2、 组件说明文档开发"],["p",["code","/components"],"目录下存放的是所有组件的说明文档，根据组件类型进行目录的划分。"],["p","新添加的组件文件需要在",["code","/components"],"目录下新建目录存放。新目录中需包含",["code","demo"],"文件夹用于存放代码演示示例，以及",["code","index.zh-CN.md"],"文件用于对组件进行说明。"],["p","3、 index.zh-CN.md"],["p","在组件说明文件开头，必须添加组件相关的一些配置，具体配置如下。"],["pre",{lang:"text",highlighted:'<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\ncategory<span class="token punctuation">:</span> Components    <span class="token operator">/</span><span class="token operator">/</span> 侧边栏导航所属分类\ntype<span class="token punctuation">:</span> 通用    <span class="token operator">/</span><span class="token operator">/</span> 组件类型\ntitle<span class="token punctuation">:</span> Button    <span class="token operator">/</span><span class="token operator">/</span> 组件名称\nsubtitle<span class="token punctuation">:</span> 按钮    <span class="token operator">/</span><span class="token operator">/</span> 组件中文名称\ncols<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token operator">/</span><span class="token operator">/</span> 每行展示代码演示列数\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>'},["code","---\ncategory: Components    // 侧边栏导航所属分类\ntype: 通用    // 组件类型\ntitle: Button    // 组件名称\nsubtitle: 按钮    // 组件中文名称\ncols: 1 // 每行展示代码演示列数\n---"]],["p","之后就可以在文件中添加其他组件信息说明文字了。"],["p","4、 demo"],["p",["code","demo"],"文件夹用于存放代码演示示例，在该目录中添加的 md 文档用于对组件使用进行举例。但这类 md 文档有一定的编写规范。"],["p","下面就 Button 示例文件进行举例说明。"],["pre",{lang:"text",highlighted:'<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\norder<span class="token punctuation">:</span> <span class="token number">0</span>    <span class="token operator">/</span><span class="token operator">/</span> 代码演示中的顺序\ntitle<span class="token punctuation">:</span>\n  zh<span class="token operator">-</span>CN<span class="token punctuation">:</span> 按钮类型    <span class="token operator">/</span><span class="token operator">/</span> 代码演示名称\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\n\n## zh<span class="token operator">-</span>CN\n\n数栈的按钮分为一级按钮，二级按钮，幽灵按钮，文字按钮等。'},["code","---\norder: 0    // 代码演示中的顺序\ntitle:\n  zh-CN: 按钮类型    // 代码演示名称\n---\n\n## zh-CN\n\n数栈的按钮分为一级按钮，二级按钮，幽灵按钮，文字按钮等。"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo-button-type<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>一级按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>二级按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">ghost</span><span class="token punctuation">></span></span>幽灵按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'import { Button } from \'antd\';\n\nReactDOM.render(\n  <div className="demo-button-type">\n    <Button type="primary">一级按钮</Button>\n    <Button>二级按钮</Button>\n    <Button ghost>幽灵按钮</Button>\n    <Button type="link">文字按钮</Button>\n  </div>,\n  mountNode,\n);']],["pre",{lang:"css",highlighted:'<span class="token selector"><span class="token class">.demo</span> </span><span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code",".demo {\n    background: '#fff';\n}"]],["ul",["li",["p","在示例文档开头,定义示例的一些配置"]],["li",["p",["code","## zh-CN"]," 后面对代码示例进行说明"]],["li",["p","添加 jsx 编辑示例代码"]],["li",["p","添加 css 对样式进行展示说明"]]],["h4","附：CSS 命名规范"],["p",["strong","基本规则："]],["blockquote",["p","前缀 - 组件名（模块名）- 修饰词（可接多个单词以 ‘-’ 进行分隔）"]],["p","基本样式名由前缀、组件名（模块名）、修饰词组成，以 ’-‘ 进行连接。其中统一前缀为 ",["code","dt"]," 。"],["p","如样式名：",["code","dt-table-fixed"]," , ",["code","dt-pagination-padding-smaller"]," , ",["code","dt-status-danger"]]],meta:{order:1,title:"theme 项目开发指南",filename:"docs/react/develop.zh-CN.md"},toc:["ul"]}}}]);